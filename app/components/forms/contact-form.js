import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

class Errors {
  @tracked name = null;
  @tracked email = null;
  @tracked message = null;
}

export default class ContactFormComponent extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked message = '';
  @tracked errors = new Errors();
  @service intl;

  get isNameValid() {
    return this.name.trim().length > 0;
  }

  get isEmailValid() {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email.trim());
  }

  get isMessageValid() {
    return this.message.trim().length > 0;
  }

  get isFormValid() {
    return this.isNameValid && this.isEmailValid && this.isMessageValid;
  }

  @action
  validateField(fieldName) {
    switch (fieldName) {
      case 'name':
        this.errors.name = this.isNameValid
          ? null
          : this.intl.t('errors.required', { description: 'Name' });
        break;
      case 'email':
        this.errors.email = this.isEmailValid
          ? null
          : this.intl.t('errors.invalid', { description: 'Email' });
        break;
      case 'message':
        this.errors.message = this.isMessageValid
          ? null
          : this.intl.t('errors.required', { description: 'Message' });
        break;
    }
  }

  @action
  handleInput(event) {
    let { name, value } = event.target;
    this[name] = value;

    this.validateField(name);
  }

  @action
  handleSubmit(event) {
    event.preventDefault();

    this.validateField('name');
    this.validateField('email');
    this.validateField('message');

    if (this.isFormValid) {
      this.sendMessage();
    } else {
      console.log('Form has validation errors', this.errors);
    }
  }

  @action
  sendMessage() {
    window.alert(
      `${this.name} (${this.email}) said:\n${this.message}\n\nTODO: actually send this somewhere :D`,
    );

    // Clear the form
    this.name = '';
    this.email = '';
    this.message = '';
    this.errors = new Errors();
  }
}
