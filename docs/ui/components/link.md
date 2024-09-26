---
title: "@perseid/ui Link Component"
description: The @perseid/ui Link component represents a hyperlink, with markdown support.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Link

Hyperlink, with markdown support.

---

## Props

- **href (string):** `href` HTML attribute to set to the element.
- **label (string):** Hyperlink content. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] rel (string):** `rel` HTML attribute to set to the element.
- **[OPTIONAL] target (string):** `target` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] disabled (boolean):** When element is disabled, a special `disabled` modifier is automatically added, and all its user interactions are disabled. Defaults to `false`.

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UILink
  id="my-id"
  rel="noreferrer"
  href="https://test.com"
  modifiers="large primary"
  label="Lorem *ipsum*"
  target="_blank"
  onClick={myHandler}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UILink
  id="my-id"
  rel="noreferrer"
  href="https://test.com"
  modifiers="large primary"
  label="Lorem *ipsum*"
  target="_blank"
  :onClick="myHandler"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UILink
  id="my-id"
  rel="noreferrer"
  href="https://test.com"
  modifiers="large primary"
  label="Lorem *ipsum*"
  target="_blank"
  onClick={myHandler}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<a
  id="my-id"
  rel="noreferrer"
  tabindex="0"
  href="https://test.com"
  target="_blank"
  class="ui-link ui-link--large--primary"
>
  Lorem <span class="ui-markdown ui-markdown--strong">ipsum</span>
</a>
```

</TabItem>
</Tabs>

## Syntax - disabled

<Tabs>
<TabItem value="react" label="React">

```typescript
<UILink
  href="https://test.com"
  label="Lorem *ipsum*"
  disabled
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UILink
  id="my-id"
  rel="noreferrer"
  href="https://test.com"
  modifiers="large primary"
  label="Lorem *ipsum*"
  target="_blank"
  :onClick="myHandler"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UILink
  id="my-id"
  rel="noreferrer"
  href="https://test.com"
  modifiers="large primary"
  label="Lorem *ipsum*"
  target="_blank"
  onClick={myHandler}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<a
  href="https://test.com"
  tabindex="-1"
  class="ui-link ui-link--disabled"
>
  Lorem <span class="ui-markdown ui-markdown--strong">ipsum</span>
</a>
```

</TabItem>
</Tabs>
