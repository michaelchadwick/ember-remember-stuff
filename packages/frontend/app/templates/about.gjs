import t from 'ember-intl/helpers/t';
import Loading from 'frontend/components/gh-commits/loading';
import GhCommits from 'frontend/components/gh-commits/index';
<template>
  <h2>{{t "layout.headAbout"}}</h2>
  {{t "sections.about.description" htmlSafe=true}}

  {{#if @controller.isLoading}}
    <Loading />
  {{else}}
    <GhCommits @title="Last 5 Commits" @commits={{@model}} />
  {{/if}}
</template>
