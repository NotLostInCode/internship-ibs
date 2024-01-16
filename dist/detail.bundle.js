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

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getItemDetail: () => (/* binding */ getItemDetail),\n/* harmony export */   getItemsCatalog: () => (/* binding */ getItemsCatalog)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/api/constants.js\");\n\r\n\r\nconst getItemsCatalog = async () => {\r\n\ttry {\r\n\t\tconst response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/item`)\r\n\t\tconst data = await response.json()\r\n\t\treturn { data: data.content }\r\n\t} catch (error) {\r\n\t\treturn { error: true }\r\n\t}\r\n}\r\n\r\nconst getItemDetail = async (id) => {\r\n\ttry {\r\n\t\tconst response = await fetch(`${_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/item/${id}`)\r\n\t\tconst data = await response.json()\r\n\t\treturn { data: data.content }\r\n\t} catch (error) {\r\n\t\treturn { error: true }\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/api/api.js?");

/***/ }),

/***/ "./src/api/constants.js":
/*!******************************!*\
  !*** ./src/api/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)\n/* harmony export */ });\nconst BASE_URL = 'http://localhost:3006'\r\n\n\n//# sourceURL=webpack:///./src/api/constants.js?");

/***/ }),

/***/ "./src/detail/js/createDetail.js":
/*!***************************************!*\
  !*** ./src/detail/js/createDetail.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDetailProduct: () => (/* binding */ createDetailProduct)\n/* harmony export */ });\nconst createDetailProduct = (product, baseUrl, increment, decrement, like) => {\r\n\tconst productDetailElement = document.createElement('div')\r\n\tproductDetailElement.classList.add('detailed-product')\r\n\tproductDetailElement.innerHTML = `\r\n                <div class=\"detailed-product__image\">\r\n                    <img class=\"detailed-product__img\" src=${baseUrl}${product.picture.path} alt=\"${product.picture.alt}\">\r\n                </div>\r\n\r\n                <div class=\"detailed-product__details\">\r\n                    <div class=\"detailed-product__description\">\r\n                        <h1 class=\"description__title\">${product.name}</h1>\r\n                        <p class=\"description__text\">${product.info}</p>\r\n\r\n                        <h2 class=\"description__subtitle\">Details</h2>\r\n                        <p class=\"description__text\">${product.details}</p>\r\n                    </div>\r\n\r\n                    <div class=\"detailed-product__add\">\r\n                        <div class=\"detailed-product__price\">$${product.price.value}</div>\r\n                        <div class=\"detailed-product__controls\">\r\n                            <div class=\"detailed-product__number-goods\">\r\n                                <button class=\"detailed-product__decrement\">\r\n                                    <img src=\"${decrement}\" alt=\"decrement\">\r\n                                </button>\r\n                                <div class=\"detailed-product__number\">1</div>\r\n                                <button class=\"detailed-product__increment \">\r\n                                    <img src=\"${increment}\" alt=\"increment\">\r\n                                </button>\r\n                            </div>\r\n                            <button class=\"detailed-product__add-to-cart\">Add to cart</button>\r\n                            <button class=\"detailed-product__favorite\">\r\n                                <img src=\"${like}\" alt=\"like\" class=\"detailed-product__favorite-icon\">\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n`\r\n\treturn productDetailElement\r\n}\r\n\n\n//# sourceURL=webpack:///./src/detail/js/createDetail.js?");

/***/ }),

/***/ "./src/detail/js/detail.js":
/*!*********************************!*\
  !*** ./src/detail/js/detail.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/constants.js */ \"./src/api/constants.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api.js */ \"./src/api/api.js\");\n/* harmony import */ var _createDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDetail.js */ \"./src/detail/js/createDetail.js\");\n/* harmony import */ var _src_assets_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/assets/icons/increment.svg */ \"./src/assets/icons/increment.svg\");\n/* harmony import */ var _src_assets_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/icons/decrement.svg */ \"./src/assets/icons/decrement.svg\");\n/* harmony import */ var _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/assets/icons/like.svg */ \"./src/assets/icons/like.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst params = new URLSearchParams(window.location.search)\r\nconst id = params.get('id')\r\nconst product = await (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.getItemDetail)(id)\r\nconst main = document.querySelector('.main')\r\n\r\n\r\nif (product.error) {\r\n\tconst errorMessage = document.createElement('p')\r\n\terrorMessage.classList.add('error-message')\r\n\terrorMessage.textContent = 'Произошла ошибка при загрузке данных'\r\n\tmain.append(errorMessage)\r\n\tconsole.error('Ошибка при получении данных')\r\n} else {\r\n\tif ([product.data].length === 0) {\r\n\t\tconst noProductMessage = document.createElement('p')\r\n\t\tnoProductMessage.classList.add('product__list_no-products')\r\n\t\tnoProductMessage.textContent = 'Товар отсутствует'\r\n\t\tmain.append(noProductMessage)\r\n\t}\r\n\tconst detailProduct = (0,_createDetail_js__WEBPACK_IMPORTED_MODULE_2__.createDetailProduct)(product.data, _api_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, _src_assets_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__, _src_assets_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_4__, _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_5__)\r\n\tmain.append(detailProduct)\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./src/detail/js/detail.js?");

/***/ }),

/***/ "./src/assets/icons/decrement.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/decrement.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c20ea61ff3dc43069b1a.svg\";\n\n//# sourceURL=webpack:///./src/assets/icons/decrement.svg?");

/***/ }),

/***/ "./src/assets/icons/increment.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/increment.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce97dbaf6d5297f643fd.svg\";\n\n//# sourceURL=webpack:///./src/assets/icons/increment.svg?");

/***/ }),

/***/ "./src/assets/icons/like.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/like.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c438535c46409ff04b7.svg\";\n\n//# sourceURL=webpack:///./src/assets/icons/like.svg?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/detail/js/detail.js");
/******/ 	
/******/ })()
;