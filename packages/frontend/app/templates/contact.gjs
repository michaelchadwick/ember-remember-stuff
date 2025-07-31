import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import ContactForm from 'frontend/components/forms/contact-form';
<template>
  {{pageTitle (t "layout.navContact")}}
  <h2>{{t "layout.headContact"}}</h2>
  <ContactForm />
  <ContactForm />
</template>
