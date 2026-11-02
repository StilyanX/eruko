# The stored format

The one description of how Eruko stores a learner's record. The worker that writes it is
`worker.js`; this file changes with it.

## The database

- One SQLite database, `/aether.sqlite3`, in the browser's private file storage (OPFS, through
  SQLite's SAH pool), opened by one tab at a time under the Web Lock `aether-record`.
- `PRAGMA user_version` is the format. Format 2 is current:

  ```sql
  CREATE TABLE records (
    key     TEXT PRIMARY KEY,               -- the part's key, "aether-..."
    value   TEXT NOT NULL,                  -- the part, as JSON text
    version INTEGER NOT NULL DEFAULT 1      -- how many times the part has been saved
  ) STRICT
  ```

- Format 1 had no `version` column. Before a migration runs, the file is copied to
  `/aether-before-<new format>.sqlite3`; each step from format n to n + 1 runs in one transaction.
- On start `PRAGMA quick_check` runs; a database that fails it opens read-only: nothing is saved,
  and the learner is asked to save a backup file.
- A save names the version it was based on and commits only when the part is still at it.

## The parts

Each row is one part of the record, a JSON object:

- The app's own parts, named in `src/kernel/storage.logic.js` (`KEYS`): the language setting
  (`aether-settings`), the date of the last backup file (`aether-backup`), and the text of any part
  that could not be read, kept until the learner saves it (`aether-damaged`). The theme
  (`aether-theme`) stays in the browser's key store, read before the first paint.
- Each unit's parts, named in its entry (`src/units/<unit>/core/entry.logic.js`, `parts`), their
  fields described by the unit's decoder (`src/units/<unit>/core/decode.logic.js`). Two units may
  share a part (the number facts, `src/kernel/facts.logic.js`).

A part's text that is not a JSON object is never written over: it is kept under `aether-damaged`
and the part starts empty.

## The shared record

`npm start` (`scripts/serve.mjs`) keeps the record every device shares in `record.json`, in
`~/.local/share/eruko` or the folder `ERUKO_DATA` names: each part by key, `{ "text": <the part
as JSON text>, "version": <n> }`, at the version the browser holds. A save that names an older
version is refused, and the text a refused or forced save would lose is kept in `conflicts/`.
`ERUKO_DATA=off` keeps none. The browser lists the saves it could not send yet under `aether-sync`
in its key store, and sends them when the computer answers again.

## The backup file

A backup file is JSON: `{ "app": "eruko", "backup": 1, "saved": "<ISO time>", "records":
{ "<key>": <part>, ... } }`, written by `src/kernel/backup.logic.js` and read back through
`decodeBackup` in the same file, which takes only the parts the units name.
