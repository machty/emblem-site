import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/syntax';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class SyntaxRoute extends Route {
  docs = deIndentDocs(Docs)
}
