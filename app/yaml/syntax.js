const yaml = `
-
  title: Tags

  docs: |
    You can wrap content within an html5 element by just writing the element name at the beginning of a line.

    This is supported for all valid html5 tags (list [here](https://developer.mozilla.org/en-US/docs/HTML/HTML5/HTML5_element_list).)

    To use a non-html5 tag, just start the line with \`%\`.

  emblem: |
    h1 Welcome to Emblem


-
  title: Indentation Wrapping

  docs: |
    To wrap one element in another, just indent and place the element below.

    Emblem assumes that indentation is with two spaces.

  emblem: |
    footer
      ul
        li Hello
        li Goodbye


-
  title: CSS Classes

  docs: |
    CSS classes can added to elements by using a (\'.\') with the class name afterwards. You can place this after an element name (\'div\' is the default tag name).

    You can chain multiple class names, and Emblem will combine all class definitions into a single 'class' HTML5 attribute.

    **NOTE**: see use of bindings below and the inline if for more complex examples.

  emblem: |
    .title Title

    h1.logo Law Blog

    button.btn.btn-large Submit

    div.foo class='bar'


-
  title: IDs

  docs: |
    Element IDs can be added to elements by using \'#\' before the element id. Like CSS classes, you can provide an element name (\'div\' is the default tag name).

  emblem: |
    #page-content Content

    span#name Bob Lablah



-
  title: Comments

  docs: |
    Start a line with '/' to add a comment. These lines will be ignored completely.

    Multiline comments are supported by indenting your comment underneath.

  emblem: |
    / Some comment

    / A long long
      multiline comment


-
  title: Plain Text

  docs: |
    To output content without an element wrapper, start the line with pipe \`|\`.

    Multiline plaintext content is supported by indenting underneath the tag or \`|\`.

    Plain text can include handlebars output tags \`{{}}\` and \`{{{}}}\`. You can also use \`#{}\` as an alias for \`{{}}\`.

    Block helpers within text blocks can also be used if you're using the \`:\` colon or \`|\` pipe syntax.

    Use an apostrophe \`'\` instead of \`|\` to append a single trailing whitespace at the end of the text block.

  emblem: |
    | Some content

    p
      | Lorem
      = link-to 'something' | ipsum
      | dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    span.name Your name is {{name}}
              and my name is #{author}

    span
      ' Trailing space

-
  title: HTML Attributes

  docs: |
    HTML attributes can be added right after the element using \`key="value"\` pairs.

    HTML attributes can also have mustaches embedded in them.

    For an HTML element with multiple attribute definitions, to improve readability you can wrap all of them in brackets \`[]\` and nest them under the element, one definitino per line.

  emblem: |
    button.close data-dismiss="modal" x

    button class="large {{foo}}" x

    button [
      data-hint='Click me for more information'
      class='info'
      data-dismiss='modal'
    ]

-
  title: Colon Syntax for Inlining Nested Content

  docs: |
    The colon separator is a way of nesting content on a single line. It's essentially an alternative to a newline followed by indented content.

    Whatever comes after a statement-terminating \`:\` will be interpreted as if it were moved to the line below and indented. This allows you to quickly alternate between nesting HTML elements and mustache blocks on a single line when it makes sense.

    This should come in handy for scaffolding frameworks like Twitter Bootstrap (the first part of the example on the right is Bootstrap scaffolding code).

    **NOTE**: you must follow the \`:\` with a space

  emblem: |
    / You could write something like this:
    .container
      .row
        .span12
          p Hello

    / Or you could write something like this:
    .container: .row: .span12: p Hello

    / It works for mustache blocks too:
    li
      link-to 'posts'
        span = linkText

    / With colons:
    li: link-to 'posts': span: linkText

    / You can consistently use it, even for simple cases.
    legend: title
    legend = title

    / You can nest groups
    #content-frame: .container: .row
      .span4: = list-item "sidebar"
      .span8: = list-item "main"


`;

export default yaml;
