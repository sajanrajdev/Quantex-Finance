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
})({"../node_modules/hdkey/node_modules/secp256k1/lib/index.js":[function(require,module,exports) {
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
},{}],"../node_modules/hdkey/node_modules/secp256k1/lib/elliptic.js":[function(require,module,exports) {
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
},{"elliptic":"../node_modules/elliptic/lib/elliptic.js"}],"../node_modules/hdkey/node_modules/secp256k1/elliptic.js":[function(require,module,exports) {
module.exports = require('./lib')(require('./lib/elliptic'));
},{"./lib":"../node_modules/hdkey/node_modules/secp256k1/lib/index.js","./lib/elliptic":"../node_modules/hdkey/node_modules/secp256k1/lib/elliptic.js"}],"../node_modules/hdkey/lib/hdkey.js":[function(require,module,exports) {

var assert = require('assert')
var Buffer = require('safe-buffer').Buffer
var crypto = require('crypto')
var bs58check = require('bs58check')
var secp256k1 = require('secp256k1')

var MASTER_SECRET = Buffer.from('Bitcoin seed', 'utf8')
var HARDENED_OFFSET = 0x80000000
var LEN = 78

// Bitcoin hardcoded by default, can use package `coininfo` for others
var BITCOIN_VERSIONS = {private: 0x0488ADE4, public: 0x0488B21E}

function HDKey (versions) {
  this.versions = versions || BITCOIN_VERSIONS
  this.depth = 0
  this.index = 0
  this._privateKey = null
  this._publicKey = null
  this.chainCode = null
  this._fingerprint = 0
  this.parentFingerprint = 0
}

Object.defineProperty(HDKey.prototype, 'fingerprint', { get: function () { return this._fingerprint } })
Object.defineProperty(HDKey.prototype, 'identifier', { get: function () { return this._identifier } })
Object.defineProperty(HDKey.prototype, 'pubKeyHash', { get: function () { return this.identifier } })

Object.defineProperty(HDKey.prototype, 'privateKey', {
  get: function () {
    return this._privateKey
  },
  set: function (value) {
    assert.equal(value.length, 32, 'Private key must be 32 bytes.')
    assert(secp256k1.privateKeyVerify(value) === true, 'Invalid private key')

    this._privateKey = value
    this._publicKey = Buffer.from(secp256k1.publicKeyCreate(value, true))
    this._identifier = hash160(this.publicKey)
    this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
  }
})

Object.defineProperty(HDKey.prototype, 'publicKey', {
  get: function () {
    return this._publicKey
  },
  set: function (value) {
    assert(value.length === 33 || value.length === 65, 'Public key must be 33 or 65 bytes.')
    assert(secp256k1.publicKeyVerify(value) === true, 'Invalid public key')

    this._publicKey = Buffer.from(secp256k1.publicKeyConvert(value, true)) // force compressed point
    this._identifier = hash160(this.publicKey)
    this._fingerprint = this._identifier.slice(0, 4).readUInt32BE(0)
    this._privateKey = null
  }
})

Object.defineProperty(HDKey.prototype, 'privateExtendedKey', {
  get: function () {
    if (this._privateKey) return bs58check.encode(serialize(this, this.versions.private, Buffer.concat([Buffer.alloc(1, 0), this.privateKey])))
    else return null
  }
})

Object.defineProperty(HDKey.prototype, 'publicExtendedKey', {
  get: function () {
    return bs58check.encode(serialize(this, this.versions.public, this.publicKey))
  }
})

HDKey.prototype.derive = function (path) {
  if (path === 'm' || path === 'M' || path === "m'" || path === "M'") {
    return this
  }

  var entries = path.split('/')
  var hdkey = this
  entries.forEach(function (c, i) {
    if (i === 0) {
      assert(/^[mM]{1}/.test(c), 'Path must start with "m" or "M"')
      return
    }

    var hardened = (c.length > 1) && (c[c.length - 1] === "'")
    var childIndex = parseInt(c, 10) // & (HARDENED_OFFSET - 1)
    assert(childIndex < HARDENED_OFFSET, 'Invalid index')
    if (hardened) childIndex += HARDENED_OFFSET

    hdkey = hdkey.deriveChild(childIndex)
  })

  return hdkey
}

HDKey.prototype.deriveChild = function (index) {
  var isHardened = index >= HARDENED_OFFSET
  var indexBuffer = Buffer.allocUnsafe(4)
  indexBuffer.writeUInt32BE(index, 0)

  var data

  if (isHardened) { // Hardened child
    assert(this.privateKey, 'Could not derive hardened child key')

    var pk = this.privateKey
    var zb = Buffer.alloc(1, 0)
    pk = Buffer.concat([zb, pk])

    // data = 0x00 || ser256(kpar) || ser32(index)
    data = Buffer.concat([pk, indexBuffer])
  } else { // Normal child
    // data = serP(point(kpar)) || ser32(index)
    //      = serP(Kpar) || ser32(index)
    data = Buffer.concat([this.publicKey, indexBuffer])
  }

  var I = crypto.createHmac('sha512', this.chainCode).update(data).digest()
  var IL = I.slice(0, 32)
  var IR = I.slice(32)

  var hd = new HDKey(this.versions)

  // Private parent key -> private child key
  if (this.privateKey) {
    // ki = parse256(IL) + kpar (mod n)
    try {
      hd.privateKey = Buffer.from(secp256k1.privateKeyTweakAdd(Buffer.from(this.privateKey), IL))
      // throw if IL >= n || (privateKey + IL) === 0
    } catch (err) {
      // In case parse256(IL) >= n or ki == 0, one should proceed with the next value for i
      return this.deriveChild(index + 1)
    }
  // Public parent key -> public child key
  } else {
    // Ki = point(parse256(IL)) + Kpar
    //    = G*IL + Kpar
    try {
      hd.publicKey = Buffer.from(secp256k1.publicKeyTweakAdd(Buffer.from(this.publicKey), IL, true))
      // throw if IL >= n || (g**IL + publicKey) is infinity
    } catch (err) {
      // In case parse256(IL) >= n or Ki is the point at infinity, one should proceed with the next value for i
      return this.deriveChild(index + 1)
    }
  }

  hd.chainCode = IR
  hd.depth = this.depth + 1
  hd.parentFingerprint = this.fingerprint// .readUInt32BE(0)
  hd.index = index

  return hd
}

HDKey.prototype.sign = function (hash) {
  return Buffer.from(secp256k1.ecdsaSign(hash, this.privateKey).signature)
}

HDKey.prototype.verify = function (hash, signature) {
  return secp256k1.ecdsaVerify(
    Uint8Array.from(signature),
    Uint8Array.from(hash),
    Uint8Array.from(this.publicKey)
  )
}

HDKey.prototype.wipePrivateData = function () {
  if (this._privateKey) crypto.randomBytes(this._privateKey.length).copy(this._privateKey)
  this._privateKey = null
  return this
}

HDKey.prototype.toJSON = function () {
  return {
    xpriv: this.privateExtendedKey,
    xpub: this.publicExtendedKey
  }
}

HDKey.fromMasterSeed = function (seedBuffer, versions) {
  var I = crypto.createHmac('sha512', MASTER_SECRET).update(seedBuffer).digest()
  var IL = I.slice(0, 32)
  var IR = I.slice(32)

  var hdkey = new HDKey(versions)
  hdkey.chainCode = IR
  hdkey.privateKey = IL

  return hdkey
}

HDKey.fromExtendedKey = function (base58key, versions) {
  // => version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
  versions = versions || BITCOIN_VERSIONS
  var hdkey = new HDKey(versions)

  var keyBuffer = bs58check.decode(base58key)

  var version = keyBuffer.readUInt32BE(0)
  assert(version === versions.private || version === versions.public, 'Version mismatch: does not match private or public')

  hdkey.depth = keyBuffer.readUInt8(4)
  hdkey.parentFingerprint = keyBuffer.readUInt32BE(5)
  hdkey.index = keyBuffer.readUInt32BE(9)
  hdkey.chainCode = keyBuffer.slice(13, 45)

  var key = keyBuffer.slice(45)
  if (key.readUInt8(0) === 0) { // private
    assert(version === versions.private, 'Version mismatch: version does not match private')
    hdkey.privateKey = key.slice(1) // cut off first 0x0 byte
  } else {
    assert(version === versions.public, 'Version mismatch: version does not match public')
    hdkey.publicKey = key
  }

  return hdkey
}

HDKey.fromJSON = function (obj) {
  return HDKey.fromExtendedKey(obj.xpriv)
}

function serialize (hdkey, version, key) {
  // => version(4) || depth(1) || fingerprint(4) || index(4) || chain(32) || key(33)
  var buffer = Buffer.allocUnsafe(LEN)

  buffer.writeUInt32BE(version, 0)
  buffer.writeUInt8(hdkey.depth, 4)

  var fingerprint = hdkey.depth ? hdkey.parentFingerprint : 0x00000000
  buffer.writeUInt32BE(fingerprint, 5)
  buffer.writeUInt32BE(hdkey.index, 9)

  hdkey.chainCode.copy(buffer, 13)
  key.copy(buffer, 45)

  return buffer
}

function hash160 (buf) {
  var sha = crypto.createHash('sha256').update(buf).digest()
  return crypto.createHash('ripemd160').update(sha).digest()
}

HDKey.HARDENED_OFFSET = HARDENED_OFFSET
module.exports = HDKey

},{"assert":"../node_modules/assert/assert.js","safe-buffer":"../node_modules/safe-buffer/index.js","crypto":"../node_modules/crypto-browserify/index.js","bs58check":"../node_modules/bs58check/index.js","secp256k1":"../node_modules/hdkey/node_modules/secp256k1/elliptic.js"}],"../node_modules/bnc-onboard/dist/esm/hd-wallet-642b97e3.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateAddresses = generateAddresses;
exports.isValidPath = isValidPath;

var _hdkey = _interopRequireDefault(require("hdkey"));

var ethUtil = _interopRequireWildcard(require("ethereumjs-util"));

var _buffer = require("buffer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var publicToAddress = ethUtil.publicToAddress,
    toChecksumAddress = ethUtil.toChecksumAddress;
var numberToGet = 5;

function generateAddresses(account, offset) {
  var publicKey = account.publicKey,
      chainCode = account.chainCode,
      path = account.path;
  var hdk = new _hdkey.default();
  hdk.publicKey = new _buffer.Buffer(publicKey, 'hex');
  hdk.chainCode = new _buffer.Buffer(chainCode, 'hex');
  var addresses = [];

  for (var i = offset; i < numberToGet + offset; i++) {
    var dkey = hdk.deriveChild(i);
    var address = publicToAddress(dkey.publicKey, true).toString('hex');
    addresses.push({
      dPath: "".concat(path, "/").concat(i),
      address: toChecksumAddress("0x".concat(address))
    });
  }

  return addresses;
}

function isValidPath(path) {
  var parts = path.split('/');

  if (parts[0] !== 'm') {
    return false;
  }

  if (parts[1] !== "44'") {
    return false;
  }

  if (parts[2] !== "60'" && parts[2] !== "1'") {
    return false;
  }

  if (parts[3] === undefined) {
    return true;
  }

  var accountFieldDigit = Number(parts[3][0]);

  if (isNaN(accountFieldDigit) || accountFieldDigit < 0 || parts[3][1] !== "'") {
    return false;
  }

  if (parts[4] === undefined) {
    return true;
  }

  var changeFieldDigit = Number(parts[4][0]);

  if (isNaN(changeFieldDigit) || changeFieldDigit < 0) {
    return false;
  }

  if (parts[5] === undefined) {
    return true;
  }

  var addressFieldDigit = Number(parts[5][0]);

  if (isNaN(addressFieldDigit) || addressFieldDigit < 0) {
    return false;
  }

  return true;
}
},{"hdkey":"../node_modules/hdkey/lib/hdkey.js","ethereumjs-util":"../node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js","buffer":"../node_modules/node-libs-browser/node_modules/buffer/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65041" + '/');

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
//# sourceMappingURL=/hd-wallet-642b97e3.84edef61.js.map