global.expect = require('expect.js');
var jsdom = require('jsdom');
var TestUtils = require('react-addons-test-utils');

require('babel-register')
require('module').Module._initPaths()
require.extensions['.scss'] = function() {};
require.extensions['.svg'] = function() {};
require.extensions['.png'] = function() {};
