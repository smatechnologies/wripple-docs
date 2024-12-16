// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wripple Docs',
  tagline: 'Get help on Wripple - The simplest way to automate your applications',
  favicon: 'img/favicon.ico',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/help',
          routeBasePath: 'help',
          sidebarPath: './sidebars.js'
        },
        blog: {
          blogTitle: "Tutorials",
          blogDescription: "",
          showReadingTime: true,
          path: "tutorials",
          routeBasePath: "tutorials",
          blogSidebarTitle: "Recent tutorials"

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'apps',
        path: 'docs/apps',
        routeBasePath: 'apps',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developers',
        path: 'docs/developers',
        routeBasePath: 'developers',
        sidebarPath: './sidebars.js',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Wripple Docs',
        logo: {
          alt: 'Wripple',
          src: 'images/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'helpSidebar',
            position: 'left',
            label: 'Help',
          },
          {to: '/apps', label: 'Apps', position: 'left'},
          {to: '/tutorials', label: 'Tutorials', position: 'left'},
          {
            href: 'https://smaipaaswebstaging.z21.web.core.windows.net/login',
            label: 'App',
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
                label: 'Help',
                to: '/help',
              },
              {
                label: 'Apps',
                to: '/apps',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'For Developers',
            items: [
              {
                label: 'Developer Docs',
                to: '/developers',
              }
            ],
          },
          {
            title: 'Other Apps from SMA',
            items: [
              {
                label: 'OpCon',
                href: 'https://smatechnologies.com/products-opcon-automation',
              },
              {
                label: 'VisualCron',
                href: 'https://www.visualcron.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'json']
      },
    }),
};

export default config;
