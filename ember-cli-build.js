'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const path = require('path');
const mergeTrees = require('broccoli-merge-trees');

/**
 * Taken from ember-cli-foundation-6-sass
*/
function importFoundation() {
  const base = require.resolve('foundation-sites');
  const foundationPath = path.resolve(base, '../../..');
  const foundationFunnel = mergeTrees([
    new Funnel(foundationPath, {
      include: ['_vendor/**/*']
    }),
    new Funnel(path.join(foundationPath, 'scss'), {
      destDir: 'foundation-sites',
      include: ['**/*']
    })
  ]);

  return foundationFunnel;
}

module.exports = function(defaults) {
  const foundation = importFoundation();
  const app = new EmberApp(defaults, {
    babel: {
      plugins: [
        '@babel/plugin-transform-async-to-generator'
      ],
    },
    sassOptions: {
      includePaths: [
        foundation
      ]
    }
  });

  app.import('vendor/prism.js');
  app.import('vendor/prism.css');
  app.import('vendor/prism-markup-templating.js');
  app.import('vendor/prism-handlebars.js');

  return app.toTree();
};
