'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      plugins: [
        require.resolve('ember-auto-import/babel-plugin'),
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
  },

  treeForAddonTestSupport(tree) {
    // intentionally not calling _super here
    // so that we can have our `import`'s be
    // import { ... } from 'rs-common';

    return this.preprocessJs(tree, '/', this.name, {
      registry: this.registry,
    });
  },
};
