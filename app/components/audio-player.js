import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'ember-fake-chat/config/environment';

export default class AudioPlayerComponent extends Component {
  @tracked isPlaying = false;
  @tracked volume = 20;
  @tracked env = ENV.environment;

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
