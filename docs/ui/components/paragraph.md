---
title: "@perseid/ui Paragraph Component"
description: The @perseid/ui Paragraph component represents a basic paragraph, with markdown support.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Paragraph

Basic paragraph, with markdown support.

---

## Props

- **label (string):** Paragraph content. Supports [full markdown](/docs/ui/helpers#markdown).
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] itemProp (string):** `itemprop` HTML attribute to set to the element.

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIP
  id="my-id"
  modifiers="large primary"
  label="Lorem ipsum dolor sit amet, *consectetur* adipiscing elit."
  itemProp="description"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIP
  id="my-id"
  modifiers="large primary"
  label="Lorem ipsum dolor sit amet, *consectetur* adipiscing elit."
  item-prop="description"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIP
  id="my-id"
  modifiers="large primary"
  label="Lorem ipsum dolor sit amet, *consectetur* adipiscing elit."
  itemProp="description"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<p class="ui-p ui-p--large--primary" id="my-id" itemprop="description">
  Lorem ipsum dolor sit amet, <span class="ui-markdown ui-markdown--emphasis">consectetur</span> adipiscing elit.
</p>
```

</TabItem>
</Tabs>
