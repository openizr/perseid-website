---
sidebar_position: 1
title: "@perseid/store"
description: The @perseid/store package provides a complete state management for both front and back ends.
---

# Concepts

`@perseid/store` relies on very simple concepts, but it's important to clearly understand their logic in order to use them as much efficiently as possible.

## Module

A module is a sub-state of the application. It contains a part of your app's global state, managing a specific concern (e.g. list of users, list of blog articles, app status, ...). By creating several modules, and combining them, you can build complex, evolutive, infinitely scalable apps without worrying about performance. Each module is composed of a state, a set of mutations, and optionally actions.

```typescript
const myModule = {
  // Contains the module's initial state.
  state: {
    count: 0,
  },
  // This method is optional and is called
  // as soon as the module is registered into the store.
  setup() {
    console.log('Initializing module...');
  },
  mutations: {
    MY_MUTATION, // See below.
  },
  actions: {
    myAction, // See below.
  },
};
```

## Subscription

A subscription is a function that takes an object in parameter (the state) and performs any operation with it. Subscriptions are called each time a change happens on the state.

```typescript
const subscription = (
  /** State of the module that is being observed. */
  newState,
) => {
  console.log('State has changed!', newState);
};
```

## Mutation

A mutation is a function that synchronously modifies the state of the module.

```typescript
const MY_MUTATION = (
  {
    /** Module's id. */
    id,

    /** Module's current state. */
    state,
  }
) => {
  return {
    count: state.count + 1,
  };
};
```

:::tip info
A good practice consists in using **SNAKE_UPPERCASE** syntax to name your mutations, to differentiate them from actions.
:::

## Action

An action is a function, usually asynchronous (e.g. an API call, a timer, ...), that performs one or several calls to mutations. Actions cannot update state directly as it's the mutations' job.

```typescript
const myAction = (
  {
    /** Module's id. */
    id,

    /** `Store.mutate` method. */
    mutate,

    /** `Store.dispatch` method. */
    dispatch,

    /** `Store.register` method. */
    register,

    /** `Store.unregister` method. */
    unregister,

    /** `Store.combine` method. */
    combine,

    /** `Store.uncombine` method. */
    uncombine,
  },
  /** Additional data passed when calling the action. */
  data,
) => {
  setTimeout(() => mutate(id, 'ADD'), 500);
};
```

:::tip info
A good practice consists in using **camelCase** syntax to name your actions, to differentiate them from mutations.
:::

## Combined module

A combined module is a combination of two or more modules. It allows you to create a new sub-state that is a combination of the sub-states of the modules it contains. You can use a reducer function to specify how the state of the combined module should be computed based on the sub-states of the modules it contains. For instance, imagine you have a module containing all the articles of a blog, and another one containing the list of authors. Instead of subscibing to both modules, you can create a combined module that will generate a proper structure with all info (articles + authors) so you just have to subscribe to this combiner and forget about managing several sources of data in the rest of your application.

```typescript
// This will give you a "combined" state as:
// {
//   a: 1,
//   b: 'another value',
// }
const reducer = (moduleAState, moduleBState) => ({
 a: moduleAState.increment,
 b: moduleBState.otherKey,
});

// This is how you can combine to modules into a new one.
store.combine('moduleC', ['moduleA', 'moduleB'], reducer);

// Now that we have declared `moduleC`, we can subscribe to it like a regular module.
store.subscribe('moduleC', console.log);
```

## Middleware

Middlewares can be useful in some situations where you want to listen to any state change on all modules and trigger the same logic each time something changes. For instance, you may want to implement a "time-travel" tool, keeping a complete history of states changes over time to revert them if necessary.

```typescript
const myMiddleware = (newState) => { console.log('New state!', newState); };
```

## Store

The Store is the entity that ties everything together. Modules are registered into the Store, using a unique identifier. You can subscribe to changes on registered modules, combine modules, or apply middlewares to achieve more complex goals.

```typescript
// Instanciating store...
const store = new Store();

// Adding a global middleware triggered at each state change on any module...
store.use((newState) => {
  console.log('New state !', newState);
});

// Registering modules...
store.register('a', moduleA);
store.register('b', moduleB);

// Creating a combined module which mixes `a` and `b` modules...
store.combine('c', ['a', 'b'], (newAState, newBState) => ({
  a: newAState.increment,
  b: newBState
}));

// Subscribing to the combination of `a`  and `b` modules...
store.subscribe('c', (newState) => {
  console.log('New mixed state!', newState.a, newState.b);
});
```