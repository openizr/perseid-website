---
sidebar_position: 4
---

# connect

Initializes a Svelte connection to a Perseid store.

---

## Function Signature

```typescript
function connect(store: Store): UseSubscription;
```

### Description

This function connects a Svelte application to a Perseid store. It provides a mechanism for Svelte components to subscribe to and react to changes in the store's state. The function returns a `useSubscription` function tailored for Svelte's reactive environment.

### Parameters

- **store:** The Perseid store to connect Svelte to.

### Returns

- **UseSubscription:** A function that can be used within Svelte components to subscribe to changes in the store's state.
