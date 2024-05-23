import Component from '@glimmer/component';
import ENV from 'remember-stuff/config/environment';
import { service } from '@ember/service';

export default class FooterComponent extends Component {
  @service intl;

  get links() {
    const links = [];

    links.push({
      url: 'https://michaelchadwick.info',
      route: 'author',
      icon: 'at',
      iconType: 'fas',
      title: this.intl.t('layout.footAuthor'),
      target: '_blank',
    });

    links.push({
      url: 'https://github.com/michaelchadwick/remember-stuff',
      route: 'source',
      icon: 'github',
      iconType: 'fab',
      title: this.intl.t('layout.footSource'),
      target: '_blank',
    });

    links.push({
      url: 'https://guides.emberjs.com/release/components/',
      route: 'tutorial',
      icon: 'book',
      iconType: 'fas',
      title: this.intl.t('layout.footDocs'),
      target: '_blank',
    });

    if (ENV.environment != 'production') {
      links.push({
        url: '/tests?nocontainer',
        route: 'tests',
        icon: 'flask',
        iconType: 'fas',
        title: `[${this.intl.t('layout.footTests')}]`,
        target: '_blank',
      });

      links.push({
        url: 'https://mc-emberjs-remember-stuff.netlify.app',
        route: 'prod',
        icon: 'square-up-right',
        iconType: 'fas',
        title: `[${this.intl.t('layout.footProd')}]`,
        target: '_blank',
      });
    }

    return links;
  }
}
