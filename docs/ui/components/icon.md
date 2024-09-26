---
title: "@perseid/ui Icon Component"
description: The @perseid/ui Icon component represents a basic icon.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Icon

Basic icon.

---

## Props

- **name (string):** Icon name.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.

---

## Syntax

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIIcon
  id="my-id"
  modifiers="large"
  name="star"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIIcon
  id="my-id"
  modifiers="large"
  name="star"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIIcon
  id="my-id"
  modifiers="large"
  name="star"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<i class="ui-icon ui-icon--large--star" id="my-id"></i>
```

</TabItem>
</Tabs>
