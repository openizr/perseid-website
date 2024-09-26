---
id: /blog/introducing-perseid-the-product-oriented-javascript-framework
title: "Introducing Perseid: The Product-Oriented JavaScript Framework"
description: Perseid is a JavaScript framework that streamlines web apps development, helping teams prototype in minutes, build scalable, maintainable apps with a focus on efficiency.
hide_table_of_contents: false
---

import Link from '@docusaurus/Link';


# Introducing Perseid: The Product-Oriented JavaScript Framework

Over the past decade, the fundamentals of web development haven’t really changed. Sure, technology has evolved, new libraries have emerged, and others have faded away. Some innovations have made our lives easier—long live [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service), [Vite](https://vite.dev/), [esbuild](https://esbuild.github.io/), modern JavaScript and CSS, [TypeScript](https://www.typescriptlang.org/), and [Docker](https://www.docker.com/). But overall, the methodology remains the same, and so do the pain points. Even in 2024, developers are bogged down by tasks that add little real value to the end user.

Let's say you're being asked to build a new app. You typically need to:
- Set up a boilerplate project.
- Configure a development environment (dependencies, linters, testing tools, etc.).
- Set up a database and define schemas.
- Choose and configure a backend framework.
- Pick and set up a frontend framework.

And you have to do all of this while ensuring the codebase is structured properly so it remains scalable and maintainable. With experience, this gets easier, but it would be ideal if even junior developers didn’t have to worry about it.

The worst part? After spending hours or even days on these tasks, you’ve still accomplished nothing. At best, you have a flashy, yet empty `Hello World!` app. No features are complete, no customer problems are solved, and the product hasn’t made any real progress. This endless cycle of technical decisions pulls us further from addressing customer needs and achieving the true goals of product development.

Are we doomed to follow this pattern forever?

<br />

## We need to adopt Product principles at the core of our work

We’re still operating under paradigms that force us to waste time on setup, configuration, and stack decisions. Building a web app should take hours, not weeks. Come on, it's not rocket science.

### The gap between product and code

Web development today is misaligned with the fast-paced, iterative nature of product design. Developers are burdened with making decisions that don’t matter to the customers they serve, focusing on technology rather than business logic. When discussing new features or addressing customer needs, the overwhelming technical work required behind the scenes takes priority, and we lose sight of the bigger picture. This happens because the tools we use don't allow developers to swiftly move from idea to execution. They certainly don’t enable rapid prototyping or the quick iteration needed to keep up in a competitive market.

### Bridging Discovery and Delivery

There is a huge gap between discovery (idea validation, prototyping) and delivery (scalable, maintainable product). Ideally, we’d like to take the prototype we quickly built and, in just a few days, adapt it to be future-proof—ensuring both scalability and maintainability. We need a way to bridge that gap.

<br />

## We need to reduce the impact of initial tech choices

When you start developing a product, you need to move fast. So, you choose the stack that seems best at the moment, without overthinking or trying to anticipate too far ahead. It works for the prototype, and the early years, but as your product grows, so do your customer needs and business goals. More developers join the project. Vision evolves. And soon enough, you realize the stack you initially chose no longer fits.

At this point, you have two choices:

- Stick with your original stack: This is risky. What once seemed like smart decisions gradually turns into technical debt, slowing development and creating painful bottlenecks. Eventually, it becomes a ticking time bomb that threatens to derail your product.

- Switch to a new stack: This typically means a complete overhaul, requiring months or even years of refactoring. It’s expensive, time-consuming, and puts the business at risk while your dev team reworks the core of the codebase.

Neither of these options is acceptable.

### What if stack choices didn’t matter?

- What if you could switch stacks—whether it’s the database, UI framework, server framework, or internal services—in just minutes or days, without disrupting your business?

- What if stack choices no longer became bottlenecks that limited your product’s growth and evolution?

- What if you could build prototypes in minutes, get them in front of users for feedback, and once validated, scale them into production-ready apps without the fear of accumulating technical debt or needing a major overhaul down the road?

This is where Perseid comes in.

<br />

## A new way of building great products, with unmatched speed

Perseid is designed to eliminate all the limitations we've discussed. It’s not just another development tool—it’s a framework that evolves with you, from concept to execution, through scaling and growth.

### Key features

- **Agnostic by Design:** Perseid doesn’t lock you into specific technologies. You have full control over your stack. Choose your database, API engine, email provider, cache system, UI framework — Perseid integrates seamlessly with any of them.

- **Simple config mode:** Start building full-stack applications in seconds with just a few lines of configuration. Ideal for fast prototyping.

- **100% Customizable:** Perseid grows alongside your product. Its class-based, inheritance-driven design allows you to customize down to the core logic as your product becomes more complex, ensuring you’re never limited by the framework. Sky is the limit, not the framework.

- **Progressive and Modular:** You don’t have to adopt the entire framework at once. Depending on your project needs, Perseid lets you pick only the modules you require, with the flexibility to add more functionality as your app scales

### Modules

Technically, Perseid is distributed as a set of 8 different NPM packages, each one having its own purpose. It allows for incremental adoption, with a sweet learning curve. Pick only what you need!

- **@perseid/dev-kit:** A (almost) 0-config development environment built on [Vite](https://vite.dev/) and [esbuild](https://esbuild.github.io/). This kit includes everything from linters to TypeScript support, along with testing and bundling tools for both front and back end.

- **@perseid/core:** A lightweight set of isomorphic utility methods and classes that can be used in any project.

- **@perseid/server:** A fully customizable server solution compatible with Fastify, ExpressJS, MongoDB, PostgreSQL, MySQL, S3, Mailgun, and many other services. Generates REST APIs from data models or lets you build your own endpoints, all in a blink of an eye.

- **@perseid/ui:** A SASS library with built-in classes for perfect layouts, along with a set of UI components that serve as building blocks for your app’s frontend. It’s compatible with any UI framework and offers official support for Svelte, Vue, and React.

- **@perseid/form:** A form engine that handles incredibly complex form logics through a simple configuration. Framework-agnostic and highly efficient.

- **@perseid/client:** A UI generator that works with any UI framework to build anything from simple CRUD applications to fully customized interfaces.

- **@perseid/jobs:** Run computationally intensive, one-off, or recurring tasks. These jobs can be deployed anywhere, allowing you to keep your API performant and scalable.

- **@perseid/store:** An ultra-simple app state management library that is compatible with any framework and optimized for performance.

<br/>

Ready to experience a new paradigm for web apps development?

<br/>

<Link
  className="cta cta--centered cta--emphasis"
  to="/docs/learn/intro">
  Start building
</Link>


<br/>