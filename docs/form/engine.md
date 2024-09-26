---
title: "@perseid/form"
description: The @perseid/form Engine service handles the form lifecycle.
---

# Engine

Form engine.

---

## store

Store instance.

```typescript
protected store: Store;
```

---

## cache

Cache client.

```typescript
protected cache: CacheClient | null;
```

---

## cacheKey

Key used to store and retrieve form data from the cache.

```typescript
protected cacheKey: string;
```

---

## cacheTimeout

Timer that dictates when the cached form data should be refreshed.

```typescript
protected cacheTimeout: number | null;
```

---

## configuration

Form engine configuration.

```typescript
protected configuration: Configuration;
```

---

## hooks

Contains all events hooks to trigger when events are fired.

```typescript
protected hooks: Record<FormEvent, Hook<HookData>[]>;
```

---

## loading

Whether next step is being loaded.

```typescript
protected loading: boolean;
```

---

## steps

All generated form steps.

```typescript
protected steps: Step[];
```

---

## currentStep

Reference to the current step, for quicker access.

```typescript
protected currentStep: Step | null;
```

---

## variables

User-defined variables that can be accessed at any point in the form.

```typescript
protected variables: Variables;
```

---

## mutationTimeout

Timer used to manage the delay before processing queued mutations.

```typescript
protected mutationTimeout: number | null;
```

---

## initialValues

Initial values used to prepopulate form fields upon loading.

```typescript
protected initialValues: UserInputs;
```

---

## userInputsQueue

Queue of user inputs that are pending processing.

```typescript
protected userInputsQueue: Map<string, { data: unknown; configuration: FieldConfiguration; }>;
```

---

## discardedUserInputs

Discarded user inputs list (related fields do not meet display conditions).

```typescript
protected discardedUserInputs: Map<string, unknown>;
```

---

## userInputs

List of both full and partial user inputs for all displayed fields.

```typescript
protected userInputs: { full: UserInputs; partial: UserInputs; };
```

---

## constructor

Class constructor.

```typescript
public constructor();
```

### Usage

```typescript
const store = new Store();
```

---

## generateSubscriptionId

Generates a unique subscription id.

```typescript
protected generateSubscriptionId(): string;
```

### Returns

The generated subscription id.

### Usage

```typescript
store.generateSubscriptionId(); // "3e81922906bd7b"
```

---

## register

Registers a new module into the store registry.

```typescript
public register<T>(id: string, module: Module<T>): string;
```

### Parameters

- **id:** Module's unique identifier in registry. Can be any string, although it is recommended to follow a tree-structure pattern, like `/my_app/module_a/module_b`.
- **module:** Module to register.

### Returns

Module id.

### Throws

- If a module with the same id already exists in registry.

### Usage

```typescript
store.register('my_module', {
  state: { count: 0 },
  mutations: {
    ADD({ state }) {
      return {
        count: state.count + 1,
      };
    },
  },
});
```

---

## unregister

Unregisters module with id `id` from the global modules registry.

```typescript
public unregister(id: string): void;
```

### Parameters

- **id:** Id of the module to unregister.

### Returns

Module id.

### Throws

- If module with id `id` does not exist.
- If module still has related user-defined combined modules.

### Usage

```typescript
store.unregister('my_module');
```

---

## constructor

Class constructor.

```typescript
constructor(configuration: Configuration);
```

### Parameters

- **configuration:** Form engine configuration.

### Usage

```typescript
const engine = new Engine({ ... });
```

---

## areEqual

Checks whether `firstInput` and `secondInput` are equal, according to their type.

```typescript
protected areEqual(
  firstInput: unknown,
  secondInput: unknown,
  type: FieldConfiguration['type'],
): boolean;
```

### Parameters

- **firstInput:** First input to compare.
- **secondInput:** Second input to compare.
- **type:** Inputs type.

### Returns

`true` if `firstInput` and `secondInput` are equal, `false` otherwise.

### Usage

```typescript
engine.areEqual('test', 'test2', 'string'); // false
```

---

## coerce

Coerces `input` into its proper type.

```typescript
protected coerce(input: unknown, type: FieldConfiguration['type']): unknown;
```

### Parameters

- **input:** User input to check and coerce.
- **type:** Type to use for coercion and checking.

### Returns

Coerced user input.

### Throws

- If input should be an object but is not.
- If input should be an array but is not.

### Usage

```typescript
engine.coerce('12.5', 'float'); // 12.5
```

---

## enqueueMutation

Adds the given mutation and related data into the queue. "Buffering" mutations is an optimization that prevents UI from being notified (and thus re-rendered) too many times per second, which would be unnecessary and not great UX-wise.

```typescript
protected enqueueMutation(mutation: string, data: Step[] | boolean): void;
```

### Parameters

- **mutation:** Mutation name for the `state` module.
- **data:** Mutation data.

### Usage

```typescript
engine.enqueueMutation('SET_LOADER', true);
```

---

## createField

Generates field with path `path` from its configuration `fieldConfiguration`.

```typescript
protected createField(path: string, configuration: FieldConfiguration): Field | null;
```

### Parameters

- **path:** Field path in the form.
- **configuration:** Field configuration.

### Returns

Generated field if it meets display condition, `null` otherwise.

### Usage

```typescript
// {
//   path: 'root.0.field',
//   type: 'string',
//   error: null,
//   value: undefined,
//   required: false,
//   status: 'initial',
// }
engine.createField('root.0.field', { type: 'string' });
```

---

## toggleField

Manages `field` visibility and value assignment, based on its display condition and current user inputs.
This function can be called in two different contexts (stages):
- Stage one: simply toggles field and enqueues any extra user action that should be triggered
- Stage two: assigns new value to each field, and computes both full and partial updates lists

```typescript
protected toggleField(
  path: string,
  field: Field | null,
  configuration: FieldConfiguration,
  newValue: unknown,
  initialValue: Exclude<unknown, undefined>,
  newInputs?: { partial?: unknown; full?: unknown },
): Field | null;
```

### Parameters

- **path:** Field path in the form.
- **field:** Field to toggle if it is already generated, `null` otherwise.
- **configuration:** Field configuration.
- **newValue:** New value to assign to the field. In the first stage of form processing, this is a single value. In the second stage, it is a map of all new fields values.
- **initialValue:** Initial field value, used internally to compute updates to the form when user changes fields values.
- **newInputs:** Holds current state of user inputs, including both partial and full updates. Used internally for form processing.

### Returns

Existing or newly created field if it should be displayed, `null` otherwise.

### Usage

```typescript
// {
//   path: 'root.0.field',
//   type: 'string',
//   error: null,
//   value: undefined,
//   required: false,
//   status: 'initial',
// }
engine.toggleField('root.0.field', null, { type: 'string' }, 'test', null);
```

---

## toggleFields

Toggles all fields and sub-fields for `step`, according to their display conditions.

```typescript
protected toggleFields(step: Step | null, newFieldValues: Map<string, unknown>): void;
```

### Parameters

- **step:** Step to toggle fields for.
- **newFieldValues:** New values to assign to the fields.

### Usage

```typescript
engine.toggleFields({ fields: [...] }, new Map());
```

---

## validateField

Validates `field`, making sure that its value passes all validation rules.

```typescript
protected validateField(
  field: Field | null,
  configuration: FieldConfiguration,
  partial: boolean,
  updatedFieldPaths: string[],
): Exclude<Field['status'], 'initial'>;
```

### Parameters

- **field:** Field to validate.
- **configuration:** Field configuration.
- **partial:** Whether to also validate empty fields.
- **updatedFieldPaths:** List of updated fields paths (used for validation on submit only).

### Returns

Field state ("progress", "success" or "error").

### Usage

```typescript
engine.validateField({
  path: 'root.0.field',
  type: 'string',
  error: null,
  value: 'test',
  required: false,
  status: 'initial',
}, { type: 'string' }, false, []); // "success"
```

---

## validateFields

Validates current step, making sure that all its fields' values pass validation rules.

```typescript
protected validateFields(updatedFieldPaths: string[], partial?: boolean): void;
```

### Parameters

- **updatedFieldPaths:** List of updated fields paths (used for validation on submit only).
- **partial:** Whether to also validate empty fields. Defaults to `false`.

### Usage

```typescript
engine.validateFields([], false);
```

---

## triggerHooks

Triggers hooks chain for the given event.

```typescript
protected triggerHooks<T extends HookData>(
  eventName: FormEvent,
  data: T,
): Promise<T | null>;
```

### Parameters

- **eventName:** Event name.
- **data:** Additional data to pass to the hooks chain.

### Returns

Pending hooks chain.

### Usage

```typescript
await engine.triggerHooks('userAction', { path: 'root.0.field', data: 'test', type: 'input'});
```

---

## processUserInputs

Processes user inputs in batch to optimize performance by preventing too many UI notifications and to enforce hooks consistency.

```typescript
protected processUserInputs(): Promise<void>;
```

### Usage

```typescript
await engine.processUserInputs();
```
---

## handleUserAction

Handles new user actions, applying core logic such as hooks triggering or next step generation.

```typescript
protected handleUserAction(userAction: UserAction | null): Promise<void>;
```

### Parameters

- **userAction:** New state sent by `userActions` store module.

### Throws

If user action path does not point to a valid field.

### Usage

```typescript
await engine.handleUserAction({ path: 'root.0.field', data: 'test', type: 'input'});
```
---

## isEmpty

Checks whether `input` is considered as empty, according to its type.

```typescript
public isEmpty(input: unknown, type: FieldConfiguration['type']): boolean;
```

### Parameters

- **input:** Input to check.
- **type:** Input type.

### Returns

`true` if `input` is empty, `false` otherwise.

### Usage

```typescript
engine.isEmpty('', 'string'); // true
```
---

## createStep

Generates step with id `stepId`.

```typescript
public createStep(stepId: string | null): Promise<void>;
```

### Parameters

- **stepId:** Step id.

### Usage

```typescript
await engine.createStep('root.0');
```
---

## toggleLoader

Toggles a loader right after current step, indicating next step is/not being generated.

```typescript
public toggleLoader(display: boolean): void;
```

### Parameters

- **display:** Whether to display step loader.

### Usage

```typescript
engine.toggleLoader(true);
```
---

## getStore

Returns current store instance.

```typescript
public getStore(): Store;
```

### Returns

Current store instance.

### Usage

```typescript
engine.getStore();  // { ... }
```
---

## notifyUI

Sends a new notification to all `state` module listeners.

```typescript
public notifyUI(): void;
```

### Usage

```typescript
engine.notifyUI();
```
---

## on

Registers a new hook for the given event.

```typescript
public on(eventName: 'userAction' | 'afterUserAction', hook: Hook<UserAction | null>): void;
public on(eventName: 'step' | 'afterStep', hook: Hook<Step | null>): void;
public on(eventName: 'error', hook: Hook<Error | null>): void;
public on(eventName: 'submit', hook: Hook<UserInputs | null>): void;
public on(eventName: 'start', hook: Hook<boolean | null>): void;
public on(eventName: FormEvent, hook: Hook<Data>): void;
```

### Parameters

- **eventName:** Name of the event to register hook for.
- **hook:** Hook to register.

### Usage

```typescript
engine.on('userAction', async (data, next) => {
  await doSomethingWithData(data);
  return next(data);
});
```

---

## userAction

Triggers the given user action.

```typescript
public userAction(userAction: UserAction): void;
```

### Parameters

- **userAction:** User action to trigger.

### Usage

```typescript
engine.userAction({ path: 'root.0.field', data: 'test', type: 'input'});
```

---

## getUserInputs

Returns current partial or full user inputs.

```typescript
public getUserInputs<T>(partial?: boolean): T;
```

### Parameters

- **partial:** Whether to return only partial user inputs. Defaults to `false`.

### Returns

Current user inputs.

### Usage

```typescript
engine.getUserInputs(false); // { ... }
```

---

## getConfiguration

Returns configuration for `path`. If no path is provided, the global form configuration is returned instead.

```typescript
public getConfiguration(): Configuration;
public getConfiguration<T extends SubConfiguration>(path?: string): T;
```

### Parameters

- **path:** Field or step path to get configuration for.

### Returns

Requested configuration.

### Throws

If configuration does not exist for `path`.

### Usage

```typescript
// {
//   path: 'root.0.field',
//   type: 'string',
//   error: null,
//   value: undefined,
//   required: false,
//   status: 'initial',
// }
engine.getConfiguration('root.0.field');
```

---

## getField

Returns the generated field at `path`.

```typescript
public getField(path: string): Field | null;
```

### Parameters

- **path:** Field path in the form.

### Returns

Generated field if it exists, `null` otherwise.

### Usage

```typescript
// {
//   path: 'root.0.field',
//   type: 'string',
//   error: null,
//   value: undefined,
//   required: false,
//   status: 'initial',
// }
engine.getField('root.0.field');
```

---

## getSteps

Returns all generated steps.

```typescript
public getSteps(): Step[];
```

### Returns

Current step.

### Usage

```typescript
engine.getSteps() // [...];
```

---

## getVariables

Retrieves current form variables.

```typescript
public getVariables<T>(): T;
```

### Returns

Form variables.

### Usage

```typescript
engine.getVariables(); // { ... }
```

---

## setVariables

Adds or overrides the given form variables.

```typescript
public setVariables(variables: Record<string, unknown>): Promise<void>;
```

### Parameters

- **variables:** Form variables to add or override.

### Usage

```typescript
await engine.setVariables({ key: 'value' });
```

---

## clearCache

Clears current form cache.

```typescript
public clearCache(): Promise<void>;
```

### Usage

```typescript
await engine.clearCache();
```

---

## setInitialValues

Sets initial form values. This method is especially useful when you need to reset initial values for multiple partial submissions without re-creating the whole form each time.

```typescript
public setInitialValues(initialValues: UserInputs): void;
```

### Parameters

- **initialValues:** New initial form values to apply.

### Usage

```typescript
engine.setInitialValues({ key: 'value' });
```