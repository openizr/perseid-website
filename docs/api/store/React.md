---
sidebar_position: 4
---

# connect

Initializes a React connection to a Perseid store.

---

## Function Signature

```typescript
function connect(store: Store): UseSubscription;
```

### Description

This function connects a React application to a Perseid store, enabling React components to subscribe to changes in the store's state. It returns a `useSubscription` function that can be used within React components to listen to store updates.

### Parameters

- **store:** The Perseid store to connect React to.

### Returns

- **UseSubscription:** A custom React hook that can be used to subscribe to changes in the store's state.
