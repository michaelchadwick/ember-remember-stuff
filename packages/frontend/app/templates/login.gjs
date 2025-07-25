import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import LoginForm from 'frontend/components/login-form';
<template>
  {{pageTitle (t "general.login")}}
  <LoginForm />
</template>
