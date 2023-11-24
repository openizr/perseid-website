---
sidebar_position: 4
---

# Profiler

Provides performance measurement tools (execution time, memory, ...).

```typescript
class Profiler
```

---

## Properties

- **startTimestamp:** Profiling start timestamp.
- **startCpuAverageLoad:** Profiling start average CPU load.
- **measurements:** List of measurements for current profiling.

---

## constructor

```typescript
public constructor();
```

### Description

Class constructor.

---

## formatMetrics

```typescript
public static formatMetrics(metrics: Measurement[]): string;
```

### Description

Formats the given profiler metrics into a human-readable string.

### Parameters

- **metrics:** Profiler metrics.

### Returns

Formatted metrics.

---

## getCpuAverageLoad

```typescript
public static getCpuAverageLoad(): CpuLoad;
```

### Description

Computes current CPU average load. See [CPU Load Calculation Gist](https://gist.github.com/GaetanoPiazzolla/c40e1ebb9f709d091208e89baf9f4e00).

### Returns

Current CPU average load.

---

## reset

```typescript
public reset(): void;
```

### Description

Resets profiling.

---

## snapshot

```typescript
public snapshot(name: string): void;
```

### Description

Creates a snapshot of current performance metrics under the given name.

### Parameters

- **name:** Snapshot name.

---

## getMetrics

```typescript
public getMetrics(): Measurement[];
```

### Description

Returns collected performance metrics for the current profiling session.

### Returns

Collected metrics.
