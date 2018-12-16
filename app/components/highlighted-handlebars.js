import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import Handlebars from 'emblem-site/lib/handlebars';

export default class HighlightedHandlebarsComponent extends Component {
  // Passed in
  code = null;

  @computed('code')
  get highlighted() {
    return Prism.highlight(this.code, Handlebars, 'handlebars');
  }
}
