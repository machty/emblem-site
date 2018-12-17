import Route from 'emblem-site/routes/mixins/yaml-route';
import Yaml from 'emblem-site/yaml/mustache';

export default class MustacheRoute extends Route {
  yaml = Yaml
}
