'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    babel: {
      plugins: [
        '@babel/plugin-transform-async-to-generator'
      ],
    },

    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },
  });

  app.import('vendor/prism.js');
  app.import('vendor/prism.css');
  app.import('vendor/prism-markup-templating.js');
  app.import('vendor/prism-handlebars.js');

  return app.toTree();
};
