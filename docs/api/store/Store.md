---
sidebar_position: 4
---

# Store

Global state manager containing all the sub-states, combined modules, and their subscriptions.

```typescript
class Store
```

---

## Properties

- **middlewares:** List of store middlewares.
- **index:** Unique index used for subscriptions ids generation.
- **combinedModules:** List of store combined modules.
- **modules:** Global modules registry.

---

## Constructor

```typescript
public constructor();
```

### Description

Initializes a new instance of the store.

---

## Methods

### generateSubscriptionId

```typescript
protected generateSubscriptionId(): string;
```

Generates a unique subscription id.

### register

```typescript
public register<T>(id: string, module: Module<T>): string;
```

Registers a new module into the store registry.

---

### unregister

```typescript
public unregister(id: string): void;
```

Unregisters a module from the global modules registry.

---

### combine

```typescript
public combine<T>(id: string, moduleIds: string[], reducer: Reducer<T>): string;
```

Combines several modules to allow subscriptions on that combination.

---

### uncombine

```typescript
public uncombine(id: string): void;
```

Uncombines a user-defined combined module.

---

### subscribe

```typescript
public subscribe<T>(id: string, handler: Subscription<T>): string;
```

Subscribes to changes on a module.

---

### unsubscribe

```typescript
public unsubscribe(id: string, subscriptionId: string): void;
```

Unsubscribes from changes on a module.

---

### mutate

```typescript
public mutate<T>(id: string, name: string, data?: T): void;
```

Performs a state mutation on a module.

---

### dispatch

```typescript
public dispatch<T>(id: string, name: string, data?: T): Promise<void>;
```

Dispatches an asynchronous action to a module.

---

### use

```typescript
public use(middleware: Subscription): void;
```

Applies middleware to the store.

---
