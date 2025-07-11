import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { DateTime } from 'luxon';
import { modifier } from 'ember-modifier';
import ENV from 'frontend/config/environment';
import { on } from "@ember/modifier";
import Message from "frontend/components/message";
import sanitize from "frontend/helpers/sanitize";
import t from "ember-intl/helpers/t";
import NewMessageInput from "frontend/components/forms/new-message-input";

export default class MessagesComponent extends Component {
  @tracked username = 'anonymous';
  @tracked messages = [
    {
      username: 'Tomster',
      active: true,
      localTime: this.tomsterLocalTime,
      content: `
        <p>
          Hey Zoey, did you look at the <strong>DecEmberConfRants</strong> brainstorming doc I sent from California, USA?
        </p>
      `,
    },
    {
      username: 'Zoey',
      active: false,
      localTime: this.zoeyLocalTime,
      current: true,
      content: `
        <p>Hallo from Berlin!
          I love the ideas! I'm really excited about where this year's
          <strong>DecEmberConfRants</strong> is going, I'm sure it's going to be the best one yet. Some quick notes:
        </p>

        <ul>
          <li>
            A personal plane for each attendee would definitely make the getting to the venue ultra cool, but I think it might be a bit out of our budget. Maybe we could rent some electric scooters instead?
          </li>
          <li>
            We absolutely will need more cheese wheels as last year's complaints
            <em>really</em> rattled our sponsors. Will get on that now before dairy
            season hits its peak.
          </li>
        </ul>

        <p>Let me know when you've nailed down the dates!</p>
      `,
    },
  ];
  @tracked messagesContainer;

  getMessagesContainer = modifier((element) => {
    this.messagesContainer = element;
  });

  defaultDateTimeFormat = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    minute: '2-digit',
    hour: '2-digit',
    hour12: true,
  };

  // Tomster: Los Angeles, CA, USA
  get tomsterLocalTime() {
    const f = this.defaultDateTimeFormat;
    f.zone = 'America/Los_Angeles';

    return DateTime.fromObject({}, f).setLocale('en-US').toLocaleString(f).toUpperCase();
  }

  // Zoey: Berlin, Germany, Europe
  get zoeyLocalTime() {
    const f = this.defaultDateTimeFormat;
    f.zone = 'Europe/Berlin';

    return DateTime.fromObject({}, f).setLocale('en-DE').toLocaleString(f).toUpperCase();
  }

  @action
  displayDebugMessage() {
    if (ENV.environment != 'production') {
      console.info(
        'Hello local developer! You clicked on the messages container!',
        this.messagesContainer,
      );
    }
  }

  @action
  addMessage(messageText) {
    this.messages = [
      ...this.messages,
      {
        username: this.username,
        active: true,
        localTime: new Date().toLocaleTimeString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          minute: '2-digit',
          hour: 'numeric',
          hour12: true,
        }),
        content: `<p>${messageText}</p>`,
      },
    ];
  }
<template><div class="messages" {{!-- template-lint-disable no-invalid-interactive --}} {{on "click" this.displayDebugMessage}} {{this.getMessagesContainer this}} data-test-messages>
  {{#each this.messages as |message index|}}
    <Message @id="message-{{index}}" @username={{message.username}} @userIsActive={{message.active}} @userIsCurrent={{message.current}} @userLocalTime={{message.localTime}}>
      {{sanitize message.content}}
    </Message>
  {{else}}
    <p>{{t "general.noneFound" items="messages"}}</p>
    {{t "sections.messages.addNew"}}
  {{/each}}

  <NewMessageInput @onCreate={{this.addMessage}} />
</div></template>}
