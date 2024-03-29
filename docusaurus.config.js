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

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/social-card.png',
    metadata: [
      { name: 'keywords', content: 'front-end,back-end,prototype,javascript,typescript,framework,web,app' },
    ],
    // headTags: [
    //   // Declare a <link> preconnect tag
    //   {
    //     tagName: 'link',
    //     attributes: {
    //       rel: 'preconnect',
    //       href: 'https://example.com',
    //     },
    //   },
    //   // Declare some json-ld structured data
    //   {
    //     tagName: 'script',
    //     attributes: {
    //       type: 'application/ld+json',
    //     },
    //     innerHTML: JSON.stringify({
    //       '@context': 'https://schema.org/',
    //       '@type': 'Organization',
    //       name: 'Meta Open Source',
    //       url: 'https://opensource.fb.com/',
    //       logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
    //     }),
    //   },
    // ],
    navbar: {
      title: 'Perseid',
      logo: {
        alt: 'Perseid logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'conceptsSidebar',
        //   position: 'left',
        //   label: 'Concepts',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/openizr/perseid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API',
              to: '/docs/api/dev-kit/config',
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
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
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
          ],
        },
      ],
      copyright: `Released under the MIT License.<br/>Copyright (c) ${new Date().getFullYear()} Openizr.`,
    },
    prism: {
      theme: prismThemes.dracula,
    },
  },
};

export default config;
