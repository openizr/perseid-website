---
sidebar_position: 2
---

# Id

Isomorphic universally unique identifiers generator. Inspired from mongodb ObjectId implementation
and Snowflake algorithm. An id is a 12-byte value, constructed as follows:
- A 4-byte timestamp
- A 5-byte process-specific id
- A 3-byte script-specific id

---

## toJSON

```typescript
public toJSON(): string;
```

### Description

Returns id JSON representation.

### Returns

Id JSON representation.

---

## toString

```typescript
public toString(): string;
```

### Description

Returns id string representation.

### Returns

Id string representation.

---

## valueOf

```typescript
public valueOf(): string;
```

### Description

Returns id value representation.

### Returns

Id value representation.
