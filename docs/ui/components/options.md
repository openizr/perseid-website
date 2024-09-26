---
title: "@perseid/ui Options Component"
description: The @perseid/ui Options component represents set of selectable options, displayed either as radio buttons, check-boxes, or drop-downs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Options

Set of selectable options, displayed either as radio buttons, check-boxes, or drop-downs.

---

## Props

`Option` type is defined as follows:
- **[OPTIONAL] value (string):** Option value (HTML `value` attribute). Required when `type` is neither `header` nor `divider`.
- **[OPTIONAL] disabled (boolean):** Whether the option can be selected.
- **[OPTIONAL] label (string):** Option label. Required when type is not `divider`.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the option.
- **[OPTIONAL] type ("header" | "divider" | "option"):** Option type. Determines how the option will be displayed.

Available props are:
- **options (Option[]):** List of options to display in the component.
- **name (string):**  `name` HTML attribute to set to the element.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] placeholder (string):** Placeholder to display when no option is selected (select mode only).
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] helper (string):** Element helper. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] label (string):** Element label. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] select (boolean):** Whether to display options as a select (=drop-down). Defaults to `false`.
- **[OPTIONAL] expanded (boolean):** Whether to force drop-down displaying in select mode. Defaults to `false`.
- **[OPTIONAL] multiple (boolean):** Whether user can select several options. Determines how the component will be displayed. `false` will display options as radio buttons, `true` will display them as check-boxes, and `true` along with `select` set to `true` will display a multi-choices drop-down. Defaults to `false`.
- **[OPTIONAL] selectPosition ("top" | "bottom"):** Pass this prop if you want to force options list positionning in select mode.
- **[OPTIONAL] value (string  | string[]):** Initial value (pre-selected options). Updating this prop with a new value will replace the current value by the one passed. Defaults to `[]`.
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Events
- **change (newValue: string | string[], event: InputEvent) => void:** Triggered whenever selected options change.
- **focus (focusedValue: string, event: FocusEvent) => void:** Triggered whenever a specific option is focused, or when the main drop-down input is focused (in select mode).

---

## Behavior

For a better UX and consistency, we uniformized some behaviors across the different displaying modes (radio buttons, check-boxes, drop-down), especially regarding accessibility.
- Pressing `Tab` allows to navigate from / to the component, and NOT among its own options.
- Pressing `Left/Up/Right/Bottom` arrow keys allows to navigate through sibling options.
- Pressing `Home/End/PageUp/PageDown` keys allows to navigate directly to the first / last selectable options, respectively.
- Pressing `Space/Enter` keys allows to check or uncheck options.
- Pressing `Escape` key hides select list (in select mode).
- Updating value to the `options` props will re-apply focus to the first selectable or selected option, if an option was being focused before the update.
- The `change` event is NOT triggered again when the `value` prop is updated.

---

## Syntax - as radio buttons, with label and helper

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  label="Label"
  helper="Helper"
  options={[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4', modifiers: 'modifier1' },
  ]}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  label="Label"
  helper="Helper"
  options={[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4', modifiers: 'modifier1' },
  ]}
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  label="Label"
  helper="Helper"
  options={[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4', modifiers: 'modifier1' },
  ]}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div id="my-id" class="ui-options ui-options--large">
  <div class="ui-options__wrapper">
    <label
      class="ui-options__label"
      for="z8a8d7a5zad4"
    >
      Label
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_0"
    >
      <input
        class="ui-options__wrapper__option__field"
        id="z8a8d7a5zad4_0"
        name="test"
        tabindex="0"
        type="radio"
        value="option1"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 1
      </span>
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_1"
    >
      <input
        class="ui-options__wrapper__option__field"
        id="z8a8d7a5zad4_1"
        name="test"
        tabindex="0"
        type="radio"
        value="option2"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 2
      </span>
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_2"
    >
      <input
        class="ui-options__wrapper__option__field ui-options__wrapper__option__field--disabled"
        id="z8a8d7a5zad4_2"
        name="test"
        tabindex="-1"
        type="radio"
        value="option3"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 3
      </span>
    </label>
    <label
      class="ui-options__wrapper__option ui-options__wrapper__option--modifier1"
      for="z8a8d7a5zad4_3"
    >
      <input
        class="ui-options__wrapper__option__field"
        id="z8a8d7a5zad4_3"
        name="test"
        tabindex="0"
        type="radio"
        value="option4"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 4
      </span>
    </label>
  </div>
  <span class="ui-options__helper">
    Helper
  </span>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - as check-boxes, with initial value

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  multiple
  value={['option1']}
  options={[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4'},
  ]}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  multiple
  :value="['option1']"
  :options="[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4'},
  ]"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIOptions
  id="my-id"
  modifiers="large"
  name="test"
  multiple
  value={['option1']}
  options={[
    { value: 'option1', label: 'Option 1'},
    { value: 'option2', label: 'Option 2'},
    { value: 'option3', label: 'Option 3', disabled: true},
    { value: 'option4', label: 'Option 4'},
  ]}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div id="my-id" class="ui-options ui-options--large--multiple">
  <div class="ui-options__wrapper">
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_0"
    >
      <input
        class="ui-options__wrapper__option__field ui-options__wrapper__option__field--checked"
        id="z8a8d7a5zad4_0"
        checked
        name="test"
        tabindex="0"
        type="checkbox"
        value="option1"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 1
      </span>
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_1"
    >
      <input
        class="ui-options__wrapper__option__field"
        id="z8a8d7a5zad4_1"
        name="test"
        tabindex="0"
        type="checkbox"
        value="option2"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 2
      </span>
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_2"
    >
      <input
        class="ui-options__wrapper__option__field ui-options__wrapper__option__field--disabled"
        id="z8a8d7a5zad4_2"
        name="test"
        tabindex="-1"
        type="checkbox"
        value="option3"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 3
      </span>
    </label>
    <label
      class="ui-options__wrapper__option"
      for="z8a8d7a5zad4_3"
    >
      <input
        class="ui-options__wrapper__option__field"
        id="z8a8d7a5zad4_3"
        name="test"
        tabindex="0"
        type="checkbox"
        value="option4"
      />
      <span
        class="ui-options__wrapper__option__label"
      >
        Option 4
      </span>
    </label>
  </div>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - as drop-down

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIOptions
  name="test"
  select
  expanded
  selectPosition="top"
  onChange={onChange}
  onFocus={onFocus}
  options={[
    { type: 'header', label: 'Group'},
    { type: 'option', value: 'option2', label: 'Option 2'},
    { type: 'divider' },
    { type: 'option', value: 'option4', label: 'Option 4'},
  ]}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIOptions
  name="test"
  select
  expanded
  selectPosition="top"
  :onChange="onChange"
  :onFocus="onFocus"
  :options="[
    { type: 'header', label: 'Group'},
    { type: 'option', value: 'option2', label: 'Option 2'},
    { type: 'divider' },
    { type: 'option', value: 'option4', label: 'Option 4'},
  ]"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIOptions
  name="test"
  select
  expanded
  selectPosition="top"
  onChange={onChange}
  onFocus={onFocus}
  options={[
    { type: 'header', label: 'Group'},
    { type: 'option', value: 'option2', label: 'Option 2'},
    { type: 'divider' },
    { type: 'option', value: 'option4', label: 'Option 4'},
  ]}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-options ui-options--select">
  <div class="ui-options__wrapper">
    <button
      aria-haspopup="listbox"
      aria-labelledby="z8a8d7a5zad4 z8a8d7a5zad4"
      class="ui-options__wrapper__button"
      id="z8a8d7a5zad4"
      name="test"
      tabindex="0"
      type="button"
    />
    <ul
      aria-activedescendant="z8a8d7a5zad45"
      aria-expanded="false"
      aria-labelledby="z8a8d7a5zad4"
      aria-multiselectable="false"
      class="ui-options__wrapper__list ui-options__wrapper__list--top"
      role="listbox"
      tabindex="-1"
    >
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__header"
        id="z8a8d7a5zad40"
        tabindex="-1"
      >
        Group
      </li>
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__option"
        id="z8a8d7a5zad42"
        role="option"
        tabindex="-1"
      >
        Option 2
      </li>
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__divider"
        id="z8a8d7a5zad44"
        tabindex="-1"
      />
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__option"
        id="z8a8d7a5zad45"
        role="option"
        tabindex="-1"
      >
        Option 4
      </li>
    </ul>
  </div>
</div>
```

</TabItem>
<TabItem value="html-expanded" label="HTML - expanded">

```html
<div class="ui-options ui-options--select">
  <div class="ui-options__wrapper">
    <button
      aria-haspopup="listbox"
      aria-labelledby="z8a8d7a5zad4 z8a8d7a5zad4"
      class="ui-options__wrapper__button"
      id="z8a8d7a5zad4"
      name="test"
      tabindex="0"
      type="button"
    />
    <ul
      aria-activedescendant="z8a8d7a5zad45"
      aria-expanded="true"
      aria-labelledby="z8a8d7a5zad4"
      aria-multiselectable="false"
      class="ui-options__wrapper__list ui-options__wrapper__list--bottom--expanded"
      role="listbox"
      tabindex="-1"
    >
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__header"
        id="z8a8d7a5zad40"
        tabindex="-1"
      >
        Group
      </li>
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__option"
        id="z8a8d7a5zad42"
        role="option"
        tabindex="-1"
      >
        Option 2
      </li>
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__divider"
        id="z8a8d7a5zad44"
        tabindex="-1"
      />
      <li
        aria-selected="false"
        class="ui-options__wrapper__list__option"
        id="z8a8d7a5zad45"
        role="option"
        tabindex="-1"
      >
        Option 4
      </li>
    </ul>
  </div>
</div>
```

</TabItem>
</Tabs>
