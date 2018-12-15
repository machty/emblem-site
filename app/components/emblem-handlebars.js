import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class EmblemHandlebarsComponent extends Component {
  showingEditor = false
  showingCode = true

  @action
  toggleShowResult() {
    this.toggleProperty('showingCode');
  }

  @action
  toggleShowEditor() {
    this.toggleProperty('showingEditor');
  }
}
