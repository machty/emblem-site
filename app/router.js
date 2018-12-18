import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('installation');
  this.route('editors');
  this.route('syntax');
  this.route('mustache');
  this.route('ember');
  this.route('glimmer');
  this.route('deprecations');
  this.route('sandbox');
});

export default Router;
