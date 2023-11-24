---
sidebar_position: 4
---

# DatabaseClient

MongoDB database client.

```typescript
class DatabaseClient extends BaseDatabaseClient<DataModel>
```

---

## constructor

```typescript
constructor(logger: Logger, cache: CacheClient, settings: DatabaseClientSettings);
```

### Description

Class constructor.

### Parameters

- **logger:** Logging system to use.
- **cache:** Cache client instance to use for results caching.
- **settings:** Database client settings.

---

## getRunningTasks

```typescript
public async getRunningTasks(): Promise<Task[]>;
```

### Description

Fetches list of running tasks.

### Returns

Running tasks list.

---

## getCandidatePendingTasks

```typescript
public async getCandidatePendingTasks(): Promise<Task[]>;
```

### Description

Fetches the list of pending tasks that are candidate for execution.

### Returns

Pending tasks list.

---

## reset

```typescript
public async reset(): Promise<void>;
```

### Description

Resets the whole underlying database, re-creating collections, indexes, and such.
