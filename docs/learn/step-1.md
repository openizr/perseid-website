---
sidebar_position: 2
---

# It all starts with a data model

## What is a data model in Perseid?

A data model defines the **type** and **structure** of the data your application manipulates. For example, if you are running a small drug store and need an app to manage your stocks, you might work with the following (simplified) entities:

- **Products**: represented by a reference (string), a name (string), and a price (float).
- **Inventory**: represented by a reference to the product (ID) and a quantity (integer).

Perseid will automatically generate everything from this data model definition (that we call a **schema**), including the database structure, API endpoints, and user interface.


## Declaring your first data model schema

In this tutorial, we are going to build a simple app to manage a 2D mapping of the Universe 🪐<br/>
We will deal with two types of resources:

- **Galaxies**: represented by a name (string)
- **Celestial bodies**: represented by a type (string), year of discovery (integer), galaxy it belongs to (ID), coordinates in this galaxy a flag indicating wether life could be possible (boolean), and information regarding the composition of the body (array).

The related Perseid data model schema will then be:

```typescript
{
  galaxies: {
    // Adds two additional fields to the schema: `_createdBy` and
    // `_updatedBy`, to keep a track of the author of changes.
    enableAuthors: true,
    // Prevents resources from being deleted from database - instead,
    // an additional `_isDeleted` field will be set to `true`.
    enableDeletion: false,
    // Adds two additional fields to the schema: `_createdAt` and
    // `_updatedAt`, to keep a track of the dates of changes.
    enableTimestamps: true,
    fields: {
      name: {
        type:'string',
        // This flag indicates that the field value must be unique
        // (i.e. two galaxies cannot have the same name). A special
        // index in database will be automatically created for this purpose.
        isUnique: true,
        // This flag indicates that the value must always be defined
        // (`null` is not accepted).
        isRequired: true,
      }
    }
  },
  celestialBodies: {
    enableDeletion: true,
    enableAuthors: false,
    enableTimestamps: false,
    fields: {
      type: {
        type: 'string',
        // This flag indicates that we want to create
        // an index in database, so that we can filter and
        // sort results using this field. An index in database
        // will be automatically created to optimize queries performance.
        isIndexed: true,
        isRequired: true,
        // Here, we don't want the field to accept
        // any string: it must be one of the following list.
        enum: ['ASTEROID', 'PLANET', 'BACK_HOLE', 'STAR']
      },
      name: {
        type: 'string',
        isIndexed: true,
        isRequired: true,
      },
      discoveredIn: {
        type: 'integer',
        isIndexed: true,
        isRequired: true,
      },
      galaxy: {
        type: 'id',
        // By specifying `relation`, we indicate that
        // the id stored in the `galaxy` field
        // references an existing resource in `galaxies`.
        // It allows us to also fetch galaxie's details
        // in a single query, as we will see in the next
        // step of this tutorial.
        relation: 'galaxies',
        isRequired: true,
        isIndexed: true,
      },
      isLifePossible: {
        type: 'boolean',
        isRequired: true,
      },
      // Data model structures can as complex as you need, including
      // nested arrays or objects!
      coordinates: {
        type: 'object',
        isRequired: true,
        fields: {
          x: {
            type: 'float',
            isRequired: true,
          },
          y: {
            type: 'float',
            isRequired: true,
          }
        }
      },
      composition: {
        type: 'array',
        fields: {
          type: 'object',
          isRequired: true,
          fields: {
            element: {
              type: 'string',
              isRequired: true,
            },
            percentage: {
              type: 'float',
              isRequired: true,
            }
          }
        }
      }
    }
  }
}
```
<br/>

:::success[Note]
Perseid default data model contains two types of resources: **users** and **roles**, which allows
the framework to provide features like authentication and role-based access control (RBAC).
:::

<br/>

Great, we have our data model. Now, let's set-up a server to manipulate resources!
