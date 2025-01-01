---
sidebar_position: 1
title: CacheClient
description: The @perseid/server CacheClient handles data caching for faster access.
---

# CacheClient

Handles data caching for faster access.
Extends `@perseid/core` `HttpClient` class.

---

## cachePath

Cache file path.

```typescript
protected cachePath: string;
```

---

## delete

Deletes cached data stored at `key`.

```typescript
public delete(key: string): Promise<void>;
```

### Parameters

- **settings:** Cache client settings.
constructor(settings: CacheClientSettings);
- **key:** Key containing cached data.

### Usage

```typescript
TODO
```

---

## get

Fetches cached data stored at `key`.

```typescript
public get(key: string): Promise<string | null>;
```

### Parameters

- **key:** Key containing cached data.
- **key:** Key containing cached data.

### Returns

Cached data if it exists, `null` otherwise.

### Usage

```typescript
TODO
```

---

## set

Stores `data` in cache, at `key`.

```typescript
public set(key: string, data: unknown, duration: number): Promise<void>;
```

### Parameters

- **key:** Key containing cached data.
- **key:** Key to store data at.
- **data:** Data to store in cache.
- **duration:** Duration, in seconds, for which to keep data in cache.

### Usage

```typescript
TODO
```
