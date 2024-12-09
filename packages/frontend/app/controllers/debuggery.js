import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DebuggeryController extends Controller {
  @tracked detailsGalleryExpanded = false;
  @service('local-storage') ls;

  get donutData() {
    return [
      {
        label: 'Super Cool',
        data: 100,
        description: 'Lorem Ipsum',
      },
      {
        label: 'Very Awesome',
        data: 200,
        description: 'Long text description here.',
      },
      {
        label: 'Moderately Fine',
        data: 350,
        description: 'Long text description here.',
      },
      {
        label: 'Kinda Neat',
        data: 10,
        description: 'Long text description here.',
      },
    ];
  }

  @action
  detailsGalleryToggle() {
    if (this.ls.get('detailsGalleryExpanded')) {
      this.detailsGalleryExpanded = this.ls.get('detailsGalleryExpanded');
    }

    this.detailsGalleryExpanded = !this.detailsGalleryExpanded;
    this.ls.set('detailsGalleryExpanded', this.detailsGalleryExpanded);
  }
}
