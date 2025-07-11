import t from "ember-intl/helpers/t";
<template><div class="gh-user" data-test-gh-user>
  <h3>{{t "components.ghUser.head"}}</h3>

  <strong><a href={{@htmlUrl}}>{{@username}}</a></strong><br />
  {{t "components.ghUser.repos"}}:
  {{@publicRepos}}<br />
  {{t "components.ghUser.gists"}}:
  {{@publicGists}}<br />
  {{t "components.ghUser.followers"}}:
  {{@followers}}<br />
  {{t "components.ghUser.following"}}:
  {{@following}}<br />
</div></template>