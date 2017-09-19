require("source-map-support").install();
exports.ids = [0];
exports.modules = Array(53).concat([
/* 53 */
/*!**********************************!*\
  !*** ./src/routes/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(/*! ./Home */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(/*! ../../components/Layout */ 60);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

let action = (() => {
  var _ref = _asyncToGenerator(function* ({ fetch }) {
    return {
      chunks: ['home'],
      title: 'Haze Lea',
      component: _ref2
    };
  });

  return function action(_x) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {}));

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/*!*************************************!*\
  !*** ./src/components/Link/Link.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(/*! ../../history */ 59);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 59 */
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(/*! history/createBrowserHistory */ 49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 60 */
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(/*! normalize.css */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(/*! ./Layout.css */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(/*! ../Header */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feedback__ = __webpack_require__(/*! ../Feedback */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer__ = __webpack_require__(/*! ../Footer */ 75);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.






var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_6__Feedback__["a" /* default */], {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_7__Footer__["a" /* default */], {});

function Layout(props) {
  return _jsx('div', {}, void 0, _ref, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a.contentContainer
  }, void 0, props.children), _ref2, _ref3);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),
/* 61 */
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../css-loader??ref--1-rules-1!../postcss-loader/lib??ref--1-rules-3!./normalize.css */ 62);
    var insertCss = __webpack_require__(/*! ../isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--1-rules-1!../postcss-loader/lib/index.js??ref--1-rules-3!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 62 */
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"sourceMap":false,"minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./node_modules/normalize.css/normalize.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),
/* 63 */
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Layout.css */ 64);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 64 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/Layout/Layout.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}._3rC08{margin-top:15px}", ""]);

// exports
exports.locals = {
	"contentContainer": "_3rC08"
};

/***/ }),
/* 65 */
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(/*! ./Header.css */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(/*! ../Link */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(/*! ../Navigation */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__haze_lea_logo_svg__ = __webpack_require__(/*! ./haze-lea-logo.svg */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__haze_lea_logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__haze_lea_logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








function Header(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.container
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand,
    to: '/'
  }, void 0, _jsx('img', {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.logo,
    src: __WEBPACK_IMPORTED_MODULE_5__haze_lea_logo_svg___default.a
  }))));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),
/* 66 */
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Header.css */ 67);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 67 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/Header/Header.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, ".O9oW9{background:#fff;color:#fff}.qQ2mF{margin:0 auto;padding:0;max-width:1200px}._2oS_y{color:#1a1a1a;text-decoration:none;font-size:1.6em;display:block;padding:0}._230aH{margin-left:0}._230aH,.Ynhg8{font-family:Fredericka the Great,cursive}.Ynhg8{display:block;text-align:right}._3pohg{float:right;margin-top:0}._2AXOj{text-align:center}._3dmwX{font-weight:400;font-size:4em;line-height:1em}._3dmwX,.I2eY9{margin:0;padding:0}.I2eY9{color:hsla(0,0%,100%,.5);font-size:1.25em}._2jKwz{width:30%;display:block;margin:0 auto}", ""]);

// exports
exports.locals = {
	"root": "O9oW9",
	"container": "qQ2mF",
	"brand": "_2oS_y",
	"brandTxt": "_230aH",
	"brandTxtBottom": "Ynhg8",
	"nav": "_3pohg",
	"banner": "_2AXOj",
	"bannerTitle": "_3dmwX",
	"bannerDesc": "I2eY9",
	"logo": "_2jKwz"
};

/***/ }),
/* 68 */
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ 50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(/*! ./Navigation.css */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(/*! ../Link */ 58);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







function Navigation(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root,
    role: 'navigation'
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/about'
  }, void 0, 'About'), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/contact'
  }, void 0, 'Contact'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer
  }, void 0, ' | '), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link,
    to: '/login'
  }, void 0, 'Log in'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.spacer
  }, void 0, 'or'), _jsx(__WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight),
    to: '/register'
  }, void 0, 'Sign up'));
}

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ }),
/* 69 */
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.css ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Navigation.css */ 70);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 70 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/Navigation/Navigation.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "._2gcJx{float:right;margin:6px 0 0}.Ntl35{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}.Ntl35,.Ntl35:active,.Ntl35:visited{color:hsla(0,0%,100%,.6)}._2UNlq,.Ntl35:hover{color:#fff}._2UNlq{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}._2UNlq:hover{background:rgba(0,0,0,.3)}._3vZVG{color:hsla(0,0%,100%,.3)}", ""]);

// exports
exports.locals = {
	"root": "_2gcJx",
	"link": "Ntl35",
	"highlight": "_2UNlq",
	"spacer": "_3vZVG"
};

/***/ }),
/* 71 */
/*!*************************************************!*\
  !*** ./src/components/Header/haze-lea-logo.svg ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/30719a82.svg";

/***/ }),
/* 72 */
/*!*********************************************!*\
  !*** ./src/components/Feedback/Feedback.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Feedback_css__ = __webpack_require__(/*! ./Feedback.css */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Feedback_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const facebook = __webpack_require__(/*! react-icons/lib/fa/facebook */ 51);
const instagram = __webpack_require__(/*! react-icons/lib/fa/instagram */ 52);

var _ref = _jsx('dt', {}, void 0, 'e.');

var _ref2 = _jsx('dt', {}, void 0, 't.');

var _ref3 = _jsx('hr', {});

function Feedback(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.container
  }, void 0, _jsx('h4', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.contactMe
  }, void 0, 'Contact me:'), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.contactDetailsWrapper
  }, void 0, _jsx('dl', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.contactDetails
  }, void 0, _ref, _jsx('dd', {}, void 0, _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.link,
    href: 'mailto:hello@hazelea.co.uk'
  }, void 0, 'hello@hazelea.co.uk')), _ref2, _jsx('dd', {}, void 0, _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.link,
    href: 'tel:+447598 835 544'
  }, void 0, '07598 835 544'))), _ref3, _jsx('h4', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.contactMe
  }, void 0, 'Lets be friends'), _jsx('a', {
    href: 'https://www.facebook.com/hazeleafloraldesign/'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(facebook, null)), _jsx('a', {
    href: 'https://www.instagram.com/hazelea_designs/'
  }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(instagram, null)))));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a)(Feedback));

/***/ }),
/* 73 */
/*!**********************************************!*\
  !*** ./src/components/Feedback/Feedback.css ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Feedback.css */ 74);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Feedback.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Feedback.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 74 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/Feedback/Feedback.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "._1QFug{font-family:Josefin Slab,serif}._1aTkE{margin:0 auto;padding:20px 8px;max-width:$max-content-width;text-align:center;font-size:1.5em}._2iH7A,._2iH7A:active,._2iH7A:hover,._2iH7A:visited{color:#333;text-decoration:none}._3HxTI{margin:0}.ALcs3{width:250px;margin:auto;padding:10px}._2jjPg{margin:5px 0;text-align:justify}._2jjPg dt{display:inline;margin:0;padding:0}._2jjPg dt:before{content:\"\";display:block}._2jjPg dd{margin:0;padding:0;padding-left:20px;display:inline}._2iH7A:hover{text-decoration:underline}._3GZrp{padding-right:15px;padding-left:15px}", ""]);

// exports
exports.locals = {
	"root": "_1QFug",
	"container": "_1aTkE",
	"link": "_2iH7A",
	"contactMe": "_3HxTI",
	"contactDetailsWrapper": "ALcs3",
	"contactDetails": "_2jjPg",
	"spacer": "_3GZrp"
};

/***/ }),
/* 75 */
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(/*! ./Footer.css */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(/*! ../Link */ 58);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






function Footer(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container
  }, void 0, _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text
  }, void 0, '\xA9 Haze Lea')));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 76 */
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Footer.css */ 77);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 77 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/Footer/Footer.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "._1UUMy{background:#333;color:#fff}._3dfAC{margin:0 auto;padding:20px 15px;max-width:1200px;text-align:center}._3ReUN{color:hsla(0,0%,100%,.5)}._297xE{color:hsla(0,0%,100%,.3)}._3qHjF,._3ReUN{padding:2px 5px;font-size:1em}._3qHjF,._3qHjF:active,._3qHjF:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._3qHjF:hover{color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_1UUMy",
	"container": "_3dfAC",
	"text": "_3ReUN",
	"spacer": "_297xE",
	"link": "_3qHjF"
};

/***/ }),
/* 78 */
/*!*********************************!*\
  !*** ./src/routes/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ContentSection___ = __webpack_require__(/*! ../../components/ContentSection/ */ 79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css__ = __webpack_require__(/*! ./Home.css */ 82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_jpg__ = __webpack_require__(/*! ./service.jpg */ 84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__service_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_jpg__ = __webpack_require__(/*! ./about.jpg */ 85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__about_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carousel1_jpg__ = __webpack_require__(/*! ./carousel1.jpg */ 86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__carousel1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__carousel1_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel2_jpg__ = __webpack_require__(/*! ./carousel2.jpg */ 87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__carousel2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carousel3_jpg__ = __webpack_require__(/*! ./carousel3.jpg */ 88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carousel3_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__carousel3_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carousel4_jpg__ = __webpack_require__(/*! ./carousel4.jpg */ 89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__carousel4_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__carousel4_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__carousel5_jpg__ = __webpack_require__(/*! ./carousel5.jpg */ 90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__carousel5_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__carousel5_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel6_jpg__ = __webpack_require__(/*! ./carousel6.jpg */ 91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__carousel6_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__carousel6_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_slick__ = __webpack_require__(/*! react-slick */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_slick__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
















var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_ContentSection___["a" /* default */], {
  title: 'About',
  imgSrc: __WEBPACK_IMPORTED_MODULE_6__about_jpg___default.a,
  imagePostion: 'right'
}, void 0, _jsx('p', {}, void 0, 'Haze Lea is a floral design business run by myself, Katherine, based in the Cotswolds. I specialise in creating bespoke floral designs with an elegant take on natural beauty for your wedding or event.'), _jsx('p', {}, void 0, 'I broke away from my background in events management and hospitality for a period of travelling and getting lost somewhere between the ocean and mountains. I returned to the UK with a passion for all things mother nature and after training at McQueen\u2019s in London, I decided that the time was right to follow my heart.'), _jsx('p', {}, void 0, 'Haze Lea was created out of a newly found need to unite my passions for design, nature, and the beauty behind people\u2019s expressions and moments.'), _jsx('p', {}, void 0, 'I love: textural berries, trailing vines, twisted hazel and all things perfectly imperfect. Life is about balance\u2026. the tamed and the untamed and I find happiness in finding this balance in nature and my work.'));

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_3__components_ContentSection___["a" /* default */], {
  title: 'Service',
  imgSrc: __WEBPACK_IMPORTED_MODULE_5__service_jpg___default.a
}, void 0, _jsx('p', {}, void 0, 'I offer a fully bespoke floral design service for your wedding or event. We\u2019ll start with a creative consultation where I get to understand you, your taste and inspirations. I will work closely with you or your event planner to translate your unique vision into living works of art with a cohesive style. Your flowers will help to bring every key visual aspect of your day together for a beautiful experience for you and your guests on the day.'), _jsx('p', {}, void 0, 'Need to brighten up your business? I also offer my fully bespoke floral contract design service to any business who wishes to offer the beauty of flowers to their customers on a regular basis. I will work closely with each client to understand your individual floral needs.'));

var _ref3 = _jsx('hr', {});

function Home(props) {
  const contentLeft = { float: 'left', height: 'auto', maxWidth: '100%' };
  const contentRight = { float: 'right', height: 'auto', maxWidth: '100%' };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false
  };
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.container
  }, void 0, _jsx('h1', {
    className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.title
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_13_react_slick___default.a,
    settings,
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_7__carousel1_jpg___default.a
    })),
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_8__carousel2_jpg___default.a
    })),
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_9__carousel3_jpg___default.a
    })),
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_12__carousel6_jpg___default.a
    })),
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_10__carousel4_jpg___default.a
    })),
    _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.images
    }, void 0, _jsx('img', {
      className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.image,
      src: __WEBPACK_IMPORTED_MODULE_11__carousel5_jpg___default.a
    }))
  ), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.contentWrapper
  }, void 0, _ref, _ref2), _ref3));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__Home_css___default.a)(Home));

/***/ }),
/* 79 */
/*!*********************************************************!*\
  !*** ./src/components/ContentSection/ContentSection.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentSection_css__ = __webpack_require__(/*! ./ContentSection.css */ 80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ContentSection_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(/*! ../Link */ 58);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class ContentSection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const { imagePostion } = this.props;
    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a.root
    }, void 0, _jsx('div', {
      className: imagePostion && imagePostion == 'right' ? __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a.imageWrapperRight : __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a.imageWrapperLeft
    }, void 0, _jsx('img', {
      src: this.props.imgSrc,
      className: __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a.image
    })), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a.contentWrapper
    }, void 0, _jsx('h3', {}, void 0, this.props.title), this.props.children));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ContentSection_css___default.a)(ContentSection));

/***/ }),
/* 80 */
/*!**********************************************************!*\
  !*** ./src/components/ContentSection/ContentSection.css ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./ContentSection.css */ 81);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ContentSection.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ContentSection.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 81 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/components/ContentSection/ContentSection.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "._Y1yJ{position:relative;margin-top:10px}._Y1yJ:after{content:\"\";display:table;clear:both}h3{font-family:Josefin Slab,serif;font-size:1.3em;font-weight:600;display:block;text-align:center;margin-right:10px}p:first-of-type{display:inline}.CUx7K{margin:15px 15px 15px 0;float:left}._3tjKq,.CUx7K{width:30%;border-radius:10px;overflow:hidden}._3tjKq{margin:15px 0 15px 15px;float:right}.btFUr{max-width:100%;height:auto}._3tZ2s{font-family:Josefin Slab,serif;font-size:1.2em}", ""]);

// exports
exports.locals = {
	"root": "_Y1yJ",
	"imageWrapperLeft": "CUx7K",
	"imageWrapperRight": "_3tjKq",
	"image": "btFUr",
	"contentWrapper": "_3tZ2s"
};

/***/ }),
/* 82 */
/*!**********************************!*\
  !*** ./src/routes/home/Home.css ***!
  \**********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-rules-2!../../../node_modules/postcss-loader/lib??ref--1-rules-3!./Home.css */ 83);
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ 9);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 83 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1,"sourceMap":false,"modules":true,"localIdentName":"[hash:base64:5]","minimize":true,"discardComments":{"removeAll":true}}!./node_modules/postcss-loader/lib?{"config":{"path":"./tools/postcss.config.js"}}!./src/routes/home/Home.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 8)(false);
// imports


// module
exports.push([module.i, "._2Rav6{margin:0}._1avl7{padding-left:10px;padding-right:10px}._3YPN-{margin:0 auto;padding:0;max-width:1200px}.aPwK5{display:inline;border-radius:10px;overflow:hidden}._2vJO1{max-width:100%;height:auto;width:auto\\9}.R4Eok{padding-top:45px}", ""]);

// exports
exports.locals = {
	"title": "_2Rav6",
	"root": "_1avl7",
	"container": "_3YPN-",
	"images": "aPwK5",
	"image": "_2vJO1",
	"contentWrapper": "R4Eok"
};

/***/ }),
/* 84 */
/*!*************************************!*\
  !*** ./src/routes/home/service.jpg ***!
  \*************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/572dd4ad.jpg";

/***/ }),
/* 85 */
/*!***********************************!*\
  !*** ./src/routes/home/about.jpg ***!
  \***********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/752cf61c.jpg";

/***/ }),
/* 86 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel1.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/9e3a98bf.jpg";

/***/ }),
/* 87 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel2.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/be864471.jpg";

/***/ }),
/* 88 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel3.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/aa1f33c7.jpg";

/***/ }),
/* 89 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel4.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/3734ab14.jpg";

/***/ }),
/* 90 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel5.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/029c90b8.jpg";

/***/ }),
/* 91 */
/*!***************************************!*\
  !*** ./src/routes/home/carousel6.jpg ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "/assets/91fd3824.jpg";

/***/ })
]);;
//# sourceMappingURL=home.js.map