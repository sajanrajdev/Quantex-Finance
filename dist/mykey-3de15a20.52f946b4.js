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
})({"../node_modules/bnc-onboard/dist/esm/mykey-3de15a20.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contentEeaca1cc = require("./content-eeaca1cc.js");

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

var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function mykey(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'MYKEY',
    iconSrc: iconSrc || img,
    iconSrcSet: iconSrc || img$1,
    svg: svg,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {
        var getProviderName, getAddress, getNetwork, getBalance, myKeyProvider, isMyKey, createProvider, provider, warned;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getNetwork = helpers.getNetwork, getBalance = helpers.getBalance;
                myKeyProvider = window.ethereum || window.web3 && window.web3.currentProvider;
                isMyKey = getProviderName(myKeyProvider) === 'MYKEY';

                if (!(isMyKey && rpcUrl)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return require("_bundle_loader")(require.resolve('./providerEngine-538cf498.js'));

              case 6:
                createProvider = _context2.sent["default"];

              case 7:
                provider = createProvider ? createProvider({
                  rpcUrl: rpcUrl
                }) : null;
                warned = false;
                return _context2.abrupt("return", {
                  provider: myKeyProvider,
                  "interface": isMyKey ? {
                    address: {
                      get: function get() {
                        return getAddress(myKeyProvider);
                      }
                    },
                    network: {
                      get: function get() {
                        return getNetwork(myKeyProvider);
                      }
                    },
                    balance: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var address;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (provider) {
                                    _context.next = 3;
                                    break;
                                  }

                                  if (!warned) {
                                    console.warn('The MYKEY provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the MYKEY wallet initialization object to get the balance.');
                                    warned = true;
                                  }

                                  return _context.abrupt("return", null);

                                case 3:
                                  _context.next = 5;
                                  return getAddress(myKeyProvider);

                                case 5:
                                  address = _context.sent;
                                  return _context.abrupt("return", getBalance(provider, address));

                                case 7:
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
                    name: getProviderName(myKeyProvider)
                  } : null
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://mykey.org/download',
    installMessage: _contentEeaca1cc.m,
    mobile: true,
    preferred: preferred
  };
}

var _default = mykey;
exports.default = _default;
},{"./content-eeaca1cc.js":"../node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","./providerEngine-538cf498.js":[["providerEngine-538cf498.a7359936.js","../node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js"],"providerEngine-538cf498.a7359936.js.map","../node_modules/bnc-onboard/dist/esm/providerEngine-538cf498.js"]}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/bnc-onboard/dist/esm/mykey-3de15a20.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/mykey-3de15a20.52f946b4.js.map