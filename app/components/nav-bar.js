import Component from '@glimmer/component';
import ENV from 'ember-fake-chat/config/environment';

export default class NavBarComponent extends Component {
  get links() {
    const links = [];

    links.push({
      route: 'about',
      title: 'About',
      target: '_self',
    });

    if (ENV.environment != 'production') {
      links.push({
        route: 'tests',
        title: 'Tests',
        target: '_blank',
      });
    }

    return links;
  }
}
