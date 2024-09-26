---
title: "@perseid/ui Textfield Component"
description: The @perseid/ui Textfield component represents a text field.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Textfield

Text field.

---

## Props

- **name (string):**  `name` HTML attribute to set to the element.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] label (string):** Element label. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] helper (string):** Element helper. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] placeholder (string):** `placeholder` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] maxLength (number):** `maxlength` HTML attribute to set to the element.
- **[OPTIONAL] size (number):** `size` HTML attribute to set to the element.
- **[OPTIONAL] min (number):** `min` HTML attribute to set to the element.
- **[OPTIONAL] max (number):** `max` HTML attribute to set to the element.
- **[OPTIONAL] step (number):** `step` HTML attribute to set to the element.
- **[OPTIONAL] autofocus (boolean):** `autofocus` HTML attribute to set to the element. Defaults to `false`.
- **[OPTIONAL] readonly (boolean):** `readonly` HTML attribute to set to the element. Defaults to `false`.
- **[OPTIONAL] type ("text" | "email" | "number" | "password" | "search" | "tel" | "url"):** `type` HTML attribute to set to the element. Defaults to `text`.
- **[OPTIONAL] autocomplete ("on" | "off"):** `autocomplete` HTML attribute to set to the element. Defaults to `off`.
- **[OPTIONAL] value (string | number):** Input value. Updating this prop with a new value will replace the current value by the one passed. Defaults to `""`.
- **[OPTIONAL] iconPosition ("left" | "right"):** Position of the icon relatively to the label. Defaults to `"left"`.
- **[OPTIONAL] icon (string):** Name of the icon to set to the element.
- **[OPTIONAL] debounceTimeout (number):** Number of milliseconds to wait before triggering the `change` event. If user changes the input value during that time, the timeout is reset. This is especially useful to limit the number of triggers, if you want to use this component as an autocomplete performing HTTP requests on user inputs, for instance. Defaults to `50`.
- **[OPTIONAL] allowedKeys (Record\<"default" | "altKey" | "ctrlKey" | "shiftKey" | "metaKey", RegExp\>):** List of RegExp patterns used to filter user inputs and keep only authorized characters. Useful for purpose-specific inputs, like phone numbers (you only want to allow digits). `default` is used to filter all inputs, and the others keys are used to allow specific patterns when holding special keys, like `Ctrl`.
- **[OPTIONAL] transform ((value: string, selectionStart: number) => [string, number?]):** Transformation function that will format input value. This is especially useful for purpose-specific inputs, like phone numbers (you want to format the number to something like (XXX) XXX-XXXX).
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Events

- **change (newValue: string, event: InputEvent) => void:** Triggered whenever input value is modified.
- **focus (currentValue: string, event: FocusEvent) => void:** Triggered whenever the input is focused.
- **blur (currentValue: string, event: FocusEvent) => void:** Triggered whenever the input is blurred.
- **paste (event: ClipboardEvent) => void:** Triggered whenever user pastes content in the input.
- **keyDown (event: KeyboardEvent) => void:** Triggered whenever user presses a key in the input.
- **iconClick (event: MouseEvent) => void:** Triggered whenever user clicks on the icon.
- **iconKeyDown (event: KeyboardEvent) => void:** Triggered whenever user presses a key on the icon.

---

## Behavior

- While user is typing, updating the `value` prop won't have any effect within the `debounceTimeout` duration. This ensures that value is not directly updated while user is typing, which would lead to a bad UX.

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextfield
  id="my-id"
  modifiers="large"
  name="test"
  type="text"
  autofocus
  value="Hello"
  size={14}
  maxlength={14}
  autocomplete="on"
  placeholder="Type here..."
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBlur}
  onPaste={onPaste}
  onKeyDown={onKeyDown}
  onIconKeyDown={onIconKeyDown}
  onIconClick={onIconClick}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  id="my-id"
  modifiers="large"
  name="test"
  type="text"
  autofocus
  value="Hello"
  :size="14"
  :maxlength="14"
  autocomplete="on"
  placeholder="Type here..."
  :onChange="onChange"
  :onFocus="onFocus"
  :onBlur="onBlur"
  :onPaste="onPaste"
  :onKeyDown="onKeyDown"
  :onIconKeyDown="onIconKeyDown"
  :onIconClick="onIconClick"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  id="my-id"
  modifiers="large"
  name="test"
  type="text"
  autofocus
  value="Hello"
  size={14}
  maxlength={14}
  autocomplete="on"
  placeholder="Type here..."
  onChange={onChange}
  onFocus={onFocus}
  onBlur={onBlur}
  onPaste={onPaste}
  onKeyDown={onKeyDown}
  onIconKeyDown={onIconKeyDown}
  onIconClick={onIconClick}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield ui-textfield--large" id="my-id">
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
      value="Hello"
      autofocus=""
      placeholder="Type here..."
      autocomplete="on"
      maxlength="14"
      size="14"
    />
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - with `number` type

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextfield
  name="test"
  type="number"
  min={0}
  max={10}
  step={1}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  type="number"
  :min="0"
  :max="10"
  :step="1"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  type="number"
  min={0}
  max={10}
  step={1}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield">
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="number"
      min="0"
      max="10"
      step="1"
    />
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
<UITextfield
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  label="Label"
  helper="Helper"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield">
  <label
    class="ui-textfield__label"
    for="z8a8d7a5zad4"
  >
    Label
  </label>
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
    />
  </div>
  <span class="ui-textfield__helper">
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
<UITextfield
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  disabled
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield ui-textfield--disabled">
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
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
<UITextfield
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  readonly
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield">
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
      readonly=""
    />
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - with left icon

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITextfield
  name="test"
  icon="star"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  icon="star"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  icon="star"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield">
  <div class="ui-textfield__wrapper">
    <i
      class="ui-textfield__wrapper__icon"
      role="button"
      tabindex="0"
    >
      star
    </i>
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
    />
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
<UITextfield
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITextfield
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITextfield
  name="test"
  icon="star"
  iconPosition="right"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-textfield">
  <div class="ui-textfield__wrapper">
    <input
      class="ui-textfield__wrapper__field"
      id="z8a8d7a5zad4"
      name="test"
      type="text"
    />
    <i
      class="ui-textfield__wrapper__icon"
      role="button"
      tabindex="0"
    >
      star
    </i>
  </div>
</div>
```

</TabItem>
</Tabs>
