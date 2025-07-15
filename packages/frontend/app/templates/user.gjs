import { LinkTo } from '@ember/routing';
import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import UserProfile from 'frontend/components/user-profile';
<template>
  {{pageTitle @model.fullNameFromDisplayName " | " (t "general.users")}}
  <h2>
    <LinkTo @route="users">{{t "general.users"}}</LinkTo>
    {{t "general.gt"}}
    {{t "general.user"}}
  </h2>
  <UserProfile @user={{@model}} />
</template>
