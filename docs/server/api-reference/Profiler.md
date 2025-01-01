---
sidebar_position: 1
title: Profiler
description: The @perseid/server Profiler service provides performance measurement tools (execution time, memory, ...).
---

# Profiler

Provides performance measurement tools (execution time, memory, ...).

---

## constructor

Class constructor.

```typescript
public constructor();
```

### Usage

```typescript
TODO
```

---

## formatMetrics

Formats the given profiler metrics into a human-readable string.

```typescript
public static formatMetrics(metrics: Measurement[]): string;
```

### Parameters

- **metrics:** Profiler metrics.

### Returns

Formatted metrics.

### Usage

```typescript
TODO
```

---

## getCpuAverageLoad

Computes current CPU average load.
See https://gist.github.com/GaetanoPiazzolla/c40e1ebb9f709d091208e89baf9f4e00.

```typescript
public static getCpuAverageLoad(): CpuLoad;
```

### Parameters

- **metrics:** Profiler metrics.

### Returns

Current CPU average load.

### Usage

```typescript
TODO
```

---

## reset

Resets profiling.

```typescript
public reset(): void;
```

### Parameters

- **metrics:** Profiler metrics.

### Usage

```typescript
TODO
```

---

## snapshot

Creates a snapshot of current performance metrics under the given name.

```typescript
public snapshot(name: string): void;
```

### Parameters

- **metrics:** Profiler metrics.
- **name:** Snapshot name.

### Usage

```typescript
TODO
```

---

## getMetrics

Returns collected performance metrics for the current profiling session.

```typescript
public getMetrics(): Measurement[];
```

### Parameters

- **name:** Snapshot name.

### Returns

Collected metrics.

### Usage

```typescript
TODO
```
