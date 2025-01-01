---
sidebar_position: 1
title: EmailClient
description: The @perseid/server EmailClient handles emails sending.
---

# EmailClient

Handles emails sending.
Extends `@perseid/core` `HttpClient` class.

---

## logger

Logging system.

```typescript
protected logger: Logger;
```

---

## sendVerificationEmail

Sends a verification email to `to`.

```typescript
public sendVerificationEmail(to: string, verificationUrl: string): Promise<void>;
```

### Parameters

- **settings:** Email client settings.
constructor(logger: Logger, settings: EmailClientSettings);
- **verificationUrl:** Verification URL to indicate in the email.

### Usage

```typescript
TODO
```

---

## sendPasswordResetEmail

Sends a password reset email to `to`.

```typescript
public sendPasswordResetEmail(to: string, passwordResetUrl: string): Promise<void>;
```

### Parameters

- **verificationUrl:** Verification URL to indicate in the email.
- **to:** Recipient email address.
- **passwordResetUrl:** Password reset URL to indicate in the email.

### Usage

```typescript
TODO
```

---

## sendInviteEmail

Sends a user invite email to `to`.

```typescript
public sendInviteEmail(
to: string,
signInUrl: string,
temporaryPassword: string,
): Promise<void>;
```

### Parameters

- **passwordResetUrl:** Password reset URL to indicate in the email.
- **to:** Recipient email address.
- **signInUrl:** Sign-in URL to indicate in the email.
- **temporaryPassword:** Temporary password to indicate in the email.

### Usage

```typescript
TODO
```
