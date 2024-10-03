---
sidebar_position: 3
title: "@perseid/ui Built-in CSS classes"
description: The @perseid/ui SASS library provides a list of built-in CSS classes for layout.
---

# CSS Classes

A set of built-in CSS classes is available out of the box, to let you design any layout in seconds.

---

## Concept

Built-in CSS classes are a great way to build and prototype your site/application's pages, without writing a single line of CSS. They are meant to fulfill the most common use cases, especially handling responsive in no time. You can apply any of the class below to any element of your pages. It will automatically apply the related CSS properties. If you need to apply a class only from a specific breakpoint, you can prefix any of them by that breakpoint, followed by `:`. These classes are mobile-first, which means that styling for the smallest breakpoint (`xxs`) will be considered as the default styling.

Let's take an example:

```html
<div class="grid cols-1 m:cols-3 xl:cols-12">
    <div class="col-5"/>
    <div />
</div>
```

In this example, the layout will behave as follow:
- For mobile / small devices (`xxs` and `xs`), it will be displayed as a one-column wide grid (each child will be placed in a new row)
- From tablets to larger screens (between `m` and `xl`), the number of columns per row will grow up to 3. But this won't change the layout, as the first child is set to take at least 5 columns wide.
- For larger screens (from `xl`), the grid will be 12-columns wide. This time, the layout will change, as the first child will take 5 columns on the first row, and the second child only one.

---

## What's wrong with TailwindCSS?

You may wonder why we implemented yet another styling library instead of relying on libraries like TailwindCSS. Fundamentally, Tailwind is great. The concept of designing and prototyping your pages directly inside the HTML without needing to write a single line of CSS is a huge productivity booster. And by the way, you will probably notice big similitude between Tailwind classes and the ones we use.

However, at some point, allowing developers to write dozens of rules directly inside the HTML code can quickly lead to a CSS-in-HTML hell:

```html
<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
      <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="/beach-house.jpg" alt="" class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy">
      <img src="/beach-house-interior-1.jpg" alt="" class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy">
      <img src="/beach-house-interior-2.jpg" alt="" class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy">
    </div>
  </div>
</main>
```

The code gets ugly, looses legibility, mixes logic and style, and generates a huge redundancy, bloating the final CSS bundle. With such practice, it gets very hard to build and keep a design system consistent and clean across a project as it grows over time.

The main problem here is that Tailwind allows all CSS properties to be written in HTML. We believe that only a few subset of commonly used rules should be available, only for layout purposes. All the rest (colors, fonts, and such) should still reside in our good old SASS files, providing a complete separation of concerns.

---

## Available classes

<table>
<thead>
    <tr>
      <th scope="col">Built-in class</th>
      <th scope="col">Corresponding CSS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>**flex**</td>
      <td>`display: flex;`</td>
    </tr>
    <tr>
      <td>**grid**</td>
      <td>`display: grid;`</td>
    </tr>
    <tr>
      <td>**none**</td>
      <td>`display: none;`</td>
    </tr>
    <tr>
      <td>**block**</td>
      <td>`display: block;`</td>
    </tr>
    <tr>
      <td>**flex-wrap**</td>
      <td>`flex-wrap: wrap;`</td>
    </tr>
    <tr>
      <td>**flex-nowrap**</td>
      <td>`flex-wrap: nowrap;`</td>
    </tr>
    <tr>
      <td>**flex-wrap-rev**</td>
      <td>`flex-wrap: wrap-reverse;`</td>
    </tr>
    <tr>
      <td>**flex-row**</td>
      <td>`flex-direction: row;`</td>
    </tr>
    <tr>
      <td>**flex-col**</td>
      <td>`flex-direction: column;`</td>
    </tr>
    <tr>
      <td>**flex-col-rev**</td>
      <td>`flex-direction: column-reverse;`</td>
    </tr>
    <tr>
      <td>**flex-row-rev**</td>
      <td>`flex-direction: row-reverse;`</td>
    </tr>
    <tr>
      <td>**grid-row**</td>
      <td>`grid-auto-flow: row;`</td>
    </tr>
    <tr>
      <td>**grid-col**</td>
      <td>`grid-auto-flow: column;`</td>
    </tr>
    <tr>
      <td>**grid-dense**</td>
      <td>`grid-auto-flow: dense;`</td>
    </tr>
    <tr>
      <td>**flex-none**</td>
      <td>`flex: none;`</td>
    </tr>
    <tr>
      <td>**flex-auto**</td>
      <td>`flex: 1 1 auto;`</td>
    </tr>
    <tr>
      <td>**justify-between**</td>
      <td>`justify-content: space-between;`</td>
    </tr>
    <tr>
      <td>**justify-start**</td>
      <td>`justify-content: flex-start;`</td>
    </tr>
    <tr>
      <td>**justify-end**</td>
      <td>`justify-content: flex-end;`</td>
    </tr>
    <tr>
      <td>**justify-stretch**</td>
      <td>`justify-content: stretch;`</td>
    </tr>
    <tr>
      <td>**justify-center**</td>
      <td>`justify-content: center;`</td>
    </tr>
    <tr>
      <td>**items-center**</td>
      <td>`align-items: center;`</td>
    </tr>
    <tr>
      <td>**items-start**</td>
      <td>`align-items: flex-start;`</td>
    </tr>
    <tr>
      <td>**items-end**</td>
      <td>`align-items: flex-end;`</td>
    </tr>
    <tr>
      <td>**items-stretch**</td>
      <td>`align-items: stretch;`</td>
    </tr>
    <tr>
      <td>**self-center**</td>
      <td>`align-self: center;`</td>
    </tr>
    <tr>
      <td>**self-start**</td>
      <td>`align-self: flex-start;`</td>
    </tr>
    <tr>
      <td>**self-end**</td>
      <td>`align-self: flex-end;`</td>
    </tr>
    <tr>
      <td>**self-stretch**</td>
      <td>`align-self: stretch;`</td>
    </tr>
    <tr>
      <td>**cols-\{1..12\}**</td>
      <td>`grid-template-columns: repeat(1..12, 1fr);`</td>
    </tr>
    <tr>
      <td>**col-\{1..12\}**</td>
      <td>`grid-column: span 1..12;`</td>
    </tr>
    <tr>
      <td>**vgap-\{1..7\}**</td>
      <td>`row-gap: var(--gaps-{1..7});`</td>
    </tr>
    <tr>
      <td>**hgap-\{1..7\}**</td>
      <td>`column-gap: var(--gaps-{1..7});`</td>
    </tr>
    <tr>
      <td>**text-left**</td>
      <td>`text-align: left;`</td>
    </tr>
    <tr>
      <td>**text-right**</td>
      <td>`text-align: right;`</td>
    </tr>
    <tr>
      <td>**text-center**</td>
      <td>`text-align: center;`</td>
    </tr>
    <tr>
      <td>**text-justify**</td>
      <td>`text-align: justify;`</td>
    </tr>
    <tr>
      <td>**w-full**</td>
      <td>`width: 100%;`</td>
    </tr>
    <tr>
      <td>**h-full**</td>
      <td>`height: 100%;`</td>
    </tr>
  </tbody>
</table>
