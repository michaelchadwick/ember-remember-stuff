import t from 'ember-intl/helpers/t';
import or from 'ember-truth-helpers/helpers/or';
import eq from 'ember-truth-helpers/helpers/eq';
import SongList from 'frontend/components/song-list/index';
import Loading from 'frontend/components/song-list/loading';
<template>
  <h2>{{t "layout.headMusic"}}</h2>
  <p>{{t "sections.music.description"}}</p>
  {{#if (or @model (eq @controller.env "test"))}}
    <SongList @songs={{@model}} />
  {{else}}
    <Loading />
  {{/if}}
</template>
