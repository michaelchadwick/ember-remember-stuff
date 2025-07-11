import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from "@ember/modifier";
import FaIcon from "rs-common/components/fa-icon";
import UserNameInfo from "rs-common/components/user-name-info";

export default class UserListItemComponent extends Component {
  get kloutLevel() {
    return this.args.kloutLevel ?? 0;
  }

  get rowLevel() {
    return this.args.rowLevel ?? 0;
  }

  get isSelected() {
    return this.args.selected;
  }

  get linkToUser() {
    return this.args.linkToUser ?? false;
  }

  get showLevels() {
    return this.args.showLevels ?? false;
  }

  @action
  buffRow(amount = 1) {
    this.rowLevel += amount;
  }

  @action
  toggleSelected() {
    this.args.onSelectUser(this.args.user);
  }
<template>{{!-- template-lint-disable no-invalid-interactive --}}
<tr class="user-list-item{{if this.isSelected " selected"}}" {{on "click" this.toggleSelected}} data-test-user-list-item>
  <td class="user-checked-value" colspan="1" data-test-user-selected>
    {{#if this.isSelected}}
      <FaIcon @icon="check" />
    {{/if}}
  </td>
  <td class="user-id-value" colspan="1" data-test-user-id>
    {{@user.id}}
  </td>
  <td class="user-fullname-value" colspan="1" data-test-user-full-name>
    <UserNameInfo @user={{@user}} @kloutLevel={{this.kloutLevel}} @onBuffKlout={{@onBuffKlout}} @rowLevel={{this.rowLevel}} @onBuffRow={{this.buffRow}} @linkToUser={{this.linkToUser}} @showLevels={{this.showLevels}} />
  </td>
  <td class="user-email-value" colspan="1" data-test-user-email>
    {{@user.email}}
  </td>
  <td class="user-root-value" colspan="1" data-test-user-root>
    {{#if @user.root}}
      <FaIcon @icon="shield" />
    {{/if}}
  </td>
</tr></template>}
