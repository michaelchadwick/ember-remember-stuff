import Component from '@glimmer/component';

export default class NavBarComponent extends Component {
  get routes() {
    return [
      {
        route: 'about',
        title: 'About',
        target: '_self',
      },
      {
        route: 'messages',
        title: 'Messages',
        target: '_self',
      },
      {
        route: 'music',
        title: 'Music',
        target: '_self',
      },
      {
        route: 'links',
        title: 'Links',
        target: '_self',
      },
      {
        route: 'contact',
        title: 'Contact',
        target: '_self',
      },
    ];
  }
}