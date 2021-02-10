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
})({"../node_modules/bnc-onboard/dist/esm/authereum-42ff9003.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _onboardDd8224fc = require("./onboard-dd8224fc.js");

require("bignumber.js");

require("bnc-sdk");

require("bowser");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var img = "data:image/png;base64,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";

function authereum(options) {
  var networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      otherOptions = _objectWithoutProperties(options, ["networkId", "preferred", "label", "iconSrc", "svg"]);

  return {
    name: label || 'Authereum',
    svg: svg,
    iconSrc: iconSrc || img,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$import, Authereum, instance, provider;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return require("_bundle_loader")(require.resolve('authereum'));

              case 2:
                _yield$import = _context2.sent;
                Authereum = _yield$import["default"];
                instance = new Authereum(_objectSpread({
                  networkName: (0, _onboardDd8224fc.n)(networkId),
                  blockedPopupRedirect: false
                }, otherOptions));
                provider = instance.getProvider();
                return _context2.abrupt("return", {
                  provider: provider,
                  instance: instance,
                  "interface": {
                    name: 'Authereum',
                    connect: function connect() {
                      return provider.enable();
                    },
                    disconnect: function disconnect() {
                      instance.destroy();
                    },
                    address: {
                      get: function get() {
                        return instance.getAccountAddress();
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(networkId);
                      }
                    },
                    balance: {
                      get: function () {
                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var loggedIn;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return instance.isAuthenticated();

                                case 2:
                                  loggedIn = _context.sent;
                                  return _context.abrupt("return", loggedIn && instance.getBalance());

                                case 4:
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
                    dashboard: function dashboard() {
                      return (0, _onboardDd8224fc.o)("https://".concat(networkId !== 1 ? "".concat((0, _onboardDd8224fc.n)(networkId), ".") : '', "authereum.com/"));
                    }
                  }
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function wallet() {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    mobile: true,
    preferred: preferred
  };
}

var _default = authereum;
exports.default = _default;
},{"regenerator-runtime/runtime":"../node_modules/regenerator-runtime/runtime.js","./onboard-dd8224fc.js":"../node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js","bignumber.js":"../node_modules/bignumber.js/bignumber.js","bnc-sdk":"../node_modules/bnc-onboard/node_modules/bnc-sdk/dist/esm/index.js","bowser":"../node_modules/bowser/es5.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","authereum":[["dist.b983fa8a.js","../node_modules/authereum/dist/index.js"],"dist.b983fa8a.js.map","../node_modules/authereum/dist/index.js"]}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60811" + '/');

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
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/bnc-onboard/dist/esm/authereum-42ff9003.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/authereum-42ff9003.54fc9eab.js.map