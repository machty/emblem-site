// All of our docs are indented 6 spaces and the first line is blank.
// This assumes that all emblem in our docs is equally indented, and de-indents everything 6 spaces
export default function(emblem) {
  return emblem.
    split(/\r?\n/).
    slice(1).
    map(a => a.substring(6)).
    join('\n');
}
