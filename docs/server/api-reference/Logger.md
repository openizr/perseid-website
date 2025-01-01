---
sidebar_position: 1
title: Logger
description: The @perseid/server Logger handles log files storage on a remote bucket.
---

# Logger

pino-based logging system.

---

## logger

pino logger instance.

```typescript
protected logger: PinoLogger;
```

---

## destination

Custom pino destination for logs (e.g. specific file, distant stream, ...).

```typescript
protected destination?: PinoDestination;
```

---

## level

Minimum logging level (all logs below that level won't be logs).

```typescript
public readonly level: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
```

---

## constructor

Class constructor.

```typescript
public constructor(settings: LoggerSettings);
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## child

Only for pino compatibility.

```typescript
public child(): PinoLogger;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## silent

Only for pino compatibility.

```typescript
public silent(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## trace

@deprecated Use `debug` instead.

```typescript
public trace(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## debug

Information that is diagnostically helpful to people more than just developers
(IT, sysadmins, etc.).
This should be the minimum logging level in development.

```typescript
public debug(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## info

Generally useful information to log (service start/stop, configuration assumptions, etc).
Info we want to always have available but usually don't care about under normal
circumstances. This should be the minimum logging level in (pre)production.

```typescript
public info(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## warn

Anything that can potentially cause application oddities, but which is not a serious concern
(Such as switching from a primary to backup server, retrying an operation, missing secondary
data, etc.). Not much to worry about, but it is still important to analyze warnings on a
regular basis to identify potential issues.

```typescript
public warn(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## error

Any error which is fatal to the operation, but not the service or application (can't open a
required file, missing data, etc.). These errors will force user (administrator, or direct
user) intervention. These are usually reserved for incorrect connection strings, missing
services, uncaught exceptions, etc. Constitutes a degradation of service, which means
engineering team must be immediately notified.

```typescript
public error(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## fatal

Any error that is forcing a shutdown of the service or application to prevent data loss
(or further data loss). Reserved only for the most heinous errors and situations where there
is guaranteed to have been data corruption or loss. Constitutes an interruption of service,
which means engineering and SysAdmin / DevOps teams must be immediatly notified.

```typescript
public fatal(message: unknown, ...args: unknown[]): void;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## waitForReady

Resolves as soon as the logging system is ready to accept logs.

```typescript
public waitForReady(): Promise<void>;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```

---

## close

Gracefully closes pino logger, flushing remaining buffered logs.

```typescript
public close(): Promise<void>;
```

### Parameters

- **settings:** Logger settings.

### Usage

```typescript
TODO
```
