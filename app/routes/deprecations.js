import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/deprecations';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class DeprecationsRoute extends Route {
  docs = deIndentDocs(Docs)
}
