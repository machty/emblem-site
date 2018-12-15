'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    babel: {
      plugins: [
        '@babel/plugin-transform-async-to-generator'
      ],
    },

    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },
  });

  // app.import('node_modules/prettier/standalone.js', {
  //   using: [
  //     { transformation: 'amd', as: 'prettier' }
  //   ]
  // });
  // app.import('node_modules/prettier/parser-glimmer.js', {
  //   using: [
  //     { transformation: 'amd', as: 'prettier-glimmer' }
  //   ]
  // });

  return app.toTree();
};
