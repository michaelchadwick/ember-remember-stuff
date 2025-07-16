import { service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';

export default class MusicController extends Controller {
  @service router;

  @action
  refreshModel() {
    const route = getOwner(this).lookup('route:music');
    route.refresh();
  }
}
