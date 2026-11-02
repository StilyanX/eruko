# Put Eruko on a web server

These steps serve Eruko from your own server and upload new versions over a slow or unsteady link. Each command can run again after a dropped connection: it picks up where it stopped.

## What the server must do

1. Serve over https with HTTP/2. The app is hundreds of small files: over HTTP/1.1 the browser fetches them six at a time, and the first visit is slower.
2. Send each file Brotli-compressed, or gzip-compressed if the browser asks for that. The steps below compress each file once, on the server, so the web server only picks the ready file.
3. Serve the app at `/eruko/`. Send every address under `/eruko/` that is no file to `/eruko/index.html`.
4. Send `Cache-Control: no-cache` with every file. The app keeps its own copy of every file and checks each against its list of hashes, so the browser only asks the server whether a file changed.
5. Send `.wasm` as `application/wasm` and `.mjs` as `text/javascript`.

Add no Content-Security-Policy header: the page carries its own.

A web server keeps no shared record: each browser keeps its own. Only `npm start` keeps the record on the computer it runs on (README, "Your records").

## What a learner downloads

- First visit: the first page shows after about 650 KB.
- After that, in the background: the whole app once, about 2 MB with Brotli (11 MB uncompressed). Every page then opens with no connection.
- A new version: only the files that changed.

## 1. Set up the server, once

On the server (Debian or Ubuntu; other systems have the same packages):

```bash
sudo apt install rsync brotli caddy
sudo mkdir -p /srv/eruko/releases /srv/eruko/site
sudo chown -R "$USER" /srv/eruko
```

Write `/etc/caddy/Caddyfile`, with your domain in place of `example.org`. Caddy gets the https certificate by itself and serves HTTP/2:

```caddy
example.org {
	redir / /eruko/
	redir /eruko /eruko/
	root * /srv/eruko/site
	header Cache-Control no-cache
	try_files {path} /eruko/index.html
	file_server {
		precompressed br gzip
	}
}
```

Then `sudo systemctl reload caddy`.

If the server already runs nginx (1.25.1 or later), use this server block instead. `brotli_static` needs the ngx_brotli module (Debian 12 and later: `sudo apt install libnginx-mod-http-brotli-static`); without it, delete that line and nginx sends gzip.

```nginx
server {
    listen 443 ssl;
    http2 on;
    server_name example.org;
    ssl_certificate     /etc/letsencrypt/live/example.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.org/privkey.pem;

    root /srv/eruko/site;
    add_header Cache-Control no-cache;
    gzip_static on;
    brotli_static on;

    location = / { return 302 /eruko/; }
    location ~ \.mjs$ { types { } default_type text/javascript; }
    location /eruko/ { try_files $uri $uri/ /eruko/index.html; }
}
```

The `.mjs` line is needed: nginx's own type list sends `.mjs` as plain text, and the browser then refuses to run it. Then `sudo nginx -t && sudo systemctl reload nginx`.

## 2. Upload a version

On your computer, in the Eruko folder. Set `HOST` to your server's ssh name:

```bash
HOST=you@example.org
R=$(git rev-parse --short HEAD)
SSH='ssh -o ServerAliveInterval=15 -o ServerAliveCountMax=8'
npm run gen && git diff --quiet || echo 'Stop: generate and commit before you upload'
```

Send the files. Only the bytes that changed since the version being served cross the link; the rest are linked from it on the server. The served version does not change during the upload, so a dropped link breaks nothing: run the same command again.

```bash
rsync -rltcz --partial --link-dest=/srv/eruko/site/eruko/ -e "$SSH" src/ "$HOST:/srv/eruko/releases/$R/"
```

Compress each file on the server, then switch to the new version in one step:

```bash
$SSH "$HOST" "cd /srv/eruko && \
  find releases/$R -type f -regex '.*\.\(html\|js\|mjs\|css\|json\|svg\|wasm\)' -exec brotli -kfq 11 {} + -exec gzip -kfn9 {} + && \
  ln -sfn ../releases/$R site/eruko.new && mv -T site/eruko.new site/eruko"
```

Compressing takes about a minute of processor time. On the first upload, `rsync` says the `--link-dest` folder does not exist; it then sends every file, which is right.

## 3. Check it

From any computer:

```bash
U=https://example.org/eruko
curl -sI --http2 "$U/" | head -1                                             # HTTP/2 200
curl -sI -H 'Accept-Encoding: br' "$U/sw.js" | grep -i '^content-encoding'   # br
curl -sI "$U/sw.js" | grep -i '^cache-control'                               # no-cache
curl -sI "$U/record/sqlite-3.54.0/sqlite3.wasm" | grep -i '^content-type'    # application/wasm
curl -sI "$U/record/sqlite-3.54.0/sqlite3.mjs" | grep -i '^content-type'     # text/javascript
curl -s -o /dev/null -w '%{http_code} %{content_type}\n' "$U/explore/mathematics"   # 200 text/html
```

Then open the address in a browser: the page titled "Units" shows.

## 4. Go back to an earlier version

```bash
$SSH "$HOST" 'ls -t /srv/eruko/releases'
$SSH "$HOST" 'cd /srv/eruko && ln -sfn ../releases/<version> site/eruko.new && mv -T site/eruko.new site/eruko'
```

Delete all but the three newest versions and the one being served:

```bash
$SSH "$HOST" 'cd /srv/eruko/releases && c=$(basename "$(readlink ../site/eruko)") && ls -t | tail -n +4 | grep -vx "$c" | xargs -r rm -rf'
```
