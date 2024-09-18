import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { DateTime } from 'luxon';

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

  // Tomster: Los Angeles, CA, USA
  get tomsterLocalTime() {
    const f = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      minute: '2-digit',
      hour: '2-digit',
      hour12: true,
      zone: 'America/Los_Angeles',
    };

    return DateTime.fromObject({}, f).setLocale('en-US').toLocaleString(f).toUpperCase();
  }

  // Zoey: Berlin, Germany, Europe
  get zoeyLocalTime() {
    const f = {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      minute: '2-digit',
      hour: '2-digit',
      hour12: true,
      zone: 'Europe/Berlin',
    };

    return DateTime.fromObject({}, f).setLocale('en-DE').toLocaleString(f).toUpperCase();
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
}
