import { LinkTo } from '@ember/routing';
import t from 'ember-intl/helpers/t';
import UserProfile from 'frontend/components/user-profile';
<template>
  <h2>
    <LinkTo @route="users">{{t "general.users"}}</LinkTo>
    {{t "general.gt"}}
    {{t "general.user"}}
  </h2>
  <UserProfile @user={{@model}} />
</template>
