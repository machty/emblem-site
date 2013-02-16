# Emblem.JS Website

This is the website docs that power <http://emblemjs.com>. For the emblem.js src code go to [github.com/machty/emblem.js](http://github.com/machty/emblem.js).

Forks and contributions to the docs greatly appreciated!

## Setup

To manage the docs website, we use [middleman](http://middlemanapp.com), a fantastic little rubygem that compiles static sites.

To use it, just clone this repo, and make sure you have bundler installed (`gem install bundler`).

run `bundle install` to get all the dependencies.

then run `bundle exec middleman server` to start the server locally

On OSX, you can also try `bundle exec terminitor start` to start both the server and the guard at the same time (to do livereload updates as you change stuff).


## Site Structure

We currently have most of our docs in yml (for easy code highlighting support). The `docs` keys are formatted with `markdown`, `emblem` keys syntax highlighted with slim textmate bundle (using the `ultraviolet` gem), and the html is highlighted with the handlebars textmate bundle.

To tweak the syntax highlighting, send me a pull request here: <https://github.com/railsjedi/textpow>. Forking textpow was the only way I could figure out how to easily add new syntaxes.


### Intro docs

To edit the intro example on the right side of the landing page, edit `data/intro.yml`.


### Syntax docs

To update the syntax docs, edit `data/syntax.yml`


### Installation docs

To update the installation docs, edit `data/installation.yml`

