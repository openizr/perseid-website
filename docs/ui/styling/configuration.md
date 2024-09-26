---
sidebar_position: 1
title: "@perseid/ui SASS Configuration"
description: Configuring the @perseid/ui SASS library is a 4-steps process.
---

# Configuration

Configuring the SASS library is a 4-steps process.

## $gridColumnsNumber

Defines the number of column that constitute the grid system. Defaults to `12`.

## $breakpoints

List of breakpoints that should be available for built-in classes and `query` mixin. Default:

```sass
(
  xxs: 0px,
  xs: 376px,
  s: 576px,
  m: 768px,
  l: 992px,
  xl: 1200px,
)
```

## $gaps

List of gaps that should be available for built-in classes. Default:

```sass
(
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 2rem,
  5: 4rem,
  6: 8rem,
  7: 12rem,
)
```

## $variables

Variables to be generated as CSS variables and available in document. Default:

```sass
(
  gaps:$gaps,
  shp:(
    default: 4px,
  ),
  shd: (
    1: (
      1px 1px 6px hsl(0, 0%, 10%),
      0px 1px 5px 0px hsl(0, 0%, 10%),
      0px 1px 0px 0px hsl(0, 0%, 10%),
    ),
    2: (
      0px 4px 5px -2px hsl(0, 0%, 10%),
      0px 7px 10px 1px hsl(0, 0%, 10%),
      0px 2px 16px 1px hsl(0, 0%, 10%),
    ),
    3: (
      0px 7px 8px -4px hsl(0, 0%, 10%),
      0px 13px 19px 2px hsl(0, 0%, 10%),
      0px 5px 24px 4px hsl(0, 0%, 10%),
    ),
    4: (
      0px 9px 12px -6px hsl(0, 0%, 10%),
      0px 19px 29px 2px hsl(0, 0%, 10%),
      0px 7px 36px 6px hsl(0, 0%, 10%),
    ),
    5: (
      0px 11px 15px -7px hsl(0, 0%, 10%),
      0px 24px 38px 3px hsl(0, 0%, 10%),
      0px 9px 46px 8px hsl(0, 0%, 10%),
    ),
  ),
  clr: (
    greys-100: hsl(0, 0%, 10%),
    greys-200: hsl(0, 0%, 20%),
    greys-300: hsl(0, 0%, 27%),
    greys-400: hsl(0, 0%, 35%),
    greys-500: hsl(0, 0%, 40%),
    greys-600: hsl(0, 0%, 60%),
    greys-700: hsl(0, 0%, 80%),
    greys-800: hsl(0, 0%, 95%),
    greys-900: hsl(0, 0%, 99%),
  ),
  ff: (
    default: 'sans-serif',
  ),
)

// The following CSS variables will be generated:

--gaps-1: 4px;
--gaps-2: 8px;
--gaps-3: 16px;
--gaps-4: 24px;
--gaps-5: 32px;
--gaps-6: 64px;
--gaps-7: 94px;
--shp-default: 4px;
--clr-default: #000000;
--clr-default-rgb: rgb(0, 0, 0);
--ff-default: 'sans-serif';
```