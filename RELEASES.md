# Releases

## Numbers

Eruko uses Semantic Versioning (semver.org). Before 1.0.0, any release may change anything.

## Two channels

- **Preview**: the `main` branch. Every unit of the public copy is in it, finished or not, each labelled in [`STATUS.md`](STATUS.md).
- **Stable**: a tagged release. It carries only the units labelled Ready.

## How a stable release ships

A stable release comes every 12 weeks. The last weeks before it take fixes only. It ships when no regression from the last stable release is open, and waits until then.

## What a stable release keeps

A stable release never loses a learner's record. A backup file saved by any earlier stable release loads in every later one, and a test proves it before the release ships.

A new release never forces itself on you: the release you have keeps working with no connection.

Each release states its download size in [`CHANGELOG.md`](CHANGELOG.md).
