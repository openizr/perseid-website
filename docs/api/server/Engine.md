---
sidebar_position: 4
---

# Engine

Perseid engine, contains all the basic CRUD methods.

```typescript
class Engine<
  /** Data model types definitions. */
  DataModel,

  /** Model class types definitions. */
  Model extends BaseModel<DataModel> = BaseModel<DataModel>,

  /** Database client types definition. */
  DatabaseClient extends BaseDatabaseClient<DataModel> = BaseDatabaseClient<DataModel>,
>
```

---

## Properties

- **model:** Data model.
- **logger:** Logging system.
- **databaseClient:** Database client.
- **defaultPayload:** Default update payload, used as a fallback when there is no change to perform on resource.

---

## constructor

```typescript
constructor(model: Model, logger: Logger, databaseClient: DatabaseClient);
```

### Description

Class constructor.

### Parameters

- **model:** Data model to use.
- **logger:** Logging system to use.
- **databaseClient:** Database client to use.

---

## createRelationFilters

```typescript
protected createRelationFilters<Collection extends keyof DataModel>(collection: Collection, path: string, ids: Id[], payload: UpdatePayload<DataModel[Collection]>, context: CommandContext): SearchFilters;
```

### Description

Returns filters to apply when checking foreign ids referencing other relations.

### Parameters

- **collection:** Collection for which to return filters.
- **path:** Path to the relation reference in data model.
- **ids:** List of foreign ids to check.
- **payload:** Payload for updating or creating resource.
- **context:** Command context.

### Returns

Filters to apply to check foreign ids.

---

## checkForeignIds

```typescript
protected checkForeignIds<Collection extends keyof DataModel>(collection: Collection, payload: UpdatePayload<DataModel[Collection]>, context: CommandContext): Promise<void>;
```

### Description

Makes sure that foreign ids in `payload` reference existing resources that match specific conditions.

### Parameters

- **collection:** Collection for which to check foreign ids.
- **payload:** Payload for updating or creating resource.
- **context:** Command context.

---

## withAutomaticFields

```typescript
protected withAutomaticFields<Collection extends keyof DataModel>(
  collection: Collection,
  payload: Payload<DataModel[Collection]> | UpdatePayload<DataModel[Collection]>,
  context: CommandContext & { mode: 'CREATE' | 'UPDATE' },
): Promise<DataModel[Collection]>;
```

### Description

Returns updated `payload` with automatic fields.

### Parameters

- **collection:** Collection for which to generate automatic fields.
- **payload:** Payload to update.
- **context:** Command context.

### Returns

Payload with automatic fields.

---

## checkAndUpdatePayload

```typescript
protected checkAndUpdatePayload<Collection extends keyof DataModel>(collection: Collection, payload: UpdatePayload<DataModel[Collection]>, context: CommandContext & { mode: 'CREATE' | 'UPDATE' }): Promise<Partial<DataModel[Collection]>>;
```

### Description

Performs specific checks `payload` to make sure it is valid, and updates it if necessary.

### Parameters

- **collection:** Payload collection.
- **payload:** Payload to validate and update.
- **context:** Command context.

### Returns

Validated and updated payload.

---

## create

```typescript
public create<Collection extends keyof DataModel>(collection: Collection, payload: Payload<DataModel[Collection]>, options: CommandOptions, context: CommandContext): Promise<DataModel[Collection]>;
```

### Description

Creates a new resource into `collection`.

### Parameters

- **collection:** Name of the collection to create resource into.
- **payload:** New resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Newly created resource.

---

## update

```typescript
public update<Collection extends keyof DataModel>(collection: Collection, id: Id, payload: UpdatePayload<DataModel[Collection]>, options: CommandOptions, context: CommandContext): Promise<DataModel[Collection]>;
```

### Description

Updates resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to update resource from.
- **id:** Resource id.
- **payload:** Updated resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Updated resource.

### Throws

- If resource does not exist or has been deleted.

---

## view

```typescript
public view<Collection extends keyof DataModel>(collection: Collection, id: Id, options: CommandOptions): Promise<DataModel[Collection]>;
```

### Description

Fetches resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to fetch resource from.
- **id:** Resource id.
- **options:** Command options.

### Returns

Resource, if it exists.

### Throws

- If resource does not exist or has been deleted.

---

## list

```typescript
public list<Collection extends keyof DataModel>(collection: Collection, options: CommandOptions): Promise<Results<DataModel[Collection]>>;
```

### Description

Fetches a paginated list of resources from `collection`.

### Parameters

- **collection:** Name of the collection to fetch resources from.
- **options:** Command options.

### Returns

Paginated list of resources.

---

## search

```typescript
public search<Collection extends keyof DataModel>(collection: Collection, search: SearchBody, options: CommandOptions): Promise<Results<DataModel[Collection]>>;
```

### Description

Fetches a paginated list of resources from `collection` according to given search options.

### Parameters

- **collection:** Name of the collection to fetch resources from.
- **search:** Search options (filters, text query) to filter resources with.
- **options:** Command options.

### Returns

Paginated list of resources.

---

## delete

```typescript
public delete<Collection extends keyof DataModel>(collection: Collection, id: Id, context: CommandContext): Promise<void>;
```

### Description

Deletes resource with id `id` from `collection`.

### Parameters

- **collection:** Name of the collection to delete resource from.
- **id:** Resource id.
- **context:** Command context.

### Throws

- If resource does not exist or has been deleted.

---

## reset

```typescript
public reset(...args: unknown[]): Promise<void>;
```

### Description

Resets the whole system, including database.
