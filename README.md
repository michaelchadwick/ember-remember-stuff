# RemEmber Stuff Tutorial Site

Tutorial app to learn about [Ember Core Concepts](https://guides.emberjs.com/release/components/).

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
- [PNPM](https://pnpm.io/installation)
- [Web browser](https://browser-update.org/browsers.html)

## Installation

- `git clone <repository-url>` this repository
- `cd remember-stuff`
- `npm install`

## Running / Development

- `npm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `npm run test`
- `npm run test:ember -- --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm exec ember build` (development)
- `npm run build` (production)

### Deploying

Currently being built on [Netlify](https://mc-emberjs-remember-stuff.netlify.app). Re-deploys on pushes to master.

### Notable Dependencies

- [Ember CLI DotEnv](https://www.npmjs.com/package/ember-cli-dotenv)
- [Ember CLI Head](https://www.npmjs.com/package/ember-cli-head)
- [Ember CLI Sass](https://www.npmjs.com/package/ember-cli-sass)
- [Ember CLI Truth Helpers](https://www.npmjs.com/package/ember-truth-helpers)
- [Fontawesome](https://www.npmjs.com/package/@fortawesome/ember-fontawesome)
- [Husky](https://github.com/typicode/husky)

### Add Additional Fields to GhUser Component

- Add new model fields to `app/models/gh-user.js`
- Add new serializer fields to `app/serializers/gh-user.js`
  - Use fake data from `public/api/gh-users/michaelchadwick.json`
- Pass new fields into `<Debug>` component in `app/templates/application.hbs`
- Add those fields to `<GhUser>` component in `app/components/gh-user.hbs`
  - (Optional) Add new translations to `/translations/*` files
