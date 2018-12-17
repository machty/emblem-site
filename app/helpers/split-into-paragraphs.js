import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export function splitIntoParagraphs(params) {
  const value = params[0];

  if (isPresent(value)) {
    const paragraphs = value.split(/\r?\n/).map(a => a.trim());

    return paragraphs;
  }
}

export default helper(splitIntoParagraphs);
