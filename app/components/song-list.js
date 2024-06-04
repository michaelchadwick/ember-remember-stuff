import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SongListComponent extends Component {
  @tracked currentlyLoading = false;

  @action
  async loading(transition) {
    this.currentlyLoading = true;

    transition.promise.finally(function () {
      this.currentlyLoading = false;
    });
  }
}
