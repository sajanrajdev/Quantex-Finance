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
})({"../node_modules/web3-provider-engine/util/stoplight.js":[function(require,module,exports) {
const EventEmitter = require('events').EventEmitter
const inherits = require('util').inherits

module.exports = Stoplight


inherits(Stoplight, EventEmitter)

function Stoplight(){
  const self = this
  EventEmitter.call(self)
  self.isLocked = true
}

Stoplight.prototype.go = function(){
  const self = this
  self.isLocked = false
  self.emit('unlock')
}

Stoplight.prototype.stop = function(){
  const self = this
  self.isLocked = true
  self.emit('lock')
}

Stoplight.prototype.await = function(fn){
  const self = this
  if (self.isLocked) {
    self.once('unlock', fn)
  } else {
    setTimeout(fn)
  }
}
},{"events":"../node_modules/events/events.js","util":"../node_modules/util/util.js"}],"../node_modules/web3-provider-engine/util/rpc-cache-utils.js":[function(require,module,exports) {
const stringify = require('json-stable-stringify')

module.exports = {
  cacheIdentifierForPayload: cacheIdentifierForPayload,
  canCache: canCache,
  blockTagForPayload: blockTagForPayload,
  paramsWithoutBlockTag: paramsWithoutBlockTag,
  blockTagParamIndex: blockTagParamIndex,
  cacheTypeForPayload: cacheTypeForPayload,
}

function cacheIdentifierForPayload(payload, opts = {}){
  if (!canCache(payload)) return null
  const { includeBlockRef } = opts
  const params = includeBlockRef ? payload.params : paramsWithoutBlockTag(payload)
  return payload.method + ':' + stringify(params)
}

function canCache(payload){
  return cacheTypeForPayload(payload) !== 'never'
}

function blockTagForPayload(payload){
  var index = blockTagParamIndex(payload);

  // Block tag param not passed.
  if (index >= payload.params.length) {
    return null;
  }

  return payload.params[index];
}

function paramsWithoutBlockTag(payload){
  var index = blockTagParamIndex(payload);

  // Block tag param not passed.
  if (index >= payload.params.length) {
    return payload.params;
  }

  // eth_getBlockByNumber has the block tag first, then the optional includeTx? param
  if (payload.method === 'eth_getBlockByNumber') {
    return payload.params.slice(1);
  }

  return payload.params.slice(0,index);
}

function blockTagParamIndex(payload){
  switch(payload.method) {
    // blockTag is third param
    case 'eth_getStorageAt':
      return 2
    // blockTag is second param
    case 'eth_getBalance':
    case 'eth_getCode':
    case 'eth_getTransactionCount':
    case 'eth_call':
    case 'eth_estimateGas':
      return 1
    // blockTag is first param
    case 'eth_getBlockByNumber':
      return 0
    // there is no blockTag
    default:
      return undefined
  }
}

function cacheTypeForPayload(payload) {
  switch (payload.method) {
    // cache permanently
    case 'web3_clientVersion':
    case 'web3_sha3':
    case 'eth_protocolVersion':
    case 'eth_getBlockTransactionCountByHash':
    case 'eth_getUncleCountByBlockHash':
    case 'eth_getCode':
    case 'eth_getBlockByHash':
    case 'eth_getTransactionByHash':
    case 'eth_getTransactionByBlockHashAndIndex':
    case 'eth_getTransactionReceipt':
    case 'eth_getUncleByBlockHashAndIndex':
    case 'eth_getCompilers':
    case 'eth_compileLLL':
    case 'eth_compileSolidity':
    case 'eth_compileSerpent':
    case 'shh_version':
      return 'perma'

    // cache until fork
    case 'eth_getBlockByNumber':
    case 'eth_getBlockTransactionCountByNumber':
    case 'eth_getUncleCountByBlockNumber':
    case 'eth_getTransactionByBlockNumberAndIndex':
    case 'eth_getUncleByBlockNumberAndIndex':
      return 'fork'

    // cache for block
    case 'eth_gasPrice':
    case 'eth_getBalance':
    case 'eth_getStorageAt':
    case 'eth_getTransactionCount':
    case 'eth_call':
    case 'eth_estimateGas':
    case 'eth_getFilterLogs':
    case 'eth_getLogs':
    case 'eth_blockNumber':
      return 'block'

    // never cache
    case 'net_version':
    case 'net_peerCount':
    case 'net_listening':
    case 'eth_syncing':
    case 'eth_sign':
    case 'eth_coinbase':
    case 'eth_mining':
    case 'eth_hashrate':
    case 'eth_accounts':
    case 'eth_sendTransaction':
    case 'eth_sendRawTransaction':
    case 'eth_newFilter':
    case 'eth_newBlockFilter':
    case 'eth_newPendingTransactionFilter':
    case 'eth_uninstallFilter':
    case 'eth_getFilterChanges':
    case 'eth_getWork':
    case 'eth_submitWork':
    case 'eth_submitHashrate':
    case 'db_putString':
    case 'db_getString':
    case 'db_putHex':
    case 'db_getHex':
    case 'shh_post':
    case 'shh_newIdentity':
    case 'shh_hasIdentity':
    case 'shh_newGroup':
    case 'shh_addToGroup':
    case 'shh_newFilter':
    case 'shh_uninstallFilter':
    case 'shh_getFilterChanges':
    case 'shh_getMessages':
      return 'never'
  }
}

},{"json-stable-stringify":"../node_modules/json-stable-stringify/index.js"}],"../node_modules/web3-provider-engine/util/random-id.js":[function(require,module,exports) {
module.exports = createRandomId


function createRandomId () {
  // random id
  return Math.floor(Number.MAX_SAFE_INTEGER * Math.random())
}
},{}],"../node_modules/web3-provider-engine/util/create-payload.js":[function(require,module,exports) {
const getRandomId = require('./random-id.js')
const extend = require('xtend')

module.exports = createPayload


function createPayload(data){
  return extend({
    // defaults
    id: getRandomId(),
    jsonrpc: '2.0',
    params: [],
    // user-specified
  }, data)
}

},{"./random-id.js":"../node_modules/web3-provider-engine/util/random-id.js","xtend":"../node_modules/xtend/immutable.js"}],"../node_modules/web3-provider-engine/index.js":[function(require,module,exports) {
const EventEmitter = require('events').EventEmitter
const inherits = require('util').inherits
const ethUtil = require('ethereumjs-util')
const EthBlockTracker = require('eth-block-tracker')
const map = require('async/map')
const eachSeries = require('async/eachSeries')
const Stoplight = require('./util/stoplight.js')
const cacheUtils = require('./util/rpc-cache-utils.js')
const createPayload = require('./util/create-payload.js')
const noop = function(){}

module.exports = Web3ProviderEngine


inherits(Web3ProviderEngine, EventEmitter)

function Web3ProviderEngine(opts) {
  const self = this
  EventEmitter.call(self)
  self.setMaxListeners(30)
  // parse options
  opts = opts || {}

  // block polling
  const directProvider = { sendAsync: self._handleAsync.bind(self) }
  const blockTrackerProvider = opts.blockTrackerProvider || directProvider
  self._blockTracker = opts.blockTracker || new EthBlockTracker({
    provider: blockTrackerProvider,
    pollingInterval: opts.pollingInterval || 4000,
    setSkipCacheFlag: true,
  })

  // set initialization blocker
  self._ready = new Stoplight()

  // local state
  self.currentBlock = null
  self._providers = []
}

// public

Web3ProviderEngine.prototype.start = function(cb = noop){
  const self = this

  // trigger start
  self._ready.go()

  // on new block, request block body and emit as events
  self._blockTracker.on('latest', (blockNumber) => {
    // get block body
    self._getBlockByNumberWithRetry(blockNumber, (err, block) => {
      if (err) {
        this.emit('error', err)
        return
      }
      if (!block) {
        console.log(block)
        this.emit('error', new Error("Could not find block"))
        return
      }
      const bufferBlock = toBufferBlock(block)
      // set current + emit "block" event
      self._setCurrentBlock(bufferBlock)
      // emit other events
      self.emit('rawBlock', block)
      self.emit('latest', block)
    })
  })

  // forward other events
  self._blockTracker.on('sync', self.emit.bind(self, 'sync'))
  self._blockTracker.on('error', self.emit.bind(self, 'error'))

  // update state
  self._running = true
  // signal that we started
  self.emit('start')
}

Web3ProviderEngine.prototype.stop = function(){
  const self = this
  // stop block polling by removing event listeners
  self._blockTracker.removeAllListeners()
  // update state
  self._running = false
  // signal that we stopped
  self.emit('stop')
}

Web3ProviderEngine.prototype.isRunning = function(){
  const self = this
  return self._running
}

Web3ProviderEngine.prototype.addProvider = function(source, index){
  const self = this
  if (typeof index === 'number') {
    self._providers.splice(index, 0, source)
  } else {
    self._providers.push(source)
  }
  source.setEngine(this)
}

Web3ProviderEngine.prototype.removeProvider = function(source){
  const self = this
  const index = self._providers.indexOf(source)
  if (index < 0) throw new Error('Provider not found.')
  self._providers.splice(index, 1)
}

Web3ProviderEngine.prototype.send = function(payload){
  throw new Error('Web3ProviderEngine does not support synchronous requests.')
}

Web3ProviderEngine.prototype.sendAsync = function(payload, cb){
  const self = this
  self._ready.await(function(){

    if (Array.isArray(payload)) {
      // handle batch
      map(payload, self._handleAsync.bind(self), cb)
    } else {
      // handle single
      self._handleAsync(payload, cb)
    }

  })
}

// private

Web3ProviderEngine.prototype._getBlockByNumberWithRetry = function(blockNumber, cb) {
  const self = this

  let retriesRemaining = 5

  attemptRequest()
  return

  function attemptRequest () {
    self._getBlockByNumber(blockNumber, afterRequest)
  }

  function afterRequest (err, block) {
    // anomalous error occurred
    if (err) return cb(err)
    // block not ready yet
    if (!block) {
      if (retriesRemaining > 0) {
        // wait 1s then try again
        retriesRemaining--
        setTimeout(function () {
          attemptRequest()
        }, 1000)
        return
      } else {
        // give up, return a null block
        cb(null, null)
        return
      }
    }
    // otherwise return result
    cb(null, block)
    return
  }
}


Web3ProviderEngine.prototype._getBlockByNumber = function(blockNumber, cb) {
  const req = createPayload({ method: 'eth_getBlockByNumber', params: [blockNumber, false], skipCache: true })
  this._handleAsync(req, (err, res) => {
    if (err) return cb(err)
    return cb(null, res.result)
  })
}

Web3ProviderEngine.prototype._handleAsync = function(payload, finished) {
  var self = this
  var currentProvider = -1
  var result = null
  var error = null

  var stack = []

  next()

  function next(after) {
    currentProvider += 1
    stack.unshift(after)

    // Bubbled down as far as we could go, and the request wasn't
    // handled. Return an error.
    if (currentProvider >= self._providers.length) {
      end(new Error('Request for method "' + payload.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'))
    } else {
      try {
        var provider = self._providers[currentProvider]
        provider.handleRequest(payload, next, end)
      } catch (e) {
        end(e)
      }
    }
  }

  function end(_error, _result) {
    error = _error
    result = _result

    eachSeries(stack, function(fn, callback) {

      if (fn) {
        fn(error, result, callback)
      } else {
        callback()
      }
    }, function() {

      var resultObj = {
        id: payload.id,
        jsonrpc: payload.jsonrpc,
        result: result
      }

      if (error != null) {
        resultObj.error = {
          message: error.stack || error.message || error,
          code: -32000
        }
        // respond with both error formats
        finished(error, resultObj)
      } else {
        finished(null, resultObj)
      }
    })
  }
}

//
// from remote-data
//

Web3ProviderEngine.prototype._setCurrentBlock = function(block){
  const self = this
  self.currentBlock = block
  self.emit('block', block)
}

// util

function toBufferBlock (jsonBlock) {
  return {
    number:           ethUtil.toBuffer(jsonBlock.number),
    hash:             ethUtil.toBuffer(jsonBlock.hash),
    parentHash:       ethUtil.toBuffer(jsonBlock.parentHash),
    nonce:            ethUtil.toBuffer(jsonBlock.nonce),
    mixHash:          ethUtil.toBuffer(jsonBlock.mixHash),
    sha3Uncles:       ethUtil.toBuffer(jsonBlock.sha3Uncles),
    logsBloom:        ethUtil.toBuffer(jsonBlock.logsBloom),
    transactionsRoot: ethUtil.toBuffer(jsonBlock.transactionsRoot),
    stateRoot:        ethUtil.toBuffer(jsonBlock.stateRoot),
    receiptsRoot:     ethUtil.toBuffer(jsonBlock.receiptRoot || jsonBlock.receiptsRoot),
    miner:            ethUtil.toBuffer(jsonBlock.miner),
    difficulty:       ethUtil.toBuffer(jsonBlock.difficulty),
    totalDifficulty:  ethUtil.toBuffer(jsonBlock.totalDifficulty),
    size:             ethUtil.toBuffer(jsonBlock.size),
    extraData:        ethUtil.toBuffer(jsonBlock.extraData),
    gasLimit:         ethUtil.toBuffer(jsonBlock.gasLimit),
    gasUsed:          ethUtil.toBuffer(jsonBlock.gasUsed),
    timestamp:        ethUtil.toBuffer(jsonBlock.timestamp),
    transactions:     jsonBlock.transactions,
  }
}

},{"events":"../node_modules/events/events.js","util":"../node_modules/util/util.js","ethereumjs-util":"../node_modules/ethereumjs-util/dist/index.js","eth-block-tracker":"../node_modules/eth-block-tracker/src/polling.js","async/map":"../node_modules/async/map.js","async/eachSeries":"../node_modules/async/eachSeries.js","./util/stoplight.js":"../node_modules/web3-provider-engine/util/stoplight.js","./util/rpc-cache-utils.js":"../node_modules/web3-provider-engine/util/rpc-cache-utils.js","./util/create-payload.js":"../node_modules/web3-provider-engine/util/create-payload.js"}],"../node_modules/web3-provider-engine/subproviders/subprovider.js":[function(require,module,exports) {
const createPayload = require('../util/create-payload.js')

module.exports = SubProvider

// this is the base class for a subprovider -- mostly helpers


function SubProvider() {

}

SubProvider.prototype.setEngine = function(engine) {
  const self = this
  if (self.engine) return
  self.engine = engine
  engine.on('block', function(block) {
    self.currentBlock = block
  })

  engine.on('start', function () {
    self.start()
  })

  engine.on('stop', function () {
    self.stop()
  })
}

SubProvider.prototype.handleRequest = function(payload, next, end) {
  throw new Error('Subproviders should override `handleRequest`.')
}

SubProvider.prototype.emitPayload = function(payload, cb){
  const self = this
  self.engine.sendAsync(createPayload(payload), cb)
}

// dummies for overriding

SubProvider.prototype.stop = function () {}

SubProvider.prototype.start = function () {}

},{"../util/create-payload.js":"../node_modules/web3-provider-engine/util/create-payload.js"}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/classes.js":[function(require,module,exports) {

const safeStringify = require('fast-safe-stringify')

/**
 * @class JsonRpcError
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP 1474.
 * Permits any integer error code.
 */
class EthereumRpcError extends Error {

  /**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor (code, message, data) {

    if (!Number.isInteger(code)) throw new Error(
      '"code" must be an integer.'
    )
    if (!message || typeof message !== 'string') throw new Error(
      '"message" must be a nonempty string.'
    )

    super(message)
    this.code = code
    if (data !== undefined) this.data = data
  }

  /**
   * Returns a plain object with all public class properties.
   * 
   * @returns {object} The serialized error. 
   */
  serialize() {
    const serialized = {
      code: this.code,
      message: this.message,
    }
    if (this.data !== undefined) serialized.data = this.data
    if (this.stack) serialized.stack = this.stack
    return serialized
  }

  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   * 
   * @returns {string} The serialized error as a string.
   */
  toString() {
    return safeStringify(
      this.serialize(),
      stringifyReplacer,
      2
    )
  }
}

/**
 * @class EthereumRpcError
 * Error subclass implementing Ethereum Provider errors per EIP 1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */
class EthereumProviderError extends EthereumRpcError {

  /**
   * Create an Ethereum JSON RPC error.
   * 
   * @param {number} code - The integer error code, in the [ 1000 <= 4999 ] range.
   * @param {string} message - The string message.
   * @param {any} [data] - The error data.
   */
  constructor(code, message, data) {

    if (!isValidEthProviderCode(code)) {
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      )
    }

    super(code, message, data)
  }
}

// Internal

function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999
}

function stringifyReplacer(_, value) {
  if (value === '[Circular]') {
    return
  }
  return value
}

// Exports

module.exports =  {
  EthereumRpcError,
  EthereumProviderError
}

},{"fast-safe-stringify":"../node_modules/fast-safe-stringify/index.js"}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorValues.json":[function(require,module,exports) {
module.exports = {
  "-32700": {
    "standard": "JSON RPC 2.0",
    "message": "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    "standard": "JSON RPC 2.0",
    "message": "The JSON sent is not a valid Request object."
  },
  "-32601": {
    "standard": "JSON RPC 2.0",
    "message": "The method does not exist / is not available."
  },
  "-32602": {
    "standard": "JSON RPC 2.0",
    "message": "Invalid method parameter(s)."
  },
  "-32603": {
    "standard": "JSON RPC 2.0",
    "message": "Internal JSON-RPC error."
  },
  "-32000": {
    "standard": "EIP 1474",
    "message": "Invalid input."
  },
  "-32001": {
    "standard": "EIP 1474",
    "message": "Resource not found."
  },
  "-32002": {
    "standard": "EIP 1474",
    "message": "Resource unavailable."
  },
  "-32003": {
    "standard": "EIP 1474",
    "message": "Transaction rejected."
  },
  "-32004": {
    "standard": "EIP 1474",
    "message": "Method not supported."
  },
  "4001": {
    "standard": "EIP 1193",
    "message": "User rejected the request."
  },
  "4100": {
    "standard": "EIP 1193",
    "message": "The requested account and/or method has not been authorized by the user."
  },
  "4200": {
    "standard": "EIP 1193",
    "message": "The requested method is not supported by this Ethereum provider."
  }
}
;
},{}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorCodes.json":[function(require,module,exports) {
module.exports = {
  "rpc": {
    "invalidInput": -32000,
    "resourceNotFound": -32001,
    "resourceUnavailable": -32002,
    "transactionRejected": -32003,
    "methodNotSupported": -32004,
    "parse": -32700,
    "invalidRequest": -32600,
    "methodNotFound": -32601,
    "invalidParams": -32602,
    "internal": -32603
  },
  "provider": {
    "userRejectedRequest": 4001,
    "unauthorized": 4100,
    "unsupportedMethod": 4200
  }
}
;
},{}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/utils.js":[function(require,module,exports) {

const errorValues = require('./errorValues.json')
const FALLBACK_ERROR_CODE = require('./errorCodes.json').rpc.internal
const { EthereumRpcError } = require('./classes')

const JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.'

const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.'

const FALLBACK_ERROR = {
  code: FALLBACK_ERROR_CODE,
  message: getMessageFromCode(FALLBACK_ERROR_CODE)
}

/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 * 
 * @param {number} code - The integer error code
 * @param {string} fallbackMessage - The fallback message
 * @return {string} The corresponding message or the fallback message
 */
function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {

  if (Number.isInteger(code)) {

    const codeString = code.toString()
    if (errorValues[codeString]) return errorValues[codeString].message

    if (isJsonRpcServerError(code)) return JSON_RPC_SERVER_ERROR_MESSAGE

    // TODO: allow valid codes and messages to be extended
    // // EIP 1193 Status Codes
    // if (code >= 4000 && code <= 4999) return Something?
  }
  return fallbackMessage
}

/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 * 
 * @param {number} code - The code to check
 * @return {boolean} true if the code is valid, false otherwise.
 */
function isValidCode(code) {

  if (!Number.isInteger(code)) return false

  const codeString = code.toString()
  if (errorValues[codeString]) return true

  if (isJsonRpcServerError(code)) return true

  // TODO: allow valid codes and messages to be extended
  // // EIP 1193 Status Codes
  // if (code >= 4000 && code <= 4999) return true

  return false
}

/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 * Adds a 'stack' property if it exists on the given error.
 *
 * @param {any} error - The error to serialize.
 * @param {object} fallbackError - The custom fallback error values if the
 * given error is invalid.
 * @return {object} A standardized error object.
 */
function serializeError (error, fallbackError = FALLBACK_ERROR) {

  if (
    !fallbackError || 
    !Number.isInteger(fallbackError.code) ||
    typeof fallbackError.message !== 'string'
  ) {
    throw new Error(
      'fallbackError must contain integer number code and string message.'
    )
  }

  if (error instanceof EthereumRpcError) {
    return error.serialize()
  }

  const serialized = {}

  if (error && isValidCode(error.code)) {

    serialized.code = error.code

    if (error.message && typeof error.message === 'string') {
      serialized.message = error.message
      if (error.hasOwnProperty('data')) serialized.data = error.data
    } else {
      serialized.message = getMessageFromCode(serialized.code)
      serialized.data = { originalError: assignOriginalError(error) }
    }

  } else {
    serialized.code = fallbackError.code
    serialized.message = (
      error && error.message
        ? error.message
        : fallbackError.message
    )
    serialized.data = { originalError: assignOriginalError(error) }
  }

  if (error && error.stack) serialized.stack = error.stack
  return serialized
}

// Internal

function isJsonRpcServerError (code) {
  return code >= -32099 && code <= -32000
}

function assignOriginalError (error) {
  if (error && typeof error === 'object' && !Array.isArray(error)) {
    return Object.assign({}, error)
  }
  return error
}

// Exports

module.exports = {
  getMessageFromCode,
  isValidCode,
  serializeError,
  JSON_RPC_SERVER_ERROR_MESSAGE,
}

},{"./errorValues.json":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorValues.json","./errorCodes.json":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorCodes.json","./classes":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/classes.js"}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errors.js":[function(require,module,exports) {

const { EthereumRpcError, EthereumProviderError } = require('./classes')
const { getMessageFromCode } = require('./utils')
const ERROR_CODES = require('./errorCodes.json')

module.exports = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    parse: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.parse, opts
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidRequest: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidRequest, opts
    ),

    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidParams: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidParams, opts
    ),

    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotFound, opts
    ),

    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    internal: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.internal, opts
    ),

    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP 1474.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    server: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum RPC Server errors must provide single object argument.')
      }
      const { code } = opts
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        )
      }
      return getEthJsonRpcError(code, opts)
    },

    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    invalidInput: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.invalidInput, opts
    ),

    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceNotFound: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceNotFound, opts
    ),

    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    resourceUnavailable: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.resourceUnavailable, opts
    ),

    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    transactionRejected: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.transactionRejected, opts
    ),

    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumRpcError} The error
     */
    methodNotSupported: (opts) => getEthJsonRpcError(
      ERROR_CODES.rpc.methodNotSupported, opts
    ),
  },

  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    userRejectedRequest: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.userRejectedRequest, opts
      )
    },

    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unauthorized: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unauthorized, opts
      )
    },

    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     * 
     * @param {Object|string} [opts] - Options object or error message string
     * @param {string} [opts.message] - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    unsupportedMethod: (opts) => {
      return getEthProviderError(
        ERROR_CODES.provider.unsupportedMethod, opts
      )
    },

    /**
     * Get a custom Ethereum Provider error.
     * 
     * @param {Object|string} opts - Options object
     * @param {number} opts.code - The error code
     * @param {string} opts.message - The error message
     * @param {any} [opts.data] - Error data
     * @returns {EthereumProviderError} The error
     */
    custom: (opts) => {
      if (!opts || typeof opts !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum Provider custom errors must provide single object argument.')
      }
      const { code, message, data } = opts
      if (!message || typeof message !== 'string') throw new Error(
        '"message" must be a nonempty string'
      )
      return new EthereumProviderError(code, message, data)
    },
  },
}

// Internal

function getEthJsonRpcError(code, opts) {
  const [ message, data ] = validateOpts(opts)
  return new EthereumRpcError(
    code,
    message || getMessageFromCode(code),
    data
  )
}

function getEthProviderError(code, opts) {
  const [ message, data ] = validateOpts(opts)
  return new EthereumProviderError(
    code,
    message || getMessageFromCode(code),
    data
  )
}

function validateOpts (opts) {
  let message, data
  if (opts) {
    if (typeof opts === 'string') {
      message = opts
    } else if (typeof opts === 'object' && !Array.isArray(opts)) {
      message = opts.message
      data = opts.data
    }
  }
  return [ message, data ]
}

},{"./classes":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/classes.js","./utils":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/utils.js","./errorCodes.json":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorCodes.json"}],"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/index.js":[function(require,module,exports) {

const { EthereumRpcError, EthereumProviderError } = require('./src/classes')
const {
  serializeError, getMessageFromCode,
} = require('./src/utils')
const ethErrors = require('./src/errors')
const ERROR_CODES = require('./src/errorCodes.json')

module.exports = {
  ethErrors,
  EthereumRpcError,
  EthereumProviderError,
  serializeError,
  getMessageFromCode,
  /** @type ErrorCodes */
  ERROR_CODES,
}

// Types

/**
 * @typedef {Object} EthereumProviderErrorCodes
 * @property {number} userRejectedRequest
 * @property {number} unauthorized
 * @property {number} unsupportedMethod
 */

/**
 * @typedef {Object} EthereumRpcErrorCodes
 * @property {number} parse
 * @property {number} invalidRequest
 * @property {number} invalidParams
 * @property {number} methodNotFound
 * @property {number} internal
 * @property {number} invalidInput
 * @property {number} resourceNotFound
 * @property {number} resourceUnavailable
 * @property {number} transactionRejected
 * @property {number} methodNotSupported
 */

/**
 * @typedef ErrorCodes
 * @property {EthereumRpcErrorCodes} rpc
 * @property {EthereumProviderErrorCodes} provider
 */

},{"./src/classes":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/classes.js","./src/utils":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/utils.js","./src/errors":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errors.js","./src/errorCodes.json":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/src/errorCodes.json"}],"../node_modules/web3-provider-engine/subproviders/rpc.js":[function(require,module,exports) {
const xhr = true ? require('xhr') : require('request');

const inherits = require('util').inherits;

const createPayload = require('../util/create-payload.js');

const Subprovider = require('./subprovider.js');

const {
  ethErrors,
  serializeError
} = require('eth-json-rpc-errors');

module.exports = RpcSource;
inherits(RpcSource, Subprovider);

function RpcSource(opts) {
  const self = this;
  self.rpcUrl = opts.rpcUrl;
}

RpcSource.prototype.handleRequest = function (payload, next, end) {
  const self = this;
  const targetUrl = self.rpcUrl; // overwrite id to conflict with other concurrent users

  const sanitizedPayload = sanitizePayload(payload);
  const newPayload = createPayload(sanitizedPayload);
  xhr({
    uri: targetUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPayload),
    rejectUnauthorized: false,
    timeout: 20000
  }, function (err, res, body) {
    if (err) return end(serializeError(err)); // check for error code

    switch (res.statusCode) {
      case 405:
        return end(ethErrors.rpc.methodNotFound());

      case 504:
        // Gateway timeout
        return function () {
          let msg = `Gateway timeout. The request took too long to process. `;
          msg += `This can happen when querying logs over too wide a block range.`;
          const err = new Error(msg);
          return end(serializeError(err));
        }();

      case 429:
        // Too many requests (rate limiting)
        return function () {
          const err = new Error(`Too Many Requests`);
          return end(serializeError(err));
        }();

      default:
        if (res.statusCode != 200) {
          const msg = 'Unknown Error: ' + res.body;
          const err = new Error(msg);
          return end(serializeError(err));
        }

    } // parse response


    let data;

    try {
      data = JSON.parse(body);
    } catch (err) {
      console.error(err.stack);
      return end(serializeError(err));
    }

    if (data.error) return end(data.error);
    end(null, data.result);
  });
}; // drops any non-standard params


function sanitizePayload(payload) {
  return {
    id: payload.id,
    jsonrpc: payload.jsonrpc,
    method: payload.method,
    params: payload.params
  };
}
},{"xhr":"../node_modules/xhr/index.js","request":"../node_modules/parcel-bundler/src/builtins/_empty.js","util":"../node_modules/util/util.js","../util/create-payload.js":"../node_modules/web3-provider-engine/util/create-payload.js","./subprovider.js":"../node_modules/web3-provider-engine/subproviders/subprovider.js","eth-json-rpc-errors":"../node_modules/web3-provider-engine/node_modules/eth-json-rpc-errors/index.js"}],"../node_modules/web3-provider-engine/util/estimate-gas.js":[function(require,module,exports) {
const createPayload = require('./create-payload.js')

module.exports = estimateGas

/*

This is a work around for https://github.com/ethereum/go-ethereum/issues/2577

*/


function estimateGas(provider, txParams, cb) {
  provider.sendAsync(createPayload({
    method: 'eth_estimateGas',
    params: [txParams]
  }), function(err, res){
    if (err) {
      // handle simple value transfer case
      if (err.message === 'no contract code at given address') {
        return cb(null, '0xcf08')
      } else {
        return cb(err)        
      }
    }
    cb(null, res.result)
  })
}
},{"./create-payload.js":"../node_modules/web3-provider-engine/util/create-payload.js"}],"../node_modules/web3-provider-engine/subproviders/hooked-wallet.js":[function(require,module,exports) {
/*
 * Emulate 'eth_accounts' / 'eth_sendTransaction' using 'eth_sendRawTransaction'
 *
 * The two callbacks a user needs to implement are:
 * - getAccounts() -- array of addresses supported
 * - signTransaction(tx) -- sign a raw transaction object
 */

const waterfall = require('async/waterfall')
const parallel = require('async/parallel')
const inherits = require('util').inherits
const ethUtil = require('ethereumjs-util')
const sigUtil = require('eth-sig-util')
const extend = require('xtend')
const Semaphore = require('semaphore')
const Subprovider = require('./subprovider.js')
const estimateGas = require('../util/estimate-gas.js')
const hexRegex = /^[0-9A-Fa-f]+$/g

module.exports = HookedWalletSubprovider

// handles the following RPC methods:
//   eth_coinbase
//   eth_accounts
//   eth_sendTransaction
//   eth_sign
//   eth_signTypedData
//   eth_signTypedData_v3
//   eth_signTypedData_v4
//   personal_sign
//   eth_decryptMessage
//   encryption_public_key
//   personal_ecRecover
//   parity_postTransaction
//   parity_checkRequest
//   parity_defaultAccount

//
// Tx Signature Flow
//
// handleRequest: eth_sendTransaction
//   validateTransaction (basic validity check)
//     validateSender (checks that sender is in accounts)
//   processTransaction (sign tx and submit to network)
//     approveTransaction (UI approval hook)
//     checkApproval
//     finalizeAndSubmitTx (tx signing)
//       nonceLock.take (bottle neck to ensure atomic nonce)
//         fillInTxExtras (set fallback gasPrice, nonce, etc)
//         signTransaction (perform the signature)
//         publishTransaction (publish signed tx to network)
//


inherits(HookedWalletSubprovider, Subprovider)

function HookedWalletSubprovider(opts){
  const self = this
  // control flow
  self.nonceLock = Semaphore(1)

  // data lookup
  if (opts.getAccounts) self.getAccounts = opts.getAccounts
  // high level override
  if (opts.processTransaction) self.processTransaction = opts.processTransaction
  if (opts.processMessage) self.processMessage = opts.processMessage
  if (opts.processPersonalMessage) self.processPersonalMessage = opts.processPersonalMessage
  if (opts.processTypedMessage) self.processTypedMessage = opts.processTypedMessage
  // approval hooks
  self.approveTransaction = opts.approveTransaction || self.autoApprove
  self.approveMessage = opts.approveMessage || self.autoApprove
  self.approvePersonalMessage = opts.approvePersonalMessage || self.autoApprove
  self.approveDecryptMessage = opts.approveDecryptMessage || self.autoApprove
  self.approveEncryptionPublicKey = opts.approveEncryptionPublicKey || self.autoApprove
  self.approveTypedMessage = opts.approveTypedMessage || self.autoApprove
  // actually perform the signature
  if (opts.signTransaction) self.signTransaction = opts.signTransaction  || mustProvideInConstructor('signTransaction')
  if (opts.signMessage) self.signMessage = opts.signMessage  || mustProvideInConstructor('signMessage')
  if (opts.signPersonalMessage) self.signPersonalMessage = opts.signPersonalMessage  || mustProvideInConstructor('signPersonalMessage')
  if (opts.decryptMessage) self.decryptMessage = opts.decryptMessage  || mustProvideInConstructor('decryptMessage')
  if (opts.encryptionPublicKey) self.encryptionPublicKey = opts.encryptionPublicKey  || mustProvideInConstructor('encryptionPublicKey')
  if (opts.signTypedMessage) self.signTypedMessage = opts.signTypedMessage  || mustProvideInConstructor('signTypedMessage')
  if (opts.recoverPersonalSignature) self.recoverPersonalSignature = opts.recoverPersonalSignature
  // publish to network
  if (opts.publishTransaction) self.publishTransaction = opts.publishTransaction
  // gas options
  self.estimateGas = opts.estimateGas || self.estimateGas
  self.getGasPrice = opts.getGasPrice || self.getGasPrice
}

HookedWalletSubprovider.prototype.handleRequest = function(payload, next, end){
  const self = this
  self._parityRequests = {}
  self._parityRequestCount = 0

  // switch statement is not block scoped
  // sp we cant repeat var declarations
  let txParams, msgParams, extraParams
  let message, address

  switch(payload.method) {

    case 'eth_coinbase':
      // process normally
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        let result = accounts[0] || null
        end(null, result)
      })
      return

    case 'eth_accounts':
      // process normally
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        end(null, accounts)
      })
      return

    case 'eth_sendTransaction':
      txParams = payload.params[0]
      waterfall([
        (cb) => self.validateTransaction(txParams, cb),
        (cb) => self.processTransaction(txParams, cb),
      ], end)
      return

    case 'eth_signTransaction':
      txParams = payload.params[0]
      waterfall([
        (cb) => self.validateTransaction(txParams, cb),
        (cb) => self.processSignTransaction(txParams, cb),
      ], end)
      return

    case 'eth_sign':
      // process normally
      address = payload.params[0]
      message = payload.params[1]
      // non-standard "extraParams" to be appended to our "msgParams" obj
      // good place for metadata
      extraParams = payload.params[2] || {}
      msgParams = extend(extraParams, {
        from: address,
        data: message,
      })
      waterfall([
        (cb) => self.validateMessage(msgParams, cb),
        (cb) => self.processMessage(msgParams, cb),
      ], end)
      return

    case 'personal_sign':
      return (function(){
        // process normally
        const first = payload.params[0]
        const second = payload.params[1]

        // We initially incorrectly ordered these parameters.
        // To gracefully respect users who adopted this API early,
        // we are currently gracefully recovering from the wrong param order
        // when it is clearly identifiable.
        //
        // That means when the first param is definitely an address,
        // and the second param is definitely not, but is hex.
        if (resemblesData(second) && resemblesAddress(first)) {
          let warning = `The eth_personalSign method requires params ordered `
          warning += `[message, address]. This was previously handled incorrectly, `
          warning += `and has been corrected automatically. `
          warning += `Please switch this param order for smooth behavior in the future.`
          console.warn(warning)

          address = payload.params[0]
          message = payload.params[1]
        } else {
          message = payload.params[0]
          address = payload.params[1]
        }

        // non-standard "extraParams" to be appended to our "msgParams" obj
        // good place for metadata
        extraParams = payload.params[2] || {}
        msgParams = extend(extraParams, {
          from: address,
          data: message,
        })
        waterfall([
          (cb) => self.validatePersonalMessage(msgParams, cb),
          (cb) => self.processPersonalMessage(msgParams, cb),
        ], end)
      })()

    case 'eth_decryptMessage':
      return (function(){
        // process normally
        const first = payload.params[0]
        const second = payload.params[1]

        // We initially incorrectly ordered these parameters.
        // To gracefully respect users who adopted this API early,
        // we are currently gracefully recovering from the wrong param order
        // when it is clearly identifiable.
        //
        // That means when the first param is definitely an address,
        // and the second param is definitely not, but is hex.
        if (resemblesData(second) && resemblesAddress(first)) {
          let warning = `The eth_decryptMessage method requires params ordered `
          warning += `[message, address]. This was previously handled incorrectly, `
          warning += `and has been corrected automatically. `
          warning += `Please switch this param order for smooth behavior in the future.`
          console.warn(warning)

          address = payload.params[0]
          message = payload.params[1]
        } else {
          message = payload.params[0]
          address = payload.params[1]
        }

        // non-standard "extraParams" to be appended to our "msgParams" obj
        // good place for metadata
        extraParams = payload.params[2] || {}
        msgParams = extend(extraParams, {
          from: address,
          data: message,
        })
        waterfall([
          (cb) => self.validateDecryptMessage(msgParams, cb),
          (cb) => self.processDecryptMessage(msgParams, cb),
        ], end)
      })()
      
    case 'encryption_public_key':
      return (function(){
        const address = payload.params[0]
        
        waterfall([
          (cb) => self.validateEncryptionPublicKey(address, cb),
          (cb) => self.processEncryptionPublicKey(address, cb),
        ], end)
      })()
      
    case 'personal_ecRecover':
      return (function(){    
        message = payload.params[0]
        let signature = payload.params[1]
        // non-standard "extraParams" to be appended to our "msgParams" obj
        // good place for metadata
        extraParams = payload.params[2] || {}
        msgParams = extend(extraParams, {
          sig: signature,
          data: message,
        })
        self.recoverPersonalSignature(msgParams, end)
      })()

    case 'eth_signTypedData':
    case 'eth_signTypedData_v3':
    case 'eth_signTypedData_v4':
      return (function(){ 
        // process normally
      
        const first = payload.params[0]
        const second = payload.params[1]

        if (resemblesAddress(first)) {
          address = first
          message = second
        } else {
          message = first
          address = second
        }

        extraParams = payload.params[2] || {}
        msgParams = extend(extraParams, {
          from: address,
          data: message,
        })
        waterfall([
          (cb) => self.validateTypedMessage(msgParams, cb),
          (cb) => self.processTypedMessage(msgParams, cb),
        ], end)
      })()

    case 'parity_postTransaction':
      txParams = payload.params[0]
      self.parityPostTransaction(txParams, end)
      return

    case 'parity_postSign':
      address = payload.params[0]
      message = payload.params[1]
      self.parityPostSign(address, message, end)
      return

    case 'parity_checkRequest':
      return (function(){
        const requestId = payload.params[0]
        self.parityCheckRequest(requestId, end)
      })()

    case 'parity_defaultAccount':
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        const account = accounts[0] || null
        end(null, account)
      })
      return

    default:
      next()
      return

  }
}

//
// data lookup
//

HookedWalletSubprovider.prototype.getAccounts = function(cb) {
  cb(null, [])
}


//
// "process" high level flow
//

HookedWalletSubprovider.prototype.processTransaction = function(txParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTransaction(txParams, cb),
    (didApprove, cb) => self.checkApproval('transaction', didApprove, cb),
    (cb) => self.finalizeAndSubmitTx(txParams, cb),
  ], cb)
}


HookedWalletSubprovider.prototype.processSignTransaction = function(txParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTransaction(txParams, cb),
    (didApprove, cb) => self.checkApproval('transaction', didApprove, cb),
    (cb) => self.finalizeTx(txParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signMessage(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processPersonalMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approvePersonalMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signPersonalMessage(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processDecryptMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveDecryptMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('decryptMessage', didApprove, cb),
    (cb) => self.decryptMessage(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processEncryptionPublicKey = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveEncryptionPublicKey(msgParams, cb),
    (didApprove, cb) => self.checkApproval('encryptionPublicKey', didApprove, cb),
    (cb) => self.encryptionPublicKey(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processTypedMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTypedMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signTypedMessage(msgParams, cb),
  ], cb)
}

//
// approval
//

HookedWalletSubprovider.prototype.autoApprove = function(txParams, cb) {
  cb(null, true)
}

HookedWalletSubprovider.prototype.checkApproval = function(type, didApprove, cb) {
  cb( didApprove ? null : new Error('User denied '+type+' signature.') )
}

//
// parity
//

HookedWalletSubprovider.prototype.parityPostTransaction = function(txParams, cb) {
  const self = this

  // get next id
  const count = self._parityRequestCount
  const reqId = `0x${count.toString(16)}`
  self._parityRequestCount++

  self.emitPayload({
    method: 'eth_sendTransaction',
    params: [txParams],
  }, function(error, res){
    if (error) {
      self._parityRequests[reqId] = { error }
      return
    }
    const txHash = res.result
    self._parityRequests[reqId] = txHash
  })

  cb(null, reqId)
}


HookedWalletSubprovider.prototype.parityPostSign = function(address, message, cb) {
  const self = this

  // get next id
  const count = self._parityRequestCount
  const reqId = `0x${count.toString(16)}`
  self._parityRequestCount++

  self.emitPayload({
    method: 'eth_sign',
    params: [address, message],
  }, function(error, res){
    if (error) {
      self._parityRequests[reqId] = { error }
      return
    }
    const result = res.result
    self._parityRequests[reqId] = result
  })

  cb(null, reqId)
}

HookedWalletSubprovider.prototype.parityCheckRequest = function(reqId, cb) {
  const self = this
  const result = self._parityRequests[reqId] || null
  // tx not handled yet
  if (!result) return cb(null, null)
  // tx was rejected (or other error)
  if (result.error) return cb(result.error)
  // tx sent
  cb(null, result)
}

//
// signature and recovery
//

HookedWalletSubprovider.prototype.recoverPersonalSignature = function(msgParams, cb) {
  let senderHex
  try {
    senderHex = sigUtil.recoverPersonalSignature(msgParams)
  } catch (err) {
    return cb(err)
  }
  cb(null, senderHex)
}

//
// validation
//

HookedWalletSubprovider.prototype.validateTransaction = function(txParams, cb){
  const self = this
  // shortcut: undefined sender is invalid
  if (txParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign transaction.`))
  self.validateSender(txParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign transaction for this address: "${txParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateMessage = function(msgParams, cb){
  const self = this
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign message.`))
  self.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validatePersonalMessage = function(msgParams, cb){
  const self = this
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign personal message.`))
  if (msgParams.data === undefined) return cb(new Error(`Undefined message - message required to sign personal message.`))
  if (!isValidHex(msgParams.data)) return cb(new Error(`HookedWalletSubprovider - validateMessage - message was not encoded as hex.`))
  self.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateDecryptMessage = function(msgParams, cb){
  const self = this
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to decrypt message.`))
  if (msgParams.data === undefined) return cb(new Error(`Undefined message - message required to decrypt message.`))
  if (!isValidHex(msgParams.data)) return cb(new Error(`HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex.`))
  self.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to decrypt message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateEncryptionPublicKey = function(address, cb){
  const self = this

  self.validateSender(address, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to obtain encryption public key for this address: "${address}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateTypedMessage = function(msgParams, cb){
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign typed data.`))
  if (msgParams.data === undefined) return cb(new Error(`Undefined data - message required to sign typed data.`))
  this.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateSender = function(senderAddress, cb){
  const self = this
  // shortcut: undefined sender is invalid
  if (!senderAddress) return cb(null, false)
  self.getAccounts(function(err, accounts){
    if (err) return cb(err)
    const senderIsValid = (accounts.map(toLowerCase).indexOf(senderAddress.toLowerCase()) !== -1)
    cb(null, senderIsValid)
  })
}

//
// tx helpers
//

HookedWalletSubprovider.prototype.finalizeAndSubmitTx = function(txParams, cb) {
  const self = this
  // can only allow one tx to pass through this flow at a time
  // so we can atomically consume a nonce
  self.nonceLock.take(function(){
    waterfall([
      self.fillInTxExtras.bind(self, txParams),
      self.signTransaction.bind(self),
      self.publishTransaction.bind(self),
    ], function(err, txHash){
      self.nonceLock.leave()
      if (err) return cb(err)
      cb(null, txHash)
    })
  })
}

HookedWalletSubprovider.prototype.finalizeTx = function(txParams, cb) {
  const self = this
  // can only allow one tx to pass through this flow at a time
  // so we can atomically consume a nonce
  self.nonceLock.take(function(){
    waterfall([
      self.fillInTxExtras.bind(self, txParams),
      self.signTransaction.bind(self),
    ], function(err, signedTx){
      self.nonceLock.leave()
      if (err) return cb(err)
      cb(null, {raw: signedTx, tx: txParams})
    })
  })
}

HookedWalletSubprovider.prototype.publishTransaction = function(rawTx, cb) {
  const self = this
  self.emitPayload({
    method: 'eth_sendRawTransaction',
    params: [rawTx],
  }, function(err, res){
    if (err) return cb(err)
    cb(null, res.result)
  })
}

HookedWalletSubprovider.prototype.estimateGas = function(txParams, cb) {
  const self = this
  estimateGas(self.engine, txParams, cb)
}

HookedWalletSubprovider.prototype.getGasPrice = function(cb) {
  const self = this
  self.emitPayload({ method: 'eth_gasPrice', params: [] }, function (err, res) {
    if (err) return cb(err)
    cb(null, res.result)
  })
}

HookedWalletSubprovider.prototype.fillInTxExtras = function(txParams, cb){
  const self = this
  const address = txParams.from
  // console.log('fillInTxExtras - address:', address)

  const tasks = {}

  if (txParams.gasPrice === undefined) {
    // console.log("need to get gasprice")
    tasks.gasPrice = self.getGasPrice.bind(self)
  }

  if (txParams.nonce === undefined) {
    // console.log("need to get nonce")
    tasks.nonce = self.emitPayload.bind(self, { method: 'eth_getTransactionCount', params: [address, 'pending'] })
  }

  if (txParams.gas === undefined) {
    // console.log("need to get gas")
    tasks.gas = self.estimateGas.bind(self, cloneTxParams(txParams))
  }

  parallel(tasks, function(err, taskResults) {
    if (err) return cb(err)

    const result = {}
    if (taskResults.gasPrice) result.gasPrice = taskResults.gasPrice
    if (taskResults.nonce) result.nonce = taskResults.nonce.result
    if (taskResults.gas) result.gas = taskResults.gas

    cb(null, extend(txParams, result))
  })
}

// util

// we use this to clean any custom params from the txParams
function cloneTxParams(txParams){
  return {
    from: txParams.from,
    to: txParams.to,
    value: txParams.value,
    data: txParams.data,
    gas: txParams.gas,
    gasPrice: txParams.gasPrice,
    nonce: txParams.nonce,
  }
}

function toLowerCase(string){
  return string.toLowerCase()
}

function resemblesAddress (string) {
  const fixed = ethUtil.addHexPrefix(string)
  const isValid = ethUtil.isValidAddress(fixed)
  return isValid
}

// Returns true if resembles hex data
// but definitely not a valid address.
function resemblesData (string) {
  const fixed = ethUtil.addHexPrefix(string)
  const isValidAddress = ethUtil.isValidAddress(fixed)
  return !isValidAddress && isValidHex(string)
}

function isValidHex(data) {
  const isString = typeof data === 'string'
  if (!isString) return false
  const isHexPrefixed = data.slice(0,2) === '0x'
  if (!isHexPrefixed) return false
  const nonPrefixed = data.slice(2)
  const isValid = nonPrefixed.match(hexRegex)
  return isValid
}

function mustProvideInConstructor(methodName) {
  return function(params, cb) {
    cb(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + methodName + '" fn in constructor options'))
  }
}

},{"async/waterfall":"../node_modules/async/waterfall.js","async/parallel":"../node_modules/async/parallel.js","util":"../node_modules/util/util.js","ethereumjs-util":"../node_modules/ethereumjs-util/dist/index.js","eth-sig-util":"../node_modules/eth-sig-util/index.js","xtend":"../node_modules/xtend/immutable.js","semaphore":"../node_modules/semaphore/lib/semaphore.js","./subprovider.js":"../node_modules/web3-provider-engine/subproviders/subprovider.js","../util/estimate-gas.js":"../node_modules/web3-provider-engine/util/estimate-gas.js"}],"../node_modules/web3-provider-engine/subproviders/json-rpc-engine-middleware.js":[function(require,module,exports) {
const Subprovider = require('./subprovider.js')

// wraps a json-rpc-engine middleware in a subprovider interface

class JsonRpcEngineMiddlewareSubprovider extends Subprovider {

  // take a constructorFn to call once we have a reference to the engine
  constructor (constructorFn) {
    super()
    if (!constructorFn) throw new Error('JsonRpcEngineMiddlewareSubprovider - no constructorFn specified')
    this._constructorFn = constructorFn
  }

  // this is called once the subprovider has been added to the provider engine
  setEngine (engine) {
    if (this.middleware) throw new Error('JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice')
    const blockTracker = engine._blockTracker
    const middleware = this._constructorFn({ engine, provider: engine, blockTracker })
    if (!middleware) throw new Error('JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware')
    if (typeof middleware !== 'function') throw new Error('JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function')
    this.middleware = middleware
  }

  handleRequest (req, provEngNext, provEngEnd) {
    const res = { id: req.id }
    this.middleware(req, res, middlewareNext, middlewareEnd)

    function middlewareNext (handler) {
      provEngNext((err, result, cb) => {
        // update response object with result or error
        if (err) {
          delete res.result
          res.error = { message: err.message || err }
        } else {
          res.result = result
        }
        // call middleware's next handler (even if error)
        if (handler) {
          handler(cb)
        } else {
          cb()
        }
      })
    }

    function middlewareEnd (err) {
      if (err) return provEngEnd(err)
      provEngEnd(null, res.result)
    }
  }

}

module.exports = JsonRpcEngineMiddlewareSubprovider

},{"./subprovider.js":"../node_modules/web3-provider-engine/subproviders/subprovider.js"}],"../node_modules/web3-provider-engine/subproviders/subscriptions.js":[function(require,module,exports) {
const ProviderSubprovider = require('./json-rpc-engine-middleware')
const createSubscriptionManager = require('eth-json-rpc-filters/subscriptionManager')

class SubscriptionsSubprovider extends ProviderSubprovider {
  constructor() {
    super(({ blockTracker, provider, engine }) => {
      const { events, middleware } = createSubscriptionManager({ blockTracker, provider })
      // forward subscription events on the engine
      events.on('notification', (data) => engine.emit('data', null, data))
      // return the subscription install/remove middleware
      return middleware
    })
  }
}

module.exports = SubscriptionsSubprovider

},{"./json-rpc-engine-middleware":"../node_modules/web3-provider-engine/subproviders/json-rpc-engine-middleware.js","eth-json-rpc-filters/subscriptionManager":"../node_modules/eth-json-rpc-filters/subscriptionManager.js"}],"../node_modules/web3-provider-engine/subproviders/filters.js":[function(require,module,exports) {
const ProviderSubprovider = require('./json-rpc-engine-middleware')
const createFilterMiddleware = require('eth-json-rpc-filters')

class SubscriptionsSubprovider extends ProviderSubprovider {
  constructor() {
    super(({ blockTracker, provider, engine }) => {
      return createFilterMiddleware({ blockTracker, provider })
    })
  }
}

module.exports = SubscriptionsSubprovider

},{"./json-rpc-engine-middleware":"../node_modules/web3-provider-engine/subproviders/json-rpc-engine-middleware.js","eth-json-rpc-filters":"../node_modules/eth-json-rpc-filters/index.js"}],"../node_modules/bnc-onboard/dist/esm/providerEngine-4a9fe06c.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _onboard58ade72e = require("./onboard-58ade72e.js");

require("bignumber.js");

require("bnc-sdk");

require("bowser");

var _web3ProviderEngine = _interopRequireDefault(require("web3-provider-engine"));

var _rpc = _interopRequireDefault(require("web3-provider-engine/subproviders/rpc"));

var _hookedWallet = _interopRequireDefault(require("web3-provider-engine/subproviders/hooked-wallet"));

var _subscriptions = _interopRequireDefault(require("web3-provider-engine/subproviders/subscriptions"));

var _filters = _interopRequireDefault(require("web3-provider-engine/subproviders/filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createProvider(config) {
  var getAccounts = config.getAccounts,
      signTransaction = config.signTransaction,
      rpcUrl = config.rpcUrl,
      processMessage = config.processMessage,
      processPersonalMessage = config.processPersonalMessage,
      signMessage = config.signMessage,
      signPersonalMessage = config.signPersonalMessage;
  var pollingInterval = (0, _onboard58ade72e.g)(_onboard58ade72e.a).blockPollingInterval;
  var idMgmt = getAccounts && new _hookedWallet.default({
    getAccounts: getAccounts,
    signTransaction: signTransaction,
    processMessage: processMessage,
    processPersonalMessage: processPersonalMessage,
    signMessage: signMessage,
    signPersonalMessage: signPersonalMessage
  });
  var rpcSubProvider = new _rpc.default({
    rpcUrl: rpcUrl.includes('http') ? rpcUrl : "https://".concat(rpcUrl)
  });
  var provider = new _web3ProviderEngine.default({
    pollingInterval: pollingInterval
  });
  provider.addProvider(new _subscriptions.default());
  provider.addProvider(new _filters.default());
  idMgmt && provider.addProvider(idMgmt);
  provider.addProvider(rpcSubProvider);
  provider.start();
  provider.on('error', console.error);
  return provider;
}

var _default = createProvider;
exports.default = _default;
},{"regenerator-runtime/runtime":"../node_modules/regenerator-runtime/runtime.js","./onboard-58ade72e.js":"../node_modules/bnc-onboard/dist/esm/onboard-58ade72e.js","bignumber.js":"../node_modules/bignumber.js/bignumber.js","bnc-sdk":"../node_modules/bnc-onboard/node_modules/bnc-sdk/dist/esm/index.js","bowser":"../node_modules/bowser/es5.js","web3-provider-engine":"../node_modules/web3-provider-engine/index.js","web3-provider-engine/subproviders/rpc":"../node_modules/web3-provider-engine/subproviders/rpc.js","web3-provider-engine/subproviders/hooked-wallet":"../node_modules/web3-provider-engine/subproviders/hooked-wallet.js","web3-provider-engine/subproviders/subscriptions":"../node_modules/web3-provider-engine/subproviders/subscriptions.js","web3-provider-engine/subproviders/filters":"../node_modules/web3-provider-engine/subproviders/filters.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/providerEngine-4a9fe06c.4521c820.js.map