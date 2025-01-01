---
sidebar_position: 1
title: FastifyController
description: The @perseid/server FastifyController is the API controller, designed for the Fastify framework.
---

# FastifyController

API controller, designed for the Fastify framework.
Extends `@perseid/server` `Controller` class.

---

## handleError

Handles thrown errors and formats a clean HTTP response.

```typescript
protected handleError(
  error: FastifyError,
  request: FastifyRequest,
  response: FastifyReply,
): Promise<void>;
```

### Parameters

- **error:** Error thrown by fastify.
- **request:** Fastify request.
- **response:** Fastify response.

### Usage

```typesript
TODO
```

---

## createEndpoint

Creates a new fastify endpoint from `settings`.

```typescript
public createEndpoint(settings: FastifyCustomEndpoint<DataModel>): {
  handler: (request: FastifyRequest, response: FastifyReply) => Promise<void>;
};
```

### Parameters

- **response:** Fastify response.
- **settings:** Endpoint configuration.

### Returns

Fastify endpoint to register.

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
- **instance:** Fastify instance to register endpoints and hooks to.
- **options:** Additional options to pass to fastify `register` function.

### Usage

```typesript
TODO
```

