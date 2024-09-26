---
sidebar_position: 3
title: "@perseid/store Complete Example"
description: Complete example of how a @perseid/store Store works.
---

# Complete Example

```typescript
import { Store } from '@perseid/store';

const moduleA = {
  state: { count: 0 },
  mutations: {
    ADD({ state }) {
      return {
        count: state.count + 1,
      };
    },
  },
};

const moduleB = {
  state: { count: 1000 },
  mutations: {
    SUB({ state }) {
      return {
        count: state.count - 1,
      };
    },
  },
  actions: {
    asyncSub({ id, mutate }) {
      setTimeout(() => { mutate(id, 'SUB'); }, 1000);
    },
  },
};

const store : Store = new Store();

store.use((newState) => {
  console.log('New state !', newState);
});

store.register('a', moduleA);
store.register('b', moduleB);

store.combine('c', ['a', 'b'], (newAState, newBState) => ({
  a: newAState.count,
  b: newBState
}));

store.subscribe('a', (newState) => {
  console.log('New state from a !', newState);
});

store.subscribe('c', (newState) => {
  console.log('New state from c !', newState);
});

store.mutate('a', 'ADD');
store.dispatch('b', 'asyncSub');
```

The above example will display in console:

```bash
New state ! { count: 0 }
New state ! { count: 1000 }
New state from a ! { count: 0 }
New state from c ! { a: 0, b: { count: 1000 } }
New state ! { count: 1 }
New state from a ! { increment: 1 }
New state from c ! { a: 1, b: { count: 1000 } }
New state ! { count: 999 }
New state from c ! { a: 1, b: { count: 999 } }
```