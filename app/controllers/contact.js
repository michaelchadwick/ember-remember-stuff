import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactController extends Controller {
  @tracked name;
  @tracked email;
  @tracked message;

  @action
  sendMessage(event) {
    event.preventDefault();

    if (this.name && this.email && this.message) {
      console.log('contact submission', this.name, this.email, this.message);
    }
  }
}
