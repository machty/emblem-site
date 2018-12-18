import Controller from '@ember/controller';
import IndexDoc from 'emblem-site/docs/intro';
import trimEmblem from 'emblem-site/lib/trim-emblem';

export default class IndexController extends Controller {
  introCode = trimEmblem(IndexDoc)
}
