import Component from '@glimmer/component';
import ENV from 'ember-fake-chat/config/environment';

export default class FooterComponent extends Component {
  get links() {
    const links = [];

    links.push({
      url: 'https://michaelchadwick.info',
      route: 'author',
      title: 'Author',
      target: '_blank',
    });

    links.push({
      url: 'https://github.com/michaelchadwick/ember-fake-chat',
      route: 'source',
      title: 'Github Source',
      target: '_blank',
    });

    links.push({
      url: 'https://guides.emberjs.com/release/components/',
      route: 'tutorial',
      title: 'Ember Tutorial',
      target: '_blank',
    });

    if (ENV.environment != 'production') {
      links.push({
        url: '/tests?nocontainer',
        route: 'tests',
        title: '[Tests]',
        target: '_blank',
      });
    }

    return links;
  }
}
