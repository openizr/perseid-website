---
title: "@perseid/ui Image Component"
description: The @perseid/ui Image component represents an image, with a standard or a custom aspect ratio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Image

Image, with a standard or a custom aspect ratio.

---

## Props

- **src (string):** `src` HTML attribute to set to the element.
- **alt (string):** `alt` HTML attribute to set to the element.
- **ratio (string):** Aspect ratio to apply to the image.
- **[OPTIONAL] id (string):** `id` HTML attribute to set to the element.
- **[OPTIONAL] lazy (boolean):** `lazy` HTML attribute to set to the element.
- **[OPTIONAL] modifiers (string):** List of [modifiers](/docs/ui/helpers#buildclass) to apply to the element. Defaults to `""`.
- **[OPTIONAL] itemProp (string):** `itemprop` HTML attribute to set to the element.

---

## Syntax - square ratio

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  id="my-id"
  alt="illustration"
  src="/src/image.jpg"
  ratio="square"
  modifiers="large"
  itemProp="illustration"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  id="my-id"
  alt="illustration"
  src="/src/image.jpg"
  ratio="square"
  modifiers="large"
  item-prop="illustration"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  id="my-id"
  alt="illustration"
  src="/src/image.jpg"
  ratio="square"
  modifiers="large"
  itemProp="illustration"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div id="my-id" class="ui-image ui-image--square--large">
  <img
    alt="illustration"
    height="1"
    loading="lazy"
    src="/src/image.jpg"
    width="1"
    itemprop="illustration"
  />
</div>
```

</TabItem>
</Tabs>

---

## Syntax - portrait ratio

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="portrait"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="portrait"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="portrait"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-image ui-image--portrait">
  <img
    alt="illustration"
    height="3"
    loading="lazy"
    src="/src/image.jpg"
    width="2"
  />
</div>
```

</TabItem>
</Tabs>

---

## Syntax - landscape ratio

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="landscape"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="landscape"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="landscape"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-image ui-image--landscape">
  <img
    alt="illustration"
    height="2"
    loading="lazy"
    src="/src/image.jpg"
    width="3"
  />
</div>
```

</TabItem>
</Tabs>

---

## Syntax - panoramic ratio

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-image ui-image--panoramic">
  <img
    alt="illustration"
    height="9"
    loading="lazy"
    src="/src/image.jpg"
    width="16"
  />
</div>
```

</TabItem>
</Tabs>

---

## Syntax - no lazy

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
  lazy={false}
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
  lazy={false}
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="panoramic"
  lazy={false}
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<div class="ui-image ui-image--panoramic">
  <img
    alt="illustration"
    height="9"
    src="/src/image.jpg"
    width="16"
  />
</div>
```

</TabItem>
</Tabs>

---

## Syntax - custom ratio

<Tabs>
<TabItem value="react" label="React">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="256x525"
/>
```

</TabItem>
<TabItem value="vue" label="Vue">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="256x525"
/>
```

</TabItem>
<TabItem value="svelte" label="Svelte">

```typescript
<UIImage
  alt="illustration"
  src="/src/image.jpg"
  ratio="256x525"
/>
```

</TabItem>
<TabItem value="html" label="HTML">

```html
<img
  class="ui-image ui-image--256x525"
  alt="illustration"
  height="525"
  loading="lazy"
  src="/src/image.jpg"
  width="256"
/>
```

</TabItem>
</Tabs>

