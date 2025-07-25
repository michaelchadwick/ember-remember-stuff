import t from 'ember-intl/helpers/t';
import { pageTitle } from 'ember-page-title';
import ErrorDisplay from 'frontend/components/error-display';
import FaIcon from 'frontend/components/fa-icon';
import Footer from 'frontend/components/layout/footer';
import NavBar from 'frontend/components/layout/nav-bar';
import Ribbon from 'frontend/components/layout/ribbon';
import TomsterPopper from 'frontend/components/tomster-popper';

<template>
  {{pageTitle (t "general.siteTitle") separator=" | " front=false}}
  <div class="application-wrapper">
    <TomsterPopper />

    <Ribbon @position="right" @content={{@controller.appEnv}} />

    <header>
      <NavBar />
    </header>

    {{#if this.session.isAuthenticated}}
      <div>
        <FaIcon @icon="user" @title={{this.session.data.authenticated.username}} />
        <span>{{this.session.data.authenticated.username}}</span>
      </div>
    {{else}}
      <div>
        <FaIcon @icon="user-secret" @title={{t "general.anonymousUser"}} />
        <span>{{t "general.anonymousUser"}}</span>
      </div>
    {{/if}}

    <main>
      {{#if @controller.showErrorDisplay}}
        <ErrorDisplay @errors={{@controller.errors}} @clearErrors={{@controller.clearErrors}} />
      {{else}}
        {{outlet}}
      {{/if}}
    </main>
  </div>

  <Footer
    @audioPath={{@controller.audioPath}}
    @audioShouldLoop={{@controller.audioShouldLoop}}
    @rsVersionTag={{@controller.rsVersionTag}}
    @apiVersionTag={{@controller.apiVersionTag}}
    @frontendVersionTag={{@controller.frontendVersionTag}}
  />
</template>
