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
})({"../node_modules/bnc-onboard/dist/esm/atoken-8b5ffc07.js":[function(require,module,exports) {
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

function atoken(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'AToken',
    iconSrc: iconSrc || img,
    iconSrcSet: iconSrc || img$1,
    svg: svg,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createModernProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;
                provider = window.ethereum || window.web3 && window.web3.currentProvider;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": getProviderName(provider) === 'AToken' && createModernProviderInterface(provider) || null
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://www.atoken.com',
    installMessage: _contentEeaca1cc.m,
    mobile: true,
    preferred: preferred
  };
}

var _default = atoken;
exports.default = _default;
},{"./content-eeaca1cc.js":"../node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/atoken-8b5ffc07.7a99ae43.js.map