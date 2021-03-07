const path = require('path');

module.exports = () => {
  return {
    title: 'Eggplore UI',
    description: '练手的UI库',
    themeConfig: {
      sidebar: [
        {
          title: 'Basic',
          children: ['/basic/button']
        }
      ],
      displayAllHeaders: true,
    },
    plugins: ['demo-container'],
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
  };
};
