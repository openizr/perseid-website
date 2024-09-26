---
title: "@perseid/ui Button Component"
description: The @perseid/ui Button component represents a basic button, with optional icon.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Button

Basic button, with optional icon.

---

## Props

- **label (string):** Button content. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] type (`button`|`submit`):** `type` HTML attribute to set to the element. Defaults to `"button"`.
- **[OPTIONAL] iconPosition (`left`|`right`):** Position of the icon relatively to the label. Defaults to `"left"`.
- **[OPTIONAL] icon (string):** Name of the icon to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Events

- **click (event: MouseEvent) => void:** HTML `click` event handler.
- **focus (event: FocusEvent) => void:** HTML `focus` event handler.

---

## Syntax - label only

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIButton
  id="my-id"
  type="submit"
  label="Lorem ipsum"
  modifiers="large primary"
  onClick={myClickHandler}
  onFocus={myFocusHandler}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIButton
  id="my-id"
  type="submit"
  label="Lorem ipsum"
  modifiers="large primary"
  :onClick="myClickHandler"
  :onFocus="myFocusHandler"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIButton
  id="my-id"
  type="submit"
  label="Lorem ipsum"
  modifiers="large primary"
  onClick={myClickHandler}
  onFocus={myFocusHandler}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button
  id="my-id"
  type="submit"
  tabindex="0"
  class="ui-button ui-button--large--primary"
>
  <span class="ui-button__label">
    Lorem ipsum
  </span>
</button>
```

</TabItem>
</Tabs>

## Syntax - label with left icon

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIButton
  icon="star"
  iconPosition="left"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIButton
  icon="star"
  icon-position="left"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIButton
  icon="star"
  iconPosition="left"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button
  class="ui-button"
  tabindex="0"
  type="button"
>
  <i class="ui-button__icon">
    star
  </i>
  <span class="ui-button__label">
    Lorem ipsum
  </span>
</button>
```

</TabItem>
</Tabs>

## Syntax - label with right icon

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIButton
  icon="star"
  iconPosition="right"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIButton
  icon="star"
  icon-position="right"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIButton
  icon="star"
  icon-position="right"
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button
  tabindex="0"
  type="button"
  class="ui-button"
>
  <span class="ui-button__label">
    Lorem ipsum
  </span>
  <i class="ui-button__icon">
    star
  </i>
</button>
```

</TabItem>
</Tabs>

## Syntax - icon only

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIButton
  icon="star"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIButton
  icon="star"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIButton
  icon="star"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button
  tabindex="0"
  type="button"
  class="ui-button ui-button--icon"
>
  <i class="ui-button__icon">
    star
  </i>
</button>
```

</TabItem>
</Tabs>

## Syntax - disabled

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIButton
  disabled
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIButton
  disabled
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIButton
  disabled
  label="Lorem ipsum"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<button
  tabindex="-1"
  type="button"
  class="ui-button ui-button--disabled"
>
  <span class="ui-button__label">
    Lorem ipsum
  </span>
</button>
```

</TabItem>
</Tabs>

