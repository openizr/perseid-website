---
title: Creating your data model
description: Perseid heavily relies on data model schemas, for building REST APIs, complete UIs with CRUD operations, dynamic forms, and more.
---

# Creating your data model

The **data model** is a core concept in Perseid, driving many powerful features and logic:

- [@perseid/form](https://github.com/openizr/perseid/tree/main/packages/form) uses it to create complex dynamic forms from a simple configuration

- [@perseid/server](https://github.com/openizr/perseid/tree/main/packages/server) can generate the underlying database structure and fully functional REST APIs for all CRUD operations and related features based on that definition

- [@perseid/client](https://github.com/openizr/perseid/tree/main/packages/client) leverages the data model to automatically build entire applications and user interfaces wihtout a single line of code

---

## What is a data model?

A data model is an **abstract representation of all the data your application is going to handle**. For instance, if you own a small drug store and need an app to manage your inventory, you might deal with the following (simplified) entities:

- Products: represented by a reference (string), a name (string), and a price (float).
- Inventory: represented by a reference to the product (ID) and a quantity (integer).

You might already be familiar with this concept from structuring your database (tables, collections, relationships, etc.). However, data model schemas are usually tightly linked to the specific DBMS you’re using, each with its own syntax and specificities. In contrast, **Perseid offers a smooth abstraction** that lets you **define a data model once**, which **works across any DBMS (either SQL or noSQL)** without needing to manually adjust the schema.

---

## Declaring a data model schema

Your data model schema can include as many **resources types** as necessary. For each resource, you can specify its **fields and structure**, choosing from a wide range of types, as outlined below.

### String

A simple string field.

```typescript
interface StringSchema {
  /** Data type. */
  type: 'string';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;

  /** Specific set of values allowed for that field. */
  enum?: string[];

  /**
   * Whether field value should be unique across all resources of that type. (e.g. an email address).
   * A unique database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isUnique?: boolean;

  /** RegExp user inputs must pass for that field. */
  pattern?: RegExp;

  /** Field minimum length. */
  minLength?: number;

  /** Field maximum length. */
  maxLength?: number;
}
```

For example, an email address:

```typescript
{
  type: 'string',
  isUnique: true,
  isRequired: true,
  maxLength: 320,
  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}
```

### Integer

A simple integer field.

```typescript
interface IntegerSchema {
  /** Data type. */
  type: 'integer';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;

  /** Specific set of values allowed for that field. */
  enum?: number[];

  /**
   * Whether field value should be unique across all resources of that type. (e.g. an email address).
   * A unique database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isUnique?: boolean;

  /** Field minimum value. */
  minimum?: number;

  /** Field maximum value. */
  maximum?: number;

  /** Field exclusive minimum value. */
  exclusiveMinimum?: number;

  /** Field exclusive maximum value. */
  exclusiveMaximum?: number;

  /** Value to use as a multiple for user inputs. */
  multipleOf?: number;
}
```

For example, a year:

```typescript
{
  type: 'integer',
  isRequired: true,
  minimum: 1900,
  maximum: 2024
  multipleOf: 10,
}
```

### Float

A simple floating number field.

```typescript
interface FloatSchema {
  /** Data type. */
  type: 'float';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;

  /** Specific set of values allowed for that field. */
  enum?: number[];

  /**
   * Whether field value should be unique across all resources of that type. (e.g. an email address).
   * A unique database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isUnique?: boolean;

  /** Field minimum value. */
  minimum?: number;

  /** Field maximum value. */
  maximum?: number;

  /** Field exclusive minimum value. */
  exclusiveMinimum?: number;

  /** Field exclusive maximum value. */
  exclusiveMaximum?: number;

  /** Value to use as a multiple for user inputs. */
  multipleOf?: number;
}
```

For example, a preset of temperatures:

```typescript
{
  type: 'float',
  minimum: 20.0,
  maximum: 50.0
  enum: [23.5, 32.8, 39.8],
}
```

### Boolean

A simple true/false field.

```typescript
interface BooleanSchema {
  /** Data type. */
  type: 'boolean';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;
}
```

For example, an activation flag:

```typescript
{
  type: 'boolean',
  isRequired: true,
}
```

### Null

A field that is always `null`. Only useful to display non-interactive elements in [@perseid/form](/docs/form/concepts).

```typescript
interface NullSchema {
  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /** Data type. */
  type: 'null';
}
```

For example:

```typescript
{
  type: 'null',
  isRequired: true,
}
```

### Date

A field storing date and time information.

```typescript
interface DateSchema {
  /** Data type. */
  type: 'date';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /** Specific set of values allowed for that field. */
  enum?: Date[];

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;

  /**
   * Whether field value should be unique across all resources of that type. (e.g. an email address).
   * A unique database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isUnique?: boolean;
}
```

For example, a resource creation date and time:

```typescript
{
  type: 'date',
  isIndexed: true,
}
```

### Binary

A field storing binary data (e.g. a small image).

```typescript
interface BinarySchema {
  /** Data type. */
  type: 'binary';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;
}
```

For example, a signature image:

```typescript
{
  type: 'binary',
  isRequired: true,
}
```


### Id

A universally unique identifier, that can also link to another resource in the data model.

```typescript
interface IdSchema<DataModel> {
  /** Data type. */
  type: 'id';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /** Specific set of values allowed for that field. */
  enum?: Id[];

  /**
   * Whether to index this field.
   * A database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isIndexed?: boolean;

  /**
   * Whether field value should be unique across all resources of that type. (e.g. an email address).
   * A unique database index will be created, and user will be able to use that field for sorting,
   * searching, and filtering in queries.
   */
  isUnique?: boolean;

  /** Name of the resource type the id refers to. See it as a foreign key. */
  relation?: keyof DataModel;
}
```

For example, a reference to then resource author:

```typescript
{
  type: 'id',
  isIndexed: true,
  isRequired: true,
  relation: 'users',
}
```

### Object

A nested structure, containing a set of sub-fields.

```typescript
interface ObjectSchema<DataModel> {
  /** Data type. */
  type: 'object';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /** Sub-fields data model. */
  fields: Record<string, (
    StringSchema
    | IntegerSchema
    | FloatSchema
    | NullSchema
    | DateSchema
    | BinarySchema
    | BooleanSchema
    | ObjectSchema<DataMoel>
    | ArraySchema<DataModel>
    | IdSchema<DataModel>
  )>;
}
```

For example, some additional details about a user:

```typescript
{
  type: 'object',
  isRequired: true,
  fields: {
    firstName: { type: 'string', isRequired: true },
    lastName: { type: 'string', isRequired: true },
  },
}
```

### Array

A nested structure containing a list of values.

```typescript
interface ArraySchema<DataModel> {
  /** Data type. */
  type: 'array';

  /** Whether field is required. */
  isRequired?: boolean;

  /** Custom error messages for when user inputs do not match data model. */
  errorMessages?: Record<string, string>;

  /** Minimum required number of items in the array. */
  minItems?: number;

  /** Maximum allowed number of items in the array. */
  maxItems?: number;

  /** Items data model. */
  fields: (
    StringSchema
    | IntegerSchema
    | FloatSchema
    | NullSchema
    | DateSchema
    | BinarySchema
    | BooleanSchema
    | ObjectSchema<DataMoel>
    | IdSchema<DataModel>
  );

  /** Whether each array item should be unique. */
  uniqueItems?: boolean;
}
```

For example, a list of permissions for a specific role:

```typescript
{
  type: 'array',
  minItems: 1,
  maxItems: 100,
  isRequired: true,
  uniqueItems: true,
  fields: { type: 'string', isRequired: true },
}
```

---

## Complete example

Here is Perseid default data model schema definition, for users and roles management:

```typescript
{
  users: {
    /** Whether to generate and manage `_createdBy` and `_updatedBy` fields for that resource. */
    enableAuthors: true,

    /** Whether to generate and manage the `_isDeleted` field for that resource. */
    enableDeletion: false,

    /** Whether to generate and managen`_createdAt` and `_updatedAt` fields for that resource. */
    enableTimestamps: true,

    fields: {
      _verifiedAt: {
        isIndexed: true,
        type: 'date',
      },
      _devices: {
        type: 'array',
        isRequired: true,
        fields: {
          type: 'object',
          isRequired: true,
          fields: {
            _userAgent: { type: 'string', isRequired: true },
            _expiration: { type: 'date', isRequired: true },
            _refreshToken: { type: 'string', isRequired: true },
            _id: { type: 'string', pattern: /^[0-9a-fA-F]{24}$/, isRequired: true },
          },
        },
      },
      _apiKeys: {
        type: 'array',
        isRequired: true,
        fields: {
          type: 'string',
          maxLength: 24,
          isRequired: true,
          pattern: /^[0-9A-Za-z]{24}$/,
          errorMessages: {
            type: 'must be a valid token',
            pattern: 'must be a valid token',
          },
        },
      },
      email: {
        type: 'string',
        isUnique: true,
        isRequired: true,
        errorMessages: {
          type: 'must be a valid email',
          pattern: 'must be a valid email',
        },
        maxLength: 320,
        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
      password: {
        type: 'string',
        maxLength: 500,
        isRequired: true,
        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
        errorMessages: {
          type: 'must be a valid password (8 chars minimum, containing lower case, upper case, number and special char)',
          pattern: 'must be a valid password (8 chars minimum, containing lower case, upper case, number and special char)',
        },
      },
      roles: {
        type: 'array',
        isRequired: true,
        fields: {
          type: 'id',
          isIndexed: true,
          isRequired: true,
          relation: 'roles',
        },
      },
    },
  },
  roles: {
    /** Whether to generate and manage `_createdBy` and `_updatedBy` fields for that resource. */
    enableAuthors: true,

    /** Whether to generate and manage the `_isDeleted` field for that resource. */
    enableDeletion: true,

    /** Whether to generate and managen`_createdAt` and `_updatedAt` fields for that resource. */
    enableTimestamps: true,

    fields: {
      name: {
        type: 'string',
        maxLength: 50,
        isUnique: true,
        isRequired: true,
        pattern: /^[0-9A-Z_]+$/
      },
      permissions: {
        type: 'array',
        isRequired: true,
        fields: {
          type: 'string',
          isRequired: true,
          maxLength: 256,
          pattern: /^[0-9A-Z_]+$/,
        },
      },
    },
  },
};
```
