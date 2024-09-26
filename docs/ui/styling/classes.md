---
sidebar_position: 3
title: "@perseid/ui Built-in CSS classes"
description: The @perseid/ui SASS library provides a list of built-in CSS classes for layout.
---

# CSS Classes

A set of built-in CSS classes is available out of the box, to let you design any layout in seconds.

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

## Available classes

**.flex:** `display: flex;`

**.grid:** `display: grid;`

**.none:** `display: none;`

**.block:** `display: block;`

**.flex-wrap:** `flex-wrap: wrap;`

**.flex-nowrap:** `flex-wrap: nowrap;`

**.flex-wrap-rev:** `flex-wrap: wrap-reverse;`

**.flex-row:** `flex-direction: row;`

**.flex-col:** `flex-direction: column;`

**.flex-col-rev:** `flex-direction: column-reverse;`

**.flex-row-rev:** `flex-direction: row-reverse;`

**.grid-row:** `grid-auto-flow: row;`

**.grid-col:** `grid-auto-flow: column;`

**.grid-dense:** `grid-auto-flow: dense;`

**.flex-none:** `flex: none;`

**.flex-auto:** `flex: 1 1 auto;`

**.justify-between:** `justify-content: space-between;`

**.justify-start:** `justify-content: flex-start;`

**.justify-end:** `justify-content: flex-end;`

**.justify-stretch:** `justify-content: stretch;`

**.justify-center:** `justify-content: center;`

**.items-center:** `align-items: center;`

**.items-start:** `align-items: flex-start;`

**.items-end:** `align-items: flex-end;`

**.items-stretch:** `align-items: stretch;`

**.self-center:** `align-self: center;`

**.self-start:** `align-self: flex-start;`

**.self-end:** `align-self: flex-end;`

**.self-stretch:** `align-self: stretch;`

**.cols-\{1..12\}:** `grid-template-columns: repeat(1..12, 1fr);`

**.col-\{1..12\}:** `grid-column: span 1..12;`

**.vgap-\{1..7\}:** `row-gap: var(--gaps-{1..7});`

**.hgap-\{1..7\}:** `column-gap: var(--gaps-{1..7});`

**.text-left:** `text-align: left;`

**.text-right:** `text-align: right;`

**.text-center:** `text-align: center;`

**.text-justify:** `text-align: justify;`

**.w-full:** `width: 100%;`

**.h-full:** `height: 100%;`

