---
sidebar_position: 2
title: JobScheduler
description: The @perseid/jobs JobScheduler service handles tasks lifecycle.
---

# JobScheduler

Handles tasks lifecycle.
Extends `@perseid/server` `Engine` class.

---

## instanceId

Job scheduler instance unique id.

```typescript
protected instanceId: Id;
```

---

## logsPath

Path to the tasks logs directory.

```typescript
protected logsPath: string;
```

---

## bucketClient

Bucket client.

```typescript
protected bucketClient: BucketClient;
```

---

## availableSlots

Amount of initially available slots for that scheduler to run jobs.

```typescript
protected availableSlots: number;
```

---

## jobs

List of registered jobs.

```typescript
protected jobs: Record<string, JobScript>;
```

---

## tasksRegistry

Running tasks registry.

```typescript
protected tasksRegistry: Record<string, {
  worker: Worker;
  _status: DataModel['tasks']['_status'];
}>;```

---

## constructor

Class constructor.

```typescript
public constructor(
  logger: Logger,
  databaseClient: DatabaseClient,
  bucketClient: BucketClient,
  settings: JobSchedulerSettings,
);
```

### Parameters

- **logger:** Logger to use.
- **databaseClient:** Database client to use to store/fetch data.
- **bucketClient:** Bucket client to use to store logs files.
- **settings:** Jobs scheduler settings.

### Usage

```typescript
const jobScheduler = new JobScheduler(logger, databaseClient, bucketClient, {
  availableSlots: 10,
  logsPath: '/tmp/logs',
  jobs: {
    testJob: async (taskId, metaData, log): Promise<void> => {
      await Promise.resolve();
      log.info(`Hello from ${String(taskId)}!`);
      log.info(metaData.lastCompletedAt);
    },
  },
})
```

---

## withAutomaticFields

Returns updated `payload` with automatic fields.

```typescript
protected withAutomaticFields<Resource extends keyof DataModel>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  payload: Payload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): Promise<Payload<DataModel[Resource]>>;
```

### Parameters

- **resource:** Type of resource for which to generate automatic fields.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Payload to update.
- **context:** Command context.

### Returns

Payload with automatic fields.

### Usage

```typescript
await jobScheduler.withAutomaticFields(
  'tasks',
  { _id: new Id(), _status: 'IN_PROGRESS' },
  { _status: 'COMPLETED' },
  {}
);
```

---

## reSchedulePeriodicTask

Schedules next execution for the given task, if it is periodic.

```typescript
protected reSchedulePeriodicTask(task: DataModel['tasks'], taskCompleted: boolean): Promise<void>;
```

### Parameters

- **task:** Task to re-schedule.
- **taskCompleted:** Whether task successfully completed.

### Usage

```typescript
await jobScheduler.reSchedulePeriodicTask({ _id: new Id(), _status: 'IN_PROGRESS' }, false);
```

---

## uploadLogs

Uploads logs file of `task` to a persistent storage.

```typescript
protected uploadLogs(task: DataModel['tasks']): Promise<void>;
```

### Parameters

- **task:** Task for which to upload logs file.

### Usage

```typescript
await jobScheduler.uploadLogs({ _id: new Id(), _status: 'IN_PROGRESS' });
```

---

## executeTask

Executes `task`.

```typescript
protected executeTask(task: DataModel['tasks']): Promise<void>;
```

### Parameters

- **task:** Task to execute.

### Usage

```typescript
await jobScheduler.executeTask({ _id: new Id(), _status: 'PENDING' });
```

---

## closeTask

Closes `task`, performing all post-processing operations.

```typescript
protected closeTask(
  task: DataModel['tasks'],
  status: DataModel['tasks']['_status'],
): Promise<void>;
```

### Parameters

- **task:** Task to close.
- **status:** Status to update task with.

### Usage

```typescript
await jobScheduler.closeTask({ _id: new Id(), _status: 'IN_PROGRESS' }, 'COMPLETED');
```

---

## processPendingTasks

Processes candidate pending tasks.

```typescript
protected processPendingTasks(): Promise<void>;
```

### Usage

```typescript
await jobScheduler.processPendingTasks();
```

---

## processRunningTasks

Processes tasks in progress.

```typescript
protected processRunningTasks(): Promise<void>;
```

### Usage

```typescript
await jobScheduler.processRunningTasks();
```

---

## runJob

Runs the job passed as a command line argument to the script. This method is meant to be
called in its own dedicated script, and should not be mixed up with `run`.

```typescript
public static runJob(
  jobs: JobSchedulerSettings['jobs'],
  logsPath: string,
  logLevel: 'debug' | 'info' | 'warn' | 'error' | 'fatal',
): Promise<void>;
```

### Parameters

- **jobs:** List of jobs to register.
- **logsPath:** Path to the tasks logs directory.
- **logLevel:** Minimum logging level (all logs below that level won't be logs).

### Usage

```typescript
await JobScheduler.runJob({
  testJob: async (taskId, metaData, log): Promise<void> => {
    await Promise.resolve();
    log.info(`Hello from ${String(taskId)}!`);
    log.info(metaData.lastCompletedAt);
  },
}, '/tmp/logs', 'debug');
```

---

## run

Executes job scheduler.

```typescript
public run(): Promise<void>;
```

### Usage

```typescript
await jobScheduler.run();
```
