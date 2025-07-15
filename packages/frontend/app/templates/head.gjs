<template>
  <title>
    ({{@controller.model.envTitle}})
    {{#if @controller.model.routeTitle}}
      {{@controller.model.routeTitle}}
      |
      {{@controller.model.title}}
    {{else}}
      {{@controller.model.title}}
    {{/if}}
  </title>

  {{! template-lint-disable no-forbidden-elements }}
  <meta property="og:title" content={{@controller.model.ogTitle}} />

  <link rel="shortcut icon" href="/assets/icons/favicon-{{@controller.model.faviconType}}32.png" />
  <link rel="icon" href="/assets/icons/favicon-{{@controller.model.faviconType}}32.png" />
</template>
