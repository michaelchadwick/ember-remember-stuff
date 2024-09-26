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
      route: 'author',
      icon: 'at',
      title: this.intl.t('layout.footAuthor'),
    });

    links.push({
      ...this.defaultLink,
      url: 'https://github.com/michaelchadwick/ember-remember-stuff',
      route: 'source',
      icon: 'github',
      iconType: 'fab',
      title: this.intl.t('layout.footSource'),
    });

    links.push({
      ...this.defaultLink,
      url: 'https://guides.emberjs.com/release/components/',
      route: 'tutorial',
      icon: 'book',
      title: this.intl.t('layout.footDocs'),
    });

    if (ENV.environment != 'production') {
      links.push({
        ...this.defaultLink,
        url: '/tests?nocontainer',
        route: 'tests',
        icon: 'flask',
        title: `[${this.intl.t('layout.footTests')}]`,
      });

      links.push({
        ...this.defaultLink,
        url: 'https://mc-emberjs-remember-stuff.netlify.app',
        route: 'prod',
        icon: 'square-up-right',
        title: `[${this.intl.t('layout.footProd')}]`,
      });
    }

    return links;
  }
}
