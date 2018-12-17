import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import trimEmblem from 'emblem-site/lib/trim-emblem';

export default class HighlightedEmblemComponent extends Component {
  // Passed in
  code = null;

  @computed('code')
  get highlighted() {
    const code = trimEmblem(this.code);

    return Prism.highlight(code, Prism.languages.emblem, 'emblem');
  }
}
