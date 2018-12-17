import { markdown } from 'markdown';
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function capitalizeString(params) {
  const value = params[0];

  if (value)
    return htmlSafe(markdown.toHTML(value));
}

export default helper(capitalizeString);
