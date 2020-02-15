/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Is = __webpack_require__(33);

	var _$Is2 = _interopRequireDefault(_$Is);

	var _$Sup = __webpack_require__(96);

	var _$Sup2 = _interopRequireDefault(_$Sup);

	var window = self;
	console.log(self);

	function convertArray(keys, item) {
	  var i = -1;
	  var ret = {};
	  while (++i < keys.length) {
	    ret[keys[i]] = item[i];
	  }
	  return ret;
	}

	var dataStore = {};

	function newSqlData(keys, values) {
	  var i = -1;
	  var ret = {};
	  while (++i < keys.length) {
	    ret[keys[i]] = values[i];
	  }
	  return ret;
	}

	function saveData(key, data) {
	  if (dataStore[key]) {
	    dataStore[key].values.push(newSqlData(dataStore[key].keys, data));
	  } else {
	    dataStore[key] = {
	      keys: data,
	      values: []
	    };
	  }
	}

	var matchNewLines = /,[\r\n]+/;
	var matchArrays = /(\[[^\[\]]+\])/;
	function _store(name, data) {
	  var matches = data.split(matchNewLines);
	  var i = -1;

	  while (++i < matches.length) {
	    var yo = matches[i].split(matchArrays)[1];
	    if (yo) {
	      saveData(name, JSON.parse(yo));
	    }
	  }

	  return matches[matches.length - 1];
	}

	function sortMatches(a, b) {
	  return b - a;
	}

	function MatchList(q, key, fn) {
	  q = q.toLowerCase();
	  var matches = [];
	  var minScore = 0;
	  var firstMatches = new WeakMap();

	  function handleMatch(score, data) {
	    if (score < minScore || firstMatches.get(data) === score) {
	      return;
	    }
	    fn(score, data);
	    firstMatches.set(data, score);
	    matches.push(score);
	    matches.sort(sortMatches);
	    if (matches.length > 9) {
	      minScore = matches[9];
	    }
	  }

	  function Me(data) {
	    var str = data[key].toLowerCase();
	    var i = -1,
	        j = 0,
	        score = 0,
	        bonus = 8;

	    while (++i < str.length) {
	      if (str[i] === q[j]) {
	        if (++j >= q.length) {
	          if (j === i) {
	            score += 50; // bonus for perfect
	          }
	          return handleMatch(score + (i >= str.length - 1), data);
	        }
	        score += 1 + bonus;
	        bonus += 5;
	      } else {
	        bonus = /[a-z0-9]/.test(str[i]) ? 0 : 3;
	      }
	    }
	  }

	  function recur(_x, _x2, _x3, _x4, _x5, _x6) {
	    var _again = true;

	    _function: while (_again) {
	      var str = _x,
	          i = _x2,
	          j = _x3,
	          score = _x4,
	          bonus = _x5,
	          step = _x6;
	      c = undefined;
	      _again = false;

	      if (j >= q.length) {
	        if (j === i) {
	          score += 50; // bonus for perfect
	        }
	        return score + (i >= str.length);
	      }
	      if (i >= str.length) {
	        return Math.round(score / 3);
	      }
	      var c = str[i].toLowerCase();
	      if (c === q[j]) {
	        if (step > 0) {
	          return Math.max(recur(str, i + 1, j, score, 0, step - 1), recur(str, i + 1, j + 1, score + 1 + bonus + (c !== str[i]) * 2, bonus + 5, step));
	        }
	        _x = str;
	        _x2 = i + 1;
	        _x3 = j + 1;
	        _x4 = score + 1 + bonus;
	        _x5 = bonus + 5;
	        _x6 = step;
	        _again = true;
	        continue _function;
	      }
	      _x = str;
	      _x2 = i + 1;
	      _x3 = j;
	      _x4 = score;
	      _x5 = /[a-z0-9]/.test(c) ? 0 : 3;
	      _x6 = step;
	      _again = true;
	      continue _function;
	    }
	  }

	  Me.deep = function (data) {
	    if (!firstMatches.has(data)) {
	      return;
	    }
	    handleMatch(recur(data[key], 0, 0, 0, 8, 6), data);
	  };
	  return Me;
	}

	var p = {};

	var previousQuery = undefined;
	var query = {
	  items: function items(q) {
	    var vals = dataStore.items.values;
	    var i = -1,
	        score = undefined,
	        match = MatchList(q, "name", p.say.result);
	    previousQuery = q;

	    (function recur() {
	      if (previousQuery !== q) {
	        return;
	      }
	      var n = performance.now();
	      while (++i < vals.length) {
	        if (performance.now() - n > 16) {
	          return setTimeout(recur);
	        }
	        match(vals[i]);
	      }
	      if (match.name === "Me") {
	        match = match.deep;
	        i = -1;
	        return setTimeout(recur);
	      }
	    })();
	  }
	};

	(0, _$Sup2["default"])({
	  ask: function ask(table, q) {
	    return query[table](q);
	  }
	}).then(function (say) {
	  p.say = say;
	  function loadContent(name, length) {
	    var download = "Downloading " + name + " data";
	    var store = _store.bind(null, name);
	    say.progress(download, 0);
	    var start = performance.now();
	    var n = start;

	    return fetch("//neva.cdenis.net/" + name + ".json").then(function (_ref) {
	      var body = _ref.body;

	      var reader = body.getReader();
	      var decoder = new TextDecoder();
	      var n = true;
	      var partial = '';
	      var total = 0;

	      return (function parse() {
	        return reader.read().then(function (_ref2) {
	          var value = _ref2.value;
	          var done = _ref2.done;

	          if (value) {
	            partial += decoder.decode(value, { stream: !done });
	            total += value.byteLength;
	          } else {
	            partial += decoder.decode(new Uint8Array(), { stream: !done });
	          }

	          partial = store(partial);
	          if (!partial) {
	            reader.cancel();
	          }
	          if (!done) {
	            if (performance.now() - n > 64) {
	              say.progress(download, total / length);
	              n = performance.now();
	            }
	            return parse();
	          }
	          say.progress(download, 1);
	        });
	      })();
	    })["catch"](console.error.bind(console));
	  }
	  loadContent("items", 6781317);
	  loadContent("items_loot", 150903);
	});

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalGetNative = __webpack_require__(6);

	var _internalGetNative2 = _interopRequireDefault(_internalGetNative);

	var _internalIsArrayLike = __webpack_require__(11);

	var _internalIsArrayLike2 = _interopRequireDefault(_internalIsArrayLike);

	var _langIsObject = __webpack_require__(9);

	var _langIsObject2 = _interopRequireDefault(_langIsObject);

	var _internalShimKeys = __webpack_require__(15);

	var _internalShimKeys2 = _interopRequireDefault(_internalShimKeys);

	'use strict';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = (0, _internalGetNative2['default'])(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? _internalShimKeys2['default'] : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && (0, _internalIsArrayLike2['default'])(object)) {
	    return (0, _internalShimKeys2['default'])(object);
	  }
	  return (0, _langIsObject2['default'])(object) ? nativeKeys(object) : [];
	};

	exports['default'] = keys;
	module.exports = exports['default'];

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _langIsNative = __webpack_require__(7);

	var _langIsNative2 = _interopRequireDefault(_langIsNative);

	'use strict';

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return (0, _langIsNative2['default'])(value) ? value : undefined;
	}

	exports['default'] = getNative;
	module.exports = exports['default'];

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isFunction = __webpack_require__(8);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _internalIsObjectLike = __webpack_require__(10);

	var _internalIsObjectLike2 = _interopRequireDefault(_internalIsObjectLike);

	'use strict';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if ((0, _isFunction2['default'])(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return (0, _internalIsObjectLike2['default'])(value) && reIsHostCtor.test(value);
	}

	exports['default'] = isNative;
	module.exports = exports['default'];

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isObject = __webpack_require__(9);

	var _isObject2 = _interopRequireDefault(_isObject);

	'use strict';

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return (0, _isObject2['default'])(value) && objToString.call(value) == funcTag;
	}

	exports['default'] = isFunction;
	module.exports = exports['default'];

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	exports['default'] = isObject;
	module.exports = exports['default'];

/***/ },

/***/ 10:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	exports['default'] = isObjectLike;
	module.exports = exports['default'];

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getLength = __webpack_require__(12);

	var _getLength2 = _interopRequireDefault(_getLength);

	var _isLength = __webpack_require__(14);

	var _isLength2 = _interopRequireDefault(_isLength);

	'use strict';

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && (0, _isLength2['default'])((0, _getLength2['default'])(value));
	}

	exports['default'] = isArrayLike;
	module.exports = exports['default'];

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _baseProperty = __webpack_require__(13);

	var _baseProperty2 = _interopRequireDefault(_baseProperty);

	'use strict';

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = (0, _baseProperty2['default'])('length');

	exports['default'] = getLength;
	module.exports = exports['default'];

/***/ },

/***/ 13:
/***/ function(module, exports) {

	'use strict';

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	exports['default'] = baseProperty;
	module.exports = exports['default'];

/***/ },

/***/ 14:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	exports['default'] = isLength;
	module.exports = exports['default'];

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _langIsArguments = __webpack_require__(16);

	var _langIsArguments2 = _interopRequireDefault(_langIsArguments);

	var _langIsArray = __webpack_require__(17);

	var _langIsArray2 = _interopRequireDefault(_langIsArray);

	var _isIndex = __webpack_require__(18);

	var _isIndex2 = _interopRequireDefault(_isIndex);

	var _isLength = __webpack_require__(14);

	var _isLength2 = _interopRequireDefault(_isLength);

	var _objectKeysIn = __webpack_require__(19);

	var _objectKeysIn2 = _interopRequireDefault(_objectKeysIn);

	'use strict';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = (0, _objectKeysIn2['default'])(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && (0, _isLength2['default'])(length) && ((0, _langIsArray2['default'])(object) || (0, _langIsArguments2['default'])(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if (allowIndexes && (0, _isIndex2['default'])(key, length) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	exports['default'] = shimKeys;
	module.exports = exports['default'];

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalIsArrayLike = __webpack_require__(11);

	var _internalIsArrayLike2 = _interopRequireDefault(_internalIsArrayLike);

	var _internalIsObjectLike = __webpack_require__(10);

	var _internalIsObjectLike2 = _interopRequireDefault(_internalIsObjectLike);

	'use strict';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return (0, _internalIsObjectLike2['default'])(value) && (0, _internalIsArrayLike2['default'])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	exports['default'] = isArguments;
	module.exports = exports['default'];

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalGetNative = __webpack_require__(6);

	var _internalGetNative2 = _interopRequireDefault(_internalGetNative);

	var _internalIsLength = __webpack_require__(14);

	var _internalIsLength2 = _interopRequireDefault(_internalIsLength);

	var _internalIsObjectLike = __webpack_require__(10);

	var _internalIsObjectLike2 = _interopRequireDefault(_internalIsObjectLike);

	'use strict';

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = (0, _internalGetNative2['default'])(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return (0, _internalIsObjectLike2['default'])(value) && (0, _internalIsLength2['default'])(value.length) && objToString.call(value) == arrayTag;
	};

	exports['default'] = isArray;
	module.exports = exports['default'];

/***/ },

/***/ 18:
/***/ function(module, exports) {

	'use strict';

	/** Used to detect unsigned integer values. */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	exports['default'] = isIndex;
	module.exports = exports['default'];

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _langIsArguments = __webpack_require__(16);

	var _langIsArguments2 = _interopRequireDefault(_langIsArguments);

	var _langIsArray = __webpack_require__(17);

	var _langIsArray2 = _interopRequireDefault(_langIsArray);

	var _internalIsIndex = __webpack_require__(18);

	var _internalIsIndex2 = _interopRequireDefault(_internalIsIndex);

	var _internalIsLength = __webpack_require__(14);

	var _internalIsLength2 = _interopRequireDefault(_internalIsLength);

	var _langIsObject = __webpack_require__(9);

	var _langIsObject2 = _interopRequireDefault(_langIsObject);

	'use strict';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!(0, _langIsObject2['default'])(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = length && (0, _internalIsLength2['default'])(length) && ((0, _langIsArray2['default'])(object) || (0, _langIsArguments2['default'])(object)) && length || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = index + '';
	  }
	  for (var key in object) {
	    if (!(skipIndexes && (0, _internalIsIndex2['default'])(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	exports['default'] = keysIn;
	module.exports = exports['default'];

/***/ },

/***/ 33:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var num = function num(n) {
	  return typeof n === "number" && !isNaN(n);
	};
	var text = function text(str) {
	  return typeof str === "string";
	};

	exports["default"] = {
	  fn: function fn(_fn) {
	    return typeof _fn === "function";
	  },
	  num: num,
	  int: Number.isInteger,
	  text: text,
	  string: text,
	  array: Array.isArray.bind(Array),
	  obj: function obj(_obj) {
	    return typeof _obj === "object";
	  },
	  HTMLElement: (function (_HTMLElement) {
	    function HTMLElement(_x) {
	      return _HTMLElement.apply(this, arguments);
	    }

	    HTMLElement.toString = function () {
	      return _HTMLElement.toString();
	    };

	    return HTMLElement;
	  })(function (el) {
	    return el instanceof HTMLElement;
	  })
	};
	module.exports = exports["default"];

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _is = __webpack_require__(33);

	/* this handle webworker communications

	  // ===================  in the main file : ============================== \\
	    sup("workerFileName", {
	      "progress": () => {},
	    }).then(say => {
	      say.pouet("youpi !!");
	    });


	  // ===================  in the worker file : ============================ \\
	    sup({
	      "pouet": () => {},
	    }).then(say => {
	      say.progress("yo", 0.5);
	    });

	*/

	var _is2 = _interopRequireDefault(_is);

	function wesh(key) {
	  for (var _len = arguments.length, agrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    agrs[_key - 1] = arguments[_key];
	  }

	  this[key].apply(null, agrs);
	}

	var sup = function sup(w, msg) {
	  return new Promise(function (resolve) {
	    w.onmessage = function (e) {
	      w.onmessage = function (e) {
	        return wesh.apply(msg, e.data);
	      };
	      resolve(e.data.reduce(function (r, key) {
	        r[key] = function () {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          return w.postMessage([key].concat(args));
	        };
	        return r;
	      }, {}));
	    };
	    w.postMessage((0, _objectKeys2["default"])(msg));
	  });
	};

	var yo = function yo(a, b) {
	  return _is2["default"].text(a) ? yo.main(a, b) : yo.worker(a);
	};

	yo.worker = function (msg) {
	  return sup(self, msg);
	};
	yo.main = function (name, msg) {
	  return sup(new Worker("/" + name + ".js?" + Math.random()), msg);
	};

	exports["default"] = yo;
	module.exports = exports["default"];

/***/ }

/******/ });