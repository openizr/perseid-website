---
sidebar_position: 1
---

# Helpers

---

## forEach

```typescript
function forEach<T>(
  items: T[],
  callback: (item: T, index: number) => Promise<void>,
): Promise<void>;
```

### Description

Implementation of JS `Array.forEach` method, adapted to asynchronous callbacks.

### Parameters

- **items:** Items to iterate on.
- **callback:** Asynchronous function to execute for each item.

### Returns

Translated label.

---

## toSnakeCase

```typescript
function toSnakeCase(text: string): string;
```

### Description

Transforms `text` into SNAKE_CASE.

### Parameters

- **text:** Text to transform.

### Returns

Transformed text.

---

## isPlainObject

```typescript
function isPlainObject<T>(variable: T): boolean;
```

### Description

Returns `true` if `variable` is a plain object, `false` otherwise.

### Parameters

- **variable:** Variable to check.

### Returns

`true` if variable is a plain object, `false` otherwise.

---

## deepCopy

```typescript
function deepCopy<T>(variable: T): T;
```

### Description

Performs a deep copy of a variable. Only plain objects and arrays are deeply copied.

### Parameters

- **variable:** Variable to deeply copy.

### Returns

Variable deep copy.

---

## deepMerge

```typescript
function deepMerge<T1, T2>(
  firstVariable: T1,
  secondVariable: T2,
): T1 & T2;
```

### Description

Performs a deep merge of `firstVariable` and `secondVariable`. Only plain objects and arrays are
deeply merged. In any other case, `secondVariable` is returned if it is defined.

### Parameters

- **firstVariable:** First object.
- **secondVariable:** Second object.

### Returns

Variables deep merge.
