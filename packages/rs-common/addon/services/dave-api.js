import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DaveApiService extends Service {
  @tracked data = null;

  async fetchData(query) {
    const response = await fetch(`https://dave.neb.host/${query}`);
    this.data = await response.json();
    return this.data;
  }
}
