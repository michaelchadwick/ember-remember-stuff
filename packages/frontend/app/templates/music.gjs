import t from 'ember-intl/helpers/t';
import or from 'ember-truth-helpers/helpers/or';
import eq from 'ember-truth-helpers/helpers/eq';
import { on } from '@ember/modifier';
import { pageTitle } from 'ember-page-title';
import FaIcon from 'frontend/components/fa-icon';
import SongList from 'frontend/components/song-list';
<template>
  {{pageTitle (t "layout.navMusic")}}

  <div data-test-music>
    <h2>{{t "layout.headMusic"}}</h2>

    <p>{{t "sections.music.description"}}</p>

    {{! this works, but always returns the same data...for now }}
    <button
      type="button"
      aria-label={{t "general.refresh"}}
      {{on "click" @controller.refreshModel}}
    ><FaIcon @icon="arrows-rotate" /></button>

    {{! if we are testing, just pass nothing along to SongList }}
    {{#if (or @model (eq @controller.env "test"))}}
      <SongList @songs={{@model}} />
    {{else}}
      <FaIcon @icon="spinner" @spin={{true}} />{{t "general.loading"}}
    {{/if}}
  </div>
</template>
