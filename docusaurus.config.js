// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Perseid',
  tagline: 'Prototype and build full-stack, production-ready web apps in minutes',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://perseid.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_eduF3rSaUChsGCQn28Rp9MTL4vaxQtQXjNxt491nR91",
        appUrl: "https://eu.i.posthog.com",
        enableInDevelopment: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/openizr/perseid-website/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossorigin: 'true',
        href: 'https://fonts.gstatic.com/s/oxygen/v15/2sDfZG1Wl4LcnbuKjk0m.woff2',
      },
    },
    {
      tagName: 'link',
      attributes: {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossorigin: 'true',
        href: 'https://fonts.gstatic.com/s/orbitron/v31/yMJRMIlzdpvBhQQL_Qq7dy0.woff2',
      },
    },
    {
      tagName: 'link',
      attributes: {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossorigin: 'true',
        href: 'https://fonts.gstatic.com/s/oxygen/v15/2sDcZG1Wl4LcnbuCJW8zaGW5.woff2',
      },
    },
    {
      tagName: 'link',
      attributes: {
        as: 'font',
        rel: 'preload',
        type: 'font/woff2',
        crossorigin: 'true',
        href: 'https://fonts.gstatic.com/s/oxygen/v15/2sDcZG1Wl4LcnbuCNWgzaGW5.woff2',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        crossorigin: 'true',
        href: 'https://fonts.gstatic.com',
      },
    },
    {
      tagName: 'script',
      attributes: {
        defer: 'defer',
        type: 'module',
        crossOrigin: 'true',
        src: '/js/index.B6AT2xE0.js',
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        sizes: '16x16',
        href: '/img/favicon-16x16.20240831.png',
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        sizes: '32x32',
        href: '/img/favicon-32x32.20240831.png',
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-icon-180x180.20240831.png',
      }
    },
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Perseid',
        url: 'https://perseid.dev',
        logo: 'https://perseid.dev/img/social-card.20240831.png',
        sameAs: []
      }),
    },
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    algolia: {
      // The application ID provided by Algolia
      appId: '6ZQL7E992S',

      // Public API key: it is safe to commit it
      apiKey: 'a66d9df42f9ccb669daf9bab66e83900',

      indexName: 'perseid',

      // Optional: see doc section below
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/social-card.20240831.png',
    metadata: [
      { name: 'keywords', content: 'front-end,back-end,prototype,javascript,typescript,product,production-ready,framework,web,app' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Perseid' },
    ],
    navbar: {
      title: 'Perseid',
      logo: {
        alt: 'Perseid logo',
        src: 'img/logo.20240831.svg',
      },
      items: [
        {
          type: 'search',
          position: 'left',
        },
        {
          label: 'Docs',
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'docsSidebar',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'right',
          label: 'Learn',
        },
        {
          to: '/blog/introducing-perseid-the-product-oriented-javascript-framework',
          position: 'right',
          label: 'Why',
        },
        {
          to: '/examples',
          position: 'right',
          label: 'Examples',
        },
        {
          href: 'https://github.com/sponsors/openizr',
          position: 'right',
          label: 'Sponsor',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/openizr/perseid',
          position: 'right',
        },
        {
          href: 'https://discord.gg/jsWCRMqM2K',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Learn',
              to: '/docs/learn/intro',
            },
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Examples',
              to: '/examples',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/perseid',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/jsWCRMqM2K',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/openizr/perseid',
            },
            // {
            //   label: 'Blog',
            //   href: 'https://github.com/openizr/perseid',
            // },
          ],
        },
      ],
      copyright: `Made with ❤️ in Toulouse, France.<br/>Released under the MIT License.<br/>Copyright (c) ${new Date().getFullYear()} Openizr`,
    },
    prism: {
      theme: prismThemes.dracula,
    },
  },
};

export default config;
