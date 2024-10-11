import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service intl;

  @tracked currentlyLoading = false;
  @tracked errors = [];
  @tracked showErrorDisplay = false;

  @action
  clearErrors() {
    this.errors = [];
    this.showErrorDisplay = false;
  }

  @action
  addError(error) {
    this.errors = [...this.errors, error];
    this.showErrorDisplay = true;
  }
}
