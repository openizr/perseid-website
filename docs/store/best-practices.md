---
sidebar_position: 2
title: "@perseid/store Best Practices"
description: Best practices to follow when using @perseid/store.
---

# Best Practices

There are a few things to keep in mind to use `@perseid/store` with maximum efficiency and legibility.

## Use [pure functions](https://en.wikipedia.org/wiki/Pure_function)

Although you can directly modify the `state` variable within mutations, it is not the recommended approach, as it can lead to inconsistencies and undesired side effects, and break the reactivity mechanism (i.e. your subsciptions won't be triggered when state changes).

Indeed, as most of the frontend frameworks out there, `@perseid/store` performs a [shallow comparison](https://stackoverflow.com/questions/36084515/how-does-shallow-compare-work-in-react) in order to determine whether a mutation should trigger all subscriptions or not.

Here is an example that illustrates this mechanism.

```typescript
const myModule = {
  state: {
      counter: 0,
  },
  // ...
  mutations: {
    BAD_MUTATION({ state }) {
      // Direct state change => comparison between `state` and the
      // returned value from mutation will give an equality, and thus
      // won't trigger subscriptions.
      // => Don't do that if you want to react on `counter` changes.
      state.counter += 1;
      return state;
    },
    GOOD_MUTATION({ state }) {
      //   A new object is returned by the mutation => comparison between `state` and the
      // returned value from mutation will give an inequality, and thus
      // trigger subscriptions.
      // => Definitely the way to go!
      return {
          ...state,
          counter: state.counter + 1,
      };
    },
  },
  // ...
};
```

:::info
This is a very simple example, but most of the time, you will get a state containing nested objects and arrays, and making sure you always return deep state clones can become cumbersome. There are many libraries available to make your life easier and keep your functions pure, such as [@perseid/core](/docs/core/introduction), [ImmerJS](https://immerjs.github.io/immer/), or [ImmutableJS](https://immutable-js.com/).
:::

---

## Combine modules to optimize your components

Calling `useSubscription` several times in the same component is perfectly fine. However, keep in mind that each subscription will trigger a new rendering. While this is not an issue when having two or three subscriptions, it can eventually affect your app's performance if you `useSubscription`, say, ten times from within the same component. A more elegant way to combine your modules and `useSubscription` only once. Here is an example.

```typescript
// React component example (but the same goes for any other framework)
// This is not the most efficient as we get 2 renderings.
function MyComponent() {
  const users = useSubscription('users');
  const myUserId = useSubscription('authentication', (newState) => newState.id ?? '');

  const user = users[myUserId] ?? null;

  // ...
}
```

The previous code should be refactored like this:

```typescript
// ...
store.combine('user', ['users', 'authentication'], (newUsersState, newAuthenticationState) => {
    return newUsersState[newAuthenticationState.id] ?? null;
});

// React component example (but the same goes for any other framework)
// Only one rendering here!
function MyComponent() {
    const user = useSubscription('user');
    // ...
}
```