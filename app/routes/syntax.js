import Route from 'emblem-site/routes/mixins/yaml-route';
import Yaml from 'emblem-site/yaml/syntax';

export default class SyntaxRoute extends Route {
  yaml = Yaml
}
