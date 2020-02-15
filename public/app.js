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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = main;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function main() {
	  document.body.appendChild(_App2['default'].HTMLElement);
	  _App2['default'].init();
	}

	main();
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var style = document.createElement('style');

	style.type = 'text/css';

	style.innerHTML = '.hide { display: none!important }' + '.invalid { color: red!important }' + 'input[type="number"]::-webkit-outer-spin-button,' + 'input[type="number"]::-webkit-inner-spin-button' + '{ -webkit-appearance: none; margin: 0 }' + 'input[type="number"] { -moz-appearance: textfield }' + 'html {background:#202020; font-family:monospace; color:white; height:100%}';

	document.getElementsByTagName('head')[0].appendChild(style);

	exports['default'] = function () {};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _ItemForm = __webpack_require__(34);

	var _ItemForm2 = _interopRequireDefault(_ItemForm);

	var _SearchBar = __webpack_require__(91);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _Progress = __webpack_require__(3);

	var _Progress2 = _interopRequireDefault(_Progress);

	var _ToolTip = __webpack_require__(93);

	var _ToolTip2 = _interopRequireDefault(_ToolTip);

	var _Results = __webpack_require__(94);

	var _Results2 = _interopRequireDefault(_Results);

	var _$Sup = __webpack_require__(96);

	var _$Sup2 = _interopRequireDefault(_$Sup);

	(0, _$Sup2["default"])("dataWorker", {
	  progress: _Progress2["default"].set,
	  result: function result(score, data) {
	    _Results2["default"].push(score, data.name, data, "entry");
	  }
	}).then(function (worker) {
	  window.__ask__ = worker.ask;
	  _SearchBar2["default"].add(function (value) {
	    worker.ask(_SearchBar2["default"].selectedList, value);
	    _Results2["default"].clear();
	  });
	});

	var me = {
	  HTMLElement: _uiNew2["default"].div({ id: "app" }, _SearchBar2["default"], _Results2["default"], _ToolTip2["default"], _Progress2["default"]),
	  init: function init() {
	    _eventLoop2["default"].start();
	    _SearchBar2["default"].select();
	  }
	};

	exports["default"] = me;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	// import { on } from "event";

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$Now = __webpack_require__(20);

	var _$Now2 = _interopRequireDefault(_$Now);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _styleInputs = __webpack_require__(23);

	var me = {};
	var elem = _uiNew2["default"].div({
	  style: _styleInputs.progress.container
	});

	me.HTMLElement = elem;
	me.hidden = true;

	function getTooltipData(_x) {
	  var _again = true;

	  _function: while (_again) {
	    var node = _x;
	    _again = false;

	    if (!node) {
	      return null;
	    }
	    if (node.dataset && node.dataset.tooltip) {
	      return node.dataset.tooltip;
	    }
	    _x = node.parentNode;
	    _again = true;
	    continue _function;
	  }
	}

	var bars = {};

	me.hide = function () {
	  elem.style.opacity = 0;
	  setTimeout(function () {
	    return elem.style.display = "none";
	  }, 200);
	};
	me.show = function () {
	  elem.style.display = "";
	  elem.style.opacity = 1;
	};
	me.set = function (key, f) {
	  return (bars[key] || Bar(key)).set(f);
	};

	// loop.add()

	var count = 0;
	function decount() {
	  count--;
	  if (count <= 0) {
	    me.hide();
	  }
	}

	function Bar(key) {
	  var newBar = {};
	  var innerBar = _uiNew2["default"].span(_styleInputs.progress.innerBar);
	  var elem = _uiNew2["default"].div(_styleInputs.progress.outerBar, innerBar, _uiNew2["default"].div(_styleInputs.progress.barLabel, key));
	  count++;
	  me.show();

	  var requested = false;
	  var f = 0;
	  var ended = false;
	  var setF = -1;
	  _eventLoop2["default"].add(function () {
	    if (ended) {
	      return;
	    }
	    if (f === setF) {
	      return;
	    }
	    setF = f;
	    innerBar.style.width = f * 100 + "%";
	    if (f === 1) {
	      ended = true;
	      setTimeout(decount, 200);
	      innerBar.style.opacity = 0;
	      elem.style.boxShadow = "none";
	      elem.style.background = "transparent";
	      elem.style.color = "#999";
	    }
	  });

	  newBar.set = function (value) {
	    return f = value;
	  };

	  me.HTMLElement.appendChild(elem);

	  bars[key] = newBar;

	  return newBar;
	}

	exports["default"] = me;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	function $add(newChild, parent, position) {
	  if (!newChild) return null;
	  if (typeof newChild === "string") {
	    newChild = document.createTextNode(newChild);
	  } else if (Array.isArray(newChild)) {
	    var i = -1,
	        len = newChild.length,
	        ret;
	    while (++i < len) {
	      ret = $add(newChild[i], parent, position);
	    }
	    return ret;
	  } else if (!(newChild instanceof HTMLElement)) {
	    if (newChild.HTMLElement instanceof HTMLElement) {
	      newChild = newChild.HTMLElement;
	    } else return null;
	  }
	  if (typeof position === "number") {
	    var previousChild = parent.children[position];
	    if (previousChild) return previousChild.appendBefore(newChild);
	  }
	  if (parent instanceof HTMLElement) return parent.appendChild(newChild);
	  return document.body.appendChild(newChild);
	}

	function newHTMLElement() {
	  var elem = document.createElement(this.key);
	  var firstArgument = arguments[0];
	  var argc = arguments.length;
	  var i = -1;

	  if (firstArgument && typeof firstArgument === "object") {
	    (0, _objectKeys2["default"])(firstArgument).forEach(function (key) {
	      if (key === "style" || key === "dataset") {
	        (function () {
	          var style = firstArgument[key];
	          (0, _objectKeys2["default"])(style).forEach(function (subKey) {
	            return elem[key][subKey] = style[subKey];
	          });
	        })();
	      } else {
	        elem[key] = firstArgument[key];
	      }
	    });
	    i++;
	  }

	  while (++i < argc) {
	    $add(arguments[i], elem);
	  }

	  return elem;
	}

	function $new(key) {
	  newHTMLElement.bind({ key: key || "div" });
	}

	["b", "i", "s", "p", "h1", "div", "img", "span", "input", "label", "color", "legend", "option", "select", "fieldset", "datalist", "textarea", "form"].forEach(function (key) {
	  $new[key] = newHTMLElement.bind({ key: key });
	});

	exports["default"] = $new;
	module.exports = exports["default"];

/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = (function () {
	  return window.performance ? window.performance.now.bind(window.performance) : Date.now.bind(Date);
	})();

	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Now = __webpack_require__(20);

	var _$Now2 = _interopRequireDefault(_$Now);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var update = requestAnimationFrame ? {
	  next: requestAnimationFrame.bind(window),
	  stop: cancelAnimationFrame.bind(window) || function () {}
	} : {
	  next: function next(fn) {
	    return setTimeout(fn, 16);
	  },
	  stop: clearTimeout.bind(window)
	};

	var task = (0, _$Task2["default"])();
	var event = {};
	var run = false;
	var id = 0;

	function initEvent() {
	  event.start = event.now = (0, _$Now2["default"])();
	  event.diff = 16;
	}

	function updateEvent() {
	  var now = (0, _$Now2["default"])();
	  event.diff = now - event.start;
	  event.now = event.start = now;
	}

	function checkEvent() {
	  event.now = (0, _$Now2["default"])();
	  var p = event.now - event.start;
	  if (p > 9) {
	    console.log(p);
	    return false;
	  }
	  return true;
	  // return !(p > 9);
	  // return !(event.now - event.start > 9);
	}

	function loop() {
	  var i = -1,
	      cleanup = [];

	  updateEvent();
	  task.execCheck(event, checkEvent);
	  if (run) {
	    id = update.next(loop);
	  }
	}

	var handler = {};

	handler.add = task.add;
	handler.del = task.del;

	handler.stop = function () {
	  if (!run) {
	    return handler;
	  }
	  update.stop(id);
	  run = false;
	  return handler;
	};

	handler.start = function () {
	  if (run) {
	    return handler;
	  }
	  run = true;
	  initEvent();
	  update.next(loop);
	  return handler;
	};

	exports["default"] = handler;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = Task;

	function Task() {
	  var taskArray = [];
	  var me = {};

	  me.del = function (fn) {
	    var i = -1;
	    while (++i < taskArray.length) {
	      if (taskArray[i] === fn) {
	        taskArray.splice(i, 1);
	        break;
	      }
	    }
	    return me;
	  };

	  me.add = function (fn) {
	    if (typeof fn === "function") {
	      taskArray.push(fn);
	    }
	    return me;
	  };

	  me.exec = function (event) {
	    var i = -1,
	        cleanup = [];

	    while (++i < taskArray.length) {
	      if (taskArray[i](event) === false) {
	        cleanup.push(i);
	      }
	    }

	    if (cleanup.length) {
	      i = cleanup.length;
	      while (--i >= 0) {
	        taskArray.splice(cleanup[i], 1);
	      }
	    }
	    return me;
	  };

	  me.execCheck = function (event, check) {
	    var i = -1,
	        cleanup = [];

	    while (++i < taskArray.length && check()) {
	      if (taskArray[i](event) === false) {
	        cleanup.push(i);
	      }
	    }

	    if (cleanup.length) {
	      i = cleanup.length;
	      while (--i >= 0) {
	        taskArray.splice(cleanup[i], 1);
	      }
	    }
	    return me;
	  };

	  return me;
	}

	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _ui = __webpack_require__(24);

	var _ui2 = _interopRequireDefault(_ui);

	var _box = __webpack_require__(29);

	var _box2 = _interopRequireDefault(_box);

	var _apply = __webpack_require__(25);

	var _apply2 = _interopRequireDefault(_apply);

	var _dataColor = __webpack_require__(31);

	var _dataColor2 = _interopRequireDefault(_dataColor);

	var toAttrs = function toAttrs(style) {
	  return { style: style };
	};

	var btn = (0, _apply2["default"])((0, _ui2["default"])({
	  cursor: "pointer",
	  display: "inline-block",
	  overflow: "hidden",
	  color: "#888",
	  textOverflow: "ellipsis",
	  whiteSpace: "nowrap"
	}));

	var label = (0, _apply2["default"])((0, _ui2["default"])({
	  padding: "5px",
	  display: "block",
	  overflow: "hidden",
	  textOverflow: "ellipsis",
	  position: "relative",
	  boxSizing: "border-box",
	  borderBottom: "1px solid #555"
	}));

	var unit = (0, _apply2["default"])((0, _ui2["default"])({
	  fontWeight: "bold",
	  paddingRight: ".3em"
	}));

	var halfLabel = (0, _apply2["default"])(label({
	  display: "inline-block",
	  paddingRight: "5em",
	  margin: "5px 1%",
	  width: "48%"
	}));

	var outerBar = (0, _apply2["default"])({
	  background: "#1a1a1a",
	  position: 'relative',
	  height: "25px",
	  padding: "5px",
	  margin: "5px auto",
	  borderRadius: "5px",
	  boxShadow: "0 1px 5px #000 inset, 0 1px 0 #444"
	});

	var innerBar = (0, _apply2["default"])({
	  display: "inline-block",
	  height: "100%",
	  borderRadius: "3px",
	  background: "#444",
	  boxShadow: "0 1px 0 #555 inset"
	});

	var barLabel = (0, _apply2["default"])({
	  top: 0,
	  left: 0,
	  position: "absolute",
	  lineHeight: "35px",
	  paddingLeft: "10px"
	});

	exports["default"] = {
	  text: {
	    label: label({
	      margin: "5px 1%",
	      width: "98%"
	    }),
	    input: (0, _ui2["default"])({
	      marginRight: "5px",
	      outline: "none",
	      border: "none",
	      color: "white",
	      textAlign: "right",
	      float: "right",
	      display: "block",
	      minWidth: "5px",
	      wordWrap: "normal"
	    })
	  },

	  select: {
	    label: label({
	      margin: "5px"
	    }),
	    container: (0, _ui2["default"])({
	      margin: "5px",
	      padding: "5px",
	      flexDirection: "row",
	      display: "flex",
	      flexWrap: "wrap",
	      background: "#333",
	      outline: "1px solid #2E2E2E"
	    }),
	    display: (0, _ui2["default"])({
	      float: "right",
	      color: "white"
	    }),
	    listElem: (0, _ui2["default"])({
	      width: "100%",
	      cursor: "pointer",
	      overflow: "hidden",
	      color: "#505050",
	      textOverflow: "ellipsis",
	      textShadow: "rgba(0, 0, 0, 0.3) 1px 1px 0px",
	      border: "1px solid transparent",
	      whiteSpace: "nowrap",
	      background: "transparent"
	    }),
	    listInput: (0, _ui2["default"])({
	      width: "100%",
	      fontFamily: "monospace",
	      background: "transparent",
	      color: "transparent",
	      position: "absolute",
	      outline: "none",
	      border: "none"
	    }),
	    listContainer: (0, _ui2["default"])({
	      position: "absolute",
	      background: "#F1F1F1",
	      zIndex: "10",
	      padding: "5px",
	      marginTop: "-2px",
	      marginLeft: "-1px",
	      maxHeight: "200px",
	      overflowY: "scroll",
	      overflowX: "hidden",
	      display: "none",
	      border: "1px solid white",
	      boxShadow: "3px 3px 12px rgba(0, 0, 0, 0.4)," + "0 0 60px 2px rgba(0, 0, 0, 0.2)"
	    }),
	    index: (0, _ui2["default"])({
	      color: "#BCBCBC",
	      textShadow: "none",
	      width: "3.5em",
	      paddingRight: ".5em",
	      textAlign: "right",
	      display: "inline-block"
	    }),
	    elem: (0, _ui2["default"])({
	      outline: "none",
	      position: "relative"
	    })
	  },

	  bitmask: {
	    label: label({
	      width: "100%",
	      borderBottom: "none"
	    }),
	    input: (0, _ui2["default"])({
	      background: "transparent",
	      border: "none",
	      color: "#888",
	      fontFamily: "monospace",
	      float: "right",
	      outline: "none",
	      marginRight: "5px",
	      textAlign: "right",
	      width: "100%",
	      position: "absolute",
	      right: 0,
	      top: "0.33em"
	    }),
	    container: (0, _ui2["default"])({
	      margin: "5px",
	      padding: "5px",
	      flexDirection: "row",
	      display: "flex",
	      flexWrap: "wrap",
	      background: "#333",
	      outline: "1px solid #2E2E2E"
	    }),
	    btn: [btn({ width: "100%" }), btn({ width: "48%" }), btn({ width: "32%" })]
	  },

	  itemForm: {
	    form: {
	      flexDirection: "row",
	      justifyContent: "center",
	      alignItems: "stretch",
	      display: "flex"
	    },
	    box: (0, _box2["default"])({
	      width: "33%",
	      boxSizing: "border-box"
	    })
	  },

	  number: {
	    value: (0, _ui2["default"])({
	      color: "white",
	      fontWeight: "normal"
	    }),
	    golds: unit({ color: _dataColor2["default"].gold.toString() }),
	    silver: unit({ color: _dataColor2["default"].silver.toString() }),
	    copper: unit({ color: _dataColor2["default"].copper.toString() }),
	    second: unit({ color: _dataColor2["default"].grey.toString() }),
	    minute: unit({ color: _dataColor2["default"].monk.toString() }),
	    hour: unit({ color: _dataColor2["default"].blizz.toString() }),
	    label: halfLabel(),
	    labelRight: halfLabel({
	      textAlign: "right",
	      backgroundColor: "#333",
	      borderBottom: "transparent 1px solid"
	    }),
	    labelWide: label({
	      margin: "5px 1%",
	      width: "98%"
	    }),
	    input: (0, _ui2["default"])({
	      background: "transparent",
	      fontFamily: "monospace",
	      position: "absolute",
	      textAlign: "right",
	      marginRight: "5px",
	      outline: "none",
	      border: "none",
	      color: "white",
	      float: "right",
	      top: "0.33em",
	      width: "100%",
	      right: 0
	    })
	  },

	  progress: {
	    outerBar: toAttrs(outerBar({ width: "350px" })),
	    innerBar: toAttrs(innerBar({
	      width: "0%",
	      opacity: "1",
	      transform: "translateZ(0)",
	      transition: "width 1s cubic-bezier(0, 0.5, 0, 1), " + "opacity 1s cubic-bezier(0, 0.5, 0, 1)",
	      willChange: "width, opacity"
	    })),
	    barLabel: toAttrs(barLabel()),
	    container: (0, _ui2["default"])({
	      position: "fixed",
	      display: "none",
	      top: "10%",
	      left: "50%",
	      opacity: 0,
	      marginLeft: "-250px",
	      width: "500px",
	      background: "#202020",
	      height: "80%",
	      zIndex: 99,
	      borderRadius: "10px",
	      willChange: "opacity",
	      paddingTop: "50px",
	      transition: "opacity .2s cubic-bezier(0.7, 0, 1, 0.85)",
	      boxSizing: "border-box"
	    })
	  },

	  search: {
	    outerBar: outerBar({
	      width: "100%",
	      height: "35px",
	      boxSizing: "border-box"
	    }),
	    innerBar: innerBar({
	      display: "none",
	      height: "25px",
	      float: "left",
	      padding: "0 5px",
	      marginRight: "5px",
	      lineHeight: "25px"
	    }),
	    input: (0, _apply2["default"])({
	      lineHeight: "25px",
	      minWidth: "1px",
	      outline: "none",
	      display: "inline-block"
	    })()
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _apply = __webpack_require__(25);

	var _apply2 = _interopRequireDefault(_apply);

	exports['default'] = (0, _apply2['default'])({
	  cursor: 'default',
	  userSelect: 'none',
	  touchCallout: 'none'
	});
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _styleProperties = __webpack_require__(26);

	var _styleProperties2 = _interopRequireDefault(_styleProperties);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	function setPrefix(obj) {
	  var prefixed = {};
	  (0, _objectKeys2["default"])(obj).forEach(function (key) {
	    prefixed[(0, _styleProperties2["default"])(key)] = obj[key];
	  });
	  return prefixed;
	}

	exports["default"] = function (style) {
	  style = setPrefix(style);
	  var keys = (0, _objectKeys2["default"])(style);

	  return function (obj) {
	    if (!obj) {
	      return style;
	    }
	    obj = setPrefix(obj);

	    var key,
	        i = -1;

	    while (++i < keys.length) {
	      key = keys[i];
	      if (!obj[key]) {
	        obj[key] = style[key];
	      }
	    }

	    return obj;
	  };
	};

	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _stringCapitalize = __webpack_require__(27);

	var _stringCapitalize2 = _interopRequireDefault(_stringCapitalize);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var availableKeys = (0, _objectKeys2['default'])(window.getComputedStyle(document.documentElement, ''));

	function makePrefixRexExp(prefix) {
	  var firstChar = prefix[0];
	  return new RegExp("^[" + firstChar.toLowerCase() + firstChar.toUpperCase() + "]" + prefix.slice(1) + "[A-Z][a-zA-Z]+$");
	}

	var prefix = (function (prefixes) {
	  prefixes = prefixes.concat(prefixes.map(function (p) {
	    return (0, _stringCapitalize2['default'])(p);
	  }));
	  var i = -1;
	  while (++i < prefixes.length) {
	    var j = -1;
	    var prefixRegExp = makePrefixRexExp(prefixes[i]);
	    while (++j < availableKeys.length) {
	      if (prefixRegExp.test(availableKeys[j])) {
	        return prefixes[i];
	      }
	    }
	  }
	})(["Webkit", "Moz", "ms", "O", "khtml"]);

	var testAvailablility = {};
	availableKeys.forEach(function (key) {
	  return testAvailablility[key.toLowerCase()] = true;
	});

	var prefixBank = {};

	function getKey(key) {
	  if (!testAvailablility[key.toLowerCase()]) {
	    var prefixedKey = prefix + (0, _stringCapitalize2['default'])(key);
	    if (testAvailablility[prefixedKey.toLowerCase()]) {
	      return prefixedKey;
	    }
	  }
	  return key;
	}

	exports['default'] = function (key) {
	  if (!prefixBank[key]) {
	    prefixBank[key] = getKey(key);
	  }
	  return prefixBank[key];
	};

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalBaseToString = __webpack_require__(28);

	var _internalBaseToString2 = _interopRequireDefault(_internalBaseToString);

	'use strict';

	/**
	 * Capitalizes the first character of `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('fred');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  string = (0, _internalBaseToString2['default'])(string);
	  return string && string.charAt(0).toUpperCase() + string.slice(1);
	}

	exports['default'] = capitalize;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function baseToString(value) {
	  return value == null ? '' : value + '';
	}

	exports['default'] = baseToString;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _apply = __webpack_require__(25);

	var _apply2 = _interopRequireDefault(_apply);

	var _globals = __webpack_require__(30);

	var box = (0, _apply2['default'])({
	  background: "#444",
	  // outline: "1px solid #333",
	  // outlineOffset: "-2px",
	  boxShadow: "#555 0 0 0 1px," + "2px 3px 4px 3px rgba(0, 0, 0, 0.1)," + "rgba(0, 0, 0, 0.5) 0px 0px 8px 3px",
	  color: "#999",
	  // border: "1px solid #888",
	  textShadow: "1px 1px 0 #222",
	  margin: "5px"
	});

	box.padding = _globals.font.normal;

	var footer = (0, _apply2['default'])({
	  borderTopWidth: _globals.font.min,
	  borderTopStyle: "solid",
	  borderTopColor: _globals.color.grey.light,
	  padding: box.padding
	});

	var header = (0, _apply2['default'])({
	  background: _globals.color.main.normal,
	  color: "white",
	  fontSize: _globals.font.big,
	  padding: box.padding,
	  paddingTop: box.padding * 3
	});

	box.header = header;
	box.footer = footer;

	exports.header = header;
	exports.footer = footer;
	exports['default'] = box;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var mainHue = undefined,
	    altHue = undefined;

	var hueRange = function hueRange(hue) {
	  return hue > 360 ? hue % 360 : hue;
	};
	var hsl = function hsl(h, s, l) {
	  return "hsl(" + h + "," + s + "%," + l + "%)";
	};
	var setAltHue = function setAltHue(hue) {
	  return hueRange(typeof hue === "number" ? hue : mainHue + 180);
	};

	mainHue = 198;
	altHue = setAltHue(0);

	var color = {
	  main: {
	    sl: function sl(s, l) {
	      return hsl(mainHue, s, l);
	    },
	    dark: hsl(mainHue, 40, 35),
	    light: hsl(mainHue, 70, 85),
	    normal: hsl(mainHue, 80, 70),
	    darker: hsl(mainHue, 30, 25),
	    lighter: hsl(mainHue, 70, 95)
	  },
	  alt: {
	    sl: function sl(s, l) {
	      return hsl(altHue, s, l);
	    },
	    dark: hsl(altHue, 40, 35),
	    light: hsl(altHue, 70, 85),
	    normal: hsl(altHue, 80, 70),
	    darker: hsl(altHue, 30, 25),
	    lighter: hsl(altHue, 70, 95)
	  },
	  grey: {
	    l: function l(_l) {
	      return hsl(0, 0, _l);
	    },
	    dark: hsl(0, 0, 30),
	    light: hsl(0, 0, 85),
	    normal: hsl(0, 0, 60),
	    darker: hsl(0, 0, 15),
	    lighter: hsl(0, 0, 95)
	  }
	};

	function generateSizes(baseUnit) {
	  var fontMod = ~ ~(baseUnit / 5);

	  font.min = Math.max(baseUnit / 16, 1);

	  font.space = fontMod;
	  font.big = baseUnit + fontMod;
	  font.small = baseUnit - fontMod;
	  font.normal = baseUnit;

	  (0, _objectKeys2["default"])(font).forEach(function (key) {
	    if (typeof font[key] === "number") {
	      font[key + "2x"] = font[key] * 2;
	    }
	  });
	}

	var font = { family: "robot, sans-serif" };
	var material = {
	  shadow: {
	    text: "",
	    box: "0 2px 2px  0px rgba(0,0,0,.14)," + "0 3px 1px -2px rgba(0,0,0,.2)," + "0 1px 5px  0px rgba(0,0,0,.12)"
	  }
	};

	generateSizes(16);

	exports.color = color;
	exports.font = font;
	exports.material = material;
	exports["default"] = {
	  font: font,
	  color: color
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _$Colr = __webpack_require__(32);

	var _$Colr2 = _interopRequireDefault(_$Colr);

	var colors = {
	  grey: "9D9D9D",
	  white: "FFFFFF",
	  green: "1EFF00",
	  blue: "0070DD",
	  purple: "A335EE",
	  orange: "FF8000",
	  gold: "E6CC80",
	  blizz: "00CCFF",
	  deathKnight: "C41F3B",
	  druid: "FF7D0A",
	  hunter: "ABD473",
	  mage: "69CCF0",
	  monk: "00FF96",
	  paladin: "F58CBA",
	  priest: "FFFFFF",
	  rogue: "FFF569",
	  shaman: "0070DE",
	  warlock: "9482C9",
	  warrior: "C79C6E",
	  golds: "FCD60F",
	  silver: "C0C0C0",
	  copper: "FFA45B"
	};

	(0, _objectKeys2["default"])(colors).forEach(function (key) {
	  return colors[key] = (0, _$Colr2["default"])(colors[key]);
	});

	exports["default"] = colors;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Is = __webpack_require__(33);

	/* TODO:
	 * fix intToHex
	 * fix applyHsl
	 * add tools :)
	*/

	var _$Is2 = _interopRequireDefault(_$Is);

	var COLR_TYPE = "$/colr";

	var intToHex = function intToHex(n) {
	  return n.toString(16);
	};
	var intToRgb = function intToRgb(n) {
	  return { r: n >> 16 & 255, g: n >> 8 & 255, b: n & 255 };
	};
	var hexToInt = function hexToInt(hex) {
	  return parseInt(hex.length === 3 ? hex + hex : hex, 16);
	};
	var hexToRgb = function hexToRgb(hex) {
	  return intToRgb(hexToInt(hex));
	};
	var rgbToInt = function rgbToInt(_ref) {
	  var r = _ref.r;
	  var g = _ref.g;
	  var b = _ref.b;
	  return r << 16 | g << 8 | b;
	};
	var rbgToHex = function rbgToHex(_ref2) {
	  var r = _ref2.r;
	  var g = _ref2.g;
	  var b = _ref2.b;
	  return intToHex(rgbToInt(r, g, b));
	};

	function applyConstant(colr) {
	  colr.int = rgbToInt(colr);
	  colr.hex = intToHex(colr.int);
	  return colr;
	}

	function hueToRgb(q, p, t) {
	  t /= 360;
	  if (t < 0) t += 1;
	  if (t > 1) t -= 1;
	  if (t < 1 / 6) return p + (q - p) * 6 * t;
	  if (t < 1 / 2) return q;
	  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	  return ~ ~(p * 255);
	}

	function applyHsl(colr) {
	  if (colr.s < 0.0001) {
	    colr.r = colr.g = colr.b = l * 2.55; // achromatic
	    return applyConstant(colr);
	  }

	  var l = colr.l / 100;
	  var s = colr.s / 100;
	  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	  var p = 2 * l - q;

	  colr.r = hueToRgb(q, p, colr.h + 120);
	  colr.g = hueToRgb(q, p, colr.h);
	  colr.b = hueToRgb(q, p, colr.h - 120);

	  return applyConstant(colr);
	}

	function insertHsl(colr) {
	  var r = colr.r / 255;
	  var g = colr.g / 255;
	  var b = colr.b / 255;
	  var max = Math.max(r, g, b),
	      min = Math.min(r, g, b);

	  colr.l = (max + min) * 50;

	  if (max === min) {
	    return colr.h = colr.s = 0;
	  }

	  var d = max - min;

	  colr.s = (colr.l > 0.5 ? d / (2 - max - min) : d / (max + min)) * 100;
	  switch (max) {
	    case r:
	      colr.h = (g - b) / d + (g < b ? 6 : 0);break;
	    case g:
	      colr.h = (b - r) / d + 2;break;
	    case b:
	      colr.h = (r - g) / d + 4;break;
	  }
	  colr.h *= 60;
	  if (colr.h < 0) {
	    colr.h += 360;
	  }
	}

	function initFromInt(intValue) {
	  var self = intToRgb(intValue);

	  self.int = intValue;
	  self.hex = intToHex(intValue);
	  insertHsl(self);

	  return self;
	}

	function initColr(value) {
	  if (_$Is2["default"].text(value)) {
	    return initFromInt(hexToInt(value));
	  } else if (_$Is2["default"].num(value)) {
	    return initFromInt(value);
	  } else {
	    if (_$Is2["default"].num(value.int)) {
	      return initFromInt(value.int);
	    } else if (_$Is2["default"].text(value.hex)) {
	      return initFromInt(hexToInt(value.hex));
	    } else {
	      console.warn("unable to parse color from value:", value);
	      return initFromInt(0);
	    }
	  }
	}

	var isColr = function isColr(colr) {
	  return colr.type === COLR_TYPE;
	};

	function parseColr(value) {
	  var self = initColr(value);
	  self.type = COLR_TYPE;

	  self.clone = function () {
	    return parseColr(self.hex);
	  }, self.getComplementary = function () {
	    var comp = self.clone();
	    comp.h = comp.h > 180 ? comp.h - 180 : comp.h + 180;
	    comp.l += 50;
	    if (comp.l > 100) {
	      comp.l -= 50;
	    }
	    return applyHsl(comp);
	  };
	  self.getGrayScale = function () {
	    var comp = self.clone();
	    comp.s = 0;
	    return applyHsl(comp);
	  };
	  self.toString = function (type) {
	    switch (type) {
	      case "hsl":
	        return "hsl(" + self.h + "," + self.s + "%," + self.l + "%)";
	      case "rgb":
	        return "rgb(" + self.r + "," + self.g + "," + self.b + ")";
	      default:
	        return "#" + self.hex;
	    }
	  };
	  self.hex = value;
	  return self;
	}

	exports["default"] = parseColr;
	module.exports = exports["default"];

/***/ },
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _uiForm = __webpack_require__(35);

	var _uiForm2 = _interopRequireDefault(_uiForm);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _arrayFill = __webpack_require__(69);

	var _arrayFill2 = _interopRequireDefault(_arrayFill);

	var _$DOMLoader = __webpack_require__(72);

	var _$DOMLoader2 = _interopRequireDefault(_$DOMLoader);

	var _event = __webpack_require__(57);

	var _$Type = __webpack_require__(62);

	var _$Type2 = _interopRequireDefault(_$Type);

	var _dataItemLimitCategories = __webpack_require__(75);

	var _dataItemLimitCategories2 = _interopRequireDefault(_dataItemLimitCategories);

	var _dataItemSkills = __webpack_require__(76);

	var _dataItemQualities = __webpack_require__(77);

	var _dataItemQualities2 = _interopRequireDefault(_dataItemQualities);

	var _dataItemBondings = __webpack_require__(78);

	var _dataItemBondings2 = _interopRequireDefault(_dataItemBondings);

	var _dataItemSpellSkills = __webpack_require__(79);

	var _dataItemSpellSkills2 = _interopRequireDefault(_dataItemSpellSkills);

	var _dataItemStats = __webpack_require__(80);

	var _dataItemStats2 = _interopRequireDefault(_dataItemStats);

	var _dataItemFlags = __webpack_require__(81);

	var _dataItemFlags2 = _interopRequireDefault(_dataItemFlags);

	var _dataItemBags = __webpack_require__(83);

	var _dataItemBags2 = _interopRequireDefault(_dataItemBags);

	var _dataItemMods = __webpack_require__(84);

	var _dataItemMods2 = _interopRequireDefault(_dataItemMods);

	var _dataPlayerClasses = __webpack_require__(85);

	var _dataPlayerClasses2 = _interopRequireDefault(_dataPlayerClasses);

	var _dataPlayerRaces = __webpack_require__(86);

	var _dataPlayerRaces2 = _interopRequireDefault(_dataPlayerRaces);

	var _dataWorldReputations = __webpack_require__(87);

	var _dataWorldHolidays = __webpack_require__(88);

	var _dataWorldHolidays2 = _interopRequireDefault(_dataWorldHolidays);

	var _dataWorldMaps = __webpack_require__(89);

	var _dataWorldMaps2 = _interopRequireDefault(_dataWorldMaps);

	var _dataDocItemTemplate = __webpack_require__(90);

	var _dataDocItemTemplate2 = _interopRequireDefault(_dataDocItemTemplate);

	var _styleInputs = __webpack_require__(23);

	function isWeapon(item) {
	  return item["class"] === 2;
	}
	function isArmor(item) {
	  return item["class"] === 4;
	}
	function isContainer(item) {
	  return item["class"] === 1;
	}
	function isOpennable(item) {
	  return item.Flags & 0x04;
	}
	function isShield(item) {
	  return isArmor(item) && item.subclass === 6;
	}
	function hasArmor(item) {
	  return !!_dataItemMods2["default"].slot[item.InventoryType].armor;
	}

	/* 
	  show infos :
	  InventoryType: slot info, data: inventoryType
	  class: itemClass and subclass, data: itemClasses[item.class].sub[item.subclass]
	  entry
	*/

	function deleteKeys(keys, obj) {
	  keys.forEach(function (key) {
	    return delete obj[key];
	  });
	  return obj;
	}

	function makeStatInput(i, input, item) {
	  var index = i + 1;
	  var isInRange = function isInRange(data) {
	    return data.StatsCount + 1 >= index;
	  };
	  var typeKey = "stat_type" + index;
	  var valueKey = "stat_value" + index;

	  function setStatData(tKey, vKey, data) {
	    setTimeout(function () {
	      item[tKey] = data.type;
	      item[vKey] = data.value;
	    });
	  }

	  function applyChanges() {
	    if (item[typeKey] != 0) {
	      if (item[valueKey] != 0) {
	        item.StatsCount = Math.max(index, item.StatsCount);
	      }
	      return;
	    } else if (item[valueKey] != 0) {
	      return;
	    }

	    var defaultReturn = {
	      type: "0",
	      value: 0,
	      count: 0
	    };

	    var data = (function recur(i) {
	      if (i > 10) {
	        return defaultReturn;
	      }

	      var tKey = "stat_type" + i;
	      var vKey = "stat_value" + i;
	      var type = item[tKey];
	      var value = item[vKey];

	      if (value == 0 && type == 0) {
	        return defaultReturn;
	      }

	      var next = recur(i + 1);

	      setStatData(tKey, vKey, next);

	      return { type: type, value: value, count: next.count + 1 };
	    })(index + 1);

	    setStatData(typeKey, valueKey, data);
	    item.StatsCount = Math.min(item.StatsCount, index + data.count - 1);
	  }

	  var typeInput = input.select(typeKey, _dataItemStats2["default"]).add(applyChanges).filter(function (el) {
	    if (el.dataset.key != 0) {
	      for (var _i = 1; _i <= 10; _i++) {
	        if (el.dataset.key === item["stat_type" + _i]) {
	          return true;
	        }
	      }
	    }
	    return false;
	  })["if"](isInRange);

	  var valueInput = input.number(valueKey).add(applyChanges).test(_$Type2["default"].int.small)["if"](isInRange);

	  typeInput.HTMLElement.style.width = "58%";
	  typeInput.HTMLElement.style.display = "inline-block";
	  valueInput.HTMLElement.style.width = "38%";
	  valueInput.HTMLElement.style.verticalAlign = "top";
	  return [typeInput, valueInput];
	}

	exports["default"] = (0, _uiForm2["default"])(function (self, input) {
	  self.tooltips = _dataDocItemTemplate2["default"];
	  self.table = "item_template";
	  self.primaryKey = "entry";

	  var restrictions = [input.number("RequiredLevel").test(_$Type2["default"].int.tiny.unsigned), input.number("ItemLevel").test(_$Type2["default"].int.tiny.unsigned), input.bitmask("AllowableClass", _dataPlayerClasses2["default"].bitmask, 3).set(-1), input.bitmask("AllowableRace", _dataPlayerRaces2["default"].bitmask, 3).set(-1), input.select("ItemLimitCategory", _dataItemLimitCategories2["default"]), input.select("RequiredReputationFaction", _dataWorldReputations.factions), input.select("RequiredReputationRank", _dataWorldReputations.ranks)["if"](function (data) {
	    return data.RequiredReputationFaction != 0;
	  }), input.select("requiredspell", _dataItemSpellSkills2["default"]), input.select("RequiredSkill", _dataItemSkills.skills), input.number("RequiredSkillRank").test(_$Type2["default"].int.small.unsigned), input.number("area").test(_$Type2["default"].int.medium.unsigned), input.select("Map", deleteKeys((0, _objectKeys2["default"])(_dataWorldMaps2["default"]).filter(function (key) {
	    return key < 2;
	  }), _dataWorldMaps2["default"])), input.select("HolidayId", _dataWorldHolidays2["default"]), input.seconds("duration").test(_$Type2["default"].int.unsigned)];

	  var minMoney = input.money("minMoneyLoot").test(_$Type2["default"].int.unsigned)["if"](isOpennable).add(function (_) {
	    if (minMoney.isActive) {
	      self.data.maxMoneyLoot = Math.floor(self.data.minMoneyLoot * 1.25);
	    }
	  });

	  var maxMoney = input.money("maxMoneyLoot").test(_$Type2["default"].int.unsigned)["if"](isOpennable).add(function (_) {
	    if (maxMoney.isActive) {
	      self.data.minMoneyLoot = Math.floor(self.data.maxMoneyLoot * 0.75);
	    }
	  });

	  var buyPrice = input.money("BuyPrice").test(_$Type2["default"].intRange(0, _$Type2["default"].int.total * 4)).add(function (_) {
	    if (buyPrice.isActive) {
	      self.data.SellPrice = Math.floor(self.data.BuyPrice / 4);
	    }
	  });

	  var sellPrice = input.money("SellPrice").test(_$Type2["default"].int.unsigned).add(function (_) {
	    if (sellPrice.isActive) {
	      self.data.BuyPrice = Math.floor(self.data.SellPrice * 4);
	    }
	  });

	  var values = [input.select("Quality", _dataItemQualities2["default"].map(function (q) {
	    return q.name;
	  })).each(function (el, i) {
	    var style = el.childNodes[1].style;
	    style.color = _dataItemQualities2["default"][i].color.toString();
	    style.textShadow = "1px 1px 0 black";
	  }), input.number("delay").test(_$Type2["default"].int.small.unsigned)["if"](isWeapon), input.number("dmg_min1").test(_$Type2["default"].float)["if"](isWeapon), // auto
	  input.number("dmg_max1").test(_$Type2["default"].float)["if"](isWeapon), // auto
	  input.number("armor").test(_$Type2["default"].int.small.unsigned)["if"](function (data) {
	    return isArmor(data) && hasArmor(data.subclass);
	  }), // auto
	  input.number("block").test(_$Type2["default"].int.medium.unsigned)["if"](isShield), // auto
	  input.number("MaxDurability").test(_$Type2["default"].int.small.unsigned)["if"](function (data) {
	    return isWeapon(data) || isArmor(data) && hasArmor(data);
	  }), // auto
	  minMoney, maxMoney, (0, _arrayFill2["default"])(Array(10), null).map(function (_, i) {
	    return makeStatInput(i, input, self.data);
	  })];

	  var other = [input.text("name", 255), input.text("description", 255), input.bitmask("Flags", _dataItemFlags2["default"].base.bitmask, 1), input.bitmask("FlagsExtra", _dataItemFlags2["default"].extra.bitmask, 2), input.bitmask("flagsCustom", _dataItemFlags2["default"].custom.bitmask, 1), buyPrice, sellPrice, input.number("BuyCount").test(_$Type2["default"].int.tiny.unsigned), input.number("maxcount").test(_$Type2["default"].int), input.number("stackable").test(_$Type2["default"].int)["if"](function (item) {
	    return !isArmor(item) && !isWeapon(item);
	  }), input.number("ContainerSlots").test(_$Type2["default"].int.small.unsigned)["if"](isContainer), input.select("bonding", _dataItemBondings2["default"]), input.bitmask("BagFamily", _dataItemBags2["default"].bitmask), input.text("ScriptName", 64)];

	  var elem = _uiNew2["default"].form({ id: "item-form", style: _styleInputs.itemForm.form }, _uiNew2["default"].div({ style: _styleInputs.itemForm.box, id: "other" }, other), _uiNew2["default"].div({ style: _styleInputs.itemForm.box, id: "stats" }, values), _uiNew2["default"].div({ style: _styleInputs.itemForm.box, id: "restrictions" }, restrictions));

	  _event.on.resize(function (state) {
	    return elem.style.height = state.dom.h - 40 + "px";
	  });

	  self.HTMLElement = elem;

	  window.__form__ = self;

	  return self;
	});
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _langCloneDeep = __webpack_require__(36);

	var _langCloneDeep2 = _interopRequireDefault(_langCloneDeep);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _uiInput = __webpack_require__(54);

	var _uiInput2 = _interopRequireDefault(_uiInput);

	var _$Escape = __webpack_require__(68);

	var _$Escape2 = _interopRequireDefault(_$Escape);

	var _$Type = __webpack_require__(62);

	var _$Type2 = _interopRequireDefault(_$Type);

	exports["default"] = function (constructor) {
	  var self = {
	    load: function load(data) {
	      self.data = data;
	      self.originalData = (0, _langCloneDeep2["default"])(data);
	      self.keys = (0, _objectKeys2["default"])(data).sort();
	      return self;
	    },
	    input: {},
	    tooltips: {},
	    inputArray: [],
	    toSql: {
	      update: function update() {
	        var table = arguments.length <= 0 || arguments[0] === undefined ? self.table : arguments[0];
	        var primaryKey = arguments.length <= 1 || arguments[1] === undefined ? self.primaryKey : arguments[1];
	        return "UPDATE\n  " + table + "\nSET\n" + self.keys.filter(function (key) {
	          return self.data[key] !== self.originalData[key];
	        }).map(function (key, i) {
	          return "  " + key + " = " + _$Escape2["default"].sql(self.data[key]);
	        }).join(",\n") + "\nWHERE\n  " + primaryKey + " = '" + self.data[primaryKey] + "';";
	      },

	      insert: function insert() {
	        var table = arguments.length <= 0 || arguments[0] === undefined ? self.table : arguments[0];
	        var primaryKey = arguments.length <= 1 || arguments[1] === undefined ? self.primaryKey : arguments[1];
	        return self.toSql.insertHeader(table, primaryKey) + self.toSql.values() + ";";
	      },

	      values: function values() {
	        return self.keys.map(function (key) {
	          return self.data[key];
	        }).join(", ");
	      },

	      insertHeader: function insertHeader() {
	        var table = arguments.length <= 0 || arguments[0] === undefined ? self.table : arguments[0];
	        var primaryKey = arguments.length <= 1 || arguments[1] === undefined ? self.primaryKey : arguments[1];
	        return "DELETE FROM\n  " + table + "\nWHERE\n  " + primaryKey + " = '" + self.data[primaryKey] + "';" + "INSERT INTO\n  " + table + "\n  (" + self.keys.map(_$Escape2["default"].sqlKey).join(", ") + ")\nVALUES\n  ";
	      }
	    }
	  };

	  var input = (0, _uiInput2["default"])(self.load({}));

	  return constructor.call(self, self, input, _$Type2["default"]);
	};

	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalBaseClone = __webpack_require__(37);

	var _internalBaseClone2 = _interopRequireDefault(_internalBaseClone);

	var _internalBindCallback = __webpack_require__(52);

	var _internalBindCallback2 = _interopRequireDefault(_internalBindCallback);

	'use strict';

	/**
	 * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	 * to produce the cloned values. If `customizer` returns `undefined` cloning
	 * is handled by the method instead. The `customizer` is bound to `thisArg`
	 * and invoked with two argument; (value [, index|key, object]).
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	 * The enumerable properties of `arguments` objects and objects created by
	 * constructors other than `Object` are cloned to plain `Object` objects. An
	 * empty object is returned for uncloneable values such as functions, DOM nodes,
	 * Maps, Sets, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {*} Returns the deep cloned value.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * var deep = _.cloneDeep(users);
	 * deep[0] === users[0];
	 * // => false
	 *
	 * // using a customizer callback
	 * var el = _.cloneDeep(document.body, function(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(true);
	 *   }
	 * });
	 *
	 * el === document.body
	 * // => false
	 * el.nodeName
	 * // => BODY
	 * el.childNodes.length;
	 * // => 20
	 */
	function cloneDeep(value, customizer, thisArg) {
	  return typeof customizer == 'function' ? (0, _internalBaseClone2['default'])(value, true, (0, _internalBindCallback2['default'])(customizer, thisArg, 1)) : (0, _internalBaseClone2['default'])(value, true);
	}

	exports['default'] = cloneDeep;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _arrayCopy = __webpack_require__(38);

	var _arrayCopy2 = _interopRequireDefault(_arrayCopy);

	var _arrayEach = __webpack_require__(39);

	var _arrayEach2 = _interopRequireDefault(_arrayEach);

	var _baseAssign = __webpack_require__(40);

	var _baseAssign2 = _interopRequireDefault(_baseAssign);

	var _baseForOwn = __webpack_require__(42);

	var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

	var _initCloneArray = __webpack_require__(46);

	var _initCloneArray2 = _interopRequireDefault(_initCloneArray);

	var _initCloneByTag = __webpack_require__(47);

	var _initCloneByTag2 = _interopRequireDefault(_initCloneByTag);

	var _initCloneObject = __webpack_require__(51);

	var _initCloneObject2 = _interopRequireDefault(_initCloneObject);

	var _langIsArray = __webpack_require__(17);

	var _langIsArray2 = _interopRequireDefault(_langIsArray);

	var _langIsObject = __webpack_require__(9);

	var _langIsObject2 = _interopRequireDefault(_langIsObject);

	'use strict';

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!(0, _langIsObject2['default'])(value)) {
	    return value;
	  }
	  var isArr = (0, _langIsArray2['default'])(value);
	  if (isArr) {
	    result = (0, _initCloneArray2['default'])(value);
	    if (!isDeep) {
	      return (0, _arrayCopy2['default'])(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;

	    if (tag == objectTag || tag == argsTag || isFunc && !object) {
	      result = (0, _initCloneObject2['default'])(isFunc ? {} : value);
	      if (!isDeep) {
	        return (0, _baseAssign2['default'])(result, value);
	      }
	    } else {
	      return cloneableTags[tag] ? (0, _initCloneByTag2['default'])(value, tag, isDeep) : object ? value : {};
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);

	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? _arrayEach2['default'] : _baseForOwn2['default'])(value, function (subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}

	exports['default'] = baseClone;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	exports['default'] = arrayCopy;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	exports['default'] = arrayEach;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _baseCopy = __webpack_require__(41);

	var _baseCopy2 = _interopRequireDefault(_baseCopy);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	'use strict';

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null ? object : (0, _baseCopy2['default'])(source, (0, _objectKeys2['default'])(source), object);
	}

	exports['default'] = baseAssign;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	exports['default'] = baseCopy;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _baseFor = __webpack_require__(43);

	var _baseFor2 = _interopRequireDefault(_baseFor);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	'use strict';

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return (0, _baseFor2['default'])(object, iteratee, _objectKeys2['default']);
	}

	exports['default'] = baseForOwn;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createBaseFor = __webpack_require__(44);

	var _createBaseFor2 = _interopRequireDefault(_createBaseFor);

	'use strict';

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = (0, _createBaseFor2['default'])();

	exports['default'] = baseFor;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _toObject = __webpack_require__(45);

	var _toObject2 = _interopRequireDefault(_toObject);

	'use strict';

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var iterable = (0, _toObject2['default'])(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while (fromRight ? index-- : ++index < length) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	exports['default'] = createBaseFor;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _langIsObject = __webpack_require__(9);

	var _langIsObject2 = _interopRequireDefault(_langIsObject);

	'use strict';

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return (0, _langIsObject2['default'])(value) ? value : Object(value);
	}

	exports['default'] = toObject;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	/** Used for native method references. */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	exports['default'] = initCloneArray;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bufferClone = __webpack_require__(48);

	var _bufferClone2 = _interopRequireDefault(_bufferClone);

	'use strict';

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return (0, _bufferClone2['default'])(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case float32Tag:case float64Tag:
	    case int8Tag:case int16Tag:case int32Tag:
	    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? (0, _bufferClone2['default'])(buffer) : buffer, object.byteOffset, object.length);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}

	exports['default'] = initCloneByTag;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _root = __webpack_require__(49);

	var _root2 = _interopRequireDefault(_root);

	'use strict';

	/** Native method references. */
	var ArrayBuffer = _root2['default'].ArrayBuffer,
	    Uint8Array = _root2['default'].Uint8Array;

	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	    var result = new ArrayBuffer(buffer.byteLength),
	        view = new Uint8Array(result);

	    view.set(new Uint8Array(buffer));
	    return result;
	}

	exports['default'] = bufferClone;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';

	/** Used to determine if values are of the language type `Object`. */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	/** Detect free variable `self`. */
	var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	/** Detect free variable `window`. */
	var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal || freeWindow !== (undefined && undefined.window) && freeWindow || freeSelf || undefined;

	exports['default'] = root;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)(module), (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor();
	}

	exports['default'] = initCloneObject;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilityIdentity = __webpack_require__(53);

	var _utilityIdentity2 = _interopRequireDefault(_utilityIdentity);

	'use strict';

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return _utilityIdentity2['default'];
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1:
	      return function (value) {
	        return func.call(thisArg, value);
	      };
	    case 3:
	      return function (value, index, collection) {
	        return func.call(thisArg, value, index, collection);
	      };
	    case 4:
	      return function (accumulator, value, index, collection) {
	        return func.call(thisArg, accumulator, value, index, collection);
	      };
	    case 5:
	      return function (value, other, key, object, source) {
	        return func.call(thisArg, value, other, key, object, source);
	      };
	  }
	  return function () {
	    return func.apply(thisArg, arguments);
	  };
	}

	exports['default'] = bindCallback;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function identity(value) {
	  return value;
	}

	exports['default'] = identity;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = Input;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiInputText = __webpack_require__(60);

	var _uiInputText2 = _interopRequireDefault(_uiInputText);

	var _uiInputNumber = __webpack_require__(56);

	var _uiInputNumber2 = _interopRequireDefault(_uiInputNumber);

	var _uiInputSelect = __webpack_require__(63);

	var _uiInputSelect2 = _interopRequireDefault(_uiInputSelect);

	var _uiInputSeconds = __webpack_require__(55);

	var _uiInputSeconds2 = _interopRequireDefault(_uiInputSeconds);

	var _uiInputMoney = __webpack_require__(66);

	var _uiInputMoney2 = _interopRequireDefault(_uiInputMoney);

	var _uiInputBitmask = __webpack_require__(67);

	var _uiInputBitmask2 = _interopRequireDefault(_uiInputBitmask);

	function Input(form) {
	  return {
	    text: _uiInputText2["default"].bind(Input, form),
	    number: _uiInputNumber2["default"].bind(Input, form),
	    seconds: _uiInputSeconds2["default"].bind(Input, form),
	    money: _uiInputMoney2["default"].bind(Input, form),
	    select: _uiInputSelect2["default"].bind(Input, form),
	    bitmask: _uiInputBitmask2["default"].bind(Input, form)
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _uiInputNumber = __webpack_require__(56);

	var _uiInputNumber2 = _interopRequireDefault(_uiInputNumber);

	var _styleInputs = __webpack_require__(23);

	var MIN = 60;
	var HOUR = 3600;

	var toAttrs = function toAttrs(style) {
	  return { style: style };
	};

	function TimeUnit(key, unitStyle) {
	  var value = _uiNew2["default"].b(toAttrs(_styleInputs.number.value), "0");
	  var self = _uiNew2["default"].span(toAttrs(unitStyle), value, key);

	  self.setValue = function (n) {
	    value.textContent = n;
	    if (key !== "s") {
	      self.style.display = n === 0 ? "none" : "";
	    }
	    return self;
	  };
	  return self;
	}

	exports["default"] = function (form, key) {
	  var s = TimeUnit("s", _styleInputs.number.second);
	  var m = TimeUnit("m", _styleInputs.number.minute);
	  var h = TimeUnit("h", _styleInputs.number.hour);
	  var display = _uiNew2["default"].div(toAttrs(_styleInputs.number.labelRight), h, m, s);
	  var applyValue = function applyValue() {
	    var value = form.data[key];
	    s.setValue(value % MIN);
	    m.setValue(Math.floor(value % HOUR / MIN));
	    h.setValue(Math.floor(value / HOUR));
	  };
	  var input = (0, _uiInputNumber2["default"])(form, key).add(applyValue);
	  var elem = _uiNew2["default"].div({
	    onclick: input.select,
	    dataset: { tooltip: form.tooltips[key] }
	  }, input, display);
	  input.HTMLElement = elem;
	  applyValue();

	  return input;
	};

	module.exports = exports["default"];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = number;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$Is = __webpack_require__(33);

	var _$Is2 = _interopRequireDefault(_$Is);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _event = __webpack_require__(57);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _styleInputs = __webpack_require__(23);

	var ZERO = "0".charCodeAt(0);

	function stringToIntArray(str) {
	  var max = str.length;
	  var result = Array(max);
	  var i = -1;

	  while (++i < max) {
	    result[i] = str.charCodeAt(i) - ZERO;
	  }

	  return result;
	}

	function flattenArray(arr) {
	  var total = 0;

	  function recur(i) {
	    recur(i + 1);
	    if (i >= arr.length) {
	      return;
	    }
	    var n = arr[i];
	    if (n > 10) {} else if (n < 10) {}
	  }
	  recur(0);

	  return total;
	}

	var calcDiffValue = function calcDiffValue(diff) {
	  return Math.max(Math.pow(10, diff), 1);
	};
	var keyHandlers = {
	  38: calcDiffValue,
	  40: function _(diff) {
	    return -calcDiffValue(diff);
	  }
	};

	function number(form, key, wide) {
	  var input = (0, _$Task2["default"])();
	  var inputElem = _uiNew2["default"].input({
	    type: "text",
	    style: _styleInputs.number.input,
	    onkeydown: function onkeydown(event) {
	      var fn = keyHandlers[event.keyCode];
	      var t = event.target;

	      if (_$Is2["default"].fn(fn)) {
	        relSelectionPos = t.value.length - t.selectionEnd;
	        form.data[key] += fn(relSelectionPos);
	        event.preventDefault();
	      }
	    }
	  });
	  var elem = _uiNew2["default"].label({
	    style: wide ? _styleInputs.number.labelWide : _styleInputs.number.label,
	    onclick: function onclick() {
	      return inputElem.select();
	    },
	    dataset: { tooltip: form.tooltips[key] }
	  }, key, inputElem);

	  input.HTMLElement = elem;

	  form.data[key] || (form.data[key] = 0);
	  inputElem.value = form.data[key];

	  input.id = (0, _objectKeys2["default"])(form.input).length;
	  form.inputArray[input.id] = input;
	  form.input[key] = input;

	  var prevFormData = form.data[key];
	  var isValid = _$Is2["default"].num;
	  var relSelectionPos = undefined;
	  var show = undefined;

	  input.test = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      isValid = fn;
	    }
	    return input;
	  };

	  input.clear = function (fn) {
	    elem.style.color = "";
	    inputElem.value = form.data[key];
	  };

	  input.highlight = function (fn) {
	    return elem.style.color = "aliceblue";
	  };

	  input.setValidState = function (state) {
	    if (input.isValid === state) return;
	    input.isValid = state;
	    inputElem.classList[state ? "remove" : "add"]("invalid");
	  };

	  input["if"] = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      show = fn;
	    }
	    return input;
	  };

	  input.select = function () {
	    inputElem.select();
	    return input;
	  };

	  _event.on.focus(function (state) {
	    if (state.focus === inputElem) {
	      input.isActive = true;
	      input.highlight();
	    } else {
	      input.isActive = false;
	      input.clear();
	    }
	  });

	  var setSelection = function setSelection(pos) {
	    inputElem.selectionStart = pos;
	    inputElem.selectionEnd = pos;
	  };

	  _eventLoop2["default"].add(function (event) {
	    if (!show || show(form.data)) {
	      if (prevFormData !== form.data[key]) {
	        var pos = inputElem.selectionEnd;
	        inputElem.value = form.data[key];
	        if (relSelectionPos !== undefined) {
	          setSelection(form.data[key].toString().length - relSelectionPos);
	          relSelectionPos = undefined;
	        }
	        input.exec(event);
	      } else {
	        var val = parseInt(inputElem.value, 10) || 0;

	        if (val.toString() !== inputElem.value) {
	          input.setValidState(false);
	        } else {
	          input.setValidState(isValid(val));
	          if (val !== form.data[key] && input.isValid) {
	            form.data[key] = val;
	            input.exec(event);
	          }
	        }
	      }
	      prevFormData = form.data[key];
	      input.HTMLElement.classList.remove("hide");
	    } else {
	      input.HTMLElement.classList.add("hide");
	    }
	  });

	  return input;
	}

	module.exports = exports["default"];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var _stateDom = __webpack_require__(58);

	var _stateDom2 = _interopRequireDefault(_stateDom);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	__webpack_require__(59);

	var events = {
	  middleClickDown: false,
	  rightClickDown: false,
	  leftClickDown: false,
	  middleClickUp: false,
	  rightClickUp: false,
	  leftClickUp: false,
	  mouseMove: false,
	  keyDown: false,
	  resize: false,
	  scroll: false,
	  keyUp: false,
	  hover: false,
	  focus: false
	};

	var on = {};
	var tasks = {};

	var eventKeys = (0, _objectKeys2["default"])(events);

	var i = -1;

	while (++i < eventKeys.length) {
	  var t = (0, _$Task2["default"])(),
	      key = eventKeys[i];

	  tasks[key] = t;
	  on[key] = t.add;
	  // if ("mouseMove" !== key && "hover" !== key) {
	  //   t.add(e => console.log(~~(e.event.diff), key));
	  // }
	}

	function execute() {
	  var i = -1,
	      key = undefined;

	  while (++i < eventKeys.length) {
	    key = eventKeys[i];
	    if (events[key]) {
	      tasks[key].exec(_stateDom2["default"]);
	      events[key] = false;
	    }
	  }
	}

	exports["default"] = tasks;
	exports.execute = execute;
	exports.events = events;
	exports.on = on;

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dom = {
	  w: 0,
	  h: 0
	};

	var view = {
	  w: 0,
	  h: 0
	};

	var mouse = {
	  btn: {
	    r: 0,
	    m: 0,
	    l: 0
	  },
	  y: 0,
	  x: 0,
	  hover: document.window
	};

	var scroll = {
	  bottom: 0,
	  size: 15,
	  raw: 0,
	  top: 0
	};

	var keys = {};
	var i = 223;
	while (--i > 0) {
	  keys[i] = 0;
	}

	var state = {
	  event: { diff: 0, start: 0, now: 0 },
	  mouse: mouse,
	  scroll: scroll,
	  dom: dom,
	  keys: keys,
	  view: view,
	  focus: document.window
	};

	exports["default"] = state;
	exports.scroll = scroll;
	exports.mouse = mouse;
	exports.view = view;
	exports.keys = keys;
	exports.dom = dom;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _loop = __webpack_require__(21);

	var _loop2 = _interopRequireDefault(_loop);

	var _index = __webpack_require__(57);

	var _stateDom = __webpack_require__(58);

	// Add a div to find the scroll bar width

	var _stateDom2 = _interopRequireDefault(_stateDom);

	var scrollBox = document.createElement('div');
	scrollBox.style.visibility = "hidden";
	scrollBox.style.overflowX = "scroll";
	document.body.appendChild(scrollBox);

	window.onmousemove = function (event) {
	  _stateDom.mouse.x = event.pageX;
	  _stateDom.mouse.y = event.pageY;
	  if (!event.which) {
	    refreshAllButton();
	  }
	  _index.events.mouseMove = true;
	};

	window.onkeyup = function (event) {
	  _stateDom.keys[event.which] = 0;
	  _index.events.keyUp = true;
	};

	window.onkeydown = function (event) {
	  _stateDom.keys[event.which] = _stateDom2['default'].event.start;
	  _index.events.keyDown = true;
	};

	window.onmousedown = function (event) {
	  switch (event.which) {
	    case 1:
	      _stateDom.mouse.btn.l = _stateDom2['default'].event.start;_index.events.leftClickDown = true;break;
	    case 2:
	      _stateDom.mouse.btn.m = _stateDom2['default'].event.start;_index.events.middleClickDown = true;break;
	    case 3:
	      _stateDom.mouse.btn.r = _stateDom2['default'].event.start;_index.events.rightClickDown = true;break;
	    default:
	      break;
	  }
	};

	function refreshAllButton() {
	  if (_stateDom.mouse.btn.m) {
	    releaseMiddleButton();
	  }
	  if (_stateDom.mouse.btn.r) {
	    releaseRightButton();
	  }
	  if (_stateDom.mouse.btn.l) {
	    releaseLeftButton();
	  }
	}

	function releaseMiddleButton() {
	  _stateDom.mouse.btn.m = 0;_index.events.middleClickUp = true;
	}
	function releaseRightButton() {
	  _stateDom.mouse.btn.r = 0;_index.events.rightClickUp = true;
	}
	function releaseLeftButton() {
	  _stateDom.mouse.btn.l = 0;_index.events.leftClickUp = true;
	}

	window.onmouseup = function (event) {
	  switch (event.which) {
	    case 1:
	      releaseLeftButton();break;
	    case 2:
	      releaseMiddleButton();break;
	    case 3:
	      releaseRightButton();break;
	    default:
	      break;
	  }
	};

	var base = document.documentElement;

	function apply(obj, key, value, eventKey) {
	  if (obj[key] !== value) {
	    obj[key] = value;
	    _index.events[eventKey] = true;
	  }
	}

	// init
	_loop2['default'].add(function (event) {
	  _stateDom2['default'].event = event;
	  _stateDom.scroll.size = scrollBox.getBoundingClientRect().height;
	  console.log("Scroll bar size:", _stateDom.scroll.size);
	  document.body.removeChild(scrollBox);
	  return false;
	});

	// don't trigger focus on body until mouse release
	function checkFocus() {
	  var active = document.activeElement;
	  if (active !== document.body || _stateDom2['default'].mouse.btn.l === 0 && _stateDom2['default'].mouse.btn.m === 0 && _stateDom2['default'].mouse.btn.r === 0) {
	    apply(_stateDom2['default'], "focus", active, "focus");
	  }
	}

	function checkScroll(raw) {
	  if (raw === _stateDom.scroll.raw) {
	    return;
	  }
	  _stateDom.scroll.raw = raw;
	  _stateDom.scroll.top = Math.abs(raw);
	  _stateDom.scroll.bottom = _stateDom.scroll.top + _stateDom.view.h;
	  _index.events.scroll = true;
	}

	// Update loop
	_loop2['default'].add(function (event) {
	  var b = base.getBoundingClientRect();
	  apply(_stateDom.dom, "h", b.height, "resize");
	  apply(_stateDom.dom, "w", b.width, "resize");
	  apply(_stateDom.view, "h", window.innerHeight, "resize");
	  apply(_stateDom.view, "w", window.innerWidth, "resize");
	  apply(_stateDom.mouse, "hover", document.elementFromPoint(_stateDom.mouse.x, _stateDom.mouse.y), "hover");
	  checkScroll(b.top);
	  checkFocus();
	  (0, _index.execute)();
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = text;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$Is = __webpack_require__(33);

	var _$Is2 = _interopRequireDefault(_$Is);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _$SelectEditableContent = __webpack_require__(61);

	var _$SelectEditableContent2 = _interopRequireDefault(_$SelectEditableContent);

	var _event = __webpack_require__(57);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _$Type = __webpack_require__(62);

	var _$Type2 = _interopRequireDefault(_$Type);

	var _styleInputs = __webpack_require__(23);

	function text(form, key) {
	  var limit = arguments.length <= 2 || arguments[2] === undefined ? Infinity : arguments[2];

	  var input = (0, _$Task2["default"])();
	  var inputElem = _uiNew2["default"].span({
	    style: _styleInputs.text.input,
	    spellcheck: false,
	    contentEditable: true
	  });
	  var text = _uiNew2["default"].span({ style: { display: "inline-block" } }, key);
	  var elem = _uiNew2["default"].label({
	    style: _styleInputs.text.label,
	    onclick: function onclick() {
	      input.highlight();
	    },
	    dataset: { tooltip: form.tooltips[key] }
	  }, text, inputElem, _uiNew2["default"].div({ style: { clear: "both" } }));

	  input.HTMLElement = elem;
	  form.data[key] || (form.data[key] = "");
	  inputElem.textContent = form.data[key];
	  input.id = (0, _objectKeys2["default"])(form.input).length;
	  form.inputArray[input.id] = input;
	  form.input[key] = input;

	  var isValid = _$Type2["default"].text.max(limit);
	  var show = undefined;
	  var prevFormData = form.data[key];

	  input.test = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      isValid = fn;
	    }
	    return input;
	  };

	  input.set = function (value) {
	    inputElem.innerHTML = value;
	    form.data[key] = value;
	    input.exec();

	    return input;
	  };

	  input.clear = function (fn) {
	    elem.style.color = "";
	    inputElem.textContent = form.data[key];
	  };

	  // since it's editable content, we don't have access to .select :)
	  input.highlight = function () {
	    (0, _$SelectEditableContent2["default"])(inputElem);
	    elem.style.color = "aliceblue";
	  };

	  input.setValidState = function (state) {
	    if (input.isValid === state) return;
	    input.isValid = state;
	    inputElem.classList[state ? "remove" : "add"]("invalid");
	  };

	  input["if"] = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      show = fn;
	    }
	    return input;
	  };

	  _event.on.focus(function (state) {
	    if (state.focus === inputElem) {
	      input.isActive = true;
	      input.highlight();
	    } else {
	      input.isActive = false;
	      input.clear();
	    }
	  });

	  function applyLargeStyle() {
	    inputElem.style.background = "#333";
	    inputElem.style.textAlign = "left", inputElem.style.outline = "#2E2E2E solid 1px";
	    inputElem.style.padding = "5px";
	    inputElem.style.margin = "4px 0";
	    inputElem.style.float = "left";
	  }
	  function clearLargeStyle() {
	    inputElem.style.background = "";
	    inputElem.style.textAlign = "right";
	    inputElem.style.outline = "none";
	    inputElem.style.padding = "";
	    inputElem.style.margin = "0 4px";
	    inputElem.style.float = "right";
	  }

	  _eventLoop2["default"].add(function (event) {
	    if (!show || show(form.data)) {
	      if (prevFormData !== form.data[key]) {
	        inputElem.textContent = form.data[key];
	        input.exec();
	      } else {
	        var val = inputElem.textContent;

	        input.setValidState(isValid(val));
	        if (val !== form.data[key] && input.isValid) {
	          form.data[key] = val;
	          inputElem.textContent = val;
	          input.exec();
	        }
	      }
	      setTimeout(inputElem.offsetTop - text.offsetTop < 10 ? clearLargeStyle : applyLargeStyle);
	      prevFormData = form.data[key];
	      elem.classList.remove("hide");
	    } else {
	      elem.classList.add("hide");
	    }
	  });

	  return input;
	}

	module.exports = exports["default"];

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (el) {
	  var range = document.createRange();
	  var sel = window.getSelection();

	  range.selectNodeContents(el);
	  sel.removeAllRanges();
	  sel.addRange(range);
	};

	module.exports = exports["default"];

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function text(str) {
	  return typeof str === "string";
	}

	function isInt(n) {
	  return isNumber(n) && Math.floor(n) === n;
	}

	function isNumber(n) {
	  return typeof n === "number" && !isNaN(n);
	}

	function range(fn, min, max) {
	  return function (n) {
	    return fn(n) && n >= min && n <= max;
	  };
	}

	function intRange(min, max) {
	  return range(isInt, min, max);
	}

	function bytesToBits(bytes) {
	  return bytes * 8;
	}

	/*
	  because using (1 << bits) isn't working on 64bits numbers
	  performance here isn't important
	*/

	function calcBitsMaxValue(bits) {
	  var total = 1;

	  while (bits--) {
	    total *= 2;
	  }

	  return total - 1;
	}

	function byteRange(byteCount) {
	  var total = calcBitsMaxValue(bytesToBits(byteCount));
	  var low = -((total + 1) / 2);
	  var high = (total - 1) / 2;
	  var fn = intRange(low, high);

	  fn.unsigned = intRange(0, total);
	  fn.high = high;
	  fn.low = low;
	  fn.total = total;

	  return fn;
	}

	var int = byteRange(4);

	int.big = byteRange(8);
	int.tiny = byteRange(1);
	int.small = byteRange(2);
	int.medium = byteRange(3);

	int.max = function (max) {
	  return function (n) {
	    return isInt(n) && n <= max;
	  };
	};
	text.max = function (max) {
	  return function (str) {
	    return text(str) && str.length <= max;
	  };
	};
	isNumber.max = function (max) {
	  return function (n) {
	    return isNumber(n) && n <= max;
	  };
	};

	exports["default"] = {
	  range: range,
	  intRange: intRange,
	  text: text,
	  int: int,
	  num: isNumber,
	  float: isNumber
	};
	module.exports = exports["default"];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = select;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Is = __webpack_require__(33);

	var _$Is2 = _interopRequireDefault(_$Is);

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var _event = __webpack_require__(57);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _$Clamp = __webpack_require__(64);

	var _$Clamp2 = _interopRequireDefault(_$Clamp);

	var _$Fallthrough = __webpack_require__(65);

	var _$Fallthrough2 = _interopRequireDefault(_$Fallthrough);

	var _styleInputs = __webpack_require__(23);

	// chrome has a better scroll into view, so let's use it if available
	var SCROLL_FN_KEY = _$Is2["default"].fn(document.body.scrollIntoViewIfNeeded) ? "scrollIntoViewIfNeeded" : "scrollIntoView";

	function newListElem(key, i, list, onclick) {
	  var self = _uiNew2["default"].div({
	    onclick: onclick,
	    style: _styleInputs.select.listElem,
	    dataset: {
	      key: key,
	      index: i,
	      value: list[key],
	      tooltip: key + " " + list[key]
	    }
	  }, _uiNew2["default"].span({ style: _styleInputs.select.index }, key.toString()), _uiNew2["default"].span(list[key]));

	  self.visible = true;

	  self.setVisibilityState = function (state) {
	    self.style.display = state ? "" : "none";
	    self.visible = state;
	  };

	  return self;
	}

	function Selector(list, keys, input, applySelection) {
	  var self = {};
	  var listElems = keys.map(function (key, i) {
	    return newListElem(key, i, list, function () {
	      return applySelection(self.select(i));
	    });
	  });
	  var elem = _uiNew2["default"].div({ style: _styleInputs.select.listContainer }, listElems);

	  var index = 0;

	  self.HTMLElement = elem;

	  self.show = function () {
	    if (self.visible) {
	      return;
	    }
	    elem.style.display = "";
	    self.visible = true;
	    input.select();
	    input.style.position = "";
	    input.style.color = "white";
	    self.select(index);
	  };

	  self.hide = function () {
	    if (!self.visible) {
	      return;
	    }
	    elem.style.display = "none";
	    input.style.position = "absolute";
	    input.style.color = "transparent";
	    self.visible = false;
	  };

	  var maxIter = listElems.length - 1;
	  var indexClamp = _$Clamp2["default"].bind(null, 0, maxIter);

	  self.set = function (key) {
	    for (var i = 0; i < listElems.length; i++) {
	      if (listElems[i].dataset.key == key) {
	        self.select(i);
	      }
	    }
	  };

	  function applySelectedStyle(el) {
	    el.style.color = "black";
	    el.style.background = "#BCBCBC";
	    el.style.border = "1px solid #A8A8A8";
	    el.firstChild.style.color = "white";
	  }

	  function clearSelectedStyle(el) {
	    el.style.color = _styleInputs.select.listElem.color;
	    el.style.background = _styleInputs.select.listElem.background;
	    el.style.border = _styleInputs.select.listElem.border;
	    el.firstChild.style.color = _styleInputs.select.index.color;
	  }

	  self.select = function (i) {
	    clearSelectedStyle(listElems[index]);
	    index = indexClamp(parseInt(i, 10));
	    applySelectedStyle(listElems[index]);
	    listElems[index][SCROLL_FN_KEY]();
	  };

	  self.each = function (fn) {
	    var i = -1;
	    while (++i <= maxIter) {
	      if (fn.call(self, listElems[i], i, listElems) === false) {
	        break;
	      }
	    }
	  };

	  self.filter = function (fn) {
	    return self.each(function (el, i) {
	      return el.setVisibilityState(!fn(el, i));
	    });
	  };

	  self.getRelativeIndex = function (diff) {
	    var step = diff > 0 ? 1 : -1;
	    var i = index;

	    diff = Math.abs(diff);

	    while (diff > 0) {
	      i = indexClamp(i + step);
	      if (i === 0 || i === maxIter) {
	        break;
	      }
	      if (listElems[i].visible) {
	        diff--;
	      }
	    }
	    return i;
	  };

	  self.next = function () {
	    return self.select(self.getRelativeIndex(1));
	  };
	  self.prev = function () {
	    return self.select(self.getRelativeIndex(-1));
	  };
	  self.fastNext = function () {
	    return self.select(self.getRelativeIndex(5));
	  };
	  self.fastPrev = function () {
	    return self.select(self.getRelativeIndex(-5));
	  };

	  self.getSelected = function () {
	    return listElems[index].dataset;
	  };

	  return self;
	}

	/* ToDo :
	 * up / down move in list
	 * fuzzy match sort the list
	 * show / hide the list on focus
	 * select the elem
	 * handle clicks *ewww*
	 */

	function select(form, key, list) {
	  list[0] || (list[0] = "none");

	  var keys = (0, _objectKeys2["default"])(list);
	  var input = (0, _$Task2["default"])();
	  var isValid = function isValid(val) {
	    return list.indexOf(val) !== -1;
	  };
	  var display = _uiNew2["default"].span({ style: _styleInputs.select.display });
	  var inputElem = _uiNew2["default"].input({
	    type: "text",
	    style: _styleInputs.select.listInput,
	    onkeydown: function onkeydown(event) {
	      if (event.keyCode === 27) {
	        selector.hide();
	      } else {
	        var fn = handlers[event.keyCode];
	        if (_$Is2["default"].fn(fn)) {
	          fn(event);
	          event.preventDefault();
	        }
	        showSelectorList();
	      }
	    }
	  });

	  function applySelection() {
	    form.data[key] = selector.getSelected().key;
	  }

	  var label = _uiNew2["default"].label({ style: _styleInputs.select.label }, key, display, inputElem);
	  var selector = Selector(list, keys, inputElem, applySelection);
	  var handlers = {
	    33: selector.fastPrev,
	    34: selector.fastNext,
	    38: selector.prev,
	    40: selector.next,
	    13: applySelection
	  };
	  var elem = _uiNew2["default"].div({
	    style: _styleInputs.select.elem,
	    onclick: showSelectorList,
	    dataset: { tooltip: form.tooltips[key] }
	  }, label, selector);

	  input.HTMLElement = elem;

	  form.data[key] || (form.data[key] = 0);
	  selector.set(parseInt(form.data[key], 10));
	  display.textContent = selector.getSelected().value;

	  input.id = (0, _objectKeys2["default"])(form.input).length;
	  form.inputArray[input.id] = input;
	  form.input[key] = input;

	  var show = undefined,
	      filterBy = undefined;
	  var prevFormData = form.data[key];

	  input.clear = function (fn) {
	    label.style.color = "";
	    selector.hide();
	  };

	  input.highlight = function (fn) {
	    label.style.color = "aliceblue";
	    showSelectorList();
	  };

	  input.filter = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      filterBy = fn;
	    }
	    return input;
	  };

	  input["if"] = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      show = fn;
	    }
	    return input;
	  };

	  _event.on.focus(function (state) {
	    if (state.focus === inputElem) {
	      input.isActive = true;
	      input.highlight();
	    } else {
	      input.isActive = false;
	      input.clear();
	    }
	  });

	  var calcSize = function calcSize() {
	    return selector.HTMLElement.style.width = label.clientWidth + "px";
	  };

	  function applyFilter() {
	    if (filterBy) {
	      selector.filter(filterBy);
	    }
	  }

	  function showSelectorList() {
	    if (selector.visible) {
	      return;
	    }
	    selector.select(0);
	    calcSize();
	    applyFilter();
	    selector.show();
	  }

	  _event.on.resize(calcSize);

	  _eventLoop2["default"].add(function () {
	    if (prevFormData !== form.data[key]) {
	      selector.set(form.data[key]);
	      display.textContent = selector.getSelected().value;
	      applyFilter();
	      setTimeout(selector.hide);
	      input.exec();
	    }
	    prevFormData = form.data[key];
	    elem.classList[!show || show(form.data) ? "remove" : "add"]("hide");
	  });

	  (0, _$Fallthrough2["default"])(input, selector, "each");

	  return input;
	}

	module.exports = exports["default"];

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (min, max, value) {
	  return value < min ? min : value > max ? max : value;
	};

	module.exports = exports["default"];

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (source, target, keys) {
	  var makeFallthroughMethod = function makeFallthroughMethod(key) {
	    source[key] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      target[key].apply(this, args);
	      return source;
	    };
	  };
	  if (typeof keys === "string") {
	    makeFallthroughMethod(keys);
	  } else {
	    keys.forEach(makeFallthroughMethod);
	  }
	};

	module.exports = exports["default"];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _uiInputNumber = __webpack_require__(56);

	var _uiInputNumber2 = _interopRequireDefault(_uiInputNumber);

	var _styleInputs = __webpack_require__(23);

	var COPPER = 1;
	var SILVER = COPPER * 100;
	var GOLD = SILVER * 100;

	var toAttrs = function toAttrs(style) {
	  return { style: style };
	};

	function MoneyUnit(key, unitStyle) {
	  var value = _uiNew2["default"].b(toAttrs(_styleInputs.number.value), "0");
	  var self = _uiNew2["default"].span(toAttrs(unitStyle), value, key);

	  self.setValue = function (n) {
	    value.textContent = n;
	    if (key !== "c") {
	      self.style.display = n === 0 ? "none" : "";
	    }
	    return self;
	  };
	  return self;
	}

	exports["default"] = function (form, key) {
	  var c = MoneyUnit("c", _styleInputs.number.copper);
	  var s = MoneyUnit("s", _styleInputs.number.silver);
	  var g = MoneyUnit("g", _styleInputs.number.golds);
	  var display = _uiNew2["default"].div(toAttrs(_styleInputs.number.labelRight), g, s, c);

	  var applyValue = function applyValue() {
	    var value = form.data[key];
	    c.setValue(value % SILVER);
	    s.setValue(Math.floor(value % GOLD / SILVER));
	    g.setValue(Math.floor(value / GOLD));
	  };

	  var input = (0, _uiInputNumber2["default"])(form, key).add(applyValue);
	  var elem = _uiNew2["default"].div({
	    onclick: input.select,
	    dataset: { tooltip: form.tooltips[key] }
	  }, input, display);
	  input.HTMLElement = elem;

	  applyValue();

	  return input;
	};

	module.exports = exports["default"];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = number;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _$Is = __webpack_require__(33);

	var _$Is2 = _interopRequireDefault(_$Is);

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var _event = __webpack_require__(57);

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _styleInputs = __webpack_require__(23);

	// because javascript can't handle 64bit int bitwise opperations...
	function decomposeBigInt(n) {
	  var result = [];

	  (function recur(bit) {
	    if (n > bit) {
	      n = recur(bit * 2);
	    }
	    if (n >= bit) {
	      result.push(bit);
	      return n - bit;
	    }
	    return n;
	  })(1);

	  return result;
	}

	function bitSelector(b, toggle, rows) {
	  var elem = _uiNew2["default"].div({
	    style: _styleInputs.bitmask.btn[rows - 1] || _styleInputs.bitmask.btn[0],
	    onclick: toggle.bind(null, b),
	    dataset: { tooltip: b.name + " (" + b.bitmask + ")" }
	  }, b.name);

	  b.on = function () {
	    elem.style.color = "aliceblue";
	    b.isOn = true;
	  };

	  b.off = function () {
	    elem.style.color = "";
	    b.isOn = false;
	  };

	  b.HTMLElement = elem;

	  return elem;
	}

	function atoi(n) {
	  return parseInt(n, 10) || 0;
	}

	function number(form, key, list, rows) {
	  list = (0, _objectKeys2["default"])(list).reduce(function (r, key) {
	    if (!/^Unk/.test(list[key].name)) {
	      r[key] = list[key];
	    }
	    return r;
	  }, {});
	  var input = (0, _$Task2["default"])();
	  var keys = (0, _objectKeys2["default"])(list);
	  var inputElem = _uiNew2["default"].input({ type: "number", style: _styleInputs.bitmask.input });
	  var max = keys.reduce(function (r, n) {
	    return r + atoi(n);
	  }, 0);
	  var isValid = function isValid(n) {
	    return _$Is2["default"].int(n) && n >= -1 && n <= max;
	  };

	  function toggleBit(b) {
	    if (b.isOn) {
	      b.off();
	    } else {
	      b.on();
	    }
	    inputElem.value = computeValue();
	  }

	  function areAllBitsOn() {
	    var i = -1;

	    while (++i < keys.length) {
	      if (!list[keys[i]].isOn) {
	        return false;
	      }
	    }

	    return true;
	  }

	  function toggleAllBits(state) {
	    if (typeof state !== "boolean") {
	      state = areAllBitsOn();
	    }
	    var actionKey = state ? "off" : "on";
	    var i = -1;

	    while (++i < keys.length) {
	      list[keys[i]][actionKey]();
	    }
	    inputElem.value = state ? 0 : -1;
	  }

	  var bitsElem = keys.map(function (i) {
	    return bitSelector(list[i], toggleBit, rows);
	  });
	  var label = _uiNew2["default"].label({ style: _styleInputs.bitmask.label }, key, inputElem);
	  if (/^All/.test(key)) {
	    bitsElem.unshift(_uiNew2["default"].div({
	      style: _styleInputs.bitmask.btn[rows - 1] || _styleInputs.bitmask.btn[0],
	      onclick: toggleAllBits
	    }, "All"));
	  }
	  var listContainer = _uiNew2["default"].div({ style: {
	      overflow: "hidden",
	      width: "100%",
	      tableLayout: "fixed",
	      display: "table"
	    } }, bitsElem);
	  var elem = _uiNew2["default"].div({
	    style: _styleInputs.bitmask.container,
	    onclick: inputElem.focus.bind(inputElem),
	    dataset: { tooltip: form.tooltips[key] }
	  }, label, listContainer);

	  input.HTMLElement = elem;
	  form.data[key] || (form.data[key] = 0);
	  inputElem.value = form.data[key];
	  input.id = (0, _objectKeys2["default"])(form.input).length;
	  form.inputArray[input.id] = input;
	  form.input[key] = input;

	  var show = undefined;
	  var prevFormData = form.data[key];

	  input.clear = function (fn) {
	    label.style.color = "";
	    inputElem.value = form.data[key];
	  };

	  input.highlight = function (fn) {
	    return label.style.color = "aliceblue";
	  };

	  input.setValidState = function (state) {
	    if (input.isValid === state) return;
	    input.isValid = state;
	    inputElem.classList[state ? "remove" : "add"]("invalid");
	  };

	  input["if"] = function (fn) {
	    if (_$Is2["default"].fn(fn)) {
	      show = fn;
	    }
	    return input;
	  };

	  // on.hover(state => {
	  //   if (state.hover)
	  // });

	  function applyValue(val) {
	    if (val === -1) {
	      return toggleAllBits(false);
	    }
	    if (val === 0) {
	      return toggleAllBits(true);
	    }

	    var bitmasks = decomposeBigInt(val);

	    keys.forEach(function (key) {
	      return bitmasks.indexOf(list[key].bitmask) !== -1 ? list[key].on() : list[key].off();
	    });
	  }

	  function computeValue() {
	    return keys.reduce(function (total, key) {
	      return total += list[key].isOn ? list[key].bitmask : 0;
	    }, 0);
	  }

	  _event.on.focus(function (state) {
	    if (state.focus === inputElem) {
	      input.isActive = true;
	      listContainer.style.display = "table";
	      input.highlight();
	    } else {
	      input.isActive = false;
	      listContainer.style.display = "none";
	      input.clear();
	    }
	  });

	  input.set = function (value) {
	    form.data[key] = value;
	    applyValue(value);
	    input.exec();
	    return input;
	  };

	  _eventLoop2["default"].add(function (event) {
	    if (!show || show(form.data)) {
	      if (prevFormData !== form.data[key]) {
	        applyValue(form.data[key]);
	        input.exec();
	      } else {
	        var val = atoi(inputElem.value);

	        if (val.toString() !== inputElem.value) {
	          input.setValidState(false);
	        } else {
	          input.setValidState(isValid(val));
	          if (val !== form.data[key] && input.isValid) {
	            input.set(val);
	          }
	        }
	      }
	      prevFormData = form.data[key];
	      elem.classList.remove("hide");
	    } else {
	      elem.classList.add("hide");
	    }
	  });

	  return input;
	}

	module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _is = __webpack_require__(33);

	var _is2 = _interopRequireDefault(_is);

	var mysqlKeywords = ["catalog_name", "class_origin", "column_name", "constraint_catalog", "constraint_name", "constraint_schema", "cursor_name", "error", "general", "ignore_server_ids", "master_heartbeat_period", "message_text", "mysql_errno", "proxy", "relay", "relaylog", "resignal", "schema_name", "signal", "slow", "subclass_origin", "table_name", "xml", "accessible", "action", "add", "after", "against", "aggregate", "algorithm", "all", "alter", "analyze", "and", "any", "as", "asc", "ascii", "asensitive", "at", "authors", "autoextend_size", "auto_increment", "avg", "avg_row_length", "backup", "before", "begin", "between", "bigint", "binary", "binlog", "bit", "blob", "block", "bool", "boolean", "both", "btree", "by", "byte", "cache", "call", "cascade", "cascaded", "case", "catalog_name", "chain", "change", "changed", "char", "character", "charset", "check", "checksum", "cipher", "class_origin", "client", "close", "coalesce", "code", "collate", "collation", "column", "columns", "column_name", "comment", "commit", "committed", "compact", "completion", "compressed", "concurrent", "condition", "connection", "consistent", "constraint", "constraint_catalog", "constraint_name", "constraint_schema", "contains", "context", "continue", "contributors", "convert", "cpu", "create", "cross", "cube", "current_date", "current_time", "current_timestamp", "current_user", "cursor", "cursor_name", "data", "database", "databases", "datafile", "date", "datetime", "day", "day_hour", "day_microsecond", "day_minute", "day_second", "deallocate", "dec", "decimal", "declare", "default", "definer", "delayed", "delay_key_write", "delete", "desc", "describe", "des_key_file", "deterministic", "directory", "disable", "discard", "disk", "distinct", "distinctrow", "div", "do", "double", "drop", "dual", "dumpfile", "duplicate", "dynamic", "each", "else", "elseif", "enable", "enclosed", "end", "ends", "engine", "engines", "enum", "error[a]", "errors", "escape", "escaped", "event", "events", "every", "execute", "exists", "exit", "expansion", "explain", "extended", "extent_size", "false", "fast", "faults", "fetch", "fields", "file", "first", "fixed", "float", "float4", "float8", "flush", "for", "force", "foreign", "found", "frac_second[b]", "from", "full", "fulltext", "function", "general[c]", "geometry", "geometrycollection", "get_format", "global", "grant", "grants", "group", "handler", "hash", "having", "help", "high_priority", "host", "hosts", "hour", "hour_microsecond", "hour_minute", "hour_second", "identified", "if", "ignore", "ignore_server_ids[d]", "import", "in", "index", "indexes", "infile", "initial_size", "inner", "innobase[e]", "innodb[f]", "inout", "insensitive", "insert", "insert_method", "install", "int", "int1", "int2", "int3", "int4", "int8", "integer", "interval", "into", "invoker", "io", "io_thread", "ipc", "is", "isolation", "issuer", "iterate", "join", "key", "keys", "key_block_size", "kill", "language", "last", "leading", "leave", "leaves", "left", "less", "level", "like", "limit", "linear", "lines", "linestring", "list", "load", "local", "localtime", "localtimestamp", "lock", "locks", "logfile", "logs", "long", "longblob", "longtext", "loop", "low_priority", "master", "master_connect_retry", "master_heartbeat_period[g]", "master_host", "master_log_file", "master_log_pos", "master_password", "master_port", "master_server_id", "master_ssl", "master_ssl_ca", "master_ssl_capath", "master_ssl_cert", "master_ssl_cipher", "master_ssl_key", "master_ssl_verify_server_cert", "master_user", "match", "maxvalue", "max_connections_per_hour", "max_queries_per_hour", "max_rows", "max_size", "max_updates_per_hour", "max_user_connections", "medium", "mediumblob", "mediumint", "mediumtext", "memory", "merge", "message_text", "microsecond", "middleint", "migrate", "minute", "minute_microsecond", "minute_second", "min_rows", "mod", "mode", "modifies", "modify", "month", "multilinestring", "multipoint", "multipolygon", "mutex", "mysql_errno", "name", "names", "national", "natural", "nchar", "ndb", "ndbcluster", "new", "next", "no", "nodegroup", "none", "not", "no_wait", "no_write_to_binlog", "null", "numeric", "nvarchar", "offset", "old_password", "on", "one", "one_shot", "open", "optimize", "option", "optionally", "options", "or", "order", "out", "outer", "outfile", "owner", "pack_keys", "page", "parser", "partial", "partition", "partitioning", "partitions", "password", "phase", "plugin", "plugins", "point", "polygon", "port", "precision", "prepare", "preserve", "prev", "primary", "privileges", "procedure", "processlist", "profile", "profiles", "proxy[h]", "purge", "quarter", "query", "quick", "range", "read", "reads", "read_only", "read_write", "real", "rebuild", "recover", "redofile", "redo_buffer_size", "redundant", "references", "regexp", "relay[i]", "relaylog", "relay_log_file", "relay_log_pos", "relay_thread", "release", "reload", "remove", "rename", "reorganize", "repair", "repeat", "repeatable", "replace", "replication", "require", "reset", "resignal", "restore", "restrict", "resume", "return", "returns", "revoke", "right", "rlike", "rollback", "rollup", "routine", "row", "rows", "row_format", "rtree", "savepoint", "schedule", "schema", "schemas", "schema_name", "second", "second_microsecond", "security", "select", "sensitive", "separator", "serial", "serializable", "server", "session", "set", "share", "show", "shutdown", "signal", "signed", "simple", "slave", "slow[j]", "smallint", "snapshot", "socket", "some", "soname", "sounds", "source", "spatial", "specific", "sql", "sqlexception", "sqlstate", "sqlwarning", "sql_big_result", "sql_buffer_result", "sql_cache", "sql_calc_found_rows", "sql_no_cache", "sql_small_result", "sql_thread", "sql_tsi_day", "sql_tsi_frac_second[k]", "sql_tsi_hour", "sql_tsi_minute", "sql_tsi_month", "sql_tsi_quarter", "sql_tsi_second", "sql_tsi_week", "sql_tsi_year", "ssl", "start", "starting", "starts", "status", "stop", "storage", "straight_join", "string", "subclass_origin", "subject", "subpartition", "subpartitions", "super", "suspend", "swaps", "switches", "table", "tables", "tablespace", "table_checksum", "table_name", "temporary", "temptable", "terminated", "text", "than", "then", "time", "timestamp", "timestampadd", "timestampdiff", "tinyblob", "tinyint", "tinytext", "to", "trailing", "transaction", "trigger", "triggers", "true", "truncate", "type", "types", "uncommitted", "undefined", "undo", "undofile", "undo_buffer_size", "unicode", "uninstall", "union", "unique", "unknown", "unlock", "unsigned", "until", "update", "upgrade", "usage", "use", "user", "user_resources", "use_frm", "using", "utc_date", "utc_time", "utc_timestamp", "value", "values", "varbinary", "varchar", "varcharacter", "variables", "varying", "view", "wait", "warnings", "week", "when", "where", "while", "with", "work", "wrapper", "write", "x509", "xa", "xml", "xor", "year", "year_month", "zerofill"];

	var sqlEscapes = {
	  "\0": "\\0",
	  "\n": "\\n",
	  "\r": "\\r",
	  "\b": "\\b",
	  "\t": "\\t",
	  "\x1a": "\\Z",
	  "'": "''",
	  '"': '""'
	};

	var contain = function contain(list, val) {
	  return list.indexOf(val) !== -1;
	};
	var notIn = function notIn(list, val) {
	  return list.indexOf(val) === -1;
	};
	var wrap = function wrap(c, str) {
	  return c + str + c;
	};
	var sqlRegex = new RegExp(/[\0\n\r\b\t\\'"\x1a]/g);
	var sqlReplace = function sqlReplace(c) {
	  return sqlEscapes[c] || "\\" + c;
	};
	var backTick = function backTick(c) {
	  return c === "`" ? "``" : c;
	};
	var sqlKey = function sqlKey(str) {
	  if (contain(mysqlKeywords, str.toLowerCase())) {
	    return wrap("`", str);
	  }
	  return contain(str, "`") ? str : wrap("`", str.replace("`", "``"));
	};

	var sql = function sql(str) {
	  if (_is2["default"].string(str)) {
	    return wrap("'", str.replace(sqlRegex, sqlReplace));
	  }
	  if (str === null) {
	    return "NULL";
	  }
	  return str;
	};

	exports["default"] = { sql: sql, sqlKey: sqlKey, wrap: wrap };
	module.exports = exports["default"];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _internalBaseFill = __webpack_require__(70);

	var _internalBaseFill2 = _interopRequireDefault(_internalBaseFill);

	var _internalIsIterateeCall = __webpack_require__(71);

	var _internalIsIterateeCall2 = _interopRequireDefault(_internalIsIterateeCall);

	'use strict';

	/**
	 * Fills elements of `array` with `value` from `start` up to, but not
	 * including, `end`.
	 *
	 * **Note:** This method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to fill.
	 * @param {*} value The value to fill `array` with.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = [1, 2, 3];
	 *
	 * _.fill(array, 'a');
	 * console.log(array);
	 * // => ['a', 'a', 'a']
	 *
	 * _.fill(Array(3), 2);
	 * // => [2, 2, 2]
	 *
	 * _.fill([4, 6, 8], '*', 1, 2);
	 * // => [4, '*', 8]
	 */
	function fill(array, value, start, end) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return [];
	  }
	  if (start && typeof start != 'number' && (0, _internalIsIterateeCall2['default'])(array, value, start)) {
	    start = 0;
	    end = length;
	  }
	  return (0, _internalBaseFill2['default'])(array, value, start, end);
	}

	exports['default'] = fill;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * The base implementation of `_.fill` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to fill.
	 * @param {*} value The value to fill `array` with.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns `array`.
	 */
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function baseFill(array, value, start, end) {
	  var length = array.length;

	  start = start == null ? 0 : +start || 0;
	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end === undefined || end > length ? length : +end || 0;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : end >>> 0;
	  start >>>= 0;

	  while (start < length) {
	    array[start++] = value;
	  }
	  return array;
	}

	exports['default'] = baseFill;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isArrayLike = __webpack_require__(11);

	var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

	var _isIndex = __webpack_require__(18);

	var _isIndex2 = _interopRequireDefault(_isIndex);

	var _langIsObject = __webpack_require__(9);

	var _langIsObject2 = _interopRequireDefault(_langIsObject);

	'use strict';

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!(0, _langIsObject2['default'])(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number' ? (0, _isArrayLike2['default'])(object) && (0, _isIndex2['default'])(index, object.length) : type == 'string' && index in object) {
	    var other = object[index];
	    return value === value ? value === other : other !== other;
	  }
	  return false;
	}

	exports['default'] = isIterateeCall;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _get = __webpack_require__(73);

	var _get2 = _interopRequireDefault(_get);

	exports["default"] = function (url, header) {
	  return (0, _get2["default"])(url, header).then(function (req) {
	    return new window.DOMParser().parseFromString(req.responseText, "text/html");
	  });
	};

	module.exports = exports["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _Ajax = __webpack_require__(74);

	var _Ajax2 = _interopRequireDefault(_Ajax);

	exports["default"] = function (url) {
	  return (0, _Ajax2["default"])("GET", url);
	};

	module.exports = exports["default"];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _objectKeys = __webpack_require__(5);

	var _objectKeys2 = _interopRequireDefault(_objectKeys);

	var matchContent = /^Content-Type\:\s*(.*?)$/mi;
	var isFn = function isFn(fn) {
	  return typeof fn === "function";
	};
	var warn = function warn(methodName, fn) {
	  return console.warn(methodName, "argument must be a function, was :", typeof fn);
	};
	var skip = function skip() {};

	var checkFn = function checkFn(thisArg, fn, key, action) {
	  if (isFn(fn)) {
	    action(fn);
	  } else {
	    warn(key);
	  }
	  return thisArg;
	};

	exports["default"] = function (type, url, header, data) {
	  var req = new XMLHttpRequest();

	  if (data && typeof data === "object") {
	    (0, _objectKeys2["default"])(data).forEach(function (key) {
	      return req[key] = data[key];
	    });
	  }

	  if (header && typeof header === "object") {
	    (0, _objectKeys2["default"])(header).forEach(function (key) {
	      return req.setRequestHeader(key, header[key]);
	    });
	  }

	  req.open(type, url, true);

	  var q = new Promise(function (resolve, reject) {
	    req.onerror = reject;
	    req.onreadystatechange = function () {
	      if (this.readyState === 4 && this.status === 200) {
	        resolve(this);
	      }
	    };
	  });

	  req.send(req.body);

	  var setCatch = function setCatch(fn) {
	    return q = q["catch"](fn);
	  };
	  var setThen = function setThen(fn) {
	    return q = q.then(fn);
	  };
	  var setOnloadstart = function setOnloadstart(fn) {
	    return req.onloadstart = fn;
	  };
	  var setOnloadend = function setOnloadend(fn) {
	    return req.onloadend = fn;
	  };
	  var setOnprogress = function setOnprogress(fn) {
	    return req.onprogress = fn;
	  };

	  var self = {
	    "catch": function _catch(fn) {
	      return checkFn(self, fn, "catch", setCatch);
	    },
	    then: function then(fn) {
	      return checkFn(self, fn, "then", setThen);
	    },
	    onloadstart: function onloadstart(fn) {
	      return checkFn(self, fn, "onloadstart", setOnloadstart);
	    },
	    onloadend: function onloadend(fn) {
	      return checkFn(self, fn, "onloadend", setOnloadend);
	    },
	    onprogress: function onprogress(fn) {
	      return checkFn(self, fn, "onprogress", setOnprogress);
	    },
	    abort: function abort() {
	      req.abort();
	      return self;
	    },
	    getContentType: function getContentType() {
	      return req.getAllResponseHeaders().match(matchContent)[1];
	    }
	  };

	  return self;
	};

	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  0: "none",
	  2: "Dragon's Eye",
	  3: "Healthstone",
	  4: "Mana Gem",
	  44: "Althor's Abacus",
	  45: "Bauble of True Blood",
	  46: "Corpse Tongue Coin",
	  47: "Deathbringer's Will",
	  48: "Dislodged Foreign Object",
	  49: "Phylactery of the Nameless Lich",
	  50: "Tiny Abomination in a Jar",
	  51: "Sindragosa's Flawless Fang",
	  52: "Abomination's Bloody Ring",
	  53: "Signet of Putrefaction",
	  54: "Cerise Coiled Ring",
	  55: "Rotface's Rupturing Ring",
	  56: "Saurfang's Cold-Forged Band",
	  57: "Seal of the Twilight Queen",
	  58: "Thrice Fanged Signet",
	  59: "Band of the Bone Colossus",
	  60: "Devium's Eternally Cold Ring",
	  61: "Seal of Many Mouths",
	  62: "Frostbrood Sapphire Ring",
	  63: "Juggernaut Band",
	  64: "Loop of the Endless Labyrinth",
	  65: "Marrowgar's Frigid Eye",
	  66: "Memory of Malygos",
	  67: "Might of Blight",
	  68: "Ring of Maddening Whispers",
	  69: "Ring of Rapid Ascent",
	  70: "Skeleton Lord's Circle",
	  71: "Valanar's Other Signet Ring",
	  72: "Incarnadine Band of Mending",
	  73: "Muradin's Spyglass",
	  74: "Sliver of Pure Ice",
	  75: "Unidentifiable Organ",
	  76: "Whispering Fanged Skull",
	  78: "Ring of Phased Regeneration",
	  79: "Saviana's Tribute",
	  80: "Signet of Twilight",
	  81: "Zarithrian's Offering",
	  82: "Sharpened Twilight Scale",
	  83: "Petrified Twilight Scale",
	  84: "Glowing Twilight Scale",
	  85: "Charred Twilight Scale"
	};
	module.exports = exports["default"];

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var skills = {
	  129: "First Aid",
	  165: "Leatherworking",
	  171: "Alchemy",
	  182: "Herbalism",
	  185: "Cooking",
	  186: "Mining",
	  197: "Tailoring",
	  202: "Engineering",
	  333: "Enchanting",
	  356: "Fishing",
	  393: "Skinning",
	  633: "Lockpicking",
	  755: "Jewelcrafting",
	  762: "Riding",
	  773: "Inscription"
	};

	var ranks = [{ min: 0, max: 75, name: "Apprentice" }, { min: 50, max: 150, name: "Journeyman" }, { min: 125, max: 225, name: "Expert" }, { min: 200, max: 300, name: "Artisan" }, { min: 275, max: 375, name: "Master" }, { min: 350, max: 450, name: "Grand Master" }];

	exports["default"] = { skills: skills, ranks: ranks };
	module.exports = exports["default"];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _dataColor = __webpack_require__(31);

	var _dataColor2 = _interopRequireDefault(_dataColor);

	var qualities = [{ name: "Poor", color: _dataColor2["default"].grey }, { name: "Common", color: _dataColor2["default"].white }, { name: "Uncommon", color: _dataColor2["default"].green }, { name: "Rare", color: _dataColor2["default"].blue }, { name: "Epic", color: _dataColor2["default"].purple }, { name: "Legendary", color: _dataColor2["default"].orange }, { name: "Artifact", color: _dataColor2["default"].gold }, { name: "Bind to Account", color: _dataColor2["default"].gold }];

	exports["default"] = qualities;
	module.exports = exports["default"];

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var bondings = {
	  0: "No bounds",
	  1: "Binds when picked up",
	  2: "Binds when equipped",
	  3: "Binds when used",
	  4: "Quest item",
	  5: "Quest Item1"
	};

	exports["default"] = bondings;
	module.exports = exports["default"];

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var spells = {
	  9787: "Weaponsmith",
	  9788: "Armorsmith",
	  10656: "Dragonscale Leatherworking",
	  10658: "Elemental Leatherworking",
	  10660: "Tribal Leatherworking",
	  17039: "Master Swordsmith",
	  17040: "Master Hammersmith",
	  17041: "Master Axesmith",
	  20219: "Gnomish Engineer",
	  20222: "Goblin Engineering",
	  26797: "Spellfire Tailoring",
	  26798: "Mooncloth Tailoring",
	  26801: "Shadoweave Tailoring",
	  27126: "Arcane Intellect",
	  27127: "Arcane Brilliance",
	  33388: "Apprentice Riding",
	  33391: "Journeyman Riding",
	  34090: "Expert Riding",
	  34091: "Artisan Riding"
	};

	exports["default"] = spells;
	module.exports = exports["default"];

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  3: "Agility",
	  4: "Strength",
	  5: "Intellect",
	  6: "Spirit",
	  7: "Stamina",
	  12: "Defense Skill",
	  13: "Dodge",
	  14: "Parry",
	  15: "Block",
	  31: "Hit",
	  32: "Crit",
	  36: "Haste",
	  37: "Expertise",
	  38: "Attack Power",
	  43: "Mana Regeneration",
	  44: "Armor Penetration",
	  45: "Spell Power",
	  46: "Health Regen",
	  47: "Spell Penetration",
	  48: "Block Value"
	};
	module.exports = exports["default"];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _dataBuildBitmask = __webpack_require__(82);

	var _dataBuildBitmask2 = _interopRequireDefault(_dataBuildBitmask);

	var base = ["Unknown 1", "Conjured item", "Openable (can be opened by right-click)", "Makes green \"Heroic\" text appear on item", "Deprecated Item", "Item can not be destroyed, except by using spell (item can be reagent for spell)", "Unknown 2", "No default 30 seconds cooldown when equipped", "Unknown 3", "Wrapper : Item can wrap other items", "Unknown 4", "Item is party loot and can be looted by all", "Item is refundable", "Charter (Arena or Guild)", "Unknown 5 (Only readable items have this, but not all)", "Unknown 6", "Unknown 7", "Unknown 8", "Item can be prospected", "Unique equipped (player can only have one equipped at the same time)", "Unknown 9", "Item can be used during arena match", "Throwable (for tooltip ingame)", "Item can be used in shapeshift forms", "Unknown 10", "Profession recipes: can only be looted if you meet requirements and don't already know it", "Item cannot be used in arena", "Bind to Account (Also needs Quality = 7 set)", "Spell is cast with triggered flag", "Millable", "Unknown 11", "Bind on Pickup tradeable"].reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	var extra = ["Horde Only", "Alliance Only", "When item uses ExtendedCost in npc_vendor, gold is also required", "Makes need roll for this item disabled", "NEED_ROLL_DISABLED", "HAS_NORMAL_PRICE", "BNET_ACCOUNT_BOUND", "CANNOT_BE_TRANSMOG", "CANNOT_TRANSMOG", "CAN_TRANSMOG"].reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	var custom = ["Item duration will tick even if player is offline", "No quest status will be checked when this item drops", "Item will always follow group/master/need before greed looting rules"].reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	exports["default"] = { base: base, extra: extra, custom: custom };
	module.exports = exports["default"];

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function toCamelCase(res, word) {
	  return res + (res ? word[0].toUpperCase() + word.slice(1) : word);
	}

	function camelCase(key) {
	  return key.toLowerCase().split(" ").reduce(toCamelCase);
	}

	var bitmasksValues = (function (ret) {
	  var _mask = 1;
	  for (var i = 0; i < 64; i++) {
	    ret.push(_mask);
	    _mask *= 2;
	  }
	  return ret;
	})([]);

	exports["default"] = function (res, name, id) {
	  var key = camelCase(name);
	  var bitmask = bitmasksValues[id];
	  var playerClass = { id: id, bitmask: bitmask, name: name, key: key };

	  res[id] = playerClass;
	  res[key] = playerClass;
	  res.bitmask[bitmask] = playerClass;

	  return res;
	};

	module.exports = exports["default"];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _dataBuildBitmask = __webpack_require__(82);

	var _dataBuildBitmask2 = _interopRequireDefault(_dataBuildBitmask);

	var bags = ["None", "Arrows", "Bullets", "Soul Shards", "Leatherworking Supplies", "Inscription Supplies", "Herbs", "Enchanting Supplies", "Engineering Supplies", "Keys", "Gems", "Mining Supplies", "Soulbound Equipment", "Vanity Pets", "Currency Tokens", "Quest Items"].reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	exports["default"] = bags;
	module.exports = exports["default"];

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mods = {
	  slot: [{ armor: 0.00, stat: 0.0, cost: 0.0 }, // None
	  { armor: 1.75, stat: 1.7, cost: 1.7 }, // Head
	  { armor: 0.00, stat: 1.1, cost: 2.2 }, // Neck
	  { armor: 1.60, stat: 1.5, cost: 1.5 }, // Shoulders
	  { armor: 0.00, stat: 0.0, cost: 2.0 }, // Shirt
	  { armor: 2.15, stat: 1.9, cost: 2.0 }, // Vest
	  { armor: 1.25, stat: 1.5, cost: 1.5 }, // Waist
	  { armor: 1.90, stat: 1.9, cost: 1.9 }, // Legs
	  { armor: 1.50, stat: 1.4, cost: 1.5 }, // Feet
	  { armor: 1.00, stat: 1.0, cost: 1.0 }, // Wrist
	  { armor: 1.35, stat: 1.4, cost: 1.4 }, // Hands
	  { armor: 0.00, stat: 1.0, cost: 2.0 }, // Ring
	  { armor: 0.00, stat: 1.1, cost: 2.2 }, // Trinket
	  { armor: 0.00, stat: 1.2, cost: 4.8 }, // One hand
	  { armor: 13.0, stat: 1.2, cost: 4.8 }, // Shield
	  { armor: 0.00, stat: 0.8, cost: 3.2 }, // Bow
	  { armor: 1.20, stat: 1.3, cost: 1.3 }, // Back
	  { armor: 0.00, stat: 1.8, cost: 7.2 }, // Two hand
	  { armor: 0.00, stat: 0.0, cost: 0.4 }, // Bag
	  { armor: 0.00, stat: 0.0, cost: 0.0 }, // Tabbard
	  { armor: 2.15, stat: 1.9, cost: 1.9 }, // Robe
	  { armor: 0.00, stat: 1.2, cost: 4.8 }, // Main hand
	  { armor: 0.00, stat: 1.2, cost: 4.8 }, // Off hand
	  { armor: 0.00, stat: 1.2, cost: 4.8 }, // Held
	  { armor: 0.00, stat: 0.0, cost: 0.0 }, // Ammo
	  { armor: 0.00, stat: 0.8, cost: 3.2 }, // Thrown
	  { armor: 0.00, stat: 0.8, cost: 3.2 }, // Ranged
	  { armor: 0.00, stat: 0.8, cost: 3.2 }, // Ranged
	  { armor: 0.00, stat: 0.8, cost: 3.2 }],
	  // Relic
	  armorType: [1, // cloth
	  1.3, // leather
	  2.6, // mail
	  4.6],
	  // plate
	  bonusArmor: [14],
	  stat: [15, // 0 MANA // disabled
	  10, // 1 HEALTH // disabled
	  1, // 3 AGILITY
	  1, // 4 STRENGTH
	  1, // 5 INTELLECT
	  1, // 6 SPIRIT
	  1.2, // 7 STAMINA
	  1, // 12 DEFENSE_SKILL_RATING
	  1, // 13 DODGE_RATING
	  1, // 14 PARRY_RATING
	  1, // 15 BLOCK_RATING
	  1, // 16 HIT_MELEE_RATING // disabled
	  1, // 17 HIT_RANGED_RATING // disabled
	  1, // 18 HIT_SPELL_RATING // disabled
	  1, // 19 CRIT_MELEE_RATING // disabled
	  1, // 20 CRIT_RANGED_RATING // disabled
	  1, // 21 CRIT_SPELL_RATING // disabled
	  1, // 22 HIT_TAKEN_MELEE_RATING // disabled
	  1, // 23 HIT_TAKEN_RANGED_RATING // disabled
	  1, // 24 HIT_TAKEN_SPELL_RATING // disabled
	  1, // 25 CRIT_TAKEN_MELEE_RATING // disabled
	  1, // 26 CRIT_TAKEN_RANGED_RATING // disabled
	  1, // 27 CRIT_TAKEN_SPELL_RATING // disabled
	  1, // 28 HASTE_MELEE_RATING // disabled
	  1, // 29 HASTE_RANGED_RATING // disabled
	  1, // 30 HASTE_SPELL_RATING // disabled
	  1, // 31 HIT_RATING
	  1, // 32 CRIT_RATING
	  1, // 33 HIT_TAKEN_RATING // disabled
	  1, // 34 CRIT_TAKEN_RATING // disabled
	  1, // 35 RESILIENCE_RATING // disabled
	  1, // 36 HASTE_RATING
	  1, // 37 EXPERTISE_RATING
	  2, // 38 ATTACK_POWER
	  2.5, // 39 RANGED_ATTACK_POWER // disabled
	  3, // 40 FERAL_ATTACK_POWER // disabled
	  2.2, // 41 SPELL_HEALING_DONE // disabled
	  1.15, // 42 SPELL_DAMAGE_DONE // disabled
	  0.5, // 43 MANA_REGENERATION
	  1, // 44 ARMOR_PENETRATION_RATING
	  1.15, // 45 SPELL_POWER
	  0.4, // 46 HEALTH_REGEN
	  1.25, // 47 SPELL_PENETRATION
	  1.5]
	};

	// 48 BLOCK_VALUE
	exports["default"] = mods;
	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _dataBuildBitmask = __webpack_require__(82);

	var _dataBuildBitmask2 = _interopRequireDefault(_dataBuildBitmask);

	var classes = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk", "Druid"].reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	exports["default"] = classes;
	module.exports = exports["default"];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _dataBuildBitmask = __webpack_require__(82);

	var _dataBuildBitmask2 = _interopRequireDefault(_dataBuildBitmask);

	var races = ["Human", "Orc", "Dwarf", "Night Elf", "Undead", "Tauren", "Gnome", "Troll", "Goblin", "Blood Elf", "Draenei"].
	// "Fel Orc",
	// "Naga",
	// "Broken",
	// "Skeleton",
	// "Vrykul",
	// "Tuskarr",
	// "Forest Troll",
	// "Taunka",
	// "Northrend Skeleton",
	// "Ice Troll",
	// "Worgen",
	// "Unknown",
	// "Pandaren Neutral",
	// "Pandaren Alliance",
	// "Pandaren Horde",
	reduce(_dataBuildBitmask2["default"], { bitmask: {} });

	exports["default"] = races;
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var factions = {
	  21: "Booty Bay",
	  47: "Ironforge (Alliance)",
	  54: "Gnomeregan (Alliance)",
	  59: "Thorium Brotherhood",
	  68: "Undercity (Horde)",
	  69: "Darnassus (Alliance)",
	  70: "Syndicate",
	  72: "Stormwind (Alliance)",
	  76: "Orgrimmar (Horde)",
	  81: "Thunder Bluff (Horde)",
	  87: "Bloodsail Buccaneers",
	  92: "Gelkis Clan Centaur",
	  93: "Magram Clan Centaur",
	  270: "Zandalar Tribe",
	  349: "Ravenholdt",
	  369: "Gadgetzan",
	  470: "Ratchet",
	  509: "The League of Arathor (Alliance)",
	  510: "The Defilers (Horde)",
	  529: "Argent Dawn",
	  530: "Darkspear Trolls (Horde)",
	  576: "Timbermaw Hold",
	  577: "Everlook",
	  589: "Wintersaber Trainers (Alliance)",
	  609: "Cenarion Circle",
	  729: "Frostwolf Clan (Horde)",
	  730: "Stormpike Guard (Alliance)",
	  749: "Hydraxian Waterlords",
	  809: "Shen'dralar",
	  889: "Warsong Outriders (Horde)",
	  890: "Silverwing Sentinels (Alliance)",
	  909: "Darkmoon Faire",
	  910: "Brood of Nozdormu",
	  911: "Silvermoon City (Horde)",
	  922: "Tranquillien (Horde)",
	  930: "Exodar (Alliance)",
	  932: "The Aldor",
	  933: "The Consortium",
	  934: "The Scryers",
	  935: "The Sha'tar",
	  941: "The Mag'har (Horde)",
	  942: "Cenarion Expedition",
	  946: "Honor Hold (Alliance)",
	  947: "Thrallmar (Horde)",
	  967: "The Violet Eye",
	  970: "Sporeggar",
	  978: "Kurenai (Alliance)",
	  989: "Keepers of Time",
	  990: "The Scale of the Sands",
	  1011: "Lower City",
	  1012: "Ashtongue Deathsworn",
	  1015: "Netherwing",
	  1031: "Sha'tari Skyguard",
	  1037: "Alliance Vanguard (Alliance)",
	  1038: "Ogri'la",
	  1050: "Valiance Expedition (Alliance)",
	  1052: "Horde Expedition (Horde)",
	  1064: "The Taunka (Horde)",
	  1067: "The Hand of Vengeance (Horde)",
	  1068: "Explorers' League (Alliance)",
	  1073: "The Kalu'ak",
	  1077: "Shattered Sun Offensive",
	  1085: "Warsong Offensive (Horde)",
	  1090: "Kirin Tor",
	  1091: "The Wyrmrest Accord",
	  1094: "The Silver Covenant (Alliance)",
	  1098: "Knights of the Ebon Blade",
	  1104: "Frenzyheart Tribe",
	  1105: "The Oracles",
	  1106: "Argent Crusade",
	  1119: "The Sons of Hodir",
	  1124: "The Sunreavers (Horde)",
	  1126: "The Frostborn (Alliance)",
	  1156: "The Ashen Verdict"
	};

	var ranks = {
	  0: "Hated",
	  1: "Hostile",
	  2: "Unfriendly",
	  3: "Neutral",
	  4: "Friendly",
	  5: "Honored",
	  6: "Revered",
	  7: "Exalted"
	};

	exports["default"] = { ranks: ranks, factions: factions };
	module.exports = exports["default"];

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var holidays = {
	  1: "Darkmoon Faire",
	  5: "Fireworks Celebration",
	  6: "Stranglethorn Fishing Extravaganza",
	  7: "Brewfest",
	  9: "Love is in the Air",
	  11: "Midsummer Fire Festival",
	  12: "Fireworks Spectacular",
	  13: "Children's Week",
	  14: "Feast of Winter Veil",
	  15: "Noblegarden",
	  16: "Hallow's End",
	  17: "Harvest Festival",
	  18: "Lunar Festival",
	  19: "Brewfest",
	  21: "Pirates' Day",
	  22: "Call to Arms: Alterac Valley",
	  23: "Call to Arms: Arathi Basin",
	  24: "Call to Arms: Eye of the Storm",
	  25: "Call to Arms: Warsong Gulch",
	  41: "Call to Arms: Strand of the Ancients",
	  61: "Wrath of the Lich King Launch",
	  81: "Day of the Dead",
	  101: "Pilgrim's Bounty",
	  121: "Call to Arms: Isle of Conquest",
	  141: "Mohawk Promotion",
	  161: "Kalu'ak Fishing Derby"
	};

	exports["default"] = holidays;
	module.exports = exports["default"];

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var maps = {
	  0: "none",
	  30: "Alterac Valley",
	  33: "Shadowfang Keep",
	  34: "Stormwind Stockade",
	  36: "Deadmines",
	  37: "Azshara Crater",
	  42: "Collin's Test",
	  43: "Wailing Caverns",
	  47: "Razorfen Kraul",
	  48: "Blackfathom Deeps",
	  70: "Uldaman",
	  90: "Gnomeregan",
	  109: "Sunken Temple",
	  129: "Razorfen Downs",
	  169: "Emerald Dream",
	  189: "Scarlet Monastery",
	  209: "Zul'Farrak",
	  229: "Blackrock Spire",
	  230: "Blackrock Depths",
	  249: "Onyxia's Lair",
	  269: "Opening of the Dark Portal",
	  289: "Scholomance",
	  309: "Zul'Gurub",
	  329: "Stratholme",
	  349: "Maraudon",
	  369: "Deeprun Tram",
	  389: "Ragefire Chasm",
	  409: "Molten Core",
	  429: "Dire Maul",
	  449: "Alliance PVP Barracks",
	  450: "Horde PVP Barracks",
	  469: "Blackwing Lair",
	  489: "Warsong Gulch",
	  509: "Ruins of Ahn'Qiraj",
	  529: "Arathi Basin",
	  530: "Outland",
	  531: "Ahn'Qiraj Temple",
	  532: "Karazhan",
	  533: "Naxxramas",
	  534: "The Battle for Mount Hyjal",
	  540: "Hellfire Citadel: The Shattered Halls",
	  542: "Hellfire Citadel: The Blood Furnace",
	  543: "Hellfire Citadel: Ramparts",
	  544: "Magtheridon's Lair",
	  545: "Coilfang: The Steamvault",
	  546: "Coilfang: The Underbog",
	  547: "Coilfang: The Slave Pens",
	  548: "Coilfang: Serpentshrine Cavern",
	  550: "Tempest Keep",
	  552: "Tempest Keep: The Arcatraz",
	  553: "Tempest Keep: The Botanica",
	  554: "Tempest Keep: The Mechanar",
	  555: "Auchindoun: Shadow Labyrinth",
	  556: "Auchindoun: Sethekk Halls",
	  557: "Auchindoun: Mana-Tombs",
	  558: "Auchindoun: Auchenai Crypts",
	  559: "Nagrand Arena",
	  560: "The Escape From Durnholde",
	  562: "Blade's Edge Arena",
	  564: "Black Temple",
	  565: "Gruul's Lair",
	  566: "Eye of the Storm",
	  568: "Zul'Aman",
	  571: "Northrend",
	  572: "Ruins of Lordaeron",
	  574: "Utgarde Keep",
	  575: "Utgarde Pinnacle",
	  576: "The Nexus",
	  578: "The Oculus",
	  580: "The Sunwell",
	  585: "Magister's Terrace",
	  595: "The Culling of Stratholme",
	  599: "Halls of Stone",
	  600: "Drak'Tharon Keep",
	  601: "Azjol-Nerub",
	  602: "Halls of Lightning",
	  603: "Ulduar",
	  604: "Gundrak",
	  607: "Strand of the Ancients",
	  608: "Violet Hold",
	  609: "Ebon Hold",
	  615: "The Obsidian Sanctum",
	  616: "The Eye of Eternity",
	  617: "Dalaran Sewers",
	  618: "The Ring of Valor",
	  619: "Ahn'kahet: The Old Kingdom",
	  624: "Vault of Archavon",
	  628: "Isle of Conquest",
	  631: "Icecrown Citadel",
	  632: "The Forge of Souls",
	  649: "Trial of the Crusader",
	  650: "Trial of the Champion",
	  658: "Pit of Saron",
	  668: "Halls of Reflection",
	  723: "Stormwind",
	  724: "The Ruby Sanctum"
	};

	exports["default"] = maps;
	module.exports = exports["default"];

/***/ },
/* 90 */
/***/ function(module, exports) {

	/* extracted from http://collab.kpsn.org/display/tc/item_template with

	var fields = $("#content")[0].getElementsByTagName("h3");
	var result = {};
	var f, d, i = -1;

	function getText(n) {
	  var result = '';
	  
	  if (n.nodeType == 3) {
	    result = n.nodeValue;
	  } else {
	    for (var i = 0; i < n.childNodes.length; i++) {
	      result += getText(n.childNodes[i]);
	    }
	    var d = getComputedStyle(n).getPropertyValue('display');
	    if (d.match(/(^block|list|row)/) || n.tagName === 'HR') {
	      result += "<BR />";
	    }
	  }
	    
	  return result;
	};

	while (++i < fields.length) {
	  f = fields[i];
	  d = f.nextElementSibling;
	  console.log(d.tagName, d.innerHTML);
	  result[f.textContent] = d.tagName === "P"
	    ? getText(d).replace(/<BR \/>$/i, "") : "";
	}
	copy(result); // now the json is in your paperclip

	*/

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var doc = {
	  AllowableClass: "Bitmask controlling which classes can use this item. Add ids together to combine class possibilities. Use -1 if all classes can use it. ",
	  AllowableRace: "Bitmask controlling which races can use this item. Add ids together to combine race possibilities. Use -1 for all races.",
	  area: "The ID of the zone in which this item can be used.",
	  armor: "The armor value of the item.",
	  BagFamily: "If the item is a bag, this field is a bitmask controlling what types of items can be put in this bag. You can combine different types by adding up the bit numbers.",
	  block: "If the item is a shield, the block chance of the shield.",
	  bonding: "The bonding for the item.",
	  BuyCount: "The size of the item stack when sold by vendors. Also if a vendor has limited copies of this item available, everytime the vendor list is refreshed (See npc_vendor.incrtime), the number of copies increases by this number.",
	  BuyPrice: "The price required to pay to buy this item from a vendor, in copper.",
	  ContainerSlots: "If the item is a bag, this field controls the number of slots the bag has.",
	  delay: "The time in milliseconds between successive hits.",
	  description: "The description that appears in orange letters at the bottom of the item tooltip.",
	  dmg_max1: "The maximum damage of the item.",
	  dmg_min1: "The minimum damage of the item.",
	  duration: "The duration of the item in seconds ingame time.<br>Set ITEM_FLAGS_CU_DURATION_REAL_TIME in <b>flagsCustom</b> for real time. In that case the item duration will tick even if player is offline.",
	  Flags: "Bitmask field that contains flags that the item has on it. As all other such fields, just add the flags together to combine them. Possible flags are listed below.",
	  HolidayId: "See the Holidays DBC file for the IDs of all of the holidays.",
	  Map: "The ID of the map in which this item can be used.",
	  maxcount: "Maximum number of copies of this item a player can have. Use 0 for infinite.",
	  MaxDurability: "The maximum durability of this item.",
	  maxMoneyLoot: "If the item is a container that can contain money, then this field defines the maximum coinage held in this container, in copper.",
	  minMoneyLoot: "If the item is a container that can contain money, then this field defines the minimum coinage held in this container, in copper.",
	  name: "The name of the item.",
	  Quality: "The quality of the item. To use the Bind to Account quality, the item must have its flags set to 134221824.",
	  RandomProperty: "The number in this field points to item_enchantment_template.entry and ties in an item's chance at having a random property attached to it when it shows up for the first time. This field and the RandomSuffix field CANNOT both have non-zero values. Either one is filled, or the other. Also, the primary source for the number in this field are WDBs.",
	  RequiredLevel: "The level that a player must be to equip the item.",
	  RequiredReputationFaction: "The faction template ID&nbsp; of the faction that the player has to have a certain ranking with. If this value is 0, the faction of the seller of the item is used.",
	  RequiredReputationRank: "The rank the player has to have with the faction from RequiredReputationFaction.",
	  RequiredSkill: "The skill required to use this item. See the SkillLine DBC file for IDs which can be used here.",
	  RequiredSkillRank: "The required skill rank the player needs to have to use this item.",
	  requiredspell: "The required spell that the player needs to have to use this item.",
	  ScriptName: "The name of the script that the item should use. There is no 'internalitemhandler' or 'internalitemhanler' script so trinity will ignore any such values in this field.",
	  SellPrice: "The price that the vendor will pay you for the item when you sell it and if it is possible to be sold, in copper. Put in 0 if the item cannot be sold to a vendor.",
	  stackable: "The number of copies of this item that can be stacked in the same slot."
	};

	for (var i = 1; i <= 10; i++) {
	  doc["stat_type" + i] = "The type of stat to modify.";
	  doc["stat_value" + i] = "The value to change the stat type to.";
	}

	doc.FlagsExtra = doc.Flags;
	doc.flagsCustom = doc.Flags;

	exports["default"] = doc;
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _$SelectEditableContent = __webpack_require__(61);

	var _$SelectEditableContent2 = _interopRequireDefault(_$SelectEditableContent);

	var _$KeyHandler = __webpack_require__(92);

	var _$KeyHandler2 = _interopRequireDefault(_$KeyHandler);

	var _styleInputs = __webpack_require__(23);

	var _$Task = __webpack_require__(22);

	var _$Task2 = _interopRequireDefault(_$Task);

	var me = (0, _$Task2["default"])();

	// me.value
	// me.selectedList

	// Search for items :
	// name
	// level
	// quality
	// category ("armor", "weapon", "consumable", "trade goods", "glyhs", "currency", "quest", "keys", "containers")
	// if armor or weapon : slot & type
	// if armor or weapon : stat
	// if weapon : damages min / max
	// if armor : armor

	var list = ["creatures", "players", "quests", "items"];

	var placeholder = "Either " + list.reduce(function (r, v, i, t) {
	  return r + (i === t.length - 1 ? ' or ' : ', ') + v;
	}) + ".";

	var getNextInList = (function () {
	  var prev = -1;
	  return function (reverse) {
	    prev += reverse ? -1 : 1;
	    if (prev > list.length - 1) {
	      prev = 0;
	    } else if (prev < 0) {
	      prev = list.length - 1;
	    }
	    return list[prev];
	  };
	})();

	function matchInList(val) {
	  if (!val) {
	    return false;
	  }
	  val = val.toLowerCase();
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var match = _step.value;

	      if (match.indexOf(val) === 0) {
	        return match;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator["return"]) {
	        _iterator["return"]();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return false;
	}

	function deselectListIfEmpty() {
	  if (!me.value) {
	    me.selectedList = false;
	    innerBar.style.display = "none";
	    autoComlete.textContent = placeholder;
	    elem.classList.remove("invalid");
	  }
	  return false;
	}

	var skip = function skip() {};
	var input = _uiNew2["default"].span({
	  tabIndex: 1,
	  style: _styleInputs.search.input,
	  spellcheck: false,
	  contentEditable: true,
	  onkeydown: (0, _$KeyHandler2["default"])({
	    8: deselectListIfEmpty,
	    9: function _(event) {
	      // tab
	      if (!me.selectedList) {
	        if (!me.value) {
	          autoComlete.textContent = getNextInList(event.shiftKey);
	        } else {
	          tryToChooseList(me.value);
	        }
	      }
	    },
	    13: function _() {
	      // enter
	      if (!me.selectedList) {
	        if (!me.value) {
	          tryToChooseList(autoComlete.textContent);
	        }
	      } else {
	        // call select on results
	      }
	    },
	    37: deselectListIfEmpty,
	    38: function _() {
	      if (!me.selectedList) {
	        if (!me.value) {
	          autoComlete.textContent = getNextInList(true);
	        }
	      } else {
	        // call results prev
	      }
	    },
	    39: function _() {
	      if (!me.selectedList && !me.value) {
	        tryToChooseList(autoComlete.textContent);
	      }
	      return false;
	    },
	    40: function _() {
	      if (!me.selectedList) {
	        if (!me.value) {
	          autoComlete.textContent = getNextInList(false);
	        }
	      } else {
	        // call results next
	      }
	    }
	  })
	});
	var innerBar = _uiNew2["default"].span({ id: "caca", style: _styleInputs.search.innerBar }, "waht");
	var autoComlete = _uiNew2["default"].span({ style: {
	    color: "#666",
	    whiteSpace: "pre"
	  } }, placeholder);

	var elem = _uiNew2["default"].div({
	  style: _styleInputs.search.outerBar,
	  onclick: function onclick(e) {
	    return (0, _$SelectEditableContent2["default"])(input);
	  }
	}, innerBar, input, autoComlete);

	function tryToChooseList(val) {
	  me.selectedList = matchInList(val);
	  if (!me.selectedList) {
	    return;
	  }
	  innerBar.textContent = me.selectedList;
	  innerBar.style.display = "block";
	  input.textContent = "";
	  autoComlete.textContent = "";
	  me.value = "";
	  elem.classList.remove("invalid");
	}

	function listSelection(val) {
	  if (!val) {
	    autoComlete.textContent = placeholder;
	    elem.classList.remove("invalid");
	  } else {
	    var match = matchInList(val);
	    if (match) {
	      autoComlete.textContent = match.slice(val.length);
	      elem.classList.remove("invalid");
	    } else {
	      autoComlete.textContent = '';
	      elem.classList.add("invalid");
	    }
	  }
	}

	_eventLoop2["default"].add(function (e) {
	  var val = input.textContent;
	  if (me.value !== val) {
	    me.value = val;
	    if (me.selectedList) {
	      me.exec(val);
	    } else {
	      listSelection(val);
	    }
	  }
	});

	me.HTMLElement = elem;

	me.select = function () {
	  (0, _$SelectEditableContent2["default"])(input);
	  return me;
	};

	exports["default"] = me;
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (handler) {
	  return function (event) {
	    if (handler[event.keyCode]) {
	      if (handler[event.keyCode](event) !== false) {
	        event.preventDefault();
	      }
	    }
	  };
	};

	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _styleUi = __webpack_require__(24);

	var _styleUi2 = _interopRequireDefault(_styleUi);

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _event = __webpack_require__(57);

	var _$Now = __webpack_require__(20);

	var _$Now2 = _interopRequireDefault(_$Now);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	var _stateDom = __webpack_require__(58);

	var _stateDom2 = _interopRequireDefault(_stateDom);

	var me = {};
	var elem = _uiNew2["default"].div({
	  style: (0, _styleUi2["default"])({
	    position: "fixed",
	    width: "300px",
	    top: 0,
	    left: 0,
	    background: "rgba(0,0,0,0.7)",
	    padding: "5px",
	    opacity: 0,
	    transform: "translate(0px, 0px)",
	    transitionProperty: "opacity",
	    transitionDuration: ".2s",
	    transitionTimingFunction: "linear",
	    pointerEvent: "none",
	    boxShadow: "0 0 0 1px black, 0 0 10px black",
	    borderRadius: "5px",
	    zIndex: "9999"
	  })
	});
	me.HTMLElement = elem;
	me.hidden = true;

	function getTooltipData(_x) {
	  var _again = true;

	  _function: while (_again) {
	    var node = _x;
	    _again = false;

	    if (!node) {
	      return null;
	    }
	    if (node.dataset && node.dataset.tooltip) {
	      return node.dataset.tooltip;
	    }
	    _x = node.parentNode;
	    _again = true;
	    continue _function;
	  }
	}

	var previousDescription = undefined;
	var height = undefined;
	var timeout = undefined;

	me.hide = function () {
	  elem.style.opacity = 0;
	  me.hidden = true;
	};

	me.show = function () {
	  var x = _stateDom2["default"].mouse.x + 25;
	  var y = _stateDom2["default"].mouse.y + 10;

	  if (x + 300 > _stateDom2["default"].dom.w) {
	    x -= 375;
	  }
	  if (y + height > _stateDom2["default"].dom.h) {
	    y -= height + 10;
	  }
	  elem.style.transform = "translate(" + x + "px, " + y + "px)";
	  elem.style.opacity = 1;
	  me.hidden = false;
	};

	var prevContent = undefined;
	_event.on.hover(function (state) {
	  var hover = state.mouse.hover;

	  if (hover === elem) {
	    return;
	  }

	  var content = getTooltipData(hover);

	  if (content === prevContent) {
	    return;
	  }
	  if (content) {
	    setTimeout(function () {
	      return elem.innerHTML = content;
	    }, 200);
	  } else {
	    clearTimeout(timeout);
	  }
	  prevContent = content;
	});

	function delayShow() {
	  if (prevContent) {
	    clearTimeout(timeout);
	    timeout = setTimeout(me.show, 1800);
	    height = elem.clientHeight;
	  }
	  me.hide();
	}

	_event.on.keyDown(delayShow);
	_event.on.mouseMove(delayShow);

	exports["default"] = me;
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _uiNew = __webpack_require__(4);

	var _uiNew2 = _interopRequireDefault(_uiNew);

	var _$By = __webpack_require__(95);

	var _$By2 = _interopRequireDefault(_$By);

	var _eventLoop = __webpack_require__(21);

	var _eventLoop2 = _interopRequireDefault(_eventLoop);

	function Result(_, i) {
	  var elem = _uiNew2["default"].div({
	    style: {
	      opacity: "0",
	      transitionProperty: "opacity",
	      transitionDuration: "0s",
	      transitionDelay: "64ms",
	      transitionTimingFunction: "cubic-bezier(0, 0.5, 0, 1)"
	    }
	  }, i.toString());
	  var me = {
	    HTMLElement: elem,
	    set: function set(r) {
	      if (!r) {
	        elem.style.transitionDuration = "500ms";
	        elem.style.opacity = 0;
	        return me;
	      }
	      me.score = r.score;
	      me.data = r.data;
	      elem.textContent = r.data.entry + " " + r.title + " (" + r.score + ")";
	      elem.style.transitionDuration = "0s";
	      elem.style.opacity = 1;
	      return me;
	    }
	  };
	  return me;
	}

	var maxResult = 10;
	var results = [];
	var resultsElem = Array.from(Array(10), Result);
	var selected = 0;
	var elem = _uiNew2["default"].div({}, resultsElem);
	var Me = {
	  HTMLElement: elem
	};

	Me.prev = function () {};

	Me.next = function () {};

	Me.select = function () {};

	var changes = true;
	var customSort = _$By2["default"].join(_$By2["default"].scoreDesc, _$By2["default"].time, _$By2["default"].title);
	Me.push = function (score, title, data, primaryKey) {
	  var i = -1;
	  while (++i < results.length) {
	    if (data[primaryKey] === results[i].data[primaryKey]) {
	      results[i].score = score;
	      changes = true;
	      return Me;
	    }
	  }
	  results.push({ score: score, title: title, data: data, time: performance.now() });
	  changes = true;
	  return Me;
	};

	Me.clear = function () {
	  results.length = 0;
	  changes = true;
	  return Me;
	};

	_eventLoop2["default"].add(function (event) {
	  if (changes) {
	    changes = false;
	    results.sort(customSort);
	    var i = -1;
	    while (++i < 10) {
	      resultsElem[i].set(results[i]);
	    }
	  }
	});

	exports["default"] = Me;
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function by(key, desc) {
	  var step = desc ? -1 : 1;
	  return function (a, b) {
	    a = a[key];
	    b = b[key];
	    if (a === b) {
	      return 0;
	    }
	    if (a > b) {
	      return step;
	    }
	    return -step;
	  };
	}

	["id", "entry", "guid", "value", "title", "score", "index", "priority", "date", "time"].forEach(function (key) {
	  by[key] = by(key);
	  by[key + "Desc"] = by(key, true);
	});

	by.join = function () {
	  for (var _len = arguments.length, fnArray = Array(_len), _key = 0; _key < _len; _key++) {
	    fnArray[_key] = arguments[_key];
	  }

	  function recur(_x, _x2, _x3) {
	    var _again = true;

	    _function: while (_again) {
	      var a = _x,
	          b = _x2,
	          i = _x3;
	      result = undefined;
	      _again = false;

	      var result = fnArray[i](a, b);
	      if (!result && ++i < fnArray.length) {
	        _x = a;
	        _x2 = b;
	        _x3 = i;
	        _again = true;
	        continue _function;
	      }
	      return result;
	    }
	  }
	  return function (a, b) {
	    return recur(a, b, 0);
	  };
	};

	by._name = by("name"); // name is reserved in functions... so yeah...
	by.nameDesc = by("name", true);

	exports["default"] = by;
	module.exports = exports["default"];

/***/ },
/* 96 */
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
/******/ ]);