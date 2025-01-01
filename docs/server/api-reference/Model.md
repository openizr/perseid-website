---
sidebar_position: 1
title: Model
description: The @perseid/server Model represents the application data model.
---

# Model

Data model.
Extends `@perseid/core` `Model` class.

---

## publicSchema

Public data model schema, used for data model introspection on front-end.

```typescript
protected publicSchema: DataModelSchema<DataModel>;
```

---

## relationsPerResource

List of relations per resource, along with their respective path in the model.

```typescript
protected relationsPerResource: { [Resource in keyof DataModel]: Set<string> };
```

---

## DEFAULT_MODEL

Default data model schema.

```typescript
public static readonly DEFAULT_MODEL: DataModelSchema<DefaultDataModel>;
```

---

## generatePublicSchemaFrom

Generates public data schema from `schema`.

```typescript
protected generatePublicSchemaFrom(
  schema: FieldSchema<DataModel>,
  relations: Set<string>,
): FieldSchema<DataModel>;
```

### Parameters

- **schema:** Data model schema from which to generate public schema.
- **relations:** Optional parameter, use it to also extract all relations declared in the
model. If this parameter is passed, a list of all resources referenced directly or indirectly
(i.e. by following subsequent relations) in the model will be generated and stored in that
variable. For instance, if `schema` contains a field that references a resource A, that in
turn references resource B, that eventually references the initial resource, the following
list will be generated: `["A", "B"]`. Defaults to `new Set()`.

### Usage

```typescript
TODO
```

---

## email

`email` custom data model schema type generator.

```typescript
public static email(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## tinyText

`tinyText` custom data model schema type generator.

```typescript
public static tinyText(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## shortText

`shortText` custom data model schema type generator.

```typescript
public static shortText(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## mediumText

`mediumText` custom data model schema type generator.

```typescript
public static mediumText(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## longText

`longText` custom data model schema type generator.

```typescript
public static longText(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## hugeText

`hugeText` custom data model schema type generator.

```typescript
public static hugeText(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## token

`token` custom data model schema type generator.

```typescript
public static token(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## password

`password` custom data model schema type generator.

```typescript
public static password(overrides?: Partial<StringSchema>): StringSchema;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## credentials

`credentials` custom data model schema type generator.

```typescript
public static credentials(overrides?: Partial<ObjectSchema<unknown>>): ObjectSchema<unknown>;
```

### Parameters

- **overrides:** Additional parameters to override field with. Defaults to `{ isRequired: true }`.

### Returns

Generated custom data model schema.

### Usage

```typescript
TODO
```

---

## constructor

Class constructor.

```typescript
public constructor(schema: DataModelSchema<DataModel>);
```

### Parameters

- **schema:** Schema from which to generate data model.

### Usage

```typescript
TODO
```

---

## getPublicSchema

Returns public data model schema for `resource`, and all its direct or indirect relations.

```typescript
public getPublicSchema(resource: keyof DataModel): DataModelSchema<DataModel> | null;
```

### Parameters

- **resource:** Name of the resource for which to get public data model schema.

### Returns

Public data model schema for all related resources if they exist, `null` otherwise.

### Usage

```typescript
TODO
```
