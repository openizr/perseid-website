---
title: "@perseid/ui Textarea Component"
description: The @perseid/ui Textarea component represents a text area.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Textarea

Text area.

---

## Props

- **name (string):**  `name` HTML attribute to set to the element.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] label (string):** Element label. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] helper (string):** Element helper. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] placeholder (string):** `placeholder` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] maxLength (number):** `maxlength` HTML attribute to set to the element.
- **[OPTIONAL] cols (number):** `cols` HTML attribute to set to the element.
- **[OPTIONAL] rows (number):** `rows` HTML attribute to set to the element.
- **[OPTIONAL] readonly (boolean):** `readonly` HTML attribute to set to the element. Defaults to `false`.
- **[OPTIONAL] autoresize (boolean):** Wether to automatically resize textarea height when user puts line-breaks. Defaults to `false`.
- **[OPTIONAL] autocomplete ("on" | "off"):** `autocomplete` HTML attribute to set to the element. Defaults to `off`.
- **[OPTIONAL] value (string | number):** Textarea value. Updating this prop with a new value will replace the current value by the one passed. Defaults to `""`.
- **[OPTIONAL] debounceTimeout (number):** Number of milliseconds to wait before triggering the `change` event. If user changes the textarea value during that time, the timeout is reset. This is especially useful to limit the number of triggers, if you want to use this component as an autocomplete performing HTTP requests on user inputs, for instance. Defaults to `50`.
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Events

- **change (newValue: string, event: InputEvent) => void:** Triggered whenever textarea value is modified.
- **focus (currentValue: string, event: FocusEvent) => void:** Triggered whenever the textarea is focused.
- **blur (currentValue: string, event: FocusEvent) => void:** Triggered whenever the textarea is blurred.
- **paste (event: ClipboardEvent) => void:** Triggered whenever user pastes content in the textarea.
- **keyDown (event: KeyboardEvent) => void:** Triggered whenever user presses a key in the textarea.

---

## Behavior

- While user is typing, updating the `value` prop won't have any effect within the `debounceTimeout` duration. This ensures that value is not directly updated while user is typing, which would lead to a bad UX.

---

## Syntax - with label and helper

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextarea
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextarea
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextarea
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textarea">
  <label
    class="ui-textarea__label"
    for="z8a8d7a5zad4"
  >
    Label
  </label>
  <div class="ui-textarea__wrapper">
    <textarea
      autocomplete="on"
      class="ui-textarea__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      tabindex="0"
    />
  </div>
  <span class="ui-textarea__helper">
    Helper
  </span>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - disabled

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textarea ui-textarea--disabled">
  <div class="ui-textarea__wrapper">
    <textarea
      class="ui-textarea__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      disabled=""
      tabindex="-1"
    />
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - readonly

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextarea
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextarea
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextarea
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textarea">
  <div class="ui-textarea__wrapper">
    <input
      class="ui-textarea__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      readonly=""
      tabindex="0"
    />
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - disabled

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextarea
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textarea ui-textarea--disabled">
  <div class="ui-textarea__wrapper">
    <textarea
      class="ui-textarea__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      disabled=""
      tabindex="-1"
    />
  </div>
</div>
```

</TabItem>
</Tabs>
