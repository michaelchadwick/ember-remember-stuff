import t from 'ember-intl/helpers/t';
<template>
  <h3 class="username">
    {{@name}}
    {{#if @localTime}}
      <span class="local-time">{{t "general.localTime"}}: {{@localTime}}</span>
    {{/if}}
  </h3>
</template>
