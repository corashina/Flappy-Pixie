/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets sync recursive \\.(jpg|png)$/":
/*!***********************************!*\
  !*** ./assets sync \.(jpg|png)$/ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./00_forest_floor.png\": \"./assets/00_forest_floor.png\",\n\t\"./00_roof_leaves.png\": \"./assets/00_roof_leaves.png\",\n\t\"./01_front_silhouette.png\": \"./assets/01_front_silhouette.png\",\n\t\"./01_hanging_flower1.png\": \"./assets/01_hanging_flower1.png\",\n\t\"./01_hanging_flower2.png\": \"./assets/01_hanging_flower2.png\",\n\t\"./01_hanging_flower3.png\": \"./assets/01_hanging_flower3.png\",\n\t\"./02_front_canopy.png\": \"./assets/02_front_canopy.png\",\n\t\"./02_tree_1.png\": \"./assets/02_tree_1.png\",\n\t\"./02_tree_2.png\": \"./assets/02_tree_2.png\",\n\t\"./03_rear_canopy.png\": \"./assets/03_rear_canopy.png\",\n\t\"./03_rear_silhouette.png\": \"./assets/03_rear_silhouette.png\",\n\t\"./05_far_BG.png\": \"./assets/05_far_BG.png\",\n\t\"./WorldAssets.png\": \"./assets/WorldAssets.png\",\n\t\"./asplodeInner01.png\": \"./assets/asplodeInner01.png\",\n\t\"./asplodeInner02.png\": \"./assets/asplodeInner02.png\",\n\t\"./asplodeSpike_01.png\": \"./assets/asplodeSpike_01.png\",\n\t\"./asplodeSpike_02.png\": \"./assets/asplodeSpike_02.png\",\n\t\"./asplode_01.png\": \"./assets/asplode_01.png\",\n\t\"./asplode_02.png\": \"./assets/asplode_02.png\",\n\t\"./asplode_03.png\": \"./assets/asplode_03.png\",\n\t\"./asplode_04.png\": \"./assets/asplode_04.png\",\n\t\"./column.png\": \"./assets/column.png\",\n\t\"./dustSwirl.png\": \"./assets/dustSwirl.png\",\n\t\"./fireCloud.png\": \"./assets/fireCloud.png\",\n\t\"./flyingPixie.png\": \"./assets/flyingPixie.png\",\n\t\"./lava_slosh_01.png\": \"./assets/lava_slosh_01.png\",\n\t\"./lava_slosh_02.png\": \"./assets/lava_slosh_02.png\",\n\t\"./lava_slosh_03.png\": \"./assets/lava_slosh_03.png\",\n\t\"./lava_slosh_04.png\": \"./assets/lava_slosh_04.png\",\n\t\"./lava_slosh_05.png\": \"./assets/lava_slosh_05.png\",\n\t\"./lava_slosh_06.png\": \"./assets/lava_slosh_06.png\",\n\t\"./lava_slosh_07.png\": \"./assets/lava_slosh_07.png\",\n\t\"./lava_slosh_08.png\": \"./assets/lava_slosh_08.png\",\n\t\"./mainBG_composite.jpg\": \"./assets/mainBG_composite.jpg\",\n\t\"./mote01.png\": \"./assets/mote01.png\",\n\t\"./mote02.png\": \"./assets/mote02.png\",\n\t\"./mote03.png\": \"./assets/mote03.png\",\n\t\"./pickup.png\": \"./assets/pickup.png\",\n\t\"./pickupShine.png\": \"./assets/pickupShine.png\",\n\t\"./pickup_01.png\": \"./assets/pickup_01.png\",\n\t\"./pickup_02.png\": \"./assets/pickup_02.png\",\n\t\"./pickup_03.png\": \"./assets/pickup_03.png\",\n\t\"./pickup_04.png\": \"./assets/pickup_04.png\",\n\t\"./pickup_05.png\": \"./assets/pickup_05.png\",\n\t\"./pickup_06.png\": \"./assets/pickup_06.png\",\n\t\"./pickup_07.png\": \"./assets/pickup_07.png\",\n\t\"./pickup_08.png\": \"./assets/pickup_08.png\",\n\t\"./playButton.png\": \"./assets/playButton.png\",\n\t\"./spike_box.png\": \"./assets/spike_box.png\",\n\t\"./starPops0004.png\": \"./assets/starPops0004.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets sync recursive \\\\.(jpg|png)$/\";\n\n//# sourceURL=webpack:///./assets_sync_\\.(jpg%7Cpng)$/?");

/***/ }),

/***/ "./assets/00_forest_floor.png":
/*!************************************!*\
  !*** ./assets/00_forest_floor.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/00_forest_floor.png?");

/***/ }),

/***/ "./assets/00_roof_leaves.png":
/*!***********************************!*\
  !*** ./assets/00_roof_leaves.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/00_roof_leaves.png?");

/***/ }),

/***/ "./assets/01_front_silhouette.png":
/*!****************************************!*\
  !*** ./assets/01_front_silhouette.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/01_front_silhouette.png?");

/***/ }),

/***/ "./assets/01_hanging_flower1.png":
/*!***************************************!*\
  !*** ./assets/01_hanging_flower1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/01_hanging_flower1.png?");

/***/ }),

/***/ "./assets/01_hanging_flower2.png":
/*!***************************************!*\
  !*** ./assets/01_hanging_flower2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/01_hanging_flower2.png?");

/***/ }),

/***/ "./assets/01_hanging_flower3.png":
/*!***************************************!*\
  !*** ./assets/01_hanging_flower3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/01_hanging_flower3.png?");

/***/ }),

/***/ "./assets/02_front_canopy.png":
/*!************************************!*\
  !*** ./assets/02_front_canopy.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/02_front_canopy.png?");

/***/ }),

/***/ "./assets/02_tree_1.png":
/*!******************************!*\
  !*** ./assets/02_tree_1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/02_tree_1.png?");

/***/ }),

/***/ "./assets/02_tree_2.png":
/*!******************************!*\
  !*** ./assets/02_tree_2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/02_tree_2.png?");

/***/ }),

/***/ "./assets/03_rear_canopy.png":
/*!***********************************!*\
  !*** ./assets/03_rear_canopy.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/03_rear_canopy.png?");

/***/ }),

/***/ "./assets/03_rear_silhouette.png":
/*!***************************************!*\
  !*** ./assets/03_rear_silhouette.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/03_rear_silhouette.png?");

/***/ }),

/***/ "./assets/05_far_BG.png":
/*!******************************!*\
  !*** ./assets/05_far_BG.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/05_far_BG.png?");

/***/ }),

/***/ "./assets/WorldAssets.png":
/*!********************************!*\
  !*** ./assets/WorldAssets.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/WorldAssets.png?");

/***/ }),

/***/ "./assets/asplodeInner01.png":
/*!***********************************!*\
  !*** ./assets/asplodeInner01.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplodeInner01.png?");

/***/ }),

/***/ "./assets/asplodeInner02.png":
/*!***********************************!*\
  !*** ./assets/asplodeInner02.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplodeInner02.png?");

/***/ }),

/***/ "./assets/asplodeSpike_01.png":
/*!************************************!*\
  !*** ./assets/asplodeSpike_01.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplodeSpike_01.png?");

/***/ }),

/***/ "./assets/asplodeSpike_02.png":
/*!************************************!*\
  !*** ./assets/asplodeSpike_02.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplodeSpike_02.png?");

/***/ }),

/***/ "./assets/asplode_01.png":
/*!*******************************!*\
  !*** ./assets/asplode_01.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplode_01.png?");

/***/ }),

/***/ "./assets/asplode_02.png":
/*!*******************************!*\
  !*** ./assets/asplode_02.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplode_02.png?");

/***/ }),

/***/ "./assets/asplode_03.png":
/*!*******************************!*\
  !*** ./assets/asplode_03.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplode_03.png?");

/***/ }),

/***/ "./assets/asplode_04.png":
/*!*******************************!*\
  !*** ./assets/asplode_04.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/asplode_04.png?");

/***/ }),

/***/ "./assets/column.png":
/*!***************************!*\
  !*** ./assets/column.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/column.png?");

/***/ }),

/***/ "./assets/dustSwirl.png":
/*!******************************!*\
  !*** ./assets/dustSwirl.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/dustSwirl.png?");

/***/ }),

/***/ "./assets/fireCloud.png":
/*!******************************!*\
  !*** ./assets/fireCloud.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/fireCloud.png?");

/***/ }),

/***/ "./assets/flyingPixie.png":
/*!********************************!*\
  !*** ./assets/flyingPixie.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/flyingPixie.png?");

/***/ }),

/***/ "./assets/lava_slosh_01.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_01.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_01.png?");

/***/ }),

/***/ "./assets/lava_slosh_02.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_02.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_02.png?");

/***/ }),

/***/ "./assets/lava_slosh_03.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_03.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_03.png?");

/***/ }),

/***/ "./assets/lava_slosh_04.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_04.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_04.png?");

/***/ }),

/***/ "./assets/lava_slosh_05.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_05.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_05.png?");

/***/ }),

/***/ "./assets/lava_slosh_06.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_06.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_06.png?");

/***/ }),

/***/ "./assets/lava_slosh_07.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_07.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_07.png?");

/***/ }),

/***/ "./assets/lava_slosh_08.png":
/*!**********************************!*\
  !*** ./assets/lava_slosh_08.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/lava_slosh_08.png?");

/***/ }),

/***/ "./assets/mainBG_composite.jpg":
/*!*************************************!*\
  !*** ./assets/mainBG_composite.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/mainBG_composite.jpg?");

/***/ }),

/***/ "./assets/mote01.png":
/*!***************************!*\
  !*** ./assets/mote01.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/mote01.png?");

/***/ }),

/***/ "./assets/mote02.png":
/*!***************************!*\
  !*** ./assets/mote02.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/mote02.png?");

/***/ }),

/***/ "./assets/mote03.png":
/*!***************************!*\
  !*** ./assets/mote03.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/mote03.png?");

/***/ }),

/***/ "./assets/pickup.png":
/*!***************************!*\
  !*** ./assets/pickup.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup.png?");

/***/ }),

/***/ "./assets/pickupShine.png":
/*!********************************!*\
  !*** ./assets/pickupShine.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickupShine.png?");

/***/ }),

/***/ "./assets/pickup_01.png":
/*!******************************!*\
  !*** ./assets/pickup_01.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_01.png?");

/***/ }),

/***/ "./assets/pickup_02.png":
/*!******************************!*\
  !*** ./assets/pickup_02.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_02.png?");

/***/ }),

/***/ "./assets/pickup_03.png":
/*!******************************!*\
  !*** ./assets/pickup_03.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_03.png?");

/***/ }),

/***/ "./assets/pickup_04.png":
/*!******************************!*\
  !*** ./assets/pickup_04.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_04.png?");

/***/ }),

/***/ "./assets/pickup_05.png":
/*!******************************!*\
  !*** ./assets/pickup_05.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_05.png?");

/***/ }),

/***/ "./assets/pickup_06.png":
/*!******************************!*\
  !*** ./assets/pickup_06.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_06.png?");

/***/ }),

/***/ "./assets/pickup_07.png":
/*!******************************!*\
  !*** ./assets/pickup_07.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_07.png?");

/***/ }),

/***/ "./assets/pickup_08.png":
/*!******************************!*\
  !*** ./assets/pickup_08.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/pickup_08.png?");

/***/ }),

/***/ "./assets/playButton.png":
/*!*******************************!*\
  !*** ./assets/playButton.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/playButton.png?");

/***/ }),

/***/ "./assets/spike_box.png":
/*!******************************!*\
  !*** ./assets/spike_box.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/spike_box.png?");

/***/ }),

/***/ "./assets/starPops0004.png":
/*!*********************************!*\
  !*** ./assets/starPops0004.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./assets/starPops0004.png?");

/***/ }),

/***/ "./audio sync recursive \\.(wav)$/":
/*!******************************!*\
  !*** ./audio sync \.(wav)$/ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./die.wav\": \"./audio/die.wav\",\n\t\"./hit.wav\": \"./audio/hit.wav\",\n\t\"./point.wav\": \"./audio/point.wav\",\n\t\"./swooshing.wav\": \"./audio/swooshing.wav\",\n\t\"./wing.wav\": \"./audio/wing.wav\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./audio sync recursive \\\\.(wav)$/\";\n\n//# sourceURL=webpack:///./audio_sync_\\.(wav)$/?");

/***/ }),

/***/ "./audio/die.wav":
/*!***********************!*\
  !*** ./audio/die.wav ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0002' (1:6)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./audio/die.wav?");

/***/ }),

/***/ "./audio/hit.wav":
/*!***********************!*\
  !*** ./audio/hit.wav ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0001' (1:6)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./audio/hit.wav?");

/***/ }),

/***/ "./audio/point.wav":
/*!*************************!*\
  !*** ./audio/point.wav ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:5)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./audio/point.wav?");

/***/ }),

/***/ "./audio/swooshing.wav":
/*!*****************************!*\
  !*** ./audio/swooshing.wav ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0005' (1:6)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./audio/swooshing.wav?");

/***/ }),

/***/ "./audio/wing.wav":
/*!************************!*\
  !*** ./audio/wing.wav ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:4)\\nYou may need an appropriate loader to handle this file type.\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./audio/wing.wav?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngame.init();\ngame.animate();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Sound = {};\n\n__webpack_require__(\"./audio sync recursive \\\\.(wav)$/\").keys().forEach(function (file) {\n  Sound[file.substring(2).split('.')[0]] = new Audio(\"audio/\".concat(file.substring(2)));\n});\n\nSound.play = function (name) {\n  if (Sound[name].paused) Sound[name].play();else Sound[name].currentTime = 0;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sound);\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Background = function Background() {\n  _classCallCheck(this, Background);\n\n  this.constructor();\n};\n\nBackground.prototype.constructor = function () {\n  this.mesh = new THREE.Group();\n  this.mesh.add(new THREE.Mesh(new THREE.PlaneGeometry(_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"], _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"], 32), new THREE.MeshPhongMaterial({\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"Textures\"]['05_far_BG']\n  })));\n  this.addLayer({\n    name: '00_roof_leaves',\n    depth: 3,\n    width: 1,\n    height: 10,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '02_front_canopy',\n    depth: 2,\n    width: 1,\n    height: 5,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '03_rear_canopy',\n    depth: 1,\n    width: 1,\n    height: 3,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '01_hanging_flower1',\n    depth: 1,\n    width: 100,\n    height: 2,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '01_hanging_flower2',\n    depth: 1,\n    width: 100,\n    height: 2,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '01_hanging_flower3',\n    depth: 1,\n    width: 100,\n    height: 2,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '01_front_silhouette',\n    depth: 2,\n    width: 1,\n    height: 3,\n    position: 'BOTTOM'\n  });\n  this.addLayer({\n    name: '03_rear_silhouette',\n    depth: 1,\n    width: 1,\n    height: 2,\n    position: 'BOTTOM'\n  });\n  this.addLayer({\n    name: 'lava_slosh_01',\n    depth: 3,\n    width: 5,\n    height: 10,\n    position: 'BOTTOM',\n    animated: true\n  });\n  this.addLayer({\n    name: '02_tree_1',\n    depth: 1,\n    width: 4,\n    height: 1,\n    position: 'LEFT'\n  });\n  this.addLayer({\n    name: '02_tree_2',\n    depth: 1,\n    width: 4,\n    height: 1,\n    position: 'RIGHT'\n  });\n};\n\nBackground.prototype.addLayer = function (_ref) {\n  var _this = this;\n\n  var name = _ref.name,\n      depth = _ref.depth,\n      width = _ref.width,\n      height = _ref.height,\n      position = _ref.position,\n      animated = _ref.animated;\n  var layer = new THREE.Mesh(new THREE.PlaneGeometry(_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / width, _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / height, 32), new THREE.MeshPhongMaterial({\n    transparent: true,\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"Textures\"][name]\n  }));\n  layer.translateZ(depth * 100);\n  if (position === 'TOP') layer.translateY(_textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 2 - _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / (height * 2));\n  if (position === 'BOTTOM') layer.translateY(-_textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 2 + _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / (height * 2));\n  if (position === 'LEFT') layer.translateX(-_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / width);\n  if (position === 'RIGHT') layer.translateX(_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / width);\n\n  if (animated) {\n    layer.userData.animated = true;\n    [-2, -1, 0, 1, 2].forEach(function (i) {\n      var new_background = layer.clone();\n      new_background.translateX(i * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 5);\n\n      _this.mesh.add(new_background);\n    });\n  } else if (name.includes('flower')) {\n    [-2, -1, 0, 1, 2].forEach(function (i) {\n      var new_background = layer.clone();\n      new_background.translateX(i * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 5 + name[name.length - 1] * width);\n\n      _this.mesh.add(new_background);\n    });\n  } else {\n    this.mesh.add(layer);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/columns.js":
/*!************************!*\
  !*** ./src/columns.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Columns = function Columns(_ref) {\n  var position = _ref.position;\n\n  _classCallCheck(this, Columns);\n\n  this.constructor({\n    position: position\n  });\n};\n\nColumns.prototype.constructor = function (_ref2) {\n  var _this = this;\n\n  var position = _ref2.position;\n  this.columns = [];\n  var group = new THREE.Group();\n  group.userData = position;\n\n  for (var i = -2; i <= 2; i++) {\n    var column1_height = Math.floor(Math.random() * 4) + 3;\n    var column2_height = 8 - column1_height;\n    var column1 = new THREE.Mesh(new THREE.PlaneGeometry(_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 20, _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 10 * column1_height, 32), new THREE.MeshPhongMaterial({\n      transparent: true,\n      map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"Textures\"]['column']\n    }));\n    var column2 = new THREE.Mesh(new THREE.PlaneGeometry(_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 20, _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 10 * column2_height, 32), new THREE.MeshPhongMaterial({\n      transparent: true,\n      map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"Textures\"]['column']\n    }));\n    column1.translateX(i * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 5);\n    column1.translateY(_textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 2 - _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 10 * column1_height / 2);\n    column1.translateZ(250);\n    column2.translateX(i * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 5);\n    column2.translateY(-_textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 2 + _textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 10 * column2_height / 2);\n    column2.translateZ(250);\n    this.columns = _toConsumableArray(this.columns).concat([column1, column2]);\n    [column1, column2].forEach(function (column) {\n      return group.add(column);\n    });\n\n    if (position == 1) {\n      [column1, column2].forEach(function (column) {\n        var c = column.clone();\n        c.translateX(-2 * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"]);\n        group.add(c);\n        _this.columns = _toConsumableArray(_this.columns).concat([c]);\n      });\n    }\n  }\n\n  group.translateX(position * _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"]);\n  this.mesh = group;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Columns);\n\n//# sourceURL=webpack:///./src/columns.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns */ \"./src/columns.js\");\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\nGame.prototype.init = function () {\n  var _this = this;\n\n  this.columnList = [];\n  this.animated = [];\n  this.clock = new THREE.Clock(); // Scene\n\n  this.scene = new THREE.Scene(); // Renderer\n\n  this.renderer = new THREE.WebGLRenderer({\n    antialias: true,\n    canvas: document.querySelector('canvas')\n  });\n  this.renderer.setPixelRatio(window.devicePixelRatio);\n  this.renderer.setSize(window.innerWidth, window.innerHeight); // Light\n\n  this.scene.add(new THREE.AmbientLight(0xffffff)); // Camera\n\n  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);\n  this.camera.position.set(0, 0, 1500); // Player\n\n  this.player = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  this.scene.add(this.player.mesh); // Create background template\n\n  var template = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // Create background\n\n  [-2, -1, 0, 1, 2].forEach(function (i) {\n    var new_background = template.mesh.clone();\n    new_background.translateX(i * _textures__WEBPACK_IMPORTED_MODULE_2__[\"WIDTH\"]);\n\n    _this.scene.add(new_background);\n  });\n  this.scene.traverse(function (child) {\n    return child.userData.animated ? _this.animated.push(child) : null;\n  }); // Events\n\n  window.addEventListener('resize', function (event) {\n    return _this.onWindowResize(event);\n  }, false);\n  window.addEventListener('mousedown', function (event) {\n    return _this.onKeyDown(event);\n  }, false);\n};\n\nGame.prototype.render = function () {\n  var _this2 = this;\n\n  this.camera.position.x = this.player.mesh.position.x;\n  this.columnList.forEach(function (column) {\n    return _this2.player.checkCollision(column);\n  });\n  this.updateMap(0);\n  this.updateMap(1);\n  this.player.update(this.clock.getDelta());\n  this.updateAnimations(this.clock.getElapsedTime());\n  this.renderer.render(this.scene, this.camera);\n};\n\nGame.prototype.updateMap = function (position) {\n  var _this3 = this;\n\n  if (this.player.mesh.position.x == (position - 1) * window.innerWidth) {\n    this.columnList = this.columnList.filter(function (column) {\n      return column.parent.userData != position;\n    });\n    this.scene.children.forEach(function (child) {\n      return child.userData == position ? _this3.scene.remove(child) : null;\n    });\n    var col = new _columns__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      position: position\n    });\n    this.columnList = _toConsumableArray(this.columnList).concat(_toConsumableArray(col.columns));\n    this.scene.add(col.mesh);\n  }\n};\n\nGame.prototype.updateAnimations = function (delta) {\n  // Number 1-16\n  delta = Math.floor(delta * 16) % 16 + 1; // Number 1-8 then 8-1 to make an animation loop instead of restarting it\n\n  delta = delta > 8 ? 16 - delta : delta;\n  this.animated.forEach(function (texture) {\n    return texture.material.map = _textures__WEBPACK_IMPORTED_MODULE_2__[\"Textures\"][\"lava_slosh_0\".concat(delta)];\n  });\n};\n\nGame.prototype.animate = function () {\n  var _this4 = this;\n\n  requestAnimationFrame(function () {\n    return _this4.animate();\n  });\n  this.render();\n};\n\nGame.prototype.onKeyDown = function (event) {\n  switch (event.which) {\n    case 1:\n      this.player.jump();\n      break;\n  }\n};\n\nGame.prototype.onWindowResize = function () {\n  this.camera.aspect = window.innerWidth / window.innerHeight;\n  this.camera.updateProjectionMatrix();\n  this.renderer.setSize(window.innerWidth, window.innerHeight);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar Player = function Player() {\n  _classCallCheck(this, Player);\n\n  this.constructor();\n};\n\nPlayer.prototype.constructor = function () {\n  this.score = 0;\n  this.mass = 3;\n  this.speed = 3;\n  this.audio = _audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  this.velocity = new THREE.Vector3(this.speed, 0, 0);\n  this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 50, 32), new THREE.MeshPhongMaterial({\n    transparent: true,\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"Textures\"]['flyingPixie']\n  }));\n  this.mesh.translateZ(255);\n};\n\nPlayer.prototype.update = function (delta) {\n  this.box = new THREE.Box3().setFromObject(this.mesh);\n  this.velocity.y -= 9.81 * this.mass * delta;\n  this.mesh.position.y += this.velocity.y;\n  this.mesh.position.x += this.velocity.x;\n  this.mesh.rotation.z = this.velocity.y < 0 ? this.mesh.rotation.z - 0.01 : null;\n  this.mesh.rotation.z = this.velocity.y > 0 ? this.mesh.rotation.z + 0.01 : null;\n  this.mesh.position.x = this.mesh.position.x > _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] ? -_textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] : this.mesh.position.x;\n};\n\nPlayer.prototype.jump = function () {\n  this.velocity.y = 10;\n  this.audio.play('wing');\n};\n\nPlayer.prototype.checkCollision = function (column) {\n  var column_box = new THREE.Box3().setFromObject(column);\n\n  if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x && this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x && !column.passed) {\n    column.passed = true;\n    this.updateScore(this.score + 0.5);\n  }\n\n  if (this.velocity.x != 0) {\n    if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x && this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x && this.box.min.y < column_box.getSize(new THREE.Vector3()).y + column_box.min.y && this.box.min.y + this.box.getSize(new THREE.Vector3()).y > column_box.min.y) {\n      this.hit();\n    }\n\n    if (this.mesh.position.y > _textures__WEBPACK_IMPORTED_MODULE_0__[\"WIDTH\"] / 2 || this.mesh.position.y < -_textures__WEBPACK_IMPORTED_MODULE_0__[\"HEIGHT\"] / 2) {\n      this.hit();\n    }\n  }\n};\n\nPlayer.prototype.hit = function () {\n  var _this = this;\n\n  this.velocity.x = 0;\n  this.velocity.y = 10;\n  this.audio.play('hit');\n  var playButton = document.createElement('img');\n  playButton.src = '../assets/playButton.png';\n  playButton.addEventListener('click', function (event) {\n    return _this.restart();\n  }, false);\n  document.body.prepend(playButton);\n};\n\nPlayer.prototype.restart = function () {\n  this.mesh.position.x = 0;\n  this.mesh.position.y = 0;\n  this.mesh.rotation.z = 0;\n  this.velocity.x = this.speed;\n  this.velocity.y = 0;\n  this.updateScore(0);\n  document.querySelector('img').remove();\n};\n\nPlayer.prototype.updateScore = function (score) {\n  this.score = score;\n  document.querySelector('.score').textContent = this.score;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/textures.js":
/*!*************************!*\
  !*** ./src/textures.js ***!
  \*************************/
/*! exports provided: Textures, WIDTH, HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Textures\", function() { return Textures; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDTH\", function() { return WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEIGHT\", function() { return HEIGHT; });\nvar Loader = new THREE.TextureLoader();\nvar Textures = {};\nvar WIDTH = window.innerWidth < 1200 ? 1200 : window.innerWidth;\nvar HEIGHT = window.innerHeight < 900 ? 900 : window.innerHeight;\n\n__webpack_require__(\"./assets sync recursive \\\\.(jpg|png)$/\").keys().forEach(function (file) {\n  return Textures[file.substring(2).replace(/\\.[^/.]+$/, \"\")] = Loader.load(\"./assets/\".concat(file.substring(2)));\n});\n\n\n\n//# sourceURL=webpack:///./src/textures.js?");

/***/ })

/******/ });