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
})({"../node_modules/bnc-onboard/dist/esm/opera-e0292bed.js":[function(require,module,exports) {
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

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABtlBMVEVHcEyyDxH8SEj7GSvmGyv/SUn9IDDqFyf/Gy31JzL/Giz+Giy+FRmwChPmJS3cISnyFiqzCBX+S0u4BRerBg7/Gi3/TU39JzO4DhjkNTe0DxP+SUnHFSKvBRT/S0uvCBKuBBKpABWnABTnFCT4GCr+SkvSGSTdECH9SEjVFSTTGSHhNDX/Skr+Giz6Giv5RUWyCBakAwr5GSqtART/SkrKCRz+GSy7DhfaDiHvFynoFCTtFCjxFijSEiPNFyHmEiX+Gyr2Fyr0QkLwP0D0Q0PFGyP/S0qjBQTiLTX/Giy5CBq3CRr/Gy2yDQ/QJyf8GizYKyvLCx7jEybABRvqOjrYDyHaDyLzQEHsFSjLJSXPJibVKSnaMDCrARX/Gi3/TEz+Skr/Gy3/Gy78Giz+Giz/S0v0FyngESPqOTrvFSjhMzSmBgb2Q0T5R0i7FhaxCAvNIyP4GSvBBxq3ExPTDR/AGRnXDiHGChuqCgrrFCfeMDDyQEDUKSruPT6xDw/PCx/oEybJCh3cDyLtFSfHICDYLS3mNzfRJiahAwPwOjrGGh7kEyW1Axe7BRnEHx/NFiTVHyutAhXkSSDHAAAAX3RSTlMADS2/CBtPA/wRruDnKCNXO0q1zd33+UaAkpGlND3cw+tukSnO8c/zYsMemj7Xin0doTL4wtSdsv6w1PTf5J2RePb1vNpomn/obPL+ZWHx77T+1uqgZLDibLPi+YSq5l1x/o4AAAKMSURBVHheddNld+JgEIbhARJCcEuhQEupu7ts3dfdE9Sl6u6y/o8XJkkX+i7X5/s8k5wAFGPNE6qvHKfTLnZTUBLj6NdpAgF/TiDAtbV3l+jUKn++wiy4GokEOa0ZSEatP1dhthpdyyZvbpLZ7YZ2lpjTyVnwLFfJsrYaKPKYk7u4vmt+vsue3EmiHXtFQcYsaqROM/xEATmUxXu0g7JVFua+U3NyN9QJEoXrSGI3gKRGJ3datuCMa10MM14FIEorP19bMxSgBjLrKOMUj6s1fhGnhiIG/WYG6fE4pZIHtQwUc95togsX5DjkQY0DHmjW/0QX+vw79suDtRTx8R+tXKCVWQBWFwihQDsQTCui6w8AZk0omBcKqoFgfHqNDj6yMOEPotAzIxCo+ssD9MkDqpAY+ttYID3fu0R7JtCtikK1DJBaEnso8RkmpTCoAhKUxxLoqgUmI6IS4e0VipXDaETy39Ovb2PotgOGInEUGWWBNL1/iPbV8D5yjuIjNUBQzKT20ZQSukfOd1HcBATlVAqlZ1ighndPUHwcCI1CGgluABjf/YZOXhIPyVh5AfGNAGBuiEqI28o6PpzHV+Y3mLfRMxRtUjwYnMt1GHYA4OTgFhp8w0Ch1vtBWvp5Dm6grTFPYUn3SoNljSBqrt84RhtNxn8l7ZY7NwUST9+LU3Rcb6IxZdhWq3S3zErDPUvftuh0rNyhpGlla0cldjxf1quEAhbbmuTXwrR7zlrJ8/mKD9dZizpgPAOvfojWfsdSaUEIhwUhnXrXQvxBOp22pe+i5buDROzwMJZYaJpVAKnCZavq+SNZXl7Se50GIOF93xebPR/3VNm9XT7MSqSUweKrrq6e91V0MlDkLyDwITNcRd/tAAAAAElFTkSuQmCC";
var img$1 = "data:image/png;base64,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";

function opera(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Opera',
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
                  "interface": provider && getProviderName(provider) === undefined ? createModernProviderInterface(provider) : null
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
    link: 'https://www.opera.com/',
    installMessage: _contentEeaca1cc.e,
    desktop: true,
    mobile: true,
    preferred: preferred,
    osExclusions: ['iOS']
  };
}

var _default = opera;
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
//# sourceMappingURL=/opera-e0292bed.bf8420b9.js.map