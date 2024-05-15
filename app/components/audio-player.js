import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AudioPlayerComponent extends Component {
  @tracked isPlaying = false;
  @tracked volume = 20;

  @action
  volChange(volume) {
    this.volume = volume;
  }

  @action
  play() {
    this.isPlaying = true;
  }

  @action
  pause() {
    this.isPlaying = false;
  }
}
