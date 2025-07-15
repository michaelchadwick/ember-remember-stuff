import commonRoutes from './mirage/routes';
import commonModels from './mirage/models';
import commonFactories from './mirage/factories';
import applicationSerializer from './mirage/serializers/application';
import ENV from 'frontend/config/environment';
import { createServer, Response } from 'miragejs';
import { DateTime } from 'luxon';
import { pluralize, singularize } from 'ember-inflector';

const { apiVersion } = ENV;

export default function (config) {
  let finalConfig = {
    environment: 'test',
    ...config,
    models: commonModels,
    factories: commonFactories,
    serializers: {
      application: applicationSerializer,
    },
    inflector: {
      pluralize,
      singularize,
    },
    routes() {
      this.timing = 100;
      this.namespace = '';

      this.urlPrefix = 'https://api.github.com/';
      this.get('repos/michaelchadwick/ember-remember-stuff/commits', (schema, request) => {
        console.info('"api.github.com/commits" miragejs request', request);
        return {};
      });

      this.urlPrefix = 'https://music.nebyoolae.com/';
      this.get('*', (schema, request) => {
        console.info('"music.nebyoolae.com" miragejs request', request);
        return null;
      });

      this.urlPrefix = 'https://dave.neb.host';
      this.get('/', (schema, request) => {
        if (request.queryParams.config) {
          return {
            body: {
              config: {
                type: 'config_type-foo',
                apiVersion: '1',
                appVersion: '1.2.3',
                userSearchType: 'config_userSearchType-foo',
                random: 'config_random-foo',
                maxUploadSize: 'config_maxUploadSize-foo',
                trackingEnabled: 'config_trackingEnabled-foo',
                trackingCode: 'config_trackingCode-foo',
                loginUrl: 'config_loginUrl-foo',
                casLoginUrl: 'config_casLoginUrl-foo',
                awesomeLevel: 10,
                lameLevel: 4,
              },
            },
          };
        }
        return {};
      });

      this.urlPrefix = '';
      this.namespace = '/';
      this.passthrough();
      commonRoutes(this);

      // this.get('api/users/*', (schema, request) => {
      //   console.log('"api/users/*" miragejs request', request);
      //   return {
      //     data: {
      //       type: 'user',
      //       id: '1',
      //       attributes: {
      //         firstName: 'Mirage',
      //         lastName: 'Jayess',
      //         displayName: 'Mir J',
      //         email: 'miragejs@theoasis.net',
      //         root: true,
      //       },
      //     },
      //   };
      // });

      this.post('auth/login', (schema, request) => {
        const errors = [];
        var attrs = JSON.parse(request.requestBody);
        if (!('username' in attrs) || !attrs.username) {
          errors.push('missingUsername');
        }
        if (!('password' in attrs) || !attrs.password) {
          errors.push('missingPassword');
        }
        const username = attrs.username.toLowerCase();
        if (errors.length === 0) {
          if (username === 'demo' && attrs.password === 'demo') {
            const now = DateTime.now();
            const nextWeek = now.plus({ weeks: 1 });
            const header = '{"alg":"none"}';
            const body = `{"iss": "rs","aud": "rs","iat": "${now.toUnixInteger()}","exp": "${nextWeek.toUnixInteger()}","user_id": 4136}`;
            const encodedData = window.btoa(header) + '.' + window.btoa(body) + '.';
            return {
              jwt: encodedData,
            };
          } else {
            errors.push('badCredentials');
          }
        }
        return new Response(400, {}, { errors: errors });
      });
      this.get('auth/logout', () => {
        return new Response(200);
      });
      this.get('auth/token', () => {
        //un comment to send unauthenticated user data
        // return {
        //   jwt: null
        // };
        const now = DateTime.now();
        const nextWeek = now.plus({ weeks: 1 });
        const header = '{"alg":"none"}';
        const body = `{"iss": "rs","aud": "rs","iat": "${now.toUnixInteger()}","exp": "${nextWeek.toUnixInteger()}","user_id": 4136}`;
        const encodedData = window.btoa(header) + '.' + window.btoa(body) + '.';
        return {
          jwt: encodedData,
        };
      });
      this.get('auth/whoami', () => {
        return {
          userId: 4136,
        };
      });
      this.get('application/config', () => {
        // this.get('?config', () => {
        return {
          body: {
            config: {
              type: 'form',
              apiVersion,
              appVersion: '1.2.3',
              materialStatusEnabled: true,
              showCampusNameOfRecord: true,
            },
          },
        };
      });
      this.post('errors', () => {
        //doesn't do anything, just swallows errors
      });
    },
  };

  // console.log('finalConfig', finalConfig);

  return createServer(finalConfig);
}
