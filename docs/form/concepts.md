---
title: "@perseid/form"
description: The @perseid/form package allows you to build complex, smart forms or inputs-based UIs in seconds.
---

# Concepts

Build complex, smart forms or inputs-based UIs in seconds.

Building user interfaces containing multiple inputs is very repetitive and low-value process. It always contains the same logic, and doesn't fundamentally change much accross apps and websites: we need to implement different types of fields, fields validations logic, transitions, manage form submission, and so on. Why should we always go back to that each time we create a new feature?

`@perseid/form` is meant to remove these unecessary, time-consuming parts, by providing a common, generic engine that automatically performs usual checks. Through a simple JSON configuration, you can generate deep, complex UIs, without a line of code, so you can focus on the real value of your project.

`@perseid/form` can be used for a wide variety of use cases, including:
- Forms, surveys
- Profile / settings edition pages, blog post creation, ...
- Contact or support page with ticket creation
- And even chatbots or FAQs!

Why choosing `@perseid/form` to develop your project?
- Small learning curve, simple concepts
- Tiny JSON configuration for basic use cases
- Completely dynamic form steps generation, based on previous inputs
- Fully extensible and customizable for most complex use cases, using plugins
- Supports React, Svelte and Vue natively, although you can also provide your own implementation for them or any other frontend framework

---

## Step

A form is composed of one or several steps. User can navigate through each step by filling its respective fields. This will automatically determinate the next step to load, depending on the previous values, and generate that next step.

---

## Field

Each step contains multiple fields. A field may be an input (like a text field, a checkbox, and such), or a message, a button, or even a custom component. It can be either interactive or static and just display an information. Changing a submit field will trigger the computation of the next step. A field is the most atomic element of the form.

---

## Form

The form may serve different purposes: a dynamic series of inputs, dynamically changing next inputs depending on the values filled until then, a simple, unique-step process with a few fields (such as a profile edition page).

---

## Hooks

You can get the complete hooks API [here](./engine.md).

Throughout its life cycle, a Perseid form triggers several useful events that you can intercept to build fully custom and complex logic. Hooks are made for this very purpose. A hook is actually a simple [pure function](https://en.wikipedia.org/wiki/Pure_function) that is called whenever the given event is triggered, with its context as a parameter. You can modify that context and pass it to subsequent hooks. This will have a direct impact on the rest of the form's execution, as the engine will only consider the updated context that was passed through the whole hooks chain when performing further processing (loading next step, saving user action, ...). Here is an example:

```typescript
// The hook is passed 2 parameters: the next step that will be displayed,
// and the next hook to execute at the end of this one.
const myHook = (nextStep, nextHook) => {
  // Do not change `nextStep` directly to keep that function pure!
  const updatedNextStep = { ...nextStep, status: 'success' };
  // Passing the updated value to the next hook of the chain...
  return nextHook(updatedNextStep);
};

// Subscribing to the `loadNextStep` event...
engine.on('loadNextStep', myHook);
```

:::warning
A hook must always return a non-`undefined` value. You can either perform synchronous or asynchronous tasks in your hook (using `async/await` or Promises), like calling an API or waiting for a timeout. During that time, the whole hooks chain execution is blocked for that event.
:::

There are currently 7 events you can subscribe to:
- **start:** when engine starts
- **error:** when an error occurs / is thrown in the form or in another hook
- **userAction:** whenever user triggers an action (keyboard input in a field, a click on a checkbox, ...). Use this hook to perform pre-checks or format user inputs.
- **afterUserAction:** right after form has been updated according to latest user input, and fields validated (if necessary)
- **step:** before the form loads the next step into the view
- **afterStep:** after the form has loaded the next step
- **submit:** when user submits the form (see [Step](#step))

:::note
Hooks subscription order matters! Indeed, they will be executed in the same order they were declared, for a given event (first subscription called first, and so on, for that event).
:::


> _What if I want to execute my hook at the very end of the chain?_

As mentioned above, hooks declaration order matters. But you can also tweak hooks execution order, by calling the `nextHook` method first, and executing your own hook logic inside the `then` block, as follows:

```typescript
const myHook = async (nextStep, nextHook) => {
  const updatedNextStep = await nextHook(nextStep)
  // updatedNextStep contains the updated value of `nextStep` after
  // having passed through the whole hooks chain.
  // ...
  return updatedNextStep;
};
```

> _How can I skip the rest of the hooks?_

You can choose not to call `nextHook` in your hook! This way, any further hook will be automatically skipped, and the current context directly passed to the engine for final processing.

> _How can I prevent the engine from processing the context at the end (e.g. not loading the next step)?_

The form engine uses a simple convention to determine whether it should perform its final processing after the hooks chain (such as loading the next step, updating form values, submitting the form, ...): if the final context value is `null`, it means that the standard behavior must not be executed. For instance:

```typescript
engine.on('loadNextStep', async (nextStep) => {
  // This will actually prevent next step from being loaded.
  return null;
});
```

:::info
Throwing an Error, or rejecting a Promise in the body of a hook will automatically stop the chain execution, and trigger the `error` event (and its related hooks).
:::

---

## Plugins

Plugins don't really bring anything new technically speaking, they are rather a good practice you should follow when using hooks. A plugin is just a function that gather several hooks declarations that fulfill the same purpose together, for better legibility and consistency, but also for distribution. Let's say you want to setup a system that automatically disables the "Next" button at the end of each step as long as all its fields are not correctly filled. To do so, you will probably need to declare several hooks listening to different events (`userAction`, `afterStep`, ...). Those hooks are meant to work together, and that's why they should be located in the same piece of code: a dedicated plugin. Hence, we would get something like this:

```typescript
// The `engine` parameter is always passed to a plugin, and allows
// you to access to all the engine's public methods to change form's logic.
const myButtonDisabler = (engine) => {
  engine.on('userAction', (userAction, next) => {
    return next(userAction).then((updatedUserAction) => {
      // Mmmh, that field was not correctly filled.
      if (updatedUserAction === null) {
        // Let's disable the "Next" button here...
        // ...
        return Promise.resolve(null);
      }
    });
  });
  engine.on('step', (nextStep, next) => {
    const updatedNextStep = { ...nextStep,
      // Let's also disable "Next" button here as we just loaded the step,
      // so there are probably several invalid fields yet...
      // ...
    };
    return next(nextStep);
  });
};
```

:::info
Once your plugin is implemented, you can bind it to the current form by declaring it in the configuration.
:::
