---
sidebar_position: 1
title: AbstractDatabaseClient
description: The @perseid/server AbstractDatabaseClient must be used as a blueprint for DBMS-specific implementations.
---

# AbstractDatabaseClient

Abstract database client, to use as a blueprint for DBMS-specific implementations.

---

## SPLITTING_TOKENS

Pattern used to split full-text search queries into separate tokens.

```typescript
protected readonly SPLITTING_TOKENS: RegExp;
```

---

## DEFAULT_OFFSET

Default pagination offset value.

```typescript
protected readonly DEFAULT_OFFSET: number;
```

---

## DEFAULT_LIMIT

Default pagination limit value.

```typescript
protected readonly DEFAULT_LIMIT: number;
```

---

## DEFAULT_MAXIMUM_DEPTH

Default maximum level of resources depth.

```typescript
protected readonly DEFAULT_MAXIMUM_DEPTH: number;
```

---

## DEFAULT_SEARCH_COMMAND_OPTIONS

Default search command options.

```typescript
protected readonly DEFAULT_SEARCH_COMMAND_OPTIONS: SearchCommandOptions;
```

---

## DEFAULT_LIST_COMMAND_OPTIONS

Default list command options.

```typescript
protected readonly DEFAULT_LIST_COMMAND_OPTIONS: ListCommandOptions;
```

---

## DEFAULT_VIEW_COMMAND_OPTIONS

Default view command options.

```typescript
protected readonly DEFAULT_VIEW_COMMAND_OPTIONS: ViewCommandOptions;
```

---

## VALIDATORS

List of payload validators, used to check payloads integrity.

```typescript
protected readonly VALIDATORS: Record<string, (
  path: string,
  payload: unknown,
  schema: FieldSchema<DataModel>,
) => void>;
```

---

## logger

Logging system.

```typescript
protected logger: Logger;
```

---

## cache

Cache client, used for results caching.

```typescript
protected cache: CacheClient;
```

---

## database

Database to use.

```typescript
protected database: string;
```

---

## model

Perseid data model to use.

```typescript
protected model: Model;
```

---

## isConnected

Whether database client is connected to the server.

```typescript
protected isConnected: boolean;
```

---

## resourcesMetadata

Resources metadata, used to generate database structure and handle resources deletion.

```typescript
protected resourcesMetadata: Record<string, ResourceMetadata>;
```

---

## generateResourceMetadata

Generates metadata for `resource`, including fields, indexes, and constraints, necessary to
generate the database structure and handle resources deletion.

```typescript
protected abstract generateResourceMetadata<Resource extends keyof DataModel & string>(
  resource: Resource,
): void;
```

### Parameters

- **resource:** Type of resource for which to generate metadata.

### Returns

Resource metadata.

### Usage

```typescript
TODO
```

---

## parseFields

Returns DBMS-specific formatted query metadata and projections from `fields`.

```typescript
protected abstract parseFields<Resource extends keyof DataModel & string>(
  resource: Resource,
  fields: Set<string>,
  maximumDepth: number,
  searchBody?: SearchBody | null,
  sortBy?: Partial<Record<string, 1 | -1>>,
): { projections: unknown; formattedQuery: FormattedQuery; };
```

### Parameters

- **resource:** Type of resource to query.
- **fields:** List of fields to fetch from database.
- **maximumDepth:** Maximum allowed level of resources depth.
- **searchBody:** Optional search body to apply to the request. Defaults to `null`.
- **sortBy:** Optional sorting to apply to the request. Defaults to `{}`.

### Returns

Formatted query, along with projections.

### Throws

- If field path does not exist in data model.
- If field path is not a leaf in data model.
- If any field path in search body is not indexed.
- If any field path in sorting is not sortable.
- If maximum level of resources depth is exceeded.

### Usage

```typescript
TODO
```

---

## generateQuery

Generates the final DBMS-specific query from `formattedQuery`.

```typescript
protected abstract generateQuery<Resource extends keyof DataModel & string>(
  resource: Resource,
  formattedQuery: FormattedQuery,
): unknown;
```

### Parameters

- **resource:** Type of resource for which to generate database query.
- **formattedQuery:** Formatted query to generate database query from.

### Returns

Final DBMS-specific query.

### Usage

```typescript
TODO
```

---

## structurePayload

Recursively formats `payload` into a structured format for database storage.

```typescript
protected abstract structurePayload<Resource extends keyof DataModel & string>(
  resource: Resource,
  resourceId: Id,
  payload: Payload<DataModel[Resource]>,
  mode: 'CREATE' | 'UPDATE',
): StructuredPayload;
```

### Parameters

- **resource:** Type of resource to format.
- **resourceId:** Id of the related resource.
- **payload:** Payload to format.
- **mode:** Whether to structure payload for creation, or just a partial update.

### Returns

Structured format for database storage.

### Usage

```typescript
TODO
```

---

## formatResources

Formats `results` into a database-agnostic structure, containing only requested fields.

```typescript
protected abstract formatResources<Resource extends keyof DataModel & string>(
  resource: Resource,
  results: unknown[],
  fields: unknown,
  mapping: Map<string, string>
): DataModel[Resource][];
```

### Parameters

- **resource:** Type of resource to format.
- **results:** List of database raw results to format.
- **fields:** Fields tree used to format results.
- **mapping:** Mapping between DBMS-specific field name and real field path.

### Returns

Formatted results.

### Usage

```typescript
TODO
```

---

## handleError

Connects database client to the database server before performing any query, and handles
common database server errors. You should always use this method to wrap your code.

```typescript
protected abstract handleError<T>(callback: () => Promise<T>): Promise<T>;
```

### Parameters

- **callback:** Callback to wrap in the error handler.

### Returns

Formatted results.

### Throws

- If connection to the server failed.
- Transformed database error if applicable, original error otherwise.

### Usage

```typescript
TODO
```

---

## constructor

Class constructor.

```typescript
public constructor(
  model: Model,
  logger: Logger,
  cache: CacheClient,
  settings: DatabaseClientSettings,
);
```

### Parameters

- **model:** Data model to use.
- **logger:** Logging system to use.
- **cache:** Cache client instance to use for results caching.
- **settings:** Database client settings.

### Usage

```typescript
TODO
```

---

## dropDatabase

Drops the entire database.

```typescript
public abstract dropDatabase(): Promise<void>;
```

### Usage

```typescript
TODO
```

---

## createDatabase

Creates the database.

```typescript
public abstract createDatabase(): Promise<void>;
```

### Usage

```typescript
TODO
```

---

## createMissingStructures

Creates missing database structures for current data model.

```typescript
public abstract createMissingStructures(): Promise<void>;
```

### Usage

```typescript
TODO
```

---

## reset

Resets the whole underlying database, re-creating structures, indexes, and such.

```typescript
public abstract reset(): Promise<void>;
```

### Usage

```typescript
TODO
```

---

## checkForeignIds

Makes sure that `foreignIds` reference existing resources that match specific conditions.

```typescript
public abstract checkForeignIds<Resource extends keyof DataModel & string>(
  resource: Resource,
  foreignIds: Map<string, { resource: keyof DataModel & string; filters: SearchFilters; }>,
): Promise<void>;
```

### Parameters

- **foreignIds:** Foreign ids to check in database.

### Throws

- If any foreign id does not exist.

### Usage

```typescript
TODO
```

---

## create

Creates a new resource in database.

```typescript
public abstract create<Resource extends keyof DataModel & string>(
  resource: Resource,
  payload: DataModel[Resource],
): Promise<void>;
```

### Parameters

- **resource:** Type of resource to create.
- **payload:** New resource payload.

### Usage

```typescript
TODO
```

---

## update

Updates resource with id `id` in database.

```typescript
public abstract update<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  payload: Payload<DataModel[Resource]>,
): Promise<boolean>;
```

### Parameters

- **resource:** Type of resource to update.
- **id:** Resource id.
- **payload:** Updated resource payload.

### Returns

`true` if resource has been successfully updated, `false` otherwise.

### Usage

```typescript
TODO
```

---

## view

Fetches resource with id `id` from database.

```typescript
public abstract view<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  options?: ViewCommandOptions,
): Promise<DataModel[Resource] | null>;
```

### Parameters

- **resource:** Type of resource to fetch.
- **id:** Id of the resource to fetch.
- **options:** Query options. Defaults to `{}`.

### Returns

Resource if it exists, `null` otherwise.

### Usage

```typescript
TODO
```

---

## search

Fetches a paginated list of resources from database, that match specific filters/query.

```typescript
public abstract search<Resource extends keyof DataModel & string>(
  resource: Resource,
  body: SearchBody,
  options?: SearchCommandOptions,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **resource:** Type of resources to fetch.
- **body:** Search/filters body.
- **options:** Query options. Defaults to `{}`.

### Returns

Paginated list of resources.

### Usage

```typescript
TODO
```

---

## list

Fetches a paginated list of resources from database.

```typescript
public abstract list<Resource extends keyof DataModel & string>(
  resource: Resource,
  options?: ListCommandOptions,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **resource:** Type of resources to fetch.
- **options:** Query options. Defaults to `{}`.

### Returns

Paginated list of resources.

### Usage

```typescript
TODO
```

---

## delete

Deletes resource with id `id` from database.

```typescript
public abstract delete<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
): Promise<boolean>;
```

### Parameters

- **resource:** Type of resource to delete.
- **id:** Resource id.

### Returns

`true` if resource has been successfully deleted, `false` otherwise.

### Usage

```typescript
TODO
```
