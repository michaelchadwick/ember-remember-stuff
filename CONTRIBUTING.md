# How To Contribute

## Installation

- `git clone <repository-url>`
- `cd my-addon`
- `pnpm install`

## Linting

- `pnpm run lint`
- `pnpm run lint:fix`

## Running tests

- `pnpm test` – Runs the test suite on the current Ember version

## Running the test application

- `pnpm start`
- Visit the test application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://cli.emberjs.com/release/](https://cli.emberjs.com/release/).

## Add additional fields to GhUser Component

- Add new model fields to `app/models/gh-user.js`
- Add new serializer fields to `app/serializers/gh-user.js`
  - Use fake data from `public/api/gh-users/michaelchadwick.json`
- Pass new fields into `<Debug>` component in `app/templates/application.hbs`
- Add those fields to `<GhUser>` component in `app/components/debug.hbs`
  - (Optional) Add new translations to `/translations/*` files
- Add those fields to `app/components/gh-user.hbs` template
