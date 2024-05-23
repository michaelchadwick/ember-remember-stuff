import Component from '@glimmer/component';
import { service } from '@ember/service';
export default class NavBarComponent extends Component {
  @service intl;

  get routes() {
    return [
      {
        route: 'about',
        title: this.intl.t('layout.navAbout'),
        target: '_self',
      },
      {
        route: 'messages',
        title: this.intl.t('layout.navMessages'),
        target: '_self',
      },
      {
        route: 'music',
        title: this.intl.t('layout.navMusic'),
        target: '_self',
      },
      {
        route: 'links',
        title: this.intl.t('layout.navLinks'),
        target: '_self',
      },
      {
        route: 'contact',
        title: this.intl.t('layout.navContact'),
        target: '_self',
      },
    ];
  }
}
