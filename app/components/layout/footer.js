import Component from '@glimmer/component';
import ENV from 'remember-stuff/config/environment';

export default class FooterComponent extends Component {
  get links() {
    const links = [];

    links.push({
      url: 'https://michaelchadwick.info',
      route: 'author',
      icon: 'at',
      iconType: 'fas',
      title: 'Author',
      target: '_blank',
    });

    links.push({
      url: 'https://github.com/michaelchadwick/remember-stuff',
      route: 'source',
      icon: 'github',
      iconType: 'fab',
      title: 'Source',
      target: '_blank',
    });

    links.push({
      url: 'https://guides.emberjs.com/release/components/',
      route: 'tutorial',
      icon: 'book',
      iconType: 'fas',
      title: 'Docs',
      target: '_blank',
    });

    if (ENV.environment != 'production') {
      links.push({
        url: '/tests?nocontainer',
        route: 'tests',
        icon: 'flask',
        iconType: 'fas',
        title: '[Tests]',
        target: '_blank',
      });

      links.push({
        url: 'https://mc-emberjs-remember-stuff.netlify.app',
        route: 'prod',
        icon: 'square-up-right',
        iconType: 'fas',
        title: '[Prod]',
        target: '_blank',
      });
    }

    return links;
  }
}
