import { helper } from '@ember/component/helper';

export function capitalizeString(params) {
  const value = params[0];

  if (value && value.capitalize)
    return value.capitalize();
  else
    return value;
}

export default helper(capitalizeString);
