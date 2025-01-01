---
title: Configuring the REST API
description: Perseid automatically generates a fully featured REST API based on your data model, handling authentication, resources CRUD, and more.
---

# Configuring the REST API

The [@perseid/server](https://github.com/openizr/perseid/tree/main/packages/server) package is a very powerful way to generate a fully functional REST API from your data model. It automatically provides the most common features such as authentication, resources CRUD, and more.

While the `Engine` is responsible for managing all the business logic, and orchestrating the different services (sending emails, reading and writing from databases, and such), the `Controller` is responsible for exposing this engine over the Internet, using the framework of your choice.

---

## Controller Settings

Here is an example of a Controller settings:

```typescript
{
  // This is the backend version. It is sent always along with API responses through the
  // "X-Api-Version" header. This information is especially useful to let the frontend know that the
  // API has been updated, and that it should be reloaded to prevent any incompatibility errors
  // for instance.
  version: '0.0.1',
  // When this parameter is enabled, the server will automatically handle preflight HTTP requests,
  // and CORS headers like "Access-Control-Allow-Origin". This should be mainly used in development.
  handleCORS: true,
  // This part is where you define the built-in API endpoints that should be exposed. There are two
  // categories of built-in endpoints: authentication-related endpoints, and resources endpoints.
  // Auth endpoints are responsible for managing the whole authentication system, including sign-up,
  // token refresh, sign-out, and such. Resources endpoints handle classic CRUD operations on your
  // data model.
  // All endpoints are optional. By default, no endpoint is available, and you need to enable them
  // one by one.
  endpoints: {
    auth: {
      viewMe: { path: '/auth/me' },
      signUp: { path: '/auth/sign-up' },
      signIn: { path: '/auth/sign-in' },
    },
    resources: {
      roles: {
        // `path` defines the API path for that endpoint.
        // `maximumDepth` defines the maximum depth level for nested relations in your data model
        // (see below).
        list: { path: '/roles', maximumDepth: 6 },
        create: { path: '/roles' },
        view: { path: '/roles/:id' },
        update: { path: '/roles/:id' },
      }
    }
  }
}
```

---

## Built-in authentication endpoints

### signUp

Handles users sign-up.

- **HTTP method**: `POST`
- **Required body**: Sign-up JSON payload

Typical sign-up JSON payload example:

```json
{
  "email": "test@test.test",
  "password": "Test123!",
  "passwordConfirmation": "Test123!"
}
```

Typical response structure example:

```json
{
  "deviceId": "d13b0b02cc43e982f8e61856",
  "expiresIn": 1200,
  "refreshTokenExpiration": "2024-11-29T09:07:34.508Z",
  "refreshToken": "02a7d06a642dc49bf18bab8f",
  "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzAyNzkyNTQsImV4cCI6MTczMDI4MDQ1NCwiYXVkIjoiZXhhbXBsZSIsImlzcyI6ImV4YW1wbGUiLCJzdWIiOiI2NzIxZjc1NjY1NDFlYWMyYTlkNTM2Y2RfZDEzYjBiMDJjYzQzZTk4MmY4ZTYxODU2In0.fpp6HzOCb3JTZwxxqpjawd9fzbZ1xULVelXeO5y-k5jtw_dXIUtWJdq5Ew5M2E6EKyEmHFJqCcyj9Rm9tDqqVY719eDGU5IEmCu_L0Q2jqhKRSpXCycKI8WugT4goHPFOAV-kHj-c08H-XIEFV6oZKG5uVnxp-6xTMs0xnhAzjFOw22l-vQ7nZyKnBna-SCH3FunOp4yM2PwAK2RirOjPKuTJ6T4LAhzqRNhVpzpMjVWUFR9dgpCk4eMIe2QO_HsXQBo_jH0LQkh3ASH7aAUdBRZyk_f56g1G4ltZrlqIY7jlH2F-zYPEoB-tGOvd7CKz4DvG9n3lk1VXBpoJo-RKPLkbtZtW_azlfXFYGcNiGmO20D5FE703XSuJR4PjQjmiLCRV5QUHTk8ox-VPyhB_eudaw8TaarD-epRQjkz5U2QAKa3CBnE29xiZo-PJXLSlcmd9OzXGmQ8nAjkKevhWb2SEuRQ6z78O85IWVUtzx6wL1oseFeGQmzH5sGL-7V0"
}
```

### signIn

Handles users sign-in.

- **HTTP method**: `POST`
- **Required body**: Sign-in JSON payload
- **Optional headers**: `X-Device-Id`

Typical sign-in JSON payload example:

```json
{
  "email": "test@test.test",
  "password": "Test123!",
}
```

Typical response structure example:

```json
{
  "deviceId": "d13b0b02cc43e982f8e61856",
  "expiresIn": 1200,
  "refreshTokenExpiration": "2024-11-29T09:07:34.508Z",
  "refreshToken": "02a7d06a642dc49bf18bab8f",
  "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzAyNzkyNTQsImV4cCI6MTczMDI4MDQ1NCwiYXVkIjoiZXhhbXBsZSIsImlzcyI6ImV4YW1wbGUiLCJzdWIiOiI2NzIxZjc1NjY1NDFlYWMyYTlkNTM2Y2RfZDEzYjBiMDJjYzQzZTk4MmY4ZTYxODU2In0.fpp6HzOCb3JTZwxxqpjawd9fzbZ1xULVelXeO5y-k5jtw_dXIUtWJdq5Ew5M2E6EKyEmHFJqCcyj9Rm9tDqqVY719eDGU5IEmCu_L0Q2jqhKRSpXCycKI8WugT4goHPFOAV-kHj-c08H-XIEFV6oZKG5uVnxp-6xTMs0xnhAzjFOw22l-vQ7nZyKnBna-SCH3FunOp4yM2PwAK2RirOjPKuTJ6T4LAhzqRNhVpzpMjVWUFR9dgpCk4eMIe2QO_HsXQBo_jH0LQkh3ASH7aAUdBRZyk_f56g1G4ltZrlqIY7jlH2F-zYPEoB-tGOvd7CKz4DvG9n3lk1VXBpoJo-RKPLkbtZtW_azlfXFYGcNiGmO20D5FE703XSuJR4PjQjmiLCRV5QUHTk8ox-VPyhB_eudaw8TaarD-epRQjkz5U2QAKa3CBnE29xiZo-PJXLSlcmd9OzXGmQ8nAjkKevhWb2SEuRQ6z78O85IWVUtzx6wL1oseFeGQmzH5sGL-7V0"
}
```


### signOut

Handles users sign-out.

- **HTTP method**: `POST`
- **Required headers**: `Authorization`, `X-Device-Id`

Typical response structure example:

```json
```


### refreshToken

Handles users access token refresh.

- **HTTP method**: `POST`
- **Required body**: Token refresh JSON payload
- **Required headers**: `Authorization`, `X-Device-Id`

Typical token refresh JSON payload example:

```json
{
  // This token is returned in the `refreshToken` field of the `signIn` and `refreshToken` API endpoints.
  "refreshToken": "02a7d06a642dc49bf18bab8f"
}
```

Typical response structure example:

```json
{
  "deviceId": "d13b0b02cc43e982f8e61856",
  "expiresIn": 1200,
  "refreshTokenExpiration": "2024-11-29T09:07:34.508Z",
  "refreshToken": "02a7d06a642dc49bf18bab8f",
  "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzAyNzkyNTQsImV4cCI6MTczMDI4MDQ1NCwiYXVkIjoiZXhhbXBsZSIsImlzcyI6ImV4YW1wbGUiLCJzdWIiOiI2NzIxZjc1NjY1NDFlYWMyYTlkNTM2Y2RfZDEzYjBiMDJjYzQzZTk4MmY4ZTYxODU2In0.fpp6HzOCb3JTZwxxqpjawd9fzbZ1xULVelXeO5y-k5jtw_dXIUtWJdq5Ew5M2E6EKyEmHFJqCcyj9Rm9tDqqVY719eDGU5IEmCu_L0Q2jqhKRSpXCycKI8WugT4goHPFOAV-kHj-c08H-XIEFV6oZKG5uVnxp-6xTMs0xnhAzjFOw22l-vQ7nZyKnBna-SCH3FunOp4yM2PwAK2RirOjPKuTJ6T4LAhzqRNhVpzpMjVWUFR9dgpCk4eMIe2QO_HsXQBo_jH0LQkh3ASH7aAUdBRZyk_f56g1G4ltZrlqIY7jlH2F-zYPEoB-tGOvd7CKz4DvG9n3lk1VXBpoJo-RKPLkbtZtW_azlfXFYGcNiGmO20D5FE703XSuJR4PjQjmiLCRV5QUHTk8ox-VPyhB_eudaw8TaarD-epRQjkz5U2QAKa3CBnE29xiZo-PJXLSlcmd9OzXGmQ8nAjkKevhWb2SEuRQ6z78O85IWVUtzx6wL1oseFeGQmzH5sGL-7V0"
}
```


### requestPasswordReset

Handles users password reset requests.

- **HTTP method**: `POST`
- **Required body**: Password reset JSON payload

Typical password reset JSON payload example:

```json
{
  "email": "test@test.test"
}
```

Typical response structure example:

```json
```

### resetPassword

Handles users password replacement by a new one after they requested a password reset.

- **HTTP method**: `PUT`
- **Required body**: Password reset JSON payload

Typical password reset JSON payload example:

```json
{
  "resetToken": "02a7d06a642dc49bf18bab8f",
  "password": "Test123!",
  "passwordConfirmation": "Test123!"
}
```

Typical response structure example:

```json
```

### requestEmailVerification

Handles users email verification requests.

- **HTTP method**: `POST`
- **Required headers**: `Authorization`, `X-Device-Id`

Typical response structure example:

```json
```

### verifyEmail

Handles users email verification after they signed-up or requested an email verification.

- **HTTP method**: `PUT`
- **Required body**: Email verification JSON payload
- **Required headers**: `Authorization`, `X-Device-Id`

Typical email verification JSON payload example:

```json
{
  "verificationToken": "02a7d06a642dc49bf18bab8f"
}
```

Typical response structure example:

```json
```

### viewMe

Handles users profile view.

- **HTTP method**: `GET`
- **Required headers**: `Authorization`, `X-Device-Id`

Typical response structure example:

```json
{
  "_id": "000000000000000000000123",
  "email": "test@test.test",
  "_createdAt": "2023-01-01T00:00:00.000Z",
  "_updatedAt": "2023-01-02T00:00:00.000Z",
  "_verifiedAt": "2023-01-02T00:00:00.000Z",
  "roles": [
    {
      "name": "ADMIN",
      "permissions": [
        "ROLES_VIEW"
      ]
    }
  ],
}
```

---

## Built-in resources endpoints

### create

Handles specific resource creation.

- **HTTP method**: `POST`
- **Required headers**: `Authorization`, `X-Device-Id`
- **Optional query params**: `fields`
- **Required body**: A JSON payload that depends on the type of resource to create

Typical response structure example:

```json
{
  "_id": "000000000000000000000001",
  "_createdAt": "2023-01-01T00:00:00.000Z",
  "_createdBy": "000000000000000000000123",
  "name": "ADMIN",
  "permissions": [
    "ROLES_VIEW"
  ],
  // ...
}
```

### view

Handles specific resource fetching.

- **HTTP method**: `GET`
- **Required headers**: `Authorization`, `X-Device-Id`
- **Optional query params**: `fields`
- **Required URL params**: `id`

Typical response structure example:

```json
{
  "_id": "000000000000000000000001",
  "_createdAt": "2023-01-01T00:00:00.000Z",
  "_createdBy": "000000000000000000000123",
  "name": "ADMIN",
  "permissions": [
    "ROLES_VIEW"
  ],
  // ...
}
```

### update

Handles specific resource update.

- **HTTP method**: `PUT`
- **Required headers**: `Authorization`, `X-Device-Id`
- **Optional query params**: `fields`
- **Required URL params**: `id`
- **Required body**: A JSON payload that depends on the type of resource to create

Typical response structure example:

```json
{
  "_id": "000000000000000000000001",
  "_createdAt": "2023-01-01T00:00:00.000Z",
  "_createdBy": "000000000000000000000123",
  "name": "ADMIN",
  "permissions": [
    "ROLES_VIEW"
  ],
  // ...
}
```

### list

Handles resources listing.

- **HTTP method**: `GET`
- **Required headers**: `Authorization`, `X-Device-Id`
- **Optional query params**: `limit`, `offset`, `sortBy`, `sortOrder`, `fields`

Typical response structure example:

```json
{
  "total": "13",
  "results": [
    {
      "_id": "000000000000000000000001",
      "_createdAt": "2023-01-01T00:00:00.000Z",
      "_createdBy": "000000000000000000000123",
      "name": "ADMIN",
      "permissions": [
        "ROLES_VIEW"
      ],
      // ...
    },
    {
      "_id": "000000000000000000000002",
      "_createdAt": "2023-01-02T00:00:00.000Z",
      "_createdBy": "000000000000000000000123",
      "name": "EDITOR",
      "permissions": [
        "ROLES_UPDATE"
      ],
      // ...
    },
    // ...
  ]
}
```


### search

Handles resources search according to specific criteria.

- **HTTP method**: `POST`
- **Required headers**: `Authorization`, `X-Device-Id`
- **Optional query params**: `limit`, `offset`, `sortBy`, `sortOrder`, `fields`
- **Required body**: A JSON search payload containing search criteria

Typical search payload structure:

```json
{
  // Allows full-text search on specific fields.
  "query": {
    "on": ["name", "permissions"],
    "text": "test"
  },
  // Strict filters to apply to results.
  "filters": {
    "_createdBy": "000000000000000000000123",
    "_createdAt": ["2021-01-01T00:00:00.000Z", "2025-01-01T00:00:00.000Z"]
  }
}
```

Typical response structure example:

```json
{
  "total": "13",
  "results": [
    {
      "_id": "000000000000000000000001",
      "_createdAt": "2023-01-01T00:00:00.000Z",
      "_createdBy": "000000000000000000000123",
      "name": "ADMIN",
      "permissions": [
        "ROLES_VIEW"
      ],
      // ...
    },
    {
      "_id": "000000000000000000000002",
      "_createdAt": "2023-01-02T00:00:00.000Z",
      "_createdBy": "000000000000000000000123",
      "name": "EDITOR",
      "permissions": [
        "ROLES_UPDATE"
      ],
      // ...
    },
    // ...
  ]
}
```

### delete

Handles resource deletion.

- **HTTP method**: `DELETE`
- **Required URL params**: `id`
- **Required headers**: `Authorization`, `X-Device-Id`

Typical response structure example:

```json
```

## Built-in automatic endpoints

Automatic endpoints are internal endpoints providing essential meta-data about the API and the underlying data model. They are always enabled,and their path cannot be manually configured.

### `/_model`

Returns a fragment of the data model schema, containing the requested resource and all related data model schemas.

- **HTTP method**: `GET`
- **Required query params**: `resource`
- **Required headers**: `Authorization`, `X-Device-Id`

Typical response structure example:

```json
{
  "roles": {
    "fields": {
      "name": {
        "type": "string",
        "isRequired": true,
        // ...
      },
      // ...
    }
  },
  "users": {
    "fields": {
      "email": {
        "type": "string",
        "isRequired": true,
        // ...
      },
      // ...
    }
  }
}
```

---

## Built-in headers

- **`X-Device-Id`**: Id of the device that is making the request. If not provided, a new one will be generated on user sign-in and returned in the `deviceId` field. When using `@perseid/client`, this header is automatically managed. It allows you to control the origins you want to allow.

- **`Authorization`**: Contains the JWT Bearer token that is generated on user sign-in. Used to authentify user on every request.

---

## Partial vs Full payloads

Partial payloads are a powerful way to reduce the size of requests payloads and the necessary amount network traffic. This can have a significant impact on the performance of your application, especially on low-performance devices or in network constrained environments.

- **When creating a new resource**, you are required to pass all its fields in the payload.
- **When updating a resource**, you can only pass the fields that you want to update. A few things to keep in mind though:
  - For arrays, you need to pass all the array items in the payload.
  - For optional objects or arrays, you need to pass the whole object or array in the payload.

---

## Automatic fields

Automatic fields is a design choice made by Perseid to make resources management and learning easier, without needing much documentation. It relies on a very simple concept: each field prefixed by `_` is considered an automatic field. This means that the user cannot define it directly (either through the API or the Engine directly). This field will be automatically generated inside the Engine, according to a specific business logic. For instance, the `_createdAt` field is not updatable directly by the user, and is automatically set to the current time when the resource is created.

This way, developers can have a clear vision of what they can change, and what they cannot.

---

## Built-in query params

### limit

Specifies the maximum number of results to fetch. Available on `search` and `list` endpoints.

### offset

Specifies the number of results to skip. Available on `search` and `list` endpoints.

### sortBy

Specifies the field to sort results by. `sortOrder` is also required when using this query parameter. Available on `search` and `list` endpoints.

For example: `/users?sortBy=email,_createdAt&sortOrder=1,-1`

### sortOrder

Specifies the order to sort results. `sortBy` is also required when using this query parameter. Available on `search` and `list` endpoints.

For example: `/users?sortBy=email,_createdAt&sortOrder=1,-1`

### fields

Specifies the list of fields to fetch from the API. Available on `view`, `create`, `update`, `search` and `list` endpoints.
This query parameter is one of the most powerful features of Perseid. It allows developers to get a fine control of what they need to fetch from both the API and the underlying database, which can have a significant impact on the performance of your application, especially on low-performance devices or in network constrained environments.

- The `*` special value means "all fields". You can use that value either on the complete resource (`fields=*`), on a sub-resource (`fields=_updatedBy.*`), or on an `object` or `array` field (`fields=devices.*`).
- You can walk through the whole data model and nested resources with the `fields` query parameter. For instance, to get the email address of the user that updated the author of a new role, you could do: `fields=_updatedBy._createdBy.email`. Perseid will automatically know which fields to fetch, and generate a single optimized database query to fetch exactly these fields. The maximum level of depth you can go is defined at each endpoint level with the `maximumDepth` configuration option (defaults to `3`).

---

## Connecting Controller to your framework

Once your Controller is instanciated and configured, you can connect it with the most popular frameworks like `express` or `fastify`.
All you have to do is define and start your server like you would usually do, and call the `Controller.createEndpoints` method.

For instance, to connect your Controller to ExpressJs:

```typescript
  import express from 'express';
  import { ExpressController } from '@perseid/server/express';

  // Declaring your Controller...
  const controller = new ExpressController({
    version: '1.0.0',
    handleCORS: true,
    endpoints: {
      // Your built-inendpoints here...
      auth: {},
      resources: {},
    }
  });

  // Creating our ExpressJS server...
  const app = express();

  // Declaring other endpoints here...
  app.get('/hello', (_request, response) => {
    response.status(200).send('HELLO WORLD!');
  });

  // Registering all Perseid built-in endpoints...
  await controller.createEndpoints(app, { prefix: '/perseid' });

  // And starting the ExpressJS server!
  app.listen(3000);
```

---

## Declaring custom API endpoints

If you need to register fully custom API endpoints, you can do so through the `Controller.createEndpoint` method.