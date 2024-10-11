'use strict';
/* eslint camelcase: 0 */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = async function (defaults) {
  const env = EmberApp.env() || 'development';
  const isTestBuild = env === 'test';

  const config = {
    hinting: isTestBuild,
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
      insertScriptsAt: 'auto-import-scripts',
      watchDependencies: ['rs-common'],
    },
  };

  const app = new EmberApp(defaults, config);

  const { setConfig } = await import('@warp-drive/build-config');
  setConfig(app, __dirname, {
    ___legacy_support: true,
  });

  const embroiderOptions = {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitAtRoutes: [
      /about/,
      /contact/,
      /debuggery/,
      // 'error', don't ever split the error route, it will break error handling
      /links/,
      /messages/,
      /music/,
    ],
    packagerOptions: {
      webpackConfig: {
        plugins: [new RetryChunkLoadPlugin() /*, new BundleAnalyzerPlugin()*/],
        devtool: env === 'production' ? 'source-map' : 'eval',
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  passes: 6, // slow, but worth it
                  inline: 5,
                  reduce_funcs: false,
                },
              },
            }),
          ],
        },
      },
    },
  };

  return require('@embroider/compat').compatBuild(app, Webpack, embroiderOptions);
};
