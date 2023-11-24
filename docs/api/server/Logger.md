---
sidebar_position: 4
---

# Logger

pino-based logging system.

```typescript
class Logger extends BaseLogger
```

---

## Properties

- **logger:** pino logger instance.
- **destination:** Optional custom pino destination for logs.
- **level:** Minimum logging level (all logs below that level won't be logged).

---

## constructor

```typescript
public constructor(settings: LoggerSettings);
```

### Description

Class constructor.

### Parameters

- **settings:** Logger settings.

---

## child

```typescript
public child(): PinoLogger;
```

### Description

Only for pino compatibility. Creates a child logger instance.

---

## silent

```typescript
public silent(message: unknown, ...args: unknown[]): void;
```

### Description

Only for pino compatibility. Logs a message at the silent level.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## trace (Deprecated)

```typescript
public trace(message: unknown, ...args: unknown[]): void;
```

### Description

Deprecated. Use `debug` instead.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## debug

```typescript
public debug(message: unknown, ...args: unknown[]): void;
```

### Description

Logs a debug message. Useful for diagnostic information.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## info

```typescript
public info(message: unknown, ...args: unknown[]): void;
```

### Description

Logs an info message. Useful for general, useful information.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## warn

```typescript
public warn(message: unknown, ...args: unknown[]): void;
```

### Description

Logs a warning message. Indicates potential issues.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## error

```typescript
public error(message: unknown, ...args: unknown[]): void;
```

### Description

Logs an error message. Indicates a serious issue that needs attention.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## fatal

```typescript
public fatal(message: unknown, ...args: unknown[]): void;
```

### Description

Logs a fatal error message. Indicates an error that may lead to data loss or shutdown.

### Parameters

- **message:** Message to log.
- **args:** Additional logging arguments.

---

## waitForReady

```typescript
public waitForReady(): Promise<void>;
```

### Description

Resolves as soon as the logging system is ready to accept logs.

---

## close

```typescript
public close(): Promise<void>;
```

### Description

Gracefully closes pino logger, flushing remaining buffered logs.
