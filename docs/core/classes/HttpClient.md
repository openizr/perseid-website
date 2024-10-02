---
title: HttpClient
description: The @perseid/core HttpClient provides a cleaner fetch API with a better errors handling.
---

# HttpClient

Provides a cleaner `fetch` API with better error handling.

---

## connectTimeout

Maximum request duration (in ms) before generating a timeout.

```typescript
protected connectTimeout: number;
```

---

## constructor

Class constructor.

```typescript
public constructor(connectTimeout: number);
```

### Parameters

- **connectTimeout:** Maximum request duration (in ms) before generating a timeout.

### Usage

```typescript
const httpClient = new HttpClient(3000);
```

---

## rawRequest

Performs a new HTTP request with `settings`.

```typescript
protected rawRequest(settings: RequestSettings): Promise<Response>;
```

### Parameters

- **settings:** Request settings (URL, method, body, ...).

### Returns

Raw HTTP response.

### Throws

If the request fails.

### Usage

```typescript
await httpClient.rawRequest({ method: 'POST', url: 'https://example.com' });
```

---

## request

Performs a new HTTP request with `settings` and parses the response.

```typescript
protected request<Response>(settings: RequestSettings): Promise<Response>;
```

### Parameters

- **settings:** Request settings (URL, method, body, ...).

### Returns

Parsed HTTP response.

### Usage

```typescript
// { test: 'hello world!' }
await httpClient.request<{ test: string; }>({ method: 'POST', url: 'https://example.com' });
```
