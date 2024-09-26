---
sidebar_position: 3
title: Logger
description: The @perseid/core Logger class represents a logging system.
---

# Logger

Abstract class that represents a logging system.
Extend this class with a real implementation depending on the environment (node/browser).

---

## constructor

Class constructor.

```typescript
public constructor();
```

### Usage

```typescript
const logger = new Logger();
```

---

## debug

Information that is diagnostically helpful to people more than just developers (IT, sysadmins, etc.).
This should be the minimum logging level in development.

```typescript
public abstract debug(...args: unknown[]): void;
```

### Parameters

- **`...args`:**  Parameters to log.

### Usage

```typescript
logger.debug('Message...');
```

---

## info

Generally useful information to log (service start/stop, configuration assumptions, etc).
Info we want to always have available but usually don't care about under normal circumstances.
This should be the minimum logging level in (pre)production.

```typescript
public abstract info(...args: unknown[]): void;
```

### Parameters

- **`...args`:**  Parameters to log.

### Usage

```typescript
logger.info('Message...');
```

---

## warn

Anything that can potentially cause application oddities, but which is not a serious concern
(such as switching from a primary to backup server, retrying an operation, missing secondary
data, etc.). Not much to worry about, but it is still important to analyze warnings on a
regular basis to identify potential issues.

```typescript
public abstract warn(...args: unknown[]): void;
```

### Parameters

- **`...args`:**  Parameters to log.

### Usage

```typescript
logger.warn('Message...');
```

---

## error

Any error which is fatal to the operation, but not the service or application (can't open a
required file, missing data, etc.). These errors will force user (administrator, or direct
user) intervention. These are usually reserved for incorrect connection strings, missing
services, uncaught exceptions, etc. Constitutes a degradation of service, which means
engineering team must be immediately notified.

```typescript
public abstract error(...args: unknown[]): void;
```

### Parameters

- **`...args`:**  Parameters to log.

### Usage

```typescript
logger.error('Message...');
```

---

## fatal

Any error that is forcing a shutdown of the service or application to prevent data loss
(or further data loss). Reserved only for the most heinous errors and situations where there is
guaranteed to have been data corruption or loss. Constitutes an interruption of service, which
means engineering and SysAdmin / DevOps teams must be immediatly notified.

```typescript
public abstract fatal(...args: unknown[]): void;
```

### Parameters

- **`...args`:**  Parameters to log.

### Usage

```typescript
logger.fatal('Message...');
```

---

## close

Gracefully closes the logging system (before stopping the program, for instance).

```typescript
public abstract close(): Promise<void>;
```

### Usage

```typescript
await logger.close();
```

