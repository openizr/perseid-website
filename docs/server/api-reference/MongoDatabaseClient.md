---
sidebar_position: 1
title: MongoDatabaseClient
description: The @perseid/server MongoDatabaseClient is the database client, designed for MongoDB.
---

# MongoDatabaseClient

MongoDB database client.
Extends `@perseid/server` `AbstractDatabaseClient` class.

---

## client

MongoDB client instance.

```typescript
protected client: MongoClient;
```

---

## databaseConnection

MongoDB database instance.

```typescript
protected databaseConnection: Db;
```

---

## generateResourceMetadata

Generates metadata for `resource`, including fields, indexes, and constraints, necessary to
generate the database structure and handle resources deletion.

```typescript
protected generateResourceMetadata<Resource extends keyof DataModel & string>(
  resource: Resource,
): void;
```

### Parameters

- **resource:** Type of resource for which to generate metadata.

### Usage

```typesript
TODO
```

---

## parseFields

Returns DBMS-specific formatted query metadata and projections from `fields`.

```typescript
protected parseFields<Resource extends keyof DataModel & string>(
  resource: Resource,
  fields: Set<string>,
  maximumDepth: number,
  searchBody?: SearchBody | null,
  sortBy?: Partial<Record<string, 1 | -1>>,
): { projections: unknown; formattedQuery: FormattedQuery; };
```

### Parameters

- **resource:** Type of resource for which to generate metadata.
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

### Usage

```typesript
TODO
```

---

## generateQuery

Generates the final DBMS-specific query from `formattedQuery`.

```typescript
protected generateQuery<Resource extends keyof DataModel & string>(
  resource: Resource,
  formattedQuery: FormattedQuery,
): unknown;
```

### Parameters

- **sortBy:** Optional sorting to apply to the request. Defaults to `{}`.
- **resource:** Type of resource for which to generate database query.
- **formattedQuery:** Formatted query to generate database query from.

### Returns

Final DBMS-specific query.

### Usage

```typesript
TODO
```

---

## structurePayload

Recursively formats `payload` into a structured format for database storage.

```typescript
protected structurePayload<Resource extends keyof DataModel & string>(
  resource: Resource,
  _resourceId: Id,
  payload: Payload<DataModel[Resource]>,
  mode: 'CREATE' | 'UPDATE',
): StructuredPayload;
```

### Parameters

- **formattedQuery:** Formatted query to generate database query from.
- **resource:** Type of resource to format.
- **resourceId:** Id of the related resource.
- **payload:** Payload to format.
- **mode:** Whether to structure payload for creation, or just a partial update.

### Returns

Structured format for database storage.

### Usage

```typesript
TODO
```

---

## formatResources

Formats `results` into a database-agnostic structure, containing only requested fields.

```typescript
protected formatResources<Resource extends keyof DataModel & string>(
  resource: Resource,
  results: unknown[],
  fields: unknown,
): DataModel[Resource][];
```

### Parameters

- **mode:** Whether to structure payload for creation, or just a partial update.
- **resource:** Type of resource to format.
- **results:** List of database raw results to format.
- **fields:** Fields tree used to format results.
- **mapping:** Mapping between DBMS-specific field name and real field path.

### Returns

Formatted results.

### Usage

```typesript
TODO
```

---

## checkReferencesTo

Makes sure that no resource references resource with id `id`.

```typescript
protected checkReferencesTo<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
): Promise<void>;
```

### Parameters

- **mapping:** Mapping between DBMS-specific field name and real field path.
- **resource:** Type of resource to check.
- **id:** Id of the resource to check for references.

### Throws

- If maximum level of resources depth is exceeded.

### Usage

```typesript
TODO
```

---

## handleError

Connects database client to the database server before performing any query, and handles
common database server errors. You should always use this method to wrap your code.

```typescript
protected handleError<T>(callback: () => Promise<T>): Promise<T>;
```

### Parameters

- **id:** Id of the resource to check for references.
- **callback:** Callback to wrap in the error handler.

### Throws

- If any other resource still references resource.
- If connection to the server failed.

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
  cache: CacheClient,
  settings: DatabaseClientSettings,
);
```

### Parameters

- **callback:** Callback to wrap in the error handler.
- **model:** Data model to use.
- **logger:** Logging system to use.
- **cache:** Cache client instance to use for results caching.
- **settings:** Database client settings.

### Usage

```typesript
TODO
```

---

## dropDatabase

Drops the entire database.

```typescript
public dropDatabase(): Promise<void>;
```

### Parameters

- **settings:** Database client settings.

### Usage

```typesript
TODO
```

---

## createDatabase

Creates the database.

```typescript
public createDatabase(): Promise<void>;
```

### Parameters

- **settings:** Database client settings.

### Usage

```typesript
TODO
```

---

## createMissingStructures

Creates missing database structures for current data model.

```typescript
public createMissingStructures(): Promise<void>;
```

### Parameters

- **settings:** Database client settings.

### Usage

```typesript
TODO
```

---

## reset

Resets the whole underlying database, re-creating structures, indexes, and such.

```typescript
public reset(): Promise<void>;
```

### Parameters

- **settings:** Database client settings.

### Usage

```typesript
TODO
```

---

## checkForeignIds

Makes sure that `foreignIds` reference existing resources that match specific conditions.

```typescript
public checkForeignIds<Resource extends keyof DataModel & string>(
  _resource: Resource,
  foreignIds: Map<string, { resource: keyof DataModel & string; filters: SearchFilters; }>,
```

### Parameters

- **settings:** Database client settings.
- **foreignIds:** Foreign ids to check in database.

### Throws

- Transformed database error if applicable, original error otherwise.

### Usage

```typesript
TODO
```

---

## create

Creates a new resource in database.

```typescript
public create<Resource extends keyof DataModel & string>(
  resource: Resource,
  payload: DataModel[Resource],
): Promise<void>;
```

### Parameters

- **foreignIds:** Foreign ids to check in database.
- **resource:** Type of resource to create.
- **payload:** New resource payload.

### Usage

```typesript
TODO
```

---

## update

Updates resource with id `id` in database.

```typescript
public update<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  payload: Payload<DataModel[Resource]>,
): Promise<boolean>;
```

### Parameters

- **payload:** New resource payload.
- **resource:** Type of resource to update.
- **id:** Resource id.
- **payload:** Updated resource payload.

### Returns

`true` if resource has been successfully updated, `false` otherwise.

### Usage

```typesript
TODO
```

---

## view

Fetches resource with id `id` from database.

```typescript
public view<Resource extends keyof DataModel & string>(
  resource: Resource,
  id: Id,
  options?: ViewCommandOptions,
): Promise<DataModel[Resource] | null>;
```

### Parameters

- **payload:** Updated resource payload.
- **resource:** Type of resource to fetch.
- **id:** Id of the resource to fetch.
- **options:** Query options. Defaults to `{}`.

### Returns

Resource if it exists, `null` otherwise.

### Usage

```typesript
TODO
```

---

## search

Fetches a paginated list of resources from database, that match specific filters/query.

```typescript
public search<Resource extends keyof DataModel & string>(
  resource: Resource,
  body: SearchBody,
  options?: SearchCommandOptions,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **options:** Query options. Defaults to `{}`.
- **resource:** Type of resources to fetch.
- **body:** Search/filters body.
- **options:** Query options. Defaults to `{}`.

### Returns

Paginated list of resources.

### Usage

```typesript
TODO
```

---

## list

Fetches a paginated list of resources from database.

```typescript
public list<Resource extends keyof DataModel & string>(
  resource: Resource,
  options?: ListCommandOptions,
): Promise<Results<DataModel[Resource]>>;
```

### Parameters

- **options:** Query options. Defaults to `{}`.
- **resource:** Type of resources to fetch.
- **options:** Query options. Defaults to `{}`.

### Returns

Paginated list of resources.

### Usage

```typesript
TODO
```

---

## delete

Deletes resource with id `id` from database.

```typescript
public delete<Resource extends keyof DataModel & string>(
resource: Resource,
id: Id,
): Promise<boolean>;
```

### Parameters

- **options:** Query options. Defaults to `{}`.
- **resource:** Type of resource to delete.
- **id:** Resource id.

### Returns

`true` if resource has been successfully deleted, `false` otherwise.

### Usage

```typesript
TODO
```

