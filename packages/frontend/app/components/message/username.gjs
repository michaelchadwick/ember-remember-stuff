import t from 'ember-intl/helpers/t';
<template>
  <h4 class="username">
    {{@name}}
    {{#if @localTime}}
      <span class="local-time">{{t "general.localTime"}}: {{@localTime}}</span>
    {{/if}}
  </h4>
</template>
