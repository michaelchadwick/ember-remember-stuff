'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
    },
    '@embroider/macros': {
      setConfig: {
        'ember-qunit': {
          theme: 'ember',
        },
      },
    },
  });

  return app.toTree();
};
