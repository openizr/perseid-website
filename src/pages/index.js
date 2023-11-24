import clsx from 'clsx';
import * as React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {'Bridging Discovery to Delivery'}
        </Heading>
        <p className="hero__subtitle">Prototype and build full-stack, production-ready web apps in minutes</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/api/dev-kit/config">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    window.addEventListener('scroll', function () {
      window.requestAnimationFrame(() => {
        const element = document.querySelector('.navbar');

        if (window.scrollY > 0) {
          element.style.backgroundColor = 'var(--ifm-color-gray-900)';
        } else {
          element.style.backgroundColor = '';
        }
      });
    });
  }, []);

  return (
    <Layout
      title={`Web development coming from Space`}
      description={siteConfig.tagline}
    >
      <div className={styles.dimmer}>
        <span></span>
      </div>
      <HomepageHeader />
      <main>
        <article><div>🚀</div><h2>Rapid Prototyping & Scaling</h2><p>Prototype APIs, data models, and UIs in seconds with simple configurations. Seamlessly scale and customize your stack.</p></article>
        <article><div>🔗</div><h2>Versatile Integration</h2><p>Easily integrate with leading tools like React, Vue, Svelte, Solid, MongoDB, and more for complete front and back-end solutions.</p></article>
        <article><div>🧩</div><h2>Modular Design</h2><p>Independent modules with an easy learning curve, allowing for progressive adoption and integration as per your project needs.</p></article>
        <article><div>📘</div><h2>TypeScript Support</h2><p>Full TypeScript support, ensuring robust, type-safe development for complex and large-scale applications.</p></article>
        <article><div>🛠️</div><h2>Customizable Features</h2><p>Tailor features to your project's needs, ensuring flexibility and efficiency in development and deployment.</p></article>
        <article><div>📈</div><h2>Scalable Codebase</h2><p>Designed for scalability - expand your codebase without compromising on performance or maintainability.</p></article>
      </main>
    </Layout>
  );
}
