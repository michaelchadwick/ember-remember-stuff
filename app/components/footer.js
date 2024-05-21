import Component from '@glimmer/component';
import ENV from 'ember-fake-chat/config/environment';

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
      url: 'https://github.com/michaelchadwick/ember-fake-chat',
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
        url: 'https://mc-emberjs-fake-chat.netlify.app',
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
