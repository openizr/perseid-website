---
title: "@perseid/dev-kit Configuration"
description: The @perseid/dev-kit configuration allows you to fine-tune your development experience.
---

# Configuring dev kit

---

## Main options

You can customize the dev kit behaviour by putting the `devKitConfig` into your project `package.json`.

might also want to add the `"type": "module"` directive in your `package.json`.

---

### target

- *Type:* `"node" | "web"`

Specifies the target for which project will be compiled. Use `node` for bundling back-end projects,
NPM libraries, or desktop apps, `web` for front-end projects.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "target": "node"
}
```

---

### devServer.host

- *Type:* `string`

For `target=web` only. Specifies the host/IP address for the dev server.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "devServer": {
    "host": "0.0.0.0"
  },
}
```

---

### devServer.port

- *Type:* `number | string`

For `target=web` only. Specifies the port number for the dev server. If a string is passed, the port number will be inferred
from environment variables instead (e.g. dev kit will try to resolve `PORT_NUMBER` as `process.env.PORT_NUMBER`).

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "devServer": {
    "port": 3000
  },
}
```

---

### html

- *Type:* `string`

For `target=web` only. The relative path (from `srcPath`) to the `index.html` file that should be the
entry point for the dev server.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "html": "./html/index.html"
}
```

---

### runInDev

- *Type:* `boolean`

For `target=node` only. Whether to launch main entrypoint with node after each compilation in dev mode.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "runInDev": true
}
```

---

### splitChunks

- *Type:* `boolean`

Whether to split JS chunks, or bundle everything in 1 file in build mode.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "splitChunks": true
}
```

---

### entries

- *Type:* `Record<string, string>`

For `target=node` only. List of all your entrypoints (relative paths from your `srcPath`). This is
especially useful when developing a library that exports multiple entry points.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "entries": {
    "main": "main.ts",
    "other": "otherScript.js"
  }
}
```

---

### srcPath

- *Type:* `string`

Source directory path, containing your codebase.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "srcPath": "src"
}
```

---

### distPath

- *Type:* `string`

Distribution directory path, in which all assets will be compiled.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "distPath": "public"
}
```

---

### publicPath

- *Type:* `string`

For `target=web` only. URL from which assets will be fetched.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "publicPath": "https://assets.dev"
}
```

---

### banner

- *Type:* `string`

This banner will be put at the top of all your bundled assets.

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "banner": "/*! Copyright John Doe. */"
}
```

---

### env

- *Type:* `Record<"development" | "production", Record<string, string>>`

For `target=web` only. Sets your environment variables if necessary, they will be automatically
inserted in the code at build time

Example:

```typescript
// ...
"devKitConfig": {
  // ...
  "env": {
    "development": {
      "NODE_ENV": "development",
      "API": "http://dev.api.com",
    },
    "production": {
      "NODE_ENV": "production",
      "API": "http://api.com",
    }
  }
}
```

---


## Linter

In order to use the shipped-in ESLint config in your project, put the following lines in `package.json`:

```typescript
// ...
"eslintConfig": {
  "extends": [
    "./node_modules/@perseid/dev-kit/main.cjs"
  ]
},
```

---


## TypeScript support

Whether you are developing a JS or TS project, you should create a `tsconfig.json` file at the root
of your project, with the following content:

```typescript
{
  "extends": "./node_modules/@perseid/dev-kit/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "src"    // Must be the same as your `package.json`'s "srcPath".
  }
}
```
