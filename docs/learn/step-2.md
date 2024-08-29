---
sidebar_position: 3
---

# Setting-up the back-end

:::info[Development environment]
In the following sections, we assume you are using TypeScript along with `@perseid/dev-kit` as development toolchain and `yarn` as a package manager, but feel free to adapt the code and configuration to your favorite tool 👽
:::

## Structure & configuration

1. Create `backend` directory.
2. Create `backend/src` sub-directory.
3. Create a `backend/package.json` file, with the following content:

```json title="backend/package.json"
{
  "name": "perseid-mongodb-express-react",
  "type": "module",
  "license": "UNLICENSED",
  "main": "./index.js",
  "types": "./index.d.ts",
  "devDependencies": {
    "@perseid/dev-kit": "^10.0.0"
  },
  "devKitConfig": {
    "target": "node",
    "runInDev": true,
    "splitChunks": false,
    "entries": {
      "index": "./index.ts"
    },
    "srcPath": "src",
    "distPath": "dist"
  },
  "scripts": {
    "dev": "node node_modules/@perseid/dev-kit/scripts/dev.js",
    "postinstall": "mkdir -p node_modules/.cache"
  }
}
```

<br/>

4. Create a `backend/tsconfig.json` file, with the following content:

```json title="tsconfig.json"
{
  "extends": "./node_modules/@perseid/dev-kit/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

<br/>
5. Initialize your project by running `yarn`.


## Dependencies

As we are going to use **MongoDB** and **ExpressJS**, we need to install these dependencies in addition to Perseid modules:

```bash
yarn add @perseid/core @perseid/server mongodb express @types/express
```


## Data model

1. Types definitions will provide with you useful autocompletion in your IDE and type-safety. Create a `backend/index.d.ts` file and put the following content:

```typescript title="index.d.ts"
import type { Authors, DefaultDataModel, Deletion, Id, Ids, Timestamps } from "@perseid/core";

declare global {
  export interface DataModel extends DefaultDataModel {
    galaxies: Ids & Authors & Deletion & Timestamps & {
      name: string;
    };
    celestialBodies: Ids & {
      type: 'ASTEROID' | 'PLANET' | 'BLACK_HOLE' | 'STAR';
      name: string;
      discoveredIn: number;
      galaxy: Id | DataModel['galaxies'];
      isLifePossible: boolean;
      coordinates: {
        x: number;
        y: number;
      };
      composition: {
        element: string;
        percentage: number;
      }[] | null;
    };
  }
}
```

<br/>

2. Now create a `backend/src/index.ts` file and declare our previous data model schema:

```typescript title="backend/src/index.ts"
import { Model } from '@perseid/server';
import type { DataModelSchema } from '@perseid/core';

const dataModelSchema: DataModelSchema<DataModel> = {
  // Default data model contains `users` and `roles` resources,
  // essential for authentication and RBAC.
  ...Model.DEFAULT_MODEL,
  galaxies: {
    enableAuthors: true,
    enableDeletion: false,
    enableTimestamps: true,
    fields: {
      name: {
        type:'string',
        isUnique: true,
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
        isIndexed: true,
        isRequired: true,
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
        relation: 'galaxies',
        isRequired: true,
        isIndexed: true,
      },
      isLifePossible: {
        type: 'boolean',
        isRequired: true,
      },
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
};
```


## Services

Services are the building blocks of a Perseid server. Each service is responsible for a specific concern. In the `backend/src/index.ts` file, add the following:

```typescript title="backend/src/index.ts"
import MongoDatabaseClient from '@perseid/server/mongodb';
import { Logger, EmailClient, CacheClient, UsersEngine } from '@perseid/server';

// This is the actual data model service. It provides methods to manipulate and access data model.
// As you can see, we initialize it from our data model schema.
const model = new Model<DataModel>(dataModelSchema);

// The Logger service logs any useful information happening in the app, either for debugging or
// monitoring. Most services have access to this logger.
const logger = new Logger({ logLevel: 'debug', prettyPrint: true });

// The EmailClient service is used to send transactional emails (e.g. password reset, and such).
// By default, its methods are not implemented, meaning no email will be sent, and information will
// simply be logged. You will need to extend this service with a provider specific implementation
// (mailgun, sendgrid, ...).
const emailClient = new EmailClient(logger, { connectTimeout: 0 });

// CacheClient can be used to store data in cache for a given period of time.
const cacheClient = new CacheClient({
  cachePath: '/var/www/html/node_modules/.cache',
  connectTimeout: 0,
});

// This service provides a unified interface with the underlying DBMS to perform CRUD operations,
// and is totally interchangeable with other DatabaseClient implementations (PostgreSQL, MySQL, ...).
const databaseClient = new MongoDatabaseClient<DataModel>(model, logger, cacheClient, {
  host: 'mongodb',
  port: 27017,
  user: null,
  password: null,
  protocol: 'mongodb:',
  database: 'test',
  connectTimeout: 2000,
  connectionLimit: 10,
});

// Engine is THE central element in a Perseid server, as it handles all business logic, orchestrates
// calls to the different services, validates payloads, manages permissions and authentication, ...
const engine = new UsersEngine<DataModel>(
  model,
  logger,
  databaseClient,
  emailClient,
  cacheClient,
  {
    // This parameter allows email client to send correct links to the app in transactional emails
    // (e.g. password reset page).
    baseUrl: `http://localhost:${String(process.env.FRONTEND_PORT)}`,
    // Native Perseid authentication system uses JWT access tokens convention (https://jwt.io/).
    // Thus, you need to provide a private and public key to sign these tokens.
    // You can use sites like https://cryptotools.net/rsagen to generate your keys, or the command:
    // `ssh-keygen -t rsa`. Just replace linebreaks by `\n` to get one-lined strings keys.
    auth: {
      algorithm: 'RS256',
      clientId: 'example',
      issuer: 'example',
      privateKey: '<PRIVATE_KEY>',
      publicKey: '<PUBLIC_KEY>',
    },
  },
);

```

<br/>

Awesome! We now have everything in place to start managing our resources.


## Playing with the engine

Perseid engine provides several built-in methods:
- For authentication (`signIn`, `signUp`, `refreshToken`, ...): these methods are useful when using the REST API.
- For resources CRUD (`create`, `update`, `view`, `list`, `search`, `delete`)

You can try them yourself:

```typescript title="backend/src/index.ts"
async function main() {
  // We first prepare our database...
  await engine.reset('test@test.test', 'Test123!');

  // Now that a root user has been created, we just need to get their id from database and verify
  // their email adress - you should not have to perform these steps when using the REST API.
  const { results: [{ _id }] } = await databaseClient.list('users');
  await databaseClient.update('users', _id, { _verifiedAt: new Date() });

  // Context is required for any CRUD operation.
  const context = await engine.generateContext(_id);

  // Now, let's play :)

  // Creating a new galaxy...
  const newGalaxy = await engine.create('galaxies', { name: 'The Milky Way' }, {}, context);

  // Updating this galaxy...
  await engine.update('galaxies', newGalaxy._id, { name: 'Milky Way' }, {}, context);

  // Fetching this galaxy...
  console.log(await engine.view('galaxies', newGalaxy._id, { fields: new Set(['name', '_createdAt']) }, context));

  // Listing all galaxies...
  console.log(await engine.list('galaxies', {}, context));

  // Searching for specific galaxies...
  console.log(await engine.search('galaxies', { query: { on: new Set(['name']), text: 'way' }, filters: null }, {}, context));

  // Deleting this galaxy...
  await engine.delete('galaxies', newGalaxy._id, context);
}

main();
```

## Creating the REST API

The engine allows you to manipulate resources directly from scripts, and that's cool for automations, internal tools, and such. But what if we want to manage these resources over the Internet? Enters the `Controller` service. This service allows your to publicly expose your engine through a REST API.

In your `backend/src/index.ts`, add the following:

```typescript title="backend/src/index.ts"
import express from 'express';
import ExpressController from '@perseid/server/express';

// Works exactly the same with the `FastifyController` service.
const controller = new ExpressController<DataModel>(model, logger, engine, {
  version: '1.0.0',
  handleCORS: true,
  endpoints: {
    // Here we configure paths enpoints all build-in authentication-related engine methods that we
    // want to expose through the API.
    auth: {
      viewMe: { path: '/auth/me' },
      signUp: { path: '/auth/sign-up' },
      signIn: { path: '/auth/sign-in' },
      signOut: { path: '/auth/sign-out' },
      verifyEmail: { path: '/auth/verify-email' },
      refreshToken: { path: '/auth/refresh-token' },
      resetPassword: { path: '/auth/reset-password' },
      requestPasswordReset: { path: '/auth/reset-password' },
      requestEmailVerification: { path: '/auth/verify-email' },
    },
    // And we do the same here, but this time, for data model resources CRUD methods.
    resources: {
      roles: {
        list: { path: '/roles' },
        create: { path: '/roles' },
        view: { path: '/roles/:id' },
        update: { path: '/roles/:id' },
        delete: { path: '/roles/:id' },
        search: { path: '/roles/search' },
      },
      users: {
        list: { path: '/users' },
        create: { path: '/users' },
        view: { path: '/users/:id' },
        update: { path: '/users/:id' },
        delete: { path: '/users/:id' },
        search: { path: '/users/search' },
      },
      galaxies: {
        list: { path: '/galaxies' },
        create: { path: '/galaxies' },
        view: { path: '/galaxies/:id' },
        update: { path: '/galaxies/:id' },
        delete: { path: '/galaxies/:id' },
        search: { path: '/galaxies/search' },
      },
      celestialBodies: {
        list: { path: '/bodies' },
        create: { path: '/bodies' },
        view: { path: '/bodies/:id' },
        update: { path: '/bodies/:id' },
        delete: { path: '/bodies/:id' },
        search: { path: '/bodies/search' },
      },
    },
  },
});
```
<br/>

Now the last step is to start the Express server, as you would do in any other application:

```typescript title="backend/src/index.ts"
async function main() {
  // Starting the ExpressJS server...
  const app = express();

  // Registering Perseid built-in endpoints...
  await controller.createEndpoints(app);

  app.listen(parseInt(String(process.env.BACKEND_PORT), 10), '0.0.0.0');

  logger.info('API Server listening.')
}

main();
```

<br/>

Fantastic, our REST API is now up and running, and we can call all of our built-in endpoints!

:::success Info
A Postman collection is available in each example repository on GitHub to let you play with the API
more easily.
:::

Let's try a few things:

```bash
curl --location --request POST 'http://localhost:5070/auth/sign-in' \
--header 'X-Device-Id: 7c45c29a06695cac42ee0c46' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@test.test",
    "password": "Test123!"
}'
```

<br/>

Response should be something like:

```bash
{"deviceId":"7c45c29a06695cac42ee0c46","expiresIn":1200,"refreshTokenExpiration":"2024-09-26T14:35:06.030Z","refreshToken":"b7c5957cd0d2122285b61837","accessToken":"<BEARER_TOKEN>"}
```

<br />

What about creating a new galaxy:

```bash
curl --location --request POST 'http://localhost:5070/galaxies' \
--header 'X-Device-Id: 7c45c29a06695cac42ee0c46' \
--header 'Authorization: Bearer <BEARER_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Centaurus"
}'
```

<br />

And the result:

```bash
{
    "_id": "66cde49fc4a9e45137d6fa14"
}
```

<br />

**Magic** 🪄

<br />

:::info
Perseid built-in CRUD endpoints accept some useful query parameters to fine-tune your requests according to your needs:
- `fields`:  allows you to specify the list of resource fields you want to fetch from the API. The `*` value means "all fields".
- `sortBy` and `sortOrder`: for search and list endpoints, allows you to sort results by specific fields.
- `limit` and `offset`: for search and list endpoints, allows you to customize results pagination
:::

<br />

That's it for the server-side! If you just need an API, then you can stop the tutorial here, or go directly to the [Customizing your app](/docs/learn/step-5) section. For those who also want a user interface, see you in the next step ⤵️