/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/background.png */ "./src/images/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --neutral-100: #f5f5f5;\n  --neutral-100-blur: rgb(245, 245, 245, 0.20);\n  --neutral-800: #404040;\n  --neutral-900: #171717;\n  --green-300-faded: rgb(134, 239, 172, 0.2);\n  --green-900: rgb(20, 83, 45);\n  --green-900-faded: rgb(20, 83, 45, 0.8);\n  --yellow-300: #fde047;\n  --yellow-500: #eab308;\n  --yellow-300-faded: rgb(253, 224, 71, 0.2);\n  --orange-900: #7c2d12;\n}\n\n/* BEGIN CSS RESET */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* END CSS RESET */\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n  font-family: 'Montserrat', sans-serif;\n  color: var(--neutral-900);\n}\n\n#static {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.header {\n  font-weight: 700;\n  font-size: 2.2rem;\n  padding: 8px;\n  color: var(--green-900);\n  background-color: var(--yellow-300-faded);\n  border-top: solid 3px var(--green-900);\n  border-bottom: solid 3px var(--green-900);\n  border-radius: 12px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  max-width: 1000px;\n  line-height: 150%;\n  letter-spacing: 1px;\n  background-color: var(--yellow-300-faded);\n  border-radius: 24px;\n  padding: 48px;\n  margin-bottom: 100px;\n  overflow: auto;\n}\n\n.blur {\n  background: var(--neutral-100-blur);\n  backdrop-filter: blur(5px); \n  height: 100%;\n}\n\nli {\n  padding: 8px;\n}\n\n.hours_header {\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.hours_list_item {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.hours_list_day {\n  font-weight: 700;\n  color: var(--green-900);\n}\n\n.hours_list_time {\n  color: var(--green-900);\n}\n\n.menu_item {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n\n.menu_item_name {\n  font-weight: 700;\n  color: var(--green-900);\n  margin-bottom: 4px;\n}\n\n.menu_item_price {\n  font-weight: 700;\n  text-align: right;\n}\n\n.menu_item_description {\n  font-size: 1.1rem;\n}\n\n.menu_item_image {\n  border-radius: 12px;\n  height: 320px;\n  object-fit: contain;\n  margin: 24px 12px;\n  align-self: flex-start;\n}\n\n.contact_header {\n  text-align: center;\n  font-weight: 700;\n  color: var(--green-900);\n  margin-bottom: 12px;\n  padding-bottom: 4px;\n  border-bottom: solid 3px var(--green-900);\n}\n\n.contact_name {\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.nav_container, footer {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 16px;\n  background-color: var(--yellow-300-faded);\n}\n\nnav {\n  display: flex;\n  gap: 24px;\n}\n\nnav a {\n  text-decoration: none;\n  color: var(--green-900);\n  font-weight: 700;\n  font-size: 1.4rem;\n  border-bottom: solid 2.4px var(--green-900);\n}\n\nnav a:hover {\n  color: var(--orange-900);\n  border-bottom: solid 2.4px var(--orange-900);\n  transition: .2s;\n}\n\n.active {\n  color: var(--orange-900);\n  border-bottom: solid 2.4px var(--orange-900);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  padding: 12px;\n  margin-top: 200px;\n  background-color: var(--green-900-faded);\n}\n\n.hours_container {\n  display: flex;\n  flex-direction: column;\n}\n\n@media only screen and (max-width: 400px) {\n  body {\n    background-image: none;\n    background-color: var(--yellow-300-faded);\n    height: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,4CAA4C;EAC5C,sBAAsB;EACtB,sBAAsB;EACtB,0CAA0C;EAC1C,4BAA4B;EAC5B,uCAAuC;EACvC,qBAAqB;EACrB,qBAAqB;EACrB,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA,oBAAoB;;AAEpB;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,kBAAkB;;AAElB;EACE,yDAAqD;EACrD,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,yCAAyC;EACzC,sCAAsC;EACtC,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,yCAAyC;EACzC,mBAAmB;EACnB,aAAa;EACb,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;;AAGA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,2CAA2C;AAC7C;;AAEA;EACE,wBAAwB;EACxB,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,4CAA4C;AAC9C;;AAEA;EACE,eAAe;EACf,SAAS;EACT,aAAa;EACb,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE;IACE,sBAAsB;IACtB,yCAAyC;IACzC,YAAY;EACd;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');\n\n:root {\n  --neutral-100: #f5f5f5;\n  --neutral-100-blur: rgb(245, 245, 245, 0.20);\n  --neutral-800: #404040;\n  --neutral-900: #171717;\n  --green-300-faded: rgb(134, 239, 172, 0.2);\n  --green-900: rgb(20, 83, 45);\n  --green-900-faded: rgb(20, 83, 45, 0.8);\n  --yellow-300: #fde047;\n  --yellow-500: #eab308;\n  --yellow-300-faded: rgb(253, 224, 71, 0.2);\n  --orange-900: #7c2d12;\n}\n\n/* BEGIN CSS RESET */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* END CSS RESET */\n\nbody {\n  background-image: url(\"../src/images/background.png\");\n  background-repeat: repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n  font-family: 'Montserrat', sans-serif;\n  color: var(--neutral-900);\n}\n\n#static {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n\n.header {\n  font-weight: 700;\n  font-size: 2.2rem;\n  padding: 8px;\n  color: var(--green-900);\n  background-color: var(--yellow-300-faded);\n  border-top: solid 3px var(--green-900);\n  border-bottom: solid 3px var(--green-900);\n  border-radius: 12px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  max-width: 1000px;\n  line-height: 150%;\n  letter-spacing: 1px;\n  background-color: var(--yellow-300-faded);\n  border-radius: 24px;\n  padding: 48px;\n  margin-bottom: 100px;\n  overflow: auto;\n}\n\n.blur {\n  background: var(--neutral-100-blur);\n  backdrop-filter: blur(5px); \n  height: 100%;\n}\n\nli {\n  padding: 8px;\n}\n\n.hours_header {\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.hours_list_item {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.hours_list_day {\n  font-weight: 700;\n  color: var(--green-900);\n}\n\n.hours_list_time {\n  color: var(--green-900);\n}\n\n.menu_item {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n\n.menu_item_name {\n  font-weight: 700;\n  color: var(--green-900);\n  margin-bottom: 4px;\n}\n\n.menu_item_price {\n  font-weight: 700;\n  text-align: right;\n}\n\n.menu_item_description {\n  font-size: 1.1rem;\n}\n\n.menu_item_image {\n  border-radius: 12px;\n  height: 320px;\n  object-fit: contain;\n  margin: 24px 12px;\n  align-self: flex-start;\n}\n\n.contact_header {\n  text-align: center;\n  font-weight: 700;\n  color: var(--green-900);\n  margin-bottom: 12px;\n  padding-bottom: 4px;\n  border-bottom: solid 3px var(--green-900);\n}\n\n.contact_name {\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.nav_container, footer {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 16px;\n  background-color: var(--yellow-300-faded);\n}\n\nnav {\n  display: flex;\n  gap: 24px;\n}\n\nnav a {\n  text-decoration: none;\n  color: var(--green-900);\n  font-weight: 700;\n  font-size: 1.4rem;\n  border-bottom: solid 2.4px var(--green-900);\n}\n\nnav a:hover {\n  color: var(--orange-900);\n  border-bottom: solid 2.4px var(--orange-900);\n  transition: .2s;\n}\n\n.active {\n  color: var(--orange-900);\n  border-bottom: solid 2.4px var(--orange-900);\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  padding: 12px;\n  margin-top: 200px;\n  background-color: var(--green-900-faded);\n}\n\n.hours_container {\n  display: flex;\n  flex-direction: column;\n}\n\n@media only screen and (max-width: 400px) {\n  body {\n    background-image: none;\n    background-color: var(--yellow-300-faded);\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showContacts)
/* harmony export */ });
/* harmony import */ var _contactsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactsList */ "./src/contactsList.js");


function showContacts(staticDiv, currentModule) {
  const contacts = (0,_contactsList__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const contactContainer = document.createElement('div');
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us'
  contactHeader.classList.add('contact_header');
  contactContainer.appendChild(contactHeader);
  const contactList = document.createElement('ul');

  contacts.forEach((contact) => {
    let listing;
    for (const _detail in contact) {
      listing = createListing(contact, contactList);
    }
    contactList.appendChild(listing);
  });

  contactContainer.appendChild(contactList);
  currentModule.appendChild(contactContainer);
  staticDiv.appendChild(currentModule);
  return staticDiv;
}

function createListing(contact) {
  const listing = document.createElement('li');

  const name = document.createElement('h3');
  name.classList.add('contact_name');
  name.textContent = contact['name'];
  listing.appendChild(name);

  const detail = document.createElement('p');
  detail.classList.add('contact_detail');
  detail.textContent = contact['detail'];
  listing.appendChild(detail);

  return listing;
}


/***/ }),

/***/ "./src/contactsList.js":
/*!*****************************!*\
  !*** ./src/contactsList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contacts)
/* harmony export */ });
function contacts() {
  const contacts = [
    {
      name: 'general inquiries',
      detail: '555-555-5678'
    },
    {
      name: 'catering',
      detail: '555-555-1234'
    },
    {
      name: 'email',
      detail: 'info@veggieshack.com'
    },
    {
      name: 'address',
      detail: '988 Garden Boulevard, Metrowest 55555'
    },
  ]
  return contacts;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showHome)
/* harmony export */ });
function showHome(staticDiv, currentModule) {
  const copy = document.createElement('p');
  copy.textContent = `
    The Veggie Shack has provided the diners of the metrowest area with
    nutritious and delicious plant-based meals since 1998. The menu listed here is our base menu,
    but you can call or stop in for our inspirational lunch and dinner
    specials! Click on the Contact tab above to give us a call. 
    Thank you for visiting our website, see you soon!
  `
  copy.classList.add('copy');
  currentModule.appendChild(copy);

  const hoursContainer = document.createElement('div');
  hoursContainer.classList.add('hours_container');
  const hoursHeader = document.createElement('h2');
  hoursHeader.classList.add('hours_header');
  hoursHeader.textContent = 'Hours';
  hoursContainer.appendChild(hoursHeader);
  const hoursList = document.createElement('ul');
  hoursList.classList.add('hours_list');
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach((day) => {
    if (day === 'Friday') {
      hoursList.appendChild(createHours(day, [11, 11]))
    } else {
      hoursList.appendChild(createHours(day, [11, 10]));
    }
  });
  hoursList.appendChild(createHours('Saturday', [11, 11]));
  hoursList.appendChild(createHours('Sunday', [9, 8]));
  hoursContainer.appendChild(hoursList);
  currentModule.appendChild(hoursContainer);

  staticDiv.appendChild(currentModule);
  return staticDiv;
};

function createHours(day, range) {
  const hours = document.createElement('li');
  hours.classList.add('hours_list_item')

  const dayElement = document.createElement('p');
  dayElement.classList.add('hours_list_day');
  dayElement.textContent = `${day}`;
  hours.appendChild(dayElement);

  const timeElement = document.createElement('p');
  timeElement.classList.add('hours_list_time');
  timeElement.textContent = `${range[0]}AM - ${range[1]}PM`;
  hours.appendChild(timeElement);

  return hours;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


function showMenu(staticDiv, currentModule) {

  const menu = (0,_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const menuContainer = document.createElement('div');
  const menuList = document.createElement('ul');

  menu.forEach((item) => {
    let menuItem;
    for (const _detail in item) {
      menuItem = createMenuItem(item, menuList);
    }
    menuList.appendChild(menuItem);
  });

  menuContainer.appendChild(menuList);
  currentModule.appendChild(menuContainer);
  staticDiv.appendChild(currentModule);
  return currentModule;
}

function createMenuItem(menuObject) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu_item');

  const title = document.createElement('h3');
  title.classList.add('menu_item_name');
  title.textContent = menuObject['name'];

  const description = document.createElement('p');
  description.classList.add('menu_item_description');
  description.textContent = menuObject['description'];

  const price = document.createElement('p');
  price.classList.add('menu_item_price');
  price.textContent = menuObject['price'];
  
  const image = new Image();
  image.src = menuObject.imageSrc;
  image.alt = 'image of ' + menuObject.name
  image.classList.add('menu_item_image');

  menuItem.appendChild(title);
  menuItem.appendChild(description);
  menuItem.appendChild(image);
  menuItem.appendChild(price);

  return menuItem;
}
 

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuItems)
/* harmony export */ });
/* harmony import */ var _images_baguette_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/baguette.jpg */ "./src/images/baguette.jpg");
/* harmony import */ var _images_falafel_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/falafel.jpg */ "./src/images/falafel.jpg");
/* harmony import */ var _images_nachos_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/nachos.jpg */ "./src/images/nachos.jpg");
/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizza.jpg */ "./src/images/pizza.jpg");
/* harmony import */ var _images_tofu_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/tofu.jpg */ "./src/images/tofu.jpg");






function menuItems() {
  const menuItems = [
    {
      name: 'Falafel Wrap',
      price: '12.95',
      description: `
      The most flavorful falafel west of the Middle East deep fried to perfection, wrapped 
      in flour tortilla with mixed greens red peppers, cukes, pickled red onion, and vegan tzatziki sauce.
      
    `,
      imageSrc: _images_falafel_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: '"Steak" Bomb',
      price: '13.95',
      description: `
      Our house-smoked seitan, sauteed peppers and onions,
      topped with creamy cashew 'chz' sauce served on a toasted baguette (made fresh daily).
      Served with house cut shoestring fries.
    `,
      imageSrc: _images_baguette_jpg__WEBPACK_IMPORTED_MODULE_0__,
    },
    {
      name: "Tofu Scramble",
      price: '11.95',
      description: `
    Herb-seasoned and pressed tofu, browned to perfection with Joe's favorite sauteed veggies. Served with your choice of toast and home fries.
    `,
      imageSrc: _images_tofu_jpg__WEBPACK_IMPORTED_MODULE_4__,
    },
    {
      name: "Loaded Vegan Nachos",
      price: '14.95',
      description: `
      House-fried tortilla chips, seasoned tvp, Follow Your Heart cheddar shreds, refried beans, 
      onion, peppers, candied jalapenos, Kat's guacamole, lime crema, salsa on side.
      `,
      imageSrc: _images_nachos_jpg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
      name: 'Mushroom Flatbread Pizza',
      price: '15.95',
      description: `
        Grilled Portland Pie Company dough. Local Balsamic roasted mushrooms, pepperoncinis, and
        Follow Your Heart mozzerella shreds, topped with lemon crema.
        
      `,
      imageSrc: _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__
    }
  ]
  return menuItems;
}

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");
/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/instagram.png */ "./src/images/instagram.png");
/* harmony import */ var _images_yelp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/yelp.svg */ "./src/images/yelp.svg");





function pageLoad(staticDiv, currentModule) {
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav_container');
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home'
  homeLink.setAttribute('id', 'home')
  homeLink.href = '#';
  nav.appendChild(homeLink);
  const menuLink = document.createElement('a');
  menuLink.textContent = 'Menu';
  menuLink.setAttribute('id', 'menu');
  menuLink.href = '#';
  nav.appendChild(menuLink);
  const contactLink = document.createElement('a');
  contactLink.textContent = 'Contact';
  contactLink.setAttribute('id', 'contact');
  contactLink.href = '#'
  nav.appendChild(contactLink);
  navContainer.appendChild(nav);
  staticDiv.appendChild(navContainer);

  const header = document.createElement('h1');
  header.textContent = "The Veggie Shack";
  header.classList.add('header');
  staticDiv.appendChild(header);

  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(staticDiv, currentModule)

  const footer = document.createElement('footer');

  const linkOne = document.createElement('a');
  linkOne.classList.add('footer_link');
  linkOne.href = 'https://github.com/joe-mccann-dev/js-restaurant-page';
  const gitHub = new Image(32, 32);
  gitHub.src = _images_github_png__WEBPACK_IMPORTED_MODULE_1__;
  linkOne.appendChild(gitHub);
  footer.appendChild(linkOne);

  const linkTwo = document.createElement('a');
  linkTwo.classList.add('footer_link');
  linkTwo.href = '#';
  const instagram = new Image(32, 32);
  instagram.src = _images_instagram_png__WEBPACK_IMPORTED_MODULE_2__;
  linkTwo.appendChild(instagram);
  footer.appendChild(linkTwo);

  const linkThree = document.createElement('a');
  linkThree.href = '#';
  linkThree.classList.add('footer_link');
  const yelp = new Image(32, 32);
  yelp.src = _images_yelp_svg__WEBPACK_IMPORTED_MODULE_3__;
  linkThree.appendChild(yelp);
  footer.append(linkThree);

  staticDiv.appendChild(footer);

  return staticDiv;
}


/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3132ef67562ce46a9a4a.png";

/***/ }),

/***/ "./src/images/baguette.jpg":
/*!*********************************!*\
  !*** ./src/images/baguette.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df8c575030fa023c96af.jpg";

/***/ }),

/***/ "./src/images/falafel.jpg":
/*!********************************!*\
  !*** ./src/images/falafel.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6887c8c2337c0f4ec3a.jpg";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

/***/ }),

/***/ "./src/images/instagram.png":
/*!**********************************!*\
  !*** ./src/images/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8603bdba98d9a07a75d7.png";

/***/ }),

/***/ "./src/images/nachos.jpg":
/*!*******************************!*\
  !*** ./src/images/nachos.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77ac49628b1d0543c0ea.jpg";

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e62079610744058943c.jpg";

/***/ }),

/***/ "./src/images/tofu.jpg":
/*!*****************************!*\
  !*** ./src/images/tofu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96009b82a59697424982.jpg";

/***/ }),

/***/ "./src/images/yelp.svg":
/*!*****************************!*\
  !*** ./src/images/yelp.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2679984023f9e678c8de.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_load */ "./src/page_load.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const staticDiv = document.querySelector('#static');
const currentModule = document.querySelector('#current_module');
currentModule.classList.add('container');
(0,_page_load__WEBPACK_IMPORTED_MODULE_1__["default"])(staticDiv, currentModule);

const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const contactLink = document.querySelector('#contact');

homeLink.addEventListener('click', ()=> {
  currentModule.replaceChildren();
  (0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])(staticDiv, currentModule);
  addAndRemoveActiveClass(homeLink, [menuLink, contactLink])
});


menuLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])(staticDiv, currentModule);
  addAndRemoveActiveClass(menuLink, [homeLink, contactLink]);
});


contactLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])(staticDiv, currentModule)
  addAndRemoveActiveClass(contactLink, [menuLink, homeLink]);
});

function addAndRemoveActiveClass(link, otherLinks) {
  link.classList.add('active');
  otherLinks.forEach((link) => { link.classList.remove('active') });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNMO0FBQ0E7QUFDTzs7QUFFckM7QUFDQTtBQUNBO0FBQ0Esc0RBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLEVBQUUsb0RBQVk7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZV9sb2FkLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1uZXV0cmFsLTEwMDogI2Y1ZjVmNTtcXG4gIC0tbmV1dHJhbC0xMDAtYmx1cjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMjApO1xcbiAgLS1uZXV0cmFsLTgwMDogIzQwNDA0MDtcXG4gIC0tbmV1dHJhbC05MDA6ICMxNzE3MTc7XFxuICAtLWdyZWVuLTMwMC1mYWRlZDogcmdiKDEzNCwgMjM5LCAxNzIsIDAuMik7XFxuICAtLWdyZWVuLTkwMDogcmdiKDIwLCA4MywgNDUpO1xcbiAgLS1ncmVlbi05MDAtZmFkZWQ6IHJnYigyMCwgODMsIDQ1LCAwLjgpO1xcbiAgLS15ZWxsb3ctMzAwOiAjZmRlMDQ3O1xcbiAgLS15ZWxsb3ctNTAwOiAjZWFiMzA4O1xcbiAgLS15ZWxsb3ctMzAwLWZhZGVkOiByZ2IoMjUzLCAyMjQsIDcxLCAwLjIpO1xcbiAgLS1vcmFuZ2UtOTAwOiAjN2MyZDEyO1xcbn1cXG5cXG4vKiBCRUdJTiBDU1MgUkVTRVQgKi9cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIG9sLCB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEVORCBDU1MgUkVTRVQgKi9cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC05MDApO1xcbn1cXG5cXG4jc3RhdGljIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0zMDAtZmFkZWQpO1xcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4IHZhcigtLWdyZWVuLTkwMCk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0zMDAtZmFkZWQpO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLTEwMC1ibHVyKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpOyBcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaG91cnNfaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmhvdXJzX2xpc3RfaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaG91cnNfbGlzdF9kYXkge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbn1cXG5cXG4uaG91cnNfbGlzdF90aW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbn1cXG5cXG4ubWVudV9pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5cXG4ubWVudV9pdGVtX25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubWVudV9pdGVtX3ByaWNlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLm1lbnVfaXRlbV9kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLm1lbnVfaXRlbV9pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBtYXJnaW46IDI0cHggMTJweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb250YWN0X2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1ncmVlbi05MDApO1xcbn1cXG5cXG4uY29udGFjdF9uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5uYXZfY29udGFpbmVyLCBmb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTMwMC1mYWRlZCk7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG5uYXYgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDIuNHB4IHZhcigtLWdyZWVuLTkwMCk7XFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtOTAwKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDIuNHB4IHZhcigtLW9yYW5nZS05MDApO1xcbiAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtOTAwKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDIuNHB4IHZhcigtLW9yYW5nZS05MDApO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tOTAwLWZhZGVkKTtcXG59XFxuXFxuLmhvdXJzX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0zMDAtZmFkZWQpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLDRCQUE0QjtFQUM1Qix1Q0FBdUM7RUFDdkMscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQiwwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCOztBQUVBLG9CQUFvQjs7QUFFcEI7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UseURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTRDO0VBQzVDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1uZXV0cmFsLTEwMDogI2Y1ZjVmNTtcXG4gIC0tbmV1dHJhbC0xMDAtYmx1cjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMjApO1xcbiAgLS1uZXV0cmFsLTgwMDogIzQwNDA0MDtcXG4gIC0tbmV1dHJhbC05MDA6ICMxNzE3MTc7XFxuICAtLWdyZWVuLTMwMC1mYWRlZDogcmdiKDEzNCwgMjM5LCAxNzIsIDAuMik7XFxuICAtLWdyZWVuLTkwMDogcmdiKDIwLCA4MywgNDUpO1xcbiAgLS1ncmVlbi05MDAtZmFkZWQ6IHJnYigyMCwgODMsIDQ1LCAwLjgpO1xcbiAgLS15ZWxsb3ctMzAwOiAjZmRlMDQ3O1xcbiAgLS15ZWxsb3ctNTAwOiAjZWFiMzA4O1xcbiAgLS15ZWxsb3ctMzAwLWZhZGVkOiByZ2IoMjUzLCAyMjQsIDcxLCAwLjIpO1xcbiAgLS1vcmFuZ2UtOTAwOiAjN2MyZDEyO1xcbn1cXG5cXG4vKiBCRUdJTiBDU1MgUkVTRVQgKi9cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIG9sLCB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEVORCBDU1MgUkVTRVQgKi9cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtOTAwKTtcXG59XFxuXFxuI3N0YXRpYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDNweCB2YXIoLS1ncmVlbi05MDApO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWdyZWVuLTkwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBwYWRkaW5nOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmJsdXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC0xMDAtYmx1cik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTsgXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmxpIHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmhvdXJzX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5ob3Vyc19saXN0X2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvdXJzX2xpc3RfZGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLmhvdXJzX2xpc3RfdGltZSB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLm1lbnVfaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuXFxuLm1lbnVfaXRlbV9uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLm1lbnVfaXRlbV9wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5tZW51X2l0ZW1fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5tZW51X2l0ZW1faW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgbWFyZ2luOiAyNHB4IDEycHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdF9oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLmNvbnRhY3RfbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubmF2X2NvbnRhaW5lciwgZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0zMDAtZmFkZWQpO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxubmF2IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1ncmVlbi05MDApO1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTkwMCk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1vcmFuZ2UtOTAwKTtcXG4gIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTkwMCk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1vcmFuZ2UtOTAwKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTkwMC1mYWRlZCk7XFxufVxcblxcbi5ob3Vyc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvbnRhY3RzTGlzdCBmcm9tICcuL2NvbnRhY3RzTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0NvbnRhY3RzKHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSkge1xuICBjb25zdCBjb250YWN0cyA9IGNvbnRhY3RzTGlzdCgpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG4gIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9oZWFkZXInKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcbiAgICBsZXQgbGlzdGluZztcbiAgICBmb3IgKGNvbnN0IF9kZXRhaWwgaW4gY29udGFjdCkge1xuICAgICAgbGlzdGluZyA9IGNyZWF0ZUxpc3RpbmcoY29udGFjdCwgY29udGFjdExpc3QpO1xuICAgIH1cbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0aW5nKTtcbiAgfSk7XG5cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG4gIGN1cnJlbnRNb2R1bGUuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50TW9kdWxlKTtcbiAgcmV0dXJuIHN0YXRpY0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdGluZyhjb250YWN0KSB7XG4gIGNvbnN0IGxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfbmFtZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gY29udGFjdFsnbmFtZSddO1xuICBsaXN0aW5nLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfZGV0YWlsJyk7XG4gIGRldGFpbC50ZXh0Q29udGVudCA9IGNvbnRhY3RbJ2RldGFpbCddO1xuICBsaXN0aW5nLmFwcGVuZENoaWxkKGRldGFpbCk7XG5cbiAgcmV0dXJuIGxpc3Rpbmc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0cygpIHtcbiAgY29uc3QgY29udGFjdHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2dlbmVyYWwgaW5xdWlyaWVzJyxcbiAgICAgIGRldGFpbDogJzU1NS01NTUtNTY3OCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjYXRlcmluZycsXG4gICAgICBkZXRhaWw6ICc1NTUtNTU1LTEyMzQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgZGV0YWlsOiAnaW5mb0B2ZWdnaWVzaGFjay5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICBkZXRhaWw6ICc5ODggR2FyZGVuIEJvdWxldmFyZCwgTWV0cm93ZXN0IDU1NTU1J1xuICAgIH0sXG4gIF1cbiAgcmV0dXJuIGNvbnRhY3RzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0hvbWUoc3RhdGljRGl2LCBjdXJyZW50TW9kdWxlKSB7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvcHkudGV4dENvbnRlbnQgPSBgXG4gICAgVGhlIFZlZ2dpZSBTaGFjayBoYXMgcHJvdmlkZWQgdGhlIGRpbmVycyBvZiB0aGUgbWV0cm93ZXN0IGFyZWEgd2l0aFxuICAgIG51dHJpdGlvdXMgYW5kIGRlbGljaW91cyBwbGFudC1iYXNlZCBtZWFscyBzaW5jZSAxOTk4LiBUaGUgbWVudSBsaXN0ZWQgaGVyZSBpcyBvdXIgYmFzZSBtZW51LFxuICAgIGJ1dCB5b3UgY2FuIGNhbGwgb3Igc3RvcCBpbiBmb3Igb3VyIGluc3BpcmF0aW9uYWwgbHVuY2ggYW5kIGRpbm5lclxuICAgIHNwZWNpYWxzISBDbGljayBvbiB0aGUgQ29udGFjdCB0YWIgYWJvdmUgdG8gZ2l2ZSB1cyBhIGNhbGwuIFxuICAgIFRoYW5rIHlvdSBmb3IgdmlzaXRpbmcgb3VyIHdlYnNpdGUsIHNlZSB5b3Ugc29vbiFcbiAgYFxuICBjb3B5LmNsYXNzTGlzdC5hZGQoJ2NvcHknKTtcbiAgY3VycmVudE1vZHVsZS5hcHBlbmRDaGlsZChjb3B5KTtcblxuICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Vyc19jb250YWluZXInKTtcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBob3Vyc0hlYWRlci5jbGFzc0xpc3QuYWRkKCdob3Vyc19oZWFkZXInKTtcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XG4gIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGhvdXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdob3Vyc19saXN0Jyk7XG4gIFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheSddLmZvckVhY2goKGRheSkgPT4ge1xuICAgIGlmIChkYXkgPT09ICdGcmlkYXknKSB7XG4gICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoZGF5LCBbMTEsIDExXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycyhkYXksIFsxMSwgMTBdKSk7XG4gICAgfVxuICB9KTtcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCdTYXR1cmRheScsIFsxMSwgMTFdKSk7XG4gIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygnU3VuZGF5JywgWzksIDhdKSk7XG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG4gIGN1cnJlbnRNb2R1bGUuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuXG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50TW9kdWxlKTtcbiAgcmV0dXJuIHN0YXRpY0Rpdjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKGRheSwgcmFuZ2UpIHtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3Vyc19saXN0X2l0ZW0nKVxuXG4gIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG91cnNfbGlzdF9kYXknKTtcbiAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RheX1gO1xuICBob3Vycy5hcHBlbmRDaGlsZChkYXlFbGVtZW50KTtcblxuICBjb25zdCB0aW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGltZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG91cnNfbGlzdF90aW1lJyk7XG4gIHRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gYCR7cmFuZ2VbMF19QU0gLSAke3JhbmdlWzFdfVBNYDtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuXG4gIHJldHVybiBob3Vycztcbn1cbiIsImltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9tZW51SXRlbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dNZW51KHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSkge1xuXG4gIGNvbnN0IG1lbnUgPSBtZW51SXRlbXMoKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgbWVudUl0ZW07XG4gICAgZm9yIChjb25zdCBfZGV0YWlsIGluIGl0ZW0pIHtcbiAgICAgIG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0oaXRlbSwgbWVudUxpc3QpO1xuICAgIH1cbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuICBjdXJyZW50TW9kdWxlLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICBzdGF0aWNEaXYuYXBwZW5kQ2hpbGQoY3VycmVudE1vZHVsZSk7XG4gIHJldHVybiBjdXJyZW50TW9kdWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShtZW51T2JqZWN0KSB7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW1fbmFtZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG1lbnVPYmplY3RbJ25hbWUnXTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudU9iamVjdFsnZGVzY3JpcHRpb24nXTtcblxuICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX3ByaWNlJyk7XG4gIHByaWNlLnRleHRDb250ZW50ID0gbWVudU9iamVjdFsncHJpY2UnXTtcbiAgXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IG1lbnVPYmplY3QuaW1hZ2VTcmM7XG4gIGltYWdlLmFsdCA9ICdpbWFnZSBvZiAnICsgbWVudU9iamVjdC5uYW1lXG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9pbWFnZScpO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKHByaWNlKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG4gIiwiaW1wb3J0IGJhZ3VldHRlUGljIGZyb20gJy4vaW1hZ2VzL2JhZ3VldHRlLmpwZyc7XG5pbXBvcnQgZmFsYWZlbFBpYyBmcm9tICcuL2ltYWdlcy9mYWxhZmVsLmpwZyc7XG5pbXBvcnQgbmFjaG9zUGljIGZyb20gJy4vaW1hZ2VzL25hY2hvcy5qcGcnO1xuaW1wb3J0IHBpenphUGljIGZyb20gJy4vaW1hZ2VzL3BpenphLmpwZyc7XG5pbXBvcnQgdG9mdVBpYyBmcm9tICcuL2ltYWdlcy90b2Z1LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtcygpIHtcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdGYWxhZmVsIFdyYXAnLFxuICAgICAgcHJpY2U6ICcxMi45NScsXG4gICAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgVGhlIG1vc3QgZmxhdm9yZnVsIGZhbGFmZWwgd2VzdCBvZiB0aGUgTWlkZGxlIEVhc3QgZGVlcCBmcmllZCB0byBwZXJmZWN0aW9uLCB3cmFwcGVkIFxuICAgICAgaW4gZmxvdXIgdG9ydGlsbGEgd2l0aCBtaXhlZCBncmVlbnMgcmVkIHBlcHBlcnMsIGN1a2VzLCBwaWNrbGVkIHJlZCBvbmlvbiwgYW5kIHZlZ2FuIHR6YXR6aWtpIHNhdWNlLlxuICAgICAgXG4gICAgYCxcbiAgICAgIGltYWdlU3JjOiBmYWxhZmVsUGljLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1wiU3RlYWtcIiBCb21iJyxcbiAgICAgIHByaWNlOiAnMTMuOTUnLFxuICAgICAgZGVzY3JpcHRpb246IGBcbiAgICAgIE91ciBob3VzZS1zbW9rZWQgc2VpdGFuLCBzYXV0ZWVkIHBlcHBlcnMgYW5kIG9uaW9ucyxcbiAgICAgIHRvcHBlZCB3aXRoIGNyZWFteSBjYXNoZXcgJ2Noeicgc2F1Y2Ugc2VydmVkIG9uIGEgdG9hc3RlZCBiYWd1ZXR0ZSAobWFkZSBmcmVzaCBkYWlseSkuXG4gICAgICBTZXJ2ZWQgd2l0aCBob3VzZSBjdXQgc2hvZXN0cmluZyBmcmllcy5cbiAgICBgLFxuICAgICAgaW1hZ2VTcmM6IGJhZ3VldHRlUGljLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUb2Z1IFNjcmFtYmxlXCIsXG4gICAgICBwcmljZTogJzExLjk1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgXG4gICAgSGVyYi1zZWFzb25lZCBhbmQgcHJlc3NlZCB0b2Z1LCBicm93bmVkIHRvIHBlcmZlY3Rpb24gd2l0aCBKb2UncyBmYXZvcml0ZSBzYXV0ZWVkIHZlZ2dpZXMuIFNlcnZlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIHRvYXN0IGFuZCBob21lIGZyaWVzLlxuICAgIGAsXG4gICAgICBpbWFnZVNyYzogdG9mdVBpYyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTG9hZGVkIFZlZ2FuIE5hY2hvc1wiLFxuICAgICAgcHJpY2U6ICcxNC45NScsXG4gICAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgSG91c2UtZnJpZWQgdG9ydGlsbGEgY2hpcHMsIHNlYXNvbmVkIHR2cCwgRm9sbG93IFlvdXIgSGVhcnQgY2hlZGRhciBzaHJlZHMsIHJlZnJpZWQgYmVhbnMsIFxuICAgICAgb25pb24sIHBlcHBlcnMsIGNhbmRpZWQgamFsYXBlbm9zLCBLYXQncyBndWFjYW1vbGUsIGxpbWUgY3JlbWEsIHNhbHNhIG9uIHNpZGUuXG4gICAgICBgLFxuICAgICAgaW1hZ2VTcmM6IG5hY2hvc1BpYyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNdXNocm9vbSBGbGF0YnJlYWQgUGl6emEnLFxuICAgICAgcHJpY2U6ICcxNS45NScsXG4gICAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgICBHcmlsbGVkIFBvcnRsYW5kIFBpZSBDb21wYW55IGRvdWdoLiBMb2NhbCBCYWxzYW1pYyByb2FzdGVkIG11c2hyb29tcywgcGVwcGVyb25jaW5pcywgYW5kXG4gICAgICAgIEZvbGxvdyBZb3VyIEhlYXJ0IG1venplcmVsbGEgc2hyZWRzLCB0b3BwZWQgd2l0aCBsZW1vbiBjcmVtYS5cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgaW1hZ2VTcmM6IHBpenphUGljXG4gICAgfVxuICBdXG4gIHJldHVybiBtZW51SXRlbXM7XG59IiwiaW1wb3J0IHNob3dIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgZ2l0SHViSWNvbiBmcm9tICcuL2ltYWdlcy9naXRodWIucG5nJztcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vaW1hZ2VzL2luc3RhZ3JhbS5wbmcnO1xuaW1wb3J0IHllbHBJY29uIGZyb20gJy4vaW1hZ2VzL3llbHAuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoc3RhdGljRGl2LCBjdXJyZW50TW9kdWxlKSB7XG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2X2NvbnRhaW5lcicpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnXG4gIGhvbWVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpXG4gIGhvbWVMaW5rLmhyZWYgPSAnIyc7XG4gIG5hdi5hcHBlbmRDaGlsZChob21lTGluayk7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudUxpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG4gIG1lbnVMaW5rLmhyZWYgPSAnIyc7XG4gIG5hdi5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdExpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gIGNvbnRhY3RMaW5rLmhyZWYgPSAnIydcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdik7XG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVGhlIFZlZ2dpZSBTaGFja1wiO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHNob3dIb21lKHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSlcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICBjb25zdCBsaW5rT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rT25lLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9saW5rJyk7XG4gIGxpbmtPbmUuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vam9lLW1jY2Fubi1kZXYvanMtcmVzdGF1cmFudC1wYWdlJztcbiAgY29uc3QgZ2l0SHViID0gbmV3IEltYWdlKDMyLCAzMik7XG4gIGdpdEh1Yi5zcmMgPSBnaXRIdWJJY29uO1xuICBsaW5rT25lLmFwcGVuZENoaWxkKGdpdEh1Yik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rT25lKTtcblxuICBjb25zdCBsaW5rVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rVHdvLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlcl9saW5rJyk7XG4gIGxpbmtUd28uaHJlZiA9ICcjJztcbiAgY29uc3QgaW5zdGFncmFtID0gbmV3IEltYWdlKDMyLCAzMik7XG4gIGluc3RhZ3JhbS5zcmMgPSBpbnN0YWdyYW1JY29uO1xuICBsaW5rVHdvLmFwcGVuZENoaWxkKGluc3RhZ3JhbSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rVHdvKTtcblxuICBjb25zdCBsaW5rVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmtUaHJlZS5ocmVmID0gJyMnO1xuICBsaW5rVGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX2xpbmsnKTtcbiAgY29uc3QgeWVscCA9IG5ldyBJbWFnZSgzMiwgMzIpO1xuICB5ZWxwLnNyYyA9IHllbHBJY29uO1xuICBsaW5rVGhyZWUuYXBwZW5kQ2hpbGQoeWVscCk7XG4gIGZvb3Rlci5hcHBlbmQobGlua1RocmVlKTtcblxuICBzdGF0aWNEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICByZXR1cm4gc3RhdGljRGl2O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZV9sb2FkJztcbmltcG9ydCBzaG93SG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgc2hvd0NvbnRhY3RzIGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IHN0YXRpY0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGF0aWMnKTtcbmNvbnN0IGN1cnJlbnRNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudF9tb2R1bGUnKTtcbmN1cnJlbnRNb2R1bGUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5wYWdlTG9hZChzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpO1xuXG5jb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5jb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0Jyk7XG5cbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gIGN1cnJlbnRNb2R1bGUucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHNob3dIb21lKHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSk7XG4gIGFkZEFuZFJlbW92ZUFjdGl2ZUNsYXNzKGhvbWVMaW5rLCBbbWVudUxpbmssIGNvbnRhY3RMaW5rXSlcbn0pO1xuXG5cbm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjdXJyZW50TW9kdWxlLnJlcGxhY2VDaGlsZHJlbigpO1xuICBzaG93TWVudShzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpO1xuICBhZGRBbmRSZW1vdmVBY3RpdmVDbGFzcyhtZW51TGluaywgW2hvbWVMaW5rLCBjb250YWN0TGlua10pO1xufSk7XG5cblxuY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRNb2R1bGUucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHNob3dDb250YWN0cyhzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpXG4gIGFkZEFuZFJlbW92ZUFjdGl2ZUNsYXNzKGNvbnRhY3RMaW5rLCBbbWVudUxpbmssIGhvbWVMaW5rXSk7XG59KTtcblxuZnVuY3Rpb24gYWRkQW5kUmVtb3ZlQWN0aXZlQ2xhc3MobGluaywgb3RoZXJMaW5rcykge1xuICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBvdGhlckxpbmtzLmZvckVhY2goKGxpbmspID0+IHsgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=