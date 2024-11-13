import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class UserNameInfoComponent extends Component {
  @service intl;

  get kloutLevel() {
    return this.args.kloutLevel;
  }

  get rowLevel() {
    return this.args.rowLevel;
  }

  get showLevels() {
    return this.args.showLevels ?? false;
  }

  @action
  buffKloutAndRowLevel(event) {
    event.stopPropagation();

    this.args.onBuffKlout(Math.floor(Math.random() * 100));
    this.args.onBuffRow();
  }
}
