import Component from '@glimmer/component';
import { service } from '@ember/service';
import { defaultValidator } from 'ember-a11y-refocus';
import ENV from 'frontend/config/environment';

export default class NavBarComponent extends Component {
  @service intl;

  get routes() {
    const routes = [
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
      {
        route: 'debuggery',
        target: '_self',
        title: `{${this.intl.t('layout.footDebuggery')}}`,
      },
    ];

    if (ENV.environment == 'development') {
      routes.push({
        route: 'users',
        title: this.intl.t('layout.navUsers'),
        target: '_self',
      });
    }

    return routes;
  }

  checkRouteChange(transition) {
    if (transition.from?.name === transition.to?.name) {
      return false;
    }
    return defaultValidator(transition);
  }
}
