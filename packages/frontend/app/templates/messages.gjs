import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import Messages from 'frontend/components/messages';
<template>
  {{pageTitle (t "layout.navMessages")}}
  <h2>{{t "layout.headMessages"}}</h2>
  <Messages />
</template>
