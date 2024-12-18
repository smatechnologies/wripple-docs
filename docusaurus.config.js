/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'Wripple Help',
  tagline: 'Get Help on Wripple',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/wripple/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'wripple-docs',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'images/logo.svg',
        href: 'https://help.smatechnologies.com',
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
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
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
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7XYMFXX81Y',
          anonymizeIP: false,
        },
      },
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
//    [
//      require.resolve('@cmfcmf/docusaurus-search-local'), 
//      {
//      }
//    ],
  ],
};

export default config;