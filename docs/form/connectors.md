---
title: "@perseid/form Connectors"
description: The @perseid/form package provides a collection of connectors for a seamless integration with the most popular front-end frameworks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Connectors

The `@perseid/form` package provides a collection of connectors for a seamless integration with the most popular front-end frameworks. Currently out-of-box supported frameworks are: **React**, **Vue** and **Svelte**.

---

## Usage

<Tabs>
<TabItem value="react" label="React">

```typescript
import Form from '@perseid/form/react';

const configuration = {
  // Here is your form configuration...
};

<Form
  configuration={configuration}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
import Form from '@perseid/form/vue';

const configuration = {
  // Here is your form configuration...
};

<Form
  configuration={configuration}
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
import Form from '@perseid/form/svelte';

const configuration = {
  // Here is your form configuration...
};

<Form
  configuration={configuration}
/>
```

</TabItem>
</Tabs>