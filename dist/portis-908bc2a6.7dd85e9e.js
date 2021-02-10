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
})({"../node_modules/bnc-onboard/dist/esm/portis-908bc2a6.js":[function(require,module,exports) {
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

var portisIcon = "\n  <svg height=\"40\" viewBox=\"0 0 26 40\" width=\"26\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\"><path d=\"m.38447675 22.9277905.93812327-.4094678 11.54391448-5.0174216 12.4724258 5.4268894-4.6829268 9.6753574-11.46701915 1.6205695-8.60843446-9.3004926z\" fill=\"#133444\"/><path d=\"m22.7456446 16.9549441c-2.0594671-2.4810138-4.9778453-4.095319-8.1739757-4.5214466l-.2037727-.0269133c-.9972573-.1211147-2.0055061-.1211147-3.0027634 0l-.2056951.024991c-3.19683486.4253443-6.11569177 2.0406007-8.17397573 4.5233689l-.51904361.861228-.86315031 1.4340982-.63054187 1.0496216c0 .024991-.02499099.0595939-.03460291.0845849v.0173014l1.38988346.8285474 8.84296527 5.2288838 1.7070768 1.0073291v-12.4954944l-1.7070768.7689535v-1.8647122l1.7070768-.7689535 1.7051544.7689535 8.6776402 3.9504986z\" fill=\"#c42370\"/><path d=\"m25.7234381 26.0324402c-.0248538 4.0988643-1.872927 7.97397-5.0424337 10.5731107-1.2054271.9911619-2.5812108 1.7546176-4.0600744 2.2530337-1.2073828.3962299-2.4702232.5974018-3.7409588.5959469-7.11281993 0-12.8799712-6.3227281-12.8799712-13.4220913.00397806-1.0496754.13304725-2.0951358.38447675-3.1142617l12.47242585 7.3800313 12.4743482-7.3800313c.2623236 1.017244.3941046 2.0637403.3921873 3.1142617z\" fill=\"#1c4d6b\"/><path d=\"m11.3651328 12.4161961 1.5013817.6747567-1.7070768.7747206v-1.5436741z\" fill=\"#000\"/><path d=\"m11.1594377 15.7438424 1.7070768-.7766431v12.4993392l-1.7070768-1.0073291z\" fill=\"#000\"/><path d=\"m12.8665145 14.9671993v12.4993392l11.9533822-7.0647603z\" fill=\"#1d4259\"/><path d=\"m12.8665145.56470023v14.40249907l11.9533822 5.4345789z\" fill=\"#4b6b9a\"/><path d=\"m12.8665145 14.9671993v12.4954944l-1.7070768-1.007329-10.22900396-6.0535865h-.01730146.02499099c0-.024991.02691338-.0595939.03460291-.0845849l1.49369218-2.4837198 8.69301934-3.9408867v1.8589451z\" fill=\"#343535\"/><path d=\"m12.8665145 14.9671993v12.4993392l-1.7070768-1.0073291-10.23861588-6.0478193-.00768954-.0096119.01730146-.0173014 10.22900396-4.6406344z\" fill=\"#3e5578\"/><path d=\"m12.8665145.56470023v14.40249907l-11.95338222 5.4345789z\" fill=\"#6db2d8\"/><g fill=\"#335f8a\"><path d=\"m8.02787456 38.4298931c.18070408.0768953.35948577.1537907.53826746.2210741-.17878169-.0672834-.35756338-.1441788-.53826746-.2210741z\"/><path d=\"m8.56614202 38.6509672c.17878169.0692058.36717529.1384116.55364652.1922384-.18647123-.0538268-.37486483-.1153431-.55364652-.1922384z\"/><path d=\"m9.59077256 39.000841c.14417878.0442149.28066803.0768954.42484684.1114983-.13648928-.0346029-.28066806-.0768953-.42484684-.1114983z\"/></g><path d=\"m.38447675 22.9277905 12.47242585 7.3800312c-.1695149 1.1206915-.4701886 2.2175699-.8958309 3.2680524-1.0034843 2.4222035-3.01045293 4.9751291-6.91865911 3.0277544-3.17007392-2.5978633-5.0183503-6.4726906-5.04241259-10.5711883.00728258-1.0462943.13630945-2.0881863.38447675-3.1046497z\" fill=\"#6db2d8\"/><path d=\"m20.6733149 36.6036285-.0346029.0269134c-.0672834.0499819-.1287997.1018863-.1922384.1537907l-.0173014.015379c-.0672835.0595939-.1441788.1114983-.2133846.1634027-.0758242.0613437-.1554406.1178457-.2383756.1691697-.0828404.0521651-.1624447.1093005-.2383756.1710922-.0768953.0595939-.1461012.0941968-.2133846.1461012l-.0442148.0249909c-.074973.0519044-.1518683.0941968-.2210742.1441788 0 0-.0173014 0-.0249909.0173015-.0768954.0519043-.1537907.0941968-.2306861.1461011-.0768953.0519044-.1710921.0941968-.255677.1441788s-.1710922.0941968-.2556771.1364893h-.0096119l-.255677.1268773c-.0845849.0422924-.1710922.0865073-.265289.1287997-.0941968.0422925-.1787817.0845849-.2633666.1191878-.1787816.0768954-.3594857.1537907-.5382674.2210741-.1787817.0672835-.3671753.1364893-.5536465.1922384-.0729076.0274308-.147369.0505395-.2229965.0692058l-.2460652.0768954c-.1461011.0422924-.2825904.0768953-.4267692.1114982-.0519043.0153791-.1114982.024991-.1634026.0422925l-.0922744.0173014-.2306861.049982c-.0768953.0173015-.1364892.0269134-.2133846.0422924-.0632285.0158437-.1274537.0274043-.1922383.034603-.0692058.0096119-.1461012.0269133-.2133846.0346029-.0346029 0-.0692058 0-.1018864.0173014l-.1634026.0173015h-.0845849c-.0590384.0105165-.1188222.016302-.1787817.0173014-.0738847.010539-.1483704.0163181-.2229965.0173015-.0595939 0-.1095758 0-.1710921 0s-.1018864.0096119-.1518683.0096119c-.0595939 0-.1191878 0-.1710922 0s-.1614802 0-.2383756 0h-.5113541c-.0800209.0050111-.160277.0050111-.2402979 0-.0595939 0-.1191878 0-.1787817 0-.0519044 0-.1018864-.0096119-.1537907-.0096119-.0519044 0-.1114983 0-.1710922 0-.0733428-.0095846-.1471332-.0153595-.2210741-.0173015-.0595939 0-.1191878 0-.1787817-.0173014h-.0865073c-.0532121-.0105119-.1072489-.0163015-.1614802-.0173015-.0345121-.0018508-.0686979-.0076559-.1018863-.0173014-.0718302-.0066855-.1431228-.0182465-.2133846-.0346029-.0692059 0-.1287997-.024991-.1922384-.034603-.0718469-.0101919-.1430817-.0243105-.2133846-.0422924-.0692058-.0173014-.1537907-.0326805-.2306861-.049982l-.0941968-.0173014c-.0593497-.0042617-.1184021-.0119642-.17685927-.0230686-.14610116-.0346029-.29027995-.0768954-.42676919-.1114983l-.25567704-.0768953c-.07689535-.024991-.1537907-.0422925-.22299652-.0692059-.19223837-.0595938-.3671753-.1268773-.55364652-.1922383-.18647122-.0653611-.3671753-.1441788-.53826745-.2210742-.08458489-.0422924-.17878169-.0768953-.26528896-.1191878l-.26336657-.1287997-.25567704-.1268773c-.08458489-.0422924-.16916977-.0941968-.25567704-.1364892-.08650727-.0422925-.17109216-.0941968-.25567704-.1441788-.08458489-.049982-.1537907-.0941968-.23068605-.1461012l-.02499099-.0173014c-.07756662-.0428621-.1520765-.0910366-.22299652-.1441788l-.04229244-.024991c-.06728343-.0422925-.14417878-.0941968-.2133846-.1461012-.06920581-.0519043-.16148023-.1095759-.23837558-.1710921-.07689535-.0615163-.16148024-.1095759-.23837559-.1691698l-.2133846-.1634026-.01730145-.0153791c-.06920582-.0519044-.12879971-.1038087-.19223838-.1537907l-.0346029-.0269134c3.89859425 1.9454524 5.92094194-.6132404 6.92058154-3.0200648.4259299-1.0505261.7272373-2.1473626.8977532-3.2680524.1691803 1.1238755.4698526 2.2239751.8958308 3.2776643 1.0111739 2.3779887 3.0258321 4.9386038 6.9244263 2.9912291z\" fill=\"#529bba\"/><path d=\"m15.7077977 39.1123393c.1441788-.0346029.2902799-.0768953.4267692-.1114983-.1364893.034603-.2825904.0768954-.4267692.1114983z\" fill=\"#335f8a\"/><path d=\"m16.611318 38.8489727c.1922384-.0595939.3671753-.1287997.5555689-.1922383-.180704.0711281-.3671753.1326444-.5555689.1922383z\" fill=\"#335f8a\"/><path d=\"m17.1668869 38.6509672c.1787817-.0672834.3575634-.1441788.5363451-.2210741-.1787817.0768953-.3575634.1537907-.5363451.2210741z\" fill=\"#335f8a\"/><path d=\"m25.723417 26.0324402c-.0248327 4.0988643-1.8729059 7.97397-5.0424126 10.5731107-3.8985942 1.9454523-5.9209419-.6151628-6.9205815-3.0200649-.4250714-1.0506755-.7257265-2.1474858-.8958308-3.2680524l12.4724258-7.3800312c.2564764 1.0116964.3862701 2.0513377.3863991 3.0950378z\" fill=\"#4b6b9a\"/></g></svg>\n";

function portis(options) {
  var apiKey = options.apiKey,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Portis',
    iconSrc: iconSrc,
    svg: svg || portisIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var _yield$import, Portis, instance, provider, BigNumber;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return require("_bundle_loader")(require.resolve('@portis/web3'));

              case 2:
                _yield$import = _context.sent;
                Portis = _yield$import["default"];
                instance = new Portis(apiKey, (0, _onboardDd8224fc.n)(networkId));
                provider = instance.provider;
                BigNumber = helpers.BigNumber;
                return _context.abrupt("return", {
                  provider: provider,
                  instance: instance,
                  "interface": {
                    name: 'Portis',
                    connect: provider.enable,
                    disconnect: function disconnect() {
                      instance.logout();
                      provider.stop();
                    },
                    address: {
                      onChange: function onChange(func) {
                        instance.onLogin(function (address) {
                          func(address);
                          provider.address = address;
                        });
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(Number(instance.config.network.chainId));
                      }
                    },
                    balance: {
                      get: function get() {
                        return new Promise(function (resolve) {
                          // add setTimeout to put at the end of event loop to make sure address is available
                          setTimeout(function () {
                            if (!provider.address) {
                              resolve(null);
                              return;
                            }

                            provider.sendAsync({
                              jsonrpc: '2.0',
                              method: 'eth_getBalance',
                              params: [provider.address, 'latest'],
                              id: 1
                            }, function (e, res) {
                              resolve(BigNumber(res.result).toString(10));
                            });
                          }, 1);
                        });
                      }
                    },
                    dashboard: function dashboard() {
                      return (0, _onboardDd8224fc.o)('https://wallet.portis.io/');
                    }
                  }
                });

              case 8:
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
    type: 'sdk',
    desktop: true,
    mobile: true,
    preferred: preferred
  };
}

var _default = portis;
exports.default = _default;
},{"regenerator-runtime/runtime":"../node_modules/regenerator-runtime/runtime.js","./onboard-dd8224fc.js":"../node_modules/bnc-onboard/dist/esm/onboard-dd8224fc.js","bignumber.js":"../node_modules/bignumber.js/bignumber.js","bnc-sdk":"../node_modules/bnc-onboard/node_modules/bnc-sdk/dist/esm/index.js","bowser":"../node_modules/bowser/es5.js","_bundle_loader":"../node_modules/parcel-bundler/src/builtins/bundle-loader.js","@portis/web3":[["umd.11625c09.js","../node_modules/@portis/web3/umd/index.js"],"umd.11625c09.js.map","../node_modules/@portis/web3/umd/index.js"]}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("../node_modules/bnc-onboard/dist/esm/portis-908bc2a6.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/portis-908bc2a6.7dd85e9e.js.map