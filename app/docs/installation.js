const code = [
  {
    title: 'Ember',
    docs: `
      [ember-cli-emblem](https://github.com/Vestorly/ember-cli-emblem) will automatically parse any of your Emblem templates with either the \`.emblem\` or \`.embl\` extensions into raw handlebars.

      This addon also includes a number of [blueprints](https://github.com/Vestorly/ember-cli-emblem#blueprints).

      **NOTE:** If you are using an older Ember CLI applicatoin, be sure to first remove \`broccoli-emblem-compiler\` before upgrading Emblem.
    `,
    shell: `
      ember install ember-cli-emblem
    `
  },
  {
    title: 'Node',
    docs: `
      Emblem can be imported directly in a Node app.  This can be very useful when incorporating into other backend or build contexts (such as legacy Handlebars).

      **NOTE:** When importing via Node, be sure to wrap the call in a \`try / catch\` statement, as Emblem will throw an exception if it has a compile error.
    `,
    shell: `
      import { compile, VERSION } from 'emblem';

      export default function compileEmblem(template) {
        console.log(\`Compiled with \${ VERSION }\`);

        try {
          return compile(template);
        } catch (e) {
          console.log(\`There was an error compiling template: \${ e.message }\`);
        }
      }
    `
  },
  {
    title: 'CLI',
    docs: `
      Emblem can be used directly from the command line.  This can also be very useful when incorporating into other backend or build contexts (such as legacy Handlebars).
      `,
    shell: `
      // Via bin/emblem.sh

      Options:
      -v, --version  Show the current version.                        [boolean]
      -i, --stdin    Read from STDIN, use argument as template name.  [string]
      -f, --output   Output File                                      [string]
    `
  },
  {
    title: 'Ruby on Rails',
    docs: `
      To install Emblem on a Rails project, just use add the following lines to your \`Gemfile\` and run \`bundle\`.

      Define your templates in \`app/assets/javascripts/templates\` with the file extension \`.emblem\`. These will be automatically compiled and made available as Ember templates. Templates with the \`.raw.emblem\` extension will be compiled as vanilla Handlebars templates.

      For a working sample project, check out: [github.com/machty/emblem-rails-demo](https://github.com/machty/emblem-rails-demo)

      ** NOTE:** Ember versions greater than 3.0 are no longer posted to Rubygems.  It is generally considered best practice to compile your templates at build time and not at request time, so using Emblem directly in Rails is not advised.  Using the above Node approach, it is possible to use a standalone Node app or even a Serverless app for templates that do require realtime generation.
    `,
    shell: `
      # Step 1: edit your application's Gemfile
      gem 'ember-rails'
      gem 'emblem-rails'

      # Optional, use the older pre4 version of ember (the default is rc1)
      #gem 'ember-source', '1.0.0.pre4.2'

      # Step 2: rebundle and restart your dev server
      bundle

      # Step 3: create your .emblem templates in app/assets/javascripts/templates/
    `
  },
  {
    title: 'Brunch.io',
    docs: `
      Emblem is supported in [Brunch.io](http://brunch.io) via the [emblem-brunch](https://github.com/machty/emblem-brunch) plugin.
    `,
    instructions: `
      Follow [these instructions](https://github.com/machty/emblem-brunch) to get started with Brunch.
    `
  },
  {
    title: 'Grunt (and Yeoman)',
    docs: `
      Emblem is supported in [Grunt](http://gruntjs.com) via the [grunt-emblem](https://github.com/wordofchristian/grunt-emblem) plugin.
    `,
    instructions: `
      Follow [these instructions](https://github.com/wordofchristian/grunt-emblem) to get started with Grunt.
    `
  },
  {
    title: 'Mimosa',
    docs: `
      Emblem is supported in [Mimosa](http://mimosajs.com/) since version 0.10.1.
    `,
    instructions: `
      Follow [these instructions](http://mimosajs.com/started.html) to get started with Mimosa.

      Once you're setup, files ending in .emblem or .embl will be compiled as Emblem templates. If you've enabled Ember in your project, they'll be compiled as Ember-ized templates.
    `
  }
];

export default code;


// Old Docs from Emblem README

// ### Compiling in the Browser

// For pre-0.5.0, follow the pattern in [this JSBin](http://jsbin.com/ulegec/337/edit):

// 1. Include Handlebars
// 2. Include Emblem
// 3. Include Ember

// A globals build of Emblem appropriate for JSBins should be completed
// before 0.5.1 is released. See [#212](https://github.com/machty/emblem.js/issues/212).

// ### Via Rails 3.1+

// For pre-0.5.0, add the following to your Gemfile:

// ```
// gem 'emblem-rails'
// ```

// `emblem-rails` presently depends on `ember-rails`. With these
// two gems, any templates ending in `.emblem` will be (pre)compiled
// with Emblem.js.

// Also, check out the [demo app](https://github.com/machty/emblem-rails-demo)
// which uses the above configuration.

// Updates to Emblem syntax do not require an update to `emblem-rails`. To
// update to the latest Emblem, you can run:

// ```
// bundle update emblem-source
// ```

// ### Emblem Build Tools

// Compatible with 0.5.0+:

// 1. [ember-cli-emblem](https://github.com/Vestorly/ember-cli-emblem)
// 2. [gulp-emblem-printer](https://github.com/kay-is/gulp-emblem-printer)

// Compatible with pre-0.5.0:

// 1. [emblem-rails](https://github.com/alexspeller/emblem-rails)
// 2. [barber-emblem](https://github.com/machty/barber-emblem), a
//    Precompilation library for Ruby (used in `ember-rails`)
// 3. [emblem-brunch](https://github.com/machty/emblem-brunch), Emblem
//    support for Brunch.io
// 4. [Mimosa (support for Emblem since v 0.10.1)](https://github.com/dbashford/mimosa)
// 5. [grunt-emblem](https://github.com/wordofchristian/grunt-emblem), Emblem support for Grunt (and Yeoman)
// 6. [gulp-emblem](https://github.com/Aulito/gulp-emblem), Emblem support for gulp
