---
sidebar_position: 1
title: "@perseid/core Helpers"
description: The @perseid/core package offers a collection of isomorphic helper functions that are useful for a wide range of projects.
---

# Helpers

The `@perseid/core` package offers a collection of isomorphic helper functions that are useful for a wide range of projects.

---

## forEach

Implementation of JS `Array.forEach` method, adapted to asynchronous callbacks.

```typescript
function forEach<T>(
  items: T[],
  callback: (item: T, index: number) => Promise<void>,
): Promise<void>;
```

### Parameters

- **items:** Items to iterate on.
- **callback:** Asynchronous function to execute for each item.

### Returns

Translated label.

### Usage

```typescript
[1, 2, 3].forEach(async (item) => {
  await doSomethingAsync(item);
});
```

---

## toSnakeCase

Transforms `text` into SNAKE_CASE.

```typescript
function toSnakeCase(text: string): string;
```

### Parameters

- **text:** Text to transform.

### Returns

Transformed text.

### Usage

```typescript
toSnakeCase('helloWorld'); // HELLO_WORLD
```

---

## isPlainObject

Returns `true` if `variable` is a plain object, `false` otherwise.

```typescript
function isPlainObject<T>(variable: T): boolean;
```

### Parameters

- **variable:** Variable to check.

### Returns

`true` if variable is a plain object, `false` otherwise.

### Usage

```typescript
isPlainObject(189); // false
isPlainObject(null); // false
isPlainObject([1, 2, 3]); // false
isPlainObject(new Date()); // false
isPlainObject({ hello: 'world' }); // true
```

---

## deepCopy

Performs a deep copy of `variable`. Only plain objects and arrays are deeply copied.

```typescript
function deepCopy<T>(variable: T): T;
```

### Parameters

- **variable:** Variable to deeply copy.

### Returns

Variable deep copy.

### Usage

```typescript
const object = { hello: 'world', subObject: { key: 'test' } };
const objectDeepCopy = deepCopy(object);
object === objectDeepCopy; // false
object.subObject === objectDeepCopy.subObject; // false
JSON.stringify(object) === JSON.stringify(objectDeepCopy); // true
```

---

## deepMerge

Performs a deep merge of `firstVariable` and `secondVariable`. Only plain objects and arrays are
deeply merged. In any other case, `secondVariable` is returned if it is defined.

```typescript
function deepMerge<T1, T2>(
  firstVariable: T1,
  secondVariable: T2,
): T1 & T2;
```

### Parameters

- **firstVariable:** First object.
- **secondVariable:** Second object.

### Returns

Variables deep merge.

### Usage

```typescript
// { hello: 'world', subObject: { key: 'test', key2: 'test2' } }
deepMerge({ hello: 'world', subObject: { key: 'test' } }, { subObject: { key2: 'test2' } });
```
