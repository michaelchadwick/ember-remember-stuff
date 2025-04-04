# RemEmber Stuff Test Site

![Continuous Integration](https://github.com/michaelchadwick/ember-remember-stuff/workflows/Continuous%20Integration/badge.svg)
[![Code Climate](https://codeclimate.com/github/michaelchadwick/ember-remember-stuff/badges/gpa.svg)](https://codeclimate.com/github/michaelchadwick/ember-remember-stuff)
[![Test Coverage](https://codeclimate.com/github/michaelchadwick/ember-remember-stuff/badges/coverage.svg)](https://codeclimate.com/github/michaelchadwick/ember-remember-stuff/coverage)
[![Netlify Status](https://api.netlify.com/api/v1/badges/57adfefa-0be0-4ab8-8958-13357cd524f6/deploy-status)](https://app.netlify.com/sites/mc-emberjs-remember-stuff/deploys)

Test app to learn about [Ember Core Concepts](https://guides.emberjs.com/release/components/).

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
- `pnpm install`

## Running / Development

- `pnpm run start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `pnpm run test`
- `pnpm run test:ember -- --server`

#### Get Code Coverage For Tests

- `COVERAGE=true pnpm run test`

### Linting

- `pnpm run lint`
- `pnpm run lint:hbs`
- `pnpm run lint:css`
- `pnpm run lint:js`
- `pnpm run lint:js --fix`

### Building

- `pnpm --filter frontend exec ember build` (development)
- `pnpm --filter frontend exec ember build --environment production` (production)

### Deploying

Currently being built on [Netlify](https://mc-emberjs-remember-stuff.netlify.app). Re-deploys on pushes to master.

### Notable Dependencies

- [Ember CLI Head](https://www.npmjs.com/package/ember-cli-head)
- [Ember CLI Sass](https://www.npmjs.com/package/ember-cli-sass)
- [Ember CLI Truth Helpers](https://www.npmjs.com/package/ember-truth-helpers)
- [Ember Concurrency](https://ember-concurrency.com)
- [Fontawesome](https://www.npmjs.com/package/@fortawesome/ember-fontawesome)
- [Husky](https://github.com/typicode/husky)

### Credits

- [SVG Backgrounds](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)
