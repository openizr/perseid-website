---
sidebar_position: 4
---

# JobScheduler

Handles tasks lifecycle.

```typescript
class JobScheduler extends Engine<DataModel, Model, DatabaseClient>
```

---

## Properties

- **instanceId:** Job scheduler instance unique id.
- **logsPath:** Path to the tasks logs directory.
- **bucketClient:** Bucket client.
- **availableSlots:** Amount of initially available slots for that scheduler to run jobs.
- **jobs:** List of registered jobs.
- **tasksRegistry:** Running tasks registry.

---

## constructor

```typescript
public constructor(logger: Logger, databaseClient: DatabaseClient, bucketClient: BucketClient, settings: JobSchedulerSettings);
```

### Description

Class constructor.

### Parameters

- **logger:** Logger to use.
- **databaseClient:** Database client to use to store/fetch data.
- **bucketClient:** Bucket client to use to store logs files.
- **settings:** Jobs scheduler settings.

---

## reSchedulePeriodicTask

```typescript
protected async reSchedulePeriodicTask(task: Task, taskCompleted: boolean): Promise<void>;
```

### Description

Schedules next execution for the given task, if it is periodic.

### Parameters

- **task:** Task to re-schedule.
- **taskCompleted:** Whether task successfully completed.

---

## uploadLogs

```typescript
protected async uploadLogs(task: Task): Promise<void>;
```

### Description

Uploads logs file of `task` to a persistent storage.

### Parameters

- **task:** Task for which to upload logs file.

---

## executeTask

```typescript
protected async executeTask(task: Task): Promise<void>;
```

### Description

Executes `task`.

### Parameters

- **task:** Task to execute.

---

## closeTask

```typescript
protected async closeTask(task: Task, status: Task['_status']): Promise<void>;
```

### Description

Closes `task`, performing all post-processing operations.

### Parameters

- **task:** Task to close.
- **status:** Status to update task with.

---

## processPendingTasks

```typescript
protected async processPendingTasks(): Promise<void>;
```

### Description

Processes candidate pending tasks.

---

## processRunningTasks

```typescript
protected async processRunningTasks(): Promise<void>;
```

### Description

Processes tasks in progress.

---

## runJob

```typescript
public static async runJob(jobs: JobSchedulerSettings['jobs'], logsPath: string, logLevel: 'debug' | 'info' | 'warn' | 'error' | 'fatal'): Promise<void>;
```

### Description

Runs the job passed as a command line argument to the script.

### Parameters

- **jobs:** List of jobs to register.
- **logsPath:** Path to the tasks logs directory.
- **logLevel:** Minimum logging level.

---

## run

```typescript
public async run(): Promise<void>;
```

### Description

Executes job scheduler.

---

## create

```typescript
public async create<U extends keyof DataModel>(collection: U, payload: WithoutAutomaticFields<DataModel[U]>, options: CommandOptions, context: CommandContext): Promise<DataModel[U]>;
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
