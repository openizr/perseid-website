---
title: "@perseid/ui FilePicker Component"
description: The @perseid/ui FilePicker component represents a file picker.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FilePicker

File picker.

---

## Props

- **name (string):**  `name` HTML attribute to set to the element.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] helper (string):** Element helper. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] label (string):** Element label. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] placeholder (string):** Element placeholder.
- **[OPTIONAL] accept (string):** `accept` HTML attribute to set to the element.
- **[OPTIONAL] multiple (string):** `multiple` HTML attribute to set to the element. Defaults to `false`.
- **[OPTIONAL] iconPosition ("left" | "right"):** Position of the icon relatively to the label. Defaults to `"left"`.
- **[OPTIONAL] icon (string):** Name of the icon to set to the element.
- **[OPTIONAL] value (File | File[]):** File picker value. Updating this prop with a new value will replace the current value by the one passed.
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Events

- **change (newValue: File[], event: InputEvent) => void:** Triggered whenever input value is modified.
- **focus (currentValue: File[], event: FocusEvent) => void:** Triggered whenever the input is focused.
- **blur (currentValue: File[], event: FocusEvent) => void:** Triggered whenever the input is blurred.

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIFilePicker
  id="my-id"
  modifiers="large"
  name="test"
  accept="image/*"
  placeholder="Select a file..."
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBLur}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIFilePicker
  id="my-id"
  modifiers="large"
  name="test"
  accept="image/*"
  placeholder="Select a file..."
  :onChange="onChange"
  :onFocus="onFocus"
  :onBlur="onBLur"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIFilePicker
  id="my-id"
  modifiers="large"
  name="test"
  accept="image/*"
  placeholder="Select a file..."
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBLur}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div id="my-id" class="ui-file-picker ui-file-picker--large">
  <div class="ui-file-picker__wrapper">
    <input
      class="ui-file-picker__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="file"
      accept="image/*"
    />
    <span class="ui-file-picker__wrapper__placeholder">
      Select a file...
    </span>
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - with label and helper

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIFilePicker
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIFilePicker
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIFilePicker
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-file-picker">
  <label
    class="ui-file-picker__label"
    for="z8a8d7a5zad4"
  >
    Label
  </label>
  <div class="ui-file-picker__wrapper">
    <input
      class="ui-file-picker__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="file"
    />
    <span class="ui-file-picker__wrapper__placeholder" />
  </div>
  <span class="ui-file-picker__helper">
    Helper
  </span>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - multiple

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIFilePicker
  name="test"
  multiple
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIFilePicker
  name="test"
  multiple
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIFilePicker
  name="test"
  multiple
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-file-picker ui-file-picker--multiple">
  <div class="ui-file-picker__wrapper">
    <input
      class="ui-file-picker__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="file"
      multiple=""
    />
    <span class="ui-file-picker__wrapper__placeholder" />
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
<UIFilePicker
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIFilePicker
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIFilePicker
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-file-picker ui-file-picker--disabled">
  <div class="ui-file-picker__wrapper">
    <input
      class="ui-file-picker__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="file"
      tabindex="-1"
    />
    <span class="ui-file-picker__wrapper__placeholder" />
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - with right icon

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIFilePicker
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIFilePicker
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIFilePicker
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-file-picker">
  <div class="ui-file-picker__wrapper">
    <input
      class="ui-file-picker__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="file"
    />
    <i class="ui-file-picker__wrapper__icon">
      star
    </i>
    <span class="ui-file-picker__wrapper__placeholder" />
  </div>
</div>
```

</TabItem>
</Tabs>
