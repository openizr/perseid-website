---
sidebar_position: 1
title: "@perseid/ui Helpers"
description: The @perseid/ui package offers a collection of helper functions that are useful when developing front-end projects.
---

# Helpers

The `@perseid/ui` package offers a collection of helper functions that are useful when developing front-end projects.

---

## markdown

The built-in, ultra lightweight markdown parser.

`markdown` is a helper that parses the given markdown into valid HTML. This is especially useful when you want to provide basic HTML formatting (e.g. emphasis, underline, ...) to a piece of text inside a label, or even to allow end users to write rich contents containing images, titles and such (like blog posts), without risking security breaches like XSS injections.

```typescript
function markdown(text: string, light?: boolean): string;
```

### Light mode vs Full mode

You can use the markdown parser in two different modes: light or full.
- In light mode, only basic text formatting will be supported: [strong](./helpers.md#strong), [emphasis](./helpers.md#emphasis), [underline](./helpers.md#underline), [italic]((./helpers.md#italic)), [hyperlinks](./helpers.md#hyperlink), [line breaks]((./helpers.md#line-break)), [ordered lists]((./helpers.md#ordered-list)), [unordered lists]((./helpers.md#unordered-list)), [horizontal rules]((./helpers.md#horizontal-rule)), [inline code]((./helpers.md#inline-code))
- In full mode, [images]((./helpers.md#image)), [paragraphs]((./helpers.md#paragraph)), [headings]((./helpers.md#heading)) and [block quotes]((./helpers.md#block-quote)) will also be supported, in addition to light mode's basic formatting.

### Escaping markdown tags

In some cases, you may want to prevent the parser from transforming some part of your input text. For instance, the math formula `3 * 2 * 1 = 6` should not be transformed into `<span class="ui-markdown--emphasis> 2 </span> 1 = 6`. To do so, you can escape both `*` by adding a backslash (`\\`) before each of them:  `3 \\* 2 \\* 1 = 6`. This way, the parser will output the expected result: `3 * 2 * 1 = 6`.

### Supported markdown tags

#### strong
```bash
Hello ^World^!
```

<br />will output

```html
Hello <strong class="ui-markdown ui-markdown--strong">World</strong>!
```

:::tip
The `strong` tag is especially useful when HTML semantic is important, like for SEO.
:::

#### emphasis

```bash
Hello *World*!
```

<br />will output

```html
Hello <span class="ui-markdown ui-markdown--emphasis">World</span>!
```

#### underline

```bash
Hello _World_!
```

<br />will output

```html
Hello <span class="ui-markdown ui-markdown--underline">World</span>!
```

#### italic

```bash
Hello ~World~!
```

<br />will output

```html
Hello <span class="ui-markdown ui-markdown--italic">World</span>!
```

#### image (full mode)

```bash
![https://img.com/4185181.png](My Awesome Image)
```

<br />will output

```html
<img class="ui-image" src="https://img.com/4185181.png" alt="My Awesome Image" />
```

#### hyperlink

```bash
[My Awesome Link](https://test.com|no referer|_blank)
```

<br />will output

```html
<a class="ui-link" href="https://test.com" rel="no referer" target="_blank">My Awesome Link</a>
```

The two last parameters (`rel` and `target`) are optional.

#### blockquote (full mode)

```bash
> test
```

<br />will output

```html
<blockquote class="ui-blockquote">test</blockquote>
```

#### headings (full mode)

```bash
# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6
```

<br />will output

```html
<h1 class="ui-title ui-title--1">Title 1</h1>
<h2 class="ui-title ui-title--2">Title 2</h2>
<h3 class="ui-title ui-title--3">Title 3</h3>
<h4 class="ui-title ui-title--4">Title 4</h4>
<h5 class="ui-title ui-title--5">Title 5</h5>
<h6 class="ui-title ui-title--6">Title 6</h6>
```

#### horizontal rule

```bash
Test
--
Test
```

<br />will output

```html
Test
<hr />
Test
```

#### line break

```bash
Test
Test
```

<br />will output

```html
Test<br />Test
```

#### unordered list

```bash
List:
- item 1
- item 2
- item 3
```

<br />will output

```html
List:<br />
<ul class="ui-list ui-list--unordered">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### ordered list

```bash
List:
1. item 1
2. item 2
3. item 3
```

<br />will output

```html
List:<br />
<ol class="ui-list ui-list--ordered">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

#### paragraph (full mode)

```bash


This is my text.
```

<br />will output

```html
<p class="ui-p">This is my text.</p>
```

#### inline code

```bash
\`var i = 3;\`
```

<br />will output

```html
<code class="ui-markdown ui-markdown--code">var i = 3;</code>
```

---

## buildClass

The BEM+ class generator.

```typescript
function buildClass(baseClass: string, modifiers?: string): string;
```

### BEM+

`@perseid/ui` introduces the concept of BEM+. If you are familiar with the CSS [Block Element Modifier](https://getbem.com/introduction/) naming best practice (which is a fantastic concept by the way), you know that to add multiple modifiers to the same element, you need to repeat the base class name as many times as the number of modifiers. You often end up with something like:

```html
<div class="my-class my-class--modifier-1 my-class-modifier-2 my-class-modifier-3 my-class-modifier-4...">
BEM is cool, but maybe a little too verbose, isn't it?
</div>
```

This syntax is heavy, both in terms of page size (and thus number of bytes that transit over the network), and development experience.

BEM+ aims to fix that issue, by adapting the BEM syntax to something slightly different (nothing revolutionary, really), although much more efficient:

```html
<div class="my-class my-class--modifier-1--modifier-2--modifier-3--modifier-4...">
BEM+ is way better!
</div>
```

By chaining modifiers like the example above, you only need to write the base class name once, and the `buildClass` helper provides a simple way to leverage on that specificity when developing your components 🎉.

### Usage

```typescript
// ui-root ui-root--modifier1--modifier2
buildClass('ui-root', 'modifier1 modifier1   modifier2');
```

:::info
As you can see, `buildClass` removes any duplicate modifier, to output the smallest class as possible.
:::

---

## generateRandomId

Random HTML id generator.

```typescript
function generateRandomId(): string;
```

### Purpose

This random id generator is useful when you want to handle accessibility for instance (using the `for` HTML attribute on a label), on dynamic inputs (and don't want to find a fixed name for each one of them).

:::danger
NEVER use this helper to generate unique ids for databases, users and such, as the algorithm used is very simple and does not provide any guarantee against collisions, especially in distributed systems.
:::

### Usage

```typescript
generateRandomId(); // Will return something like `_sd48Dxaz8`.
```