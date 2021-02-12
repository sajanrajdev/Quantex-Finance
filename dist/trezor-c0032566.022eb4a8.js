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
})({"../node_modules/bnc-onboard/dist/esm/trezor-c0032566.js":[function(require,module,exports) {
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

var trezorIcon = "\n\t<svg width=\"40px\" height=\"40px\" viewBox=\"0 0 114 166\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t\t<g id=\"Styles\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t<path d=\"M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z\" id=\"Trezor-logo\" fill=\"currentColor\"></path>\n\t\t</g>\n\t</svg>\n";

function trezor(options) {
  var rpcUrl = options.rpcUrl,
      networkId = options.networkId,
      email = options.email,
      appUrl = options.appUrl,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Trezor',
    svg: svg || trezorIcon,
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
                return trezorProvider({
                  rpcUrl: rpcUrl,
                  networkId: networkId,
                  email: email,
                  appUrl: appUrl,
                  BigNumber: BigNumber,
                  networkName: networkName,
                  resetWalletState: resetWalletState
                });

              case 3:
                provider = _context4.sent;
                return _context4.abrupt("return", {
                  provider: provider,
                  "interface": {
                    name: 'Trezor',
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

function trezorProvider(_x2) {
  return _trezorProvider.apply(this, arguments);
}

function _trezorProvider() {
  _trezorProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(options) {
    var TrezorConnectLibrary, EthereumTx, ethUtil, _yield$import, createProvider, _yield$import2, generateAddresses, isValidPath, TrezorConnect, DEVICE_EVENT, DEVICE, TREZOR_DEFAULT_PATH, networkId, email, appUrl, rpcUrl, BigNumber, networkName, resetWalletState, dPath, addressToPath, enabled, customPath, account, provider, disconnect, setPath, _setPath, isCustomPath, enable, getAddress, _getAddress, addresses, setPrimaryAccount, getPublicKey, _getPublicKey, getPrimaryAddress, getMoreAccounts, _getMoreAccounts, _getAccounts, _getAccounts2, getBalances, getBalance, trezorSignTransaction, _signTransaction, _signTransaction2, _signMessage, _signMessage2;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _signMessage2 = function _signMessage4() {
              _signMessage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(message) {
                var _, address, path;

                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context12.next = 3;
                          break;
                        }

                        _context12.next = 3;
                        return enable();

                      case 3:
                        _ = _slicedToArray(_toConsumableArray(addressToPath.entries())[0], 2), address = _[0], path = _[1];
                        return _context12.abrupt("return", new Promise(function (resolve, reject) {
                          TrezorConnect.ethereumSignMessage({
                            path: path,
                            message: ethUtil.stripHexPrefix(message.data),
                            hex: true
                          }).then(function (response) {
                            if (response.success) {
                              if (response.payload.address !== ethUtil.toChecksumAddress(address)) {
                                reject(new Error('signature doesnt match the right address'));
                              }

                              var signature = "0x".concat(response.payload.signature);
                              resolve(signature);
                            } else {
                              reject(new Error(response.payload && response.payload.error || 'There was an error signing a message'));
                            }
                          });
                        }));

                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12);
              }));
              return _signMessage2.apply(this, arguments);
            };

            _signMessage = function _signMessage3(_x9) {
              return _signMessage2.apply(this, arguments);
            };

            _signTransaction2 = function _signTransaction4() {
              _signTransaction2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(transactionData) {
                var path, transaction, trezorResult, signature;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!(addressToPath.size === 0)) {
                          _context11.next = 3;
                          break;
                        }

                        _context11.next = 3;
                        return enable();

                      case 3:
                        path = _toConsumableArray(addressToPath.values())[0];
                        transaction = new EthereumTx.Transaction(transactionData, {
                          chain: networkName(networkId)
                        });
                        _context11.next = 7;
                        return trezorSignTransaction(path, transactionData);

                      case 7:
                        trezorResult = _context11.sent;

                        if (trezorResult.success) {
                          _context11.next = 10;
                          break;
                        }

                        throw new Error(trezorResult.payload.error);

                      case 10:
                        signature = trezorResult.payload;
                        transaction.v = signature.v;
                        transaction.r = signature.r;
                        transaction.s = signature.s;
                        return _context11.abrupt("return", "0x".concat(transaction.serialize().toString('hex')));

                      case 15:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));
              return _signTransaction2.apply(this, arguments);
            };

            _signTransaction = function _signTransaction3(_x8) {
              return _signTransaction2.apply(this, arguments);
            };

            trezorSignTransaction = function _trezorSignTransactio(path, transactionData) {
              var nonce = transactionData.nonce,
                  gasPrice = transactionData.gasPrice,
                  gas = transactionData.gas,
                  to = transactionData.to,
                  value = transactionData.value,
                  data = transactionData.data;
              return TrezorConnect.ethereumSignTransaction({
                path: path,
                transaction: {
                  nonce: nonce,
                  gasPrice: gasPrice,
                  gasLimit: gas,
                  to: to,
                  value: value || '',
                  data: data || '',
                  chainId: networkId
                }
              });
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
              _getAccounts2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(getMore) {
                var addressInfo;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        if (enabled) {
                          _context10.next = 2;
                          break;
                        }

                        return _context10.abrupt("return", [undefined]);

                      case 2:
                        if (!(addressToPath.size > 0 && !getMore)) {
                          _context10.next = 4;
                          break;
                        }

                        return _context10.abrupt("return", addresses());

                      case 4:
                        if (dPath === '') {
                          dPath = TREZOR_DEFAULT_PATH;
                        }

                        if (account) {
                          _context10.next = 15;
                          break;
                        }

                        _context10.prev = 6;
                        _context10.next = 9;
                        return getPublicKey();

                      case 9:
                        account = _context10.sent;
                        _context10.next = 15;
                        break;

                      case 12:
                        _context10.prev = 12;
                        _context10.t0 = _context10["catch"](6);
                        throw _context10.t0;

                      case 15:
                        addressInfo = generateAddresses(account, addressToPath.size);
                        addressInfo.forEach(function (_ref4) {
                          var dPath = _ref4.dPath,
                              address = _ref4.address;
                          addressToPath.set(address, dPath);
                        });
                        return _context10.abrupt("return", addresses());

                      case 18:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, null, [[6, 12]]);
              }));
              return _getAccounts2.apply(this, arguments);
            };

            _getAccounts = function _getAccounts3(_x6) {
              return _getAccounts2.apply(this, arguments);
            };

            _getMoreAccounts = function _getMoreAccounts3() {
              _getMoreAccounts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var accounts;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return _getAccounts(true);

                      case 2:
                        accounts = _context9.sent;
                        return _context9.abrupt("return", getBalances(accounts));

                      case 4:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
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
              _getPublicKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var result;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (dPath) {
                          _context8.next = 2;
                          break;
                        }

                        throw new Error('a derivation path is needed to get the public key');

                      case 2:
                        _context8.prev = 2;
                        _context8.next = 5;
                        return TrezorConnect.getPublicKey({
                          path: dPath,
                          coin: 'eth'
                        });

                      case 5:
                        result = _context8.sent;

                        if (result.success) {
                          _context8.next = 8;
                          break;
                        }

                        throw new Error(result.payload.error);

                      case 8:
                        account = {
                          publicKey: result.payload.publicKey,
                          chainCode: result.payload.chainCode,
                          path: result.payload.serializedPath
                        };
                        return _context8.abrupt("return", account);

                      case 12:
                        _context8.prev = 12;
                        _context8.t0 = _context8["catch"](2);
                        throw new Error('There was an error accessing your Trezor accounts.');

                      case 15:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[2, 12]]);
              }));
              return _getPublicKey.apply(this, arguments);
            };

            getPublicKey = function _getPublicKey2() {
              return _getPublicKey.apply(this, arguments);
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

            _getAddress = function _getAddress3() {
              _getAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(path) {
                var errorMsg, result;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        errorMsg = "Unable to derive address from path ".concat(path);
                        _context7.prev = 1;
                        _context7.next = 4;
                        return TrezorConnect.ethereumGetAddress({
                          path: path,
                          showOnTrezor: false
                        });

                      case 4:
                        result = _context7.sent;

                        if (result.success) {
                          _context7.next = 7;
                          break;
                        }

                        throw new Error(errorMsg);

                      case 7:
                        return _context7.abrupt("return", result.payload.address);

                      case 10:
                        _context7.prev = 10;
                        _context7.t0 = _context7["catch"](1);
                        throw new Error(errorMsg);

                      case 13:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, null, [[1, 10]]);
              }));
              return _getAddress.apply(this, arguments);
            };

            getAddress = function _getAddress2(_x5) {
              return _getAddress.apply(this, arguments);
            };

            enable = function _enable() {
              enabled = true;
              return _getAccounts();
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
                          _context6.next = 17;
                          break;
                        }

                        _context6.prev = 4;
                        _context6.next = 7;
                        return getAddress(path);

                      case 7:
                        address = _context6.sent;
                        addressToPath.set(address, path);
                        dPath = path;
                        customPath = true;
                        return _context6.abrupt("return", true);

                      case 14:
                        _context6.prev = 14;
                        _context6.t0 = _context6["catch"](4);
                        throw new Error("There was a problem deriving an address from path ".concat(path));

                      case 17:
                        customPath = false;
                        dPath = path;
                        return _context6.abrupt("return", true);

                      case 20:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, null, [[4, 14]]);
              }));
              return _setPath.apply(this, arguments);
            };

            setPath = function _setPath2(_x3, _x4) {
              return _setPath.apply(this, arguments);
            };

            disconnect = function _disconnect() {
              dPath = '';
              addressToPath = new Map();
              enabled = false;
              provider.stop();
            };

            _context13.next = 25;
            return require("_bundle_loader")(require.resolve('trezor-connect'));

          case 25:
            TrezorConnectLibrary = _context13.sent;
            _context13.next = 28;
            return require("_bundle_loader")(require.resolve('ethereumjs-tx'));

          case 28:
            EthereumTx = _context13.sent;
            _context13.next = 31;
            return require("_bundle_loader")(require.resolve('ethereumjs-util'));

          case 31:
            ethUtil = _context13.sent;
            _context13.next = 34;
            return require("_bundle_loader")(require.resolve('./providerEngine-538cf498.js'));

          case 34:
            _yield$import = _context13.sent;
            createProvider = _yield$import["default"];
            _context13.next = 38;
            return require("_bundle_loader")(require.resolve('./hd-wallet-642b97e3.js'));

          case 38:
            _yield$import2 = _context13.sent;
            generateAddresses = _yield$import2.generateAddresses;
            isValidPath = _yield$import2.isValidPath;
            TrezorConnect = TrezorConnectLibrary["default"], DEVICE_EVENT = TrezorConnectLibrary.DEVICE_EVENT, DEVICE = TrezorConnectLibrary.DEVICE;
            TREZOR_DEFAULT_PATH = "m/44'/60'/0'/0";
            networkId = options.networkId, email = options.email, appUrl = options.appUrl, rpcUrl = options.rpcUrl, BigNumber = options.BigNumber, networkName = options.networkName, resetWalletState = options.resetWalletState;
            dPath = '';
            addressToPath = new Map();
            enabled = false;
            customPath = false;
            TrezorConnect.manifest({
              email: email,
              appUrl: appUrl
            });
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
            TrezorConnect.on(DEVICE_EVENT, function (event) {
              if (event.type === DEVICE.DISCONNECT) {
                provider.stop();
                resetWalletState({
                  disconnected: true,
                  walletName: 'Trezor'
                });
              }
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
            return _context13.abrupt("return", provider);

          case 64:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _trezorProvider.apply(this, arguments);
}

var _default = trezor;
exports.default = _default;
},{"_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","trezor-connect":[["lib.9c38ed7c.js","../node_modules/trezor-connect/lib/index.js"],"lib.9c38ed7c.js.map","../node_modules/trezor-connect/lib/index.js"],"ethereumjs-tx":[["dist.256f8f1f.js","../node_modules/bnc-onboard/node_modules/ethereumjs-tx/dist/index.js"],"dist.256f8f1f.js.map","../node_modules/bnc-onboard/node_modules/ethereumjs-tx/dist/index.js"],"ethereumjs-util":[["dist.90ca2b59.js","../node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js"],"dist.90ca2b59.js.map","../node_modules/bnc-onboard/node_modules/ethereumjs-util/dist/index.js"],"./providerEngine-538cf498.js":[["providerEngine-538cf498.a7359936.js","../node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js"],"providerEngine-538cf498.a7359936.js.map","../node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js"],"./hd-wallet-642b97e3.js":[["hd-wallet-642b97e3.84edef61.js","../node_modules/bnc-onboard/dist/esm/hd-wallet-642b97e3.js"],"hd-wallet-642b97e3.84edef61.js.map","../node_modules/bnc-onboard/dist/esm/hd-wallet-642b97e3.js"]}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/bnc-onboard/dist/esm/trezor-c0032566.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/trezor-c0032566.022eb4a8.js.map