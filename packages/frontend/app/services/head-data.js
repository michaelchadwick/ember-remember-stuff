import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeadDataService extends Service {
  @tracked faviconType;
  @tracked ogTitle;
  @tracked routeTitle;
}
