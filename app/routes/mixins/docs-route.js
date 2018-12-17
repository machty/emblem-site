import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
  templateName: 'docs-route',

  setupController(controller) {
    set(controller, 'docs', this.docs);
  }
});
