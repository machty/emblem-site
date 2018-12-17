import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import Parser from 'js-yaml';

export default class YamlParserComponent extends Component {
  // Passed in
  yaml = null;

  @computed
  get parsedDocs() {
    const parsed = Parser.load(this.yaml);

    return parsed;
  }
}
