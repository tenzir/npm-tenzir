# @tenzir/tenzir

This package reserves the `@tenzir/tenzir` package name in the `@tenzir` npm
namespace for Tenzir.

The package intentionally has no public API. It exists to keep the scoped npm
package name under Tenzir's control and to prevent confusing unofficial packages
from occupying it.

Don't use this package to install Tenzir.

## Install Tenzir

Use the official installation instructions in the
[Tenzir documentation](https://docs.tenzir.com/).

Useful links:

- [Tenzir website](https://tenzir.com/)
- [Tenzir documentation](https://docs.tenzir.com/)
- [Tenzir on GitHub](https://github.com/tenzir)

## Package behavior

Importing this package throws an error that points users to the documentation.
This makes accidental runtime use visible while keeping the package inert during
installation.

## Publish

Publish this package only from an official Tenzir npm account with access to the
`@tenzir` npm organization.

```bash
npm publish --access public
```

Before publishing, verify the package contents:

```bash
npm test
npm run pack:check
```

## Security

Report suspected npm account compromise, unexpected releases, namespace abuse, or
package-name abuse to [security@tenzir.com](mailto:security@tenzir.com).

## License

[Apache-2.0](LICENSE)
