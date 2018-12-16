import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  templateName: 'yaml-route',

  setupController(controller) {
    set(controller, 'yaml', this.yaml);
  }
});
