# quasar-dotenv

Quasar Dotenv is a wrapper around [Dotenv](https://github.com/motdotla/dotenv#readme) which enables reading variables from a .env file and loading them into the Quasar runtime via `process.env`. This according to the [Quasar Guidelines](https://quasar-framework.org/guide/app-quasar.conf.js.html#Example-setting-env-for-dev-build)

## Install

```bash
# with npm
npm install quasar-dotenv

# or with Yarn
yarn add quasar-dotenv
```

## Usage

At the beggining of your `quasar.conf.js` file, require and configure dotenv.

```javascript
const env = require('quasar-dotenv').config()
```

Include the `env` variable in the build block of `quasar.conf.js`

```javascript
   build: {
      // ...
      env: env,
      // ...
   }
```

Create a `.env` and a `.env.example` files in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

```dosini
API_URL=localhost
API_CLIENT_ID=1
API_CLIENT_SECRET=123456789ULTRASECRET123456789
```

That's it.

`process.env` now has the keys and values you defined in your `.env` file.

## About Hot Reloading
If you make any changes to your `.env` file or system variables you will need to run `quasar dev` or `quasar build` see the updated values.

## Working with CI/CD enviroments (or reading from system enviroment variables)

In some scenarios like when working in a CI enviroment where we might want to load enviroment variables from the system variables instead of an `.env` file. This plugin will handle loading system variables as long as they are present in the `.env.example` file.

> The `.env.example` acts as a dictionary allowing the plugin to choose which variables to load from the system variables
