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

/***/ "./src/catalog/js/catalog.js":
/*!***********************************!*\
  !*** ./src/catalog/js/catalog.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/constants.js */ \"./src/api/constants.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api.js */ \"./src/api/api.js\");\n/* harmony import */ var _createCatalog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCatalog.js */ \"./src/catalog/js/createCatalog.js\");\n/* harmony import */ var _search_js_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/js/search.js */ \"./src/search/js/search.js\");\n/* harmony import */ var _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/icons/like.svg */ \"./src/assets/icons/like.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst product = await (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.getItemsCatalog)()\r\nconst productList = document.querySelector('.product__list')\r\nconst headerSearch = document.querySelector('.header__search')\r\n\r\n\r\nif (product.error) {\r\n\tconst errorMessage = document.createElement('p')\r\n\terrorMessage.classList.add('error-message')\r\n\terrorMessage.textContent = 'Произошла ошибка при загрузке данных'\r\n\tproductList.append(errorMessage)\r\n\tconsole.error('Ошибка при получении данных')\r\n} else {\r\n\tif (product.data.length === 0) {\r\n\t\tconst noProductMessage = document.createElement('p')\r\n\t\tnoProductMessage.classList.add('product__list_no-products')\r\n\t\tnoProductMessage.textContent = 'Товары отсутствует'\r\n\t\tproductList.append(noProductMessage)\r\n\t}\r\n\tconst productElements = (0,_createCatalog_js__WEBPACK_IMPORTED_MODULE_2__.createProductElements)(product.data, _api_constants_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_4__)\r\n\tproductList.append(...productElements)\r\n}\r\n\r\nheaderSearch.addEventListener('input', (0,_search_js_search_js__WEBPACK_IMPORTED_MODULE_3__.debounce)((event) => (0,_search_js_search_js__WEBPACK_IMPORTED_MODULE_3__.handleSearch)(event, product.data, productList), 1000))\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///./src/catalog/js/catalog.js?");

/***/ }),

/***/ "./src/catalog/js/createCatalog.js":
/*!*****************************************!*\
  !*** ./src/catalog/js/createCatalog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProductElements: () => (/* binding */ createProductElements)\n/* harmony export */ });\nconst createProductElements = (products, baseUrl, like) => {\r\n\tconst productElements = products.map((product) => {\r\n\t\tconst productElement = document.createElement('article')\r\n\t\tproductElement.classList.add('product__element')\r\n\t\tproductElement.innerHTML = `\r\n            <button class=\"product__favorite-button\">\r\n                <img class=\"product__favorite-icon\" src=\"${like}\" alt=\"like\" />\r\n            </button>\r\n            <a href=\"/detail.html\" class=\"product__content\">\r\n                <img class=\"product__img\" src=\"${baseUrl}${product.picture.path}\" alt=\"${product.picture.alt}\" />\r\n                <div class=\"product__name\">${product.name}</div>\r\n                <div class=\"product__price\">$${product.price.value}</div>\r\n            </a>\r\n        `\r\n\t\treturn productElement\r\n\t})\r\n\treturn productElements\r\n}\r\n\n\n//# sourceURL=webpack:///./src/catalog/js/createCatalog.js?");

/***/ }),

/***/ "./src/search/js/search.js":
/*!*********************************!*\
  !*** ./src/search/js/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce),\n/* harmony export */   handleSearch: () => (/* binding */ handleSearch)\n/* harmony export */ });\n/* harmony import */ var _catalog_js_createCatalog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../catalog/js/createCatalog.js */ \"./src/catalog/js/createCatalog.js\");\n/* harmony import */ var _api_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/constants.js */ \"./src/api/constants.js\");\n/* harmony import */ var _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/assets/icons/like.svg */ \"./src/assets/icons/like.svg\");\n\r\n\r\n\r\n\r\nconst headerInput = document.querySelector('.header__search-input')\r\n\r\nconst handleSearch = (event, product, productList) => {\r\n\tevent.preventDefault()\r\n\r\n\tconst searchInput = headerInput.value\r\n\r\n\tconst filteredProducts = product.filter((product) =>\r\n\t\tproduct.name.toLowerCase().includes(searchInput.toLowerCase())\r\n\t)\r\n\r\n\tconst productElements = (0,_catalog_js_createCatalog_js__WEBPACK_IMPORTED_MODULE_0__.createProductElements)(filteredProducts, _api_constants_js__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, _src_assets_icons_like_svg__WEBPACK_IMPORTED_MODULE_2__)\r\n\tproductList.innerHTML = ''\r\n\tproductList.append(...productElements)\r\n}\r\n\r\nconst debounce = (func, delay) => {\r\n\tlet timeoutId\r\n\r\n\treturn (...args) => {\r\n\t\tif (timeoutId) {\r\n\t\t\tclearTimeout(timeoutId)\r\n\t\t}\r\n\r\n\t\ttimeoutId = setTimeout(() => {\r\n\t\t\tfunc(...args)\r\n\t\t}, delay)\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/search/js/search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/catalog/js/catalog.js");
/******/ 	
/******/ })()
;