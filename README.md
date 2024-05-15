# Ember Fake Chat Tutorial Site

Tutorial app to learn about Ember Components. Displays hard-coded chat messages, and allows for new ones to be created.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
  - [Ember CLI Head](https://www.npmjs.com/package/ember-cli-head)
- [PNPM](https://pnpm.io/installation)
- [Web browser](https://browser-update.org/browsers.html)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-fake-chat`
- `pnpm install`

## Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4211](http://localhost:4211).
- Visit your tests at [http://localhost:4211/tests](http://localhost:4211/tests).

### Running Tests

- `ember test` - run tests once in terminal
- `ember t -s` - run tests continuously in a browser

### Linting

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `ember build` (development)
- `ember build --environment=production` (production)
