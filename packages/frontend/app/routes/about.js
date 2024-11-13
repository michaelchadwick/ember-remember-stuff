import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class AboutRoute extends Route {
  @service headData;

  @tracked isLoading = true;

  beforeModel() {
    this.headData.routeTitle = 'About';
  }

  async model() {
    const url = `${ENV.APP.GITHUB_API_URL}/repos/${ENV.APP.GITHUB_USERNAME}/${ENV.APP.GITHUB_SRC_NAME}/commits?sort=updated&per_page=5`;

    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  }
}
