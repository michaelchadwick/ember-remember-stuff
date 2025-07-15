import t from 'ember-intl/helpers/t';
import gt from 'ember-truth-helpers/helpers/gt';
import UserList from 'frontend/components/user-list';
<template>
  <h2>{{t "layout.headUsers"}}</h2>
  {{#if (gt @model.length 0)}}
    <UserList @users={{@model}} />
  {{else}}
    <span class="no-results">
      {{t "errors.noResultsFound"}}
    </span>
  {{/if}}
</template>
