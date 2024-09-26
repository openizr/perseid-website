---
sidebar_position: 5
title: "@perseid/store Connectors"
description: The @perseid/store package provides a collection of connectors for a seamless integration with the most popular front-end frameworks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Connectors

The `@perseid/store` package provides a collection of connectors for a seamless integration with the most popular front-end frameworks. Currently out-of-box supported frameworks are: **React**, **Vue** and **Svelte**.

---

## `connect`

The `connect` function creates a binding between the `Store` instance and the front-end framework.

<Tabs>
<TabItem value="react" label="React">

```typescript
function connect(store: Store): <T>(id: string, reducer?: Reducer<T>) => T;
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
function connect(store: Store): <T>(id: string, reducer?: Reducer<T>) => Ref<UnwrapRef<T>>;
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
function connect(store: Store): <T>(id: string, reducer?: Reducer<T>) => Readable<T>;
```

</TabItem>
</Tabs>

### Parameters

- **store:** Perseid store to connect the framework to.

### Returns

- The actual `useSubscription` function, that can be used to subscribe to changes in the store directly in your components.

### Usage


<Tabs>
<TabItem value="react" label="React">

```typescript
import connect from '@perseid/store/connectors/react';

const useSubscription = connect(store);
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
import connect from '@perseid/store/connectors/vue';

const useSubscription = connect(store);
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
import connect from '@perseid/store/connectors/svelte';

const useSubscription = connect(store);
```

</TabItem>
</Tabs>

---

## `useSubscription`

The `useSubscription` function allows you to subscribe to changes from a given module, and automatically handles component reactivity. Returns the reduced state each time it changes.

:::tip info
Under the hood, `useSubscription` relies on:
- [hooks](https://react.dev/reference/react/hooks) for React
- [Readable API](https://svelte.dev/docs/svelte-store#readable) for Svelte
- [Composition API](https://vuejs.org/guide/introduction.html#composition-api) for Vue
:::

### Parameters

- **moduleId:** Id of the module to subscribe to.
- **reducer:** Optional state reducer. Allows you to transform the new state to get exactly what you need. Defaults to the identify function.

### Returns

The reduced updated state, whenever it changes.

### Usage

<Tabs>
<TabItem value="react" label="React">

```typescript
// main.jsx
// --------------------------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter.jsx';

ReactDOM.render(<Counter />, document.body);


// store.js
// --------------------------
import { Store } from '@perseid/store';

const store = new Store();
store.register('my-module', {
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT: ({ state }) => {
      return state.count + 1;
    },
  },
  actions: {
    incrementAsync: ({ mutate, id }) => {
      setTimeout(() => {
        mutate(id, 'INCREMENT');
      }, 250);
    },
  },
});

export default store;


// Counter.jsx
// --------------------------
import * as React from 'react';
import store from './store.jsx';
import connect from '@perseid/store/connectors/react';

const useSubscription = connect(store);

export default function Button(props) {
  const count = useSubscription('my-module', (newState) => newState.count);
  const doSomething = () => {
    store.dispatch('my-module', 'incrementAsync');
  };
  return <button type="button" onClick={doSomething}>{count}</button>;
}
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
// main.js
// --------------------------

import { createApp } from 'vue';
import Counter from './Counter.vue';

createApp(Counter).mount('#app');


// store.js
// --------------------------
import { Store } from '@perseid/store';

const store = new Store();
store.register('my-module', {
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT: ({ state }) => {
      return state.count + 1;
    },
  },
  actions: {
    incrementAsync: ({ mutate, id }) => {
      setTimeout(() => {
        mutate(id, 'INCREMENT');
      }, 250);
    },
  },
});

export default store;


// Counter.vue
// --------------------------
<script setup>
import store from './store.js';
import connect from '@perseid/store/connectors/vue';
const useSubscription = connect(store);

const count = useSubscription('my-module', (newState) => newState.count);

function doSomething() {
  store.dispatch('my-module', 'incrementAsync');
};
</script>

<template>
  <div @click="doSomething">{{ count }}</div>
</template>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
// main.js
// --------------------------

import Counter from './Counter.vue';

new Counter({
  target: document.querySelector('#app'),
});


// store.js
// --------------------------
import { Store } from '@perseid/store';

const store = new Store();
store.register('my-module', {
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT: ({ state }) => {
      return state.count + 1;
    },
  },
  actions: {
    incrementAsync: ({ mutate, id }) => {
      setTimeout(() => {
        mutate(id, 'INCREMENT');
      }, 250);
    },
  },
});

export default store;


// Counter.svelte
// --------------------------
<script>
import store from './store.js';
import connect from '@perseid/store/connectors/svelte';
const useSubscription = connect(store);

const count = useSubscription('my-module', (newState) => newState.count);

function doSomething() {
  store.dispatch('my-module', 'incrementAsync');
};
</script>

<div @click="doSomething">{$count}</div>
```

</TabItem>
</Tabs>
