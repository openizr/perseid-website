---
sidebar_position: 4
---

# FastifyController

API controller, designed for Fastify framework.

```typescript
class FastifyController<
  /** Data model types definitions. */
  DataModel extends DefaultDataModel = DefaultDataModel,

  /** Model class types definitions. */
  Model extends BaseModel<DataModel> = BaseModel<DataModel>,

  /** Database client types definition. */
  Engine extends UsersEngine<DataModel> = UsersEngine<DataModel>,
> extends Controller<DataModel, Model, Engine>
```

---

## constructor

```typescript
public constructor(model: Model, logger: Logger, engine: Engine, settings: ControllerSettings<DataModel>);
```

### Description

Class constructor.

### Parameters

- **model:** Data model to use.
- **logger:** Logging system to use.
- **engine:** Engine to use.
- **settings:** Controller settings.

---

## createSchema

```typescript
protected createSchema(schema: ModelSchema<DataModel>, mode: 'CREATE' | 'UPDATE', transformer?: (schema: FastifySchema) => FastifySchema): FastifySchema;
```

### Description

Creates an Ajv validation schema from `schema`.

### Parameters

- **schema:** Schema from which to create validation schema.
- **mode:** Which mode (creation / update) is intended for schema generation.
- **transformer:** Optional transformation function to apply to generated Ajv schema.

### Returns

Ajv validation schema.

---

## formatError

```typescript
protected formatError(error: ValidationError[], dataVar: string): Error;
```

### Description

Formats `error`.

### Parameters

- **error:** Error to format.
- **dataVar:** Additional info to format error with.

### Returns

Formatted error.

---

## parseFormData

```typescript
protected parseFormData(payload: IncomingMessage, options?: FormDataOptions): Promise<FormDataFields>;
```

### Description

Parses `multipart/form-data` payload, and returns its data.

### Parameters

- **payload:** Request payload.
- **options:** Parser options. Defaults to `{ allowedMimeTypes: [], maxTotalSize: 10000000, maxFileSize: 2000000 }`.

### Returns

Parsed payload.

---

## handleNotFound

```typescript
protected handleNotFound(): void;
```

### Description

Handles HTTP 404 errors.

---

## handleError

```typescript
protected handleError(error: FastifyError, request: FastifyRequest, response: FastifyReply): void;
```

### Description

Handles thrown errors and formats a clean HTTP response.

### Parameters

- **error:** Error thrown by fastify.
- **request:** Fastify request.
- **response:** Fastify response.

---

## auth

```typescript
protected auth(accessToken: string, deviceId: string, ignoreExpiration?: boolean): Promise<User>;
```

### Description

Verifies `accessToken` and `deviceId` to authenticate a user.

### Parameters

- **accessToken:** Access token to verify.
- **deviceId:** Device id to verify.
- **ignoreExpiration:** Whether to ignore errors when token has expired. Defaults to `false`.

### Returns

Authenticated user.

### Throws

- If user specified in the access token does not exist, or if device does exist for user.

---

## createEndpoint

```typescript
public createEndpoint(settings: EndpointSettings<DataModel>): {
    handler: (request: FastifyRequest, response: FastifyReply) => Promise<void>;
    schema: FastifySchema;
};
```

### Description

Creates a new fastify endpoint from `settings`.

### Parameters

- **settings:** Endpoint configuration.

### Returns

Fastify endpoint to register.

---

## createEndpoints

```typescript
public createEndpoints(instance: FastifyInstance, options?: RegisterOptions): void;
```

### Description

Registers hooks, handlers, auth and CRUD-related endpoints to `instance`.

### Parameters

- **instance:** Fastify instance to register endpoints and hooks to.
- **options:** Additional options to pass to fastify `register` function.
