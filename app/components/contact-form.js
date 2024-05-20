import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactFormComponent extends Component {
  @tracked name;
  @tracked email;
  @tracked message;

  @action
  sendMessage(event) {
    event.preventDefault();

    if (this.name && this.email && this.message) {
      console.log('contact submission', this.name, this.email, this.message);
    } else {
      console.error('contact submission missing values');
    }
  }
}
