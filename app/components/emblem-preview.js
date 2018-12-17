import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import { isPresent } from '@ember/utils';
import { set } from '@ember/object';
import { tagName } from '@ember-decorators/component';

@tagName('span')
export default class EmblemPreviewComponent extends Component {
  result = null
  code = null

  @service compiler

  showingEditor = true

  init() {
    super.init(...arguments);

    this.currentCode = this.code;
  }

  didInsertElement() {
    const code = this.currentCode;

    if (isPresent(code)) {
      this._compileText(code);
    }
  }

  @action
  textChanged(value) {
    this._compileText(value);

    set(this, 'currentCode', value);
  }

  @action
  reset() {
    set(this, 'currentCode', this.code);
    this._compileText(this.currentCode);
  }

  _compileText(text) {
    const compiler = this.compiler;

    set(this, 'glimmerError', null);
    set(this, 'result', null);

    const raw = compiler.compile(text);

    if (raw) {
      this._prettyAndSave(raw);
    }
  }

  _prettyAndSave(text) {
    try {
      const result = prettier.format(text, {
        parser: 'glimmer',
        plugins: prettierPlugins
      });

      set(this, 'result', result);

    } catch (e) {
      set(this, 'glimmerError', e.message);
    }
  }
}
