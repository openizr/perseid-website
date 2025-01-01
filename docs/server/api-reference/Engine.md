---
sidebar_position: 1
title: Engine
description: The @perseid/server Engine contains all the basic CRUD methods.
---

# Engine

Perseid engine, contains all the basic CRUD methods.

---

## model

Data model.

```typescript
protected model: Model;
```

---

## logger

Logging system.

```typescript
protected logger: Logger;
```

---

## databaseClient

Database client.

```typescript
protected databaseClient: DatabaseClient;
```

---


## rbac

Makes sure that user has all necessary permissions to perform `operation`.

```typescript
protected rbac<Resource extends keyof DataModel & string>(
  requiredPermissions: Set<string>,
  existingResource: DataModel[Resource] | null,
  payload: unknown,
  context: CommandContext<DataModel>,
): Promise<void>;
```

### Parameters

- **operation:** Name of the operation to perform.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Operation payload, if applicable, `null` otherwise.
- **context:** Request context.

### Throws

- If user email address is not yet verified.
- If user is missing any of the required permissions.
- If user account is not verified yet.

### Usage

```typesript
TODO
```

---

## parseFields

Parses `fields`, making sure they are all valid paths in `resource` data model, transforming
`*` specific statements into the proper list of sub-fields, and checking user permissions for
specific fields.

```typescript
protected parseFields<Resource extends keyof DataModel & string>(
  resource: Resource,
  fields: Set<string>,
  maximumDepth?: number,
): {
  fields: Set<string>;
  permissions: Set<string>;
};
```

### Parameters

- **resource:** Type of resource for which to parse fields.
- **fields:** List of fields to fetch from database.
- **context:** Command context.
- **maximumDepth:** Maximum allowed level of resources depth. Defaults to `3`.

### Returns

List of parsed fields.

### Throws

- If field path does not exist in data model.
- If maximum level of resources depth is exceeded.
- If user does not have sufficient permissions to access to any of the fields.

### Usage

```typesript
TODO
```

---

## getResourceFields

Returns the list of fields to fetch when retrieving an existing resource for update.

```typescript
protected getResourceFields<Resource extends keyof DataModel & string>(
  resource: Resource,
): Set<string>;
```

### Parameters

- **resource:** Type of resource for which to get existing fields.

### Returns

Fields list.

### Usage

```typesript
TODO
```

---

## getRelationFilters

Returns filters to apply when checking foreign ids referencing other relations.

```typescript
protected getRelationFilters<Resource extends keyof DataModel & string>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  path: string,
  ids: Id[],
  payload: UpdatePayload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): SearchFilters;
```

### Parameters

- **resource:** Type of resource for which to get existing fields.
- **resource:** Type of resource for which to return filters.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **path:** Path to the relation reference in data model.
- **ids:** List of foreign ids to check.
- **payload:** Payload for updating or creating resource.
- **context:** Command context.

### Returns

Filters to apply to check foreign ids.

### Usage

```typesript
TODO
```

---

## withAutomaticFields

Returns updated `payload` with automatic fields.

```typescript
protected withAutomaticFields<Resource extends keyof DataModel & string>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  payload: Payload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): Promise<Payload<DataModel[Resource]>>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource for which to generate automatic fields.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Payload to update.
- **context:** Command context.

### Returns

Payload with automatic fields.

### Usage

```typesript
TODO
```

---

## checkAndUpdatePayload

Performs specific checks `payload` to make sure it is valid, and updates it if necessary.

```typescript
protected checkAndUpdatePayload<Resource extends keyof DataModel & string>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  payload: Payload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): Promise<Payload<DataModel[Resource]>>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource for which to check and update payload.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Payload to validate and update.
- **context:** Command context.

### Usage

```typesript
TODO
```

---

## reset

Resets the whole system, including database.

```typescript
public reset(...args: unknown[]): Promise<void>;
```

### Usage

```typesript
TODO
```

---

## generateContext

Generates full command context.

```typescript
public generateContext(
  userId: Id,
  deviceId?: string,
  userAgent?: string,
): Promise<CommandContext<DataModel>>;
```

### Parameters

- **userId:** Id of the user to populate context with.
- **deviceId:** Device id to add to the context.
- **userAgent:** User agent to add to the context.

### Returns

Generated command context.

### Throws

- If user does not exist.

### Usage

```typesript
TODO
```

---

## create

Creates a new resource.

```typescript
public create<Resource extends keyof DataModel & string>(
  resource: Resource,
  payload: CreatePayload<DataModel[Resource]>,
  options: ViewCommandOptions,
  context: CommandContext<DataModel>,
): Promise<DataModel[Resource]>;
```

### Parameters

- **userAgent:** User agent to add to the context.
- **resource:** Type of resource to create.
- **payload:** New resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Newly created resource.

### Usage

```typesript
TODO
```

---

## update

Updates resource with id `id`.

```typescript
public update<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  payload: UpdatePayload<DataModel[Resource]>,
  options: ViewCommandOptions,
  context: CommandContext<DataModel>,
): Promise<DataModel[Resource]>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource to update.
- **id:** Resource id.
- **payload:** Updated resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Updated resource.

### Throws

- If resource does not exist or has been deleted.

### Usage

```typesript
TODO
```

---

## view

Fetches resource with id `id`.

```typescript
public view<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  options: ViewCommandOptions,
  context: CommandContext<DataModel>,
): Promise<DataModel[Resource]>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource to fetch.
- **id:** Resource id.
- **options:** Command options.
- **context:** Command context.

### Returns

Resource, if it exists.

### Throws

- If resource does not exist or has been deleted.

### Usage

```typesript
TODO
```

---

## list

Fetches a paginated list of resources.

```typescript
public list<Resource extends keyof DataModel & string>(
  resource: Resource,
  options: ListCommandOptions,
  context: CommandContext<DataModel>,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resources to fetch.
- **options:** Command options.
- **context:** Command context.

### Returns

Paginated list of resources.

### Usage

```typesript
TODO
```

---

## search

Fetches a paginated list of resources matching `searchBody` constraints.

```typescript
public search<Resource extends keyof DataModel & string>(
  resource: Resource,
  searchBody: SearchBody,
  options: SearchCommandOptions,
  context: CommandContext<DataModel>,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resources to fetch.
- **searchBody:** Search body (filters, text query) to filter resources with.
- **options:** Command options.
- **context:** Command context.

### Returns

Paginated list of resources.

### Usage

```typesript
TODO
```

---

## delete

Deletes resource with id `id`.

```typescript
public delete<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  context: CommandContext<DataModel>,
): Promise<void>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource to delete.
- **id:** Resource id.
- **context:** Command context.
- **context:** Command context.

### Throws

- If resource does not exist or has been deleted.

### Usage

```typesript
TODO
```
