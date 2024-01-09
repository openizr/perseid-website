---
sidebar_position: 4
---

# connect

Initializes a Vue connection to a Perseid store.

---

## Function Signature

```typescript
function connect(store: Store): UseSubscription;
```

### Description

This function connects a Vue application to a Perseid store. It provides a mechanism for Vue components to subscribe to and react to changes in the store's state. The function returns a `useSubscription` function tailored for Vue's reactive environment.

### Parameters

- **store:** The Perseid store to connect Vue to.

### Returns

- **UseSubscription:** A function that can be used within Vue components to subscribe to changes in the store's state.
