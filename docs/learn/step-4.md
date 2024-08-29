---
sidebar_position: 5
---

# Bonus: Setting-up a job scheduler

Perseid job scheduler allows you to run one-off or recurringcomputational-intensive tasks in the background, at a specific moment, or on a recurring basis. This keeps your API performant and scalable.

:::info[Development environment]
In the following sections, we assume you are using TypeScript along with `@perseid/dev-kit` as development toolchain and `yarn` as a package manager, but feel free to adapt the code and configuration to your favorite tool 👽
:::


## Structure & configuration

1. Create `jobs` directory.
2. Create `jobs/src` sub-directory.
3. Create a `jobs/package.json` file, with the following content:

```json title="jobs/package.json"
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

4. Create a `jobs/tsconfig.json` file, with the following content:

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

As we are going to use **MongoDB**, we need to install these dependencies in addition to Perseid modules:

```bash
yarn add @perseid/core @perseid/server @perseid/jobs mongodb
```


## Writing your first job
Create a `jobs/src/index.ts` file containing the following:

```typescript title="jobs/src/index.ts"
import { type JobScript } from '@perseid/jobs';

const jobs: Record<string, JobScript> = {
  // Job will be named "testJob", and will execute the function below.
  testJob: async (
    taskId,     // Id of the current running task.
    metaData,   // Contains a metadata object to parametrize your job execution.
    log,        // Logger instance, will store all your logs in a dedicated file.
  ): Promise<void> => {
    await Promise.resolve();
    log.info(`Hello from ${String(taskId)}!`);
    log.info(metaData.lastCompletedAt);
  },
};
```


## Services

As usual, services are the building blocks of a Perseid job scheduler. Each service is responsible for a specific concern. Create a `jobs/src/index.ts` file with the following:

```typescript title="jobs/src/index.ts"
import MongoDatabaseClient from '@perseid/jobs/mongodb';
import { JobScheduler, type DataModel } from '@perseid/jobs';
import { Logger, CacheClient, BucketClient } from '@perseid/server';

// The Logger service logs any useful information happening in the main thread or in tasks, either
// for debugging or monitoring. Most services have access to this logger.
const logger = new Logger({ logLevel: 'info', prettyPrint: true });

// CacheClient can be used to store data in cache for a given period of time.
const cacheClient = new CacheClient({
  cachePath: '/var/www/html/node_modules/.cache',
  connectTimeout: 0,
});

// BucketClient is responsible for uploading tasks logs files to a remote bucket.
// By default, its methods are not implemented, meaning no file will be uploaded, and information
// will simply be logged. You will need to extend this service with a provider specific
// implementation (S3, Minio, ...).
const bucketClient = new BucketClient(logger, { connectTimeout: 3000 });

// This service provides a unified interface with the underlying DBMS to perform CRUD operations,
// and is totally interchangeable with other DatabaseClient implementations (PostgreSQL, MySQL, ...).
const databaseClient = new MongoDatabaseClient(logger, cacheClient, {
  host: 'mongodb',
  port: 27017,
  user: null,
  password: null,
  protocol: 'mongodb:',
  database: 'jobs',
  connectTimeout: 2000,
  connectionLimit: 10,
});

// Actual JobScheduler service, responsible for managing pending and running tasks
const jobScheduler = new JobScheduler(
  logger,
  databaseClient,
  bucketClient,
  {
    jobs,
    availableSlots: 512,   // How many slots are available for this job scheduler.
    logsPath: '/var/www/html/node_modules/.cache/', // Directory where our tasks logs will be temporarily stored.
  },
);
```


## Implementing main and task threads

The main thread purpose is to handle tasks lifecycle. But as soon as a task is run, it needs its own dedicated thread to properly execute the job script. So, let's implement these threads. Still in your `jobs/src/index.ts`, add the following:

```typescript title="jobs/src/index.ts"
import { workerData } from 'worker_threads';
import { type CommandContext } from '@perseid/server';

// `workerData` is null, meaning we are in the main thread...
if (workerData === null) {
  const context = {
    user: {
      _permissions: new Set([
        'VIEW_JOBS',
        'VIEW_TASKS',
        'CREATE_JOBS',
        'CREATE_TASKS',
      ]),
    },
  } as CommandContext<DataModel>;

  // Resetting database...
  databaseClient.reset()
    .then(async () => {
      // Registering our first job in database...
      const job = await jobScheduler.create('jobs', {
        maximumExecutionTime: 10,                          // After this duration (in seconds), the task will time out.
        requiredSlots: 256,                                // How many slots are required to run this job?
        scriptPath: '/var/www/html/dist/index.js testJob', // The path to the `index.js` script we created earlier.
      }, {}, context);

      // Registering a new task in database, that should execute this job right now...
      await jobScheduler.create('tasks', {
      job: job._id,
      metaData: '{}',       // Put any stringify JSON here.
      startAt: new Date(),  // When should the task start?
      recurrence: 10,       // This task will run every ten seconds.
      startAfter: null,     // We don't want this task to run after another one.
      }, {}, context);

      // Running job scheduler...
      await jobScheduler.run();
    }).catch((error: unknown) => {
      logger.fatal(error);
      process.exit(1);
    });
}
// `workerData` is not null, meaning we are in a task thread...
else {
  // Running job script...
  JobScheduler.runJob(jobs, '/var/www/html/node_modules/.cache', 'debug').catch((error: unknown) => {
    logger.fatal(error);
    process.exit(1);
  });
}
```

<br />

You should now see your tasks being executed every ten seconds or so in the terminal:

![Screenshot 1](/img/step_4_1.png)

Congratulations, you run your first tasks ! You can then customize anything within the task script, call APIs, use databases, and more. 🎉