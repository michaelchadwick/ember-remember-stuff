import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
<template>
  {{pageTitle (t "layout.navLinks")}}
  <h2>{{t "layout.headLinks"}}</h2>
  {{#if @model}}
    <ul>
      {{#each @model as |link|}}
        <li>
          <a href={{link.url}} target={{link.target}}>
            {{link.title}}
          </a>
        </li>
      {{/each}}
    </ul>
  {{else}}
    <p>{{t "general.noneFound" items="links"}}</p>
  {{/if}}
</template>
