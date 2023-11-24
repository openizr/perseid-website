---
sidebar_position: 4
---

# Model

Data model.

```typescript
class Model<
  /** Data model types definitions. */
  DataModel = DefaultDataModel,
> extends BaseModel<DataModel>
```

---

## Properties

- **publicSchema:** Public data model schema, used for data model introspection on front-end.
- **relationsPerCollection:** List of relations per collection, along with their respective path in the model.
- **DEFAULT_MODEL:** Default data model schema.

---

## constructor

```typescript
constructor(schema: DataModelSchema<DataModel>);
```

### Description

Class constructor.

### Parameters

- **schema:** Schema from which to generate data model.

---

## generatePublicSchemaFrom

```typescript
protected generatePublicSchemaFrom(schema: FieldSchema<DataModel>, relations?: Set<string>): FieldSchema<DataModel>;
```

### Description

Generates public data schema from `schema`.

### Parameters

- **schema:** Data model schema from which to generate public schema.
- **relations:** Optional parameter, use it to also extract all relations declared in the model.

### Returns

Generated public data schema.

---

## email

```typescript
public static email(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`email` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## tinyText

```typescript
public static tinyText(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`tinyText` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## shortText

```typescript
public static shortText(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`shortText` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## mediumText

```typescript
public static mediumText(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`mediumText` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## longText

```typescript
public static longText(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`longText` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## hugeText

```typescript
public static hugeText(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`hugeText` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## token

```typescript
public static token(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`token` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## password

```typescript
public static password(overrides?: Partial<StringSchema>): StringSchema;
```

### Description

`password` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## credentials

```typescript
public static credentials(overrides?: Partial<ObjectSchema<unknown>>): ObjectSchema<unknown>;
```

### Description

`credentials` custom data model schema type generator.

### Parameters

- **overrides:** Additional parameters to override field with.

### Returns

Generated custom data model schema.

---

## getPublicSchema

```typescript
public getPublicSchema(collection: keyof DataModel): DataModelSchema<DataModel>;
```

### Description

Returns public data model schema for `collection`, and all its direct or indirect relations.

### Parameters

- **collection:** Name of the collection for which to get public data model schema.

### Returns

Public data model schema for all related collections.
