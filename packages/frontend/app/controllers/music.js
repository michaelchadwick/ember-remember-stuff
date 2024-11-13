import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class MusicController extends Controller {
  @tracked isLoading = true;
}
