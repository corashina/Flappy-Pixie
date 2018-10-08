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

/***/ "./assets/WorldAssets.js":
/*!*******************************!*\
  !*** ./assets/WorldAssets.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar worldassets = {\n  \"frames\": {\n    \"00_forest_floor.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 227,\n        \"w\": 584,\n        \"h\": 79\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 584,\n        \"h\": 79\n      },\n      \"sourceSize\": {\n        \"w\": 584,\n        \"h\": 79\n      }\n    },\n    \"00_roof_leaves.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 315,\n        \"w\": 550,\n        \"h\": 55\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 550,\n        \"h\": 55\n      },\n      \"sourceSize\": {\n        \"w\": 550,\n        \"h\": 55\n      }\n    },\n    \"01_front_silhouette.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 5,\n        \"w\": 643,\n        \"h\": 108\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 643,\n        \"h\": 108\n      },\n      \"sourceSize\": {\n        \"w\": 643,\n        \"h\": 108\n      }\n    },\n    \"01_hanging_flower1.png\": {\n      \"frame\": {\n        \"x\": 1007,\n        \"y\": 286,\n        \"w\": 7,\n        \"h\": 217\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 7,\n        \"h\": 217\n      },\n      \"sourceSize\": {\n        \"w\": 7,\n        \"h\": 217\n      }\n    },\n    \"01_hanging_flower2.png\": {\n      \"frame\": {\n        \"x\": 857,\n        \"y\": 374,\n        \"w\": 5,\n        \"h\": 193\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 5,\n        \"h\": 193\n      },\n      \"sourceSize\": {\n        \"w\": 5,\n        \"h\": 193\n      }\n    },\n    \"01_hanging_flower3.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 301,\n        \"w\": 6,\n        \"h\": 195\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 6,\n        \"h\": 195\n      },\n      \"sourceSize\": {\n        \"w\": 6,\n        \"h\": 195\n      }\n    },\n    \"02_front_canopy.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 379,\n        \"w\": 530,\n        \"h\": 88\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 530,\n        \"h\": 88\n      },\n      \"sourceSize\": {\n        \"w\": 530,\n        \"h\": 88\n      }\n    },\n    \"02_tree_1.png\": {\n      \"frame\": {\n        \"x\": 657,\n        \"y\": 5,\n        \"w\": 206,\n        \"h\": 278\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 206,\n        \"h\": 278\n      },\n      \"sourceSize\": {\n        \"w\": 206,\n        \"h\": 278\n      }\n    },\n    \"02_tree_2.png\": {\n      \"frame\": {\n        \"x\": 647,\n        \"y\": 292,\n        \"w\": 155,\n        \"h\": 247\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 155,\n        \"h\": 247\n      },\n      \"sourceSize\": {\n        \"w\": 155,\n        \"h\": 247\n      }\n    },\n    \"03_rear_canopy.png\": {\n      \"frame\": {\n        \"x\": 494,\n        \"y\": 577,\n        \"w\": 480,\n        \"h\": 126\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 480,\n        \"h\": 126\n      },\n      \"sourceSize\": {\n        \"w\": 480,\n        \"h\": 126\n      }\n    },\n    \"03_rear_silhouette.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 122,\n        \"w\": 643,\n        \"h\": 96\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 643,\n        \"h\": 96\n      },\n      \"sourceSize\": {\n        \"w\": 643,\n        \"h\": 96\n      }\n    },\n    \"05_far_BG.jpg\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 476,\n        \"w\": 480,\n        \"h\": 250\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 480,\n        \"h\": 250\n      },\n      \"sourceSize\": {\n        \"w\": 480,\n        \"h\": 250\n      }\n    },\n    \"asplodeInner01.png\": {\n      \"frame\": {\n        \"x\": 811,\n        \"y\": 333,\n        \"w\": 51,\n        \"h\": 32\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 51,\n        \"h\": 32\n      },\n      \"sourceSize\": {\n        \"w\": 51,\n        \"h\": 32\n      }\n    },\n    \"asplodeInner02.png\": {\n      \"frame\": {\n        \"x\": 811,\n        \"y\": 292,\n        \"w\": 51,\n        \"h\": 32\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 51,\n        \"h\": 32\n      },\n      \"sourceSize\": {\n        \"w\": 51,\n        \"h\": 32\n      }\n    },\n    \"asplodeSpike_01.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 229,\n        \"w\": 22,\n        \"h\": 28\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 22,\n        \"h\": 28\n      },\n      \"sourceSize\": {\n        \"w\": 22,\n        \"h\": 28\n      }\n    },\n    \"asplodeSpike_02.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 198,\n        \"w\": 24,\n        \"h\": 22\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 24,\n        \"h\": 22\n      },\n      \"sourceSize\": {\n        \"w\": 24,\n        \"h\": 22\n      }\n    },\n    \"asplode_01.png\": {\n      \"frame\": {\n        \"x\": 871,\n        \"y\": 317,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"sourceSize\": {\n        \"w\": 107,\n        \"h\": 95\n      }\n    },\n    \"asplode_02.png\": {\n      \"frame\": {\n        \"x\": 872,\n        \"y\": 213,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"sourceSize\": {\n        \"w\": 107,\n        \"h\": 95\n      }\n    },\n    \"asplode_03.png\": {\n      \"frame\": {\n        \"x\": 872,\n        \"y\": 109,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"sourceSize\": {\n        \"w\": 107,\n        \"h\": 95\n      }\n    },\n    \"asplode_04.png\": {\n      \"frame\": {\n        \"x\": 872,\n        \"y\": 5,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 107,\n        \"h\": 95\n      },\n      \"sourceSize\": {\n        \"w\": 107,\n        \"h\": 95\n      }\n    },\n    \"dustSwirl.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 164,\n        \"w\": 25,\n        \"h\": 25\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 25,\n        \"h\": 25\n      },\n      \"sourceSize\": {\n        \"w\": 25,\n        \"h\": 25\n      }\n    },\n    \"fireCloud.png\": {\n      \"frame\": {\n        \"x\": 598,\n        \"y\": 257,\n        \"w\": 40,\n        \"h\": 40\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 40,\n        \"h\": 40\n      },\n      \"sourceSize\": {\n        \"w\": 40,\n        \"h\": 40\n      }\n    },\n    \"lava_slosh_01.png\": {\n      \"frame\": {\n        \"x\": 494,\n        \"y\": 496,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_02.png\": {\n      \"frame\": {\n        \"x\": 544,\n        \"y\": 457,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_03.png\": {\n      \"frame\": {\n        \"x\": 544,\n        \"y\": 418,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_04.png\": {\n      \"frame\": {\n        \"x\": 544,\n        \"y\": 379,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_05.png\": {\n      \"frame\": {\n        \"x\": 871,\n        \"y\": 538,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_06.png\": {\n      \"frame\": {\n        \"x\": 871,\n        \"y\": 499,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_07.png\": {\n      \"frame\": {\n        \"x\": 871,\n        \"y\": 460,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"lava_slosh_08.png\": {\n      \"frame\": {\n        \"x\": 871,\n        \"y\": 421,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 90,\n        \"h\": 30\n      },\n      \"sourceSize\": {\n        \"w\": 90,\n        \"h\": 30\n      }\n    },\n    \"mote01.png\": {\n      \"frame\": {\n        \"x\": 1008,\n        \"y\": 266,\n        \"w\": 10,\n        \"h\": 11\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 10,\n        \"h\": 11\n      },\n      \"sourceSize\": {\n        \"w\": 10,\n        \"h\": 11\n      }\n    },\n    \"mote02.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 283,\n        \"w\": 10,\n        \"h\": 9\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 10,\n        \"h\": 9\n      },\n      \"sourceSize\": {\n        \"w\": 10,\n        \"h\": 9\n      }\n    },\n    \"mote03.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 266,\n        \"w\": 11,\n        \"h\": 8\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 11,\n        \"h\": 8\n      },\n      \"sourceSize\": {\n        \"w\": 11,\n        \"h\": 8\n      }\n    },\n    \"pickup.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 82,\n        \"w\": 28,\n        \"h\": 28\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 28,\n        \"h\": 28\n      },\n      \"sourceSize\": {\n        \"w\": 28,\n        \"h\": 28\n      }\n    },\n    \"pickupShine.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 735,\n        \"w\": 87,\n        \"h\": 87\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 87,\n        \"h\": 87\n      },\n      \"sourceSize\": {\n        \"w\": 87,\n        \"h\": 87\n      }\n    },\n    \"pickup_01.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 42,\n        \"w\": 29,\n        \"h\": 31\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 29,\n        \"h\": 31\n      },\n      \"sourceSize\": {\n        \"w\": 29,\n        \"h\": 31\n      }\n    },\n    \"pickup_02.png\": {\n      \"frame\": {\n        \"x\": 598,\n        \"y\": 227,\n        \"w\": 42,\n        \"h\": 21\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 42,\n        \"h\": 21\n      },\n      \"sourceSize\": {\n        \"w\": 42,\n        \"h\": 21\n      }\n    },\n    \"pickup_03.png\": {\n      \"frame\": {\n        \"x\": 811,\n        \"y\": 374,\n        \"w\": 37,\n        \"h\": 35\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 37,\n        \"h\": 35\n      },\n      \"sourceSize\": {\n        \"w\": 37,\n        \"h\": 35\n      }\n    },\n    \"pickup_04.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 5,\n        \"w\": 31,\n        \"h\": 28\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 31,\n        \"h\": 28\n      },\n      \"sourceSize\": {\n        \"w\": 31,\n        \"h\": 28\n      }\n    },\n    \"pickup_05.png\": {\n      \"frame\": {\n        \"x\": 811,\n        \"y\": 458,\n        \"w\": 32,\n        \"h\": 34\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 32,\n        \"h\": 34\n      },\n      \"sourceSize\": {\n        \"w\": 32,\n        \"h\": 34\n      }\n    },\n    \"pickup_06.png\": {\n      \"frame\": {\n        \"x\": 598,\n        \"y\": 306,\n        \"w\": 39,\n        \"h\": 27\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 39,\n        \"h\": 27\n      },\n      \"sourceSize\": {\n        \"w\": 39,\n        \"h\": 27\n      }\n    },\n    \"pickup_07.png\": {\n      \"frame\": {\n        \"x\": 811,\n        \"y\": 418,\n        \"w\": 34,\n        \"h\": 31\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 34,\n        \"h\": 31\n      },\n      \"sourceSize\": {\n        \"w\": 34,\n        \"h\": 31\n      }\n    },\n    \"pickup_08.png\": {\n      \"frame\": {\n        \"x\": 988,\n        \"y\": 119,\n        \"w\": 26,\n        \"h\": 36\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 26,\n        \"h\": 36\n      },\n      \"sourceSize\": {\n        \"w\": 26,\n        \"h\": 36\n      }\n    },\n    \"spike_box.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 922,\n        \"w\": 79,\n        \"h\": 74\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 79,\n        \"h\": 74\n      },\n      \"sourceSize\": {\n        \"w\": 79,\n        \"h\": 74\n      }\n    },\n    \"starPops0004.png\": {\n      \"frame\": {\n        \"x\": 5,\n        \"y\": 831,\n        \"w\": 82,\n        \"h\": 82\n      },\n      \"rotated\": false,\n      \"trimmed\": false,\n      \"spriteSourceSize\": {\n        \"x\": 0,\n        \"y\": 0,\n        \"w\": 82,\n        \"h\": 82\n      },\n      \"sourceSize\": {\n        \"w\": 82,\n        \"h\": 82\n      }\n    }\n  },\n  \"meta\": {\n    \"app\": \"http://www.texturepacker.com\",\n    \"version\": \"1.0\",\n    \"image\": \"WorldAssets.png\",\n    \"format\": \"RGBA8888\",\n    \"size\": {\n      \"w\": 1024,\n      \"h\": 1001\n    },\n    \"scale\": \"0.5\",\n    \"smartupdate\": \"$TexturePacker:SmartUpdate:95285facedcef93e01edd48e022a32f1$\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (worldassets);\n\n//# sourceURL=webpack:///./assets/WorldAssets.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columns */ \"./src/columns.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\nvar renderer, scene, camera, time, player;\nvar columnList = [];\nvar prevTime = performance.now();\ninit();\nanimate();\n\nfunction init() {\n  // Scene\n  scene = new THREE.Scene(); // Renderer\n\n  renderer = new THREE.WebGLRenderer({\n    antialias: true,\n    canvas: document.querySelector('canvas')\n  });\n  renderer.setPixelRatio(window.devicePixelRatio);\n  renderer.setSize(window.innerWidth, window.innerHeight); // Light\n\n  scene.add(new THREE.AmbientLight(0xffffff)); // Camera\n\n  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);\n  camera.position.set(0, 0, 1500); // Player\n\n  player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  scene.add(player.mesh); // Background\n\n  var template = new _background__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  [-2, -1, 0, 1, 2].forEach(function (i) {\n    var new_background = template.mesh.clone();\n    new_background.translateX(i * window.innerWidth);\n    scene.add(new_background);\n  });\n}\n\nfunction animate() {\n  requestAnimationFrame(animate);\n  render();\n}\n\nfunction render() {\n  time = performance.now();\n  camera.position.x = player.mesh.position.x;\n  camera.position.z = window.innerWidth * 3;\n  camera.target = player.mesh;\n\n  if (player.mesh.position.x == -window.innerWidth) {\n    console.log(\"XD\");\n    columnList = columnList.filter(function (column) {\n      return column.parent.userData != 0;\n    });\n    scene.children.forEach(function (child) {\n      return child.userData == 0 ? scene.remove(child) : null;\n    });\n    var col = new _columns__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      position: 0\n    });\n    columnList = _toConsumableArray(columnList).concat(_toConsumableArray(col.columns));\n    scene.add(col.mesh);\n  }\n\n  if (player.mesh.position.x == 0) {\n    columnList = columnList.filter(function (column) {\n      return column.parent.userData != 1;\n    });\n    scene.children.forEach(function (child) {\n      return child.userData == 1 ? scene.remove(child) : null;\n    });\n\n    var _col = new _columns__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      position: 1\n    });\n\n    columnList = _toConsumableArray(columnList).concat(_toConsumableArray(_col.columns));\n    scene.add(_col.mesh);\n  }\n\n  player.update((time - prevTime) / 2000);\n  columnList.forEach(function (column) {\n    return player.checkCollision(column);\n  });\n  prevTime = time;\n  renderer.render(scene, camera);\n}\n\nfunction onWindowResize() {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n}\n\nfunction onMouseDown(event) {\n  switch (event.which) {\n    case 1:\n      player.jump();\n      break;\n  }\n}\n\nwindow.addEventListener('resize', onWindowResize, false);\nwindow.addEventListener('mousedown', onMouseDown, false);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar AUDIO = {};\n\n__webpack_require__(\"./audio sync recursive \\\\.(wav)$/\").keys().forEach(function (file) {\n  AUDIO[file.substring(2).split('.')[0]] = new Audio(\"audio/\".concat(file.substring(2)));\n});\n\nAUDIO.play = function (name) {\n  if (AUDIO[name].paused) AUDIO[name].play();else AUDIO[name].currentTime = 0;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AUDIO);\n\n//# sourceURL=webpack:///./src/audio.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar WIDTH = window.innerWidth;\nvar HEIGHT = window.innerHeight;\n\nvar BACKGROUND = function BACKGROUND() {\n  _classCallCheck(this, BACKGROUND);\n\n  this.mesh = new THREE.Group();\n  this.mesh.add(new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32), new THREE.MeshPhongMaterial({\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['05_far_BG'].tex\n  })));\n  this.addLayer({\n    name: '00_roof_leaves',\n    depth: 3,\n    width: WIDTH,\n    height: 10,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '02_front_canopy',\n    depth: 2,\n    width: WIDTH,\n    height: 5,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '03_rear_canopy',\n    depth: 1,\n    width: WIDTH,\n    height: 3,\n    position: 'TOP'\n  });\n  this.addLayer({\n    name: '01_front_silhouette',\n    depth: 2,\n    width: WIDTH,\n    height: 5,\n    position: 'BOTTOM'\n  });\n  this.addLayer({\n    name: '03_rear_silhouette',\n    depth: 1,\n    width: WIDTH,\n    height: 3,\n    position: 'BOTTOM'\n  });\n  this.addLayer({\n    name: '02_tree_1',\n    depth: 1,\n    width: WIDTH / 4,\n    height: 1,\n    position: 'LEFT'\n  });\n  this.addLayer({\n    name: '02_tree_2',\n    depth: 1,\n    width: WIDTH / 4,\n    height: 1,\n    position: 'RIGHT'\n  });\n};\n\nBACKGROUND.prototype.addLayer = function (_ref) {\n  var name = _ref.name,\n      depth = _ref.depth,\n      width = _ref.width,\n      height = _ref.height,\n      position = _ref.position;\n  var layer = new THREE.Mesh(new THREE.PlaneGeometry(width, HEIGHT / height, 32), new THREE.MeshPhongMaterial({\n    transparent: true,\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name].tex\n  }));\n  layer.translateZ(depth * 100);\n  if (position === 'TOP') layer.translateY(HEIGHT / 2 - HEIGHT / (height * 2));else if (position === 'BOTTOM') layer.translateY(-HEIGHT / 2 + HEIGHT / (height * 2));else if (position === 'LEFT') layer.translateX(-width);else if (position === 'RIGHT') layer.translateX(width);\n  this.mesh.add(layer);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BACKGROUND);\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/columns.js":
/*!************************!*\
  !*** ./src/columns.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar COLUMNS = function COLUMNS(_ref) {\n  var position = _ref.position;\n\n  _classCallCheck(this, COLUMNS);\n\n  this.columns = [];\n  var group = new THREE.Group();\n  group.userData = position;\n\n  for (var i = -2; i <= 2; i++) {\n    var column1_height = Math.floor(Math.random() * 4) + 3;\n    var column2_height = 8 - column1_height;\n    var column1 = new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column1_height, 32), new THREE.MeshPhongMaterial({\n      transparent: true,\n      map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['column'].tex\n    }));\n    var column2 = new THREE.Mesh(new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column2_height, 32), new THREE.MeshPhongMaterial({\n      transparent: true,\n      map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['column'].tex\n    }));\n    column1.translateX(i * window.innerWidth / 5);\n    column1.translateY(window.innerHeight / 2 - window.innerHeight / 10 * column1_height / 2);\n    column1.translateZ(250);\n    column2.translateX(i * window.innerWidth / 5);\n    column2.translateY(-window.innerHeight / 2 + window.innerHeight / 10 * column2_height / 2);\n    column2.translateZ(250);\n    this.columns = _toConsumableArray(this.columns).concat([column1, column2]);\n    group.add(column1);\n    group.add(column2);\n\n    if (position == 1) {\n      var c1 = column1.clone();\n      c1.translateX(-2 * window.innerWidth);\n      group.add(c1);\n      var c2 = column2.clone();\n      c2.translateX(-2 * window.innerWidth);\n      group.add(c2);\n      this.columns = _toConsumableArray(this.columns).concat([c1, c2]);\n    }\n  }\n\n  group.translateX(position * window.innerWidth);\n  this.mesh = group;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (COLUMNS);\n\n//# sourceURL=webpack:///./src/columns.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textures */ \"./src/textures.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio */ \"./src/audio.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar PLAYER = function PLAYER() {\n  _classCallCheck(this, PLAYER);\n\n  this.speed = 3;\n  this.velocity = new THREE.Vector3(this.speed, 0, 0);\n  this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 50, 32), new THREE.MeshPhongMaterial({\n    transparent: true,\n    map: _textures__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['flyingPixie'].tex\n  }));\n  this.mesh.translateZ(250);\n};\n\nPLAYER.prototype.update = function (delta) {\n  this.box = new THREE.Box3().setFromObject(this.mesh);\n  this.velocity.y -= 9.81 * 5 * delta;\n  this.mesh.position.y += this.velocity.y;\n  this.mesh.position.x += this.velocity.x;\n  this.mesh.rotation.z = this.velocity.y < 0 ? this.mesh.rotation.z - 0.01 : this.mesh.rotation.z + 0.01;\n  if (this.mesh.position.x > window.innerWidth) this.mesh.position.x = -window.innerWidth;\n\n  if (this.mesh.position.y < -window.innerHeight / 2) {\n    this.mesh.position.y = 0;\n    this.mesh.rotation.z = 0;\n    this.velocity.y = 0;\n  }\n};\n\nPLAYER.prototype.jump = function () {\n  this.velocity.y = 10;\n  _audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].play('wing');\n};\n\nPLAYER.prototype.checkCollision = function (column) {\n  var column_box = new THREE.Box3().setFromObject(column);\n\n  if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x && this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x && this.box.min.y < column_box.getSize(new THREE.Vector3()).y + column_box.min.y && this.box.min.y + this.box.getSize(new THREE.Vector3()).y > column_box.min.y) {\n    _audio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].play('hit');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PLAYER);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/textures.js":
/*!*************************!*\
  !*** ./src/textures.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_WorldAssets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/WorldAssets.js */ \"./assets/WorldAssets.js\");\n\nvar loader = new THREE.TextureLoader(),\n    textures = {};\n\n__webpack_require__(\"./assets sync recursive \\\\.(jpg|png)$/\").keys().forEach(function (file) {\n  return textures[file.substring(2).replace(/\\.[^/.]+$/, \"\")] = {\n    tex: loader.load(\"./assets/\".concat(file.substring(2))),\n    width: _assets_WorldAssets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames[file.substring(2)] != null ? _assets_WorldAssets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames[file.substring(2)].frame.w : 0,\n    height: _assets_WorldAssets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames[file.substring(2)] != null ? _assets_WorldAssets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].frames[file.substring(2)].frame.h : 0\n  };\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (textures);\n\n//# sourceURL=webpack:///./src/textures.js?");

/***/ })

/******/ });