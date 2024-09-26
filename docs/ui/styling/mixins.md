---
sidebar_position: 2
title: "@perseid/ui SASS Mixins"
description: The @perseid/ui SASS library provides a set of mixins that boost delivery.
---

# Mixins

A set of mixins that boost delivery.

## `modifiers`

Applies given style to modifier [BEM+](/docs/ui/helpers#bem) modifier.

### Parameters

- **names (string):** BEM+ space-separated modifiers' names to apply style to.
- **[OPTIONAL] children (boolean):** Whether to use the mixin for modifier's children, or the modifier itself. Defaults to `false`.

### Example

```sass
.test {
    @include modifier(success test) {
        background: green;
    }
    @include modifier(success, &) {
        &__status {
            color: green;
        }
    }
}

// Outputs

.test[class*='--success'][class*='--test'] {
  background: green;
}

.test[class*='--success'] .test__status {
  color: green;
}
```

## `extend`

Makes the calling selector inherit given built-in classes.

### Parameters

- **classes (string):** List of built-in classes to inherit properties from.

### Example

```sass
.test {
    @include modifier(success test) {
        background: green;
    }
    @include modifier(success, &) {
        &__status {
            color: green;
        }
    }
}

// Outputs

.test[class*='--success'][class*='--test'] {
  background: green;
}

.test[class*='--success'] .test__status {
  color: green;
}
```

## `query`

Integrates given style into a media query based on `firstBreakpoint` and `secondBreakpoint`.  If only one breakpoint is passed, the media query will be of type "min-width". Otherwise, it will be of type "min-width" and "max-width". Highest breakpoint value will be considered as the max-width, while the other one will be min-width.

### Parameters

- **firstBreakpoint (string|number):**  First breakpoint. Can be a predefined value (like `xl`), or an absolute value (like `1200px`).
- **[OPTIONAL] secondBreakpoint (string|number):**  Second breakpoint. Can be a predefined value (like `xl`), or an absolute value (like `1200px`). Defaults to `''`.

### Example

```sass
.test {
    @include query(xl, 32px) {
      background: red;
    }
    @include query(xs) {
      background: blue;
    }
    @include query(xxs) {
      background: green;
    }
}

// Outputs

.test {
  background: green;
}

@media screen and (min-width: 376px) {
  .test {
    background: blue;
  }
}

@media screen and (min-width: 32px) and (max-width: 1199px) {
  .test {
    background: red;
  }
}
```