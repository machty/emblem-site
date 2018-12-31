const code = [
  {
    title: 'Handlebars Expressions',
    docs: `
      To output a handlebars expression, use \`=\` before an expression.

      **NOTE:** You have the option to omit the \`=\` unless the expression begins with a [known HTML5 tag name](https://developer.mozilla.org/en-US/docs/HTML/HTML5/HTML5_element_list).
    `,
    emblem: `
      h1 = name
      p
        = intro
        = highlight name
    `,
    link: 'mustache/handlebars-expressions'
  },
  {
    title: 'Handlebars Helpers',
    docs: `
      You can embed Handlebars within strings or text by wrapping it in mustache tags \`{{}}\` and \`{{{}}}\`. You can also use \`#{}\` as an alias for \`{{}}\`.
    `,
    emblem: `
      span.name Your name is {{name}}
                and my name is #{author}

      input value='My name is #{ name }'
    `,
    link: 'mustache/handlebars-helpers'
  },
  {
    title: 'HTML Attributes',
    docs: `
      Bound HTML attributes can be added to either an HTML Element or Ember component using \`key=value\` pairs.

      Emblem will concatenate similar attributes.  For example, if you use the dot notation for a \`div\`'s class, and bind \`class={\`, these will both work.
    `,
    emblem: `
      img src=logoUrl alt="Logo"

      button.close data-dismiss="modal" x

      div.foo class=activeClass

      / For Vanilla Handlebars mode only
      button class="large {{foo}}" x
    `,
    link: 'mustache/html-attributes'
  },
  {
    title: 'Complex expressions',
    docs: `
      Frequently you will be assigning complex expressions to either an HTML element or a component.  With Emblem these contexts can look very similar.  However, they are very different contexts for the generated handlebars.  For HTML elements (or Glimmer components), the values are wrapped in mustache \`{{ }}\`, but for components or handlebars expressions the value is already inside the mustache.

      Emblem enforces this distinction by using a slightly different syntax.  For HTML expressions be sure to wrap them in a single stash \`{ }\`.  For components / mustache expressions, use \`( )\`.  This holds true as well for bracketed params.
    `,
    emblem: `
      a href={ generate-link foo.bar } Click!

      = my-component value=(generate-link foo.bar)
        |Click!

      a [
        href={ generate-link foo.bar }
      ]
        |Click!

      = my-component [
        value=(generate-link foo.bar)
      ]
        |Click!
    `
  },
  {
    title: 'Multi-line parameters',
    docs: `
      As with HTML elements, mustache expressions support the \`[]\` syntax for multi-line parameters.

      **NOTE:** It is required that all paremeters are inside of the blocks.
    `,
    emblem: `
      = my-component [
        alertable
        class='alert'
      ]
        span Click me!
    `,
    link: 'mustache/multi-line-parameters'
  },
  {
    title: 'Unescaped Expressions',
    docs: `
      By default Handlebars html escapes output from expressions. To include html without escaping, use \`==\` which will output Handlebars "triple-stash" expressions \`{{{}}}\`.
      `,
    emblem: `
      body
        == outlet
    `,
    link: 'mustache/unescaped-expressions'
  },
  {
    title: 'In-Tag Mustache',
    docs: `
      Occasionally, you'll want to add custom mustache, either inside the opening tag of an HTML5 element or as an assignment for an attribute. You can do this by immediately following the tag content with a single curly brace.

      **NOTE:** It is required that the opening \`{\` immedaitely follow the element without any whitespace.
    `,
    emblem: `
      span.some-class{ someHelper } Hello

      button{ action 'delete' } Delete

      button name={ capitalize-string model.name } Delete
    `,
    link: 'mustache/in-tag-mustache'
  },
  {
    title: 'Class shorthand',
    docs: `
      Emblem supports the  \`.\` helper for mustache statements, and this opperates in a similar way to the \`.\` helper for HTML elements.
    `,
    emblem: `
      = my-component .foo

      = other-component .foo class='bar'
    `,
    link: 'mustache/class-shorthand'
  },
  {
    title: 'Block Statements',
    docs: `
      Handlebars block statements follow a syntax similar to HTML5 elements.  Indented content on the lines below get wrapped in the block form of the helper.

      Block helpers with only text content can be succinctly written on a single line using a \`|\` pipe to separate the helper code from the text.
    `,
    emblem: `
      = link-to "home"
        | Link Text

      = if something
        p Something!
      = else
        p Something else!
    `,
    link: 'mustache/block-statements'
  },
  {
    title: 'Conditionals',
    docs: `
      Conditionals are a subset of block expressions and support all of the Handlebars / Ember expressions (e.g. \`else if\`, \`unless\`, \`each\`, etc.).
    `,
    emblem: `
      = if isActive
        .item Active
      = else
        .item Inactive

      = unless isActive
        .item Inactive
      = else
        .item Active
    `,
    link: 'mustache/conditionals'
  },
  {
    title: 'Conditional Shorthand',
    docs: `
      Emblem provides a simple helper \`?\` for writing short conditionals
    `,
    emblem: `
      = isActive?
        span Active!
      = else
        span Not Active
    `,
    link: 'mustache/conditional-shorthand'
  },
  {
    title: 'Nested Conditionals',
    docs: `
      Conditionals can be nested, however pay attention to your nesting to make sure everything lines up correctly.
    `,
    emblem: `
      = if firstThing
        .item First
      = else if secondThing
        .item Second
      = else if otherThing
        .item
          = if isBlue
            p Blue
          = else
            p NotBlue
      = else
        .item Unknown
    `,
    link: 'mustache/conditionals'
  },
  {
    title: 'each/else',
    docs: `
      This isn't strictly an Emblem pattern, but keep in mind that the \`each\` helper accepts an optional \`else\` portion that will be displayed when the list is empty or nonexistent.
    `,
    emblem: `
      = each things
        p = name
      = else
        p There are no things!

      = my-component
        p Foo
      = else
        p Bar
    `
  }
];

export default code;
