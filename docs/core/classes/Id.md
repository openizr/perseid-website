---
sidebar_position: 1
title: Id
description: The @perseid/core Id class generates isomorphic universally unique identifiers.
---

# Id

Isomorphic universally unique identifiers generator. Inspired from mongodb ObjectId implementation
and Snowflake algorithm. An id is a 12-byte value, constructed as follows:
- A 4-byte timestamp
- A 5-byte process-specific id
- A 3-byte script-specific id

---

## constructor

Class constructor.

```typescript
public constructor(value?: string);
```

### Parameters

- **value:** Id string representation. If not defined, a new id will be generated.

### Usage

```typescript
const id = new Id();
const id2 = new Id('000000000000000000000001');
```

---

## toJSON

Returns id JSON representation.

```typescript
public toJSON(): string;
```

### Returns

Id JSON representation.

### Usage

```typescript
id.toJSON(); // "000000000000000000000001"
```

---

## toString

Returns id string representation.

```typescript
public toString(): string;
```

### Returns

Id string representation.

### Usage

```typescript
id.toString(); // "000000000000000000000001"
```

---

## valueOf

Returns id value representation.

```typescript
public valueOf(): string;
```

### Returns

Id value representation.

### Usage

```typescript
id.valueOf(); // "000000000000000000000001"
```
