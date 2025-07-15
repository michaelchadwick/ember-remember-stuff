import { LinkTo } from '@ember/routing';
import t from 'ember-intl/helpers/t';
import FileUpload from 'frontend/components/file-upload';
<template>
  <h2>
    <LinkTo @route="debuggery">{{t "layout.headDebuggery"}}</LinkTo>
    {{t "general.gt"}}
    {{t "layout.headFileUpload"}}
  </h2>
  <FileUpload />
</template>
