---
title: HttpClient
description: The @perseid/core HttpClient provides a cleaner fetch API with a better errors handling.
---

# HttpClient

Class to use as a base for all services that need to perform HTTP requests.
Provides a cleaner `fetch` API with better error handling.

---

## Complete example

```typescript
import { HttpClient } from '@perseid/core';

class MyAPiClient extends HttpClient {
  public async callTestEndpoint(): Promise<{ test: string; }> {
    return this.request({
      method: 'POST',
      url: 'https://test.test/test',
      // Passing optional JSON body...
      body: { key: 'value' },
      // ...and additional headers...
      headers: { Authorization: 'Bearer XXXXXXXXXXXXXXXXXXXX' },
    });
  }
}

const myApiClient = new MyAPiClient(3000);

// If the request fails (HTTP status >= 400), will reject with something like:
// `{
//   body: {...},
//   ok: false,
//   url: 'https://test.test/test',
//   type: 'default',
//   status: 500,
//   headers: {...},
//   statusText: 'Internal Server Error',
//   redirected: false,
// }`
// Otherwise, will resolve with something like `{ test: 'hello world!' }`.
await myApiClient.callTestEndpoint();
```

---

## Types

```typescript
/** HTTP request settings. */
interface RequestSettings {
  /** HTTP method to use. */
  method: 'GET' | 'PATCH' | 'DELETE' | 'PUT' | 'POST' | 'HEAD' | 'OPTIONS';

  /** Request URL. */
  url: string;

  /** Request body. */
  body?: string | FormData | Record<string, unknown>;

  /** Request headers. */
  headers?: Record<string, string>;
}
```

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
Automatically handles request body serialization and `Content-Type` headers.

```typescript
protected rawRequest(settings: RequestSettings): Promise<Response>;
```

### Parameters

- **settings:** Request settings (URL, method, body, ...).

### Returns

Raw HTTP response.

### Throws

If request fails, either because of a network error, or if HTTP status is >= 400.

### Usage

```typescript
await httpClient.rawRequest({ method: 'POST', url: 'https://example.com' });
```

---

## request

Performs a new HTTP request with `settings`.
Automatically handles request body serialization, `Content-Type` headers and response body parsing.

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
