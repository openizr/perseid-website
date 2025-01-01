---
sidebar_position: 1
title: BucketClient
description: The @perseid/server BucketClient handles log files storage on a remote bucket.
---

# BucketClient

Handles log files storage on a remote bucket.
Extends `@perseid/core` `HttpClient` class.

---

## logger

Logging system.

```typescript
protected logger: Logger;
```

---

## upload

Uploads `body` on the bucket at `path`.

```typescript
public upload(_type: string, path: string, body: Stream): Promise<void>;
```

### Parameters

- **settings:** Bucket client settings.
constructor(logger: Logger, settings: BucketClientSettings);
- **type:** Content's MIME type.
- **path:** Destination path on the bucket.
- **body:** Content to upload.

### Usage

```typescript
TODO
```
