---
sidebar_position: 4
---

# Controller

Handles REST API calls.

```typescript
class Controller<
  /** Data model types definitions. */
  DataModel extends DefaultDataModel = DefaultDataModel,

  /** Model class types definitions. */
  Model extends BaseModel<DataModel> = BaseModel<DataModel>,

  /** Database client types definition. */
  Engine extends UsersEngine<DataModel> = UsersEngine<DataModel>,
>
```

---

## Properties

- **TOKEN_EXPIRED_CODE:** Expired token error code.
- **NOT_VERIFIED_CODE:** User not verified error code.
- **DEFAULT_REQUESTED_FIELDS:** Default value for requested fields.
- **model:** Data model to use.
- **logger:** Logging system to use.
- **engine:** Engine to use.
- **version:** Release version. Will be sent back along with responses through the "X-App-Release" header.
- **endpoints:** List of built-in endpoints to register.
- **parseInt:** Parses `value` into an integer.

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

## isAllowedToFetch

```typescript
protected isAllowedToFetch(requestedFields: Set<string> | undefined, allowedFields: Set<string>): boolean;
```

### Description

Checks if all `requestedFields` are allowed to be fetched.

### Parameters

- **requestedFields:** List of requested fields to check.
- **allowedFields:** List of allowed fields.

### Returns

`true` if every requested field is present in `allowedFields`, `false` otherwise.

---

## formatOutput

```typescript
protected formatOutput(output: unknown): unknown;
```

### Description

Formats `output` to match fastify data types specifications.

### Parameters

- **output:** Output to format.

### Returns

Formatted output.

---

## generateFieldsTreeFrom

```typescript
protected generateFieldsTreeFrom(collection: keyof DataModel | undefined, fields: string[]): { requestedFieldsTree: FieldsTree; requestedCollections: Set<string>; };
```

### Description

Generates the requested fields tree from `fields`.

### Parameters

- **collection:** Requested collection.
- **fields:** List of requested fields.

### Returns

Requested fields tree and collections.

---

## parseQuery

```typescript
protected parseQuery(query: Record<string, string>): {
    fields?: string[];
    sortBy?: string[];
    sortOrder?: number[];
    [key: string]: unknown | number | string | string[];
};
```

### Description

Parses `query`. Built-in query params (`fields`, `sortBy`, `sortOrder`, `limit`, `offset`) will be correctly formatted to match engine / database client specifications. Other (custom) params will be left as is.

### Parameters

- **query:** Request query params.

### Returns

Parsed query params.

---

## parseSearchBody

```typescript
protected parseSearchBody(collection: keyof DataModel, body: SearchBody): SearchBody;
```

### Description

Parses search `body`.

### Parameters

- **collection:** Requested collection.
- **body:** Search body to parse.

### Returns

Parsed search body.

---

## catchErrors

```typescript
protected catchErrors<T>(callback: () => Promise<T>): Promise<T>;
```

### Description

Catches and handles most common API errors thrown by `callback`.

### Parameters

- **callback:** Callback to wrap.

### Returns

Wrapped callback.

---

## rbac

```typescript
protected rbac(payload: unknown, _options: CommandOptions, context: CommandContext & {
    id?: Id | 'me';
    permissions: Set<string>;
    collection?: keyof DataModel;
    requestedFieldsTree: FieldsTree;
    requestedCollections: Set<string>;
    type?: 'SEARCH' | 'LIST' | 'CREATE' | 'UPDATE' | 'VIEW' | 'DELETE';
}): void;
```

### Description

Checks that user has all necessary permissions to perform the given operation.

### Parameters

- **payload:** Request payload, if applicable.
- **_options:** Request options.
- **context:** Request context.

### Throws

- If user email address is not yet verified.
- If user is missing any of the required permissions.
