import t from 'ember-intl/helpers/t';
import FaIcon from 'frontend/components/fa-icon';
<template>
  {{#if @songs}}
    <ul class="song-list" data-test-song-list>
      {{#each @songs as |song|}}
        <li data-list-song-list-item>
          <a
            href={{song.detailUrl}}
            target="_blank"
            rel="noopener noreferrer"
            title={{t "general.info"}}
          >
            <FaIcon @icon="circle-info" />
          </a>
          <a
            href={{song.fileUrl}}
            target="_blank"
            rel="noopener noreferrer"
            title={{t "general.listen"}}
          >
            <FaIcon @icon="ear-listen" />
          </a>
          <strong>{{song.title}}</strong>
          {{t "general.from"}}
          <em>{{song.album}}</em>
          {{t "general.by"}}
          {{song.artist}}
        </li>
      {{/each}}
    </ul>
  {{else}}
    <p>{{t "general.noneFound" items="songs"}}</p>
  {{/if}}
</template>
