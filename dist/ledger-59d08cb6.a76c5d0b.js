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
})({"../node_modules/bnc-onboard/dist/esm/ledger-59d08cb6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var ledgerIcon = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 450\" width=\"37\" height=\"37\"><style>.st0{fill:currentColor}</style><g id=\"squares_1_\"><path class=\"st0\" d=\"M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z\"/><path class=\"st0\" d=\"M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z\"/></g></svg>\n";
var LEDGER_LIVE_PATH = "m/44'/60'";
var ACCOUNTS_TO_GET = 5;

function ledger(options) {
  var rpcUrl = options.rpcUrl,
      LedgerTransport = options.LedgerTransport,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Ledger',
    svg: svg || ledgerIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(helpers) {
        var BigNumber, networkName, resetWalletState, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                BigNumber = helpers.BigNumber, networkName = helpers.networkName, resetWalletState = helpers.resetWalletState;
                _context4.next = 3;
                return ledgerProvider({
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  LedgerTransport: LedgerTransport,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Ledger',
                    connect: provider.enable,
                    disconnect: provider.disconnect,
                    address: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  return _context.abrupt("return", provider.getPrimaryAddress());

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        function get() {
                          return _get.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    network: {
                      get: function () {
                        var _get2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  return _context2.abrupt("return", networkId);

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function get() {
                          return _get2.apply(this, arguments);
                        }

                        return get;
                      }()
                    },
                    balance: {
                      get: function () {
                        var _get3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  address = provider.getPrimaryAddress();
                                  return _context3.abrupt("return", address && provider.getBalance(address));

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function get() {
                          return _get3.apply(this, arguments);
                        }

                        return get;
                      }()
                    }
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'hardware',
    desktop: true,
    mobile: true,
    osExclusions: ['iOS'],
    preferred: preferred
  };
}

function ledgerProvider(_x2) {
  return _ledgerProvider.apply(this, arguments);
}

function _ledgerProvider() {
  _ledgerProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(options) {
    var _yield$import, createProvider, _yield$import2, generateAddresses, isValidPath, _yield$import3, TransportU2F, _yield$import4, Eth, EthereumTx, ethUtil, buffer, networkId, rpcUrl, LedgerTransport, BigNumber, networkName, resetWalletState, dPath, addressToPath, enabled, customPath, account, provider, transport, eth, disconnect, setPath, _setPath, isCustomPath, createTransport, _createTransport, enable, addresses, setPrimaryAccount, getAddress, _getAddress, getPublicKey, _getPublicKey, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(message) {
                var path;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context13.next = 3;
                          break;
                        }

                        _context13.next = 3;
                        return enable();

                      case 3:
                        path = _toConsumableArray(addressToPath.values())[0];
                        return _context13.abrupt("return", eth.signPersonalMessage(path, ethUtil.stripHexPrefix(message.data)).then(function (result) {
                          var v = (result['v'] - 27).toString(16);

                          if (v.length < 2) {
                            v = '0' + v;
                          }

                          return "0x".concat(result['r']).concat(result['s']).concat(v);
                        }));

                      case 5:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x9) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(transactionData) {
                var path, transaction, ledgerResult;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        path = _toConsumableArray(addressToPath.values())[0];
                        _context12.prev = 1;
                        transaction = new EthereumTx.Transaction(transactionData, {
                          chain: networkName(networkId)
                        });
                        transaction.raw[6] = buffer.Buffer.from([networkId]); // v

                        transaction.raw[7] = buffer.Buffer.from([]); // r

                        transaction.raw[8] = buffer.Buffer.from([]); // s

                        _context12.next = 8;
                        return eth.signTransaction(path, transaction.serialize().toString('hex'));

                      case 8:
                        ledgerResult = _context12.sent;
                        transaction.v = buffer.Buffer.from(ledgerResult.v, 'hex');
                        transaction.r = buffer.Buffer.from(ledgerResult.r, 'hex');
                        transaction.s = buffer.Buffer.from(ledgerResult.s, 'hex');
                        return _context12.abrupt("return", "0x".concat(transaction.serialize().toString('hex')));

                      case 15:
                        _context12.prev = 15;
                        _context12.t0 = _context12["catch"](1);
                        throw _context12.t0;

                      case 18:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, null, [[1, 15]]);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x8) {
              return _signTransaction2.apply(this, arguments);
            };

            getBalance = function _getBalance(address) {
              return new Promise(function (resolve, reject) {
                provider.sendAsync({
                  jsonrpc: '2.0',
                  method: 'eth_getBalance',
                  params: [address, 'latest'],
                  id: 42
                }, function (e, res) {
                  e && reject(e);
                  var result = res && res.result;

                  if (result != null) {
                    resolve(new BigNumber(result).toString(10));
                  } else {
                    resolve(null);
                  }
                });
              });
            };

            getBalances = function _getBalances(addresses) {
              return Promise.all(addresses.map(function (address) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
                    var balance;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return getBalance(address);

                          case 2:
                            balance = _context5.sent;
                            resolve({
                              address: address,
                              balance: balance
                            });

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x7) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              }));
            };

            _getAccounts2 = function _getAccounts4() {
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(getMore) {
                var currentAccounts, paths, i, _i2, _paths, path, res, addressInfo;

                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (enabled) {
                          _context11.next = 2;
                          break;
                        }

                        return _context11.abrupt("return", []);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context11.next = 4;
                          break;
                        }

                        return _context11.abrupt("return", addresses());

                      case 4:
                        if (eth) {
                          _context11.next = 7;
                          break;
                        }

                        _context11.next = 7;
                        return createTransport();

                      case 7:
                        if (dPath === '') {
                          dPath = LEDGER_LIVE_PATH;
                        }

                        if (!(dPath === LEDGER_LIVE_PATH)) {
                          _context11.next = 24;
                          break;
                        }

                        currentAccounts = addressToPath.size;
                        paths = [];

                        for (i = currentAccounts; i < ACCOUNTS_TO_GET + currentAccounts; i++) {
                          paths.push("".concat(LEDGER_LIVE_PATH, "/").concat(i, "'/0/0"));
                        }

                        _i2 = 0, _paths = paths;

                      case 13:
                        if (!(_i2 < _paths.length)) {
                          _context11.next = 22;
                          break;
                        }

                        path = _paths[_i2];
                        _context11.next = 17;
                        return eth.getAddress(path);

                      case 17:
                        res = _context11.sent;
                        addressToPath.set(res.address, path);

                      case 19:
                        _i2++;
                        _context11.next = 13;
                        break;

                      case 22:
                        _context11.next = 36;
                        break;

                      case 24:
                        if (account) {
                          _context11.next = 34;
                          break;
                        }

                        _context11.prev = 25;
                        _context11.next = 28;
                        return getPublicKey();

                      case 28:
                        account = _context11.sent;
                        _context11.next = 34;
                        break;

                      case 31:
                        _context11.prev = 31;
                        _context11.t0 = _context11["catch"](25);
                        throw _context11.t0;

                      case 34:
                        addressInfo = generateAddresses(account, addressToPath.size);
                        addressInfo.forEach(function (_ref4) {
                          var dPath = _ref4.dPath,
                              address = _ref4.address;
                          addressToPath.set(address, dPath);
                        });

                      case 36:
                        return _context11.abrupt("return", addresses());

                      case 37:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, null, [[25, 31]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x6) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context10.sent;
                        return _context10.abrupt("return", accounts && getBalances(accounts));

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));
              return _getMoreAccounts.apply(this, arguments);
            };

            getMoreAccounts = function _getMoreAccounts2() {
              return _getMoreAccounts.apply(this, arguments);
            };

            getPrimaryAddress = function _getPrimaryAddress() {
              return enabled ? addresses()[0] : undefined;
            };

            _getPublicKey = function _getPublicKey3() {
              _getPublicKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var result, publicKey, chainCode;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (dPath) {
                          _context9.next = 2;
                          break;
                        }

                        throw new Error('a derivation path is needed to get the public key');

                      case 2:
                        if (eth) {
                          _context9.next = 5;
                          break;
                        }

                        _context9.next = 5;
                        return createTransport();

                      case 5:
                        _context9.prev = 5;
                        _context9.next = 8;
                        return eth.getAddress(dPath, false, true);

                      case 8:
                        result = _context9.sent;
                        publicKey = result.publicKey, chainCode = result.chainCode;
                        account = {
                          publicKey: publicKey,
                          chainCode: chainCode,
                          path: dPath
                        };
                        return _context9.abrupt("return", account);

                      case 14:
                        _context9.prev = 14;
                        _context9.t0 = _context9["catch"](5);
                        throw new Error('There was a problem accessing your Ledger accounts.');

                      case 17:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, null, [[5, 14]]);
              }));
              return _getPublicKey.apply(this, arguments);
            };

            getPublicKey = function _getPublicKey2() {
              return _getPublicKey.apply(this, arguments);
            };

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(path) {
                var result;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (eth) {
                          _context8.next = 3;
                          break;
                        }

                        _context8.next = 3;
                        return createTransport();

                      case 3:
                        _context8.prev = 3;
                        _context8.next = 6;
                        return eth.getAddress(path);

                      case 6:
                        result = _context8.sent;
                        return _context8.abrupt("return", result.address);

                      case 10:
                        _context8.prev = 10;
                        _context8.t0 = _context8["catch"](3);

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[3, 10]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5) {
              return _getAddress.apply(this, arguments);
            };

            setPrimaryAccount = function _setPrimaryAccount(address) {
              // make a copy and put in an array
              var accounts = _toConsumableArray(addressToPath.entries());

              var accountIndex = accounts.findIndex(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 1),
                    accountAddress = _ref2[0];

                return accountAddress === address;
              }); // pull the item at the account index out of the array and place at the front

              accounts.unshift(accounts.splice(accountIndex, 1)[0]); // reassign addressToPath to new ordered accounts

              addressToPath = new Map(accounts);
            };

            addresses = function _addresses() {
              return Array.from(addressToPath.keys());
            };

            enable = function _enable() {
              enabled = true;
              return _getAccounts();
            };

            _createTransport = function _createTransport3() {
              _createTransport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var observer;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.prev = 0;

                        if (!LedgerTransport) {
                          _context7.next = 7;
                          break;
                        }

                        _context7.next = 4;
                        return LedgerTransport.create();

                      case 4:
                        _context7.t0 = _context7.sent;
                        _context7.next = 10;
                        break;

                      case 7:
                        _context7.next = 9;
                        return TransportU2F.create();

                      case 9:
                        _context7.t0 = _context7.sent;

                      case 10:
                        transport = _context7.t0;
                        eth = new Eth(transport);
                        observer = {
                          next: function next(event) {
                            if (event.type === 'remove') {
                              disconnect();
                            }
                          },
                          error: function error() {},
                          complete: function complete() {}
                        };
                        LedgerTransport ? LedgerTransport.listen(observer) : TransportU2F.listen(observer);
                        _context7.next = 19;
                        break;

                      case 16:
                        _context7.prev = 16;
                        _context7.t1 = _context7["catch"](0);
                        throw new Error('Error connecting to Ledger wallet');

                      case 19:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[0, 16]]);
              }));
              return _createTransport.apply(this, arguments);
            };

            createTransport = function _createTransport2() {
              return _createTransport.apply(this, arguments);
            };

            isCustomPath = function _isCustomPath() {
              return customPath;
            };

            _setPath = function _setPath3() {
              _setPath = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path, custom) {
                var address;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (isValidPath(path)) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return", false);

                      case 2:
                        if (path !== dPath) {
                          // clear any exsting addresses if different path
                          addressToPath = new Map();
                        }

                        if (!custom) {
                          _context6.next = 10;
                          break;
                        }

                        _context6.next = 6;
                        return getAddress(path);

                      case 6:
                        address = _context6.sent;
                        addressToPath.set(address, path);
                        customPath = true;
                        return _context6.abrupt("return", true);

                      case 10:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 13:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3, _x4) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              transport && transport.close();
              provider.stop();
              resetWalletState({
                disconnected: true,
                walletName: 'Ledger'
              });
            };

            _context14.next = 26;
            return require("_bundle_loader")(require.resolve('./providerEngine-4a9fe06c.js'));

          case 26:
            _yield$import = _context14.sent;
            createProvider = _yield$import["default"];
            _context14.next = 30;
            return require("_bundle_loader")(require.resolve('./hd-wallet-642b97e3.js'));

          case 30:
            _yield$import2 = _context14.sent;
            generateAddresses = _yield$import2.generateAddresses;
            isValidPath = _yield$import2.isValidPath;
            _context14.next = 35;
            return require("_bundle_loader")(require.resolve('@ledgerhq/hw-transport-u2f'));

          case 35:
            _yield$import3 = _context14.sent;
            TransportU2F = _yield$import3["default"];
            _context14.next = 39;
            return require("_bundle_loader")(require.resolve('@ledgerhq/hw-app-eth'));

          case 39:
            _yield$import4 = _context14.sent;
            Eth = _yield$import4["default"];
            _context14.next = 43;
            return require("_bundle_loader")(require.resolve('ethereumjs-tx'));

          case 43:
            EthereumTx = _context14.sent;
            _context14.next = 46;
            return require("_bundle_loader")(require.resolve('ethereumjs-util'));

          case 46:
            ethUtil = _context14.sent;
            _context14.next = 49;
            return require("_bundle_loader")(require.resolve('buffer'));

          case 49:
            buffer = _context14.sent;
            networkId = options.networkId, rpcUrl = options.rpcUrl, LedgerTransport = options.LedgerTransport, BigNumber = options.BigNumber, networkName = options.networkName, resetWalletState = options.resetWalletState;
            dPath = '';
            addressToPath = new Map();
            enabled = false;
            customPath = false;
            provider = createProvider({
              getAccounts: function getAccounts(callback) {
                _getAccounts().then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signTransaction: function signTransaction(transactionData, callback) {
                _signTransaction(transactionData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processMessage: function processMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              processPersonalMessage: function processPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signMessage: function signMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              signPersonalMessage: function signPersonalMessage(messageData, callback) {
                _signMessage(messageData).then(function (res) {
                  return callback(null, res);
                })["catch"](function (err) {
                  return callback(err, null);
                });
              },
              rpcUrl: rpcUrl
            });
            provider.setPath = setPath;
            provider.dPath = dPath;
            provider.enable = enable;
            provider.setPrimaryAccount = setPrimaryAccount;
            provider.getPrimaryAddress = getPrimaryAddress;
            provider.getAccounts = _getAccounts;
            provider.getMoreAccounts = getMoreAccounts;
            provider.getBalance = getBalance;
            provider.getBalances = getBalances;
            provider.send = provider.sendAsync;
            provider.disconnect = disconnect;
            provider.isCustomPath = isCustomPath;
            return _context14.abrupt("return", provider);

          case 69:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _ledgerProvider.apply(this, arguments);
}

var _default = ledger;
exports.default = _default;
},{"_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./providerEngine-4a9fe06c.js":[["providerEngine-4a9fe06c.4521c820.js","../node_modules/bnc-onboard/dist/esm/providerEngine-4a9fe06c.js"],"providerEngine-4a9fe06c.4521c820.js.map","../node_modules/bnc-onboard/dist/esm/providerEngine-4a9fe06c.js"],"./hd-wallet-642b97e3.js":[["hd-wallet-642b97e3.84edef61.js","../node_modules/bnc-onboard/dist/esm/hd-wallet-642b97e3.js"],"hd-wallet-642b97e3.84edef61.js.map","../node_modules/bnc-onboard/dist/esm/hd-wallet-642b97e3.js"],"@ledgerhq/hw-transport-u2f":[["TransportU2F.e624656e.js","../node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js"],"TransportU2F.e624656e.js.map","../node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js"],"@ledgerhq/hw-app-eth":[["Eth.8be80c18.js","../node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js"],"Eth.8be80c18.js.map","../node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js"],"ethereumjs-tx":[["dist.256f8f1f.js","../node_modules/bnc-onboard/node_modules/ethereumjs-tx/dist/index.js"],"dist.256f8f1f.js.map","../node_modules/bnc-onboard/node_modules/ethereumjs-tx/dist/index.js"],"ethereumjs-util":[["dist.90ca2b59.js","../node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js"],"dist.90ca2b59.js.map","../node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js"],"buffer":[["src.f69400ca.js","index.tsx"],"src.f69400ca.js.map",["background-green.1afae892.jpg","Assets/background-green.jpg"],"../node_modules/node-libs-browser/node_modules/buffer/index.js"]}],"../node_modules/@ledgerhq/errors/dist/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransportError = TransportError;
exports.TransportStatusError = TransportStatusError;
exports.getAltStatusMessage = getAltStatusMessage;
exports.serializeError = exports.deserializeError = exports.createCustomErrorClass = exports.addCustomErrorDeserializer = exports.WrongDeviceForAccount = exports.WrongAppForCurrency = exports.WebsocketConnectionFailed = exports.WebsocketConnectionError = exports.UserRefusedOnDevice = exports.UserRefusedFirmwareUpdate = exports.UserRefusedDeviceNameChange = exports.UserRefusedAllowManager = exports.UserRefusedAddress = exports.UpdateYourApp = exports.UpdateIncorrectSig = exports.UpdateIncorrectHash = exports.UpdateFetchFileFail = exports.UnknownMCU = exports.UnexpectedBootloader = exports.UnavailableTezosOriginatedAccountSend = exports.UnavailableTezosOriginatedAccountReceive = exports.TransportWebUSBGestureRequired = exports.TransportRaceCondition = exports.TransportOpenUserCancelled = exports.TransportInterfaceNotAvailable = exports.TimeoutTagged = exports.SyncError = exports.StatusCodes = exports.RecommendUndelegation = exports.RecommendSubAccountsToEmpty = exports.RecipientRequired = exports.PasswordsDontMatchError = exports.PasswordIncorrectError = exports.PairingFailed = exports.NotSupportedLegacyAddress = exports.NotEnoughSpendableBalance = exports.NotEnoughGas = exports.NotEnoughBalanceToDelegate = exports.NotEnoughBalanceInParentAccount = exports.NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughBalance = exports.NoDBPathGiven = exports.NoAddressesFound = exports.NoAccessToCamera = exports.NetworkDown = exports.ManagerUninstallBTCDep = exports.ManagerNotEnoughSpaceError = exports.ManagerFirmwareNotEnoughSpaceError = exports.ManagerDeviceLockedError = exports.ManagerAppRelyOnBTCError = exports.ManagerAppDepUninstallRequired = exports.ManagerAppDepInstallRequired = exports.ManagerAppAlreadyInstalledError = exports.MCUNotGenuineToDashboard = exports.LedgerAPINotAvailable = exports.LedgerAPIErrorWithMessage = exports.LedgerAPIError = exports.LedgerAPI5xx = exports.LedgerAPI4xx = exports.LatestMCUInstalledError = exports.InvalidXRPTag = exports.InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddress = exports.HardResetFail = exports.GenuineCheckFailed = exports.GasLessThanEstimate = exports.FirmwareOrAppUpdateRequired = exports.FirmwareNotRecognized = exports.FeeTooHigh = exports.FeeRequired = exports.FeeNotLoaded = exports.FeeEstimationFailed = exports.EthAppPleaseEnableContractData = exports.EnpointConfigError = exports.ETHAddressNonEIP = exports.DisconnectedDeviceDuringOperation = exports.DisconnectedDevice = exports.DeviceSocketNoBulkStatus = exports.DeviceSocketFail = exports.DeviceShouldStayInApp = exports.DeviceOnDashboardUnexpected = exports.DeviceOnDashboardExpected = exports.DeviceNotGenuineError = exports.DeviceNameInvalid = exports.DeviceInOSUExpected = exports.DeviceHalted = exports.DeviceGenuineSocketEarlyClose = exports.DeviceAppVerifyNotSupported = exports.DBWrongPassword = exports.DBNotReset = exports.CurrencyNotSupported = exports.CashAddrNotSupported = exports.CantScanQRCode = exports.CantOpenDevice = exports.BtcUnmatchedApp = exports.BluetoothRequired = exports.AmountRequired = exports.AccountNotSupported = exports.AccountNameRequiredError = void 0;

/* eslint-disable no-continue */

/* eslint-disable no-unused-vars */

/* eslint-disable no-param-reassign */

/* eslint-disable no-prototype-builtins */
var errorClasses = {};
var deserializers = {};

var addCustomErrorDeserializer = function (name, deserializer) {
  deserializers[name] = deserializer;
};

exports.addCustomErrorDeserializer = addCustomErrorDeserializer;

var createCustomErrorClass = function (name) {
  var C = function CustomError(message, fields) {
    Object.assign(this, fields);
    this.name = name;
    this.message = message || name;
    this.stack = new Error().stack;
  };

  C.prototype = new Error();
  errorClasses[name] = C;
  return C;
}; // inspired from https://github.com/programble/errio/blob/master/index.js


exports.createCustomErrorClass = createCustomErrorClass;

var deserializeError = function (object) {
  if (typeof object === "object" && object) {
    try {
      // $FlowFixMe FIXME HACK
      var msg = JSON.parse(object.message);

      if (msg.message && msg.name) {
        object = msg;
      }
    } catch (e) {// nothing
    }

    var error = void 0;

    if (typeof object.name === "string") {
      var name_1 = object.name;
      var des = deserializers[name_1];

      if (des) {
        error = des(object);
      } else {
        var constructor = name_1 === "Error" ? Error : errorClasses[name_1];

        if (!constructor) {
          console.warn("deserializing an unknown class '" + name_1 + "'");
          constructor = createCustomErrorClass(name_1);
        }

        error = Object.create(constructor.prototype);

        try {
          for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
              error[prop] = object[prop];
            }
          }
        } catch (e) {// sometimes setting a property can fail (e.g. .name)
        }
      }
    } else {
      error = new Error(object.message);
    }

    if (!error.stack && Error.captureStackTrace) {
      Error.captureStackTrace(error, deserializeError);
    }

    return error;
  }

  return new Error(String(object));
}; // inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js


exports.deserializeError = deserializeError;

var serializeError = function (value) {
  if (!value) return value;

  if (typeof value === "object") {
    return destroyCircular(value, []);
  }

  if (typeof value === "function") {
    return "[Function: " + (value.name || "anonymous") + "]";
  }

  return value;
}; // https://www.npmjs.com/package/destroy-circular


exports.serializeError = serializeError;

function destroyCircular(from, seen) {
  var to = {};
  seen.push(from);

  for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
    var key = _a[_i];
    var value = from[key];

    if (typeof value === "function") {
      continue;
    }

    if (!value || typeof value !== "object") {
      to[key] = value;
      continue;
    }

    if (seen.indexOf(from[key]) === -1) {
      to[key] = destroyCircular(from[key], seen.slice(0));
      continue;
    }

    to[key] = "[Circular]";
  }

  if (typeof from.name === "string") {
    to.name = from.name;
  }

  if (typeof from.message === "string") {
    to.message = from.message;
  }

  if (typeof from.stack === "string") {
    to.stack = from.stack;
  }

  return to;
}

var AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
exports.AccountNameRequiredError = AccountNameRequiredError;
var AccountNotSupported = createCustomErrorClass("AccountNotSupported");
exports.AccountNotSupported = AccountNotSupported;
var AmountRequired = createCustomErrorClass("AmountRequired");
exports.AmountRequired = AmountRequired;
var BluetoothRequired = createCustomErrorClass("BluetoothRequired");
exports.BluetoothRequired = BluetoothRequired;
var BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
exports.BtcUnmatchedApp = BtcUnmatchedApp;
var CantOpenDevice = createCustomErrorClass("CantOpenDevice");
exports.CantOpenDevice = CantOpenDevice;
var CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
exports.CashAddrNotSupported = CashAddrNotSupported;
var CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
exports.CurrencyNotSupported = CurrencyNotSupported;
var DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
exports.DeviceAppVerifyNotSupported = DeviceAppVerifyNotSupported;
var DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
exports.DeviceGenuineSocketEarlyClose = DeviceGenuineSocketEarlyClose;
var DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
exports.DeviceNotGenuineError = DeviceNotGenuineError;
var DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
exports.DeviceOnDashboardExpected = DeviceOnDashboardExpected;
var DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
exports.DeviceOnDashboardUnexpected = DeviceOnDashboardUnexpected;
var DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
exports.DeviceInOSUExpected = DeviceInOSUExpected;
var DeviceHalted = createCustomErrorClass("DeviceHalted");
exports.DeviceHalted = DeviceHalted;
var DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
exports.DeviceNameInvalid = DeviceNameInvalid;
var DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
exports.DeviceSocketFail = DeviceSocketFail;
var DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
exports.DeviceSocketNoBulkStatus = DeviceSocketNoBulkStatus;
var DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
exports.DisconnectedDevice = DisconnectedDevice;
var DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
exports.DisconnectedDeviceDuringOperation = DisconnectedDeviceDuringOperation;
var EnpointConfigError = createCustomErrorClass("EnpointConfig");
exports.EnpointConfigError = EnpointConfigError;
var EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
exports.EthAppPleaseEnableContractData = EthAppPleaseEnableContractData;
var FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
exports.FeeEstimationFailed = FeeEstimationFailed;
var FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
exports.FirmwareNotRecognized = FirmwareNotRecognized;
var HardResetFail = createCustomErrorClass("HardResetFail");
exports.HardResetFail = HardResetFail;
var InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
exports.InvalidXRPTag = InvalidXRPTag;
var InvalidAddress = createCustomErrorClass("InvalidAddress");
exports.InvalidAddress = InvalidAddress;
var InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
exports.InvalidAddressBecauseDestinationIsAlsoSource = InvalidAddressBecauseDestinationIsAlsoSource;
var LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
exports.LatestMCUInstalledError = LatestMCUInstalledError;
var UnknownMCU = createCustomErrorClass("UnknownMCU");
exports.UnknownMCU = UnknownMCU;
var LedgerAPIError = createCustomErrorClass("LedgerAPIError");
exports.LedgerAPIError = LedgerAPIError;
var LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
exports.LedgerAPIErrorWithMessage = LedgerAPIErrorWithMessage;
var LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
exports.LedgerAPINotAvailable = LedgerAPINotAvailable;
var ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
exports.ManagerAppAlreadyInstalledError = ManagerAppAlreadyInstalledError;
var ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
exports.ManagerAppRelyOnBTCError = ManagerAppRelyOnBTCError;
var ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
exports.ManagerAppDepInstallRequired = ManagerAppDepInstallRequired;
var ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
exports.ManagerAppDepUninstallRequired = ManagerAppDepUninstallRequired;
var ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
exports.ManagerDeviceLockedError = ManagerDeviceLockedError;
var ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
exports.ManagerFirmwareNotEnoughSpaceError = ManagerFirmwareNotEnoughSpaceError;
var ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
exports.ManagerNotEnoughSpaceError = ManagerNotEnoughSpaceError;
var ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
exports.ManagerUninstallBTCDep = ManagerUninstallBTCDep;
var NetworkDown = createCustomErrorClass("NetworkDown");
exports.NetworkDown = NetworkDown;
var NoAddressesFound = createCustomErrorClass("NoAddressesFound");
exports.NoAddressesFound = NoAddressesFound;
var NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
exports.NotEnoughBalance = NotEnoughBalance;
var NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
exports.NotEnoughBalanceToDelegate = NotEnoughBalanceToDelegate;
var NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
exports.NotEnoughBalanceInParentAccount = NotEnoughBalanceInParentAccount;
var NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
exports.NotEnoughSpendableBalance = NotEnoughSpendableBalance;
var NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
exports.NotEnoughBalanceBecauseDestinationNotCreated = NotEnoughBalanceBecauseDestinationNotCreated;
var NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
exports.NoAccessToCamera = NoAccessToCamera;
var NotEnoughGas = createCustomErrorClass("NotEnoughGas");
exports.NotEnoughGas = NotEnoughGas;
var NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
exports.NotSupportedLegacyAddress = NotSupportedLegacyAddress;
var GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
exports.GasLessThanEstimate = GasLessThanEstimate;
var PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
exports.PasswordsDontMatchError = PasswordsDontMatchError;
var PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
exports.PasswordIncorrectError = PasswordIncorrectError;
var RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
exports.RecommendSubAccountsToEmpty = RecommendSubAccountsToEmpty;
var RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
exports.RecommendUndelegation = RecommendUndelegation;
var TimeoutTagged = createCustomErrorClass("TimeoutTagged");
exports.TimeoutTagged = TimeoutTagged;
var UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
exports.UnexpectedBootloader = UnexpectedBootloader;
var MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
exports.MCUNotGenuineToDashboard = MCUNotGenuineToDashboard;
var RecipientRequired = createCustomErrorClass("RecipientRequired");
exports.RecipientRequired = RecipientRequired;
var UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
exports.UnavailableTezosOriginatedAccountReceive = UnavailableTezosOriginatedAccountReceive;
var UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
exports.UnavailableTezosOriginatedAccountSend = UnavailableTezosOriginatedAccountSend;
var UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
exports.UpdateFetchFileFail = UpdateFetchFileFail;
var UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
exports.UpdateIncorrectHash = UpdateIncorrectHash;
var UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
exports.UpdateIncorrectSig = UpdateIncorrectSig;
var UpdateYourApp = createCustomErrorClass("UpdateYourApp");
exports.UpdateYourApp = UpdateYourApp;
var UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
exports.UserRefusedDeviceNameChange = UserRefusedDeviceNameChange;
var UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
exports.UserRefusedAddress = UserRefusedAddress;
var UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
exports.UserRefusedFirmwareUpdate = UserRefusedFirmwareUpdate;
var UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
exports.UserRefusedAllowManager = UserRefusedAllowManager;
var UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal

exports.UserRefusedOnDevice = UserRefusedOnDevice;
var TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
exports.TransportOpenUserCancelled = TransportOpenUserCancelled;
var TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
exports.TransportInterfaceNotAvailable = TransportInterfaceNotAvailable;
var TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
exports.TransportRaceCondition = TransportRaceCondition;
var TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
exports.TransportWebUSBGestureRequired = TransportWebUSBGestureRequired;
var DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
exports.DeviceShouldStayInApp = DeviceShouldStayInApp;
var WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
exports.WebsocketConnectionError = WebsocketConnectionError;
var WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
exports.WebsocketConnectionFailed = WebsocketConnectionFailed;
var WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
exports.WrongDeviceForAccount = WrongDeviceForAccount;
var WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
exports.WrongAppForCurrency = WrongAppForCurrency;
var ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
exports.ETHAddressNonEIP = ETHAddressNonEIP;
var CantScanQRCode = createCustomErrorClass("CantScanQRCode");
exports.CantScanQRCode = CantScanQRCode;
var FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
exports.FeeNotLoaded = FeeNotLoaded;
var FeeRequired = createCustomErrorClass("FeeRequired");
exports.FeeRequired = FeeRequired;
var FeeTooHigh = createCustomErrorClass("FeeTooHigh");
exports.FeeTooHigh = FeeTooHigh;
var SyncError = createCustomErrorClass("SyncError");
exports.SyncError = SyncError;
var PairingFailed = createCustomErrorClass("PairingFailed");
exports.PairingFailed = PairingFailed;
var GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
exports.GenuineCheckFailed = GenuineCheckFailed;
var LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
exports.LedgerAPI4xx = LedgerAPI4xx;
var LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
exports.LedgerAPI5xx = LedgerAPI5xx;
var FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired"); // db stuff, no need to translate

exports.FirmwareOrAppUpdateRequired = FirmwareOrAppUpdateRequired;
var NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
exports.NoDBPathGiven = NoDBPathGiven;
var DBWrongPassword = createCustomErrorClass("DBWrongPassword");
exports.DBWrongPassword = DBWrongPassword;
var DBNotReset = createCustomErrorClass("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */

exports.DBNotReset = DBNotReset;

function TransportError(message, id) {
  this.name = "TransportError";
  this.message = message;
  this.stack = new Error().stack;
  this.id = id;
}

TransportError.prototype = new Error();
addCustomErrorDeserializer("TransportError", function (e) {
  return new TransportError(e.message, e.id);
});
var StatusCodes = {
  PIN_REMAINING_ATTEMPTS: 0x63c0,
  INCORRECT_LENGTH: 0x6700,
  MISSING_CRITICAL_PARAMETER: 0x6800,
  COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
  SECURITY_STATUS_NOT_SATISFIED: 0x6982,
  CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
  INCORRECT_DATA: 0x6a80,
  NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
  REFERENCED_DATA_NOT_FOUND: 0x6a88,
  FILE_ALREADY_EXISTS: 0x6a89,
  INCORRECT_P1_P2: 0x6b00,
  INS_NOT_SUPPORTED: 0x6d00,
  CLA_NOT_SUPPORTED: 0x6e00,
  TECHNICAL_PROBLEM: 0x6f00,
  OK: 0x9000,
  MEMORY_PROBLEM: 0x9240,
  NO_EF_SELECTED: 0x9400,
  INVALID_OFFSET: 0x9402,
  FILE_NOT_FOUND: 0x9404,
  INCONSISTENT_FILE: 0x9408,
  ALGORITHM_NOT_SUPPORTED: 0x9484,
  INVALID_KCV: 0x9485,
  CODE_NOT_INITIALIZED: 0x9802,
  ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
  CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
  CONTRADICTION_INVALIDATION: 0x9810,
  CODE_BLOCKED: 0x9840,
  MAX_VALUE_REACHED: 0x9850,
  GP_AUTH_FAILED: 0x6300,
  LICENSING: 0x6f42,
  HALTED: 0x6faa
};
exports.StatusCodes = StatusCodes;

function getAltStatusMessage(code) {
  switch (code) {
    // improve text of most common errors
    case 0x6700:
      return "Incorrect length";

    case 0x6800:
      return "Missing critical parameter";

    case 0x6982:
      return "Security not satisfied (dongle locked or have invalid access rights)";

    case 0x6985:
      return "Condition of use not satisfied (denied by the user?)";

    case 0x6a80:
      return "Invalid data received";

    case 0x6b00:
      return "Invalid parameter received";
  }

  if (0x6f00 <= code && code <= 0x6fff) {
    return "Internal error, please report";
  }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */


function TransportStatusError(statusCode) {
  this.name = "TransportStatusError";
  var statusText = Object.keys(StatusCodes).find(function (k) {
    return StatusCodes[k] === statusCode;
  }) || "UNKNOWN_ERROR";
  var smsg = getAltStatusMessage(statusCode) || statusText;
  var statusCodeStr = statusCode.toString(16);
  this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
  this.stack = new Error().stack;
  this.statusCode = statusCode;
  this.statusText = statusText;
}

TransportStatusError.prototype = new Error();
addCustomErrorDeserializer("TransportStatusError", function (e) {
  return new TransportStatusError(e.statusCode);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60625" + '/');

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
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/bnc-onboard/dist/esm/ledger-59d08cb6.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/ledger-59d08cb6.a76c5d0b.js.map