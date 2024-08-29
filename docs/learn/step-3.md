---
sidebar_position: 4
---

# Setting-up the front-end

:::info[Development environment]
In the following sections, we assume you are using TypeScript along with `@perseid/dev-kit` as development toolchain and `yarn` as a package manager, but feel free to adapt the code and configuration to your favorite tool 👽
:::


## Structure & configuration

1. Create `frontend` directory.
2. Create `frontend/src` sub-directory.
3. Create a `frontend/package.json` file, with the following content:

```json title="frontend/package.json"
{
  "name": "perseid-mongodb-express-react",
  "type": "module",
  "license": "UNLICENSED",
  "devDependencies": {
    "@perseid/dev-kit": "^10.0.0"
  },
  "devKitConfig": {
    "target": "web",
    "splitChunks": false,
    "devServer": {
      "host": "0.0.0.0",
      "port": "FRONTEND_PORT"
    },
    "html": "./src/index.html",
    "srcPath": "src",
    "distPath": "dist"
  },
  "scripts": {
    "dev": "node node_modules/@perseid/dev-kit/scripts/dev.js"
  }
}
```

<br/>

4. Create a `frontend/tsconfig.json` file, with the following content:

```json title="tsconfig.json"
{
  "extends": "./node_modules/@perseid/dev-kit/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

<br/>

5. Initialize your project by running `yarn`.
6. Create a `frontend/src/index.tsx` file (empty for now).
7. Create a `frontend/src/index.html` file, with the following content:

```html title="frontend/src/index.html"
<!DOCTYPE html>
<html lang="en">

<head>
  <base href="/" />
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script async type="module" crossorigin src="/src/index.tsx"></script>
</head>

<body>
  <section id="root">
    <div class="loader">
      Loading...
    </div>
  </section>
</body>

</html>
```


## Dependencies

As we are going to use **React**, we need to install these dependencies in addition to Perseid modules:

```bash
yarn add @perseid/core @perseid/client @types/react @types/react-dom react react-dom
```


## Data model

Here again, types definitions will provide with you useful autocompletion in your IDE and type-safety. Create a `index.d.ts` file and put the following content:

```typescript title="index.d.ts"
import type { Authors, DefaultDataModel, Deletion, Id, Ids, Timestamps } from "@perseid/core";

declare global {
  export interface DataModel extends DefaultDataModel {
    galaxies: Ids & Authors & Deletion & Timestamps & {
      name: string;
    };
    celestialBodies: Ids & {
      type: 'ASTEROID' | 'PLANET' | 'BLACK_HOLE' | 'STAR';
      name: string;
      discoveredIn: number;
      galaxy: Id | DataModel['galaxies'];
      isLifePossible: boolean;
      coordinates: {
        x: number;
        y: number;
      };
      composition: {
        element: string;
        percentage: number;
      }[] | null;
    };
  }
}
```

<br/>

:::info
This time, we won't need to re-declare data model schema in front-end, as it will be automatically fetched from the API we configured earlier, through the special `GET _model` endpoint.
:::


## Services

As for Perseid server, services are the building blocks of a Perseid UI. Each service is responsible for a specific concern. In the `frontend/src/index.tsx` file, add the following:


```typescript title="frontend/src/index.tsx"
import { I18n } from '@perseid/core';
import { Model, Logger, ApiClient, FormBuilder, Store } from '@perseid/client';

// This is the actual data model service. It provides methods to manipulate and access data model.
// No need for a data model schema here, it will be automatically fetched from the API!
const model = new Model<DataModel>();

// The Logger service logs any useful information happening in the app, either for debugging or
// monitoring. Most services have access to this logger.
const logger = new Logger({ logLevel: 'debug' });

// Internationalization and localization service, handles labels translations and values conversions.
// No label for now, we will handle that part later on.
const i18n = new I18n(logger, {});


// The API client is the direct interface between the browser and the API server we built previously,
// so we need to specify useful endpoints paths so that the client knows which endpoint to call for
// each operation.
const apiClient = new ApiClient<DataModel>(model, logger, {
  connectTimeout: 3000,
  endpoints: {
    auth: {
      viewMe: { route: '/auth/me' },
      signUp: { route: '/auth/sign-up' },
      signIn: { route: '/auth/sign-in' },
      signOut: { route: '/auth/sign-out' },
      verifyEmail: { route: '/auth/verify-email' },
      refreshToken: { route: '/auth/refresh-token' },
      resetPassword: { route: '/auth/reset-password' },
      requestPasswordReset: { route: '/auth/reset-password' },
      requestEmailVerification: { route: '/auth/verify-email' },
    },
    resources: {
      galaxies: {
        list: { route: '/galaxies' },
        create: { route: '/galaxies' },
        view: { route: '/galaxies/:id' },
        update: { route: '/galaxies/:id' },
        delete: { route: '/galaxies/:id' },
        search: { route: '/galaxies/search' },
      },
      celestialBodies: {
        list: { route: '/bodies' },
        create: { route: '/bodies' },
        view: { route: '/bodies/:id' },
        update: { route: '/bodies/:id' },
        delete: { route: '/bodies/:id' },
        search: { route: '/bodies/search' },
      },
    },
  },
  mockedResponses: {},
  baseUrl: 'http://localhost:5070',
});

// Useful service that provides methods to easily build forms either from data model, or 100% custom.
const formBuilder = new FormBuilder<DataModel>(model, logger);

// Store is THE central element in a Perseid UI, as it handles all the app logic, including API
// calls, routing, pages data generation, ... You can see it as the front-end Engine.
const store = new Store(model, logger, apiClient, formBuilder, {
  // Here, we must configure URLS for each built-in page we want to use, as we did for endpoints.
  // This way, the app will know how to generate the UI and perform correct routing.
  pages: {
    auth: {
      signIn: { route: '/sign-in' },
      signUp: { route: '/sign-up' },
      updateUser: { route: '/users/me' },
      verifyEmail: { route: '/verify-email' },
      resetPassword: { route: '/reset-password' },
    },
    resources: {
      galaxies: {
        list: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/galaxies`.
          route: '/galaxies',
          pageProps: {
            // List of fields on which results will be searchable.
            searchFields: ['name'],
            // List of fields that will be displayed on the page.
            fields: ['_createdAt', '_createdBy.email', 'name'],
          },
        },
        view: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/galaxies/:id`.
          route: '/galaxies/:id',
          pageProps: {
            // List of fields that will be displayed on the page.
            fields: ['_id', '_createdAt', '_createdBy.email', 'name'],
          },
        },
        update: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/galaxies/:id/edit`.
          route: '/galaxies/:id/edit',
          // No special prop needed here, the edit UI will be automatically generated from data model schema!
          pageProps: {},
        },
        create: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/galaxies/create`.
          route: '/galaxies/create',
          // No special prop needed here, the creation UI will be automatically generated from data model schema!
          pageProps: {},
        },
      },
      celestialBodies: {
        list: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/bodies`.
          route: '/bodies',
          pageProps: {
            // List of fields on which results will be searchable.
            searchFields: ['name'],
            // List of fields that will be displayed on the page.
            fields: ['galaxy.name', 'name', 'type', 'discoveredIn'],
          },
        },
        view: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/bodies/:id`.
          route: '/bodies/:id',
          pageProps: {
            // List of fields that will be displayed on the page.
            fields: ['_id', 'galaxy.name', 'name', 'type', 'discoveredIn', 'isLifePossible', 'coordinates', 'composition'],
          },
        },
        update: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/bodies/:id/edit`.
          route: '/bodies/:id/edit',
          // We want to fetch an additional field: "galaxy.name", to display galaxy name instead of its ID.
          pageProps: {
            fields: ['galaxy.name']
          },
        },
        create: {
          // This page will be accessible at `http://localhost:<FRONTEND_PORT>/bodies/create`.
          route: '/bodies/create',
          // We want to fetch an additional field: "galaxy.name", to display galaxy name instead of its ID.
          pageProps: {
            fields: ['galaxy.name']
          },
        },
      }
    },
  },
  fallbackPageRoute: '/galaxies',
});
```


## Creating root component

Time to setup React! In the `frontend/src/index.tsx` file, add the following:

```typescript title="src/index.tsx"
import { Router } from '@perseid/client/react';
import { createRoot, type Root } from 'react-dom/client';

window.onload = () => {
  let app: Root;

  // Registering all app routes...
  store.createRoutes();

  // Creating React root...
  const container = document.querySelector('#root') as unknown as HTMLElement;
  app = createRoot(container);
  app.render(
    // Router is the main component for any Perseid app.
    <Router
      services={{
        i18n,
        model,
        store,
        apiClient,
      }}
    />,
  );
};
```

<br />

You should be able to see the app in the browser. Let's go to the galaxies list page, at `http://localhost:<FRONTEND_PORT>/galaxies`:

![Screenshot 1](/img/step_3_1.png)

As you can see, we were automatically redirected to the sign-in page. Okay, that's good, our app is a little... austere. We are missing two things:
- Labels translations
- Styling


:::info
If you open your browser console, you will see that the app logger displays an error message for each missing label translation, to help you manage i18n.
:::

## Labels

We are going to add built-in pages labels translations. Replace your `I18n` service declaration by this one:

```typescript title="frontend/src/index.tsx"
const i18n = new I18n(logger, {
  FIELD: {
    FALLBACK: {
      LABEL: 'N/A',
    },
    LOADING: {
      LABEL: 'Loading...',
    },
  },
  LOADER: {
    LABEL: 'Loading',
  },
  PAGINATION: {
    NEXT: 'Next',
    PREVIOUS: 'Previous',
  },
  NAVIGATION: {
    GO_BACK: 'Go back',
  },
  MENU: {
    UPDATE_USER: 'Profile',
    SIGN_OUT: 'Sign out',
    ITEMS: {
      TITLE: 'Menu'
    },
    GALAXIES: 'Galaxies',
    CELESTIAL_BODIES: 'Celestial bodies',
  },
  CONFIRM: {
    DELETE: {
      GALAXIES: {
        TITLE: 'Are you sure?',
        SUBTITLE: 'This operation cannot be undone.',
        CONFIRM: 'Delete',
        CANCEL: 'Cancel'
      },
      CELESTIAL_BODIES: {
        TITLE: 'Are you sure?',
        SUBTITLE: 'This operation cannot be undone.',
        CONFIRM: 'Delete',
        CANCEL: 'Cancel'
      }
    },
  },
  NOTIFICATIONS: {
    CREATED_RESOURCE: 'Successfully created!',
    UPDATED_USER: 'Profile updated.',
    RESET_PASSWORD: 'Password successfully reset.',
    REQUESTED_EMAIL: 'Email sent.',
    UPDATED_RESOURCE: 'Successfully updated!',
    DELETED_RESOURCE: 'Successfully deleted!',
    ERRORS: {
      UNKNOWN: 'Internal error.',
      FORBIDDEN: 'Forbidden.',
      NOT_FOUND: 'Not found.',
      USER_EXISTS: 'User already exists.',
      RESOURCE_EXISTS: 'Resource already exists.',
      RESOURCE_REFERENCED: 'Resource is used by other resources.',
      INVALID_CREDENTIALS: 'Invalid credentials.',
      INVALID_RESET_TOKEN: 'Invalid reset token.',
      INVALID_VERIFICATION_TOKEN: 'Invalid verification token.',
    },
  },
  PAGES: {
    ERROR: {
      FORBIDDEN: {
        TITLE: 'Forbidden',
        SUBTITLE: 'You are not allowed to perform this action.',
        CTA: 'Go to home',
      },
      NOT_FOUND: {
        TITLE: 'Page not found',
        SUBTITLE: "This page doesn't exist.",
        CTA: 'Go to home',
      },
      GENERIC: {
        TITLE: 'Erreur',
        SUBTITLE: 'Something went wrong.',
        CTA: 'Go to home',
      },
    },
    UPDATE_USER: {
      TITLE: 'Update my profile',
      FIELDS: {
        RESET_PASSWORD: {
          LABEL: 'Change password',
        },
        SUBMIT: {
          LABEL: 'Save',
        },
        EMAIL: {
          LABEL: 'Email',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid email.',
          },
        },
      },
    },
    VERIFY_EMAIL: {
      TITLE: 'Verify my email',
      SUBTITLE: 'Please verify your email address.',
      CTA: 'Send again',
    },
    SIGN_UP: {
      TITLE: 'Sign-up',
      SIGN_IN: 'Sign-in',
      FIELDS: {
        EMAIL: {
          LABEL: 'Email',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid email.',
          },
        },
        PASSWORD: {
          LABEL: 'Password',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid password.',
            PASSWORDS_MISMATCH: 'Passwords do not match.',
          },
        },
        PASSWORD_CONFIRMATION: {
          LABEL: 'Confirm password',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid password.',
            PASSWORDS_MISMATCH: 'Passwords do not match.',
          },
        },
        SUBMIT: {
          LABEL: 'Submit',
        },
      },
    },
    SIGN_IN: {
      TITLE: 'Sign-in',
      SIGN_UP: 'Sign-up',
      FORGOT_PASSWORD: 'Forgot password?',
      FIELDS: {
        SUBMIT: {
          LABEL: 'Submit',
        },
        EMAIL: {
          LABEL: 'Email',
          ERRORS: {
            REQUIRED: 'Field is required.',
          },
        },
        PASSWORD: {
          LABEL: 'Password',
          ERRORS: {
            REQUIRED: 'Field is required.',
          },
        },
      },
    },
    RESET_PASSWORD: {
      SIGN_IN: 'Sign-in',
      FIELDS: {
        TITLE: {
          LABEL: '# Reset my password',
        },
        EMAIL: {
          LABEL: 'Email',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid email.',
          },
        },
        PASSWORD: {
          LABEL: 'New password',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid password.',
            PASSWORDS_MISMATCH: 'Passwords do not match.',
          },
        },
        PASSWORD_CONFIRMATION: {
          LABEL: 'Confirm new password',
          ERRORS: {
            REQUIRED: 'Field is required.',
            PATTERN_VIOLATION: 'Invalid password.',
            PASSWORDS_MISMATCH: 'Passwords do not match.',
          },
        },
        SUBMIT: {
          LABEL: 'Submit',
        },
        SUCCESS_TITLE: {
          LABEL: '# Success',
        },
        SUCCESS_MESSAGE: {
          LABEL: 'Your password has been reset.',
        },
      },
    },
    GALAXIES: {
      LIST: {
        TITLE: 'Galaxies',
        SEARCH_PLACEHOLDER: 'Search for a galaxy...',
        TABLE: {
          LOADING: 'Loading...',
          ACTIONS: 'Actions',
          NO_RESULT: 'No result.',
        },
        FIELDS: {
          NAME: {
            LABEL: 'Name',
          },
          _CREATED_AT: {
            LABEL: 'Created at',
          },
          _CREATED_BY__EMAIL: {
            LABEL: 'Created by'
          },
        },
      },
      VIEW: {
        FIELDS: {
          _ID: {
            LABEL: 'ID',
          },
          NAME: {
            LABEL: 'Name',
          },
          _CREATED_AT: {
            LABEL: 'Created at',
          },
          _CREATED_BY__EMAIL: {
            LABEL: 'Created by'
          },
        },
      },
      UPDATE: {
        FIELDS: {
          NAME: {
            LABEL: 'Name',
          },
          SUBMIT: {
            LABEL: 'Save'
          }
        },
      },
      CREATE: {
        FIELDS: {
          NAME: {
            LABEL: 'Name',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          SUBMIT: {
            LABEL: 'Create'
          }
        },
      },
    },
    CELESTIAL_BODIES: {
      LIST: {
        TITLE: 'Celestial bodies',
        SEARCH_PLACEHOLDER: 'Search for a body...',
        TABLE: {
          LOADING: 'Loading...',
          ACTIONS: 'Actions',
          NO_RESULT: 'No result.',
        },
        FIELDS: {
          NAME: {
            LABEL: 'Name',
          },
          TYPE: {
            LABEL: 'Name',
          },
          DISCOVERED_IN: {
            LABEL: 'Year of discovery',
          },
          GALAXY__NAME: {
            LABEL: 'Galaxy'
          },
        },
      },
      VIEW: {
        FIELDS: {
          _ID: {
            LABEL: 'ID',
          },
          TYPE: {
            LABEL: 'Type',
          },
          NAME: {
            LABEL: 'Name',
          },
          DISCOVERED_IN: {
            LABEL: 'Year of discovery',
          },
          IS_LIFE_POSSIBLE: {
            LABEL: 'Is life possible?',
          },
          GALAXY__NAME: {
            LABEL: 'Galaxy',
          },
          COORDINATES: {
            LABEL: 'Coordinates in galaxy'
          },
          COMPOSITION: {
            LABEL: 'Body composition'
          },
        },
      },
      UPDATE: {
        FIELDS: {
          TYPE: {
            LABEL: 'Type',
            ERRORS: {
              REQUIRED: 'Field is required.',
            },
            OPTIONS: {
              PLACEHOLDER: 'Choose a type...',
              ASTEROID: 'Asteroid',
              PLANET: 'Planet',
              BACK_HOLE: 'Black hole',
              STAR: 'Star',
            }
          },
          NAME: {
            LABEL: 'Name',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          DISCOVERED_IN: {
            LABEL: 'Year of discovery',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          GALAXY: {
            LABEL: 'Galaxy',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          IS_LIFE_POSSIBLE: {
            LABEL: 'Is life possible?',
            ERRORS: {
              REQUIRED: 'Field is required.',
            },
            OPTIONS: {
              TRUE: 'Yes'
            }
          },
          COORDINATES: {
            LABEL: 'Coordinates in the galaxy',
            X: {
              LABEL: 'X',
              ERRORS: {
                REQUIRED: 'Field is required.',
              }
            },
            Y: {
              LABEL: 'Y',
              ERRORS: {
                REQUIRED: 'Field is required.',
              }
            },
          },
          COMPOSITION: {
            LABEL: 'Composition',
            SHOW: {
              LABEL: 'Composition is known'
            },
            HIDE: {
              LABEL: 'Composition is unknown'
            },
            FIELDS: {
              LABEL: 'Compositions',
              ELEMENT: {
                LABEL: 'Type of element',
                ERRORS: {
                  REQUIRED: 'Field is required.',
                }
              },
              PERCENTAGE: {
                LABEL: 'Percentage',
                ERRORS: {
                  REQUIRED: 'Field is required.',
                }
              },
            }
          },
          SUBMIT: {
            LABEL: 'Save'
          }
        },
      },
      CREATE: {
        FIELDS: {
          TYPE: {
            LABEL: 'Type',
            ERRORS: {
              REQUIRED: 'Field is required.',
            },
            OPTIONS: {
              PLACEHOLDER: 'Choose a type...',
              ASTEROID: 'Asteroid',
              PLANET: 'Planet',
              BACK_HOLE: 'Black hole',
              STAR: 'Star',
            }
          },
          NAME: {
            LABEL: 'Name',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          DISCOVERED_IN: {
            LABEL: 'Year of discovery',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          GALAXY: {
            LABEL: 'Galaxy',
            ERRORS: {
              REQUIRED: 'Field is required.',
            }
          },
          IS_LIFE_POSSIBLE: {
            LABEL: 'Is life possible?',
            ERRORS: {
              REQUIRED: 'Field is required.',
            },
            OPTIONS: {
              TRUE: 'Yes'
            }
          },
          COORDINATES: {
            LABEL: 'Coordinates in the galaxy',
            X: {
              LABEL: 'X',
              ERRORS: {
                REQUIRED: 'Field is required.',
              }
            },
            Y: {
              LABEL: 'Y',
              ERRORS: {
                REQUIRED: 'Field is required.',
              }
            },
          },
          COMPOSITION: {
            LABEL: 'Composition',
            SHOW: {
              LABEL: 'Composition is known'
            },
            HIDE: {
              LABEL: 'Composition is unknown'
            },
            FIELDS: {
              LABEL: 'Compositions',
              ELEMENT: {
                LABEL: 'Type of element',
                ERRORS: {
                  REQUIRED: 'Field is required.',
                }
              },
              PERCENTAGE: {
                LABEL: 'Percentage',
                ERRORS: {
                  REQUIRED: 'Field is required.',
                }
              },
            }
          },
          SUBMIT: {
            LABEL: 'Create'
          }
        },
      },
    },
  },
});
```

<br />

![Screenshot 2](/img/step_3_2.png)

Better, the UI is a bit more digest. With a little extra coat of paint, we'll be good.


## Styling

Create a new `frontend/src/index.scss` file, containing the following:

```css title="frontend/src/index.scss"
// Importing useful SASS mixins and placeholders from @perseid/ui...
@import '@perseid/ui/core/index.scss';

// Adding default theme for built-in @perseid/ui generic components (textfields, buttons, etc.)...
@import '@perseid/ui/templates/index.scss';

// Adding default theme for built-in @perseid/client pages and specific components...
@import '@perseid/client/pages/index.scss';
@import '@perseid/client/components/index.scss';

// Initializing built-in layout classes...
@include init();

// And some extra app-specific stuff...

body {
  height: 100vh;
}

#root {
  @include extend(h-full flex flex-auto);
}

.ui-options__wrapper__button {
  min-height: 1rem;
  min-width: 10rem;
  background: var(--clr-greys-800);
}
```

<br />

...And in your `frontend/src/index.tsx` file:

```typescript title="frontend/src/index.tsx"
import './index.scss';
```

<br />

![Screenshot 3](/img/step_3_3.gif)

Voilà! Your app is now fully ready and functional. You can navigate through pages, manage your galaxies and celestial bodies, edit your profile, and more.

:::info
As you are using the app as the root user, you have read and write access to all resources, including other users and roles. You can of course refine permissions, add new users and roles, depending on your requirements.
:::

Congratulations, you built your first full-stack web application with Perseid 🥳🥳🥳

![Screenshot 4](/img/step_3_4.gif)

<br />
We still have a lot more to show you, so see you in the next step ⤵️

