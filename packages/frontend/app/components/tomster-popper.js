import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TomsterPopperComponent extends Component {
  @tracked isVisible = false;

  @action
  popToggle() {
    this.isVisible = !this.isVisible;

    console.log(`tomster says...${this.isVisible ? 'hello' : 'goodbye'}`);
  }
}
