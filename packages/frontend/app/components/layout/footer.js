import Component from '@glimmer/component';
import ENV from 'frontend/config/environment';
import { service } from '@ember/service';

export default class FooterComponent extends Component {
  @service intl;

  defaultLink = {
    iconType: 'fas',
    target: '_blank',
  };

  get links() {
    const links = [];

    links.push({
      ...this.defaultLink,
      url: 'https://michaelchadwick.info',
      icon: 'at',
      title: this.intl.t('layout.footAuthor'),
      class: this.intl.t('layout.footAuthor').toLowerCase(),
    });

    links.push({
      ...this.defaultLink,
      url: 'https://github.com/michaelchadwick/ember-remember-stuff',
      icon: 'github',
      iconType: 'fab',
      title: this.intl.t('layout.footSource'),
      class: this.intl.t('layout.footSource').toLowerCase(),
    });

    links.push({
      ...this.defaultLink,
      url: 'https://guides.emberjs.com/release/components/',
      icon: 'book',
      title: this.intl.t('layout.footDocs'),
      class: this.intl.t('layout.footDocs').toLowerCase(),
    });

    if (ENV.environment != 'production') {
      links.push({
        ...this.defaultLink,
        query: 'nocontainer',
        route: 'tests',
        icon: 'flask',
        title: `[${this.intl.t('layout.footTests')}]`,
        class: this.intl.t('layout.footTests').toLowerCase(),
      });

      links.push({
        ...this.defaultLink,
        url: 'https://mc-emberjs-remember-stuff.netlify.app',
        icon: 'square-up-right',
        title: `[${this.intl.t('layout.footProd')}]`,
        class: this.intl.t('layout.footProd').toLowerCase(),
      });
    }

    return links;
  }
}
