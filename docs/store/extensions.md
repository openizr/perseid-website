---
sidebar_position: 6
title: "@perseid/store Extensions"
description: The @perseid/store package provides a collection of extensions to handle common use cases, such as application routing.
---

# Extensions

## `router`

`router` is a specific module that automatically handles frontend routing and browser history.

### Getting started

```typescript
// store.js
// --------------------------
import Store from '@perseid/store';
import router from '@perseid/store/extensions/router';

const store = new Store();
store.register('router', router([
    '/home',
    '/blog',
    // Add all your app's routes here...
]));
export default store;

// main.js
// --------------------------
import store from './store.js';

store.subscribe('router', (context) => console.log(context));
```

As any other `@perseid/store` modules, `router` must be registered into the store using the `register` method. As soon as it is done, any subscription to that module will receive the current routing context, containing useful information about current route.

```typescript
{
  host: 'mydomain.com',      // Current app domain
  params: { id: '125' },     // Route parameters
  path: '/user/125',         // Full route path (request URI)
  protocol: 'http',          // URL scheme (HTTP/HTTPS/...)
  query: { q: 'ok' },        // Parsed query parameters (if any)
  route: '/user/:id',        // Route pattern that matched current URL
}
```

### Routing

When initializing the `router` module, a list of routes is expected in argument (see above). This list is actually a set of patterns that will be matched against the current URL. The matching process is based on the exact same logic as for the [expressjs framework](https://expressjs.com/en/guide/routing.html) (using [path-to-regexp](https://github.com/pillarjs/path-to-regexp) npm package), which means you can define dynamic parameters in those routes, regular expressions, and so on. These dynamic info will be placed into the `params` key in the routing context.

Let's take an example. Imagine we initialized `router` this way.

```typescript
store.register('router', router([
    '/',
    '/blog',
    '/blog/posts/:name',
]));
```

We are currently browsing the URL **https://mydomain.com/blog/posts/@perseid/store-is-life**

`router` will thus generate the following routing context.

```typescript
{
  host: 'mydomain.com',
  params: { name: '@perseid/store-is-life' },
  path: '/blog/posts/@perseid/store-is-life',
  protocol: 'https',
  query: {},
  route: '/blog/posts/:name',   // `null` if no route matches the URL
}
```

### Navigation

One of the most interesting features of `router` is that you can navigate to any route seamlessly, without reloading the page, loosing current state or performing complex processing. Just call the `NAVIGATE` mutation.

```typescript
store.mutate('router', 'NAVIGATE', '/my/next/page');
```

`router` will automatically manage window's history, pushing a new state. The routing context will also be re-computed and dispatched to all subscriptions. It is especially useful when you want to track navigation, or to lazy load your app's pages over browsing, for instance, to improve initial page load. User can then go back and forth through his browser history as he usually would without breaking any logic or reloading page.