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
  title: Nested Elements

  docs: |
    To wrap one element in another, just indent and place the element below.

    De-indenting will close the nesting for the previous element.

    Emblem assumes that indentation is with two spaces, though more can be used as long as the indentation is maintaned consistently.

  emblem: |
    footer
      ul
        li Hello
        li Goodbye

      form#my-form
        label
          |First Name
          input name='first-name'

        label
          |Last Name
          input name='last-name'


-
  title: Plain Text

  docs: |
    Frequently lines will begin with either mustache or an HTML element.  In these cases you can just include the text after the wrapping element.

    However there are times when this will not work.  For example, you may need a larger block of text, or you may need more control over the spacing and alignment of the text with neighboring elements.  Or, it is possible that the syntax of the wrapping element (such as mustache) cause ambiguity on where the text begins.

    Emblem offers several helpers:

    - to signify that a line of text is beginning, use the \`|\` helper.  This works both for a line of Emblem on its own, and when following an HTML element.

    - multiline blocks of text are possible through the \`|\` helper as well, simply indent subsequent lines.I

    - to append whitespace after a line of text, begin the text with the \`'\` helper.

    - to prepend whitespace before a line of text, begin the line with the \`|\` helper and some additional spaces: \`|  \`

  emblem: |
    | Some content

    div name="foo"  My text

    = my-component foo bar | Baz

    p
      | Lorem ipsum
        dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et

    ' Trailing space
    i.fa-icon

    i.fa-icon
    |  Preceeding space



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
  title: HTML Attributes

  docs: |
    HTML attributes can be added right after the element using \`key="value"\` pairs.

    HTML attributes can also have mustaches embedded in them.

    For an HTML element with multiple attribute definitions, to improve readability you can wrap all of them in brackets \`[]\` and nest them under the element, one definitino per line.

  emblem: |
    button.close data-dismiss="modal" x

    button class="large {{foo}}" x


-
  title: Multi-line parameters

  docs: |
    More advanced mustache statements or HTML elements can get rather verbose.  Emblem supports using multiline parameters by the use of \`[]\`.

    The closing bracket can either be on the same line as the final parameter, or de-indented on the next line.

    Note that block content can work with both approaches.

    **NOTE:** It is required that all paremeters are inside of the blocks.

  emblem: |
    div [
      class='alert'
      data-dismiss='modal'
    ]

    button [
      data-hint='Click me for more information'
      class='info'
    ]
      |My button

    button [
      data-hint='Click me for more information'
      class='info' ]
      |My button


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
      = link-to 'posts'
        span = linkText

    / With colons:
    li: = link-to 'posts': span: linkText

    / You can consistently use it, even for simple cases.
    legend: title
    legend = title

    / You can nest groups
    #content-frame: .container: .row
      .span4: = list-item "sidebar"
      .span8: = list-item "main"

`;

export default yaml;
