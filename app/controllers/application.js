import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { computed } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  @service
  router

  @computed('router.currentRouteName')
  get canGoBack() {
    return this.router.currentRouteName !== 'index';
  }
}
