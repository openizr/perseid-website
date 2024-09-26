---
sidebar_position: 4
title: "@perseid/store"
description: The @perseid/store Store service handles the global app state.
---

# Store

Global state manager.
Contains all the sub-states, combined modules and their subscriptions.

---

## middlewares

List of store middlewares.

```typescript
protected middlewares: Subscription<unknown>[];
```

---

## index

Unique index used for subscriptions ids generation.

```typescript
protected index: number;
```

---

## combinedModules

List of store combined modules.

```typescript
protected combinedModules: Partial<Record<string, {
  moduleIds: string[];
  reducer: Reducer<unknown>;
  subscriptions: Partial<Record<string, Subscription<unknown>>>;
}>>;
```

---

## modules

Global modules registry.

```typescript
protected modules: Partial<Record<string, Module & {
  combinedModules: string[];
  actions: Partial<Record<string, ((api: ActionApi, data?: unknown) => Promise<unknown>)>>;
}>>;
```

---

## constructor

Class constructor.

```typescript
public constructor();
```

### Usage

```typescript
const store = new Store();
```

---

## generateSubscriptionId

Generates a unique subscription id.

```typescript
protected generateSubscriptionId(): string;
```

### Returns

The generated subscription id.

### Usage

```typescript
store.generateSubscriptionId(); // "3e81922906bd7b"
```

---

## register

Registers a new module into the store registry.

```typescript
public register<T>(id: string, module: Module<T>): string;
```

### Parameters

- **id:** Module's unique identifier in registry. Can be any string, although it is recommended to follow a tree-structure pattern, like `/my_app/module_a/module_b`.
- **module:** Module to register.

### Returns

Module id.

### Throws

- If a module with the same id already exists in registry.

### Usage

```typescript
store.register('my_module', {
  state: { count: 0 },
  mutations: {
    ADD({ state }) {
      return {
        count: state.count + 1,
      };
    },
  },
});
```

---

## unregister

Unregisters module with id `id` from the global modules registry.

```typescript
public unregister(id: string): void;
```

### Parameters

- **id:** Id of the module to unregister.

### Returns

Module id.

### Throws

- If module with id `id` does not exist.
- If module still has related user-defined combined modules.

### Usage

```typescript
store.unregister('my_module');
```

---

## combine

Combines one or several modules to allow subscriptions on that combination.

```typescript
public combine<T>(id: string, moduleIds: string[], reducer: Reducer<T>): string;
```

### Parameters

- **id:** Combined module unique identifier in registry. Can be any string, although it is recommended to follow a tree-structure pattern, e.g. `/my_app/module_a/module_b`.
- **moduleIds:** Ids of the modules to combine.
- **reducer:** Transformation function. This function is called with every combined module state as arguments. For instance: `(stateA, stateB, stateC) => ({ a: stateA.prop, b: stateB, c: stateC.propC })`

### Returns

Combined module id.

### Throws

- If a module with the same id already exists in registry.
- If one of the modules ids does not exist.

### Usage

```typescript
store.combine('comined_module', ['module_a', 'module_b'], (stateA, stateB) => ({
  a: stateA.key,
  b: stateB
}));
```

---

## uncombine

Uncombines user-defined combined module with id `id`.

```typescript
public uncombine(id: string): void;
```

### Parameters

- **id:** Id of the combined module to uncombine.

### Throws

- If combined module with id `id` does not exist.
- If the given id corresponds to a default combined module.
- If combined module still has subscriptions.

### Usage

```typescript
store.uncombine('comined_module');
```

---

## subscribe

Subscribes to changes on module with id `id`.

```typescript
public subscribe<T>(id: string, handler: Subscription<T>): string;
```

### Parameters

- **id:** Id of the module to subscribe to.
- **handler:** Callback to execute each time the module notifies changes.

### Returns

Subscription id, used to unsubscribe.

### Throws

- If module with id `id` does not exist.

### Usage

```typescript
const subscriptionId = store.subscribe('my_module', (state) => {
  console.log(state);
});
```

---

## unsubscribe

Unsubscribes from changes on module with id `id`.

```typescript
public unsubscribe(id: string, subscriptionId: string): void;
```

### Parameters

- **id:** Id of the module to unsubscribe from.
- **subscriptionId:** Id of the subscription to remove.

### Throws

- If module with id `id` does not exist.
- If subscription with id `subscriptionId` does not exist on that module.

### Usage

```typescript
store.unsubscribe('my_module', subscriptionId);
```

---

## mutate

Performs a state mutation on module with id `id`.

```typescript
public mutate(id: string, name: string, data?: unknown): void;
```

### Parameters

- **id:** Id of the module to perform the mutation on.
- **name:** Name of the mutation to perform.
- **data:** Additional data to pass to the mutation.

### Throws

- If module with id `id` does not exist or is a combined module.
- If mutation name does not exist on that module.

### Usage

```typescript
store.mutate('my_module', 'UPDATE', { key: 'value' });
```

---

## dispatch

Dispatches an asynchronous action to module with id `id`.

```typescript
public dispatch<T>(id: string, name: string, data?: unknown): Promise<T>;
```

### Parameters

- **id:** Id of the module to dispatch action on.
- **name:** Name of the action to perform.
- **data:** Additional data to pass to the action.

### Throws

- If module with id `id` does not exist or is a combined module.
- If action name does not exist on that module.

### Usage

```typescript
await store.dispatch('my_module', 'fetchData', { key: 'value' });
```

---

## use

Applies the given middleware to the store.

```typescript
public use<T>(middleware: Subscription<T>): void;
```

### Parameters

- **middleware:** Middleware to apply to the store.

### Usage

```typescript
store.use((newState) => {
  console.log('Middleware triggered:', state);
});
```
