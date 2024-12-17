'use strict';
/* eslint camelcase: 0 */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
// const { RetryChunkLoadPlugin } = require('webpack-retry-chunk-load-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = async function (defaults) {
  const env = EmberApp.env() || 'development';
  const isTestBuild = env === 'test';

  const config = {
    // fingerprint: {
    //   extensions: broccoliAssetRevDefaults.extensions.concat(['webmanifest', 'svg']),
    // },
    // emberData: {
    //   compatWith: '5.2',
    // },

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
      // insertScriptsAt: 'auto-import-scripts',
      watchDependencies: ['rs-common'],
    },
    // 'ember-fetch': {
    //   preferNative: true,
    // },
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
    ___legacy_support: true,
  });

  // const embroiderOptions = {
  //   staticAddonTestSupportTrees: true,
  //   staticAddonTrees: true,
  //   staticHelpers: true,
  //   staticComponents: true,
  //   splitAtRoutes: [
  //     /about/,
  //     /contact/,
  //     /debuggery/,
  //     // 'error', don't ever split the error route, it will break error handling
  //     /links/,
  //     /messages/,
  //     /music/,
  //   ],
  //   packagerOptions: {
  //     webpackConfig: {
  //       plugins: [new RetryChunkLoadPlugin() /*, new BundleAnalyzerPlugin()*/],
  //       devtool: env === 'production' ? 'source-map' : 'eval',
  //       optimization: {
  //         minimize: true,
  //         minimizer: [
  //           new TerserPlugin({
  //             terserOptions: {
  //               compress: {
  //                 passes: 6, // slow, but worth it
  //                 inline: 5,
  //                 reduce_funcs: false,
  //               },
  //             },
  //           }),
  //         ],
  //       },
  //     },
  //   },
  // };

  return require('@embroider/compat').compatBuild(app, Webpack);
};
