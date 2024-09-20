'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'frontend',
    environment,
    rootURL: '/',
    locationType: 'history',
    'ember-a11y-testing': {
      componentOptions: {
        turnAuditOff: process.env.SKIP_A11Y || false,
        visualNoiseLevel: 1,
      },
    },
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      AUDIO_PLAYER_FILE_LOCAL: '/assets/audio/fezzish.mp3',
      AUDIO_PLAYER_FILE_REMOTE: 'https://neb.host/files/p/fezzish.mp3',
      BOX_GALLERY_DEFAULTS: [
        {
          block: null,
          text: `
            <p>Hello. This is a Box component. This text is coming from the Box component <code>@text</code> argument, and supports HTML.</p>
            <p>It also has a lot of text in it and is probably too tall, so it should be truncated/faded somehow. Here is some more text, and some more text, and some more text, and some more text, and some more text, just in case it needs it to be super duper tall. If that was not enough text, then I will throw in a list.</p>
            <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
            <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
            <p>Another paragraph to take up height? Don't mind if I put that into the template that gets rendered on the page.</p>
            <ul>
              <li>One</li>
              <li>Dos</li>
              <li>3</li>
              <li>Quatre</li>
              <li>Funf</li>
              <li>667</li>
              <li>Heaven</li>
              <li>Ate</li>
              <li>Nove</li>
              <li>Binary 3</li>
            </ul>
            <p>Cool list, eh?</p>
          `,
        },
        {
          block: `
            <p>Hey! This is a Box component. This text is coming from a block passed into the Box componenet. It <b>does not</b> support <code>HTML</code>.</p>
          `,
          text: null,
        },
      ],
      LOCAL_STORAGE_KEY: 'remember-stuff',
      GITHUB_API_URL: 'https://api.github.com',
      GITHUB_USERNAME: 'michaelchadwick',
      MUSIC_API_ROOT: 'https://music.nebyoolae.com',
      isRunningWithServerArgs: process.argv.includes('--server') || process.argv.includes('-s'),
    },
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = !!process.env.LOG_RESOLVER;
    ENV.APP.LOG_ACTIVE_GENERATION = !!process.env.LOG_ACTIVE_GENERATION;
    ENV.APP.LOG_TRANSITIONS = !!process.env.LOG_TRANSITIONS;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = !!process.env.LOG_TRANSITIONS_INTERNAL;
    ENV.APP.LOG_VIEW_LOOKUPS = !!process.env.LOG_VIEW_LOOKUPS;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  // will output in stdout at build
  switch (environment) {
    case 'development': {
      console.log('ENV: App built for development!');
      console.log('Log Flags', [
        `LOG_RESOLVER: ${ENV.APP.LOG_RESOLVER}`,
        `LOG_ACTIVE_GENERATION: ${ENV.APP.LOG_ACTIVE_GENERATION}`,
        `LOG_TRANSITIONS: ${ENV.APP.LOG_TRANSITIONS}`,
        `LOG_TRANSITIONS_INTERNAL: ${ENV.APP.LOG_TRANSITIONS_INTERNAL}`,
        `LOG_VIEW_LOOKUPS: ${ENV.APP.LOG_VIEW_LOOKUPS}`,
      ]);
      break;
    }
    case 'test': {
      console.log('ENV: App built for test!');
      break;
    }
    case 'production': {
      console.log('ENV: App built for production!');
      break;
    }
    default: {
      console.log('ENV: App built for unknown environment...');
      break;
    }
  }

  return ENV;
};
