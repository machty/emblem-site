import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/ember';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class EmberRoute extends Route {
  docs = deIndentDocs(Docs)
}
