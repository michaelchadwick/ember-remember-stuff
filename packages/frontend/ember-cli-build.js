'use strict';
/* eslint camelcase: 0 */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = async function (defaults) {
  const env = EmberApp.env() || 'development';
  const isTestBuild = env === 'test';

  const config = {
    // fingerprint: {
    //   extensions: broccoliAssetRevDefaults.extensions.concat(['webmanifest', 'svg']),
    // },

    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    hinting: isTestBuild,
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
        ...require('ember-cli-code-coverage').buildBabelPlugin(),
      ],
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
    'ember-cli-qunit': {
      useLintTree: false,
    },
    autoImport: {
      // adding insertScriptsAt breaks things for this app -_-
      // insertScriptsAt: 'auto-import-scripts',
      watchDependencies: ['rs-common'],
    },
    // 'ember-simple-auth': {
    //   useSessionSetupMethod: true, //can be removed in ESA v5.x
    // },
    // minifyCSS: {
    //   enabled: false,
    // },
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
  };

  const app = new EmberApp(defaults, config);

  const { setConfig } = await import('@warp-drive/build-config');
  setConfig(app, __dirname, {
    // compatWith: '5.2',
    // deprecations: {
    //   DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
    // },
    ___legacy_support: true,
  });

  const embroiderOptions = {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticInvokables: true,
    // splitAtRoutes: [
    //   /about/,
    //   /contact/,
    //   /debuggery/,
    //   // 'error', don't ever split the error route, it will break error handling
    //   /links/,
    //   /messages/,
    //   /music/,
    // ], disabled until https://github.com/embroider-build/embroider/issues/231 once again allows our loading routes to work
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
