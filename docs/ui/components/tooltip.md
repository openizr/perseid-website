---
title: "@perseid/ui Tooltip Component"
description: The @perseid/ui Tooltip component represents a tooltip wrapper, that displays an additional text around the given element(s) on focus, key press, or hover.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tooltip

Tooltip wrapper. This component displays an additional text around the given element(s) on focus, key press, or hover, to improve accessibility on all devices. It is fully supported by screen readers.

---

## Props

- **label (string):**  `aria-label` HTML attribute to set to the element.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `"top"`.
- **[OPTIONAL] description (string):** Description to display instead of the label (toggletip mode). In this mode, the label prop will still be displayed on hover/focus, but this time, as soon as the user clicks or presses a key on the tooltip children, label will be replaced by the `description` prop. See [Tooltips & Toogletip](https://inclusive-components.design/tooltips-toggletips).

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITooltip label="My label" modifiers="top">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITooltip label="My label" modifiers="top">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITooltip label="My label" modifiers="top">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-tooltip ui-tooltip--top" aria-label="My label" role="tooltip">
  <button>i</button>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - toggletip mode (initial)

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div
  role="tooltip"
  class="ui-tooltip ui-tooltip--left"
  aria-label="More info"
>
  <button>i</button>
</div>
```

</TabItem>
</Tabs>

---

## Syntax - toggletip mode (active)

<Tabs>
<TabItem value="react" label="React">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UITooltip label="More info" modifiers="left" description="Additional informations">
  <button>i</button>
</UITooltip>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div
  class="ui-tooltip ui-tooltip--left"
  aria-label="More info"
  role="tooltip"
>
  <button>i</button>
  <span class="ui-tooltip__description" role="status">Additional information</span>
</div>
```

</TabItem>
</Tabs>
