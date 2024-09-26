---
sidebar_position: 4
title: Model
description: The @perseid/core Model class represents a data model.
---

# Model

Data model.

---

## constructor

Class constructor.

```typescript
constructor(schema?: DataModelSchema<DataModel>);
```

### Parameters

- **schema:** Schema from which to generate data model. Defaults to `{}`.

### Usage

```typescript
const model = new Model({
  test: {
    enableAuthors: true,
    enableDeletion: false,
    enableTimestamps: true,
    fields: {
      fieldOne: { type: 'string' },
      fieldTwo: { type: 'integer', isRequired: true },
    },
  },
})
```

---

## getResources

Returns the list of all the resources types in data model.

```typescript
public getResources(): (keyof DataModel & string)[];
```

### Returns

Data model resources types.

### Usage

```typescript
model.getResources() // ['test']
```

---

## get

Returns data model metadata for `path`.

```typescript
public get<Path extends keyof DataModel | string>(path: Path): (
  Path extends keyof DataModel
    ? DataModelMetadata<ResourceSchema<DataModel>>
    : DataModelMetadata<FieldSchema<DataModel>> | null
);
```

### Parameters

- **path:** Path in the data model for which to get metadata.

### Returns

Data model metadata if path exists, `null` otherwise.

### Usage

```typescript
// { canonicalPath: ['test', 'filedOne'], schema: { type: 'string' } }
model.get('test.fieldOne')
```