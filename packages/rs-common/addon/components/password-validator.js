import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { dropTask } from 'ember-concurrency';
import { validatable, Length, NotBlank } from 'rs-common/decorators/validation';

@validatable
export default class PasswordValidatorComponent extends Component {
  @service intl;

  @tracked @Length(5) @NotBlank() password = null;
  @tracked isSaving = false;

  save = dropTask(async () => {
    this.addErrorDisplaysFor(['password']);
    const isValid = await this.isValid();
    if (!isValid) {
      return false;
    }
    this.clearErrorDisplay();
    console.log('saved password');
  });

  saveOrCancel = dropTask(async (event) => {
    const keyCode = event.keyCode;
    const enterKey = 13;
    const escKey = 27;

    if (enterKey === keyCode) {
      await this.save.perform();
    } else if (escKey === keyCode) {
      this.args.close();
    }
  });
}
