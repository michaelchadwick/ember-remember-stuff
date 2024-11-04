import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DaveApiService extends Service {
  @tracked data = null;

  async fetchData(query) {
    let response;

    try {
      response = await fetch(`https://dave.neb.host/${query}`);

      this.data = await response.json();

      return this.data;
    } catch (e) {
      throw Error('Error getting data from DaveApi');
    }
  }
}
