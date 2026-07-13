/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/common.js"
/*!*********************************!*\
  !*** ./src/assets/js/common.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_List_3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_List_3 */ \"./src/assets/js/components/_List_3.js\");\n/* harmony import */ var _components_RemoveSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_RemoveSeries */ \"./src/assets/js/components/_RemoveSeries.js\");\n/* harmony import */ var _components_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_SmoothScroll */ \"./src/assets/js/components/_SmoothScroll.js\");\n// import ignite from './components/_ignite';\n\n\n\nwindow.COMMON = {};\n$(function () {\n  COMMON.$document = $(document);\n\n  // ignite();\n\n  $('.nav_3').each(function () {\n    new _components_RemoveSeries__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      el: this\n    });\n  });\n  $('.list_3 li').each(function () {\n    new _components_List_3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      li: this\n    });\n  });\n  new _components_SmoothScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/assets/js/common.js?\n}");

/***/ },

/***/ "./src/assets/js/components/_List_3.js"
/*!*********************************************!*\
  !*** ./src/assets/js/components/_List_3.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _$li = /*#__PURE__*/new WeakMap();\nvar _href = /*#__PURE__*/new WeakMap();\nvar _click = /*#__PURE__*/new WeakMap();\nvar _default = /*#__PURE__*/_createClass(function _default(opts) {\n  var _this = this;\n  _classCallCheck(this, _default);\n  // #$el;\n  _classPrivateFieldInitSpec(this, _$li, void 0);\n  _classPrivateFieldInitSpec(this, _href, void 0);\n  _classPrivateFieldInitSpec(this, _click, function () {\n    window.location.href = _classPrivateFieldGet(_href, _this);\n  });\n  // const self = this;\n  // this.#$el = $(opts.el);\n  // this.#$li = this.#$el.children();\n  _classPrivateFieldSet(_$li, this, $(opts.li));\n  _classPrivateFieldSet(_href, this, _classPrivateFieldGet(_$li, this).find('.list_3__img > a').attr('href'));\n  _classPrivateFieldGet(_$li, this).click(_classPrivateFieldGet(_click, this));\n  _classPrivateFieldGet(_$li, this).children('.list_3__category a').click(function (event) {\n    event.stopPropagation();\n  });\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/components/_List_3.js?\n}");

/***/ },

/***/ "./src/assets/js/components/_RemoveSeries.js"
/*!***************************************************!*\
  !*** ./src/assets/js/components/_RemoveSeries.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _$el = /*#__PURE__*/new WeakMap();\nvar _default = /*#__PURE__*/_createClass(function _default(opts) {\n  _classCallCheck(this, _default);\n  _classPrivateFieldInitSpec(this, _$el, void 0);\n  _classPrivateFieldSet(_$el, this, $(opts.el));\n  _classPrivateFieldGet(_$el, this).find('a').each(function () {\n    var $this = $(this);\n    var originalText = $this.text().trim();\n\n    // 1. 「すべてのシリーズ」ではない\n    // 2. 末尾が「シリーズ」で終わる\n    if (originalText !== 'すべてのシリーズ' && originalText.endsWith('シリーズ')) {\n      // 末尾の「シリーズ」を削除（置換）\n      var newText = originalText.replace(/シリーズ$/, '');\n      $this.text(newText);\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/components/_RemoveSeries.js?\n}");

/***/ },

/***/ "./src/assets/js/components/_SmoothScroll.js"
/*!***************************************************!*\
  !*** ./src/assets/js/components/_SmoothScroll.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _option = /*#__PURE__*/new WeakMap();\nvar _$html = /*#__PURE__*/new WeakMap();\nvar _SPEED_DEFAULT = /*#__PURE__*/new WeakMap();\nvar _SPEED_REPEAT = /*#__PURE__*/new WeakMap();\nvar _scrollAnimate = /*#__PURE__*/new WeakMap();\nvar _click = /*#__PURE__*/new WeakMap();\nvar _default_brand = /*#__PURE__*/new WeakSet();\nvar _default = /*#__PURE__*/_createClass(\n// 繰り返し時の速度\n\nfunction _default(opts) {\n  var _this = this;\n  _classCallCheck(this, _default);\n  _classPrivateMethodInitSpec(this, _default_brand);\n  _classPrivateFieldInitSpec(this, _option, void 0);\n  _classPrivateFieldInitSpec(this, _$html, void 0);\n  _classPrivateFieldInitSpec(this, _SPEED_DEFAULT, 800);\n  // 最初の速度\n  _classPrivateFieldInitSpec(this, _SPEED_REPEAT, 800);\n  _classPrivateFieldInitSpec(this, _scrollAnimate, function ($this, positionStart, scrollSpeed) {\n    var self = _this;\n    _classPrivateFieldGet(_$html, _this).animate({\n      scrollTop: positionStart\n    }, scrollSpeed, 'swing', function () {\n      // スクロールアニメーション終了時に、目的地のY座標を取得\n      var positionEnd = $this.offset().top;\n\n      // 処理を繰り返すかの判定\n      // 目的地のY座標が変わっていたらやり直し\n      if (positionStart !== positionEnd) {\n        _classPrivateFieldGet(_scrollAnimate, self).call(self, $this, positionEnd, _classPrivateFieldGet(_SPEED_REPEAT, self));\n      }\n    });\n  });\n  _classPrivateFieldInitSpec(this, _click, function (e) {\n    var $me = $(e.currentTarget),\n      href = $me.attr('href'),\n      hash = _assertClassBrand(_default_brand, _this, _extractHash).call(_this, href),\n      $hash = $(hash);\n    console.log('hash', hash);\n    if ($hash.length) {\n      e.preventDefault();\n      if (_classPrivateFieldGet(_option, _this).gnav) {\n        _classPrivateFieldGet(_option, _this).gnav.close();\n      }\n      var positionStart = $hash.offset().top;\n      _classPrivateFieldGet(_scrollAnimate, _this).call(_this, $hash, positionStart, _classPrivateFieldGet(_SPEED_DEFAULT, _this));\n    }\n  });\n  _classPrivateFieldSet(_option, this, $.extend({\n    target: '[data-smooth-scroll]',\n    gnav: null\n  }, opts));\n  _classPrivateFieldSet(_$html, this, $('html'));\n  $('a' + _classPrivateFieldGet(_option, this).target).on('click', _classPrivateFieldGet(_click, this));\n  $(_classPrivateFieldGet(_option, this).target).find('a[href*=\"#\"]').click(_classPrivateFieldGet(_click, this));\n});\nfunction _extractHash(href) {\n  var hash = href.match(/#(.*)/);\n  return hash ? hash[0] : null;\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/components/_SmoothScroll.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/common.js");
/******/ 	
/******/ })()
;