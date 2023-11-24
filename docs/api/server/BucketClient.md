---
sidebar_position: 4
---

# BucketClient

Handles log files storage on a remote bucket.

```typescript
class BucketClient
```

---

## Properties

- **logger:** Logging system.

---

## constructor

```typescript
constructor(logger: Logger);
```

### Description

Class constructor.

### Parameters

- **logger:** Logging system to use.

---

## upload

```typescript
public upload(_type: string, path: string, body: Stream): Promise<void>;
```

### Description

Uploads `body` on the bucket at `path`.

### Parameters

- **_type:** Content's MIME type.
- **path:** Destination path on the bucket.
- **body:** Content to upload.
