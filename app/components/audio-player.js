import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'remember-stuff/config/environment';

export default class AudioPlayerComponent extends Component {
  @tracked isPlaying = false;
  @tracked rangeVolume = 30;
  @tracked env = ENV.environment;

  maxVolume = 100;
  decreaseVolume = null;

  @action
  setVolume(event) {
    this.rangeVolume = parseInt(event.target.value, 10);
  }

  @action
  play() {
    this.isPlaying = true;
  }

  @action
  pause() {
    this.isPlaying = false;
  }

  get audioVolume() {
    return (this.rangeVolume / 100).toFixed(2);
  }
}
