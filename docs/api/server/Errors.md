---
sidebar_position: 4
---

# Errors

Errors thrown by perseid services.

---

## EngineError

```typescript
new EngineError(code: string, details?: Details)
```

### Description

Engine error.

### Parameters

- **code:** Error code.
- **details:** Error details.

---

## DatabaseError

```typescript
new DatabaseError(code: string, details?: Details)
```

### Description

Database error.

### Parameters

- **code:** Error code.
- **details:** Error details.

---

## BadRequest

```typescript
new BadRequest(code: string | number, message: string)
```

### Description

HTTP 400 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## Conflict

```typescript
new Conflict(code: string | number, message: string)
```

### Description

HTTP 409 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## Forbidden

```typescript
new Forbidden(code: string | number, message: string)
```

### Description

HTTP 403 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## Gone

```typescript
new Gone(code: string | number, message: string)
```

### Description

HTTP 410 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## NotAcceptable

```typescript
new NotAcceptable(code: string | number, message: string)
```

### Description

HTTP 406 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## NotFound

```typescript
new NotFound(code: string | number, message: string)
```

### Description

HTTP 404 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## RequestEntityTooLarge

```typescript
new RequestEntityTooLarge(code: string | number, message: string)
```

### Description

HTTP 413 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## TooManyRequests

```typescript
new TooManyRequests(code: string | number, message: string)
```

### Description

HTTP 429 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## Unauthorized

```typescript
new Unauthorized(code: string | number, message: string)
```

### Description

HTTP 401 error.

### Parameters

- **code:** Error code.
- **message:** Error message.

---

## UnprocessableEntity

```typescript
new UnprocessableEntity(code: string | number, message: string)
```

### Description

HTTP 422 error.

### Parameters

- **code:** Error code.
- **message:** Error message.
