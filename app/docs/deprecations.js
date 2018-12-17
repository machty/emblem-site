const code = [
  {
    title: 'Legacy View Syntax',
    docs: `
      Emblem has a helper for legacy Ember views.  If you start a line without a \`=\` and a capitalize letter, it will be translated to an Ember view;

      As Ember no longer supports views, this syntax is deprecated and will be removed in the 1.0 release.
    `,
    emblem: `
      / Logs: \`DEPRECATION: View syntax detected: MyComponent\`

      MyComponent name='bar'
    `
  },
  {
    title: 'Explicit component declarations',
    docs: `
      Emblem does not require using a \`=\` before any explicit mustache / components / helpers.  However, it is much better to use the \`=\` to flag that code as mustache.

      Given the rise of web components, it is preferrable to treat lines that do not start with a \`=\` as an HTML element.  This aligns nicely with both Glimmer and angle-bracket components, which currently require the initial \`%\`.

      Because web components are the future for Ember, it is best to start using \`=\` and \`%\` to be explicit about the difference between glimmer and mustache components.

      In a future release, Emblem will no longer support line-starting mustache without the initial \`=\`, and instead interpret those as web components.
    `,
    emblem: `
      / Logs: \`DEPRECATION: Explicit component declarations will be interpreted as angle-bracket components in a later release: my-component\`

      my-component foo=bar

      = my-component foo=bar

      % MyComponent foo=bar
    `
  }
];

export default code;
