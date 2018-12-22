# Emblem.JS Website

This is the website docs that power <http://emblemjs.com>. For the emblem.js src code go to [github.com/machty/emblem.js](http://github.com/machty/emblem.js).

Forks and contributions to the docs greatly appreciated!

## Setup

This is a basic Ember-CLI app.  To run in development, simply:

```
yarn install
ember s
```


## Site Structure

Site docs are stored in `app/docs` as POJO's.  There are some common keys that will affect how the document is rendered:
- title: appears at the top of the section
- docs: appears at the left of the section (Markdown syntax supported)
- emblem: will appear on the right with an emblem/handlebars tool
- shell: will render the code on the right as plain code
- instructions: will render on the right as Markdown

The syntax highlighting is accomplished through PrismJS.  The site currently uses the handlebars prebuilt markup, as well as a semi-custom markup for Emblem.  This can be customized in app/lib/emblem
