const code = [
  {
    title: 'Attribute Bindings',

    docs: `
      Emblem provides some additional helpers for attribute bindings in Ember.  You can bind attributes for both mustache (e.g. components or helpers) as well as HTML elements.

      Emblem provides the '!' helper to flag a bound value as unbound.  (**NOTE:** this feature is not supported in Ember after 1.13).

      **NOTE:** As of version 0.6.0, Emblem supports HTMLBars bound attributes, so 'bind-attr' is no longer automatically added.
    `,

    emblem: `
      = my-form name=(mut model.name)

      button class="large {{foo}}" x

      / Only supported Ember pre 1.13
      button class=foo! x

      / Only supported Ember pre 1.13
      = my-form name=(bind-attr model.name)
    `
  },
  {
    title: 'Legacy Components',
    docs: `
      You can quickly and easily include an Ember.js component by starting a line with an equals sign, the name of the component, and following it with any parameters.  Multi-line parameters are supported just as with other mustache / HTML elements.

      **NOTE:** Ember does require that components have a \`-\` in their name
    `,

    emblem: `
      = my-component value='firstName'

      = my-component [
        value='firstName'
        title='Name'
        model=model
        changed=(action 'nameChanged')
      ]
    `
  },
  {
    title: 'Blocks',
    docs: `
      As with other mustache / HTML elements, Ember components can be yielded a block, as well as accept an \`else\` statement.  As with HTML elements, Emblem will automatically close the block with the components name.

      Components can return block parameters by using the \`as |item index|\` syntax.

      Block params work for either single-line components or multi-line.
    `,

    emblem: `
      = my-greeter
        div Hello
      = else
        div Goodbye

      ul
        = each people as |person|
          li = person

      = my-component [
        foo
        bar=baz
      ] as |left right|
        span class={ left } = right
    `
  },
  {
    title: 'link-to Examples',
    docs: `
      Using a combination of various Emblem features, you can express any Handlebars expression.
    `,
    emblem: `
      / The following three are equivalent
      = link-to "home.index"
        | Home

      = link-to "Home" "home.index"

      = link-to "home.index" | Home

      = link-to "items.list" (query-params page=2) | Go to page 2

      ul
        li = link-to "index" | Home
        li = link-to "about" | About Us
    `
  },
  {
    title: 'Ember input helper',
    docs: `
      Keep in mind that the use of \`=\` is important for distinguishing components and helpers from HTML elements.
    `,

    emblem: `
      input value=name oninput={ action (mut myValue) value='target.value' }

      = input value=name itemChanged=(action (mut myValue))
    `
  },
  {
    title: 'Inline If',
    docs: `
      For more complex attribute bindings, Emblem supports the inline if syntax introduced in Ember 1.11.  Expressions should be wrapped inside a single curley block '{}'.

      Emblem will map any uses of the Ember colon syntax to the inline if syntax.
    `,
    emblem: `
      div value={ if isTrue 'one' activeItem }

      div class=condition:whenTrue:whenFalse

      .foo class={ isHovering condition1:whenTrue:whenFalse condition2:whenTrue:whenFalse }
    `
  },
  {
    title: 'Closure Actions',
    docs: `
      Emblem supports the full range of closure actions on both HTML elements and components.

      For mustache / components, be sure to use \`()\` around your actions.  For HTML elements,
      use \`{}\`.
    `,
    emblem: `
      = my-component eventChanged=(action 'foo' bar)

      = my-component [
        eventOpened=(action (mut isOpen))
        eventChanged=(action 'changeEvent')
      ] as |message|
        p = message

      a click={ action 'toggleOpen' } Open
    `
  },
  {
    title: 'Action Helpers',
    docs: `
      For HTML5 elements Emblem is aware of common  action names, such as 'click', 'submit', 'mouseEnter', etc.

      You can pass either a string action or closure action to these, and they will automatically be converted to the appropriate Ember action.
    `,
    emblem: `
      a click={ action 'toggleHeader' } x

      form submit={ action (mut model.name) }
    `
  },
  {
    title: 'Legacy Actions',
    docs: `
      Emblem also supports legacy string actions.  These are where you combine both the action name and any bound attributes in a single string.

      Within the string, if the first item is wrapped in quotes, it is interpreted as the action name.  Then any other words will be passed to that action.

      Words wrapped in quotes are unbound, and words without are bound.

      If the first word is not quoted, Emblem will pass the contents of that string exactly.
    `,
    emblem: `
      button click="'unboundAction' boundItem"

      button click="'unboundAction' 'unbountItem'"

      form submit="'submitTheForm' foo"
      p Hello

      a click='toggleHeader foo bar target="view"' x
    `
  }
];

export default code;
