import Component from '@glimmer/component';
import { service } from '@ember/service';
import { LinkTo } from '@ember/routing';
import t from 'ember-intl/helpers/t';

export default class NotFoundComponent extends Component {
  @service router;

  get showLink() {
    try {
      return Boolean(this.router.urlFor('index'));
    } catch {
      return false;
    }
  }
  <template>
    <p data-test-not-found>
      {{t "general.notFoundMessage"}}
      <br />
      {{#if this.showLink}}
        <LinkTo @route="index" data-test-back-to-index>
          {{t "general.backToHome"}}
        </LinkTo>
      {{/if}}
    </p>
  </template>
}
