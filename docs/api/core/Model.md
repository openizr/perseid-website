---
sidebar_position: 5
---

# Model

Data model.

---

## constructor

```typescript
constructor(schema?: DataModelSchema<DataModel>);
```

### Description

Class constructor.

### Parameters

- **schema:** Schema from which to generate data model. Defaults to `{}`.

---

## getCollections

```typescript
public getCollections(): (keyof DataModel)[];
```

### Description

Returns the list of all the collections names in data model.

### Returns

Data model collections names.

---

## get

```typescript
public get<T>(path: T): T extends keyof DataModel
    ? DataModelMetadata<CollectionSchema<DataModel>>
    : DataModelMetadata<FieldSchema<DataModel>> | null;
```

### Description

Returns data model metadata for `path`.

### Parameters

- **path:** Path in the data model for which to get metadata.

### Returns

Data model metadata if path exists, `null` otherwise.
