const yaml = `
-
  title: Basic Syntax

  docs: |
    Emblem supports Glimmer / Angle-bracket components.  To use these, prefix your component with \`%\`.

    **NOTE:** Emblem treats Glimmer components like regular HTML elements.  Therefor, it is necessary to use \`{}\` for actions.

  emblem: |
    % my-component @value=fooValue data-hint='My special component'

    % modal-popup @onClose={ action 'modalClosed' }


-
  title: Blocks

  docs: |
    More complex components can be achieved by incorporating block syntax.

  emblem: |
    % my-component @value=foo
      |Hi!

    % my-component @value=foo as |comp1 comp2|
      = comp.name

-
  title: Brackets

  docs: |
    Glimmer components can also be used with the bracket syntax for mustache components.

  emblem: |
    %my-component [
      @foo=bar
      @baz=\'food\' ]

    %my-component [
      @foo=bar
      @baz=\'food\'
    ]

    %my-component [
      @something="false" ]
      p Bracketed helper attrs!

    %my-component [
      onclick={ action \'doSometing\' foo bar }
      change=\'otherAction\'
      @something="false"
    ]
      p Bracketed helper attrs!


-
  title: Namespacing

  docs: |
    Emblem also supports namespacing Glimmer components.

  emblem: |
    % my-addon::foo

    % inputs:my-component @value=foo

-
    title: Named Blocks

    docs: |
      Emblem also supports named blocks syntax

    emblem: |
      % x-modal
        % @header as |@title|
          |Header #{title}
        % @body
          |Body
        % @footer
          |Footer
`;

export default yaml;
