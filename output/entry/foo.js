require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libBaz = require("../lib/baz");

var _libBaz2 = _interopRequireDefault(_libBaz);

var _libUseBabel = require("../lib/use-babel");

var _libUseBabel2 = _interopRequireDefault(_libUseBabel);

var _vendorNonBabel = require("../../vendor/non-babel");

var _vendorNonBabel2 = _interopRequireDefault(_vendorNonBabel);

(0, _libBaz2["default"])();

},{"../../vendor/non-babel":5,"../lib/baz":3,"../lib/use-babel":4}],5:[function(require,module,exports){
var foo = require("./src/foo")

// This file is raw ES5 (not arrow function
module.exports = function(x){
  // non babebabe
  return (x => 10)
}
},{"./src/foo":6}],6:[function(require,module,exports){
// This file is raw ES5 (not arrow function
module.exports = function(x){
  // non babebabe
  return `inter ${x} polation`
}
},{}],4:[function(require,module,exports){
// This file is babel (use arrow function
"use strict";

module.exports = function (x) {
  // babebabe
  return function (x) {
    return 10;
  };
};

},{}]},{},[2]);
