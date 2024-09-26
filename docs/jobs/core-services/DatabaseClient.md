---
sidebar_position: 1
title: DatabaseClient
description: The @perseid/jobs DatabaseClient service handles I/O with the database.
---

# DatabaseClient

Abstract database client, to use as a blueprint for DBMS-specific implementations.
Extends `@perseid/server` `AbstractDatabaseClient` class.

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
