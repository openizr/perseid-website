---
sidebar_position: 1
title: MySQL
description: The @perseid/jobs MySQLDatabaseClient service handles I/O with a MySQL database.
---

# MySQLDatabaseClient

MySQL database client.
Exported in `@perseid/jobs/mysql`.
Extends `@perseid/jobs` `DatabaseClient` class.

---

## constructor

Class constructor.

```typescript
public constructor(
  logger: Logger,
  cache: CacheClient,
  settings: DatabaseClientSettings,
);
```

## Parameters

- **logger:** Logging system to use.
- **cache:** Cache client instance to use for results caching.
- **settings:** Database client settings.

### Usage

```typescript
const databaseClient = new MySQLDatabaseClient(logger, cache, {
  host: 'mysql',
  port: 3306,
  user: null,
  password: null,
  protocol: 'mysql:',
  database: 'test',
  connectTimeout: 2000,
  connectionLimit: 10,
})
```

---

## formatTasks

Formats `results` into a database-agnostic tasks.

```typescript
protected formatTasks(results: unknown[]): DataModel['tasks'][];
```

### Parameters

- **results:** List of database raw results to format.

### Returns

Formatted results.

### Usage

```typescript
databaseClient.formatTasks([...]);
```

---

## updateMatchingTask

Updates task that matches `filters` with `payload`.

```typescript
public abstract updateMatchingTask(
  filters: SearchFilters,
  payload: Payload<DataModel['tasks']>,
): Promise<boolean>;
```

### Parameters

- **filters:** Filters to apply to match task.
- **payload:** Updated task payload.

### Returns

`true` if task was updated, `false` otherwise.

### Usage

```typescript
databaseClient.updateMatchingTask({
  _id: new Id(),
  _status: 'IN_PROGRESS'
}, { _status: 'COMPLETED' });
```

---

## getRunningTasks

Fetches list of running tasks.

```typescript
public abstract getRunningTasks(): Promise<DataModel['tasks'][]>;
```

### Returns

Running tasks list.

### Usage

```typescript
await databaseClient.getRunningTasks(); // [...]
```

---

## getCandidatePendingTasks

Fetches the list of pending tasks that are candidate for execution.

```typescript
public abstract getCandidatePendingTasks(): Promise<DataModel['tasks'][]>;
```

### Returns

Pending tasks list.

### Usage

```typescript
await databaseClient.getCandidatePendingTasks(); // [...]
```