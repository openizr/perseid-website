---
sidebar_position: 4
---

## reCaptchaHandler

```typescript
function reCaptchaHandler(options: ReCaptchaHandlerOptions): FormPlugin;
```

### Description

Automatically handles a reCAPTCHA challenge for current form.

### Parameters

- **options:** Plugin's options.

### Returns

The actual plugin.

---


## errorStepDisplayer

```typescript
function errorStepDisplayer(options: ErrorStepDisplayerOptions): FormPlugin;
```

### Description

Gracefully handles errors by displaying a generic error step.

### Parameters

- **options:** Plugin's options.

### Returns

The actual plugin.

---


## loaderDisplayer

```typescript
function loaderDisplayer(options?: LoaderDisplayerOptions): FormPlugin;
```

### Description

Displays a loader each time a new step is being loaded, for better UX.

### Parameters

- **options:** Plugin's options. Defaults to `{}`.

### Returns

The actual plugin.
