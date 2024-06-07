'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'remember-stuff',
    environment,
    rootURL: '/',
    locationType: 'history',
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
      GITHUB_API_URL: 'https://api.github.com',
      GITHUB_USERNAME: 'michaelchadwick',
      MUSIC_API_ROOT: 'https://music.nebyoolae.com',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
