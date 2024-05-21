import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MessagesComponent extends Component {
  @tracked username = 'anonymous';

  @action
  addMessage(messageText) {
    this.messages = [
      ...this.messages,
      {
        username: this.username,
        active: true,
        localTime: new Date().toLocaleTimeString('en-US', {
          hour12: true,
          hour: 'numeric',
          minute: '2-digit',
        }),
        content: `<p>${messageText}</p>`,
      },
    ];
  }

  @tracked messages = [
    {
      username: 'Tomster',
      active: true,
      localTime: '4:56 PM',
      content: `
        <p>
          Hey Zoey, did you look at the <strong>DecEmberConfRants</strong> brainstorming doc?
        </p>
      `,
    },
    {
      username: 'Zoey',
      active: false,
      localTime: '5:56 PM',
      current: true,
      content: `
        <p>Hey!
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
}
