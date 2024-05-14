// app/services/head-data.js

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeadDataService extends Service {
  @tracked ogTitle;
  @tracked faviconType;
}
