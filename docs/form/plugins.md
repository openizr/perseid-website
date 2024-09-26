---
title: "@perseid/form Plugins"
description: The @perseid/form package provides a collection of plugins to handle common use cases.
---

# Plugins

The `@perseid/form` package provides a collection of plugins to handle common use cases.

---

## `reCaptchaHandler`

Automatically handles a reCAPTCHA challenge for current form.

### Usage

```typescript
import { reCaptchaHandler } from '@perseid/form/plugins';

const configuration = {
    plugins: [reCaptchaHandler({ siteKey: 'IF98D9daq989_sssdzdIJ' })],
};
```

### Parameters

- **siteKey (string):** Google's reCAPTCHA v3 site key.

---

## `errorStepDisplayer`

Gracefully handles errors by displaying a generic error step.

### Usage

```typescript
import { errorStepDisplayer } from '@perseid/form/plugins';

const configuration = {
    plugins: [errorStepDisplayer({ stepId: 'error', setActiveStep: (stepId) => { ... } })],
};
```

### Parameters

- **stepId (string):** Id of the error step in the configuration.
- **setActiveStep ((stepId: string) => void):** Callback used to set active form step to the error step.

---

## `loaderDisplayer`

Displays a loader each time a new step is being loaded, for better UX.

### Usage

```typescript
import { errorStepDisplayer } from '@perseid/form/plugins';

const configuration = {
    plugins: [loaderDisplayer({ timeout: 1000 })],
};
```

### Parameters

- **[OPTIONAL] timeout (number):** Minimum time during which loader should be displayed. Defaults to `250 ms`.
