import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import Loading from 'frontend/components/gh-commits/loading';
import GhCommits from 'frontend/components/gh-commits/index';
<template>
  {{pageTitle (t "layout.navAbout")}}
  <h2>{{t "layout.headAbout"}}</h2>
  {{t "sections.about.description" htmlSafe=true}}

  {{#if @controller.isLoading}}
    <Loading />
  {{else}}
    <GhCommits @title="Last 5 Commits" @commits={{@model}} />
  {{/if}}
</template>
