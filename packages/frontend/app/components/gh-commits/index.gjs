import Component from '@glimmer/component';
import { service } from '@ember/service';
import t from 'ember-intl/helpers/t';
import formatDate from 'ember-intl/helpers/format-date';

export default class GhCommitsComponent extends Component {
  @service store;
  <template>
    <div class="gh-commits">
      <h3>{{if @title @title (t "components.ghCommits.head")}}</h3>
      {{#if @commits}}
        <table>
          <tbody>
            {{#each @commits as |commit|}}
              <tr>
                <td class="commit-date">
                  {{formatDate
                    commit.commit.author.date
                    month="2-digit"
                    day="2-digit"
                    year="numeric"
                    hour="2-digit"
                    minute="2-digit"
                  }}
                </td>
                <td class="commit-message">
                  <a href={{commit.html_url}} target="_blank" rel="noopener noreferrer">
                    {{commit.commit.message}}
                  </a>
                </td>
              </tr>
            {{/each}}
          </tbody>
        </table>
      {{else}}
        <p>{{t "general.noneFound" items="commits"}} {{t "errors.checkConsole"}}</p>
      {{/if}}
    </div>
  </template>
}
