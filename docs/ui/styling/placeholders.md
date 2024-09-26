---
sidebar_position: 5
title: "@perseid/ui SASS placeholders"
description: The @perseid/ui SASS library provides a list of built-in placeholders for common use-cases.
---

# Placeholders

Useful sets of CSS properties to achieve most common purposes.

## `%ellipsis`

Hides the rest of the text with an ellipsis when it overflows the viewport.

### Usage

```sass
.test {
  @extend %ellipsis;
}

// Will output

.test {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;a
}
```