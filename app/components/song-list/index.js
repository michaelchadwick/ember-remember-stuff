import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SongListComponent extends Component {
  @tracked isLoading = false;
}
