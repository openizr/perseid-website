---
sidebar_position: 4
---

# UsersEngine

Perseid engine extended with auth-related methods.

```typescript
class UsersEngine<
  /** Data model types definitions. */
  DataModel extends DefaultDataModel = DefaultDataModel,

  /** Model class types definitions. */
  Model extends BaseModel<DataModel> = BaseModel<DataModel>,

  /** Database client types definition. */
  DatabaseClient extends BaseDatabaseClient<DataModel> = BaseDatabaseClient<DataModel>,
> extends Engine<DataModel, Model, DatabaseClient>
```

---

## Properties

- **REFRESH_TOKEN_DURATION:** Default duration before a refresh token expires. (30 days)
- **emailClient:** Email client to use.
- **cacheClient:** Cache client to use.
- **settings:** Auth engine settings.

---

## constructor

```typescript
constructor(model: Model, logger: Logger, databaseClient: DatabaseClient, emailClient: EmailClient, cacheClient: CacheClient, settings: UsersEngineSettings);
```

### Description

Class constructor.

### Parameters

- **model:** Data model to use.
- **logger:** Logging system to use.
- **databaseClient:** Database client to use.
- **emailClient:** Email client to use.
- **cacheClient:** Cache client to use.
- **settings:** Engine settings.

---

## generateCredentials

```typescript
protected generateCredentials(userId: Id, deviceId?: string): Credentials;
```

### Description

Generates new credentials (refresh/access tokens) for `userId` and `deviceId`.

### Parameters

- **userId:** Id of the user to generate credentials for.
- **deviceId:** Id of the device to generate credentials for. If not set, a new id will be created.

### Returns

Generated credentials.

---

## checkAndUpdatePayload

```typescript
protected checkAndUpdatePayload<Collection extends keyof DataModel>(collection: Collection, payload: UpdatePayload<DataModel[Collection]>, context: CommandContext & { mode: 'CREATE' | 'UPDATE' }): Promise<Partial<DataModel[Collection]>>;
```

### Description

Performs specific checks `payload` to make sure it is valid, and updates it if necessary.

### Parameters

- **collection:** Payload collection.
- **payload:** Payload to validate and update.
- **context:** Command context.

### Returns

Validated and updated payload.

---

## create

```typescript
public create<Collection extends keyof DataModel>(collection: Collection, payload: Payload<DataModel[Collection]>, options: CommandOptions, context: CommandContext): Promise<DataModel[Collection]>;
```

### Description

Creates a new resource into `collection`.

### Parameters

- **collection:** Name of the collection to create resource into.
- **payload:** New resource payload.
- **options:** Command options.
- **context:** Command context.

### Returns

Newly created resource.

---

## verifyToken

```typescript
public verifyToken(accessToken: string, ignoreExpiration: boolean, context: CommandContext): Promise<Id>;
```

### Description

Verifies `accessToken` validity.

### Parameters

- **accessToken:** Access token to verify.
- **ignoreExpiration:** Whether to ignore access token expiration.
- **context:** Command context.

### Returns

Id of the user related to the access token.

### Throws

- If device id is not valid.

---

## signUp

```typescript
public signUp(email: DataModel['users']['email'], password: DataModel['users']['password'], passwordConfirmation: DataModel['users']['password'], context: CommandContext): Promise<Credentials>;
```

### Description

Signs a new user up in the system.

### Parameters

- **email:** User email.
- **password:** User password.
- **passwordConfirmation:** User password confirmation.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If password and confirmation mismatch.

---

## signIn

```typescript
public signIn(email: string, password: string, context: CommandContext): Promise<Credentials>;
```

### Description

Signs an existing user in.

### Parameters

- **email:** User email.
- **password:** User password.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If user with email `email` does not exist.
- If `password` does not match user password.

---

## requestEmailVerification

```typescript
public requestEmailVerification(context: CommandContext): Promise<void>;
```

### Description

Sends a new verification email to connected user.

### Parameters

- **context:** Command context.

### Throws

- If user email is already verified.

---

## verifyEmail

```typescript
public verifyEmail(verificationToken: string, context: CommandContext): Promise<void>;
```

### Description

Verifies email of the connected user.

### Parameters

- **token:** Verification token that was sent in the verification email.
- **context:** Command context.

### Throws

- If verification token is not valid.

---

## requestPasswordReset

```typescript
public requestPasswordReset(email: string): Promise<void>;
```

### Description

Sends a new password reset email to user with email `email`.

### Parameters

- **email:** Email of the user to whom to send password reset email.

---

## resetPassword

```typescript
public resetPassword(password: DataModel['users']['password'], passwordConfirmation: DataModel['users']['password'], resetToken: string): Promise<void>;
```

### Description

Resets password for user with email `email`.

### Parameters

- **password:** New password.
- **passwordConfirmation:** New password confirmation.
- **resetToken:** Reset token sent in the password reset email.

### Throws

- If password and confirmation mismatch.
- If reset token is not valid.

---

## refreshToken

```typescript
public refreshToken(refreshToken: string, context: CommandContext): Promise<Credentials>;
```

### Description

Refreshes access token for connected user.

### Parameters

- **refreshToken:** Refresh token to use to refresh access token.
- **context:** Command context.

### Returns

New credentials.

### Throws

- If refresh token is invalid.

---

## signOut

```typescript
public signOut(context: CommandContext): Promise<void>;
```

### Description

Signs connected user out.

### Parameters

- **context:** Command context.

---

## reset

```typescript
public reset(rootEmail: string, rootPassword: string): Promise<void>;
```

### Description

Resets the whole system, including database, and re-creates root role and user.

### Parameters

- **rootEmail:** Email to use for root user.
- **rootPassword:** Password to use for root user.
