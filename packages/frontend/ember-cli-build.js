'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const config = {
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
        ...require('ember-cli-code-coverage').buildBabelPlugin(),
      ],
    },
    sassOptions: {
      extension: 'scss',
      silenceDeprecations: ['mixed-decls'],
    },
    '@embroider/macros': {
      setConfig: {
        'ember-qunit': {
          theme: 'ember',
        },
      },
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'lib/images/favicon-dev.png',
          outputFileName: 'favicon-dev',
          convertTo: 'png',
          sizes: [16, 32, 48, 96, 150, 512],
        },
        {
          inputFilename: 'lib/images/favicon-prod.png',
          outputFileName: 'favicon-prod',
          convertTo: 'png',
          sizes: [16, 32, 48, 96, 150, 512],
        },
      ],
    },
    autoImport: {
      watchDependencies: ['rs-common'],
    },
  };

  const app = new EmberApp(defaults, config);

  return app.toTree();
};
