import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { computed } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import { set } from '@ember/object';
import IndexDoc from 'emblem-site/docs/intro';
import trimEmblem from 'emblem-site/lib/trim-emblem';

export default class SandboxController extends Controller {
  queryParams = ['encodedTemplate']

  encodedTemplate = btoa(trimEmblem(IndexDoc));

  @service compiler

  @computed('encodedTemplate')
  get emblem() {
    return window.atob(this.encodedTemplate);
  }

  @action
  textChanged(value) {
    set(this, 'encodedTemplate', window.btoa(value));
  }
}
