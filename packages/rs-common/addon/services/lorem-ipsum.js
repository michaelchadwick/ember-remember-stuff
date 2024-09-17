import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';

export default class LoremIpsumService extends Service {
  @tracked envApp = ENV.APP;

  async requestText(paragraphCount) {
    let url = `${this.envApp.METAPHORPSUM_API_URL}/paragraphs/${paragraphCount}?p=true`;

    const result = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    const text = await result.text();

    if (text) {
      return text;
    } else {
      return this.envApp.LOREM_IPSUM_DEFAULT;
    }
  }
}
