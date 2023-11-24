---
sidebar_position: 4
---

# CacheClient

Handles data caching for faster access.

```typescript
class CacheClient
```

---

## Properties

- **cachePath:** Cache file path.

---

## constructor

```typescript
constructor(settings: CacheClientSettings);
```

### Description

Class constructor.

### Parameters

- **settings:** Cache client settings.

---

## delete

```typescript
public delete(key: string): Promise<void>;
```

### Description

Deletes cached data stored at `key`.

### Parameters

- **key:** Key containing cached data.

---

## get

```typescript
public get(key: string): Promise<(string | null)>;
```

### Description

Fetches cached data stored at `key`.

### Parameters

- **key:** Key containing cached data.

### Returns

Cached data if it exists, `null` otherwise.

---

## set

```typescript
public set(key: string, data: unknown, duration: number): Promise<void>;
```

### Description

Stores `data` in cache, at `key`.

### Parameters

- **key:** Key to store data at.
- **data:** Data to store in cache.
- **duration:** Duration, in seconds, for which to keep data in cache.
