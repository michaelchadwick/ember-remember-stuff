import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import ENV from 'frontend/config/environment';
import eq from "ember-truth-helpers/helpers/eq";
import t from "ember-intl/helpers/t";

export default class RibbonComponent extends Component {
  @tracked env = ENV;
  @tracked title = this.name;

  get name() {
    switch (this.args.content) {
      case 'development':
        return 'dev';
      case 'production':
        return 'prod';
      default:
        return '[n/a]';
    }
  }
<template>{{#if (eq this.title "dev")}}
  <a href={{this.env.APP.NETLIFY_URL}} target="_blank" rel="noopener noreferrer">
    <div class="ribbon {{@position}} {{this.title}}" title={{t "components.ribbon.goToProd"}} data-title={{this.title}}></div>
  </a>
{{else}}
  <div class="ribbon {{@position}} {{this.title}}" data-title={{this.title}}>{{this.title}}</div>
{{/if}}</template>}
