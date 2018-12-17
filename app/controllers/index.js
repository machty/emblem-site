import Controller from '@ember/controller';

export default class IndexController extends Controller {
  introCode = `
    p Introducing Emblem.js: a new templating language
      that compiles to Handlebars.js

    ul
      li Indentation-based (like Slim, HAML, etc.)
      li Compiles to Handlebars; full compatibility with
        both custom and built-in Handlebars helpers
      li Ember.js-friendly syntax and full compatibility
        with auto-updating functionality.

    / Emblem is HTML5-aware; Render HTML if a line starts with
      known HTML tag, else invoke HB helper or perform property lookup.
      These defaults are easily overridable when necessary.
    ul
      = each people as |person|
        li = person.name

    section.ember-features
      / easy, natural Ember bindAttr support
      h1 class=foo The class name of this element is bound to 'foo'
      p class={ isActive 'flashing' 'inactive' } A more complicated example

      / implicit Ember action handlers
      a click={ action 'doIt' } href="#" Hello

    / render Glimmer components
    %MyComponent @text="Hello World"
  `
}
