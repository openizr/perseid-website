---
sidebar_position: 4
---

# EmailClient

Handles emails sending.

```typescript
class EmailClient
```

---

## Properties

- **logger:** Logging system.

---

## constructor

```typescript
constructor(logger: Logger);
```

### Description

Class constructor.

### Parameters

- **logger:** Logging system to use.

---

## sendVerificationEmail

```typescript
public sendVerificationEmail(to: string, verificationUrl: string): Promise<void>;
```

### Description

Sends a verification email to `to`.

### Parameters

- **to:** Recipient email address.
- **verificationUrl:** Verification URL to indicate in the email.

---

## sendPasswordResetEmail

```typescript
public sendPasswordResetEmail(to: string, passwordResetUrl: string): Promise<void>;
```

### Description

Sends a password reset email to `to`.

### Parameters

- **to:** Recipient email address.
- **passwordResetUrl:** Password reset URL to indicate in the email.

---

## sendInviteEmail

```typescript
public sendInviteEmail(to: string, signInUrl: string, temporaryPassword: string): Promise<void>;
```

### Description

Sends a user invite email to `to`.

### Parameters

- **to:** Recipient email address.
- **signInUrl:** Sign-in URL to indicate in the email.
- **temporaryPassword:** Temporary password to indicate in the email.
