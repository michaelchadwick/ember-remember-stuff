import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import t from 'ember-intl/helpers/t';
import FaIcon from 'frontend/components/fa-icon';

export default class SongListComponent extends Component {
  @tracked isLoading = false;
  <template>
    {{#if this.currentlyLoading}}
      {{t "general.loading" items="songs"}}
    {{else}}
      {{#if @songs}}
        <ul class="song-list">
          {{#each @songs as |song|}}
            <li>
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
    {{/if}}
  </template>
}
