(function (Prism) {
  // TODO:
  // - Add CSS highlighting inside <style> tags
  // - Add support for multi-line code blocks
  // - Add support for interpolation #{} and !{}
  // - Add support for tag interpolation #[]
  // - Add explicit support for plain text using |
  // - Add support for markup embedded in plain text

  Prism.languages.emblem = {
    // component

    // Multiline stuff should appear before the rest

    // This handles both single-line and multi-line comments
    'comment': {
      pattern: /(^([\t ]*))\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
      lookbehind: true
    },

    'variable': {
      pattern: /(=\s)(([a-z]|[A-Z]|\-|)+\.([a-z]|[A-Z]|\-|)+)+/g,
      alias: 'attr-value',
      lookbehind: true,
      greedy: true
    },

    'keyword': {
      pattern: /\sas|each|if|unless|else|query-params|action|mut\s/,
      greedy: true
    },

    'component': {
      pattern: /(=\s)([a-z]|[A-Z]|\-)+/,
      lookbehind: true,
      alias: 'tag'
    },

    'glimmer-component': {
      pattern: /% ?([a-z]|[A-Z]|\-|\:)+/,
      alias: 'tag'
    },

    'mustache double': {
      pattern: /\{\{(\w|\d|\s|'|")+\}\}/,
      alias: 'attr-value'
    },

    'mustache': {
      pattern: /\#?\{(\w|\d|\s|'|")+\}/,
      alias: 'attr-value'
    },

    'attribute-name': {
      pattern: /\s@?([a-z]|\-|[A-Z])+(?==)/,
      alias: 'attr-name'
    },

    'attribute-value-mustache': {
      pattern: /(=)\{([a-z]|\-|\(|\)|\s|\'|\"|\.|[A-Z]|\:)+\}/,
      lookbehind: true,
      alias: 'attr-value',
    },

    'attribute-value': {
      pattern: /(=)([a-z]|\-|\(|\)|[A-Z]|\'|\"| |\:)+/,
      lookbehind: true,
      alias: 'attr-value',
    },

    'attribute-value-string': {
      pattern: /(=)('|").+('|")/,
      lookbehind: true,
      alias: 'attr-value',
    },

    'punctuation': /[.\-!=|]+/
  };

  // Filters stolen from PUG source
  const filter_pattern = '(^([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r(?!\\n))(?:\\2[\\t ]+.+|\\s*?(?=\\r?\\n|\\r)))+';

  // Non exhaustive list of available filters and associated languages
  const filters = [
    { filter: 'atpl', language: 'twig' },
    { filter: 'coffee', language: 'coffeescript' },
    'ejs',
    'handlebars',
    'hogan',
    'less',
    'livescript',
    'markdown',
    'mustache',
    'plates',
    { filter: 'sass', language: 'scss' },
    'stylus',
    'swig'

  ];
  const all_filters = {};

  for (let i = 0, l = filters.length; i < l; i++) {
    let filter = filters[i];

    filter = typeof filter === 'string' ? { filter, language: filter } : filter;

    if (Prism.languages[filter.language]) {
      all_filters[`filter-${ filter.filter }`] = {
        pattern: RegExp(filter_pattern.replace('{{filter_name}}', filter.filter), 'm'),
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          },
          rest: Prism.languages[filter.language]
        }
      };
    }
  }

  Prism.languages.insertBefore('emblem', 'filter', all_filters);
}(Prism));
