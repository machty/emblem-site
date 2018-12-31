import { helper } from '@ember/component/helper';
import config from '../config/environment';

export function linkToGithub(params) {
  const value = params[0];

  if (value) {
    return `${ config.emblemGithub }/${ value }-test.js`;
  }
}

export default helper(linkToGithub);
