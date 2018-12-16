import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import Emblem from 'emblem-site/lib/emblem';

export default class HighlightedEmblemComponent extends Component {
  // Passed in
  code = null;

  @computed('code')
  get highlighted() {
    return Prism.highlight(this.code, Emblem, 'emblem');
  }
}
