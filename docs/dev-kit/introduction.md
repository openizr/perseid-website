---
title: "@perseid/dev-kit"
description: The @perseid/dev-kit package provides everything you need to develop front-end and back-end JavaScript/TypeScript projects with maximum productivity.
---

The `@perseid/dev-kit` package provides everything you need to develop front-end and back-end JavaScript/TypeScript projects with maximum productivity.

---

## Philosophy

Most JavaScript or TypeScript development environments out there are often completely opinionated (i.e. meant to build exclusively React, Vue, or Svelte apps). It can be very frustrating when developing cross-frameworks solutions, or dealing with multiple stacks.

Also, managing and maintaining dozens of similar configuration (`.eslintrc`, `.babelrc`, `webpack.config.dev.js`, `tsconfig.json`, `.npmrc`, the list is endless) files over your projects is an unecessary, time-consuming task. Most of the time, configuration  are exactly the same, they bloat your repositories, and impacts projects structuration/legibility.

That's precisely why `@perseid/dev-kit` is here. It aims to provide:
- A nice, simple, performant development experience
- A 0-configuration (but still flexible) flow, with no setup headaches
- A framework-agnostic setup, allowing you to develop either for front or back ends, or even libraries to publish over NPM
- An all-included environment, with shipped-in unit-testing solution, linter, bundler, optimizations, transpiler, ...

---

## Features

This toolbox includes:

- **Unit testing solution**: with [vitest](https://vitest.dev/) (which is the best JS/TS testing framework on the market)
- **Optimized bundling**: with [esbuild](https://esbuild.github.io/) and [vite](https://vitejs.dev/) (the most complete and performant bundlers to date)
- **Bundle analyser**: with [Rollup Plugin Visualizer](https://github.com/btd/rollup-plugin-visualizer)
- **Coverage reporting**: with [C8](https://github.com/bcoe/c8)
- **TypeScript support**
- **SASS support**
- **Dynamic imports support**
- **Sourcemaps generation**
- **index.html generation from template**
- **React / Svelte / Vue support**: with Svelte / Vue Single File Components
- **Code Linting**: based on [Airbnb Style Guide](https://github.com/airbnb/javascript)
- **Hot Module Reloading** when developing front-end solutions
- **Automatic package bundling**: if you are writing a NPM package
- **Node 20+ / Evergreen browsers support**: with ES7 features and [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Environment initialization command**