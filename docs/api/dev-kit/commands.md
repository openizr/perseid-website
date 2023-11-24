---
sidebar_position: 2
---

# Commands

## Available commands

### Development mode

```bash
yarn run dev
```

Starts the development mode. In this mode, you benefit of the HMR on your pages (front-end projects)
and automatic restart of your scripts (back-end project). This allows you to see your changes in
real time. Final bundle isn't optimized to provide maximum responsiveness of the environment.

**Note:** _when developing a library (`"target": "node"`), a random semver-compliant number is set
in place of your `package.json`'s version in the distributable directory. It allows you to test your
package in real time by forcing cache invalidation._

**Note:** _when developing a web app (`"target": "web"`), the `index.html` served by the development
web server will be generated from the template you specified in your configuration, and will be kept
in memory (not written on disk) for performance purpose._

---

### Testing mode

```bash
yarn run test [-w]
```

Starts the testing mode. All your tests written in `*.test.js(x)` / `*.test.ts(x)` files are run,
and code coverage report is generated at the end of the whole testing suite, in a `coverage`
directory. The `-w` option allows you to run Jest in watch mode.

---

### Build mode

```bash
yarn run build
```

Starts the build mode. You can pass the `--force` option to prevent pipe from failing in case of
linting / typechecking issues. This mode bundles and optimizes your codebase and related assets for
distribution. Sourcemaps are also generated (use `--enable-source-maps` to leverage on sourcemaps in
Node), as well as the bundle analysis report in a `report.html` file. When building a NPM package,
any relevant file (`README.md`, `LICENSE`, ...) is also included in your distributable directory.

---

### Checking

```bash
yarn run check
```

Runs linter and type-checkers on your codebase. You can pass the `-w` option to enable watch mode,
and `-f` to automatically fix issues when possible.

---

## Configuring your project commands

To configure and use available dev kit commands, put the following in your project `package.json`:

```javascript
{
  // ...
  "scripts": {
    "test": "node_modules/typescript-dev-kit/scripts/test",
    "dev": "node node_modules/typescript-dev-kit/scripts/dev.js",
    "build": "node node_modules/typescript-dev-kit/scripts/build.js",
    "check": "node node_modules/typescript-dev-kit/scripts/check.js",
    "postinstall": "rm -f node_modules/.eslintcache"
  }
}
```