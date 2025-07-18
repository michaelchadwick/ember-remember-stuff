import t from 'ember-intl/helpers/t';
<template>
  <div class="gh-commits-loading">
    <h3>{{if @title @title (t "components.headGhCommits")}}</h3>
    {{#if @commits}}
      <p>{{t "general.loading" items="commits"}}</p>
    {{else}}
      <p>{{t "general.noneFound" items="commits"}}</p>
    {{/if}}
  </div>
</template>
