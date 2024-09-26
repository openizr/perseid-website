/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // conceptsSidebar: [{ type: 'autogenerated', dirName: 'concepts' }],
  // tutorialSidebar: [{ type: 'autogenerated', dirName: 'tutorial' }],
  learnSidebar: [
    {
      type: 'category',
      label: 'Quick start',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: "learn/intro",
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: "learn/step-1",
          label: 'It all starts with a data model',
        },
        {
          type: 'doc',
          id: "learn/step-2",
          label: 'Setting up the back-end',
        },
        {
          type: 'doc',
          id: "learn/step-3",
          label: 'Setting up the front-end',
        },
        {
          type: 'doc',
          id: "learn/step-4",
          label: 'Bonus: setting up a job scheduler',
        },
        {
          type: 'doc',
          id: "learn/step-5",
          label: 'Customizing your app',
        },
      ],
    },
  ],
  docsSidebar: [
    {
      type: 'doc',
      id: "index",
      label: 'Overview',
    },
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: "ui/components/title",
    //       label: 'Title',
    //     },
    //   ]
    // },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/dev-kit</span>',
    },
    {
      type: 'doc',
      id: "dev-kit/introduction",
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: "dev-kit/commands",
      label: 'Commands',
    },
    {
      type: 'doc',
      id: "dev-kit/configuration",
      label: 'Configuration',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<hr />',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/core</span>',
    },
    {
      type: 'doc',
      id: "core/introduction",
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: "core/helpers",
      label: 'Helpers',
    },
    {
      type: 'category',
      label: 'Classes',
      items: [
        {
          type: 'doc',
          id: "core/classes/Id",
          label: 'Id',
        },
        {
          type: 'doc',
          id: "core/classes/I18n",
          label: 'I18n',
        },
        {
          type: 'doc',
          id: "core/classes/Logger",
          label: 'Logger',
        },
        {
          type: 'doc',
          id: "core/classes/Model",
          label: 'Model',
        },
      ]
    },
    // {
    //   type: 'html',
    //   defaultStyle: true,
    //   value: '<hr />',
    // },
    // {
    //   type: 'html',
    //   defaultStyle: true,
    //   value: '<span class="menu__list-item--header">@perseid/server</span>',
    // },
    // {
    //   type: 'doc',
    //   id: "ui/introduction",
    //   label: 'Introduction',
    // },
    // {
    //   type: 'doc',
    //   id: "ui/helpers",
    //   label: 'Concepts',
    // },
    // {
    //   type: 'category',
    //   label: 'Services',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: "ui/components/title",
    //       label: 'Title',
    //     },
    //   ]
    // },
    {
      type: 'html',
      defaultStyle: true,
      value: '<hr />',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/jobs</span>',
    },
    {
      type: 'doc',
      id: "jobs/concepts",
      label: 'Concepts',
    },
    {
      type: 'category',
      label: 'Core services',
      items: [
        {
          type: 'doc',
          id: "jobs/core-services/DatabaseClient",
          label: 'DatabaseClient',
        },
        {
          type: 'doc',
          id: "jobs/core-services/JobScheduler",
          label: 'JobScheduler',
        },
      ]
    },
    {
      type: 'category',
      label: 'Connectors',
      items: [
        {
          type: 'doc',
          id: "jobs/connectors/MongoDB",
          label: 'MongoDB',
        },
        {
          type: 'doc',
          id: "jobs/connectors/MySQL",
          label: 'MySQL',
        },
        {
          type: 'doc',
          id: "jobs/connectors/PostgreSQL",
          label: 'PostgreSQL',
        },
      ]
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<hr />',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/store</span>',
    },
    {
      type: 'doc',
      id: "store/concepts",
      label: 'Concepts',
    },
    {
      type: 'doc',
      id: "store/best-practices",
      label: 'Best practices',
    },
    {
      type: 'doc',
      id: "store/complete-example",
      label: 'Complete example',
    },
    {
      type: 'doc',
      id: "store/store",
      label: 'Store',
    },
    {
      type: 'doc',
      id: "store/connectors",
      label: 'Connectors',
    },
    {
      type: 'doc',
      id: "store/extensions",
      label: 'Extensions',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<hr />',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/ui</span>',
    },
    // {
    //   type: 'doc',
    //   id: "ui/introduction",
    //   label: 'Introduction',
    // },
    {
      type: 'doc',
      id: "ui/helpers",
      label: 'Helpers',
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'doc',
          id: "ui/components/title",
          label: 'Title',
        },
        {
          type: 'doc',
          id: "ui/components/paragraph",
          label: 'Paragraph',
        },
        {
          type: 'doc',
          id: "ui/components/icon",
          label: 'Icon',
        },
        {
          type: 'doc',
          id: "ui/components/link",
          label: 'Link',
        },
        {
          type: 'doc',
          id: "ui/components/button",
          label: 'Button',
        },
        {
          type: 'doc',
          id: "ui/components/image",
          label: 'Image',
        },
        {
          type: 'doc',
          id: "ui/components/options",
          label: 'Options',
        },
        {
          type: 'doc',
          id: "ui/components/textfield",
          label: 'Textfield',
        },
        {
          type: 'doc',
          id: "ui/components/textarea",
          label: 'Textarea',
        },
        {
          type: 'doc',
          id: "ui/components/tooltip",
          label: 'Tooltip',
        },
        {
          type: 'doc',
          id: "ui/components/filepicker",
          label: 'FilePicker',
        },
      ]
    },
    {
      type: 'category',
      label: 'Styling',
      items: [
        {
          type: 'doc',
          id: "ui/styling/configuration",
          label: 'Configuration',
        },
        {
          type: 'doc',
          id: "ui/styling/mixins",
          label: 'Mixins',
        },
        {
          type: 'doc',
          id: "ui/styling/classes",
          label: 'Classes',
        },
        {
          type: 'doc',
          id: "ui/styling/templates",
          label: 'Templates',
        },
        {
          type: 'doc',
          id: "ui/styling/placeholders",
          label: 'Placeholders',
        },
      ]
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<hr />',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: '<span class="menu__list-item--header">@perseid/form</span>',
    },
    {
      type: 'doc',
      id: "form/concepts",
      label: 'Concepts',
    },
    {
      type: 'doc',
      id: "form/engine",
      label: 'Engine',
    },
    {
      type: 'doc',
      id: "form/connectors",
      label: 'Connectors',
    },
    {
      type: 'doc',
      id: "form/plugins",
      label: 'Plugins',
    },
  ],
};

export default sidebars;
