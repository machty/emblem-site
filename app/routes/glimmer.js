import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/glimmer';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class GlimmerRoute extends Route {
  docs = deIndentDocs(Docs)
}
