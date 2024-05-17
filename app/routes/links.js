import Route from '@ember/routing/route';

export default class LinksRoute extends Route {
  async model() {
    return [
      {
        url: 'https://emberjs.com',
        title: 'EmberJS',
        target: '_blank',
      },
      {
        url: 'https://guides.emberjs.com',
        title: 'EmberJS Guides',
        target: '_blank',
      },
      {
        url: 'https://github.com/emberjs/ember.js',
        title: 'EmberJS Github Source',
        target: '_blank',
      },
    ];
  }
}
