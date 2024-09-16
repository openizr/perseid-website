import React from 'react';
import 'styles/index.scss';
import vueLogo from 'images/vue.svg';
import reactLogo from 'images/react.svg';
import mysqlLogo from 'images/mysql.svg';
import svelteLogo from 'images/svelte.svg';
import fastifyLogo from 'images/fastify.svg';
import expressLogo from 'images/express.svg';
import mongodbLogo from 'images/mongodb.svg';
import postgresqlLogo from 'images/postgresql.svg';
import { createRoot } from 'react-dom/client';
import Form, { type FormFieldProps } from '@perseid/form/react';
import { type FormState, type Configuration } from '@perseid/form';

const logos: Record<string, unknown> = {
  vue: vueLogo,
  mysql: mysqlLogo,
  react: reactLogo,
  svelte: svelteLogo,
  express: expressLogo,
  fastify: fastifyLogo,
  mongodb: mongodbLogo,
  postgresql: postgresqlLogo,
};

const labels: Record<string, string> = {
  vue: 'VueJS',
  mysql: 'MySQL',
  react: 'React',
  svelte: 'Svelte',
  express: 'Express',
  fastify: 'Fastify',
  mongodb: 'MongoDB',
  postgresql: 'PostgreSQL',
};

const formConfiguration: Configuration = {
  root: 'root',
  fields: {
    database: {
      type: 'string',
      required: true,
    },
    server: {
      type: 'string',
      required: true,
    },
    ui: {
      type: 'string',
      required: true,
    },
    submit: {
      type: 'null',
      submit: true,
    },
    content: {
      type: 'null',
    },
  },
  steps: {
    root: {
      fields: ['database', 'server', 'ui', 'submit'],
      submit: true,
      nextStep: 'success',
    },
    success: {
      fields: ['content'],
    },
  },
  plugins: [
    (engine): void => {
      engine.on('submit', async (data, next) => {
        let counter = 0;
        if (data !== null) {
          const sendRequest = (): void => {
            counter += 1;
            fetch('https://perseid-website-api.vercel.app/api/project', {
              method: 'POST',
              body: JSON.stringify(data),
            }).then(async (response) => {
              const json = await response.json() as { zip: string; };
              setTimeout(() => {
                engine.setVariables({ zip: json.zip }).catch((e: unknown) => {
                  throw e;
                });
              }, 4000);
            }).catch(() => {
              if (counter < 3) {
                sendRequest();
              }
            });
          };
          sendRequest();
        }
        return next(data);
      });
    },
  ],
};

function Field(props: FormFieldProps): React.JSX.Element {
  const {
    path,
    value,
    engine,
    useSubscription,
  } = props;
  const [fading, setFading] = React.useState(0);
  const { steps, variables } = useSubscription<FormState>('state');

  React.useEffect(() => {
    if (variables.zip !== undefined) {
      setFading(1);
      setTimeout(() => {
        setFading(2);
      }, 500);
    }
  }, [variables.zip]);

  if (path === 'success.1.content') {
    if (fading !== 2) {
      return (
        <div className={`loader ${fading === 1 ? 'loader--fading' : ''}`}>
          <svg className="svg-def" style={{ display: 'none' }}>
            <defs>
              <filter id="strokeGlow">
                <feOffset in="StrokePaint" result="centeredOffset" />
                <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1" />
                <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2" />
                <feGaussianBlur in="centeredOffset" stdDeviation="7" result="blur3" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur3" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 H80 V80 H20 V20" stroke="#E212A7" strokeWidth="2" strokeLinecap="round" className="loader__path" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      );
    }
    return (
      <div className="content">
        <h3>Your project is ready 🚀</h3>
        <div>
          <p>❤️ Love our work? Show your support by:</p>
          <ul>
            <li>
              🌍 Joining our
              {' '}
              <a href="https://discord.com/invite/jsWCRMqM2K" rel="noreferrer" target="_blank">Discord</a>
            </li>
            <li>
              🌟 Giving us a star on
              {' '}
              <a href="https://github.com/openizr/perseid" rel="noreferrer" target="_blank">GitHub</a>
            </li>
            <li>
              🪐
              {' '}
              <a href="https://github.com/sponsors/openizr" rel="noreferrer" target="_blank">Sponsoring</a>
              {' '}
              Perseid
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => {
            const a = document.createElement('a');
            a.href = `data:application/zip;base64,${(variables as { zip: string; }).zip}`;
            a.download = 'MyAwesomePerseidApp.zip';
            a.click();
          }}
        >
          Download
        </button>
      </div>
    );
  }

  if (path === 'root.0.database') {
    return (
      <div className="database">
        <h3>
          Choose a
          {' '}
          <strong>database</strong>
        </h3>
        <div>
          {['mongodb', 'mysql', 'postgresql'].map((database) => (
            <label htmlFor={database} key={database} className={`database__option ${value === database ? 'database__option--selected' : ''}`}>
              <input
                name={path}
                id={database}
                value={database}
                className=""
                type="radio"
                tabIndex={0}
                onChange={(e) => {
                  engine.userAction({ type: 'input', path, data: e.target.value });
                }}
              />
              <img src={logos[database] as string} alt={database} />
              <span>{labels[database]}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (path === 'root.0.server') {
    return (
      <div className="server">
        <h3>
          Pick a
          {' '}
          <strong>server</strong>
        </h3>
        <div>
          {['express', 'fastify'].map((server) => (
            <label htmlFor={server} key={server} className={`server__option ${value === server ? 'server__option--selected' : ''}`}>
              <input
                name={path}
                id={server}
                value={server}
                className=""
                type="radio"
                tabIndex={0}
                onChange={(e) => {
                  engine.userAction({ type: 'input', path, data: e.target.value });
                }}
              />
              <img src={logos[server] as string} alt={server} />
              <span>{labels[server]}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (path === 'root.0.ui') {
    return (
      <div className="ui">
        <h3>
          Select a
          {' '}
          <strong>ui</strong>
        </h3>
        <div>
          {['react', 'vue', 'svelte'].map((ui) => (
            <label htmlFor={ui} key={ui} className={`ui__option ${value === ui ? 'ui__option--selected' : ''}`}>
              <input
                name={path}
                id={ui}
                value={ui}
                className=""
                type="radio"
                tabIndex={0}
                onChange={(e) => {
                  engine.userAction({ type: 'input', path, data: e.target.value });
                }}
              />
              <img src={logos[ui] as string} alt={ui} />
              <span>{labels[ui]}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  // path === 'root.0.submit'
  return (
    <button
      type="submit"
      className={`submit ${steps[0].status !== 'success' ? 'submit--disabled' : ''}`}
      onClick={() => {
        engine.userAction({ type: 'input', path, data: true });
      }}
    >
      Create
    </button>
  );
}

(window as Window & typeof globalThis & { mountForm: () => void; }).mountForm = (): void => {
  const container = document.querySelector('.hero__form') as unknown as HTMLElement;
  const app = createRoot(container);
  app.render(<Form Field={Field} configuration={formConfiguration} />);
};
