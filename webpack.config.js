const { sharedMappings, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-feature',

  exposes: {
    './Module': './src/app/feature/feature.module.ts'
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "mfe-tools": { singleton: true, strictVersion: false }
  },

});
