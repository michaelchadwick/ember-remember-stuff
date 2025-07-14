import Component from '@glimmer/component';
import { service } from '@ember/service';
import { defaultValidator } from 'ember-a11y-refocus';
import ENV from 'frontend/config/environment';
import NavigationNarrator from 'ember-a11y-refocus/components/navigation-narrator';
import t from 'ember-intl/helpers/t';
import { LinkTo } from '@ember/routing';
import eq from 'ember-truth-helpers/helpers/eq';
import FaIcon from 'rs-common/components/fa-icon';
import LocaleChooser from 'frontend/components/locale-chooser';

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
  <template>
    <NavigationNarrator
      @navigationText={{t "general.navigationCompleteText"}}
      @skipText={{t "general.skipToMainContent"}}
      @routeChangeValidator={{this.checkRouteChange}}
    />
    <nav class="nav-bar">
      <LinkTo @route="index" class="menu-index">
        <h1>{{t "general.siteTitle"}}</h1>
      </LinkTo>

      <div class="links">
        {{#each this.routes as |route|}}
          {{#if (eq route.route "debuggery")}}
            <LinkTo @route={{route.route}} class="menu-{{route.route}}" target={{route.target}}>
              <FaIcon @icon="bug" />
            </LinkTo>
          {{else if (eq route.route "users")}}
            <LinkTo @route={{route.route}} class="menu-{{route.route}}" target={{route.target}}>
              <FaIcon @icon="user" />
            </LinkTo>
          {{else}}
            <LinkTo @route={{route.route}} class="menu-{{route.route}}" target={{route.target}}>
              {{route.title}}
            </LinkTo>
          {{/if}}
        {{/each}}
      </div>

      <LocaleChooser />
    </nav>
  </template>
}
