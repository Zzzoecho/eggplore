const path = require('path');

module.exports = () => {
  return {
    title: 'Hello Eggplore',
    description: 'UI',
    configureWebpack: {
      resolve: {
        alias: {
          '@packages': path.resolve(__dirname, '../../packages'),
        },
      },
    },
    sass: {
      options: {
        additionalData: '@import "@packages/assets/styles/variables.scss";@import "@packages/assets/styles/reset.scss";',
      },
    },
    plugins: [
      '@vuepress/register-components',
      {
        componentsDir: '../../packages',
        components: [
          {
            name: 'egg-button',
            path: '../../packages/Button/src/Button',
          },
        ],
      },
    ],
  };
};
