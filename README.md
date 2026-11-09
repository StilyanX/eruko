# Eruko

Try it at https://stilyanx.github.io/eruko/. You install nothing, and your records stay in your browser.

Eruko is a free study app for every learner. It runs in a browser. It has no account and no tracking, and your records stay on your own devices.

You can open any page at any time.

## Units

Each unit teaches one subject. A unit's Start page says what the unit needs before its first session. A unit is its folder in `src/units/`: `npm run gen` lists every folder there for the app, so a unit is added or removed with its folder and `npm run gen`. [`STATUS.md`](STATUS.md) labels each unit Draft, Testing or Ready. [`PRACTICE.md`](PRACTICE.md) says what comes back for practice, and when.

| Unit | Discipline | Course |
| --- | --- | --- |
| Arithmetic | Mathematics | 51 topics in 7 sections, number facts, mixed practice and an end level |
| Augustus | Biography | 56 lessons |
| Go course | Go | The rules of Go in 5 parts, then 22 kinds of problem in 3 sections |
| C++ course | Programming | 74 kinds of program in 2 sections, then the language track: 304 kinds in 9 stages |

## What Eruko refuses

Anything below, found in the app, is a defect.

- A point, badge, coin, level, streak or unlock given for starting, finishing or scoring on a task
- A notification you did not ask for
- Advertising on a screen where you read
- Another learner's rank shown to you
- A task that joins learners without one shared goal and a part each learner answers for
- The app using your data to keep you going without your choice
- A list that loads more items as you scroll
- A feature judged by how learners perform during the lesson itself

## Your records

Your records stay on your own devices. Eruko sends nothing about you to anyone, except what a service in "Services outside your browser" needs when you use it. Each browser keeps the record in its own storage, and clearing the browser's data erases that copy.

Served by `npm start`, Eruko also keeps the record on the computer that serves it, in `~/.local/share/eruko` or the folder `ERUKO_DATA` names, so every device that opens it there shares one record. A save made while that computer is out of reach waits in the browser and goes when it is back. With `ERUKO_DATA=off`, each browser keeps its own record alone. A plain web server ([`DEPLOY.md`](DEPLOY.md)) keeps no record.

Settings saves a backup file in JSON, a plain text format. Loading a backup file replaces every record.

## Run it

You need git, Node.js 22.12 or later and npm. If you already hold the code, open a terminal in the folder that holds `package.json` and start at step 2.

1. Get the code and open its folder.

   ```bash
   git clone https://github.com/StilyanX/eruko.git
   cd eruko
   ```

2. Install the packages. They are only the tools that generate files and check the code: the app itself runs none of them.

   ```bash
   npm install
   ```

3. Serve the app on your computer. The terminal prints "Eruko at http://127.0.0.1:9999/eruko/".

   ```bash
   npm start
   ```

4. Open http://127.0.0.1:9999/eruko/ in the browser. It shows a page titled "Units": a search field, then the units grouped by discipline. To use another port, run `node scripts/serve.mjs <port>`.

The app has no build: the browser loads the files in `src/` as they are written. After the first visit, every page opens with no connection. The browser tests run in Chromium only; other browsers are not tested.

### Put it on a web server

Serve the folder `src/` under the path `/eruko/`, over https with HTTP/2 and Brotli or gzip. [`DEPLOY.md`](DEPLOY.md) gives the steps: the server settings for Caddy or nginx, an upload that survives a slow or dropped link, and the checks.

## Services outside your browser

Eruko runs without any of these. [`scripts/lib/csp.mjs`](scripts/lib/csp.mjs) sets the page's Content-Security-Policy, the browser rule that lets the page contact only itself and these hosts. [`NOTICE`](NOTICE) gives each address.

| Feature | Service | What it needs |
| --- | --- | --- |
| Your public Go rating and games | Online Go Server (OGS) | A connection and your OGS user name, typed on Go's Start page. No login is used |
| Go game review | The Go relay and KataGo, a Go engine | KataGo installed and the relay running, both on your computer. The steps are below |
| C++ programs, run and checked | The C++ runner | GCC 14 or later and the runner running, both on your computer. The steps are below |

## Start the Go relay

Install KataGo. Go's Start page names the release and the network file. Then name the program, the network file and the analysis config to the relay once.

```bash
npm run go-relay -- --katago <program> --model <network file> --config <analysis config>
```

The relay prints a line that starts "The relay answers at". Leave it running while you use Go. Later, start it with `npm run go-relay`. If Eruko is open at an address other than `http://127.0.0.1:9999` or `http://localhost:9999`, add `--origin <that address>`. The first lines of [`scripts/go-relay.mjs`](scripts/go-relay.mjs) list the other options.

## Start the C++ runner

The C++ course compiles and runs your programs on your own computer, since no C++ compiler runs in the browser. The runner is tested on Linux only. Install GCC 14 or later, so that `g++` is on your PATH, then start the runner.

```bash
npm run cpp-runner
```

It prints "The runner answers at http://127.0.0.1:8767". Leave it running while you use the C++ course. If Eruko is open at an address other than `http://127.0.0.1:9999` or `http://localhost:9999`, add `-- --origin <that address>`. The first lines of [`scripts/cpp-runner.mjs`](scripts/cpp-runner.mjs) list the other options.

## Change it

### Where things live

| To change | Go to |
| --- | --- |
| The list of units and their pages | [`src/shell/registry.js`](src/shell/registry.js), which reads every unit's `manifest.js` from the folders that `npm run gen` lists in `src/shell/units.gen.js` |
| A unit's title, discipline, place in the list, record parts, outside hosts, description, sources, pages or sections | `src/units/<unit>/core/entry.logic.js` |
| A page of a unit | Its folder in `src/units/<unit>/`, loaded by the unit's `manifest.js` |
| One unit's own logic and shared screens | `src/units/<unit>/core/` |
| A unit's lessons, problems or texts | `src/units/<unit>/content/` |
| The layout, top bar, Explore, unit page, search or Settings | `src/shell/` |
| The controls and screens every unit shares | `src/parts/` |
| The plain logic every unit shares: days, scheduling, practice | `src/kernel/` |
| Where the record is kept (SQLite in the browser's own files) | `src/record/` |
| A storage key | A unit's own parts in its `entry.logic.js` (`parts`); the app's own in `src/kernel/storage.logic.js` |
| A window event | `src/parts/events.dom.js`, the one file that names events |
| Colours, type or spacing | `src/style/` |
| A unit element's styles | `<stem>.css` beside its `<stem>.element.js`, imported by the unit's `unit.css` (the one sheet the shell links), its selectors starting with the element's tag; what several of a unit's elements draw, in `unit.css` |
| What works offline | `src/sw.js`; its list of files is generated |
| A generator | `scripts/gen/` |
| A check | `scripts/check/` |
| A test | A logic file's own `<stem>.test.js` beside it; `tests/` for the scripts, the generated and vendored files and the units' material; `e2e/` (screens, in the browser) |

### What a change keeps

Shared code names no unit: `npm run lint` fails when a file outside a unit's own (its folder, and the scripts and tests whose names start with the unit's folder name) names one.

`npm run lint` also fails on a breach of the code's rules: imports run one way (shell, a unit's manifest, its features, its core, the shared parts, the record, the kernel); a unit never imports another unit or the shell; a feature never imports another feature; every import is relative and ends in `.js`; and each file is one of the kinds `.element.js`, `.dom.js`, `.logic.js` or `.gen.js`, or `.test.js` beside the logic file of its stem.

### Generated files

The script named on a file's first line, after `// Generated by`, writes that file. Edit the sources that script reads, then run it again. `npm run gen` runs every generator.

Arithmetic generates from `unit.yaml`, `topics/` and `bank/` in its `content/` folder, the C++ course from `unit.md`, `labels.md`, `kinds/` and `track/` in its own, and Augustus from its built lives in `content/`. Go generates from the problem positions in `scripts/lib/`; [`scripts/lib/cpp-track.md`](scripts/lib/cpp-track.md) gives the format of the C++ language track. The service worker's list of files, `src/sw-manifest.gen.js`, holds a hash of every file in `src/`: run `npm run gen` after changing any of them, or that file is not kept for offline use.

### Check a change

All five pass before a commit.

```bash
npm run gen               # every generated file, written again from its sources
npm run lint              # code rules, types and the checks in scripts/check/
npm test                  # the tests beside each logic file, and in tests/
npm run knip              # unused files, exports and dependencies
npm run test:screens      # every screen in the browser, with axe, every address and offline
```

## The project

[`RELEASES.md`](RELEASES.md) says how releases are numbered, and [`TRADEMARK.md`](TRADEMARK.md) what a changed copy is called. To help, read [`CONTRIBUTING.md`](CONTRIBUTING.md). Report a security hole as [`SECURITY.md`](SECURITY.md) says, and a barrier as [`ACCESSIBILITY.md`](ACCESSIBILITY.md) says.

## Licence

Code: MIT. Unit content in `src/units/*/content/`: CC BY-SA 4.0, except material taken from a source, which keeps that source's licence. [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE) hold the terms.
