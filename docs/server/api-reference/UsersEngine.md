---
sidebar_position: 1
title: UsersEngine
description: The @perseid/server UsersEngine is the engine extended with auth-related methods.
---

# UsersEngine

Perseid engine extended with auth-related methods.
Extends `@perseid/server` `Engine` class.

---

## REFRESH_TOKEN_DURATION

Default duration before a refresh token expires.

```typescript
protected readonly REFRESH_TOKEN_DURATION: number;
```

---

## emailClient

Email client to use.

```typescript
protected emailClient: EmailClient;
```

---

## cacheClient

Cache client to use.

```typescript
protected cacheClient: CacheClient;
```

---

## settings

Auth engine settings.

```typescript
protected settings: UsersEngineSettings;
```

---

## generateCredentials

Generates new credentials (refresh/access tokens) for `userId` and `deviceId`.

```typescript
protected generateCredentials(
  userId: Id,
  deviceId?: string,
): Credentials;
```

### Parameters

- **userId:** Id of the user to generate credentials for.
- **deviceId:** Id of the device to generate credentials for. If not set, a new id will be created.

### Returns

Generated credentials.

### Usage

```typesript
TODO
```

---

## withAutomaticFields

Returns updated `payload` with automatic fields.

```typescript
protected withAutomaticFields<Resource extends keyof DataModel & string>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  payload: Payload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): Promise<Payload<DataModel[Resource]>>;
```

### Parameters

- **deviceId:** Id of the device to generate credentials for. If not set, a new id will be created.
- **resource:** Type of resource for which to generate automatic fields.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Payload to update.
- **context:** Command context.

### Returns

Payload with automatic fields.

### Usage

```typesript
TODO
```

---

## checkAndUpdatePayload

Performs specific checks `payload` to make sure it is valid, and updates it if necessary.

```typescript
protected checkAndUpdatePayload<Resource extends keyof DataModel & string>(
  resource: Resource,
  existingResource: DataModel[Resource] | null,
  payload: Payload<DataModel[Resource]>,
  context: CommandContext<DataModel>,
): Promise<Payload<DataModel[Resource]>>;
```

### Parameters

- **context:** Command context.
- **resource:** Type of resource for which to check and update payload.
- **existingResource:** Existing resource being updated, if applicable, `null` otherwise.
- **payload:** Payload to validate and update.
- **context:** Command context.

### Usage

```typesript
TODO
```

---

## reset

Resets the whole system, including database, and re-creates root role and user.

```typescript
public reset(rootEmail: string, rootPassword: string): Promise<void>;
```

### Parameters

- **rootEmail:** Email to use for root user.
- **rootPassword:** Password to use for root user.

### Usage

```typesript
TODO
```

---

## create

Creates a new resource.

```typescript
public create<Resource extends keyof DataModel & string>(
  resource: Resource,
  payload: CreatePayload<DataModel[Resource]>,
  options: ViewCommandOptions,
  context: CommandContext<DataModel>,
): Promise<DataModel[Resource]>;
```

### Parameters

- **rootPassword:** Password to use for root user.
- **resource:** Type of resource to create.
- **payload:** New resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Newly created resource.

### Usage

```typesript
TODO
```

---

## viewMe

Fetches information about current user.

```typescript
public viewMe(context: CommandContext<DataModel>): Promise<DataModel['users']>;
```

### Parameters

- **context:** Command context.
- **context:** Command context.

### Returns

User information.

### Usage

```typesript
TODO
```

---

## verifyToken

Verifies `accessToken` validity.

```typescript
public verifyToken(
  accessToken: string,
  ignoreExpiration: boolean,
  context: CommandContext<DataModel>,
): Promise<Id>;
```

### Parameters

- **context:** Command context.
- **accessToken:** Access token to verify.
- **ignoreExpiration:** Whether to ignore access token expiration.
- **context:** Command context.

### Returns

Id of the user related to the access token.

### Usage

```typesript
TODO
```

---

## signUp

Signs a new user up in the system.

```typescript
public signUp(
  email: DataModel['users']['email'],
  password: DataModel['users']['password'],
  passwordConfirmation: DataModel['users']['password'],
  context: CommandContext<DataModel>,
): Promise<Credentials>;
```

### Parameters

- **context:** Command context.
- **email:** User email.
- **password:** User password.
- **passwordConfirmation:** User password confirmation.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If device id is not valid.

### Usage

```typesript
TODO
```

---

## signIn

Signs an existing user in.

```typescript
public signIn(
  email: string,
  password: string,
  context: Omit<CommandContext<DataModel>, 'user'>,
): Promise<Credentials>;
```

### Parameters

- **context:** Command context.
- **email:** User email.
- **password:** User password.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If password and confirmation mismatch.
- If user with email `email` does not exist.

### Usage

```typesript
TODO
```

---

## requestEmailVerification

Sends a new verification email to connected user.

```typescript
public requestEmailVerification(context: CommandContext<DataModel>): Promise<void>;
```

### Parameters

- **context:** Command context.
- **context:** Command context.

### Throws

- If `password` does not match user password.

### Usage

```typesript
TODO
```

---

## verifyEmail

Verifies email of the connected user.

```typescript
public verifyEmail(
  verificationToken: string,
  context: CommandContext<DataModel>,
): Promise<void>;
```

### Parameters

- **context:** Command context.
- **token:** Verification token that was sent in the verification email.
- **context:** Command context.

### Throws

- If user email is already verified.

### Usage

```typesript
TODO
```

---

## requestPasswordReset

Sends a new password reset email to user with email `email`.

```typescript
public requestPasswordReset(email: string): Promise<void>;
```

### Parameters

- **context:** Command context.
- **email:** Email of the user to whom to send password reset email.
- **context:**

### Usage

```typesript
TODO
```

---

## resetPassword

Resets password for user with email `email`.

```typescript
public resetPassword(
  password: DataModel['users']['password'],
  passwordConfirmation: DataModel['users']['password'],
  resetToken: string,
): Promise<void>;
```

### Parameters

- **context:**
- **password:** New password.
- **passwordConfirmation:** New password confirmation.
- **resetToken:** Reset token sent in the password reset email.

### Throws

- If verification token is not valid.
- If password and confirmation mismatch.

### Usage

```typesript
TODO
```

---

## refreshToken

Refreshes access token for connected user.

```typescript
public refreshToken(
  refreshToken: string,
  context: CommandContext<DataModel>,
): Promise<Credentials>;
```

### Parameters

- **resetToken:** Reset token sent in the password reset email.
- **refreshToken:** Refresh token to use to refresh access token.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If reset token is not valid.

### Usage

```typesript
TODO
```

---

## signOut

Signs connected user out.

```typescript
public signOut(context: CommandContext<DataModel>): Promise<void>;
```

### Parameters

- **context:** Command context.
- **context:** Command context.

### Usage

```typesript
TODO
```
