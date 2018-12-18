import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/mustache';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class MustacheRoute extends Route {
  docs = deIndentDocs(Docs)
}
