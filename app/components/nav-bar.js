import Component from '@glimmer/component';

export default class NavBarComponent extends Component {
  get links() {
    const links = [];

    links.push({
      route: 'about',
      title: 'About',
      target: '_self',
    });

    links.push({
      route: 'links',
      title: 'Links',
      target: '_self',
    });

    return links;
  }
}
