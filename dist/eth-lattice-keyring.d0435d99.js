// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/bitwise/esm/bits/and.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the AND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * and([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,0,0,1,0,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 AND bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = bits1[i] & bits2[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/nand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the NAND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NAND bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = bits1[i] & bits2[i] ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/nor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,0,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NOR bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = (bits1[i] | bits2[i]) ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Flips all given bits and returns the flipped bits.
 *
 * @example
 * not([1,0,1,1,0,1]) => [0,1,0,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [NOT bits]
 */
var _default = function _default(bits) {
  var result = [];

  for (var i = 0; i < bits.length; i++) result[i] = bits[i] ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/or.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the OR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * or([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,1,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 OR bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = bits1[i] | bits2[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-and.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the AND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceAnd([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} AND bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result &= bits[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-nand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the NAND operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNand([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NAND bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result = result & bits[i] ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-nor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the NOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceNor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} NOR bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result = (result | bits[i]) ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-or.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the OR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceOr([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} OR bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result |= bits[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-xnor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the XNOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXnor([1, 0, 0, 0, 1, 1, 0, 1]) => 1
 *
 * @param {Array} bits input data
 * @return {Integer} XNOR bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result ^= bits[i] ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/reduce-xor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the XOR operation on the given bits. Returns one bit.
 * Throws if less than 2 bits are given.
 *
 * @example
 * reduceXor([1, 0, 0, 0, 1, 1, 0, 1]) => 0
 *
 * @param {Array} bits input data
 * @return {Integer} XOR bits
 */
var _default = function _default(bits) {
  if (bits.length < 2) throw new RangeError('Not enough bits.');
  var result = bits[0];

  for (var i = 1; i < bits.length; i++) result ^= bits[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/to-boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts a bit array to a boolean array.
 *
 * @example toBoolean([0, 1]) => [false, true]
 * @param {Array} bits input data
 * @returns {Array} boolean bits
 */
var _default = function _default(bits) {
  var result = [];

  for (var i = 0; i < bits.length; i++) result[i] = bits[i] === 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/to-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts a bit array to a string. If defined, inserts spacer every spacing characters, but never inserts it as the last substring.
 *
 * @example
 * toString([1,0,1,0,1,0], 2, '_') => '10_10_10'
 *
 * @param {Array} bits the bits to convert
 * @param {Number} spacing where to place the spacers
 * @param {Number} spacer the string used as a spacer
 * @return {String}
 */
var _default = function _default(bits, spacing, spacer) {
  if (spacing === void 0) {
    spacing = 0;
  }

  if (spacer === void 0) {
    spacer = ' ';
  }

  if (!spacing) return bits.join('');
  var result = '';

  for (var i = 0; i < bits.length; i++) {
    result += "" + bits[i];
    if (i % spacing === spacing - 1 && i !== bits.length - 1) result += spacer;
  }

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/xnor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the exclusive NOR operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xnor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [0,0,0,1,0,1,1,0]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XNOR bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = bits1[i] ^ bits2[i] ^ 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/xor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies the exclusive or operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * xor([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,0,1,0,0,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 XOR bits2]
 */
var _default = function _default(bits1, bits2) {
  var result = [];

  for (var i = 0; i < bits1.length; i++) result[i] = bits1[i] ^ bits2[i];

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/bits/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function () {
    return _and.default;
  }
});
Object.defineProperty(exports, "nand", {
  enumerable: true,
  get: function () {
    return _nand.default;
  }
});
Object.defineProperty(exports, "nor", {
  enumerable: true,
  get: function () {
    return _nor.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function () {
    return _not.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function () {
    return _or.default;
  }
});
Object.defineProperty(exports, "reduceAnd", {
  enumerable: true,
  get: function () {
    return _reduceAnd.default;
  }
});
Object.defineProperty(exports, "reduceNand", {
  enumerable: true,
  get: function () {
    return _reduceNand.default;
  }
});
Object.defineProperty(exports, "reduceNor", {
  enumerable: true,
  get: function () {
    return _reduceNor.default;
  }
});
Object.defineProperty(exports, "reduceOr", {
  enumerable: true,
  get: function () {
    return _reduceOr.default;
  }
});
Object.defineProperty(exports, "reduceXnor", {
  enumerable: true,
  get: function () {
    return _reduceXnor.default;
  }
});
Object.defineProperty(exports, "reduceXor", {
  enumerable: true,
  get: function () {
    return _reduceXor.default;
  }
});
Object.defineProperty(exports, "toBoolean", {
  enumerable: true,
  get: function () {
    return _toBoolean.default;
  }
});
Object.defineProperty(exports, "toString", {
  enumerable: true,
  get: function () {
    return _toString.default;
  }
});
Object.defineProperty(exports, "xnor", {
  enumerable: true,
  get: function () {
    return _xnor.default;
  }
});
Object.defineProperty(exports, "xor", {
  enumerable: true,
  get: function () {
    return _xor.default;
  }
});
exports.default = void 0;

var _and = _interopRequireDefault(require("./and"));

var _nand = _interopRequireDefault(require("./nand"));

var _nor = _interopRequireDefault(require("./nor"));

var _not = _interopRequireDefault(require("./not"));

var _or = _interopRequireDefault(require("./or"));

var _reduceAnd = _interopRequireDefault(require("./reduce-and"));

var _reduceNand = _interopRequireDefault(require("./reduce-nand"));

var _reduceNor = _interopRequireDefault(require("./reduce-nor"));

var _reduceOr = _interopRequireDefault(require("./reduce-or"));

var _reduceXnor = _interopRequireDefault(require("./reduce-xnor"));

var _reduceXor = _interopRequireDefault(require("./reduce-xor"));

var _toBoolean = _interopRequireDefault(require("./to-boolean"));

var _toString = _interopRequireDefault(require("./to-string"));

var _xnor = _interopRequireDefault(require("./xnor"));

var _xor = _interopRequireDefault(require("./xor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  and: _and.default,
  nand: _nand.default,
  nor: _nor.default,
  not: _not.default,
  or: _or.default,
  reduceAnd: _reduceAnd.default,
  reduceNand: _reduceNand.default,
  reduceNor: _reduceNor.default,
  reduceOr: _reduceOr.default,
  reduceXnor: _reduceXnor.default,
  reduceXor: _reduceXor.default,
  toBoolean: _toBoolean.default,
  toString: _toString.default,
  xnor: _xnor.default,
  xor: _xor.default
};
exports.default = _default;
},{"./and":"../node_modules/bitwise/esm/bits/and.js","./nand":"../node_modules/bitwise/esm/bits/nand.js","./nor":"../node_modules/bitwise/esm/bits/nor.js","./not":"../node_modules/bitwise/esm/bits/not.js","./or":"../node_modules/bitwise/esm/bits/or.js","./reduce-and":"../node_modules/bitwise/esm/bits/reduce-and.js","./reduce-nand":"../node_modules/bitwise/esm/bits/reduce-nand.js","./reduce-nor":"../node_modules/bitwise/esm/bits/reduce-nor.js","./reduce-or":"../node_modules/bitwise/esm/bits/reduce-or.js","./reduce-xnor":"../node_modules/bitwise/esm/bits/reduce-xnor.js","./reduce-xor":"../node_modules/bitwise/esm/bits/reduce-xor.js","./to-boolean":"../node_modules/bitwise/esm/bits/to-boolean.js","./to-string":"../node_modules/bitwise/esm/bits/to-string.js","./xnor":"../node_modules/bitwise/esm/bits/xnor.js","./xor":"../node_modules/bitwise/esm/bits/xor.js"}],"../node_modules/bitwise/esm/buffer/and.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise AND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.and(a, b, false) => Buffer(a AND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a AND b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] & b[i];
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/byte/write.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a UInt8 (0-255) which equals the given bits.
 *
 * @example
 * byte.write([0,0,1,0,1,0,1,0]) => 42
 *
 * @param {Array} byte 8 bits
 * @return {Number} 8-bit unsigned integer
 */
var _default = function _default(byte) {
  if (!Array.isArray(byte) || byte.length !== 8) throw new RangeError('invalid array length');
  var data = 0;

  for (var i = 0; i < 8; i++) if (byte[7 - i]) data |= 1 << i;

  return data;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/buffer/create.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _write = _interopRequireDefault(require("../byte/write"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new buffer and writes the given bits.
 *
 * @example
 * createBuffer([1,1,1,1, 0,0,0,1, 1,0,1,0]) => buffer with data 1111 0001 1010 0000
 *
 * @param {Array} bits an array containing the bits to insert
 * @returns {Buffer}
 */
var _default = function _default(bits) {
  var data = [0, 0, 0, 0, 0, 0, 0, 0];
  var buffer = Buffer.alloc(Math.ceil(bits.length / 8));

  for (var i = 0; i < buffer.length; i++) {
    for (var j = 0; j < 8; j++) {
      if (bits[i * 8 + j]) data[j] = bits[i * 8 + j];else data[j] = 0;
    }

    buffer[i] = (0, _write.default)(data);
  }

  return buffer;
};

exports.default = _default;
},{"../byte/write":"../node_modules/bitwise/esm/byte/write.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/byte/read.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * byte.read(42) => [0,0,1,0,1,0,1,0]
 *
 * @param {Number} byte one byte
 * @return {Array}
 */
var _default = function _default(byte) {
  if (byte > 255 || byte < 0 || ~~byte !== byte) throw new RangeError('invalid byte');
  var result = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < 8; i++) result[7 - i] = byte >> i & 1;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/buffer/read.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _read = _interopRequireDefault(require("../byte/read"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an Array containing bitLength bits starting at bitOffset.
 *
 * @example
 * readBuffer(buffer, 2, 4) => [0,0,1,0]
 *
 * @param {Buffer} buffer the buffer to read
 * @param {Number} offset where to start (in bits)
 * @param {Number} length how many bits to read
 * @returns {Array}
 */
var _default = function _default(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }

  if (!length) length = buffer.length * 8 - offset;
  var start = Math.floor(offset / 8);
  var bytesToRead = Math.floor(length / 8) + 2;
  var arr = [];
  arr.length = bytesToRead * 8;

  for (var i = 0; i < bytesToRead; i++) {
    var toRead = buffer[start + i];
    if (toRead === undefined) continue;
    var bits = (0, _read.default)(buffer[start + i]);
    arr[i * 8] = bits[0];
    arr[i * 8 + 1] = bits[1];
    arr[i * 8 + 2] = bits[2];
    arr[i * 8 + 3] = bits[3];
    arr[i * 8 + 4] = bits[4];
    arr[i * 8 + 5] = bits[5];
    arr[i * 8 + 6] = bits[6];
    arr[i * 8 + 7] = bits[7];
  }

  var subOffset = offset % 8;
  return arr.slice(subOffset, subOffset + length);
};

exports.default = _default;
},{"../byte/read":"../node_modules/bitwise/esm/byte/read.js"}],"../node_modules/bitwise/esm/buffer/modify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _write = _interopRequireDefault(require("../byte/write"));

var _read = _interopRequireDefault(require("./read"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 * @example
 * modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 * @param {Buffer} buffer the buffer to modify
 * @param {Array} bits the bits to insert
 * @param {Number} offset where to start (in bits)
 * @returns {undefined}
 */
var _default = function _default(buffer, bits, offset) {
  if (offset === void 0) {
    offset = 0;
  }

  var start = Math.floor(offset / 8);
  var end = Math.ceil((offset + bits.length) / 8);
  var subBuffer = buffer.slice(start, end);
  var byteData = (0, _read.default)(subBuffer);
  var subOffset = offset % 8;

  for (var i = 0; i < bits.length; i++) byteData[subOffset++] = bits[i];

  var length = end - start;

  for (var i_1 = 0; i_1 < length; i_1++) subBuffer[i_1] = (0, _write.default)(byteData.slice(i_1 * 8, (i_1 + 1) * 8));
};

exports.default = _default;
},{"../byte/write":"../node_modules/bitwise/esm/byte/write.js","./read":"../node_modules/bitwise/esm/buffer/read.js"}],"../node_modules/bitwise/esm/buffer/nand.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise NAND to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nand(a, b, false) => Buffer(a NAND b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NAND b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] & b[i]);
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/buffer/nor.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise NOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.nor(a, b, false) => Buffer(a NOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a NOR b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] | b[i]);
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/buffer/not.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise NOT to the contents of a buffer. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.not(buffer) => Buffer(NOT buffer)
 *
 * @param {Buffer} buffer input data
 * @return {Buffer} Buffer(NOT buffer)
 */
var _default = function _default(buffer) {
  var result = Buffer.alloc(buffer.length);

  for (var i = 0; i < buffer.length; i++) result[i] = ~buffer[i];

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/buffer/or.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise OR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.or(a, b, false) => Buffer(a OR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a OR b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] | b[i];
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/utilities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p2 = void 0;
// 32-bit powers of two wouldn't be possible with <<
var p2 = [];
exports.p2 = p2;

for (var i = 0; i < 32; i++) p2[i] = Math.pow(2, i);
},{}],"../node_modules/bitwise/esm/buffer/read-int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _not = _interopRequireDefault(require("../bits/not"));

var _read = _interopRequireDefault(require("./read"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a section of a buffer to a signed integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => -10
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the signed integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @return {Number}
 */
var _default = function _default(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }

  if (length === void 0) {
    length = 8;
  }

  var bits = (0, _read.default)(buffer, offset, length);

  if (bits[0] === 0) {
    var result = 0;

    for (var i = 0; i < length; i++) if (bits[i]) result += _utilities.p2[length - i - 1];

    return result;
  } else {
    var result = -1;
    var inverted = (0, _not.default)(bits);

    for (var i = 0; i < length; i++) if (inverted[i]) result -= _utilities.p2[length - i - 1];

    return result;
  }
};

exports.default = _default;
},{"../utilities":"../node_modules/bitwise/esm/utilities.js","../bits/not":"../node_modules/bitwise/esm/bits/not.js","./read":"../node_modules/bitwise/esm/buffer/read.js"}],"../node_modules/bitwise/esm/buffer/read-u-int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _read = _interopRequireDefault(require("./read"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a section of a buffer to an unsigned integer.
 *
 * @example
 * // buffer 11110110
 * readUInt(buffer, 3, 5) => 22
 *
 * @param {Buffer} buffer the buffer to extract information from
 * @param {Number} length the length of the unsigned integer (in bits)
 * @param {Number} offset where to start (in bits)
 * @returns {Number}
 */
var _default = function _default(buffer, offset, length) {
  if (offset === void 0) {
    offset = 0;
  }

  if (length === void 0) {
    length = 8;
  }

  var arr = (0, _read.default)(buffer, offset, length);
  var result = 0;

  for (var i = 0; i < length; i++) result += arr[i] * _utilities.p2[length - i - 1];

  return result;
};

exports.default = _default;
},{"../utilities":"../node_modules/bitwise/esm/utilities.js","./read":"../node_modules/bitwise/esm/buffer/read.js"}],"../node_modules/bitwise/esm/buffer/xnor.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise XNOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xnor(a, b, false) => Buffer(a XNOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XNOR b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = ~(a[j] ^ b[i]);
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/buffer/xor.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies a bitwise XOR to the contents of two buffers. Returns a new buffer.
 *
 * @example
 * bitwise.buffer.xor(a, b, false) => Buffer(a XOR b)
 *
 * @param {Buffer} a first buffer
 * @param {Buffer} b second buffer
 * @param {Boolean} isLooping loop through first buffer
 * @return {Buffer} a XOR b
 */
var _default = function _default(a, b, isLooping) {
  if (isLooping === void 0) {
    isLooping = false;
  }

  var length = isLooping ? b.length : a.length;
  var result = Buffer.alloc(length);

  for (var i = 0; i < length; i++) {
    var j = isLooping ? i % a.length : i;
    result[i] = a[j] ^ b[i];
  }

  return result;
};

exports.default = _default;
},{"buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/bitwise/esm/buffer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "and", {
  enumerable: true,
  get: function () {
    return _and.default;
  }
});
Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function () {
    return _create.default;
  }
});
Object.defineProperty(exports, "modify", {
  enumerable: true,
  get: function () {
    return _modify.default;
  }
});
Object.defineProperty(exports, "nand", {
  enumerable: true,
  get: function () {
    return _nand.default;
  }
});
Object.defineProperty(exports, "nor", {
  enumerable: true,
  get: function () {
    return _nor.default;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function () {
    return _not.default;
  }
});
Object.defineProperty(exports, "or", {
  enumerable: true,
  get: function () {
    return _or.default;
  }
});
Object.defineProperty(exports, "read", {
  enumerable: true,
  get: function () {
    return _read.default;
  }
});
Object.defineProperty(exports, "readInt", {
  enumerable: true,
  get: function () {
    return _readInt.default;
  }
});
Object.defineProperty(exports, "readUInt", {
  enumerable: true,
  get: function () {
    return _readUInt.default;
  }
});
Object.defineProperty(exports, "xnor", {
  enumerable: true,
  get: function () {
    return _xnor.default;
  }
});
Object.defineProperty(exports, "xor", {
  enumerable: true,
  get: function () {
    return _xor.default;
  }
});
exports.default = void 0;

var _and = _interopRequireDefault(require("./and"));

var _create = _interopRequireDefault(require("./create"));

var _modify = _interopRequireDefault(require("./modify"));

var _nand = _interopRequireDefault(require("./nand"));

var _nor = _interopRequireDefault(require("./nor"));

var _not = _interopRequireDefault(require("./not"));

var _or = _interopRequireDefault(require("./or"));

var _read = _interopRequireDefault(require("./read"));

var _readInt = _interopRequireDefault(require("./read-int"));

var _readUInt = _interopRequireDefault(require("./read-u-int"));

var _xnor = _interopRequireDefault(require("./xnor"));

var _xor = _interopRequireDefault(require("./xor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  and: _and.default,
  create: _create.default,
  modify: _modify.default,
  nand: _nand.default,
  nor: _nor.default,
  not: _not.default,
  or: _or.default,
  read: _read.default,
  readInt: _readInt.default,
  readUInt: _readUInt.default,
  xnor: _xnor.default,
  xor: _xor.default
};
exports.default = _default;
},{"./and":"../node_modules/bitwise/esm/buffer/and.js","./create":"../node_modules/bitwise/esm/buffer/create.js","./modify":"../node_modules/bitwise/esm/buffer/modify.js","./nand":"../node_modules/bitwise/esm/buffer/nand.js","./nor":"../node_modules/bitwise/esm/buffer/nor.js","./not":"../node_modules/bitwise/esm/buffer/not.js","./or":"../node_modules/bitwise/esm/buffer/or.js","./read":"../node_modules/bitwise/esm/buffer/read.js","./read-int":"../node_modules/bitwise/esm/buffer/read-int.js","./read-u-int":"../node_modules/bitwise/esm/buffer/read-u-int.js","./xnor":"../node_modules/bitwise/esm/buffer/xnor.js","./xor":"../node_modules/bitwise/esm/buffer/xor.js"}],"../node_modules/bitwise/esm/byte/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "read", {
  enumerable: true,
  get: function () {
    return _read.default;
  }
});
Object.defineProperty(exports, "write", {
  enumerable: true,
  get: function () {
    return _write.default;
  }
});
exports.default = void 0;

var _read = _interopRequireDefault(require("./read"));

var _write = _interopRequireDefault(require("./write"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  read: _read.default,
  write: _write.default
};
exports.default = _default;
},{"./read":"../node_modules/bitwise/esm/byte/read.js","./write":"../node_modules/bitwise/esm/byte/write.js"}],"../node_modules/bitwise/esm/integer/get-bit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Gets the value of a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 1
 * @param {Integer} int32 input number
 * @param {Integer} position bit's position
 * @returns {Integer} bit's value
 */
var _default = function _default(int32, position) {
  return int32 >> position & 1;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/integer/set-bit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Sets the value of a specific bit.
 * @example bitwise.integer.set(128, 7, 0) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @param {Integer} value bit’s new value
 * @returns {Integer} resulting number
 */
var _default = function _default(int32, position, value) {
  return value === 1 ? int32 | 1 << position : int32 & ~(1 << position);
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/integer/toggle-bit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Toggles a specific bit.
 * @example bitwise.integer.getBit(128, 7) => 0
 * @param {Integer} int32 input number
 * @param {Integer} position bit’s position
 * @returns {Integer} updated number
 */
var _default = function _default(int32, position) {
  return int32 ^ 1 << position;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/integer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getBit", {
  enumerable: true,
  get: function () {
    return _getBit.default;
  }
});
Object.defineProperty(exports, "setBit", {
  enumerable: true,
  get: function () {
    return _setBit.default;
  }
});
Object.defineProperty(exports, "toggleBit", {
  enumerable: true,
  get: function () {
    return _toggleBit.default;
  }
});
exports.default = void 0;

var _getBit = _interopRequireDefault(require("./get-bit"));

var _setBit = _interopRequireDefault(require("./set-bit"));

var _toggleBit = _interopRequireDefault(require("./toggle-bit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getBit: _getBit.default,
  setBit: _setBit.default,
  toggleBit: _toggleBit.default
};
exports.default = _default;
},{"./get-bit":"../node_modules/bitwise/esm/integer/get-bit.js","./set-bit":"../node_modules/bitwise/esm/integer/set-bit.js","./toggle-bit":"../node_modules/bitwise/esm/integer/toggle-bit.js"}],"../node_modules/bitwise/esm/nibble/read.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns an Array of length 8 containing the read bits.
 *
 * @example
 * nibble.read(15) => [1,1,1,1]
 *
 * @param {Number} nibble one nibble
 * @return {Array}
 */
var _default = function _default(nibble) {
  if (nibble < 16 && nibble >= 0 && Math.floor(nibble) === nibble) {
    var result = [0, 0, 0, 0];

    for (var i = 0; i < 4; i++) result[3 - i] = nibble >> i & 1;

    return result;
  } else throw new RangeError('invalid array length');
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/nibble/write.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Returns a Nibble (0-15) which equals the given bits.
 *
 * @example
 * byte.write([1,0,1,0]) => 10
 *
 * @param {Array} nibble 4-bit unsigned integer
 * @return {Number}
 */
var _default = function _default(nibble) {
  if (!Array.isArray(nibble) || nibble.length !== 4) throw new RangeError('invalid array length');
  var result = 0;

  for (var i = 0; i < 4; i++) if (nibble[3 - i]) result |= 1 << i;

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/nibble/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "read", {
  enumerable: true,
  get: function () {
    return _read.default;
  }
});
Object.defineProperty(exports, "write", {
  enumerable: true,
  get: function () {
    return _write.default;
  }
});
exports.default = void 0;

var _read = _interopRequireDefault(require("./read"));

var _write = _interopRequireDefault(require("./write"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  read: _read.default,
  write: _write.default
};
exports.default = _default;
},{"./read":"../node_modules/bitwise/esm/nibble/read.js","./write":"../node_modules/bitwise/esm/nibble/write.js"}],"../node_modules/bitwise/esm/string/to-bits.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Converts a string into an array of bits. Ignores all characters except 1 and 0.
 *
 * @example
 * toBits('10 10 12$%_.0') => [1,0,1,0,1,0]
 *
 * @param {String} string the string to convert
 * @returns {Array} resulting array of bits
 */
var _default = function _default(string) {
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === '1') result.push(1);else if (string[i] === '0') result.push(0);
  }

  return result;
};

exports.default = _default;
},{}],"../node_modules/bitwise/esm/string/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "toBits", {
  enumerable: true,
  get: function () {
    return _toBits.default;
  }
});
exports.default = void 0;

var _toBits = _interopRequireDefault(require("./to-bits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  toBits: _toBits.default
};
exports.default = _default;
},{"./to-bits":"../node_modules/bitwise/esm/string/to-bits.js"}],"../node_modules/bitwise/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bits", {
  enumerable: true,
  get: function () {
    return _bits.default;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _buffer.default;
  }
});
Object.defineProperty(exports, "byte", {
  enumerable: true,
  get: function () {
    return _byte.default;
  }
});
Object.defineProperty(exports, "integer", {
  enumerable: true,
  get: function () {
    return _integer.default;
  }
});
Object.defineProperty(exports, "nibble", {
  enumerable: true,
  get: function () {
    return _nibble.default;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function () {
    return _string.default;
  }
});
exports.default = void 0;

var _bits = _interopRequireDefault(require("./bits"));

var _buffer = _interopRequireDefault(require("./buffer"));

var _byte = _interopRequireDefault(require("./byte"));

var _integer = _interopRequireDefault(require("./integer"));

var _nibble = _interopRequireDefault(require("./nibble"));

var _string = _interopRequireDefault(require("./string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bitwise = {
  bits: _bits.default,
  buffer: _buffer.default,
  byte: _byte.default,
  integer: _integer.default,
  nibble: _nibble.default,
  string: _string.default
};
var _default = bitwise;
exports.default = _default;
},{"./bits":"../node_modules/bitwise/esm/bits/index.js","./buffer":"../node_modules/bitwise/esm/buffer/index.js","./byte":"../node_modules/bitwise/esm/byte/index.js","./integer":"../node_modules/bitwise/esm/integer/index.js","./nibble":"../node_modules/bitwise/esm/nibble/index.js","./string":"../node_modules/bitwise/esm/string/index.js"}],"../node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"../node_modules/superagent/lib/is-object.js":[function(require,module,exports) {
'use strict';
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;
},{}],"../node_modules/superagent/lib/request-base.js":[function(require,module,exports) {
'use strict';
/**
 * Module of mixed-in functions shared between node and client code
 */

var isObject = require('./is-object');
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function _clearTimeout() {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function parse(fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function serialize(fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function timeout(options) {
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for (var option in options) {
    switch (option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;

      case 'response':
        this._responseTimeout = options.response;
        break;

      default:
        console.warn("Unknown timeout option", option);
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function retry(count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (e) {
      console.error(e);
    }
  }

  if (res && res.status && res.status >= 500 && res.status != 501) return true;

  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }

    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
      self.end(function (err, res) {
        if (err) innerReject(err);else innerResolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if ('boolean' === typeof val) {
    val = '' + val;
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser

  this.req && this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? this._data + '&' + data : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');

      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.trace("Unsupported");
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};
},{"./is-object":"../node_modules/superagent/lib/is-object.js"}],"../node_modules/superagent/lib/utils.js":[function(require,module,exports) {
'use strict';
/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host']; // secuirty

  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }

  return header;
};
},{}],"../node_modules/superagent/lib/response-base.js":[function(require,module,exports) {
'use strict';
/**
 * Module dependencies.
 */

var utils = require('./utils');
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) this[key] = params[key];

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (err) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.status = this.statusCode = status;
  this.statusType = type; // basics

  this.info = 1 == type;
  this.ok = 2 == type;
  this.redirect = 3 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false; // sugar

  this.created = 201 == status;
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.forbidden = 403 == status;
  this.notFound = 404 == status;
  this.unprocessableEntity = 422 == status;
};
},{"./utils":"../node_modules/superagent/lib/utils.js"}],"../node_modules/superagent/lib/agent-base.js":[function(require,module,exports) {
function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function ()
  /*varargs*/
  {
    this._defaults.push({
      fn: fn,
      arguments: arguments
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, def.arguments);
  });
};

module.exports = Agent;
},{}],"../node_modules/superagent/lib/client.js":[function(require,module,exports) {
/**
 * Root reference for iframes.
 */
var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  root = self;
} else {
  // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = require('component-emitter');

var RequestBase = require('./request-base');

var isObject = require('./is-object');

var ResponseBase = require('./response-base');

var Agent = require('./agent-base');
/**
 * Noop.
 */


function noop() {}

;
/**
 * Expose `request`.
 */

var request = exports = module.exports = function (method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}

    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }

  throw Error("Browser-only version of superagent could not find XHR");
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function (v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for (var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};
/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders()); // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
  }
}

ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch (custom_err) {
      new_err = custom_err; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */


Emitter(Request.prototype);
RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (1 === arguments.length) pass = '';

  if (typeof pass === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto'
    };
  }

  var encoder = function (string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
  console.warn("This is not supported in browser version of superagent");
  return this;
}; // This throws, because it can't send/receive data as expected


Request.prototype.pipe = Request.prototype.write = function () {
  throw Error("Streaming is not supported in browser version of superagent");
};
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */


Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function () {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (4 != readyState) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function (direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');

      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch (e) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }

    if (serialize) data = serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (null == this.header[field]) continue;
    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function () {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype['delete'];
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
},{"component-emitter":"../node_modules/component-emitter/index.js","./request-base":"../node_modules/superagent/lib/request-base.js","./is-object":"../node_modules/superagent/lib/is-object.js","./response-base":"../node_modules/superagent/lib/response-base.js","./agent-base":"../node_modules/superagent/lib/agent-base.js"}],"../node_modules/buffer/index.js":[function(require,module,exports) {

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    var proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    var copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        Buffer.from(buf).copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (var i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = (function () {
  var alphabet = '0123456789abcdef'
  var table = new Array(256)
  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16
    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/gridplus-sdk/src/constants.js":[function(require,module,exports) {
// Consistent with Lattice's IV
const AES_IV = [0x6d, 0x79, 0x73, 0x65, 0x63, 0x72, 0x65, 0x74, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64]

const ADDR_STR_LEN = 129; // 128-char strings (null terminated)

// Decrypted response lengths will be fixed for any given message type.
// These are defined in the Lattice spec.
// Every decrypted response should have a 65-byte pubkey prefixing it (and a 4-byte request ID)
// These are NOT counted in `decResLengths`, meaning these values are 69-bytes smaller than the
// corresponding structs in firmware.
const decResLengths = {
    finalizePair: 0,                    // Only contains the pubkey
    getAddresses: 10 * ADDR_STR_LEN,    // 10x 129 byte strings (128 bytes + null terminator)
    sign: 1090,                         // 1 DER signature for ETH, 10 for BTC + change pubkeyhash
    getWallets: 142,                    // 71 bytes per wallet record (response contains internal and external)
    addAbiDefs: 8,
    test: 1646                          // Max size of test response payload
}

// Every corresponding decrypted response struct in firmware has a pubkey
// and checksum added. These are not included in `decResLengths`
const DES_RES_EXTRADATA_LEN = 69; 

// Encrypted responses also have metadata
// Prefix:
// * protocol version (1 byte)
// * response type, reserved (1 byte) -- not used
// * response id (4 bytes) -- not used
// * payload length (2 bytes)
// * response code (1 byte)
// Suffix:
// * checksum (4 bytes) -- NOT the same checksum as inside the decrypted msg
const ENC_MSG_METADATA_LEN = 13;

const ENC_MSG_EXTRA_LEN = DES_RES_EXTRADATA_LEN + ENC_MSG_METADATA_LEN;
// Per Lattice spec, all encrypted messages must fit in a buffer of this size.
// The length comes from the largest request/response data type size
// We also add the prefix length
let ENC_MSG_LEN = 0;
Object.keys(decResLengths).forEach((k) => {
    if (decResLengths[k] + ENC_MSG_EXTRA_LEN > ENC_MSG_LEN)
        ENC_MSG_LEN = decResLengths[k] + ENC_MSG_EXTRA_LEN;
})
  
const deviceCodes = {
    'CONNECT': 1,
    'ENCRYPTED_REQUEST': 2,
}

const encReqCodes = {
    'FINALIZE_PAIRING': 0x00,
    'GET_ADDRESSES': 0x01,
    'ADD_PERMISSION': 0x02,
    'SIGN_TRANSACTION': 0x03,
    'GET_WALLETS': 0x04,
    'ADD_PERMISSION_V0': 0x05,
    'ADD_ABI_DEFS': 0x06,
    'TEST': 0x07,
}

const messageConstants = {
    'NOT_PAIRED': 0x00,
    'PAIRED': 0x01,
}

const addressSizes = {
    'BTC': 20,  // 20 byte pubkeyhash
    'ETH': 20,  // 20 byte address not including 0x prefix
}
  
const responseCodes = {
    RESP_SUCCESS: 0x00,
    RESP_ERR_INVALID_MSG: 0x80,
    RESP_ERR_UNSUPPORTED_VER: 0x81,
    RESP_ERR_DEV_BUSY: 0x82,
    RESP_ERR_USER_TIMEOUT: 0x83,
    RESP_ERR_USER_DECLINED: 0x84,
    RESP_ERR_PAIR_FAIL: 0x85,
    RESP_ERR_PAIR_DISABLED: 0x86,
    RESP_ERR_PERMISSION_DISABLED: 0x87,
    RESP_ERR_INTERNAL: 0x88,
    RESP_ERR_GCE_TIMEOUT: 0x89,
    RESP_ERR_WALLET_NOT_PRESENT: 0x8a,
    RESP_ERR_DEV_LOCKED: 0x8b,
    RESP_ERR_DISABLED: 0x8c,
    RESP_ERR_ALREADY: 0x8d,
}

const responseMsgs = {
    [responseCodes.RESP_SUCCESS]: 0x00,
    [responseCodes.RESP_ERR_INVALID_MSG]: 'Invalid Request',
    [responseCodes.RESP_ERR_UNSUPPORTED_VER]: 'Unsupported Version',
    [responseCodes.RESP_ERR_DEV_BUSY]: 'Device Busy',
    [responseCodes.RESP_ERR_USER_TIMEOUT]: 'Timeout Waiting for User',
    [responseCodes.RESP_ERR_USER_DECLINED]: 'Request Declined by User',
    [responseCodes.RESP_ERR_PAIR_FAIL]: 'Pairing Failed',
    [responseCodes.RESP_ERR_PAIR_DISABLED]: 'Pairing is Currently Disabled',
    [responseCodes.RESP_ERR_PERMISSION_DISABLED]: 'Automated Signing is Currently Disabled',
    [responseCodes.RESP_ERR_INTERNAL]: 'Device Error',
    [responseCodes.RESP_ERR_GCE_TIMEOUT]: 'Timeout',
    [responseCodes.RESP_ERR_WALLET_NOT_PRESENT]: 'Incorrect Wallet UID Provided',
    [responseCodes.RESP_ERR_DEV_LOCKED]: 'Device Locked',
    [responseCodes.RESP_ERR_DISABLED]: 'Disabled',
    [responseCodes.RESP_ERR_ALREADY]: 'Record already exists. You must first remove it on your device.'
}
 

const signingSchema = {
    BTC_TRANSFER: 0,
    ETH_TRANSFER: 1,
    ERC20_TRANSFER: 2,
    ETH_MSG: 3,
}

const ethMsgProtocol = {
    SIGN_PERSONAL: 0,
}

const REQUEST_TYPE_BYTE = 0x02; // For all HSM-bound requests
const VERSION_BYTE = 1;
const HARDENED_OFFSET = 0x80000000; // Hardened offset
const HANDLE_LARGER_CHAIN_ID = 255; // ChainId value to signify larger chainID is in data buffer
const MAX_CHAIN_ID_BYTES = 8; // Max number of bytes to contain larger chainID in data buffer

const BASE_URL = 'https://signing.gridpl.us';

const ETH_ABI_LATTICE_FW_TYPE_MAP = {
    'address': 1,
    'bool': 2,
    'uint8': 3,
    'uint16': 4,
    'uint32': 5,
    'uint64': 6,
    'uint128': 7,
    'uint256': 8,
    // 'int8': 9,      // We do not support signed integer types in v1 because we can't display them
    // 'int16': 10,
    // 'int24': 11,
    // 'int64': 12,
    // 'int128': 13,
    // 'int256': 14,
    'uint': 15,
    // 'int': 16,
    'bytes1': 17,
    'bytes2': 18,
    'bytes3': 19,
    'bytes4': 20,
    'bytes5': 21,
    'bytes6': 22,
    'bytes7': 23,
    'bytes8': 24,
    'bytes9': 25,
    'bytes10': 26,
    'bytes11': 27,
    'bytes12': 28,
    'bytes13': 29,
    'bytes14': 30,
    'bytes15': 31,
    'bytes16': 32,
    'bytes17': 33,
    'bytes18': 34,
    'bytes19': 35,
    'bytes20': 36,
    'bytes21': 37,
    'bytes22': 38,
    'bytes23': 39,
    'bytes24': 40,
    'bytes25': 41,
    'bytes26': 42,
    'bytes27': 43,
    'bytes28': 44,
    'bytes29': 45,
    'bytes30': 46,
    'bytes31': 47,
    'bytes32': 48,
    'bytes': 49,
    'string': 50,
};

function getFwVersionConst(v) {
    const c = {
        reqMaxDataSz: 1152,
    };
    if (v.length === 0 || (v[1] < 10 && v[2] === 0)) {
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 500000000000; // 500 gwei
        c.addrFlagsAllowed = false;
    } else if (v[1] >= 10 && v[2] >= 0) {
        c.reqMaxDataSz = 1678;
        c.ethMaxDataSz = c.reqMaxDataSz - 128;
        c.ethMaxMsgSz = c.ethMaxDataSz;
        c.ethMaxGasPrice = 20000000000000; // 20000 gwei
        c.addrFlagsAllowed = true;
    }
    return c;
}

module.exports = {
    getFwVersionConst,
    ADDR_STR_LEN,
    AES_IV,
    BASE_URL,
    ENC_MSG_LEN,
    addressSizes,
    decResLengths,
    deviceCodes,
    encReqCodes,
    ethMsgProtocol,
    messageConstants,
    responseCodes,
    responseMsgs,
    signingSchema,
    REQUEST_TYPE_BYTE,
    VERSION_BYTE,
    HARDENED_OFFSET,
    HANDLE_LARGER_CHAIN_ID,
    MAX_CHAIN_ID_BYTES,
    ETH_ABI_LATTICE_FW_TYPE_MAP,
}
},{}],"../node_modules/gridplus-sdk/src/bitcoin.js":[function(require,module,exports) {

// Util for Bitcoin-specific functionality
const bs58 = require('bs58');
const bs58check = require('bs58check')
const Buffer = require('buffer/').Buffer;
const constants = require('./constants')
const DEFAULT_SEQUENCE = 0xffffffff;
const DEFAULT_SIGHASH_BUFFER = Buffer.from('01', 'hex'); // SIGHASH_ALL = 0x01
const { HARDENED_OFFSET } = require('./constants');
const DEFAULT_CHANGE = [44 + HARDENED_OFFSET, HARDENED_OFFSET, HARDENED_OFFSET, 1, 0];

const OP = {
  '0': 0x00,
  HASH160: 0xa9,
  DUP: 0x76,
  EQUAL: 0x87,
  EQUALVERIFY: 0x88,
  CHECKSIG: 0xac,
}

const addressVersion = {
  'LEGACY': 0x00,
  'SEGWIT': 0x05,
  'TESTNET': 0x6F,
  'SEGWIT_TESTNET': 0xC4,
}
exports.addressVersion = addressVersion;

// Bitcoin script types -- defined by the Lattice protocol spec
const scriptTypes = {
  P2PKH: 0x01,
  P2SH: 0x02,
  P2SH_P2WPKH: 0x03,
}
exports.scriptTypes = scriptTypes

// We need to build two different objects here:
// 1. bitcoinjs-lib TransactionBuilder object, which will be used in conjunction
//    with the returned signatures to build and serialize the transaction before
//    broadcasting it. We will replace `bitcoinjs-lib`'s signatures with the ones
//    we get from the Lattice
// 2. The serialized Lattice request, which includes data (outlined in the specification)
//    that is needed to sign all of the inputs and build a change output. 
// @inputs (contained in `data`)
// `prevOuts`: an array of objects with the following properties:
//           a. txHash
//           b. value
//           c. index          -- the index of the output in the transaction
//           d. signerPath -- the path of the address in our wallet that is signing this input
// `recipient`: Receiving address, which must be converted to a pubkeyhash
// `value`:     Number of satoshis to send the recipient
// `fee`:       Number of satoshis to use for a transaction fee (should have been calculated)
//              already based on the number of inputs plus two outputs
// `version`:   Transaction version of the inputs. All inputs must be of the same version! 
// `isSegwit`: a boolean which determines how we serialize the data and parameterize txb
exports.buildBitcoinTxRequest = function(data) {
  try {
    const { prevOuts, recipient, value, changePath=DEFAULT_CHANGE, fee, isSegwit, changeVersion='SEGWIT' } = data;
    if (changePath.length !== 5) throw new Error('Please provide a full change path.')
    // Serialize the request
    const payload = Buffer.alloc(59 + (69 * prevOuts.length));
    let off = 0;
    // Change version byte (a.k.a. address format byte)
    if (addressVersion[changeVersion] === undefined)
      throw new Error('Invalid change version specified.');
    payload.writeUInt8(addressVersion[changeVersion]); off++;

    // Build the change data
    payload.writeUInt32LE(changePath.length, off); off += 4;
    for (let i = 0; i < changePath.length; i++) {
      payload.writeUInt32LE(changePath[i], off); off += 4;
    }    

    // Fee is a param
    payload.writeUInt32LE(fee, off); off += 4;
    const recipientVersionByte = bs58.decode(recipient)[0];
    const recipientPubkeyhash = bs58check.decode(recipient).slice(1);
    // Parameterize the recipient output
    payload.writeUInt8(recipientVersionByte, off); off++;
    recipientPubkeyhash.copy(payload, off); off += recipientPubkeyhash.length;
    writeUInt64LE(value, payload, off); off += 8;

    // Build the inputs from the previous outputs
    payload.writeUInt8(prevOuts.length, off); off++;
    let inputSum = 0;
    const scriptType = isSegwit === true ? 
                        scriptTypes.P2SH_P2WPKH :  // Only support p2sh(p2wpkh) for segwit spends for now
                        scriptTypes.P2PKH; // No support for multisig p2sh in v1 (p2sh == segwit here)
    prevOuts.forEach((input) => {
      if (!input.signerPath || input.signerPath.length !== 5) {
        throw new Error('Full recipient path not specified ')
      }
      payload.writeUInt32LE(input.signerPath.length, off); off += 4;
      for (let i = 0; i < input.signerPath.length; i++) {
        payload.writeUInt32LE(input.signerPath[i], off); off += 4;
      }
      payload.writeUInt32LE(input.index, off); off += 4;
      writeUInt64LE(input.value, payload, off); off += 8;
      inputSum += input.value;
      payload.writeUInt8(scriptType, off); off++;
      if (!Buffer.isBuffer(input.txHash)) input.txHash = Buffer.from(input.txHash, 'hex');
      input.txHash.copy(payload, off); off += input.txHash.length;
    })
    // Send them back!
    return {
      payload,
      schema: constants.signingSchema.BTC_TRANSFER,
      origData: data,   // We will need the original data for serializing the tx
      changeData: {     // This data helps fill in the change output
        changeVersion,
        value: inputSum - (value + fee),
      }
    };
  } catch (err) {
    return { err };
  }
}

// Serialize a transaction consisting of inputs, outputs, and some
// metadata
// -- inputs  = { hash, index, sig, pubkey }
// -- outputs = { value, recipient }  // expects an address string for `recipient`
// -- isSegwitSpend = true if the inputs are being spent using segwit
//                    (NOTE: either ALL are being spent, or none are)
// -- network = Name of network, used to determine transaction version
// -- lockTime = Will probably always be 0
exports.serializeTx = function(data) {
  const { inputs, outputs, isSegwitSpend, lockTime=0, crypto } = data;
  let payload = Buffer.alloc(4);
  let off = 0;
  // Always use version 2
  const version = 2;
  payload.writeUInt32LE(version, off); off += 4;
  if (isSegwitSpend === true) {
    payload = concat(payload, Buffer.from('00', 'hex')); // marker = 0x00
    payload = concat(payload, Buffer.from('01', 'hex')); // flag = 0x01
  }
  // Serialize signed inputs
  const numInputs = getVarInt(inputs.length);
  payload = concat(payload, numInputs); off += numInputs.length;
  inputs.forEach((input) => {
    payload = concat(payload, input.hash.reverse()); off += input.hash.length;
    const index = getU32LE(input.index);
    payload = concat(payload, index); off += index.length;
    if (isSegwitSpend === true) {
      // Build a vector (varSlice of varSlice) containing the redeemScript
      const redeemScript = buildRedeemScript(input.pubkey, crypto);
      const redeemScriptLen = getVarInt(redeemScript.length);
      const slice = Buffer.concat([redeemScriptLen, redeemScript]);
      const sliceLen = getVarInt(slice.length);
      payload = concat(payload, sliceLen); off += sliceLen.length;
      payload = concat(payload, slice); off += slice.length;
    } else {
      // Build the signature + pubkey script to spend this input
      const slice = buildSig(input.sig, input.pubkey);
      payload = concat(payload, slice); off += slice.length;
    }
    // Use the default sequence for all transactions
    const sequence = getU32LE(DEFAULT_SEQUENCE);
    payload = concat(payload, sequence); off += sequence.length;
  })
  // Serialize outputs
  const numOutputs = getVarInt(outputs.length);
  payload = concat(payload, numOutputs); off += numOutputs.length;
  outputs.forEach((output) => {
    const value = getU64LE(output.value);
    payload = concat(payload, value); off += value.length;
    // Build the output locking script and write it as a var slice
    const script = buildLockingScript(output.recipient);
    const scriptLen = getVarInt(script.length);
    payload = concat(payload, scriptLen); off += scriptLen.length;
    payload = concat(payload, script); off += script.length;
  })
  // Add witness data if needed
  if (isSegwitSpend === true) {
    const sigs = [];
    const pubkeys = [];
    for (let i = 0; i < inputs.length; i++) {
      sigs.push(inputs[i].sig);
      pubkeys.push(inputs[i].pubkey);
    }
    const witnessSlice = buildWitness(sigs, pubkeys);
    payload = concat(payload, witnessSlice); off += witnessSlice.length;
  }
  // Finish with locktime
  return Buffer.concat([payload, getU32LE(lockTime)]).toString('hex');
}

// Convert a pubkeyhash to a bitcoin base58check address with a version byte
exports.getBitcoinAddress = function(pubkeyhash, version) {
  return bs58check.encode(Buffer.concat([Buffer.from([version]), pubkeyhash]));
}


// Builder utils
//-----------------------
function buildRedeemScript(pubkey, crypto) {
  const redeemScript = Buffer.alloc(22);
  const shaHash = crypto.createHash('sha256').update(pubkey).digest();
  const pubkeyhash = crypto.createHash('rmd160').update(shaHash).digest();
  redeemScript.writeUInt8(OP['0']);
  redeemScript.writeUInt8(pubkeyhash.length, 1);
  pubkeyhash.copy(redeemScript, 2);
  return redeemScript;
}

// Var slice of signature + var slice of pubkey
function buildSig(sig, pubkey) {
  sig = Buffer.concat([sig, DEFAULT_SIGHASH_BUFFER])
  const sigLen = getVarInt(sig.length);
  const pubkeyLen = getVarInt(pubkey.length);
  const slice = Buffer.concat([sigLen, sig, pubkeyLen, pubkey]);
  const len = getVarInt(slice.length);
  return Buffer.concat([len, slice]);
}

// Witness is written as a "vector", which is a list of varSlices
// prefixed by the number of items
function buildWitness(sigs, pubkeys) {
  let witness = Buffer.alloc(0);
  // Two items in each vector (sig, pubkey)
  const len = Buffer.alloc(1); len.writeUInt8(2);
  for (let i = 0; i < sigs.length; i++) {
    const sig = Buffer.concat([sigs[i], DEFAULT_SIGHASH_BUFFER]);
    const sigLen = getVarInt(sig.length);
    const pubkey = pubkeys[i];
    const pubkeyLen = getVarInt(pubkey.length);
    witness = Buffer.concat([witness, len, sigLen, sig, pubkeyLen, pubkey]);
  }
  return witness;
}

// Locking script buiders
//-----------------------
function buildLockingScript(address) {
  const versionByte = bs58.decode(address)[0];
  const pubkeyhash = bs58check.decode(address).slice(1);
  if (versionByte === addressVersion.SEGWIT || versionByte === addressVersion.SEGWIT_TESTNET) { 
    // Also works for p2sh
    return buildP2shLockingScript(pubkeyhash);
  } else {
    // We assume testnet uses p2pkh
    return buildP2pkhLockingScript(pubkeyhash);
  }
}

function buildP2pkhLockingScript(pubkeyhash) {
  const out = Buffer.alloc(5 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.DUP, off); off++;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUALVERIFY, off); off++;
  out.writeUInt8(OP.CHECKSIG, off); off++;
  return out;
}

function buildP2shLockingScript(pubkeyhash) {
  const out = Buffer.alloc(3 + pubkeyhash.length);
  let off = 0;
  out.writeUInt8(OP.HASH160, off); off++;
  out.writeUInt8(pubkeyhash.length, off); off++;
  pubkeyhash.copy(out, off); off += pubkeyhash.length;
  out.writeUInt8(OP.EQUAL, off); off++;
  return out;
}

// Static Utils
//----------------------
function concat(base, addition) {
  return Buffer.concat([base, addition]);
}

function getU64LE(x) {
  const buffer = Buffer.alloc(8);
  writeUInt64LE(x, buffer, 0);
  return buffer;
}

function getU32LE(x) {
  const buffer = Buffer.alloc(4);
  buffer.writeUInt32LE(x);
  return buffer;
}

function getVarInt (x) {
  let buffer;
  if (x < 0xfd) {
    buffer = Buffer.alloc(1);
    buffer.writeUInt8(x);
  } else if (x <= 0xffff) {
    buffer = Buffer.alloc(3);
    buffer.writeUInt8(0xfd, 0);
    buffer.writeUInt16LE(x, 1);
  } else if (x < 0xffffffff) {
    buffer = Buffer.alloc(5);
    buffer.writeUInt8(0xfe, 0);
    buffer.writeUInt32LE(x, 1);
  } else {
    buffer = Buffer.alloc(9);
    buffer.writeUInt8(0xff, 0);
    buffer.writeUInt32LE(x >>> 0, 1);
    buffer.writeUInt32LE((x / 0x100000000) | 0, 5);
  }
  return buffer;
}

function writeUInt64LE(n, buf, off) {
  if (typeof n === 'number') n = n.toString(16);
  const preBuf = Buffer.alloc(8);
  const nStr = n.length % 2 === 0 ? n.toString(16) : `0${n.toString(16)}`;
  const nBuf = Buffer.from(nStr, 'hex');
  nBuf.reverse().copy(preBuf, 0);
  preBuf.copy(buf, off);
  return preBuf;
}
},{"bs58":"../node_modules/bs58/index.js","bs58check":"../node_modules/bs58check/index.js","buffer/":"../node_modules/buffer/index.js","./constants":"../node_modules/gridplus-sdk/src/constants.js"}],"../node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
var define;
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
  var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
  };

  if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
      return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
  };

  var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
      return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
  };

  var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createMethod(bits, padding, type);
    }
    return method;
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
  };

  var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
      if (!n && !s) {
        return methods['shake' + bits].create(outputBits);
      } else {
        return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
      }
    };
    method.update = function (message, outputBits, n, s) {
      return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
  };

  var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
      return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
      return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
  };

  var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name + '_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
      if (algorithm.name !== 'sha3') {
        var newMethodName = algorithm.name + bits[j];
        methodNames.push(newMethodName);
        methods[newMethodName] = methods[methodName];
      }
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
      bytes.unshift(o);
      x = x >> 8;
      o = x & 255;
      ++n;
    }
    if (right) {
      bytes.push(n);
    } else {
      bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
  };

  Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
      if (type === 'object') {
        if (str === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
          str = new Uint8Array(str);
        } else if (!Array.isArray(str)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
      bytes = length;
    } else {
      for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes += 1;
        } else if (code < 0x800) {
          bytes += 2;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes += 3;
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          bytes += 4;
        }
      }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
  };

  Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
      bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
  };

  Keccak.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
          HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
          HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
          HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
  }

  Kmac.prototype = new Keccak();

  Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
      b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
      b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
      b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
    if (AMD) {
      define(function () {
        return methods;
      });
    }
  }
})();

},{"process":"../node_modules/process/browser.js"}],"../node_modules/rlp-browser/index.js":[function(require,module,exports) {

const assert = require('assert')
const Buffer = require('buffer/').Buffer
/**
 * RLP Encoding based on: https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP
 * This function takes in a data, convert it to buffer if not, and a length for recursion
 *
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Buffer} - returns buffer of encoded data
 **/
exports.encode = function (input) {
  if (input instanceof Array) {
    var output = []
    for (var i = 0; i < input.length; i++) {
      output.push(exports.encode(input[i]))
    }
    var buf = Buffer.concat(output)
    return Buffer.concat([encodeLength(buf.length, 192), buf])
  } else {
    input = toBuffer(input)
    if (input.length === 1 && input[0] < 128) {
      return input
    } else {
      return Buffer.concat([encodeLength(input.length, 128), input])
    }
  }
}

function safeParseInt (v, base) {
  if (v.slice(0, 2) === '00') {
    throw (new Error('invalid RLP: extra zeros'))
  }

  return parseInt(v, base)
}

function encodeLength (len, offset) {
  if (len < 56) {
    return new Buffer([len + offset])
  } else {
    var hexLength = intToHex(len)
    var lLength = hexLength.length / 2
    var firstByte = intToHex(offset + 55 + lLength)
    return new Buffer(firstByte + hexLength, 'hex')
  }
}

/**
 * RLP Decoding based on: {@link https://github.com/ethereum/wiki/wiki/%5BEnglish%5D-RLP|RLP}
 * @param {Buffer,String,Integer,Array} data - will be converted to buffer
 * @returns {Array} - returns decode Array of Buffers containg the original message
 **/
exports.decode = function (input, stream) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var decoded = _decode(input)

  if (stream) {
    return decoded
  }

  assert.equal(decoded.remainder.length, 0, 'invalid remainder')
  return decoded.data
}

exports.getLength = function (input) {
  if (!input || input.length === 0) {
    return new Buffer([])
  }

  input = toBuffer(input)
  var firstByte = input[0]
  if (firstByte <= 0x7f) {
    return input.length
  } else if (firstByte <= 0xb7) {
    return firstByte - 0x7f
  } else if (firstByte <= 0xbf) {
    return firstByte - 0xb6
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    return firstByte - 0xbf
  } else {
    // a list  over 55 bytes long
    var llength = firstByte - 0xf6
    var length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    return llength + length
  }
}

function _decode (input) {
  var length, llength, data, innerRemainder, d
  var decoded = []
  var firstByte = input[0]

  if (firstByte <= 0x7f) {
    // a single byte whose value is in the [0x00, 0x7f] range, that byte is its own RLP encoding.
    return {
      data: input.slice(0, 1),
      remainder: input.slice(1)
    }
  } else if (firstByte <= 0xb7) {
    // string is 0-55 bytes long. A single byte with value 0x80 plus the length of the string followed by the string
    // The range of the first byte is [0x80, 0xb7]
    length = firstByte - 0x7f

    // set 0x80 null to 0
    if (firstByte === 0x80) {
      data = new Buffer([])
    } else {
      data = input.slice(1, length)
    }

    if (length === 2 && data[0] < 0x80) {
      throw new Error('invalid rlp encoding: byte must be less 0x80')
    }

    return {
      data: data,
      remainder: input.slice(length)
    }
  } else if (firstByte <= 0xbf) {
    llength = firstByte - 0xb6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    data = input.slice(llength, length + llength)
    if (data.length < length) {
      throw (new Error('invalid RLP'))
    }

    return {
      data: data,
      remainder: input.slice(length + llength)
    }
  } else if (firstByte <= 0xf7) {
    // a list between  0-55 bytes long
    length = firstByte - 0xbf
    innerRemainder = input.slice(1, length)
    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }

    return {
      data: decoded,
      remainder: input.slice(length)
    }
  } else {
    // a list  over 55 bytes long
    llength = firstByte - 0xf6
    length = safeParseInt(input.slice(1, llength).toString('hex'), 16)
    var totalLength = llength + length
    if (totalLength > input.length) {
      throw new Error('invalid rlp: total length is larger than the data')
    }

    innerRemainder = input.slice(llength, totalLength)
    if (innerRemainder.length === 0) {
      throw new Error('invalid rlp, List has a invalid length')
    }

    while (innerRemainder.length) {
      d = _decode(innerRemainder)
      decoded.push(d.data)
      innerRemainder = d.remainder
    }
    return {
      data: decoded,
      remainder: input.slice(totalLength)
    }
  }
}

function isHexPrefixed (str) {
  return str.slice(0, 2) === '0x'
}

// Removes 0x from a given String
function stripHexPrefix (str) {
  if (typeof str !== 'string') {
    return str
  }
  return isHexPrefixed(str) ? str.slice(2) : str
}

function intToHex (i) {
  var hex = i.toString(16)
  if (hex.length % 2) {
    hex = '0' + hex
  }

  return hex
}

function padToEven (a) {
  if (a.length % 2) a = '0' + a
  return a
}

function intToBuffer (i) {
  var hex = intToHex(i)
  return new Buffer(hex, 'hex')
}

function toBuffer (v) {
  if (!Buffer.isBuffer(v)) {
    if (typeof v === 'string') {
      if (isHexPrefixed(v)) {
        v = new Buffer(padToEven(stripHexPrefix(v)), 'hex')
      } else {
        v = new Buffer(v)
      }
    } else if (typeof v === 'number') {
      if (!v) {
        v = new Buffer([])
      } else {
        v = intToBuffer(v)
      }
    } else if (v === null || v === undefined) {
      v = new Buffer([])
    } else if (v.toArray) {
      // converts a BN to a Buffer
      v = new Buffer(v.toArray())
    } else {
      throw new Error('invalid type')
    }
  }
  return v
}

},{"assert":"../node_modules/assert/assert.js","buffer/":"../node_modules/buffer/index.js"}],"../node_modules/gridplus-sdk/node_modules/secp256k1/lib/index.js":[function(require,module,exports) {
const errors = {
  IMPOSSIBLE_CASE: 'Impossible case. Please create issue.',
  TWEAK_ADD: 'The tweak was out of range or the resulted private key is invalid',
  TWEAK_MUL: 'The tweak was out of range or equal to zero',
  CONTEXT_RANDOMIZE_UNKNOW: 'Unknow error on context randomization',
  SECKEY_INVALID: 'Private Key is invalid',
  PUBKEY_PARSE: 'Public Key could not be parsed',
  PUBKEY_SERIALIZE: 'Public Key serialization error',
  PUBKEY_COMBINE: 'The sum of the public keys is not valid',
  SIG_PARSE: 'Signature could not be parsed',
  SIGN: 'The nonce generation function failed, or the private key was invalid',
  RECOVER: 'Public key could not be recover',
  ECDH: 'Scalar was invalid (zero or overflow)'
};

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function isUint8Array(name, value, length) {
  assert(value instanceof Uint8Array, `Expected ${name} to be an Uint8Array`);

  if (length !== undefined) {
    if (Array.isArray(length)) {
      const numbers = length.join(', ');
      const msg = `Expected ${name} to be an Uint8Array with length [${numbers}]`;
      assert(length.includes(value.length), msg);
    } else {
      const msg = `Expected ${name} to be an Uint8Array with length ${length}`;
      assert(value.length === length, msg);
    }
  }
}

function isCompressed(value) {
  assert(toTypeString(value) === 'Boolean', 'Expected compressed to be a Boolean');
}

function getAssertedOutput(output = len => new Uint8Array(len), length) {
  if (typeof output === 'function') output = output(length);
  isUint8Array('output', output, length);
  return output;
}

function toTypeString(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = secp256k1 => {
  return {
    contextRandomize(seed) {
      assert(seed === null || seed instanceof Uint8Array, 'Expected seed to be an Uint8Array or null');
      if (seed !== null) isUint8Array('seed', seed, 32);

      switch (secp256k1.contextRandomize(seed)) {
        case 1:
          throw new Error(errors.CONTEXT_RANDOMIZE_UNKNOW);
      }
    },

    privateKeyVerify(seckey) {
      isUint8Array('private key', seckey, 32);
      return secp256k1.privateKeyVerify(seckey) === 0;
    },

    privateKeyNegate(seckey) {
      isUint8Array('private key', seckey, 32);

      switch (secp256k1.privateKeyNegate(seckey)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },

    privateKeyTweakAdd(seckey, tweak) {
      isUint8Array('private key', seckey, 32);
      isUint8Array('tweak', tweak, 32);

      switch (secp256k1.privateKeyTweakAdd(seckey, tweak)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors.TWEAK_ADD);
      }
    },

    privateKeyTweakMul(seckey, tweak) {
      isUint8Array('private key', seckey, 32);
      isUint8Array('tweak', tweak, 32);

      switch (secp256k1.privateKeyTweakMul(seckey, tweak)) {
        case 0:
          return seckey;

        case 1:
          throw new Error(errors.TWEAK_MUL);
      }
    },

    publicKeyVerify(pubkey) {
      isUint8Array('public key', pubkey, [33, 65]);
      return secp256k1.publicKeyVerify(pubkey) === 0;
    },

    publicKeyCreate(seckey, compressed = true, output) {
      isUint8Array('private key', seckey, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyCreate(output, seckey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.SECKEY_INVALID);

        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },

    publicKeyConvert(pubkey, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65]);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyConvert(output, pubkey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },

    publicKeyNegate(pubkey, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65]);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyNegate(output, pubkey)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);

        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },

    publicKeyCombine(pubkeys, compressed = true, output) {
      assert(Array.isArray(pubkeys), 'Expected public keys to be an Array');
      assert(pubkeys.length > 0, 'Expected public keys array will have more than zero items');

      for (const pubkey of pubkeys) {
        isUint8Array('public key', pubkey, [33, 65]);
      }

      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyCombine(output, pubkeys)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.PUBKEY_COMBINE);

        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },

    publicKeyTweakAdd(pubkey, tweak, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('tweak', tweak, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyTweakAdd(output, pubkey, tweak)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.TWEAK_ADD);
      }
    },

    publicKeyTweakMul(pubkey, tweak, compressed = true, output) {
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('tweak', tweak, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.publicKeyTweakMul(output, pubkey, tweak)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.TWEAK_MUL);
      }
    },

    signatureNormalize(sig) {
      isUint8Array('signature', sig, 64);

      switch (secp256k1.signatureNormalize(sig)) {
        case 0:
          return sig;

        case 1:
          throw new Error(errors.SIG_PARSE);
      }
    },

    signatureExport(sig, output) {
      isUint8Array('signature', sig, 64);
      output = getAssertedOutput(output, 72);
      const obj = {
        output,
        outputlen: 72
      };

      switch (secp256k1.signatureExport(obj, sig)) {
        case 0:
          return output.slice(0, obj.outputlen);

        case 1:
          throw new Error(errors.SIG_PARSE);

        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },

    signatureImport(sig, output) {
      isUint8Array('signature', sig);
      output = getAssertedOutput(output, 64);

      switch (secp256k1.signatureImport(output, sig)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.SIG_PARSE);

        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },

    ecdsaSign(msg32, seckey, options = {}, output) {
      isUint8Array('message', msg32, 32);
      isUint8Array('private key', seckey, 32);
      assert(toTypeString(options) === 'Object', 'Expected options to be an Object');
      if (options.data !== undefined) isUint8Array('options.data', options.data);
      if (options.noncefn !== undefined) assert(toTypeString(options.noncefn) === 'Function', 'Expected options.noncefn to be a Function');
      output = getAssertedOutput(output, 64);
      const obj = {
        signature: output,
        recid: null
      };

      switch (secp256k1.ecdsaSign(obj, msg32, seckey, options.data, options.noncefn)) {
        case 0:
          return obj;

        case 1:
          throw new Error(errors.SIGN);

        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },

    ecdsaVerify(sig, msg32, pubkey) {
      isUint8Array('signature', sig, 64);
      isUint8Array('message', msg32, 32);
      isUint8Array('public key', pubkey, [33, 65]);

      switch (secp256k1.ecdsaVerify(sig, msg32, pubkey)) {
        case 0:
          return true;

        case 3:
          return false;

        case 1:
          throw new Error(errors.SIG_PARSE);

        case 2:
          throw new Error(errors.PUBKEY_PARSE);
      }
    },

    ecdsaRecover(sig, recid, msg32, compressed = true, output) {
      isUint8Array('signature', sig, 64);
      assert(toTypeString(recid) === 'Number' && recid >= 0 && recid <= 3, 'Expected recovery id to be a Number within interval [0, 3]');
      isUint8Array('message', msg32, 32);
      isCompressed(compressed);
      output = getAssertedOutput(output, compressed ? 33 : 65);

      switch (secp256k1.ecdsaRecover(output, sig, recid, msg32)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.SIG_PARSE);

        case 2:
          throw new Error(errors.RECOVER);

        case 3:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },

    ecdh(pubkey, seckey, options = {}, output) {
      isUint8Array('public key', pubkey, [33, 65]);
      isUint8Array('private key', seckey, 32);
      assert(toTypeString(options) === 'Object', 'Expected options to be an Object');
      if (options.data !== undefined) isUint8Array('options.data', options.data);

      if (options.hashfn !== undefined) {
        assert(toTypeString(options.hashfn) === 'Function', 'Expected options.hashfn to be a Function');
        if (options.xbuf !== undefined) isUint8Array('options.xbuf', options.xbuf, 32);
        if (options.ybuf !== undefined) isUint8Array('options.ybuf', options.ybuf, 32);
        isUint8Array('output', output);
      } else {
        output = getAssertedOutput(output, 32);
      }

      switch (secp256k1.ecdh(output, pubkey, seckey, options.data, options.hashfn, options.xbuf, options.ybuf)) {
        case 0:
          return output;

        case 1:
          throw new Error(errors.PUBKEY_PARSE);

        case 2:
          throw new Error(errors.ECDH);
      }
    }

  };
};
},{}],"../node_modules/gridplus-sdk/node_modules/secp256k1/lib/elliptic.js":[function(require,module,exports) {
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');
const ecparams = ec.curve; // Hack, we can not use bn.js@5, while elliptic uses bn.js@4
// See https://github.com/indutny/elliptic/issues/191#issuecomment-569888758

const BN = ecparams.n.constructor;

function loadCompressedPublicKey(first, xbuf) {
  let x = new BN(xbuf); // overflow

  if (x.cmp(ecparams.p) >= 0) return null;
  x = x.toRed(ecparams.red); // compute corresponding Y

  let y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt();
  if (first === 0x03 !== y.isOdd()) y = y.redNeg();
  return ec.keyPair({
    pub: {
      x: x,
      y: y
    }
  });
}

function loadUncompressedPublicKey(first, xbuf, ybuf) {
  let x = new BN(xbuf);
  let y = new BN(ybuf); // overflow

  if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0) return null;
  x = x.toRed(ecparams.red);
  y = y.toRed(ecparams.red); // is odd flag

  if ((first === 0x06 || first === 0x07) && y.isOdd() !== (first === 0x07)) return null; // x*x*x + b = y*y

  const x3 = x.redSqr().redIMul(x);
  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero()) return null;
  return ec.keyPair({
    pub: {
      x: x,
      y: y
    }
  });
}

function loadPublicKey(pubkey) {
  // length should be validated in interface
  const first = pubkey[0];

  switch (first) {
    case 0x02:
    case 0x03:
      if (pubkey.length !== 33) return null;
      return loadCompressedPublicKey(first, pubkey.subarray(1, 33));

    case 0x04:
    case 0x06:
    case 0x07:
      if (pubkey.length !== 65) return null;
      return loadUncompressedPublicKey(first, pubkey.subarray(1, 33), pubkey.subarray(33, 65));

    default:
      return null;
  }
}

function savePublicKey(output, point) {
  const pubkey = point.encode(null, output.length === 33); // Loop should be faster because we do not need create extra Uint8Array
  // output.set(new Uint8Array(pubkey))

  for (let i = 0; i < output.length; ++i) output[i] = pubkey[i];
}

module.exports = {
  contextRandomize() {
    return 0;
  },

  privateKeyVerify(seckey) {
    const bn = new BN(seckey);
    return bn.cmp(ecparams.n) < 0 && !bn.isZero() ? 0 : 1;
  },

  privateKeyNegate(seckey) {
    const bn = new BN(seckey);
    const negate = ecparams.n.sub(bn).umod(ecparams.n).toArrayLike(Uint8Array, 'be', 32);
    seckey.set(negate);
    return 0;
  },

  privateKeyTweakAdd(seckey, tweak) {
    const bn = new BN(tweak);
    if (bn.cmp(ecparams.n) >= 0) return 1;
    bn.iadd(new BN(seckey));
    if (bn.cmp(ecparams.n) >= 0) bn.isub(ecparams.n);
    if (bn.isZero()) return 1;
    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
    seckey.set(tweaked);
    return 0;
  },

  privateKeyTweakMul(seckey, tweak) {
    let bn = new BN(tweak);
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1;
    bn.imul(new BN(seckey));
    if (bn.cmp(ecparams.n) >= 0) bn = bn.umod(ecparams.n);
    const tweaked = bn.toArrayLike(Uint8Array, 'be', 32);
    seckey.set(tweaked);
    return 0;
  },

  publicKeyVerify(pubkey) {
    const pair = loadPublicKey(pubkey);
    return pair === null ? 1 : 0;
  },

  publicKeyCreate(output, seckey) {
    const bn = new BN(seckey);
    if (bn.cmp(ecparams.n) >= 0 || bn.isZero()) return 1;
    const point = ec.keyFromPrivate(seckey).getPublic();
    savePublicKey(output, point);
    return 0;
  },

  publicKeyConvert(output, pubkey) {
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    const point = pair.getPublic();
    savePublicKey(output, point);
    return 0;
  },

  publicKeyNegate(output, pubkey) {
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    const point = pair.getPublic();
    point.y = point.y.redNeg();
    savePublicKey(output, point);
    return 0;
  },

  publicKeyCombine(output, pubkeys) {
    const pairs = new Array(pubkeys.length);

    for (let i = 0; i < pubkeys.length; ++i) {
      pairs[i] = loadPublicKey(pubkeys[i]);
      if (pairs[i] === null) return 1;
    }

    let point = pairs[0].getPublic();

    for (let i = 1; i < pairs.length; ++i) point = point.add(pairs[i].pub);

    if (point.isInfinity()) return 2;
    savePublicKey(output, point);
    return 0;
  },

  publicKeyTweakAdd(output, pubkey, tweak) {
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0) return 2;
    const point = pair.getPublic().add(ecparams.g.mul(tweak));
    if (point.isInfinity()) return 2;
    savePublicKey(output, point);
    return 0;
  },

  publicKeyTweakMul(output, pubkey, tweak) {
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero()) return 2;
    const point = pair.getPublic().mul(tweak);
    savePublicKey(output, point);
    return 0;
  },

  signatureNormalize(sig) {
    const r = new BN(sig.subarray(0, 32));
    const s = new BN(sig.subarray(32, 64));
    if (r.cmp(ecparams.n) >= 0 || s.cmp(ecparams.n) >= 0) return 1;

    if (s.cmp(ec.nh) === 1) {
      sig.set(ecparams.n.sub(s).toArrayLike(Uint8Array, 'be', 32), 32);
    }

    return 0;
  },

  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureExport(obj, sig) {
    const sigR = sig.subarray(0, 32);
    const sigS = sig.subarray(32, 64);
    if (new BN(sigR).cmp(ecparams.n) >= 0) return 1;
    if (new BN(sigS).cmp(ecparams.n) >= 0) return 1;
    const {
      output
    } = obj; // Prepare R

    let r = output.subarray(4, 4 + 33);
    r[0] = 0x00;
    r.set(sigR, 1);
    let lenR = 33;
    let posR = 0;

    for (; lenR > 1 && r[posR] === 0x00 && !(r[posR + 1] & 0x80); --lenR, ++posR);

    r = r.subarray(posR);
    if (r[0] & 0x80) return 1;
    if (lenR > 1 && r[0] === 0x00 && !(r[1] & 0x80)) return 1; // Prepare S

    let s = output.subarray(6 + 33, 6 + 33 + 33);
    s[0] = 0x00;
    s.set(sigS, 1);
    let lenS = 33;
    let posS = 0;

    for (; lenS > 1 && s[posS] === 0x00 && !(s[posS + 1] & 0x80); --lenS, ++posS);

    s = s.subarray(posS);
    if (s[0] & 0x80) return 1;
    if (lenS > 1 && s[0] === 0x00 && !(s[1] & 0x80)) return 1; // Set output length for return

    obj.outputlen = 6 + lenR + lenS; // Output in specified format
    // 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]

    output[0] = 0x30;
    output[1] = obj.outputlen - 2;
    output[2] = 0x02;
    output[3] = r.length;
    output.set(r, 4);
    output[4 + lenR] = 0x02;
    output[5 + lenR] = s.length;
    output.set(s, 6 + lenR);
    return 0;
  },

  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureImport(output, sig) {
    if (sig.length < 8) return 1;
    if (sig.length > 72) return 1;
    if (sig[0] !== 0x30) return 1;
    if (sig[1] !== sig.length - 2) return 1;
    if (sig[2] !== 0x02) return 1;
    const lenR = sig[3];
    if (lenR === 0) return 1;
    if (5 + lenR >= sig.length) return 1;
    if (sig[4 + lenR] !== 0x02) return 1;
    const lenS = sig[5 + lenR];
    if (lenS === 0) return 1;
    if (6 + lenR + lenS !== sig.length) return 1;
    if (sig[4] & 0x80) return 1;
    if (lenR > 1 && sig[4] === 0x00 && !(sig[5] & 0x80)) return 1;
    if (sig[lenR + 6] & 0x80) return 1;
    if (lenS > 1 && sig[lenR + 6] === 0x00 && !(sig[lenR + 7] & 0x80)) return 1;
    let sigR = sig.subarray(4, 4 + lenR);
    if (sigR.length === 33 && sigR[0] === 0x00) sigR = sigR.subarray(1);
    if (sigR.length > 32) return 1;
    let sigS = sig.subarray(6 + lenR);
    if (sigS.length === 33 && sigS[0] === 0x00) sigS = sigS.slice(1);
    if (sigS.length > 32) throw new Error('S length is too long');
    let r = new BN(sigR);
    if (r.cmp(ecparams.n) >= 0) r = new BN(0);
    let s = new BN(sig.subarray(6 + lenR));
    if (s.cmp(ecparams.n) >= 0) s = new BN(0);
    output.set(r.toArrayLike(Uint8Array, 'be', 32), 0);
    output.set(s.toArrayLike(Uint8Array, 'be', 32), 32);
    return 0;
  },

  ecdsaSign(obj, message, seckey, data, noncefn) {
    if (noncefn) {
      const _noncefn = noncefn;

      noncefn = counter => {
        const nonce = _noncefn(message, seckey, null, data, counter);

        const isValid = nonce instanceof Uint8Array && nonce.length === 32;
        if (!isValid) throw new Error('This is the way');
        return new BN(nonce);
      };
    }

    const d = new BN(seckey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero()) return 1;
    let sig;

    try {
      sig = ec.sign(message, seckey, {
        canonical: true,
        k: noncefn,
        pers: data
      });
    } catch (err) {
      return 1;
    }

    obj.signature.set(sig.r.toArrayLike(Uint8Array, 'be', 32), 0);
    obj.signature.set(sig.s.toArrayLike(Uint8Array, 'be', 32), 32);
    obj.recid = sig.recoveryParam;
    return 0;
  },

  ecdsaVerify(sig, msg32, pubkey) {
    const sigObj = {
      r: sig.subarray(0, 32),
      s: sig.subarray(32, 64)
    };
    const sigr = new BN(sigObj.r);
    const sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1;
    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero()) return 3;
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 2;
    const point = pair.getPublic();
    const isValid = ec.verify(msg32, sigObj, point);
    return isValid ? 0 : 3;
  },

  ecdsaRecover(output, sig, recid, msg32) {
    const sigObj = {
      r: sig.slice(0, 32),
      s: sig.slice(32, 64)
    };
    const sigr = new BN(sigObj.r);
    const sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0) return 1;
    if (sigr.isZero() || sigs.isZero()) return 2; // Can throw `throw new Error('Unable to find sencond key candinate');`

    let point;

    try {
      point = ec.recoverPubKey(msg32, sigObj, recid);
    } catch (err) {
      return 2;
    }

    savePublicKey(output, point);
    return 0;
  },

  ecdh(output, pubkey, seckey, data, hashfn, xbuf, ybuf) {
    const pair = loadPublicKey(pubkey);
    if (pair === null) return 1;
    const scalar = new BN(seckey);
    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero()) return 2;
    const point = pair.getPublic().mul(scalar);

    if (hashfn === undefined) {
      const data = point.encode(null, true);
      const sha256 = ec.hash().update(data).digest();

      for (let i = 0; i < 32; ++i) output[i] = sha256[i];
    } else {
      if (!xbuf) xbuf = new Uint8Array(32);
      const x = point.getX().toArray('be', 32);

      for (let i = 0; i < 32; ++i) xbuf[i] = x[i];

      if (!ybuf) ybuf = new Uint8Array(32);
      const y = point.getY().toArray('be', 32);

      for (let i = 0; i < 32; ++i) ybuf[i] = y[i];

      const hash = hashfn(xbuf, ybuf, data);
      const isValid = hash instanceof Uint8Array && hash.length === output.length;
      if (!isValid) return 2;
      output.set(hash);
    }

    return 0;
  }

};
},{"elliptic":"../node_modules/elliptic/lib/elliptic.js"}],"../node_modules/gridplus-sdk/node_modules/secp256k1/elliptic.js":[function(require,module,exports) {
module.exports = require('./lib')(require('./lib/elliptic'));
},{"./lib":"../node_modules/gridplus-sdk/node_modules/secp256k1/lib/index.js","./lib/elliptic":"../node_modules/gridplus-sdk/node_modules/secp256k1/lib/elliptic.js"}],"../node_modules/gridplus-sdk/src/ethereum.js":[function(require,module,exports) {

// Utils for Ethereum transactions. This is effecitvely a shim of ethereumjs-util, which
// does not have browser (or, by proxy, React-Native) support.
const BN = require('bignumber.js');
const Buffer = require('buffer/').Buffer
const constants = require('./constants');
const keccak256 = require('js-sha3').keccak256;
const rlp = require('rlp-browser');
const secp256k1 = require('secp256k1');

exports.buildEthereumMsgRequest = function(input) {
  if (!input.payload || !input.protocol || !input.signerPath)
    throw new Error('You must provide `payload`, `signerPath`, and `protocol` arguments in the messsage request');
  const req = {
    schema: constants.signingSchema.ETH_MSG,
    payload: null,
    input, // Save the input for later
    msg: null, // Save the buffered message for later
  }
  if (input.protocol === 'signPersonal') {
    const L = ((input.signerPath.length + 1) * 4) + input.ethMaxMsgSz + 4;
    let off = 0;
    req.payload = Buffer.alloc(L);
    req.payload.writeUInt8(constants.ethMsgProtocol.SIGN_PERSONAL, 0); off += 1;
    req.payload.writeUInt32LE(input.signerPath.length, off); off += 4;
    for (let i = 0; i < input.signerPath.length; i++) {
      req.payload.writeUInt32LE(input.signerPath[i], off); off += 4;
    }
    // Write the payload buffer. The payload can come in either as a buffer or as a string
    let payload = input.payload;
    // Determine if this is a hex string
    let displayHex = false;
    if (typeof input.payload === 'string') {
      if (input.payload.slice(0, 2) === '0x') {
        payload = ensureHexBuffer(input.payload)
        displayHex = true === isHexStr(input.payload.slice(2));
      } else {
        if (false === latticeCanDisplayStr(input.payload))
          throw new Error('Currently, the Lattice can only display ASCII strings.');
        payload = Buffer.from(input.payload)
      }
    } else if (typeof input.displayHex === 'boolean') {
      // If this is a buffer and the user has specified whether or not this
      // is a hex buffer with the optional argument, write that
      displayHex = input.displayHex
    }
    // Write the payload and metadata into our buffer
    req.msg = payload;
    req.payload.writeUInt8(displayHex, off); off += 1;
    req.payload.writeUInt16LE(payload.length, off); off += 2;
    // Make sure we didn't run past the max size
    if (payload.length > input.ethMaxMsgSz)
      throw new Error(`Your message is ${payload.length} bytes, but can only be a maximum of ${input.ethMaxMsgSz}`);
    payload.copy(req.payload, off);
    return req;
  } else {
    throw new Error('Unsupported protocol');
  }
}

exports.validateEthereumMsgResponse = function(res, req) {
  const { signer, sig } = res;
  const { input, msg } = req;
  if (input.protocol === 'signPersonal') {
    const prefix = Buffer.from(
      `\u0019Ethereum Signed Message:\n${msg.length.toString()}`,
      'utf-8',
    );
    return addRecoveryParam(Buffer.concat([prefix, msg]), sig, signer)
  } else {
    throw new Error('Unsupported protocol');
  }
}

exports.buildEthereumTxRequest = function(data) {
  try {
    let { chainId=1 } = data;
    const { signerPath, eip155=null, ethMaxDataSz } = data;
    // Sanity checks:
    // There are a handful of named chains we allow the user to reference (`chainIds`)
    // Custom chainIDs should be either numerical or hex strings
    if (typeof chainId !== 'number' && isValidChainIdHexNumStr(chainId) === false) 
      chainId = chainIds[chainId];
    // If this was not a custom chainID and we cannot find the name of it, exit
    if (!chainId) 
      throw new Error('Unsupported chain ID or name');
    // Sanity check on signePath
    if (!signerPath || signerPath.length !== 5) 
      throw new Error('Please provider full signer path (`signerPath`)')

    // Determine if we should use EIP155 given the chainID.
    // If we are explicitly told to use eip155, we will use it. Otherwise,
    // we will look up if the specified chainId is associated with a chain
    // that does not use EIP155 by default. Note that most do use EIP155.
    let useEIP155 = chainUsesEIP155(chainId);
    if (eip155 !== null && typeof eip155 === 'boolean')
      useEIP155 = eip155;

    // Hack for metamask, which sends value=null for 0 ETH transactions
    if (!data.value)
      data.value = 0;
      
    //--------------
    // 1. BUILD THE RAW TX FOR FUTURE RLP ENCODING
    //--------------

    // Ensure all fields are 0x-prefixed hex strings
    const rawTx = [];
    // Build the transaction buffer array
    const nonceBytes = ensureHexBuffer(data.nonce);
    const gasPriceBytes = ensureHexBuffer(data.gasPrice);
    const gasLimitBytes = ensureHexBuffer(data.gasLimit);
    const toBytes = ensureHexBuffer(data.to);
    const valueBytes = ensureHexBuffer(data.value);
    const dataBytes = ensureHexBuffer(data.data);

    rawTx.push(nonceBytes);
    rawTx.push(gasPriceBytes);
    rawTx.push(gasLimitBytes);
    rawTx.push(toBytes);
    rawTx.push(valueBytes);
    rawTx.push(dataBytes);
    // Add empty v,r,s values
    if (useEIP155 === true) {
      rawTx.push(ensureHexBuffer(chainId)); // v
      rawTx.push(ensureHexBuffer(null));    // r
      rawTx.push(ensureHexBuffer(null));    // s
    }

    //--------------
    // 2. BUILD THE LATTICE REQUEST PAYLOAD
    //--------------
    const ETH_TX_NON_DATA_SZ = 122; // Accounts for metadata and non-data params
    const txReqPayload = Buffer.alloc(ethMaxDataSz + ETH_TX_NON_DATA_SZ);
    let off = 0;
    // 1. EIP155 switch and chainID
    //------------------
    txReqPayload.writeUInt8(Number(useEIP155), off); off++;
    // NOTE: Originally we designed for a 1-byte chainID, but modern rollup chains use much larger
    // chainID values. To account for these, we will put the chainID into the `data` buffer if it
    // is >=255. Values up to UINT64_MAX will be allowed.
    let chainIdBuf; 
    let chainIdBufSz = 0;
    if (useChainIdBuffer(chainId) === true) {
      chainIdBuf = getChainIdBuf(chainId);
      chainIdBufSz = chainIdBuf.length;
      if (chainIdBufSz > constants.MAX_CHAIN_ID_BYTES)
        throw new Error('ChainID provided is too large.');
      // Signal to Lattice firmware that it needs to read the chainId from the tx.data buffer
      txReqPayload.writeUInt8(constants.HANDLE_LARGER_CHAIN_ID, off); off++;
    } else {
      // For chainIDs <255, write it to the chainId u8 slot in the main tx buffer
      chainIdBuf = ensureHexBuffer(chainId);
      if (chainIdBuf.length !== 1)
        throw new Error('Error parsing chainID');
      chainIdBuf.copy(txReqPayload, off); off += chainIdBuf.length;
    }

    // 2. BIP44 Path
    //------------------
    // First write the number of indices in this path (will probably always be 5, but
    // we want to keep this extensible)
    txReqPayload.writeUInt32LE(signerPath.length, off); off += 4;
    for (let i = 0; i < signerPath.length; i++) {
      txReqPayload.writeUInt32LE(signerPath[i], off); off += 4;
    }

    // 3. ETH TX request data
    //------------------
    txReqPayload.writeUInt32BE(data.nonce, off); off += 4;
    writeUInt64BE(data.gasPrice, txReqPayload, off); off += 8;
    txReqPayload.writeUInt32BE(data.gasLimit, off); off += 4;
    toBytes.copy(txReqPayload, off); off += 20;
    // Place the value (a BE number) in an offset such that it
    // can be interpreted as a number
    const valueOff = off + 32 - valueBytes.length;
    valueBytes.copy(txReqPayload, valueOff); off += 32;
    // Ensure data field isn't too long
    if (dataBytes && dataBytes.length > ethMaxDataSz) {
      return { err: `Data field too large (must be <=${ethMaxDataSz} bytes)` }
    }
    // Write the data size (does *NOT* include the chainId buffer, if that exists)
    txReqPayload.writeUInt16BE(dataBytes.length, off); off += 2;
    if (dataBytes.length + chainIdBufSz > ethMaxDataSz)
      throw new Error('Payload too large.');
    // Copy in the chainId buffer if needed
    if (chainIdBufSz > 0) {
      txReqPayload.writeUInt8(chainIdBufSz, off); off++;
      chainIdBuf.copy(txReqPayload, off); off += chainIdBufSz;
    }
    // Copy the data itself
    dataBytes.copy(txReqPayload, off); off += ethMaxDataSz;
    return { 
      rawTx,
      payload: txReqPayload,
      schema: constants.signingSchema.ETH_TRANSFER,  // We will use eth transfer for all ETH txs for v1 
      chainId,
      useEIP155,
      signerPath,
    };
  } catch (err) {
    return { err: err.message };
  }
}

// From ethereumjs-util
function stripZeros(a) {
  let first = a[0]
  while (a.length > 0 && first.toString() === '0') {
    a = a.slice(1)
    first = a[0]
  }
  return a
}

// Given a 64-byte signature [r,s] we need to figure out the v value
// and attah the full signature to the end of the transaction payload
exports.buildEthRawTx = function(tx, sig, address, useEIP155=true) {
  // RLP-encode the data we sent to the lattice
  const rlpEncoded = rlp.encode(tx.rawTx);
  const newSig = addRecoveryParam(rlpEncoded, sig, address, tx.chainId, useEIP155);
  // Use the signature to generate a new raw transaction payload
  const newRawTx = tx.rawTx.slice(0, 6);
  newRawTx.push(newSig.v);
  // Per `ethereumjs-tx`, RLP encoding should include signature components w/ stripped zeros
  // See: https://github.com/ethereumjs/ethereumjs-tx/blob/master/src/transaction.ts#L187
  newRawTx.push(stripZeros(newSig.r));
  newRawTx.push(stripZeros(newSig.s));
  return rlp.encode(newRawTx).toString('hex');
}

// Attach a recovery parameter to a signature by brute-forcing ECRecover
function addRecoveryParam(payload, sig, address, chainId, useEIP155) {
  try {
    // Rebuild the keccak256 hash here so we can `ecrecover`
    const hash = new Uint8Array(Buffer.from(keccak256(payload), 'hex'));
    let v = 0;
    // Fix signature componenet lengths to 32 bytes each
    const r = fixLen(sig.r, 32); sig.r = r;
    const s = fixLen(sig.s, 32); sig.s = s;
    // Calculate the recovery param
    const rs = new Uint8Array(Buffer.concat([r, s]));
    let pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    // If the first `v` value is a match, return the sig!
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    }
    // Otherwise, try the other `v` value
    v = 1;
    pubkey = secp256k1.ecdsaRecover(rs, v, hash, false).slice(1)
    if (pubToAddrStr(pubkey) === address.toString('hex')) {
      sig.v  = getRecoveryParam(v, useEIP155, chainId);
      return sig;
    } else {
      // If neither is a match, we should return an error
      throw new Error('Invalid Ethereum signature returned.');
    }
  } catch (err) {
    throw new Error(err);
  }
}
exports.addRecoveryParam = addRecoveryParam;

// Convert an RLP-serialized transaction (plus signature) into a transaction hash
exports.hashTransaction = function(serializedTx) {
  return keccak256(Buffer.from(serializedTx, 'hex')); 
}

// Returns address string given public key buffer
function pubToAddrStr(pub) {
  return keccak256(pub).slice(-40);
}

function fixLen(msg, length) {
  const buf = Buffer.alloc(length)
  if (msg.length < length) {
    msg.copy(buf, length - msg.length)
    return buf
  }
  return msg.slice(-length)
}

// Convert a 0/1 `v` into a recovery param:
// * For non-EIP155 transactions, return `27 + v`
// * For EIP155 transactions, return `(CHAIN_ID*2) + 35 + v`
function getRecoveryParam(v, useEIP155, chainId) {
  // If we are not using EIP155, convert v directly to a buffer and return it
  if (false === useEIP155)
    return Buffer.from(new BN(v).plus(27).toString(16), 'hex');
  // We will use EIP155 in most cases. Convert v to a bignum and operate on it.
  // Note that the protocol calls for v = (CHAIN_ID*2) + 35/36, where 35 or 36
  // is decided on based on the ecrecover result. `v` is passed in as either 0 or 1
  // so we add 35 to that.
  const chainIdBuf = getChainIdBuf(chainId);
  const chainIdBN = new BN(chainIdBuf.toString('hex'), 16);
  return ensureHexBuffer(chainIdBN.times(2).plus(35).plus(v).toString(16));
}

function writeUInt64BE(n, buf, off) {
  if (typeof n === 'number') n = n.toString(16);
  const preBuf = Buffer.alloc(8);
  const nStr = n.length % 2 === 0 ? n.toString(16) : `0${n.toString(16)}`;
  const nBuf = Buffer.from(nStr, 'hex');
  nBuf.copy(preBuf, preBuf.length - nBuf.length);
  preBuf.copy(buf, off);
  return preBuf;
}

function isHexStr(str) {
  return (/^[0-9a-fA-F]+$/).test(str)
}

// Determine if the Lattice can display a string we give it. Currently, the Lattice can only
// display ASCII strings, so we will reject other UTF8 codes.
// In the future we may add a mechanism to display certain UTF8 codes such as popular emojis.
function latticeCanDisplayStr(str) {
  for (let i = 0; i < str.length; i++)
    if (str.charCodeAt(i) < 0x0020 || str.charCodeAt(i) > 0x007f)
      return false;
  return true;
}

const chainIds = {
  mainnet: 1,
  roptsten: 3,
  rinkeby: 4,
  kovan: 42,
  goerli: 5
}

// Get a buffer containing the chainId value.
// Returns a 1, 2, 4, or 8 byte buffer with the chainId encoded in big endian
function getChainIdBuf(chainId) {
  let b;
  // If our chainID is a hex string, we can convert it to a hex
  // buffer directly
  if (true === isValidChainIdHexNumStr(chainId))
    b = ensureHexBuffer(chainId);
  // If our chainID is a base-10 number, parse with bignumber.js and convert to hex buffer
  else
    b = ensureHexBuffer(new BN(chainId).toString(16));
  // Make sure the buffer is an allowed size
  if (b.length > 8)
    throw new Error('ChainID provided is too large.');
  // If this matches a u16, u32, or u64 size, return it now
  if (b.length <= 2 || b.length === 4 || b.length === 8)
    return b;
  // For other size buffers, we need to pack into u32 or u64 before returning;
  let buf;
  if (b.length === 3) {
    buf = Buffer.alloc(4);
    buf.writeUInt32BE(chainId);
  } else if (b.length <= 8) {
    buf = Buffer.alloc(8);
    b.copy(buf, 8 - b.length)
  }
  return buf;
}

// Determine if the chain uses EIP155 by default, based on the chainID
function chainUsesEIP155(chainID) {
  switch (chainID) {
    case 3: // ropsten
    case 4: // rinkeby
      return false;
    case 1: // mainnet
    case 42: // kovan
    case 5: // goerli
    default: // all others should use eip155
      return true;
  }
}

// Determine if a valid number was passed in as a hex string
function isValidChainIdHexNumStr(s) {
  return new BN(s, 16).isNaN() === false;
}

// If this is a nubmer that fits in one byte, we don't need to add it
// to the `data` buffer of the main transaction. 
// Note the one edge case: we still need to use the `data` field for chainID=255.
function useChainIdBuffer(id) {
  const buf = getChainIdBuf(id);
  if (buf.length === 1)
    return buf.readUInt8(0) === 255;
  return true;
}

exports.chainIds = chainIds;

// Ensure a param is represented by a buffer
// TODO: Remove circular dependency in util.js so that we can put this function there
function ensureHexBuffer(x) {
  if (x === null || x === 0) return Buffer.alloc(0);
  else if (Buffer.isBuffer(x)) x = x.toString('hex');
  if (typeof x === 'number') x = `${x.toString(16)}`;
  else if (typeof x === 'string' && x.slice(0, 2) === '0x') x = x.slice(2);
  if (x.length % 2 > 0) x = `0${x}`;
  return Buffer.from(x, 'hex');
}
exports.ensureHexBuffer = ensureHexBuffer;
},{"bignumber.js":"../node_modules/bignumber.js/bignumber.js","buffer/":"../node_modules/buffer/index.js","./constants":"../node_modules/gridplus-sdk/src/constants.js","js-sha3":"../node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js","rlp-browser":"../node_modules/rlp-browser/index.js","secp256k1":"../node_modules/gridplus-sdk/node_modules/secp256k1/elliptic.js"}],"../node_modules/gridplus-sdk/src/ethereumAbi.js":[function(require,module,exports) {

const Buffer = require('buffer/').Buffer
const keccak256 = require('js-sha3').keccak256;
const { ETH_ABI_LATTICE_FW_TYPE_MAP } = require('./constants');
const NAME_MAX_SZ = 100;
const HEADER_SZ = 5 + NAME_MAX_SZ; // 4 byte sig + name + 1 byte param count
const PARAM_SZ = 26; // 20 byte name + 6 byte def
const MAX_PARAMS = 18;
const MAX_ABI_DEFS = 2;
exports.MAX_ABI_DEFS = MAX_ABI_DEFS;

// Build a request to add ABI data
exports.buildAddAbiPayload = function(defs) {
  if (!defs || !Array.isArray(defs))
    throw new Error('Missing definitions.');
  if (defs.length > exports.MAX_ABI_DEFS)
    throw new Error(`You may only add ${MAX_ABI_DEFS} ABI definitions per request.`);
  const b = Buffer.alloc(1 + (MAX_ABI_DEFS * (HEADER_SZ + (PARAM_SZ * MAX_PARAMS))));
  let off = 0;
  b.writeUInt8(defs.length, off); off++;
  defs.forEach((def) => {
    if (!def.sig || !def.name || !def.params)
      throw new Error('name, sig, and params must be present for every ABI definition.')
    // Header data
    const sig = Buffer.from(def.sig, 'hex');
    if (sig.length !== 4)
      throw new Error('Function signatures must always be four bytes.');
    sig.copy(b, off); off += sig.length;
    const name = Buffer.from(def.name);
    if (name.length > NAME_MAX_SZ - 1) // The -1 accounts for the null terminator
      throw new Error(`Only function names shorter than ${NAME_MAX_SZ} characters are supported.`);
    Buffer.from(def.name).slice(0, NAME_MAX_SZ).copy(b, off); off += NAME_MAX_SZ;
    // Number of parameters
    const numParams = Array.isArray(def.params) ? def.params.length : 0;
    b.writeUInt8(numParams, off); off++;
    // Don't overflow the buffer
    if (numParams > MAX_PARAMS)
      throw new Error('Currently only ABI defintions with <=10 parameters are supported.');
    // Copy the params if needed
    if (numParams > 0) {
      // First copy param names (first 20 bytes)
      def.params.forEach((param) => {
        if (!param.name || !param.latticeTypeIdx || param.isArray === undefined || param.arraySz === undefined)
          throw new Error('name, latticeTypeIdx, isArray, and arraySz must be defined for all ABI params.');
        Buffer.from(param.name).slice(0, 20).copy(b, off); off += 20;
      })
      // Bump offset to account for blank param slots
      off += 20 * (MAX_PARAMS - numParams);
      // Next copy the definitions
      def.params.forEach((param) => {
        b.writeUInt8(param.latticeTypeIdx, off); off++;
        b.writeUInt8(param.isArray === true, off); off++;
        b.writeUInt32LE(param.arraySz, off); off += 4;
      })
      // Bump offset again
      off += 6 * (MAX_PARAMS - numParams);
    } else {
      // If there are no params, just bump the offset
      off += PARAM_SZ * MAX_PARAMS;
    }
  })
  return b;
}

//--------------------------------------
// PARSERS
//--------------------------------------
function parseEtherscanAbiDefs(_defs) { // `_defs` are `result` of the parsed response
  const defs = [];
  _defs.forEach((d) => {
    if (d.name && d.inputs && d.type === 'function' && d.stateMutability !== 'view') {
      const sig = getFuncSig(d);
      const params = parseEtherscanAbiInputs(d.inputs);
      defs.push({
        name: d.name,
        sig,
        params,
      })
    }
  })
  return defs;
}

exports.abiParsers = {
  etherscan: parseEtherscanAbiDefs,
}

//--------------------------------------
// HELPERS
//--------------------------------------
// Get the 4-byte function identifier based on the canonical name
function getFuncSig(f) {
  // Canonical name is:
  // funcName(paramType0, ..., paramTypeN)
  let canonicalName = `${f.name}(`;
  f.inputs.forEach((input) => {
    canonicalName += `${input.type},`
  })
  if (f.inputs.length > 0)
    canonicalName = canonicalName.slice(0, canonicalName.length - 1)
  canonicalName += ')'
  return keccak256(canonicalName).slice(0, 8);
}

// Parse the ABI param data into structs Lattice firmware will recognize.
function parseEtherscanAbiInputs(inputs) {
  const data = [];
  inputs.forEach((input) => {
    const typeName = input.type;
    const d = { isArray: false, arraySz: 0, name: input.name, };
    const openBracketIdx = typeName.indexOf('[');
    const closeBracketIdx = typeName.indexOf(']');
    if (openBracketIdx > -1 && closeBracketIdx > -1) {
      if (openBracketIdx >= closeBracketIdx) {
        ; // not a valid param -- skip it
      } else if ((openBracketIdx + 1) === closeBracketIdx) {
        d.isArray = true;
      } else {
        // Parse the array size if applicable
        const number = parseInt(typeName.slice(openBracketIdx, closeBracketIdx))
        if (isNaN(number)) {
          return d;
        }
        d.isArray = true;
        d.arraySz = number;
      }
    }
    const singularTypeName = openBracketIdx > -1 ? typeName.slice(0, openBracketIdx) : typeName;
    d.latticeTypeIdx = getTypeIdxLatticeFw(singularTypeName)
    if (!d.latticeTypeIdx)
      throw new Error(`Unsupported type: ${typeName}`)
    data.push(d)
  })
  return data;
}

// Enum values from inside Lattice firmware
function getTypeIdxLatticeFw(type) {
  return ETH_ABI_LATTICE_FW_TYPE_MAP[type];
}

},{"buffer/":"../node_modules/buffer/index.js","js-sha3":"../node_modules/gridplus-sdk/node_modules/js-sha3/src/sha3.js","./constants":"../node_modules/gridplus-sdk/src/constants.js"}],"../node_modules/gridplus-sdk/node_modules/aes-js/index.js":[function(require,module,exports) {
var define;
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
(function(root) {
    "use strict";

    function checkInt(value) {
        return (parseInt(value) === value);
    }

    function checkInts(arrayish) {
        if (!checkInt(arrayish.length)) { return false; }

        for (var i = 0; i < arrayish.length; i++) {
            if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
                return false;
            }
        }

        return true;
    }

    function coerceArray(arg, copy) {

        // ArrayBuffer view
        if (arg.buffer && arg.name === 'Uint8Array') {

            if (copy) {
                if (arg.slice) {
                    arg = arg.slice();
                } else {
                    arg = Array.prototype.slice.call(arg);
                }
            }

            return arg;
        }

        // It's an array; check it is a valid representation of a byte
        if (Array.isArray(arg)) {
            if (!checkInts(arg)) {
                throw new Error('Array contains invalid value: ' + arg);
            }

            return new Uint8Array(arg);
        }

        // Something else, but behaves like an array (maybe a Buffer? Arguments?)
        if (checkInt(arg.length) && checkInts(arg)) {
            return new Uint8Array(arg);
        }

        throw new Error('unsupported array-like object');
    }

    function createArray(length) {
        return new Uint8Array(length);
    }

    function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
        if (sourceStart != null || sourceEnd != null) {
            if (sourceArray.slice) {
                sourceArray = sourceArray.slice(sourceStart, sourceEnd);
            } else {
                sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
            }
        }
        targetArray.set(sourceArray, targetStart);
    }



    var convertUtf8 = (function() {
        function toBytes(text) {
            var result = [], i = 0;
            text = encodeURI(text);
            while (i < text.length) {
                var c = text.charCodeAt(i++);

                // if it is a % sign, encode the following 2 bytes as a hex value
                if (c === 37) {
                    result.push(parseInt(text.substr(i, 2), 16))
                    i += 2;

                // otherwise, just the actual byte
                } else {
                    result.push(c)
                }
            }

            return coerceArray(result);
        }

        function fromBytes(bytes) {
            var result = [], i = 0;

            while (i < bytes.length) {
                var c = bytes[i];

                if (c < 128) {
                    result.push(String.fromCharCode(c));
                    i++;
                } else if (c > 191 && c < 224) {
                    result.push(String.fromCharCode(((c & 0x1f) << 6) | (bytes[i + 1] & 0x3f)));
                    i += 2;
                } else {
                    result.push(String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)));
                    i += 3;
                }
            }

            return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();

    var convertHex = (function() {
        function toBytes(text) {
            var result = [];
            for (var i = 0; i < text.length; i += 2) {
                result.push(parseInt(text.substr(i, 2), 16));
            }

            return result;
        }

        // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
        var Hex = '0123456789abcdef';

        function fromBytes(bytes) {
                var result = [];
                for (var i = 0; i < bytes.length; i++) {
                    var v = bytes[i];
                    result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
                }
                return result.join('');
        }

        return {
            toBytes: toBytes,
            fromBytes: fromBytes,
        }
    })();


    // Number of rounds by keysize
    var numberOfRounds = {16: 10, 24: 12, 32: 14}

    // Round constant words
    var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

    // S-box and Inverse S-box (S is for Substitution)
    var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
    var Si =[0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

    // Transformations for encryption
    var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
    var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
    var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
    var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

    // Transformations for decryption
    var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
    var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
    var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
    var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

    // Transformations for decryption key expansion
    var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
    var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
    var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
    var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];

    function convertToInt32(bytes) {
        var result = [];
        for (var i = 0; i < bytes.length; i += 4) {
            result.push(
                (bytes[i    ] << 24) |
                (bytes[i + 1] << 16) |
                (bytes[i + 2] <<  8) |
                 bytes[i + 3]
            );
        }
        return result;
    }

    var AES = function(key) {
        if (!(this instanceof AES)) {
            throw Error('AES must be instanitated with `new`');
        }

        Object.defineProperty(this, 'key', {
            value: coerceArray(key, true)
        });

        this._prepare();
    }


    AES.prototype._prepare = function() {

        var rounds = numberOfRounds[this.key.length];
        if (rounds == null) {
            throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
        }

        // encryption round keys
        this._Ke = [];

        // decryption round keys
        this._Kd = [];

        for (var i = 0; i <= rounds; i++) {
            this._Ke.push([0, 0, 0, 0]);
            this._Kd.push([0, 0, 0, 0]);
        }

        var roundKeyCount = (rounds + 1) * 4;
        var KC = this.key.length / 4;

        // convert the key into ints
        var tk = convertToInt32(this.key);

        // copy values into round key arrays
        var index;
        for (var i = 0; i < KC; i++) {
            index = i >> 2;
            this._Ke[index][i % 4] = tk[i];
            this._Kd[rounds - index][i % 4] = tk[i];
        }

        // key expansion (fips-197 section 5.2)
        var rconpointer = 0;
        var t = KC, tt;
        while (t < roundKeyCount) {
            tt = tk[KC - 1];
            tk[0] ^= ((S[(tt >> 16) & 0xFF] << 24) ^
                      (S[(tt >>  8) & 0xFF] << 16) ^
                      (S[ tt        & 0xFF] <<  8) ^
                       S[(tt >> 24) & 0xFF]        ^
                      (rcon[rconpointer] << 24));
            rconpointer += 1;

            // key expansion (for non-256 bit)
            if (KC != 8) {
                for (var i = 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }

            // key expansion for 256-bit keys is "slightly different" (fips-197)
            } else {
                for (var i = 1; i < (KC / 2); i++) {
                    tk[i] ^= tk[i - 1];
                }
                tt = tk[(KC / 2) - 1];

                tk[KC / 2] ^= (S[ tt        & 0xFF]        ^
                              (S[(tt >>  8) & 0xFF] <<  8) ^
                              (S[(tt >> 16) & 0xFF] << 16) ^
                              (S[(tt >> 24) & 0xFF] << 24));

                for (var i = (KC / 2) + 1; i < KC; i++) {
                    tk[i] ^= tk[i - 1];
                }
            }

            // copy values into round key arrays
            var i = 0, r, c;
            while (i < KC && t < roundKeyCount) {
                r = t >> 2;
                c = t % 4;
                this._Ke[r][c] = tk[i];
                this._Kd[rounds - r][c] = tk[i++];
                t++;
            }
        }

        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
        for (var r = 1; r < rounds; r++) {
            for (var c = 0; c < 4; c++) {
                tt = this._Kd[r][c];
                this._Kd[r][c] = (U1[(tt >> 24) & 0xFF] ^
                                  U2[(tt >> 16) & 0xFF] ^
                                  U3[(tt >>  8) & 0xFF] ^
                                  U4[ tt        & 0xFF]);
            }
        }
    }

    AES.prototype.encrypt = function(plaintext) {
        if (plaintext.length != 16) {
            throw new Error('invalid plaintext size (must be 16 bytes)');
        }

        var rounds = this._Ke.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(plaintext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Ke[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T1[(t[ i         ] >> 24) & 0xff] ^
                        T2[(t[(i + 1) % 4] >> 16) & 0xff] ^
                        T3[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T4[ t[(i + 3) % 4]        & 0xff] ^
                        this._Ke[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Ke[rounds][i];
            result[4 * i    ] = (S[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (S[(t[(i + 1) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (S[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (S[ t[(i + 3) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }

    AES.prototype.decrypt = function(ciphertext) {
        if (ciphertext.length != 16) {
            throw new Error('invalid ciphertext size (must be 16 bytes)');
        }

        var rounds = this._Kd.length - 1;
        var a = [0, 0, 0, 0];

        // convert plaintext to (ints ^ key)
        var t = convertToInt32(ciphertext);
        for (var i = 0; i < 4; i++) {
            t[i] ^= this._Kd[0][i];
        }

        // apply round transforms
        for (var r = 1; r < rounds; r++) {
            for (var i = 0; i < 4; i++) {
                a[i] = (T5[(t[ i          ] >> 24) & 0xff] ^
                        T6[(t[(i + 3) % 4] >> 16) & 0xff] ^
                        T7[(t[(i + 2) % 4] >>  8) & 0xff] ^
                        T8[ t[(i + 1) % 4]        & 0xff] ^
                        this._Kd[r][i]);
            }
            t = a.slice();
        }

        // the last round is special
        var result = createArray(16), tt;
        for (var i = 0; i < 4; i++) {
            tt = this._Kd[rounds][i];
            result[4 * i    ] = (Si[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
            result[4 * i + 1] = (Si[(t[(i + 3) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
            result[4 * i + 2] = (Si[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
            result[4 * i + 3] = (Si[ t[(i + 1) % 4]        & 0xff] ^  tt       ) & 0xff;
        }

        return result;
    }


    /**
     *  Mode Of Operation - Electonic Codebook (ECB)
     */
    var ModeOfOperationECB = function(key) {
        if (!(this instanceof ModeOfOperationECB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Electronic Code Block";
        this.name = "ecb";

        this._aes = new AES(key);
    }

    ModeOfOperationECB.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);
            block = this._aes.encrypt(block);
            copyArray(block, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationECB.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);
            copyArray(block, plaintext, i);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Block Chaining (CBC)
     */
    var ModeOfOperationCBC = function(key, iv) {
        if (!(this instanceof ModeOfOperationCBC)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Block Chaining";
        this.name = "cbc";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastCipherblock = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCBC.prototype.encrypt = function(plaintext) {
        plaintext = coerceArray(plaintext);

        if ((plaintext.length % 16) !== 0) {
            throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
        }

        var ciphertext = createArray(plaintext.length);
        var block = createArray(16);

        for (var i = 0; i < plaintext.length; i += 16) {
            copyArray(plaintext, block, 0, i, i + 16);

            for (var j = 0; j < 16; j++) {
                block[j] ^= this._lastCipherblock[j];
            }

            this._lastCipherblock = this._aes.encrypt(block);
            copyArray(this._lastCipherblock, ciphertext, i);
        }

        return ciphertext;
    }

    ModeOfOperationCBC.prototype.decrypt = function(ciphertext) {
        ciphertext = coerceArray(ciphertext);

        if ((ciphertext.length % 16) !== 0) {
            throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
        }

        var plaintext = createArray(ciphertext.length);
        var block = createArray(16);

        for (var i = 0; i < ciphertext.length; i += 16) {
            copyArray(ciphertext, block, 0, i, i + 16);
            block = this._aes.decrypt(block);

            for (var j = 0; j < 16; j++) {
                plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
            }

            copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
        }

        return plaintext;
    }


    /**
     *  Mode Of Operation - Cipher Feedback (CFB)
     */
    var ModeOfOperationCFB = function(key, iv, segmentSize) {
        if (!(this instanceof ModeOfOperationCFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Cipher Feedback";
        this.name = "cfb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 size)');
        }

        if (!segmentSize) { segmentSize = 1; }

        this.segmentSize = segmentSize;

        this._shiftRegister = coerceArray(iv, true);

        this._aes = new AES(key);
    }

    ModeOfOperationCFB.prototype.encrypt = function(plaintext) {
        if ((plaintext.length % this.segmentSize) != 0) {
            throw new Error('invalid plaintext size (must be segmentSize bytes)');
        }

        var encrypted = coerceArray(plaintext, true);

        var xorSegment;
        for (var i = 0; i < encrypted.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);
            for (var j = 0; j < this.segmentSize; j++) {
                encrypted[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return encrypted;
    }

    ModeOfOperationCFB.prototype.decrypt = function(ciphertext) {
        if ((ciphertext.length % this.segmentSize) != 0) {
            throw new Error('invalid ciphertext size (must be segmentSize bytes)');
        }

        var plaintext = coerceArray(ciphertext, true);

        var xorSegment;
        for (var i = 0; i < plaintext.length; i += this.segmentSize) {
            xorSegment = this._aes.encrypt(this._shiftRegister);

            for (var j = 0; j < this.segmentSize; j++) {
                plaintext[i + j] ^= xorSegment[j];
            }

            // Shift the register
            copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
            copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
        }

        return plaintext;
    }

    /**
     *  Mode Of Operation - Output Feedback (OFB)
     */
    var ModeOfOperationOFB = function(key, iv) {
        if (!(this instanceof ModeOfOperationOFB)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Output Feedback";
        this.name = "ofb";

        if (!iv) {
            iv = createArray(16);

        } else if (iv.length != 16) {
            throw new Error('invalid initialation vector size (must be 16 bytes)');
        }

        this._lastPrecipher = coerceArray(iv, true);
        this._lastPrecipherIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationOFB.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._lastPrecipherIndex === 16) {
                this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
                this._lastPrecipherIndex = 0;
            }
            encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;


    /**
     *  Counter object for CTR common mode of operation
     */
    var Counter = function(initialValue) {
        if (!(this instanceof Counter)) {
            throw Error('Counter must be instanitated with `new`');
        }

        // We allow 0, but anything false-ish uses the default 1
        if (initialValue !== 0 && !initialValue) { initialValue = 1; }

        if (typeof(initialValue) === 'number') {
            this._counter = createArray(16);
            this.setValue(initialValue);

        } else {
            this.setBytes(initialValue);
        }
    }

    Counter.prototype.setValue = function(value) {
        if (typeof(value) !== 'number' || parseInt(value) != value) {
            throw new Error('invalid counter value (must be an integer)');
        }

        // We cannot safely handle numbers beyond the safe range for integers
        if (value > Number.MAX_SAFE_INTEGER) {
            throw new Error('integer value out of safe range');
        }

        for (var index = 15; index >= 0; --index) {
            this._counter[index] = value % 256;
            value = parseInt(value / 256);
        }
    }

    Counter.prototype.setBytes = function(bytes) {
        bytes = coerceArray(bytes, true);

        if (bytes.length != 16) {
            throw new Error('invalid counter bytes size (must be 16 bytes)');
        }

        this._counter = bytes;
    };

    Counter.prototype.increment = function() {
        for (var i = 15; i >= 0; i--) {
            if (this._counter[i] === 255) {
                this._counter[i] = 0;
            } else {
                this._counter[i]++;
                break;
            }
        }
    }


    /**
     *  Mode Of Operation - Counter (CTR)
     */
    var ModeOfOperationCTR = function(key, counter) {
        if (!(this instanceof ModeOfOperationCTR)) {
            throw Error('AES must be instanitated with `new`');
        }

        this.description = "Counter";
        this.name = "ctr";

        if (!(counter instanceof Counter)) {
            counter = new Counter(counter)
        }

        this._counter = counter;

        this._remainingCounter = null;
        this._remainingCounterIndex = 16;

        this._aes = new AES(key);
    }

    ModeOfOperationCTR.prototype.encrypt = function(plaintext) {
        var encrypted = coerceArray(plaintext, true);

        for (var i = 0; i < encrypted.length; i++) {
            if (this._remainingCounterIndex === 16) {
                this._remainingCounter = this._aes.encrypt(this._counter._counter);
                this._remainingCounterIndex = 0;
                this._counter.increment();
            }
            encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
        }

        return encrypted;
    }

    // Decryption is symetric
    ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;


    ///////////////////////
    // Padding

    // See:https://tools.ietf.org/html/rfc2315
    function pkcs7pad(data) {
        data = coerceArray(data, true);
        var padder = 16 - (data.length % 16);
        var result = createArray(data.length + padder);
        copyArray(data, result);
        for (var i = data.length; i < result.length; i++) {
            result[i] = padder;
        }
        return result;
    }

    function pkcs7strip(data) {
        data = coerceArray(data, true);
        if (data.length < 16) { throw new Error('PKCS#7 invalid length'); }

        var padder = data[data.length - 1];
        if (padder > 16) { throw new Error('PKCS#7 padding byte out of range'); }

        var length = data.length - padder;
        for (var i = 0; i < padder; i++) {
            if (data[length + i] !== padder) {
                throw new Error('PKCS#7 invalid padding byte');
            }
        }

        var result = createArray(length);
        copyArray(data, result, 0, 0, length);
        return result;
    }

    ///////////////////////
    // Exporting


    // The block cipher
    var aesjs = {
        AES: AES,
        Counter: Counter,

        ModeOfOperation: {
            ecb: ModeOfOperationECB,
            cbc: ModeOfOperationCBC,
            cfb: ModeOfOperationCFB,
            ofb: ModeOfOperationOFB,
            ctr: ModeOfOperationCTR
        },

        utils: {
            hex: convertHex,
            utf8: convertUtf8
        },

        padding: {
            pkcs7: {
                pad: pkcs7pad,
                strip: pkcs7strip
            }
        },

        _arrayTest: {
            coerceArray: coerceArray,
            createArray: createArray,
            copyArray: copyArray,
        }
    };


    // node.js
    if (typeof exports !== 'undefined') {
        module.exports = aesjs

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else if (typeof(define) === 'function' && define.amd) {
        define([], function() { return aesjs; });

    // Web Browsers
    } else {

        // If there was an existing library at "aesjs" make sure it's still available
        if (root.aesjs) {
            aesjs._aesjs = root.aesjs;
        }

        root.aesjs = aesjs;
    }


})(this);

},{}],"../node_modules/crc-32/crc32.js":[function(require,module,exports) {
var define;
/* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */

/* vim: set ts=2: */

/*exported CRC32 */
var CRC32;

(function (factory) {
  /*jshint ignore:start */

  /*eslint-disable */
  if (typeof DO_NOT_EXPORT_CRC === 'undefined') {
    if ('object' === typeof exports) {
      factory(exports);
    } else if ('function' === typeof define && define.amd) {
      define(function () {
        var module = {};
        factory(module);
        return module;
      });
    } else {
      factory(CRC32 = {});
    }
  } else {
    factory(CRC32 = {});
  }
  /*eslint-enable */

  /*jshint ignore:end */

})(function (CRC32) {
  CRC32.version = '1.2.0';
  /* see perf/crc32table.js */

  /*global Int32Array */

  function signed_crc_table() {
    var c = 0,
        table = new Array(256);

    for (var n = 0; n != 256; ++n) {
      c = n;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      table[n] = c;
    }

    return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
  }

  var T = signed_crc_table();

  function crc32_bstr(bstr, seed) {
    var C = seed ^ -1,
        L = bstr.length - 1;

    for (var i = 0; i < L;) {
      C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
      C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i++)) & 0xFF];
    }

    if (i === L) C = C >>> 8 ^ T[(C ^ bstr.charCodeAt(i)) & 0xFF];
    return C ^ -1;
  }

  function crc32_buf(buf, seed) {
    if (buf.length > 10000) return crc32_buf_8(buf, seed);
    var C = seed ^ -1,
        L = buf.length - 3;

    for (var i = 0; i < L;) {
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
    }

    while (i < L + 3) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

    return C ^ -1;
  }

  function crc32_buf_8(buf, seed) {
    var C = seed ^ -1,
        L = buf.length - 7;

    for (var i = 0; i < L;) {
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
      C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];
    }

    while (i < L + 7) C = C >>> 8 ^ T[(C ^ buf[i++]) & 0xFF];

    return C ^ -1;
  }

  function crc32_str(str, seed) {
    var C = seed ^ -1;

    for (var i = 0, L = str.length, c, d; i < L;) {
      c = str.charCodeAt(i++);

      if (c < 0x80) {
        C = C >>> 8 ^ T[(C ^ c) & 0xFF];
      } else if (c < 0x800) {
        C = C >>> 8 ^ T[(C ^ (192 | c >> 6 & 31)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
      } else if (c >= 0xD800 && c < 0xE000) {
        c = (c & 1023) + 64;
        d = str.charCodeAt(i++) & 1023;
        C = C >>> 8 ^ T[(C ^ (240 | c >> 8 & 7)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | c >> 2 & 63)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | d & 63)) & 0xFF];
      } else {
        C = C >>> 8 ^ T[(C ^ (224 | c >> 12 & 15)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | c >> 6 & 63)) & 0xFF];
        C = C >>> 8 ^ T[(C ^ (128 | c & 63)) & 0xFF];
      }
    }

    return C ^ -1;
  }

  CRC32.table = T; // $FlowIgnore

  CRC32.bstr = crc32_bstr; // $FlowIgnore

  CRC32.buf = crc32_buf; // $FlowIgnore

  CRC32.str = crc32_str;
});
},{}],"../node_modules/gridplus-sdk/src/util.js":[function(require,module,exports) {

// Static utility functions
const { buildBitcoinTxRequest } = require('./bitcoin');
const { buildEthereumTxRequest, buildEthereumMsgRequest, ensureHexBuffer } = require('./ethereum');
const Buffer = require('buffer/').Buffer
const aes = require('aes-js');
const crc32 = require('crc-32');
const elliptic = require('elliptic');
const { AES_IV, responseCodes, responseMsgs, VERSION_BYTE } = require('./constants');
const EC = elliptic.ec;
const ec = new EC('p256');

//--------------------------------------------------
// LATTICE UTILS
//--------------------------------------------------

// Parse a response from the Lattice1
function parseLattice1Response(r) {
  const parsed = {
    err: null,
    data: null,
  }
  const b = Buffer.from(r, 'hex');
  let off = 0;
  
  // Get protocol version
  const protoVer = b.readUInt8(off); off++;
  if (protoVer !== VERSION_BYTE) {
    parsed.err = 'Incorrect protocol version. Please update your SDK';
    return parsed;
  }

  // Get the type of response
  // Should always be 0x00
  const msgType = b.readUInt8(off); off++;
  if (msgType !== 0x00) {
    parsed.err = 'Incorrect response from Lattice1';
    return parsed;
  }

  // Get the payload
  b.readUInt32BE(off); off+=4; // First 4 bytes is the id, but we don't need that anymore
  const len = b.readUInt16BE(off); off+=2;
  const payload = b.slice(off, off+len); off+=len;

  // Get response code
  const responseCode = payload.readUInt8(0);
  if (responseCode !== responseCodes.RESP_SUCCESS) {
    parsed.err = `Error from device: ${responseMsgs[responseCode] ? responseMsgs[responseCode] : 'Unknown Error'}`;
    parsed.responseCode = responseCode;
    return parsed;
  } else {
    parsed.data = payload.slice(1, payload.length);
  }

  // Verify checksum
  const cs = b.readUInt32BE(off);
  const expectedCs = checksum(b.slice(0, b.length - 4));
  if (cs !== expectedCs) {
    parsed.err = 'Invalid checksum from device response'
    parsed.data = null;
    return parsed;
  }
  
  return parsed;
}

function checksum(x) {
  // crc32 returns a signed integer - need to cast it to unsigned
  // Note that this uses the default 0xedb88320 polynomial
  return crc32.buf(x) >>> 0; // Need this to be a uint, hence the bit shift
}

// Get a 74-byte padded DER-encoded signature buffer
// `sig` must be the signature output from elliptic.js
function toPaddedDER(sig) {
  // We use 74 as the maximum length of a DER signature. All sigs must
  // be right-padded with zeros so that this can be a fixed size field
  const b = Buffer.alloc(74);
  const ds = Buffer.from(sig.toDER());
  ds.copy(b);
  return b;
}

//--------------------------------------------------
// TRANSACTION UTILS
//--------------------------------------------------
const signReqResolver = {
  'BTC': buildBitcoinTxRequest,
  'ETH': buildEthereumTxRequest,
  'ETH_MSG': buildEthereumMsgRequest,
}

// Temporary helper to determine if this is a supported BIP44 parent path
function isValidAssetPath(path) {
  const HARDENED_OFFSET = 0x80000000;
  const allowedPurposes = [HARDENED_OFFSET+49, HARDENED_OFFSET+44];
  const allowedCoins = [HARDENED_OFFSET, HARDENED_OFFSET+1, HARDENED_OFFSET+60];
  const allowedAccounts = [HARDENED_OFFSET];
  const allowedChange = [0, 1]
  return (
    (allowedPurposes.indexOf(path[0]) >= 0) &&
    (allowedCoins.indexOf(path[1]) >= 0) &&
    (allowedAccounts.indexOf(path[2]) >= 0) &&
    (allowedChange.indexOf(path[3]) >= 0)
  );
}

//--------------------------------------------------
// CRYPTO UTILS
//--------------------------------------------------
function aes256_encrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  const paddedData = (data.length) % 16 === 0 ? data : aes.padding.pkcs7.pad(data);
  return Buffer.from(aesCbc.encrypt(paddedData));
}

function aes256_decrypt(data, key) {
  const iv = Buffer.from(AES_IV);
  const aesCbc = new aes.ModeOfOperation.cbc(key, iv);
  return Buffer.from(aesCbc.decrypt(data));
}

// Decode a DER signature. Returns signature object {r, s } or null if there is an error
function parseDER(sigBuf) {
  if (sigBuf[0] !== 0x30 || sigBuf[2] !== 0x02) return null;
  let off = 3;
  const sig = { r: null, s: null }
  const rLen = sigBuf[off]; off++;
  sig.r = sigBuf.slice(off, off + rLen); off += rLen
  if (sigBuf[off] !== 0x02) return null;
  off++;
  const sLen = sigBuf[off]; off++;
  sig.s = sigBuf.slice(off, off + sLen);
  return sig;
}

function getP256KeyPair (priv) {
  return ec.keyFromPrivate(priv, 'hex');
}

function getP256KeyPairFromPub(pub) {
  return ec.keyFromPublic(pub, 'hex');
}


module.exports = {
  isValidAssetPath,
  ensureHexBuffer,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  parseLattice1Response,
  getP256KeyPair,
  getP256KeyPairFromPub,
  toPaddedDER,
}
},{"./bitcoin":"../node_modules/gridplus-sdk/src/bitcoin.js","./ethereum":"../node_modules/gridplus-sdk/src/ethereum.js","buffer/":"../node_modules/buffer/index.js","aes-js":"../node_modules/gridplus-sdk/node_modules/aes-js/index.js","crc-32":"../node_modules/crc-32/crc32.js","elliptic":"../node_modules/elliptic/lib/elliptic.js","./constants":"../node_modules/gridplus-sdk/src/constants.js"}],"../node_modules/gridplus-sdk/src/client.js":[function(require,module,exports) {

const bitwise = require('bitwise');
const superagent = require('superagent');
const bitcoin = require('./bitcoin');
const ethereum = require('./ethereum');
const { buildAddAbiPayload, abiParsers, MAX_ABI_DEFS } = require('./ethereumAbi');
const {
  isValidAssetPath,
  signReqResolver,
  aes256_decrypt,
  aes256_encrypt,
  parseDER,
  checksum,
  ensureHexBuffer,
  getP256KeyPair,
  getP256KeyPairFromPub,
  parseLattice1Response,
  toPaddedDER,
} = require('./util');
const {
  getFwVersionConst,
  ADDR_STR_LEN,
  ENC_MSG_LEN,
  decResLengths,
  deviceCodes,
  encReqCodes,
  responseCodes,
  REQUEST_TYPE_BYTE,
  VERSION_BYTE,
  messageConstants,
  BASE_URL,
} = require('./constants');
const Buffer = require('buffer/').Buffer;
const EMPTY_WALLET_UID = Buffer.alloc(32);

class Client {
  constructor({ baseUrl, crypto, name, privKey, timeout, retryCount } = {}) {
    // Definitions
    // if (!baseUrl) throw new Error('baseUrl is required');
    if (name && name.length > 24) throw new Error('name must be less than 24 characters');
    if (!crypto) throw new Error('crypto provider is required');
    this.baseUrl = baseUrl || BASE_URL;
    this.crypto = crypto;
    this.name = name || 'Unknown';
    
    // Derive an ECDSA keypair using the p256 curve. The public key will
    // be used as an identifier
    this.privKey = privKey || this.crypto.randomBytes(32);
    this.key = getP256KeyPair(this.privKey);//.encode('hex');

    // Stateful params
    this.ephemeralPub = null;
    this.sharedSecret = null;
    this.timeout = timeout || 60000;
    this.deviceId = null;
    this.isPaired = false;
    this.retryCount = retryCount || 3;

    // Information about the current wallet. Should be null unless we know a wallet is present
    this.activeWallets = {
      internal: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: false,
      },
      external: {
        uid: EMPTY_WALLET_UID,           // 32 byte id
        name: null,                      // 20 char (max) string
        capabilities: null,              // 4 byte flag
        external: true,
      }
    }
  }
  
  //=======================================================================
  // LATTICE FUNCTIONS
  //=======================================================================

  // `Connect` will attempt to contact a device based on its deviceId.
  // The response should include an ephemeral public key, which is used to
  // pair with the device in a later request
  connect(deviceId, cb) {
    // User may "re-connect" if a device ID has previously been stored
    if (typeof deviceId === 'function') {
      if (!this.deviceId) 
        return cb('No device ID has been stored. Please connect with your device ID first.')
      cb = deviceId;
    } else {
      // If the user passes in a device ID, connect to that device and save
      // the new ID for future use.
      this.deviceId = deviceId;
    }
    const param = this._buildRequest(deviceCodes.CONNECT, this.pubKeyBytes());
    this._request(param, (err, res) => {
      if (err) return cb(err);
      this.isPaired = this._handleConnect(res);
      // Check for an active wallet. This will get bypassed if we are not paired.
      if (this.isPaired) {
        this._getActiveWallet((err) => {
          return cb(err, this.isPaired);
        }, true);
      } else {
        return cb(null);
      }
      
    });
  }

  pair(pairingSecret, cb) {
    // Build the secret hash from the salt
    const pubKey = this.pubKeyBytes();
    const nameBuf = Buffer.alloc(25);
    if (this.name.length > 24) {
      return cb('Name is too many characters. Please change it to <25 characters.');
    }
    nameBuf.write(this.name);
    // Make sure we add a null termination byte to the pairing secret
    const preImage = Buffer.concat([pubKey, nameBuf, Buffer.from(pairingSecret)]);
    const hash = this.crypto.createHash('sha256').update(preImage).digest();
    const sig = this.key.sign(hash); // returns an array, not a buffer
    const derSig = toPaddedDER(sig);
    const payload = Buffer.concat([nameBuf, derSig]);

    // Build the request
    const param = this._buildEncRequest(encReqCodes.FINALIZE_PAIRING, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      // Recover the ephemeral key
      const errStr = this._handlePair(res);
      if (errStr) return cb(errStr);
      // Try to get the active wallet once pairing is successful
      this._getActiveWallet((err) => {
        if (err) return cb(err);
        return cb(null, this.hasActiveWallet());
      }, true);
    })  
  }

  test(data, cb) {
    if (!data.payload)
      return cb('First argument must contain `testID` and `payload` fields.');
    const TEST_DATA_SZ = 500;
    const payload = Buffer.alloc(TEST_DATA_SZ + 6);
    payload.writeUInt32BE(data.testID, 0);
    payload.writeUInt16BE(data.payload.length, 4);
    data.payload.copy(payload, 6);
    const param = this._buildEncRequest(encReqCodes.TEST, payload);
    this._request(param, (err, res) => {
      if (err) return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.test);
      if (decrypted.err !== null ) 
        return cb(decrypted.err);
      return cb(null, decrypted.data.slice(65)); // remove ephem pub
    })
  }

  getAddresses(opts, cb) {
    const SKIP_CACHE_FLAG = 1;
    const MAX_ADDR = 10;
    const { startPath, n, skipCache=true } = opts;
    if (startPath === undefined || n === undefined || startPath.length !== 5) {
      return cb('Please provide `startPath` and `n` options');
    } else if (n > MAX_ADDR) {
      return cb(`You may only request ${MAX_ADDR} addresses at once.`);
    }

    if (skipCache === true && false === isValidAssetPath(startPath))
      return cb('Parent path is not supported');

    const payload = Buffer.alloc(1 + 32 + startPath.length * 4);
    let off = 0;

    // WalletUID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += 32;
    // Build the start path (5x u32 indices)
    for (let i = 0; i < startPath.length; i++) {
      payload.writeUInt32BE(startPath[i], off);
      off += 4;
    }
    // Specify the number of subsequent addresses to request.
    // We also allow the user to skip the cache and request any address related to the asset
    // in the wallet.
    let val;
    const fwConstants = getFwVersionConst(this.fwVersion);
    if (true === fwConstants.addrFlagsAllowed) {
      const flag = skipCache === true ? bitwise.nibble.read(SKIP_CACHE_FLAG) : bitwise.nibble.read(0);
      const count = bitwise.nibble.read(n);
      val = bitwise.byte.write(flag.concat(count));
    } else {
      val = n;
    }
    payload.writeUInt8(val, off); off++;
    const param = this._buildEncRequest(encReqCodes.GET_ADDRESSES, payload);
    return this._request(param, (err, res) => {
      if (err) return cb(err);
      const parsedRes = this._handleGetAddresses(res);
      if (parsedRes.err) return cb(parsedRes.err);
      return cb(null, parsedRes.data);
    })
  }

  sign(opts, cb) {
    const { currency, data } = opts;
    if (currency === undefined || data === undefined) {
      return cb('Please provide `currency` and `data` options');
    } else if (signReqResolver[currency] === undefined) {
      return cb('Unsupported currency');
    }

    // All transaction requests must be put into the same sized buffer.
    // This comes from sizeof(GpTransactionRequest_t), but note we remove
    // the 2-byte schemaId since it is not returned from our resolver.
    // Note that different firmware versions may have different data sizes.
    const fwConstants = getFwVersionConst(this.fwVersion);

    // Build the signing request payload to send to the device. If we catch
    // bad params, return an error instead
    data.ethMaxDataSz = fwConstants.ethMaxDataSz;
    data.ethMaxMsgSz = fwConstants.ethMaxMsgSz;
    const req = signReqResolver[currency](data);
    if (req.err !== undefined) return cb({ err: req.err });

    if (req.payload.length > fwConstants.reqMaxDataSz)
      return cb('Transaction is too large');

    // Build the payload
    const payload = Buffer.alloc(2 + fwConstants.reqMaxDataSz);
    let off = 0;
    // Copy request schema (e.g. ETH or BTC transfer)
    payload.writeUInt16BE(req.schema, off); off += 2;

    // Copy the wallet UID
    const wallet = this.getActiveWallet();
    if (wallet === null) return cb('No active wallet.');
    wallet.uid.copy(payload, off); off += wallet.uid.length;
    // Build data based on the type of request
    // Copy the payload of the request
    req.payload.copy(payload, off);
    // Construct the encrypted request and send it
    const param = this._buildEncRequest(encReqCodes.SIGN_TRANSACTION, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.sign(opts, cb);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else {
        // Correct wallet and no errors -- handle the response
        const parsedRes = this._handleSign(res, currency, req);
        return cb(parsedRes.err, parsedRes.data);
      }
    })
  }

  addAbiDefs(defs, cb, nextCode=null) {
    const defsToAdd = defs.slice(0, MAX_ABI_DEFS);
    defs = defs.slice(MAX_ABI_DEFS);
    let abiPayload;
    try {
      abiPayload = buildAddAbiPayload(defsToAdd);
    } catch (err) {
      return cb(err);
    }
    const payload = Buffer.alloc(abiPayload.length + 10);
    // Let the firmware know how many defs are remaining *after this one*.
    // If this is a positive number, firmware will send us a temporary code
    // to bypass user authorization if the user has configured easy ABI loading.
    payload.writeUInt16LE(defs.length);
    // If this is a follow-up request, we don't need to ask for user authorization
    // if we use the correct temporary u64
    if (nextCode !== null)
      nextCode.copy(payload, 2);
    abiPayload.copy(payload, 10);
    const param = this._buildEncRequest(encReqCodes.ADD_ABI_DEFS, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode && responseCode !== responseCodes.RESP_SUCCESS)
        return cb('Error making request.');
      else if (err)
        return cb(err);
      const decrypted = this._handleEncResponse(res, decResLengths.addAbiDefs);
      // Grab the 8 byte code to fast track our next request, if needed
      nextCode = decrypted.data.slice(65, 73); 
      // No defs left? Return success
      if (defs.length === 0)
        return cb(null);
      // Add the next set
      this.addAbiDefs(defs, cb, nextCode, defs);
    })
  }
  
  addPermissionV0(opts, cb) {
    const { currency, timeWindow, limit, decimals, asset } = opts;
    if (!currency || timeWindow === undefined || limit === undefined || decimals === undefined ||
        timeWindow === null || limit === null || decimals === null)
      return cb('currency, timeWindow, decimals, and limit are all required options.');
    else if (timeWindow === 0 || limit === 0)
      return cb('Time window and spending limit must be positive.');
    // Build the name of the permission
    let name = currency;
    if (asset)
      name += `_${asset}`;
    // Start building the payload
    const payload = Buffer.alloc(293);
    // Copy the name
    if (Buffer.from(name).length > 255)
      return cb('Asset name too long.');
    Buffer.from(name).copy(payload, 0);
    // Convert the limit to a 32 byte hex buffer and copy it in
    const limitBuf = ensureHexBuffer(limit)
    if (limitBuf.length > 32)
      return cb('Limit too large.');
    limitBuf.copy(payload, 256 + (32 - limitBuf.length));
    // Copy the time window (seconds)
    payload.writeUInt32BE(timeWindow, 288);
    payload.writeUInt8(decimals, 292);
    // Encrypt the request and send it to the Lattice.
    const param = this._buildEncRequest(encReqCodes.ADD_PERMISSION_V0, payload);
    return this._request(param, (err, res, responseCode) => {
      if (responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) {
        // If we catch a case where the wallet has changed, try getting the new active wallet
        // and recursively make the original request.
        this._getActiveWallet((err) => {
          if (err) return cb(err)
          else     return this.addPermissionV0(opts, cb);
        })
      } else if (err) {
        // If there was another error caught, return it
        if (err) return cb(err);
      } else {
        // Correct wallet and no errors -- handle the response
        const d = this._handleEncResponse(res, decResLengths.finalizePair);
        if (d.err)
          return cb(d.err);
        return cb(null);
      }
    })
  }

  //=======================================================================
  // INTERNAL FUNCTIONS
  // These handle the logic around building requests and consuming
  // responses. They take into account the Lattice's serialization scheme
  // among other protocols.
  //=======================================================================

  // Get the active wallet in the device. If we already have one recorded,
  // we don't need to do anything
  // returns cb(err) -- err is a string
  _getActiveWallet(cb, forceRefresh=false) {
    if (forceRefresh !== true && (this.hasActiveWallet() === true || this.isPaired !== true)) {
      // If the active wallet already exists, or if we are not paired, skip the request
      return cb(null);
    } else {
      // No active wallet? Get it from the device
      const payload = Buffer.alloc(0);
      const param = this._buildEncRequest(encReqCodes.GET_WALLETS, payload);
      return this._request(param, (err, res) => {
        if (err) {
          this._resetActiveWallets();
          return cb(err);
        }
        return cb(this._handleGetWallets(res));
      })
    }
  }

  // Get the shared secret, derived via ECDH from the local private key
  // and the ephemeral public key
  // @returns Buffer
  _getSharedSecret() {
    // Once every ~256 attempts, we will get a key that starts with a `00` byte, which
    // can lead to problems initializing AES if we don't force a 32 byte BE buffer.
    return Buffer.from(this.key.derive(this.ephemeralPub.getPublic()).toArray('be', 32));
  }

  // Get the ephemeral id, which is the first 4 bytes of the shared secret
  // generated from the local private key and the ephemeral public key from
  // the device.
  // @returns Buffer
  _getEphemId() {
    if (this.ephemeralPub === null) return null;
    // EphemId is the first 4 bytes of the hash of the shared secret
    const secret = this._getSharedSecret();
    const hash = this.crypto.createHash('sha256').update(secret).digest();
    return hash.slice(0, 4);
  }

  _buildEncRequest(enc_request_code, payload) {
    // Get the ephemeral id - all encrypted requests require there to be an
    // epehemeral public key in order to send
    const ephemId = parseInt(this._getEphemId().toString('hex'), 16)
    
    // Build the payload and checksum
    const payloadPreCs = Buffer.concat([Buffer.from([enc_request_code]), payload]);
    const cs = checksum(payloadPreCs);
    const payloadBuf = Buffer.alloc(payloadPreCs.length + 4);

    // Lattice validates checksums in little endian
    payloadPreCs.copy(payloadBuf, 0);
    payloadBuf.writeUInt32LE(cs, payloadPreCs.length);
    // Encrypt this payload
    const secret = this._getSharedSecret();
    const newEncPayload = aes256_encrypt(payloadBuf, secret);

    // Write to the overall payload. We must use the same length
    // for every encrypted request and must include a 32-bit ephemId
    // along with the encrypted data
    const newPayload = Buffer.alloc(ENC_MSG_LEN + 4);
    // First 4 bytes are the ephemeral id (in little endian)
    newPayload.writeUInt32LE(ephemId, 0);
    // Next N bytes
    newEncPayload.copy(newPayload, 4);
    return this._buildRequest(deviceCodes.ENCRYPTED_REQUEST, newPayload);
  
  }

  // Build a request to send to the device.
  // @param [request_code] {uint8}  - 8-bit unsigned integer representing the message request code
  // @param [id] {buffer} - 4 byte identifier (comes from HSM for subsequent encrypted reqs)
  // @param [payload] {buffer} - serialized payload
  // @returns {buffer}
  _buildRequest(request_code, payload) {
    // Length of payload;
    // we add 1 to the payload length to account for the request_code byte
    let L = payload && Buffer.isBuffer(payload) ? payload.length + 1 : 1;
    if (request_code === deviceCodes.ENCRYPTED_REQUEST) {
      L = 1 + payload.length;
    }
    let i = 0;
    const preReq = Buffer.alloc(L + 8);
    // Build the header
    i = preReq.writeUInt8(VERSION_BYTE, i);
    i = preReq.writeUInt8(REQUEST_TYPE_BYTE, i);
    const id = this.crypto.randomBytes(4);
    i = preReq.writeUInt32BE(parseInt(`0x${id.toString('hex')}`), i);
    i = preReq.writeUInt16BE(L, i);
    // Build the payload
    i = preReq.writeUInt8(request_code, i);
    if (L > 1) i = payload.copy(preReq, i);
    // Add the checksum
    const cs = checksum(preReq);
    const req = Buffer.alloc(preReq.length + 4); // 4-byte checksum
    i = preReq.copy(req);
    req.writeUInt32BE(cs, i);
    return req;
  }

  _request(data, cb, retryCount=this.retryCount) {
    if (!this.deviceId) return cb('Serial is not set. Please set it and try again.');
    const url = `${this.baseUrl}/${this.deviceId}`;
    superagent.post(url).timeout(this.timeout)
    .send({data})
    .then(res => {
      if (!res || !res.body) return cb(`Invalid response: ${res}`)
      else if (res.body.status !== 200) return cb(`Error code ${res.body.status}: ${res.body.message}`)
      const parsed = parseLattice1Response(res.body.message);
      // If the device is busy, retry if we can
      if (( parsed.responseCode === responseCodes.RESP_ERR_DEV_BUSY ||
            parsed.responseCode === responseCodes.RESP_ERR_GCE_TIMEOUT ) 
            && (retryCount > 0)) {
        return setTimeout(() => { this._request(data, cb, retryCount-1) }, 3000);
      }
      // If we caugh a `ErrWalletNotPresent` make sure we aren't caching an old ative walletUID
      if (parsed.responseCode === responseCodes.RESP_ERR_WALLET_NOT_PRESENT) 
        this._resetActiveWallets();
      // If there was an error in the response, return it
      if (parsed.err) 
        return cb(parsed.err);
      return cb(null, parsed.data, parsed.responseCode); 
    })
    .catch((err) => {
      const isTimeout = err.code === 'ECONNABORTED' && err.errno === 'ETIME';
      if (isTimeout)
        return cb('Timeout waiting for device. Please ensure it is connected to the internet and try again in a minute.')
      else
        return cb('Failed to make request to device.');
    });
  }

  // ----- Device response handlers -----

  // Connect will call `StartPairingMode` on the device, which gives the
  // user 60 seconds to finalize the pairing
  // This will return an ephemeral public key, which is needed for the next
  // request. If the device is already paired, this ephemPub is simply used
  // to encrypt the next request. If the device is not paired, it is needed
  // to pair the device within 60 seconds.
  // @returns true if we are paired to the device already
  _handleConnect(res) {
    let off = 0;
    const pairingStatus = res.readUInt8(off); off++;
    // If we are already paired, we get the next ephemeral key
    const pub = res.slice(off, off + 65).toString('hex'); off += 65;
    // Grab the firmware version (will be 0-length for older fw versions)
    // It is of format |fix|minor|major|reserved|
    this.fwVersion = res.slice(off, off + 4);
    // Set the public key
    this.ephemeralPub = getP256KeyPairFromPub(pub);
    // return the state of our pairing
    return (pairingStatus === messageConstants.PAIRED);
  }

  // All encrypted responses must be decrypted with the previous shared secret. Per specification,
  // decrypted responses will all contain a 65-byte public key as the prefix, which becomes the 
  // new ephemeralPub.
  _handleEncResponse(encRes, len) {
    // Decrypt response
    const secret = this._getSharedSecret();
    const encData = encRes.slice(0, ENC_MSG_LEN);
    const res = aes256_decrypt(encData, secret);
    // len does not include a 65-byte pubkey that prefies each encResponse
    len += 65;
    // Validate checksum. It will be the last 4 bytes of the decrypted payload.
    // The length of the decrypted payload will be fixed for each given message type.
    const toCheck = res.slice(0, len);
    const cs = parseInt(`0x${res.slice(len, len+4).toString('hex')}`);
    const csCheck = checksum(toCheck);
    if (cs !== csCheck) return { err: `Checksum mismatch in response from Lattice (calculated ${csCheck}, wanted ${cs})` };

    // First 65 bytes is the next ephemeral pubkey
    const pub = res.slice(0, 65).toString('hex');
    try {
      this.ephemeralPub = getP256KeyPairFromPub(pub);
      return { err: null, data: res };
    } catch (e) {
      return { err: `Error handling getAddresses response: ${e.toString()}` };
    }
  }

  // Pair will create a new pairing if the user successfully enters the secret
  // into the device in time. If successful (status=0), the device will return
  // a new ephemeral public key, which is used to derive a shared secret
  // for the next request
  // @returns error (or null)
  _handlePair(encRes) {
    const d = this._handleEncResponse(encRes, decResLengths.finalizePair);
    if (d.err) return d.err;
    // Remove the pairing salt - we're paired!
    this.pairingSalt = null;
    this.isPaired = true;
    return null;
  }

  // GetAddresses will return an array of address strings
  _handleGetAddresses(encRes) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.getAddresses);
    if (decrypted.err !== null ) return decrypted;

    const addrData = decrypted.data;
    let off = 65; // Skip 65 byte pubkey prefix
    // Look for addresses until we reach the end (a 4 byte checksum)
    const addrs = [];
    while (off + 4 < decResLengths.getAddresses) {
      const addrBytes = addrData.slice(off, off+ADDR_STR_LEN); off += ADDR_STR_LEN;
      // Return the UTF-8 representation
      const len = addrBytes.indexOf(0); // First 0 is the null terminator
      if (len > 0)
        addrs.push(addrBytes.slice(0, len).toString());
    }
    return { data: addrs, err: null };
  }

  _handleGetWallets(encRes) {
    const decrypted = this._handleEncResponse(encRes, decResLengths.getWallets);
    if (decrypted.err !== null) return decrypted;
    const res = decrypted.data;
    let walletUID;
    // Read the external wallet data first. If it is non-null, the external wallet will
    // be the active wallet of the device and we should save it.
    // If the external wallet is blank, it means there is no card present and we should 
    // save and use the interal wallet.
    // If both wallets are empty, it means the device still needs to be set up.
    const walletDescriptorLen = 71;
    // Skip 65byte pubkey prefix. WalletDescriptor contains 32byte id + 4byte flag + 35byte name
    let off = 65;
    // Internal first
    let hasActiveWallet = false;
    walletUID = res.slice(off, off+32);
    this.activeWallets.internal.uid = walletUID;
    this.activeWallets.internal.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.internal.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;

    // Offset the first item
    off += walletDescriptorLen;
    
    // External
    walletUID = res.slice(off, off+32);
    this.activeWallets.external.uid = walletUID;
    this.activeWallets.external.capabilities = res.readUInt32BE(off+32);
    this.activeWallets.external.name = res.slice(off+36, off+walletDescriptorLen);
    if (!walletUID.equals(EMPTY_WALLET_UID))
      hasActiveWallet = true;
    if (hasActiveWallet === true)
      return null;
    else
      return 'No active wallet.';
  }

  _handleSign(encRes, currencyType, req=null) {
    // Handle the encrypted response
    const decrypted = this._handleEncResponse(encRes, decResLengths.sign);
    if (decrypted.err !== null ) return { err: decrypted.err };
    const PUBKEY_PREFIX_LEN = 65;
    const PKH_PREFIX_LEN = 20;
    let off = PUBKEY_PREFIX_LEN; // Skip past pubkey prefix
    const res = decrypted.data;

    // Get the change data if we are making a BTC transaction
    let changeRecipient;
    if (currencyType === 'BTC') {
      const changeVersion = bitcoin.addressVersion[req.changeData.changeVersion];
      const changePubkeyhash = res.slice(off, off + PKH_PREFIX_LEN); off += PKH_PREFIX_LEN;
      changeRecipient = bitcoin.getBitcoinAddress(changePubkeyhash, changeVersion);
    }
    // Start building return data
    const returnData = { err: null, data: null };
    const DERLength = 74; // max size of a DER signature -- all Lattice sigs are this long
    const SIGS_OFFSET = 10 * DERLength; // 10 signature slots precede 10 pubkey slots
    const PUBKEYS_OFFSET = PUBKEY_PREFIX_LEN + PKH_PREFIX_LEN + SIGS_OFFSET;
    
    if (currencyType === 'BTC') {
      const compressedPubLength = 33;  // Size of compressed public key
      const pubkeys = [];
      const sigs = [];
      let n = 0;
      // Parse the signature for each output -- they are returned
      // in the serialized payload in form [pubkey, sig]
      // There is one signature per output
      while (off < res.length) {
        // Exit out if we have seen all the returned sigs and pubkeys
        if (res[off] !== 0x30) break;
        // Otherwise grab another set
        // Note that all DER sigs returned fill the maximum 74 byte buffer, but also
        // contain a length at off+1, which we use to parse the non-zero data.
        // First get the signature from its slot
        const sigStart = off;
        const sigEnd = off + 2 + res[off + 1];
        sigs.push(res.slice(sigStart, sigEnd));
        // Next, shift by the full set of signatures to hit the respective pubkey
        // NOTE: The data returned is: [<sig0>, <sig1>, ... <sig9>][<pubkey0>, <pubkey1>, ... <pubkey9>]
        const pubStart = (n * compressedPubLength) + PUBKEYS_OFFSET;
        const pubEnd = ((n+1) * compressedPubLength) + PUBKEYS_OFFSET;
        pubkeys.push(res.slice(pubStart, pubEnd));
        // Update offset to hit the next signature slot
        off += DERLength;
        n += 1;
      }
      // Build the transaction data to be serialized
      const preSerializedData = {
        inputs: [],
        outputs: [],
        isSegwitSpend: req.origData.isSegwit,
        network: req.origData.network,
        crypto: this.crypto,
      };

      // First output comes from request dta
      preSerializedData.outputs.push({
        value: req.origData.value,
        recipient: req.origData.recipient,
      });
      if (req.changeData.value > 0) {
        // Second output comes from change data
        preSerializedData.outputs.push({
          value: req.changeData.value,
          recipient: changeRecipient,
        });
      }
      
      // Add the inputs
      for (let i = 0; i < sigs.length; i++) {
        preSerializedData.inputs.push({
          hash: req.origData.prevOuts[i].txHash,
          index: req.origData.prevOuts[i].index,
          sig: sigs[i],
          pubkey: pubkeys[i],
        });
      }

      // Finally, serialize the transaction
      const serializedTx = bitcoin.serializeTx(preSerializedData);
      // Generate the transaction hash so the user can look this transaction up later
      let preImageTxHash = serializedTx;
      if (preSerializedData.isSegwitSpend === true) {
        // Segwit transactions need to be re-serialized using legacy serialization
        // before the transaction hash is calculated. This allows legacy clients
        // to validate the transactions.
        preSerializedData.isSegwitSpend = false;
        preImageTxHash = bitcoin.serializeTx(preSerializedData);
      }  
      let txHash = this.crypto.createHash('sha256').update(Buffer.from(preImageTxHash, 'hex')).digest();
      txHash = this.crypto.createHash('sha256').update(txHash).digest().reverse().toString('hex');
      
      // Add extra data for debugging/lookup purposes
      returnData.data = {
        tx: serializedTx,
        txHash,
        changeRecipient,
        sigs,
      }
    } else if (currencyType === 'ETH') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const ethAddr = res.slice(off, off + 20);
      // Determine the `v` param and add it to the sig before returning
      const rawTx = ethereum.buildEthRawTx(req, sig, ethAddr, req.useEIP155);
      returnData.data = {
        tx: `0x${rawTx}`,
        txHash: `0x${ethereum.hashTransaction(rawTx)}`,
        sig: {
          v: sig.v,
          r: sig.r.toString('hex'),
          s: sig.s.toString('hex'),
        },
        signer: ethAddr,
      };
    } else if (currencyType === 'ETH_MSG') {
      const sig = parseDER(res.slice(off, (off + 2 + res[off + 1]))); off += DERLength;
      const signer = res.slice(off, off + 20);
      const validatedSig = ethereum.validateEthereumMsgResponse({ signer, sig }, req);
      returnData.data = {
        sig: {
          v: validatedSig.v,
          r: validatedSig.r.toString('hex'),
          s: validatedSig.s.toString('hex'),
        },
        signer,
      }
    }

    return returnData;
  }

  _resetActiveWallets() {
    this.activeWallets.internal.uid = EMPTY_WALLET_UID;
    this.activeWallets.internal.name = null;
    this.activeWallets.internal.capabilities = null;
    this.activeWallets.external.uid = EMPTY_WALLET_UID;
    this.activeWallets.external.name = null;
    this.activeWallets.external.capabilities = null;
    return;
  }

  getActiveWallet() {
    if (!EMPTY_WALLET_UID.equals(this.activeWallets.external.uid)) {
      return this.activeWallets.external;
    } else if (!EMPTY_WALLET_UID.equals(this.activeWallets.internal.uid)) {
      return this.activeWallets.internal;
    } else {
      return null;
    }
  }

  hasActiveWallet() {
    return this.getActiveWallet() !== null;
  }
  
  // Get 64 bytes representing the public key
  // This is the uncompressed key without the leading 04 byte
  pubKeyBytes(LE=false) {
    const k = this.key.getPublic();
    const p = k.encode('hex');
    const pb = Buffer.from(p, 'hex');
    if (LE === true) {
      // Need to flip X and Y components to little endian
      const x = pb.slice(1, 33).reverse();
      const y = pb.slice(33, 65).reverse();
      return Buffer.concat([pb[0], x, y]);
    } else {
      return pb;
    }
  }

  // TODO: Find a better way to export this.
  parseAbi(source, data) {
    switch (source) {
      case 'etherscan':
        return abiParsers[source](data);
      default:
        return { err: `No ${source} parser available.` };

    }
  }
}

module.exports = Client;

},{"bitwise":"../node_modules/bitwise/esm/index.js","superagent":"../node_modules/superagent/lib/client.js","./bitcoin":"../node_modules/gridplus-sdk/src/bitcoin.js","./ethereum":"../node_modules/gridplus-sdk/src/ethereum.js","./ethereumAbi":"../node_modules/gridplus-sdk/src/ethereumAbi.js","./util":"../node_modules/gridplus-sdk/src/util.js","./constants":"../node_modules/gridplus-sdk/src/constants.js","buffer/":"../node_modules/buffer/index.js"}],"../node_modules/gridplus-sdk/index.js":[function(require,module,exports) {
const Client = require('./src/client');

module.exports = {
  Client,
};

},{"./src/client":"../node_modules/gridplus-sdk/src/client.js"}],"../node_modules/eth-lattice-keyring/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const crypto = require('crypto');
const EventEmitter = require('events').EventEmitter;
const SDK = require('gridplus-sdk');
const keyringType = 'Lattice Hardware';
const HARDENED_OFFSET = 0x80000000;
const PER_PAGE = 5;
const CLOSE_CODE = -1000;

class LatticeKeyring extends EventEmitter {
  constructor (opts={}) {
    super()
    this.type = keyringType
    this._resetDefaults();
    this.deserialize(opts);
  }

  //-------------------------------------------------------------------
  // Keyring API (per `https://github.com/MetaMask/eth-simple-keyring`)
  //-------------------------------------------------------------------
  deserialize (opts = {}) {
    if (opts.creds)
      this.creds = opts.creds;
    if (opts.accounts)
      this.accounts = opts.accounts;
    if (opts.walletUID)
      this.walletUID = opts.walletUID;
    if (opts.name)
      this.name = opts.name;
    if (opts.network)
      this.network = opts.network;
    return Promise.resolve()
  }

  serialize() {
    return Promise.resolve({
      creds: this.creds,
      accounts: this.accounts,
      walletUID: this.walletUID,
      name: this.name,
      network: this.network,
    })
  }

  isUnlocked () {
    return this._hasCreds() && this._hasSession()
  }

  setHdPath() {
    console.warn("setHdPath not implemented.")
    return;
  }

  // Initialize a session with the Lattice1 device using the GridPlus SDK
  unlock(updateData=true) {
    return new Promise((resolve, reject) => {
      this._getCreds()
      .then((creds) => {
        if (creds) {
          this.creds.deviceID = creds.deviceID;
          this.creds.password = creds.password;
        }
        return this._initSession();
      })
      .then(() => {
        return this._connect(updateData);
      })
      .then(() => {
        return resolve('Unlocked');
      })
      .catch((err) => {
        return reject(new Error(err));
      })
    })
  }

  // Add addresses to the local store and return the full result
  addAccounts(n=1) {
    return new Promise((resolve, reject) => {
      if (n === CLOSE_CODE) {
        // Special case: use a code to forget the device. 
        // (This function is overloaded due to constraints upstream)
        this.forgetDevice();
        return resolve([]);
      } else if (n <= 0) {
        // Avoid non-positive numbers.
        return reject('Number of accounts to add must be a positive number.');
      } else {
        // Normal behavior: establish the connection and fetch addresses.
        this.unlock()
        .then(() => {
          return this._fetchAddresses(n, this.unlockedAccount)
        })
        .then((addrs) => {
          // Splice the new account(s) into `this.accounts`
          this.accounts.splice(this.unlockedAccount, n);
          this.accounts.splice(this.unlockedAccount, 0, ...addrs);
          return resolve(this.accounts);
        })
        .catch((err) => {
          return reject(new Error(err));
        })
      }
    })
  }

  // Return the local store of addresses
  getAccounts() {
    return Promise.resolve(this.accounts ? this.accounts.slice() : [].slice());
  }

  signTransaction (address, tx) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        // Build the Lattice request data and make request
        const txData = {
          chainId: tx.getChainId() || 1,
          nonce: Number(`0x${tx.nonce.toString('hex')}`) || 0,
          gasPrice: Number(`0x${tx.gasPrice.toString('hex')}`),
          gasLimit: Number(`0x${tx.gasLimit.toString('hex')}`),
          to: `0x${tx.to.toString('hex')}`,
          value: Number(`0x${tx.value.toString('hex')}`),
          data: tx.data.length === 0 ? null : `0x${tx.data.toString('hex')}`,
          signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
        }
        return this._signTxData(txData)
      })
      .then((signedTx) => {
        // Add the sig params. `signedTx = { sig: { v, r, s }, tx, txHash}`
        if (!signedTx.sig || !signedTx.sig.v || !signedTx.sig.r || !signedTx.sig.s)
          return reject(Error('No signature returned'));
        tx.v = signedTx.sig.v;
        tx.r = Buffer.from(signedTx.sig.r, 'hex');
        tx.s = Buffer.from(signedTx.sig.s, 'hex');
        return resolve(tx);
      })
      .catch((err) => {
        return reject(new Error(err));
      })
    })
  }

  signPersonalMessage(address, msg) {
    return this.signMessage(address, { payload: msg, protocol: 'signPersonal' });
  }

  signMessage(address, msg) {
    return new Promise((resolve, reject) => {
      this._unlockAndFindAccount(address)
      .then((addrIdx) => {
        const { payload, protocol } = msg;
        if (!payload || !protocol)
          return reject('`payload` and `protocol` fields must be included in the request');
        const req = {
          currency: 'ETH_MSG',
          data: {
            protocol,
            payload,
            signerPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, addrIdx],
          }
        }
        if (!this._hasSession())
          return reject('No SDK session started. Cannot sign transaction.')
        this.sdkSession.sign(req, (err, res) => {
          if (err)
            return reject(new Error(err));
          if (!res.sig)
            return reject('No signature returned');
          let v = (res.sig.v - 27).toString(16);
          if (v.length < 2)
            v = `0${v}`;
          return resolve(`0x${res.sig.r}${res.sig.s}${v}`);
        })
      })
    })
  }

  exportAccount(address) {
    return Promise.reject(Error('exportAccount not supported by this device'))
  }

  removeAccount(address) {
    // We only allow one account at a time, so removing any account
    // should result in a state reset. The user will need to reconnect
    // to the Lattice
    this.forgetDevice();
  }

  getFirstPage() {
    this.page = 0;
    return this._getPage(1);
  }

  getNextPage () {
    return this.getFirstPage();
  }

  getPreviousPage () {
    return this.getFirstPage();
  }

  setAccountToUnlock (index) {
    this.unlockedAccount = parseInt(index, 10)
  }

  forgetDevice () {
    this._resetDefaults();
  }

  //-------------------------------------------------------------------
  // Internal methods and interface to SDK
  //-------------------------------------------------------------------
  _unlockAndFindAccount(address) {
    return new Promise((resolve, reject) => {
      // NOTE: We are passing `false` here because we do NOT want
      // state data to be updated as a result of a transaction request.
      // It is possible the user inserted or removed a SafeCard and
      // will not be able to sign this transaction. If that is the
      // case, we just want to return an error message
      this.unlock(false)
      .then(() => {
        return this.getAccounts()
      })
      .then((addrs) => {
        // Find the signer in our current set of accounts
        // If we can't find it, return an error
        let addrIdx = null;
        addrs.forEach((addr, i) => {
          if (address.toLowerCase() === addr.toLowerCase())
            addrIdx = i;
        })
        if (addrIdx === null)
          return reject('Signer not present');
        return resolve(addrIdx);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }


  _resetDefaults() {
    this.accounts = [];
    this.isLocked = true;
    this.creds = {
      deviceID: null,
      password: null,
    };
    this.walletUID = null;
    this.sdkSession = null;
    this.page = 0;
    this.unlockedAccount = 0;
    this.network = null;
  }

  _getCreds() {
    return new Promise((resolve, reject) => {
      // We only need to setup if we don't have a deviceID
      if (this._hasCreds())
        return resolve();

      // If we are not aware of what Lattice we should be talking to,
      // we need to open a window that lets the user go through the
      // pairing or connection process.
      const name = this.name ? this.name : 'Unknown'
      let base = 'https://wallet.gridplus.io';
      switch (this.network) {
        case 'rinkeby':
          base = 'https://gridplus-web-wallet-dev.herokuapp.com';
          break;
        default:
          break;
      }
      let url = `${base}?keyring=${name}`;
      if (this.network)
        url += `&network=${this.network}`
      const popup = window.open(url);
      popup.postMessage('GET_LATTICE_CREDS', base);

      // PostMessage handler
      function receiveMessage(event) {
        // Ensure origin
        if (event.origin !== base)
          return;
        // Parse response data
        try {
          const data = JSON.parse(event.data);
          if (!data.deviceID || !data.password)
            return reject(Error('Invalid credentials returned from Lattice.'));
          return resolve(data);
        } catch (err) {
          return reject(err);
        }
      }
      window.addEventListener("message", receiveMessage, false);
    })
  }

  // [re]connect to the Lattice. This should be done frequently to ensure
  // the expected wallet UID is still the one active in the Lattice.
  // This will handle SafeCard insertion/removal events.
  // updateData - true if you want to overwrite walletUID and accounts in
  //              the event that we find we are not synced.
  //              If left false and we notice a new walletUID, we will
  //              return an error.
  _connect(updateData) {
    return new Promise((resolve, reject) => {
      this.sdkSession.connect(this.creds.deviceID, (err) => {
        if (err)
          return reject(err);
        // Save the current wallet UID
        const activeWallet = this.sdkSession.getActiveWallet();
        if (!activeWallet || !activeWallet.uid)
          return reject("No active wallet");
        const newUID = activeWallet.uid.toString('hex');
        // If we fetched a walletUID that does not match our current one,
        // reset accounts and update the known UID
        if (newUID != this.walletUID) {
          // If we don't want to update data, return an error
          if (updateData === false)
            return reject('Wallet has changed! Please reconnect.')
          
          // By default we should clear out accounts and update with
          // the new walletUID. We should NOT fill in the accounts yet,
          // as we reserve that functionality to `addAccounts`
          this.accounts = [];
          this.walletUID = newUID;
        }
        return resolve();
      });
    })
  }

  _initSession() {
    return new Promise((resolve, reject) => {
      if (this._hasSession())
        return resolve();
      try {
        let url = 'https://signing.gridpl.us';
        if (this.network && this.network !== 'mainnet')
          url = 'https://signing.staging-gridpl.us'
        const setupData = {
          name: this.name,
          baseUrl: url,
          crypto,
          timeout: 120000,
          privKey: this._genSessionKey(),
          network: this.network
        }
        this.sdkSession = new SDK.Client(setupData);
        return resolve();
      } catch (err) {
        return reject(err);
      }
    })
  }

  _fetchAddresses(n=1, i=0) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot fetch addresses.')

      // The Lattice does not allow for us to skip indices.
      if (i > this.accounts.length)
        return reject(`Requested address is out of bounds. You may only request index <${this.accounts.length}`)

      // If we have already cached the address(es), we don't need to do it again
      if (this.accounts.length > i)
        return resolve(this.accounts.slice(i, n));
      
      // Make the request to get the requested address
      const addrData = { 
        currency: 'ETH', 
        startPath: [HARDENED_OFFSET+44, HARDENED_OFFSET+60, HARDENED_OFFSET, 0, i], 
        n, // Only request one at a time. This module only supports ETH, so no gap limits
      }
      this.sdkSession.getAddresses(addrData, (err, addrs) => {
        if (err)
          return reject(Error(`Error getting addresses: ${err}`));
        // Sanity check -- if this returned 0 addresses, handle the error
        if (addrs.length < 1)
          return reject('No addresses returned');
        // Return the addresses we fetched *without* updating state
        return resolve(addrs);
      })
    })
  }

  _signTxData(txData) {
    return new Promise((resolve, reject) => {
      if (!this._hasSession())
        return reject('No SDK session started. Cannot sign transaction.')
      this.sdkSession.sign({ currency: 'ETH', data: txData }, (err, res) => {
        if (err)
          return reject(err);
        if (!res.tx)
          return reject('No transaction payload returned.');
        return resolve(res)
      })
    })
  }

  _getPage(increment=1) {
    return new Promise((resolve, reject) => {
      this.page += increment;
      if (this.page <= 0)
        this.page = 1;
      const start = PER_PAGE * (this.page - 1);
      const to = PER_PAGE * this.page;

      this.unlock()
      .then(() => {
        // V1: We will only support export of one (the first) address
        return this._fetchAddresses(1, 0);
        //-----------
      })
      .then((addrs) => {
        // Build some account objects from the addresses
        const localAccounts = [];
        addrs.forEach((addr, i) => {
          localAccounts.push({
            address: addr,
            balance: null,
            index: start + i,
          })
        })
        return resolve(localAccounts);
      })
      .catch((err) => {
        return reject(err);
      })
    })
  }

  _hasCreds() {
    return this.creds.deviceID !== null && this.creds.password !== null && this.name;
  }

  _hasSession() {
    return this.sdkSession && this.walletUID;
  }

  _genSessionKey() {
    if (!this._hasCreds())
      throw new Error('No credentials -- cannot create session key!');
    const buf = Buffer.concat([
      Buffer.from(this.creds.password), 
      Buffer.from(this.creds.deviceID), 
      Buffer.from(this.name)
    ])
    return crypto.createHash('sha256').update(buf).digest();
  }

}

LatticeKeyring.type = keyringType
module.exports = LatticeKeyring;
},{"crypto":"../node_modules/crypto-browserify/index.js","events":"../node_modules/events/events.js","gridplus-sdk":"../node_modules/gridplus-sdk/index.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63944" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/eth-lattice-keyring.d0435d99.js.map