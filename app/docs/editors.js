const code =
[
  {
    docs: `
      ## Editors

      Many popular code tools have syntax highlighting support for Emblem.  Emblem is also fairly similar to Jade or Slim, and it is possible that syntax highlighting for those may be useful.
    `
  },
  {
    title: 'VS-Code',
    instructions: 'Follow the instructions at [https://marketplace.visualstudio.com/items?itemName=tmosmant.vscode-emblem](https://marketplace.visualstudio.com/items?itemName=tmosmant.vscode-emblem'
  },
  {
    title: 'Atom',
    instructions: 'Follow the instructions at [https://atom.io/packages/atom-emblem](https://atom.io/packages/atom-emblem)'
  },
  {
    title: 'Sublime Text 2/3',
    instructions: 'Follow the instructions at [https://github.com/johanobergman/sublime-emblem-syntax](https://github.com/johanobergman/sublime-emblem-syntax)'
  },
  {
    title: 'vim-emblem',
    instructions: 'Follow the instructions at [https://github.com/heartsentwined/vim-emblem](https://github.com/heartsentwined/vim-emblem)'
  },
  {
    title: 'Textmate 1.x',
    shell: `
      cd ~/Library/Application\ Support/TextMate/Bundles/
      git clone git://github.com/slim-template/ruby-slim.tmbundle.git Ruby\ Slim.tmbundle
      osascript -e 'tell app "TextMate" to reload bundles'
    `
  },
  {
    title: 'Textmate 2.x',
    shell: `
      cd ~/Library/Application\ Support/TextMate/Managed/Bundles/
      git clone git://github.com/slim-template/ruby-slim.tmbundle.git Ruby\ Slim.tmbundle
    `
  },
  {
    title: 'Vim users with Slim Syntax highlighting',
    shell: `
      au BufNewFile,BufRead *.emblem set filetype=slim
    `
  }
];

export default code;
