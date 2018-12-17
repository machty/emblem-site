import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { classNames } from '@ember-decorators/component';

@classNames('emblem-handlebars-display')
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
