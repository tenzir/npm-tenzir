# tenzir

This repository reserves npm package names for Tenzir:

- `tenzir`
- `@tenzir/tenzir`

The packages intentionally have no public API. They exist to keep the unscoped
`tenzir` npm name and the `@tenzir` npm namespace under Tenzir's control, and to
prevent confusing unofficial packages from occupying them.

Don't use these packages to install Tenzir.

## Install Tenzir

Use the official installation instructions in the
[Tenzir documentation](https://docs.tenzir.com/).

Useful links:

- [Tenzir website](https://tenzir.com/)
- [Tenzir documentation](https://docs.tenzir.com/)
- [Tenzir on GitHub](https://github.com/tenzir)

## Package behavior

Importing either package throws an error that points users to the documentation.
This makes accidental runtime use visible while keeping the packages inert during
installation.

## Publish

Publish these packages only from an official Tenzir npm account.

```bash
npm publish --access public
cd packages/tenzir
npm publish --access public
```

Before publishing, verify the package contents from the repository root:

```bash
npm test
npm run pack:check
```

## Security

Report suspected npm account compromise, unexpected releases, namespace abuse, or
package-name abuse to [security@tenzir.com](mailto:security@tenzir.com).

## License

[Apache-2.0](LICENSE)
