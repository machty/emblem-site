const yaml = `
-
  title: Handlebars Expressions

  docs: |
    To output a handlebars expression, use \`=\` before an expression.

    **NOTE:** You have the option to omit the \`=\` unless the expression begins with a [known HTML5 tag name](https://developer.mozilla.org/en-US/docs/HTML/HTML5/HTML5_element_list).

  emblem: |
    h1 = name
    p
      = intro
      = highlight name


-
  title: HTML Attributes

  docs: |
    Bound HTML attributes can be added to either an HTML Element or Ember component using \`key=value\` pairs.

    Emblem will concatenate similar attributes.  For example, if you use the dot notation for a \`div\`'s class, and bind \`class={\`, these will both work.

  emblem: |
    img src=logoUrl alt="Logo"

    button.close data-dismiss="modal" x

    div.foo class=activeClass

    / For Vanilla Handlebars mode only
    button class="large {{foo}}" x


-
  title: Unescaped Expressions

  docs: |
    By default Handlebars html escapes output from expressions. To include html without escaping, use \`==\` which will output Handlebars "triple-stash" expressions \`{{{}}}\`.

  emblem: |
    body
      == outlet


-
  title: In-Tag Mustache

  docs: |
    Occasionally, you'll want to add custom mustache, either inside the opening tag of an HTML5 element or as an assignment for an attribute. You can do this by immediately following the tag content with a single curly brace.

  emblem: |
    span.some-class{ someHelper } Hello

    button{ action 'delete' } Delete

    button name={ capitalize-string model.name } Delete


-
  title: Handlebars Block Helpers

  docs: |
    Handlebars block statements follow a syntax similar to HTML5 elements.  Indented content on the lines below get wrapped in the block form of the helper.

    Block helpers support Ember's block param syntax \`as |item index|\`.

    Block helpers with only text content can be succinctly written on a single line using a \`|\` pipe to separate the helper code from the text.

    To use a block helper with the same name as an HTML5 element, you can explicitly use a handlebars block helper by starting the line with \`=\`.

  emblem: |
    ul
      = each people as |person|
        li = person

    = link-to "home" | Link Text

    list nav id="nav-bar" class="top"
      a href="url" = title

    = strong
      = something

    = if something
      p Something!
    = else
      p Something else!

- title: Conditionals

  docs: |
    Conditionals are a subset of block expressions and support all of the Handlebars / Ember expressions (e.g. \`else if\`, \`unless\`, \`each\`, etc.).

  emblem: |

    = if isActive
      .item Active
    = else
      .item Inactive

    = unless isActive
      .item Inactive
    = else
      .item Active

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


-
  title: each/else

  docs: |
    This isn't strictly an Emblem pattern, but keep in mind that the \`each\` helper accepts an optional \`else\` portion that will be displayed when the list is empty or nonexistent.

  emblem: |
    = each things
      p = name
    = else
      p There are no things!

-
  title: Vanilla Handlebars Partials

  docs: |
    To invoke partials with non-Emberized Handlebars, you can use the \`>\` syntax.

    Note that there's no good way to precompile partials other than to precompile them as templates and then run \`Handlebars.partials = Handlebars.templates\` before any rendering has taken place.

    If you're not precompiling, and you want to directly register an Emblem template, you can use \`Emblem.registerPartial\`.

    **Note:**  you'll never really use this for Ember apps; rather, in those cases, you'd use the \`= partial\` helper.

  emblem: |
    > partialName

    p Check out this partial: #{> partialName}

    > partialName foo
`;

export default yaml;
