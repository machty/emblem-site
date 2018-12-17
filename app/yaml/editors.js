const yaml = `
-
  docs: |
    ## Editors

    Many popular code tools have syntax highlighting support for Emblem.  Emblem is also fairly similar to Jade or Slim, and it is possible that syntax highlighting for those may be useful.


  shell: |
    # VS-Code
    Follow the instructions at https://marketplace.visualstudio.com/items?itemName=tmosmant.vscode-emblem

    # Atom
    Follow the instructions at https://atom.io/packages/atom-emblem

    # Sublime Text 2/3
    Follow the instructions at https://github.com/johanobergman/sublime-emblem-syntax

    # vim-emblem
    Follow the instructions at https://github.com/heartsentwined/vim-emblem

    # Textmate 1.x
    cd ~/Library/Application\ Support/TextMate/Bundles/
    git clone git://github.com/slim-template/ruby-slim.tmbundle.git Ruby\ Slim.tmbundle
    osascript -e 'tell app "TextMate" to reload bundles'

    # Textmate 2.x
    cd ~/Library/Application\ Support/TextMate/Managed/Bundles/
    git clone git://github.com/slim-template/ruby-slim.tmbundle.git Ruby\ Slim.tmbundle

    # Vim users with Slim Syntax highlighting
    au BufNewFile,BufRead *.emblem set filetype=slim
`;

export default yaml;
