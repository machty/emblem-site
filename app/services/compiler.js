import Service from '@ember/service';
import Emblem from 'emblem';
import { set } from '@ember/object';

const { compile, VERSION } = Emblem;

export default class CompilerService extends Service {
  version = VERSION

  lastError = null

  compile(text) {
    try {
      set(this, 'lastError', null);

      const compiled = compile(text);

      compiled.replace(/</g, '&gt;').
        replace(/>/g, '&lt;');

      return compiled;

    } catch (e) {
      set(this, 'lastError', e.message);
    }
  }
}
