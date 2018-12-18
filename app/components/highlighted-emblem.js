import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class HighlightedEmblemComponent extends Component {
  // Passed in
  code = null;

  @computed('code')
  get highlighted() {
    const code = this.code;

    return Prism.highlight(code, Prism.languages.emblem, 'emblem');
  }
}
