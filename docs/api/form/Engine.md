---
sidebar_position: 4
---

# Engine

Form engine for managing form logic and state.

---

## Properties

- **store:** Store instance.
- **cache:** Cache client, may be `null`.
- **cacheKey:** Key used for caching form data.
- **cacheTimeout:** Timer for refreshing cached form data.
- **configuration:** Form engine configuration.
- **hooks:** Event hooks for form events.
- **loading:** Indicates if the next step is being loaded.
- **steps:** All generated form steps.
- **currentStep:** Reference to the current step.
- **variables:** User-defined variables accessible throughout the form.
- **mutationTimeout:** Timer for managing mutation delays.
- **initialValues:** Initial values for form fields.
- **userInputsQueue:** Queue of pending user inputs.
- **discardedUserInputs:** List of discarded user inputs.
- **userInputs:** Both full and partial user inputs.

---

## Methods

### areEqual

```typescript
protected areEqual<T1, T2>(firstInput: T1, secondInput: T2, type: FieldConfiguration['type']): boolean;
```

Compares two inputs for equality based on their type.

---

### coerce

```typescript
protected coerce(input: unknown, type: FieldConfiguration['type']): unknown;
```

Coerces a user input into its proper type.

---

### enqueueMutation

```typescript
protected enqueueMutation(mutation: string, data: Step[] | boolean): void;
```

Adds a mutation to the queue for optimized performance.

---

### createField

```typescript
protected createField(path: string, configuration: FieldConfiguration): Field | null;
```

Generates a field from its configuration.

---

### toggleField

```typescript
protected toggleField(path: string, field: Field | null, configuration: FieldConfiguration, newValue: unknown, initialValue: Exclude<unknown, undefined>, newInputs?: { partial?: unknown; full?: unknown }): Field | null;
```

Manages field visibility and value assignment.

---

### toggleFields

```typescript
protected toggleFields(step: Step | null, newFieldValues: Map<string, unknown>): void;
```

Toggles all fields for a given step.

---

### validateField

```typescript
protected validateField(field: Field | null, configuration: FieldConfiguration, partial: boolean, updatedFieldPaths: string[]): Exclude<Field['status'], 'initial'>;
```

Validates a field against its rules.

---

### validateFields

```typescript
protected validateFields(updatedFieldPaths: string[], partial?: boolean): void;
```

Validates all fields in the current step.

---

### triggerHooks

```typescript
protected triggerHooks<T extends HookData>(eventName: FormEvent, data: T): Promise<T | null>;
```

Triggers a chain of hooks for a specific event.

---

### processUserInputs

```typescript
protected processUserInputs(): Promise<void>;
```

Processes user inputs in batches for performance.

---

### handleUserAction

```typescript
protected handleUserAction(userAction: UserAction | null): Promise<void>;
```

Handles new user actions.

---

### Constructor

```typescript
constructor(configuration: Configuration);
```

Initializes the form engine with the given configuration.

---

### Public Methods

#### isEmpty

```typescript
public isEmpty(input: unknown, type: FieldConfiguration['type']): boolean;
```

Checks if an input is considered empty.

---

#### createStep

```typescript
public createStep(stepId: string | null): Promise<void>;
```

Generates a form step.

---

#### toggleLoader

```typescript
public toggleLoader(display: boolean): void;
```

Toggles the loader indicating step generation.

---

#### getStore

```typescript
public getStore(): Store;
```

Retrieves the current store instance.

---

#### notifyUI

```typescript
public notifyUI(): void;
```

Notifies all listeners of the `state` module.

---

### on

```typescript
public on(eventName: FormEvent, hook: Hook<Data>): void;
```

Registers a new hook for a specific form event.

#### Parameters

- **eventName:** The name of the event to register the hook for. Can be one of `'userAction'`, `'afterUserAction'`, `'step'`, `'afterStep'`, `'error'`, `'submit'`, or `'start'`.
- **hook:** The hook function to register.

---

### userAction

```typescript
public userAction(userAction: UserAction): void;
```

Triggers a specified user action.

#### Parameters

- **userAction:** The user action to trigger.

---

### getUserInputs

```typescript
public getUserInputs<T>(partial?: boolean): T;
```

Retrieves the current user inputs from the form, either full or partial.

#### Parameters

- **partial:** Optional boolean indicating whether to return only partial user inputs.

#### Returns

- The current user inputs.

---

### getConfiguration

```typescript
public getConfiguration(path?: string): SubConfiguration;
```

Retrieves the configuration for a specific field or step in the form.

#### Parameters

- **path:** Optional path to the field or step.

#### Returns

- The configuration for the specified path.

---

### getField

```typescript
public getField(path: string): Field | null;
```

Returns the generated field at the specified path.

#### Parameters

- **path:** The path to the field in the form.

#### Returns

- The generated field, or `null` if it doesn't exist.

---

### getSteps

```typescript
public getSteps(): Step[];
```

Returns all the generated steps in the form.

#### Returns

- **Array of Step:** An array of all the steps generated within the form.

---

### getVariables

```typescript
public getVariables<T>(): T;
```

Retrieves the current set of variables from the form.

#### Returns

- **T:** The current set of form variables, typed as `T`.

---

### setVariables

```typescript
public setVariables<T>(variables: T): Promise<void>;
```

Adds or overrides the given set of form variables.

#### Parameters

- **variables:** The set of variables to add or override in the form.

---

### clearCache

```typescript
public clearCache(): Promise<void>;
```

Clears the current form cache.

#### Description

Use this method to clear cached form data, ensuring that the form starts afresh without any previously stored inputs or states.

---

### setInitialValues

```typescript
public setInitialValues(initialValues: UserInputs): void;
```

Sets initial form values.

#### Parameters

- **initialValues:** The new initial values to apply to the form.

#### Description

This method is especially useful for resetting initial values for multiple partial submissions without the need to re-create the entire form each time. It allows for dynamically updating the starting values of the form fields.
