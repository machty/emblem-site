const yaml = `
-
  title: Attribute Bindings

  docs: |
    Emblem provides some additional helpers for attribute bindings in Ember.

    To define a binding as mutable using the Ember 'mut' helper, wrap the definition in a single curley \`{}\`.

    Emblem provides the '!' helper to flag a bound value as unbound.  (**NOTE:** this feature is not supported in Ember after 1.13).

    **NOTE:** As of version 6.0, Emblem supports HTMLBars bound attributes, so 'bind-attr' is no longer automatically added.

  emblem: |
    = my-form name={ mut model.name }

    button class="large {{unbound foo}}" x

    button class=foo! x

    / Only supported Ember pre 1.13
    = my-form name={ bind-attr model.name }


- title: Inline If
  docs: |
    For more complex attribute bindings, Emblem supports the inline if syntax introduced in Ember 1.11.  Expressions should be wrapped inside a single curley block '{}'.

    Emblem will map any uses of the Ember colon syntax to the inline if syntax.

  emblem: |
    div value={ if isTrue 'one' activeItem }

    div class=condition:whenTrue:whenFalse

    .foo class={ isHovering condition1:whenTrue:whenFalse condition2:whenTrue:whenFalse }

  html: |
    <div value={{if isTrue 'one' activeItem}}

    <div class="{{if condition 'whenTrue' 'whenFalse'}}"></div>

    <div class="foo {{isHovering}} {{if condition1 'whenTrue' 'whenFalse'}} {{if condition2 'whenTrue' 'whenFalse'}}">


-
  title: Components

  docs: |
    You can quickly and easily include an Ember.js component by starting a line with an equals sign and following it with any parameters.

    Components can have block params and blocks.

    As with HTML elements, components  can have their attributes wrapped in brackets '[]' for easier readability.

  emblem: |
    .field
      = my-component value='firstName'

    .field
      ul
        = each items as |item|
          = my-component value=item

    = my-list as |list index|
      = list-item list=list index=index

    = my-component [
      value='firstName'
      title='Name'
      model=model
      changed=(action 'nameChanged')
    ] as |foo|
      li You picked #{ foo }


-
  title: Closure Actions

  docs: |
    Emblem supports the full range of closure actions on both HTML elements and components.

    For mustache / components, be sure to use \`()\` around your actions.  For HTML elements,
    use \`{}\`.

  emblem: |
    = my-component eventChanged=(action 'foo' bar)

    = my-component [
      eventOpened=(action (mut isOpen))
      eventChanged=(action 'changeEvent')
    ] as |message|
      p = message

    a click={ action 'toggleOpen' } Open

-
  title: Action Helpers

  docs: |
    For HTML5 elements Emblem is aware of common  action names, such as 'click', 'submit', 'mouseEnter', etc.

    You can pass either a string action or closure action to these, and they will automatically be converted to the appropriate Ember action.

  emblem: |
    a click={ action 'toggleHeader' } x

    form submit={ action (mut model.name) }


-
  title: Legacy Actions

  docs: |
    Emblem also supports legacy string actions.  These are where you combine both the action name and any bound attributes in a single string.

    Within the string, if the first item is wrapped in quotes, it is interpreted as the action name.  Then any other words will be passed to that action.

    Words wrapped in quotes are unbound, and words without are bound.

    If the first word is not quoted, Emblem will pass the contents of that string exactly.

  emblem: |
    button click="'unboundAction' boundItem"

    button click="'unboundAction' 'unbountItem'"

    form submit="'submitTheForm' foo"
    p Hello

    a click='toggleHeader foo bar target="view"' x


-
  title: link-to Examples

  docs: |
    Using a combination of various Emblem features, you can express any Handlebars expression.

  emblem: |
    / The following three are equivalent
    = link-to "home.index"
      | Home

    = link-to "Home" "home.index"

    = link-to "home.index" | Home

    = link-to "items.list" (query-params page=2) | Go to page 2

    ul
      li = link-to "index" | Home
      li = link-to "about" | About Us

-
  title: Lists (Block Expression Shorthand)

  docs: |
    Emblem allows you to use '=' shorthand with block expressions. Because of this, you can achieve pretty succinct list declarations.

  emblem: |

    ul
      = each items as |item|
        li Item name: #{ item.name }

    / Shorter version:

    ul = each items as |item|
      li Item name: #{ item.name }


-
  title: Ember input helper

  docs: |
    Keep in mind that the use of \`=\` is important for distinguishing components and helpers from HTML elements.

  emblem: |
    input value=name oninput={ action (mut myValue) value='target.value' }

    = input value=name itemChanged=(action (mut myValue))
`;

export default yaml;
