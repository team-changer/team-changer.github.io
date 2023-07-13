// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trip Draw",
  tagline: "나만의 여행을 스케치하고 공유하다.",
  favicon: "img/favicon.ico",
  url: "https://trip-draw.github.io",
  baseUrl: "/",
  organizationName: "trip-draw",
  projectName: "trip-draw.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
          "https://github.com/trip-draw/trip-draw.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 1,
          editUrl:
            "https://github.com/trip-draw/trip-draw.github.io/tree/main/",
          archiveBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "TripDraw",
        logo: {
          alt: 'TripDraw Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: "/blog", label: "블로그", position: "left" },
          {
            to: '/docs/common', 
            label: '팀', 
            position: 'left'
          },
          {
            to: '/docs/backend', 
            label: '백엔드', 
            position: 'left'
          },
          {
            to: '/docs/android', 
            label: '안드로이드', 
            position: 'left'
          },
          {
            href: "https://github.com/woowacourse-teams/2023-trip-draw",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      algolia: {
        appId: "EDF1AEJ6GO",
        apiKey: "69f97bca21adbea643f3dcf06e4ab510",
        indexName: "gh",
        contextualSearch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "kotlin", "markdown"],
      },
      mermaid: {
        theme: {
          light: 'neutral', 
          dark: 'dark'
        },
      },
    }),
};

module.exports = config;
