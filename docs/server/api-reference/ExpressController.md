---
sidebar_position: 1
title: ExpressController
description: The @perseid/server ExpressController is the API controller, designed for the Express framework.
---

# ExpressController

API controller, designed for the Express framework.
Extends `@perseid/server` `Controller` class.

---

## handleError

Handles thrown errors and formats a clean HTTP response.

```typescript
protected handleError(
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction,
): void;
```

### Parameters

- **error:** Error thrown by express.
- **request:** Express request.
- **response:** Express response.

### Usage

```typesript
TODO
```

---

## createEndpoint

Creates a new express endpoint from `settings`.

```typescript
public createEndpoint(settings: ExpressCustomEndpoint<DataModel>): {
  handler: RequestHandler;
};
```

### Parameters

- **response:** Express response.
- **settings:** Endpoint configuration.

### Returns

Express endpoint to register.

### Usage

```typesript
TODO
```

---

## createEndpoints

Registers hooks, handlers, auth and CRUD-related endpoints to `instance`.

```typescript
public createEndpoints(
  instance: Application,
  options?: { prefix?: string; },
): Promise<void>;
```

### Parameters

- **settings:** Endpoint configuration.
- **instance:** Express instance to register endpoints and hooks to.
- **options:** Additional options to pass to express `register` function.

### Usage

```typesript
TODO
```
