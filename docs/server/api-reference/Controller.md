---
sidebar_position: 1
title: Controller
description: The @perseid/server Controller must be used as a blueprint for framework-specific implementations.
---

# Controller

Abstract controller, to use as a blueprint for framework-specific implementations.

---

## NOT_FOUND_CODE

HTTP 404 error code.

```typescript
protected readonly NOT_FOUND_CODE: string;
```

---

## FIELDS_QUERY_PARAM_SCHEMA

`fields` built-in query param schema.

```typescript
protected readonly FIELDS_QUERY_PARAM_SCHEMA: StringSchema;
```

---

## LIMIT_QUERY_PARAM_SCHEMA

`limit` built-in query param schema.

```typescript
protected readonly LIMIT_QUERY_PARAM_SCHEMA: NumberSchema;
```

---

## OFFSET_QUERY_PARAM_SCHEMA

`offset` built-in query param schema.

```typescript
protected readonly OFFSET_QUERY_PARAM_SCHEMA: NumberSchema;
```

---

## SORT_BY_QUERY_PARAM_SCHEMA

`sortBy` built-in query param schema.

```typescript
protected readonly SORT_BY_QUERY_PARAM_SCHEMA: StringSchema;
```

---

## SORT_ORDER_QUERY_PARAM_SCHEMA

`sortOrder` built-in query param schema.

```typescript
protected readonly SORT_ORDER_QUERY_PARAM_SCHEMA: StringSchema;
```

---

## AJV_KEYWORDS

List of special Ajv keywords, used to format special types on the fly.

```typescript
protected readonly AJV_KEYWORDS: KeywordDefinition[];
```

---

## AJV_FORMATTERS

List of Ajv formatters, used to format a perseid data model into its Ajv equivalent.

```typescript
protected readonly AJV_FORMATTERS: Record<string, (
  model: FieldSchema<DataModel>,
  requireAllFields: boolean,
) => AjvValidationSchema>;
```

---

## model

Data model to use.

```typescript
protected model: Model;
```

---

## logger

Logging system to use.

```typescript
protected logger: Logger;
```

---

## engine

Engine to use.

```typescript
protected engine: Engine;
```

---

## version

Release version. Will be sent along with responses through the "X-Api-Version" header.

```typescript
protected version: string;
```

---

## endpoints

List of built-in endpoints to register.

```typescript
protected endpoints: BuiltInEndpoints<DataModel>;
```

---

## parseInt

Parses `value` into an integer.

```typescript
protected parseInt: (value: string) => number;
```

---

## textDecoder

Used to format ArrayBuffers into strings.

```typescript
protected textDecoder: TextDecoder;
```

---

## increment

Increment used for `multipart/form-data` payloads parsing.

```typescript
protected increment: number;
```

---

## ajv

Ajv instance for payloads validation.

```typescript
protected ajv: Ajv;
```

---

## handleCORS

Whether to automatically handle CORS (usually in development mode).

```typescript
protected handleCORS: boolean;
```

---

## handleNotFound

Handles HTTP 404 errors.

```typescript
protected handleNotFound(): void;
```

### Usage

```typesript
TODO
```

---

## formatError

Formats `error`.

```typescript
protected formatError(error: unknown, payloadType: string): BadRequest;
```

### Parameters

- **error:** Error to format.
- **payloadType:** Type of payload that failed validation.

### Returns

Formatted error.

### Usage

```typesript
TODO
```

---

## formatOutput

Formats `output` to match fastify data types specifications.

```typescript
protected formatOutput(output: unknown): unknown;
```

### Parameters

- **payloadType:** Type of payload that failed validation.
- **output:** Output to format.

### Returns

Formatted output.

### Usage

```typesript
TODO
```

---

## parseQuery

Parses `query`. Built-in query params (`fields`, `sortBy`, `sortOrder`, `limit`, `offset`)
will be correctly formatted to match engine / database client specifications. Other (custom)
params will be left as is.

```typescript
protected parseQuery(query: Record<string, string | null>): {
fields?: string[];
```

### Parameters

- **output:** Output to format.
- **query:** Request query params.

### Returns

Parsed query params.

### Usage

```typesript
TODO
```

---

## parseFormData

Parses `multipart/form-data` payload, and returns its data.

```typescript
protected parseFormData(
  payload: IncomingMessage,
  options?: FormDataOptions,
): Promise<FormDataFields>;
```

### Parameters

- **query:** Request query params.
- **payload:** Request payload.
- **options:** Parser options. Defaults to `{
  allowedMimeTypes: [],
  maxTotalSize: 10000000,
  maxFileSize: 2000000,
}`.

### Returns

Parsed payload.

### Usage

```typesript
TODO
```

---

## auth

Verifies `accessToken` and `deviceId` to authenticate a user.

```typescript
protected auth(
  accessToken: string,
  deviceId: string,
  ignoreExpiration?: boolean,
): Promise<DataModel['users']>;
```

### Parameters

- **options:** Parser options. Defaults to `{
  allowedMimeTypes: [],
  maxTotalSize: 10000000,
  maxFileSize: 2000000,
}`.
- **accessToken:** Access token to verify.
- **deviceId:** Device id to verify.
- **ignoreExpiration:** Whether to ignore errors when token has expired. Defaults to `false`.

### Returns

Authenticated user.

### Throws

- If `query.sortBy` and `query.sortOrders` sizes do not match.

### Usage

```typesript
TODO
```

---

## catchErrors

Catches and handles most common API errors thrown by `callback`.

```typescript
protected catchErrors<T>(callback: () => Promise<T>): Promise<T>;
```

### Parameters

- **ignoreExpiration:** Whether to ignore errors when token has expired. Defaults to `false`.
- **callback:** Callback to wrap.

### Returns

Wrapped callback.

### Usage

```typesript
TODO
```

---

## constructor

Class constructor.

```typescript
public constructor(
  model: Model,
  logger: Logger,
  engine: Engine,
  settings: ControllerSettings<DataModel>,
);
```

### Parameters

- **callback:** Callback to wrap.
- **model:** Data model to use.
- **logger:** Logging system to use.
- **engine:** Engine to use.
- **settings:** Controller settings.

### Usage

```typesript
TODO
```
