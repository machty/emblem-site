import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('installation');
  this.route('syntax');
  this.route('idioms');
  this.route('about');
});

export default Router;
