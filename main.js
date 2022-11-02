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
function showContacts(staticDiv, currentModule) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0Esc0RBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLEVBQUUsb0RBQVk7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlDQUFpQyxpQ0FBaUM7QUFDbEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VfbG9hZC5qcyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qcy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6ICNmNWY1ZjU7XFxuICAtLW5ldXRyYWwtMTAwLWJsdXI6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjIwKTtcXG4gIC0tbmV1dHJhbC04MDA6ICM0MDQwNDA7XFxuICAtLW5ldXRyYWwtOTAwOiAjMTcxNzE3O1xcbiAgLS1ncmVlbi0zMDAtZmFkZWQ6IHJnYigxMzQsIDIzOSwgMTcyLCAwLjIpO1xcbiAgLS1ncmVlbi05MDA6IHJnYigyMCwgODMsIDQ1KTtcXG4gIC0tZ3JlZW4tOTAwLWZhZGVkOiByZ2IoMjAsIDgzLCA0NSwgMC44KTtcXG4gIC0teWVsbG93LTMwMDogI2ZkZTA0NztcXG4gIC0teWVsbG93LTUwMDogI2VhYjMwODtcXG4gIC0teWVsbG93LTMwMC1mYWRlZDogcmdiKDI1MywgMjI0LCA3MSwgMC4yKTtcXG4gIC0tb3JhbmdlLTkwMDogIzdjMmQxMjtcXG59XFxuXFxuLyogQkVHSU4gQ1NTIFJFU0VUICovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBvbCwgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBFTkQgQ1NTIFJFU0VUICovXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtOTAwKTtcXG59XFxuXFxuI3N0YXRpYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDNweCB2YXIoLS1ncmVlbi05MDApO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWdyZWVuLTkwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBwYWRkaW5nOiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmJsdXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC0xMDAtYmx1cik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTsgXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmxpIHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmhvdXJzX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5ob3Vyc19saXN0X2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvdXJzX2xpc3RfZGF5IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLmhvdXJzX2xpc3RfdGltZSB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLm1lbnVfaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuXFxuLm1lbnVfaXRlbV9uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLm1lbnVfaXRlbV9wcmljZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5tZW51X2l0ZW1fZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5tZW51X2l0ZW1faW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgbWFyZ2luOiAyNHB4IDEycHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdF9oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxuLmNvbnRhY3RfbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4ubmF2X2NvbnRhaW5lciwgZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy0zMDAtZmFkZWQpO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxubmF2IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1ncmVlbi05MDApO1xcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTkwMCk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1vcmFuZ2UtOTAwKTtcXG4gIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTkwMCk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAyLjRweCB2YXIoLS1vcmFuZ2UtOTAwKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTkwMC1mYWRlZCk7XFxufVxcblxcbi5ob3Vyc19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLHFCQUFxQjtBQUN2Qjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLHlEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbmV1dHJhbC0xMDA6ICNmNWY1ZjU7XFxuICAtLW5ldXRyYWwtMTAwLWJsdXI6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjIwKTtcXG4gIC0tbmV1dHJhbC04MDA6ICM0MDQwNDA7XFxuICAtLW5ldXRyYWwtOTAwOiAjMTcxNzE3O1xcbiAgLS1ncmVlbi0zMDAtZmFkZWQ6IHJnYigxMzQsIDIzOSwgMTcyLCAwLjIpO1xcbiAgLS1ncmVlbi05MDA6IHJnYigyMCwgODMsIDQ1KTtcXG4gIC0tZ3JlZW4tOTAwLWZhZGVkOiByZ2IoMjAsIDgzLCA0NSwgMC44KTtcXG4gIC0teWVsbG93LTMwMDogI2ZkZTA0NztcXG4gIC0teWVsbG93LTUwMDogI2VhYjMwODtcXG4gIC0teWVsbG93LTMwMC1mYWRlZDogcmdiKDI1MywgMjI0LCA3MSwgMC4yKTtcXG4gIC0tb3JhbmdlLTkwMDogIzdjMmQxMjtcXG59XFxuXFxuLyogQkVHSU4gQ1NTIFJFU0VUICovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBvbCwgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBFTkQgQ1NTIFJFU0VUICovXFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL3NyYy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLTkwMCk7XFxufVxcblxcbiNzdGF0aWMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTMwMC1mYWRlZCk7XFxuICBib3JkZXItdG9wOiBzb2xpZCAzcHggdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB2YXIoLS1ncmVlbi05MDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTMwMC1mYWRlZCk7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgcGFkZGluZzogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5ibHVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtMTAwLWJsdXIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7IFxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5ob3Vyc19oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uaG91cnNfbGlzdF9pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5ob3Vyc19saXN0X2RheSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxufVxcblxcbi5ob3Vyc19saXN0X3RpbWUge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxufVxcblxcbi5tZW51X2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcblxcbi5tZW51X2l0ZW1fbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuLTkwMCk7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi5tZW51X2l0ZW1fcHJpY2Uge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ubWVudV9pdGVtX2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ubWVudV9pdGVtX2ltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIG1hcmdpbjogMjRweCAxMnB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmNvbnRhY3RfaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4tOTAwKTtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWdyZWVuLTkwMCk7XFxufVxcblxcbi5jb250YWN0X25hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLm5hdl9jb250YWluZXIsIGZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctMzAwLWZhZGVkKTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi05MDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMi40cHggdmFyKC0tZ3JlZW4tOTAwKTtcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS05MDApO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMi40cHggdmFyKC0tb3JhbmdlLTkwMCk7XFxuICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS05MDApO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMi40cHggdmFyKC0tb3JhbmdlLTkwMCk7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi05MDAtZmFkZWQpO1xcbn1cXG5cXG4uaG91cnNfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LTMwMC1mYWRlZCk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dDb250YWN0cyhzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpIHtcbiAgY29uc3QgY29udGFjdHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ2dlbmVyYWwgaW5xdWlyaWVzJyxcbiAgICAgIGRldGFpbDogJzU1NS01NTUtNTY3OCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjYXRlcmluZycsXG4gICAgICBkZXRhaWw6ICc1NTUtNTU1LTEyMzQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgZGV0YWlsOiAnaW5mb0B2ZWdnaWVzaGFjay5jb20nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYWRkcmVzcycsXG4gICAgICBkZXRhaWw6ICc5ODggR2FyZGVuIEJvdWxldmFyZCwgTWV0cm93ZXN0IDU1NTU1J1xuICAgIH0sXG5cbiAgXVxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG4gIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9oZWFkZXInKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnRhY3RzLmZvckVhY2goKGNvbnRhY3QpID0+IHtcbiAgICBsZXQgbGlzdGluZztcbiAgICBmb3IgKGNvbnN0IF9kZXRhaWwgaW4gY29udGFjdCkge1xuICAgICAgbGlzdGluZyA9IGNyZWF0ZUxpc3RpbmcoY29udGFjdCwgY29udGFjdExpc3QpO1xuICAgIH1cbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0aW5nKTtcbiAgfSk7XG5cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG4gIGN1cnJlbnRNb2R1bGUuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50TW9kdWxlKTtcbiAgcmV0dXJuIHN0YXRpY0Rpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdGluZyhjb250YWN0KSB7XG4gIGNvbnN0IGxpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfbmFtZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gY29udGFjdFsnbmFtZSddO1xuICBsaXN0aW5nLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGV0YWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfZGV0YWlsJyk7XG4gIGRldGFpbC50ZXh0Q29udGVudCA9IGNvbnRhY3RbJ2RldGFpbCddO1xuICBsaXN0aW5nLmFwcGVuZENoaWxkKGRldGFpbCk7XG5cbiAgcmV0dXJuIGxpc3Rpbmc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93SG9tZShzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpIHtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29weS50ZXh0Q29udGVudCA9IGBcbiAgICBUaGUgVmVnZ2llIFNoYWNrIGhhcyBwcm92aWRlZCB0aGUgZGluZXJzIG9mIHRoZSBtZXRyb3dlc3QgYXJlYSB3aXRoXG4gICAgbnV0cml0aW91cyBhbmQgZGVsaWNpb3VzIHBsYW50LWJhc2VkIG1lYWxzIHNpbmNlIDE5OTguIFRoZSBtZW51IGxpc3RlZCBoZXJlIGlzIG91ciBiYXNlIG1lbnUsXG4gICAgYnV0IHlvdSBjYW4gY2FsbCBvciBzdG9wIGluIGZvciBvdXIgaW5zcGlyYXRpb25hbCBsdW5jaCBhbmQgZGlubmVyXG4gICAgc3BlY2lhbHMhIENsaWNrIG9uIHRoZSBDb250YWN0IHRhYiBhYm92ZSB0byBnaXZlIHVzIGEgY2FsbC4gXG4gICAgVGhhbmsgeW91IGZvciB2aXNpdGluZyBvdXIgd2Vic2l0ZSwgc2VlIHlvdSBzb29uIVxuICBgXG4gIGNvcHkuY2xhc3NMaXN0LmFkZCgnY29weScpO1xuICBjdXJyZW50TW9kdWxlLmFwcGVuZENoaWxkKGNvcHkpO1xuXG4gIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzX2NvbnRhaW5lcicpO1xuICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhvdXJzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJzX2hlYWRlcicpO1xuICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG4gIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgaG91cnNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzX2xpc3QnKTtcbiAgWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10uZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgaWYgKGRheSA9PT0gJ0ZyaWRheScpIHtcbiAgICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycyhkYXksIFsxMSwgMTFdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKGRheSwgWzExLCAxMF0pKTtcbiAgICB9XG4gIH0pO1xuICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoJ1NhdHVyZGF5JywgWzExLCAxMV0pKTtcbiAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCdTdW5kYXknLCBbOSwgOF0pKTtcbiAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcbiAgY3VycmVudE1vZHVsZS5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG5cbiAgc3RhdGljRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRNb2R1bGUpO1xuICByZXR1cm4gc3RhdGljRGl2O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSG91cnMoZGF5LCByYW5nZSkge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzX2xpc3RfaXRlbScpXG5cbiAgY29uc3QgZGF5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Vyc19saXN0X2RheScpO1xuICBkYXlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF5fWA7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGRheUVsZW1lbnQpO1xuXG4gIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3Vyc19saXN0X3RpbWUnKTtcbiAgdGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyYW5nZVswXX1BTSAtICR7cmFuZ2VbMV19UE1gO1xuICBob3Vycy5hcHBlbmRDaGlsZCh0aW1lRWxlbWVudCk7XG5cbiAgcmV0dXJuIGhvdXJzO1xufVxuIiwiaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL21lbnVJdGVtcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd01lbnUoc3RhdGljRGl2LCBjdXJyZW50TW9kdWxlKSB7XG5cbiAgY29uc3QgbWVudSA9IG1lbnVJdGVtcygpO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBtZW51SXRlbTtcbiAgICBmb3IgKGNvbnN0IF9kZXRhaWwgaW4gaXRlbSkge1xuICAgICAgbWVudUl0ZW0gPSBjcmVhdGVNZW51SXRlbShpdGVtLCBtZW51TGlzdCk7XG4gICAgfVxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG4gIGN1cnJlbnRNb2R1bGUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50TW9kdWxlKTtcbiAgcmV0dXJuIGN1cnJlbnRNb2R1bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG1lbnVPYmplY3QpIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW0nKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVfaXRlbV9uYW1lJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbWVudU9iamVjdFsnbmFtZSddO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW1fZGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51T2JqZWN0WydkZXNjcmlwdGlvbiddO1xuXG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51X2l0ZW1fcHJpY2UnKTtcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBtZW51T2JqZWN0WydwcmljZSddO1xuICBcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gbWVudU9iamVjdC5pbWFnZVNyYztcbiAgaW1hZ2UuYWx0ID0gJ2ltYWdlIG9mICcgKyBtZW51T2JqZWN0Lm5hbWVcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudV9pdGVtX2ltYWdlJyk7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cbiAiLCJpbXBvcnQgYmFndWV0dGVQaWMgZnJvbSAnLi9pbWFnZXMvYmFndWV0dGUuanBnJztcbmltcG9ydCBmYWxhZmVsUGljIGZyb20gJy4vaW1hZ2VzL2ZhbGFmZWwuanBnJztcbmltcG9ydCBuYWNob3NQaWMgZnJvbSAnLi9pbWFnZXMvbmFjaG9zLmpwZyc7XG5pbXBvcnQgcGl6emFQaWMgZnJvbSAnLi9pbWFnZXMvcGl6emEuanBnJztcbmltcG9ydCB0b2Z1UGljIGZyb20gJy4vaW1hZ2VzL3RvZnUuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW1zKCkge1xuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0ZhbGFmZWwgV3JhcCcsXG4gICAgICBwcmljZTogJzEyLjk1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgXG4gICAgICBUaGUgbW9zdCBmbGF2b3JmdWwgZmFsYWZlbCB3ZXN0IG9mIHRoZSBNaWRkbGUgRWFzdCBkZWVwIGZyaWVkIHRvIHBlcmZlY3Rpb24sIHdyYXBwZWQgXG4gICAgICBpbiBmbG91ciB0b3J0aWxsYSB3aXRoIG1peGVkIGdyZWVucyByZWQgcGVwcGVycywgY3VrZXMsIHBpY2tsZWQgcmVkIG9uaW9uLCBhbmQgdmVnYW4gdHphdHppa2kgc2F1Y2UuXG4gICAgICBcbiAgICBgLFxuICAgICAgaW1hZ2VTcmM6IGZhbGFmZWxQaWMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnXCJTdGVha1wiIEJvbWInLFxuICAgICAgcHJpY2U6ICcxMy45NScsXG4gICAgICBkZXNjcmlwdGlvbjogYFxuICAgICAgT3VyIGhvdXNlLXNtb2tlZCBzZWl0YW4sIHNhdXRlZWQgcGVwcGVycyBhbmQgb25pb25zLFxuICAgICAgdG9wcGVkIHdpdGggY3JlYW15IGNhc2hldyAnY2h6JyBzYXVjZSBzZXJ2ZWQgb24gYSB0b2FzdGVkIGJhZ3VldHRlIChtYWRlIGZyZXNoIGRhaWx5KS5cbiAgICAgIFNlcnZlZCB3aXRoIGhvdXNlIGN1dCBzaG9lc3RyaW5nIGZyaWVzLlxuICAgIGAsXG4gICAgICBpbWFnZVNyYzogYmFndWV0dGVQaWMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlRvZnUgU2NyYW1ibGVcIixcbiAgICAgIHByaWNlOiAnMTEuOTUnLFxuICAgICAgZGVzY3JpcHRpb246IGBcbiAgICBIZXJiLXNlYXNvbmVkIGFuZCBwcmVzc2VkIHRvZnUsIGJyb3duZWQgdG8gcGVyZmVjdGlvbiB3aXRoIEpvZSdzIGZhdm9yaXRlIHNhdXRlZWQgdmVnZ2llcy4gU2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2YgdG9hc3QgYW5kIGhvbWUgZnJpZXMuXG4gICAgYCxcbiAgICAgIGltYWdlU3JjOiB0b2Z1UGljLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMb2FkZWQgVmVnYW4gTmFjaG9zXCIsXG4gICAgICBwcmljZTogJzE0Ljk1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgXG4gICAgICBIb3VzZS1mcmllZCB0b3J0aWxsYSBjaGlwcywgc2Vhc29uZWQgdHZwLCBGb2xsb3cgWW91ciBIZWFydCBjaGVkZGFyIHNocmVkcywgcmVmcmllZCBiZWFucywgXG4gICAgICBvbmlvbiwgcGVwcGVycywgY2FuZGllZCBqYWxhcGVub3MsIEthdCdzIGd1YWNhbW9sZSwgbGltZSBjcmVtYSwgc2Fsc2Egb24gc2lkZS5cbiAgICAgIGAsXG4gICAgICBpbWFnZVNyYzogbmFjaG9zUGljLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ011c2hyb29tIEZsYXRicmVhZCBQaXp6YScsXG4gICAgICBwcmljZTogJzE1Ljk1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBgXG4gICAgICAgIEdyaWxsZWQgUG9ydGxhbmQgUGllIENvbXBhbnkgZG91Z2guIExvY2FsIEJhbHNhbWljIHJvYXN0ZWQgbXVzaHJvb21zLCBwZXBwZXJvbmNpbmlzLCBhbmRcbiAgICAgICAgRm9sbG93IFlvdXIgSGVhcnQgbW96emVyZWxsYSBzaHJlZHMsIHRvcHBlZCB3aXRoIGxlbW9uIGNyZW1hLlxuICAgICAgICBcbiAgICAgIGAsXG4gICAgICBpbWFnZVNyYzogcGl6emFQaWNcbiAgICB9XG4gIF1cbiAgcmV0dXJuIG1lbnVJdGVtcztcbn0iLCJpbXBvcnQgc2hvd0hvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBnaXRIdWJJY29uIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi5wbmcnO1xuaW1wb3J0IGluc3RhZ3JhbUljb24gZnJvbSAnLi9pbWFnZXMvaW5zdGFncmFtLnBuZyc7XG5pbXBvcnQgeWVscEljb24gZnJvbSAnLi9pbWFnZXMveWVscC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZChzdGF0aWNEaXYsIGN1cnJlbnRNb2R1bGUpIHtcbiAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZfY29udGFpbmVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgaG9tZUxpbmsudGV4dENvbnRlbnQgPSAnSG9tZSdcbiAgaG9tZUxpbmsuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJylcbiAgaG9tZUxpbmsuaHJlZiA9ICcjJztcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG1lbnVMaW5rLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgbWVudUxpbmsuaHJlZiA9ICcjJztcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgY29udGFjdExpbmsuaHJlZiA9ICcjJ1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgc3RhdGljRGl2LmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUaGUgVmVnZ2llIFNoYWNrXCI7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgc3RhdGljRGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgc2hvd0hvbWUoc3RhdGljRGl2LCBjdXJyZW50TW9kdWxlKVxuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGNvbnN0IGxpbmtPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmtPbmUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyX2xpbmsnKTtcbiAgbGlua09uZS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb2UtbWNjYW5uLWRldi9qcy1yZXN0YXVyYW50LXBhZ2UnO1xuICBjb25zdCBnaXRIdWIgPSBuZXcgSW1hZ2UoMzIsIDMyKTtcbiAgZ2l0SHViLnNyYyA9IGdpdEh1Ykljb247XG4gIGxpbmtPbmUuYXBwZW5kQ2hpbGQoZ2l0SHViKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmtPbmUpO1xuXG4gIGNvbnN0IGxpbmtUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmtUd28uY2xhc3NMaXN0LmFkZCgnZm9vdGVyX2xpbmsnKTtcbiAgbGlua1R3by5ocmVmID0gJyMnO1xuICBjb25zdCBpbnN0YWdyYW0gPSBuZXcgSW1hZ2UoMzIsIDMyKTtcbiAgaW5zdGFncmFtLnNyYyA9IGluc3RhZ3JhbUljb247XG4gIGxpbmtUd28uYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmtUd28pO1xuXG4gIGNvbnN0IGxpbmtUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGlua1RocmVlLmhyZWYgPSAnIyc7XG4gIGxpbmtUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb290ZXJfbGluaycpO1xuICBjb25zdCB5ZWxwID0gbmV3IEltYWdlKDMyLCAzMik7XG4gIHllbHAuc3JjID0geWVscEljb247XG4gIGxpbmtUaHJlZS5hcHBlbmRDaGlsZCh5ZWxwKTtcbiAgZm9vdGVyLmFwcGVuZChsaW5rVGhyZWUpO1xuXG4gIHN0YXRpY0Rpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIHJldHVybiBzdGF0aWNEaXY7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9wYWdlX2xvYWQnO1xuaW1wb3J0IHNob3dIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBzaG93Q29udGFjdHMgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3Qgc3RhdGljRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXRpYycpO1xuY29uc3QgY3VycmVudE1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50X21vZHVsZScpO1xuY3VycmVudE1vZHVsZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbnBhZ2VMb2FkKHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcblxuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgY3VycmVudE1vZHVsZS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgc2hvd0hvbWUoc3RhdGljRGl2LCBjdXJyZW50TW9kdWxlKTtcbiAgYWRkQW5kUmVtb3ZlQWN0aXZlQ2xhc3MoaG9tZUxpbmssIFttZW51TGluaywgY29udGFjdExpbmtdKVxufSk7XG5cblxubWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRNb2R1bGUucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHNob3dNZW51KHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSk7XG4gIGFkZEFuZFJlbW92ZUFjdGl2ZUNsYXNzKG1lbnVMaW5rLCBbaG9tZUxpbmssIGNvbnRhY3RMaW5rXSk7XG59KTtcblxuXG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudE1vZHVsZS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgc2hvd0NvbnRhY3RzKHN0YXRpY0RpdiwgY3VycmVudE1vZHVsZSlcbiAgYWRkQW5kUmVtb3ZlQWN0aXZlQ2xhc3MoY29udGFjdExpbmssIFttZW51TGluaywgaG9tZUxpbmtdKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRBbmRSZW1vdmVBY3RpdmVDbGFzcyhsaW5rLCBvdGhlckxpbmtzKSB7XG4gIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG90aGVyTGlua3MuZm9yRWFjaCgobGluaykgPT4geyBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==