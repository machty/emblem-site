import Route from 'emblem-site/routes/mixins/docs-route';
import Docs from 'emblem-site/docs/installation';
import deIndentDocs from 'emblem-site/lib/de-indent-docs';

export default class InstallationRoute extends Route {
  docs = deIndentDocs(Docs)
}
