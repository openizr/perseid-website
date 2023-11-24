---
sidebar_position: 4
---

# DatabaseClient

MongoDB database client.

```typescript
class DatabaseClient<
  /** Data model types definitions. */
  DataModel = DefaultDataModel,

  /** Model class types definitions. */
  Model extends BaseModel<DataModel> = BaseModel<DataModel>,
>
```

---

## Properties

- **DEFAULT_SORTING_PIPELINE:** Default sorting pipeline.
- **SPLITTING_TOKENS:** Pattern used to split full-text search queries into separate tokens.
- **DELETION_FILTER_PIPELINE:** Pipeline to use first when fetching results from collections that don't enable deletion.
- **TOTAL_PIPELINE:** Used to calculate total number of results for a given query.
- **DEFAULT_OFFSET:** Default pagination offset value.
- **DEFAULT_LIMIT:** Default pagination limit value.
- **DEFAULT_MAXIMUM_DEPTH:** Default maximum level of resources depth.
- **DEFAULT_QUERY_OPTIONS:** Default query options.
- **FORMATTERS:** List of formatters, used to format a perseid data model into its MongoDB equivalent.
- **logger:** Logging system.
- **cache:** Cache client, used for results caching.
- **cacheDuration:** Cache duration, in seconds.
- **client:** MongoDB client instance.
- **database:** MongoDB database instance.
- **model:** Perseid data model to use.
- **isConnected:** Whether MongoDB client is connected to the server.
- **relationsPerCollection:** List of fields in data model representing external relations, per collection.
- **invertedRelationsPerCollection:** List of fields in data model referencing each collection, grouped by this collection.

---

## constructor

```typescript
public constructor(model: Model, logger: Logger, cache: CacheClient, settings: DatabaseClientSettings);
```

### Description

Class constructor.

### Parameters

- **model:** Data model to use.
- **logger:** Logging system to use.
- **cache:** Cache client instance to use for results caching.
- **settings:** Database client settings.

---

## formatInput

```typescript
protected formatInput<Collection extends keyof DataModel>(input: Partial<DataModel[Collection]>): Document;
```

### Description

Formats `input` to match MongoDB data types specifications.

### Parameters

- **input:** Input to format.

### Returns

MongoDB-formatted input.

---

## formatPayload

```typescript
protected formatPayload<Collection extends keyof DataModel>(payload: Partial<DataModel[Collection]>, path?: (keyof Partial<DataModel[Collection]>)[]): Document;
```

### Description

Formats `payload` for MongoDB update.

### Parameters

- **payload:** Payload to format.
- **path:** Optional path for payload formatting.

### Returns

MongoDB-formatted payload.

---

## formatOutput

```typescript
protected formatOutput<Collection extends keyof DataModel>(output: Document, projections: Document | 1): Partial<DataModel[Collection]>;
```

### Description

Formats `output` to match database-independent data types specifications.

### Parameters

- **output:** Output to format.
- **projections:** List of current output fields to return.

### Returns

Formatted output.

---

## checkReferencesTo

```typescript
protected checkReferencesTo(collection: keyof DataModel, id: Id): Promise<void>;
```

### Description

Makes sure that no collection references resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection the resource belongs to.
- **id:** Id of the resource to check for references.

### Throws

- If any collection still references resource.

---

## getCollectionIndexedFields

```typescript
protected getCollectionIndexedFields(schema: FieldSchema<DataModel>, path?: string[]): Index[];
```

### Description

Returns all indexed fields for `schema`.

### Parameters

- **schema:** Current data model schema for which to get indexes.
- **path:** Optional path for indexed fields.

### Returns

Collection's indexed fields.

---

## scanRelationsFrom

```typescript
protected scanRelationsFrom(schema: FieldSchema<DataModel>, relations: Map<string, string[]>, path?: string[]): void;
```

### Description

Scans `schema` to find foreign keys.

### Parameters

- **schema:** Data model schema to scan.
- **relations:** Map into which list of foreign keys and their related paths will be stored.
- **path:** Optional current path in schema.

---

## createSchema

```typescript
protected createSchema(schema: ObjectSchema<DataModel>): { $jsonSchema: MongoValidationSchema; };
```

### Description

Creates a Mongo validation schema from `schema`.

### Parameters

- **schema:** Model from which to create validation schema.

### Returns

Mongo validation schema.

---

## projectFromPath

```typescript
protected projectFromPath(path: string, maximumDepth: number, checkIndexing: boolean, splittedPath: string[], schema?: FieldSchema<DataModel>, projections?: Document, currentDepth?: number): Document;
```

### Description

Generates MongoDB-flavored projections object, from `path`.

### Parameters

- **path:** Full path in the data model from which to generate projection.
- **maximumDepth:** Maximum allowed level of resources depth.
- **checkIndexing:** Whether to check that field is indexed.
- **splittedPath:** Remaining path to analyze.
- **schema:** Optional current path data model schema.
- **projections:** Optional current path projections object.
- **currentDepth:** Optional current level of resources depth.

### Returns

MongoDB projections object.

### Throws

- If given path is not a valid field in data model.
- If maximum level of resources depth has been exceeded.
- If `checkIndexing` is `true` and given path is not an indexed field in data model.

---

## generateProjectionsFrom

```typescript
protected generateProjectionsFrom(fields: { classic: string[]; indexed?: string[] }, schema: FieldSchema<DataModel>, maximumDepth: number): Document;
```

### Description

Generates MongoDB-flavored list of fields to project in results, from `fields`.

### Parameters

- **fields:** Fields from which to generate projections object.
- **schema:** Root collection schema.
- **maximumDepth:** Maximum allowed level of resources depth.

### Returns

MongoDB projections.

---

## generateLookupsPipelineFrom

```typescript
protected generateLookupsPipelineFrom(projections: Document, schema: FieldSchema<DataModel>, path?: string[], isFlatArray?: boolean): Document[];
```

### Description

Generates MongoDB `$lookup`s pipeline from `projections`.

### Parameters

- **projections:** Projections from which to generate pipeline.
- **schema:** Current path data model schema.
- **path:** Optional current path in data model.
- **isFlatArray:** Optional flag indicating if current path is part of a flat array.

### Returns

Generated `$lookup`s pipeline.

---

## generateSortingPipelineFrom

```typescript
protected generateSortingPipelineFrom(sortBy: Exclude<CommandOptions['sortBy'], undefined>, sortOrder: Exclude<CommandOptions['sortOrder'], undefined>): Document[];
```

### Description

Generates MongoDB `$sort` pipeline from `sortBy` and `sortOrder`.

### Parameters

- **sortBy:** List of fields' paths to sort results by.
- **sortOrder:** Sorting orders (asc/desc) for each field path.

### Returns

Generated `$sort` pipeline.

### Throws

- If `sortBy` and `sortOrder` are not the same size.

---

## generatePaginationPipelineFrom

```typescript
protected generatePaginationPipelineFrom(offset?: number, limit?: number): Document[];
```

### Description

Generates MongoDB `$skip` and `$limit` pipeline from `offset` and `limit`.

### Parameters

- **offset:** Pagination offset.
- **limit:** Maximum number of results to fetch.

### Returns

Generated pagination pipeline.

---

## generateSearchPipelineFrom

```typescript
protected generateSearchPipelineFrom(query: SearchQuery | null, filters: SearchFilters | null): Document[];
```

### Description

Generates MongoDB search pipeline from `query` and `filters`.

### Parameters

- **query:** Search query.
- **filters:** Search filters.

### Returns

Generated search pipeline.

---

## handleError

```typescript
protected handleError<T>(callback: () => Promise<T>): Promise<T>;
```

### Description

Connects database client to the MongoDB server before performing any query, and handles common MongoDB server errors.

### Parameters

- **callback:** Callback to wrap in the error handler.

### Throws

- If connection to the server failed.
- Transformed MongoDB error if applicable, original error otherwise.

---
## checkFields

```typescript
public checkFields(collection: keyof DataModel, fields: string[], maximumDepth?: number): void;
```

### Description

Exposes `generateProjectionsFrom` method in order to make sure that all `fields` are valid.

### Parameters

- **collection:** Root collection from which to check fields.
- **fields:** Fields to check.
- **maximumDepth:** Optional maximum allowed level of resources depth.

---

## checkForeignIds

```typescript
public checkForeignIds(foreignIds: Map<string, SearchFilters[]>): Promise<void>;
```

### Description

Makes sure that `foreignIds` reference existing resources that match specific conditions.

### Parameters

- **foreignIds:** Foreign ids to check in database.

### Throws

- If any foreign id does not exist.

---

## create

```typescript
public create<Collection extends keyof DataModel>(collection: Collection, resource: DataModel[Collection]): Promise<void>;
```

### Description

Inserts `resource` into `collection`.

### Parameters

- **collection:** Name of the collection to insert resource into.
- **resource:** New resource to insert.

---

## update

```typescript
public update<Collection extends keyof DataModel>(collection: Collection, id: Id, payload: Partial<DataModel[Collection]>): Promise<void>;
```

### Description

Updates resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to update resource from.
- **id:** Resource id.
- **payload:** Updated resource payload.

---

## exclusiveUpdate

```typescript
public exclusiveUpdate<Collection extends keyof DataModel>(collection: Collection, filters: SearchFilters, payload: Partial<DataModel[Collection]>): Promise<boolean>;
```

### Description

Updates resource matching `filters` from `collection`, using a write lock.

### Parameters

- **collection:** Name of the collection to update resource from.
- **filters:** Filters that resource must match.
- **payload:** Updated resource payload.

### Returns

`true` if resource was updated, `false` otherwise.

---

## view

```typescript
public view<Collection extends keyof DataModel>(collection: Collection, id: Id, options?: CommandOptions): Promise<DataModel[Collection] | null>;
```

### Description

Fetches resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to fetch resource from.
- **id:** Id of the resource to fetch.
- **options:** Optional query options.

### Returns

Resource if it exists, `null` otherwise.

---

## search

```typescript
public search<Collection extends keyof DataModel>(collection: Collection, body: SearchBody, options?: CommandOptions): Promise<Results<DataModel[Collection]>>;
```

### Description

Fetches a paginated list of resources from `collection`, that match specific filters/query.

### Parameters

- **collection:** Collection to fetch resources from.
- **body:** Search/filters body.
- **options:** Optional query options.

### Returns

Paginated list of resources.

---

## list

```typescript
public list<Collection extends keyof DataModel>(collection: Collection, options?: CommandOptions): Promise<Results<DataModel[Collection]>>;
```

### Description

Fetches a paginated list of resources from `collection`.

### Parameters

- **collection:** Name of the collection from which to fetch resources.
- **options:** Optional query options.

### Returns

Paginated list of resources.

---

## delete

```typescript
public delete<Collection extends keyof DataModel>(collection: Collection, id: Id, payload?: Partial<DataModel[Collection]>): Promise<boolean>;
```

### Description

Deletes resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to delete resource from.
- **id:** Resource id.
- **payload:** Optional additional payload to update resource with in case of soft-deletion.

### Returns

`true` if resource has been successfully deleted, `false` otherwise.

---

## dropDatabase

```typescript
public dropDatabase(): Promise<void>;
```

### Description

Drops entire database.

---

## createDatabase

```typescript
public createDatabase(): Promise<void>;
```

### Description

Creates database.

---

## resetCollection

```typescript
public resetCollection<Collection extends keyof DataModel>(collection: Collection): Promise<void>;
```

### Description

Creates collection with name `name`.

### Parameters

- **collection:** Name of the collection to create.

---

## updateCollection

```typescript
public updateCollection<Collection extends keyof DataModel>(collection: Collection, migration?: MigrationCallback): Promise<void>;
```

### Description

Performs a validation schema update and a data migration on collection with name `name`.

### Parameters

- **collection:** Name of the collection to update.
- **migration:** Optional migration to perform.

---

## dropCollection

```typescript
public dropCollection(collection: keyof DataModel): Promise<void>;
```

### Description

Drops `collection` from database.

### Parameters

- **collection:** Name of the collection to drop from database.
