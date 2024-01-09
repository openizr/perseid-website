---
sidebar_position: 4
---

# router

Initializes a new module handling routing for a given configuration.

---

## Function Signature

```typescript
function router(routes: string[]): Module<RoutingContext>;
```

### Description

This function creates a new routing module for an application. It takes a list of route strings as an argument and returns a module configured to handle routing based on these routes. This module is typically used in applications to manage navigation and routing logic.

### Parameters

- **routes:** An array of strings, each representing a route that the router will serve.

### Returns

- An initialized routing module designed to handle the specified routes.
