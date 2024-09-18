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
      LOCAL_STORAGE_KEY: 'remember-stuff',
      LOREM_IPSUM_DEFAULT: `
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.

        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

        Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
      `,
      LOREM_MD_API_URL: 'https://jaspervdj.be/lorem-markdownum/markdown.txt',
      LORIPSUM_API_URL: 'https://loripsum.net/api',
      METAPHORPSUM_API_URL: 'http://metaphorpsum.com',
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
