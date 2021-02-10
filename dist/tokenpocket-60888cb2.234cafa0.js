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
})({"../node_modules/bnc-onboard/dist/esm/tokenpocket-60888cb2.js":[function(require,module,exports) {
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

function tokenpocket(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'TokenPocket',
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
                  "interface": getProviderName(provider) === 'TokenPocket' && createModernProviderInterface(provider) || null
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
    link: 'https://tokenpocket.pro',
    installMessage: _contentEeaca1cc.m,
    mobile: true,
    preferred: preferred
  };
}

var _default = tokenpocket;
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
//# sourceMappingURL=/tokenpocket-60888cb2.234cafa0.js.map