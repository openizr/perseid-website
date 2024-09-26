---
title: "@perseid/ui Title Component"
description: The @perseid/ui Title component represents a heading (1 to 6), with markdown support.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Title

Heading (1 to 6) component with markdown support.

---

## Props

- **label (string):** Heading content. Supports [light markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] level ("1" | "2" | "3" | "4" | "5" | "6"):** Heading HTML level (1 to 6). This will determine which HTML tag to use. Defaults to `"1"`.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] itemProp (string):** `itemprop` HTML attribute to set to the element.

:::info
By default, `modifiers` contains at least the heading's level (`1` to `6`) if not specified, to apply styling accordingly. However, you can completely dissociate level from styling by specifying another level modifier (like applying a h2 styling to a h1 by passing `level="1"` and `modifiers="2"`).
:::

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITitle
  id="my-id"
  level="1"
  modifiers="large 2"
  label="Lorem *ipsum*"
  itemProp="name"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITitle
  id="my-id"
  level="1"
  modifiers="large 2"
  label="Lorem *ipsum*"
  itemProp="name"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITitle
  id="my-id"
  level="1"
  modifiers="large 2"
  label="Lorem *ipsum*"
  itemProp="name"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<h1 class="ui-title ui-title--large--2" id="my-id" itemprop="name">
  Lorem <span class="ui-markdown ui-markdown--strong">ipsum</span>
</h1>
```

</TabItem>
</Tabs>

