/* eslint-disable node/no-extraneous-require */
'use strict';

const Funnel = require("broccoli-funnel");
const path = require("path");
const mergeTrees = require('broccoli-merge-trees');
const log = require('broccoli-stew').log;


module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/my-third-party-package/third-party.js');
  },

  treeForVendor(vendorTree) {
    const assetDir = path.join(this.project.root + '/node_modules/my-third-party-package/src');

    var thirdPartyTree = new Funnel(assetDir, {
      files: ['third-party.js'],
      destDir: 'my-third-party-package'
    });

    return mergeTrees([vendorTree, log(thirdPartyTree)]);
  }
};
