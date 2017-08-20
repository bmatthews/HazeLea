require("source-map-support").install();
exports.ids = [5];
exports.modules = {

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(91);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Log In';

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__Login__["a" /* default */], {
  title: title
}));

function action() {
  return {
    chunks: ['login'],
    title,
    component: _ref
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(60);
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(49);
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feedback__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer__ = __webpack_require__(75);
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
  return _jsx('div', {}, void 0, _ref, props.children, _ref2, _ref3);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(63);
    var insertCss = __webpack_require__(9);

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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}", ""]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(65);
    var insertCss = __webpack_require__(9);

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Fredericka+the+Great|Josefin+Slab);", ""]);

// module
exports.push([module.i, "html{color:#222;font-weight:100;font-size:1em;font-family:Segoe UI,HelveticaNeue-Light,sans-serif;line-height:1.375}body{margin:0}a{color:#0074c2}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}@media print{*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}", ""]);

// exports


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(69);
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
  }, void 0, _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brandTxt
  }, void 0, 'Haze'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brandTxtBottom
  }, void 0, 'Lea'))));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(68);
    var insertCss = __webpack_require__(9);

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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "._1vSE5{background:#fff;color:#fff}._1EKFE{margin:0 auto;padding:20px 0;max-width:1000px;border-bottom:1px solid #ccc}._2ZSht{color:#1a1a1a;text-decoration:none;font-size:2em;display:block;width:87px;padding-right:20px;border-right:1px solid #ccc}.dkY7q{margin-left:10px}._3YhaB,.dkY7q{font-family:Fredericka the Great,cursive}._3YhaB{display:block;text-align:right}._3k-Mq{float:right;margin-top:6px}._1vQSj{text-align:center}.J73k2{margin:0;padding:10px;font-weight:400;font-size:4em;line-height:1em}._1QHrc{padding:0;color:hsla(0,0%,100%,.5);font-size:1.25em;margin:0}", ""]);

// exports
exports.locals = {
	"root": "_1vSE5",
	"container": "_1EKFE",
	"brand": "_2ZSht",
	"brandTxt": "dkY7q",
	"brandTxtBottom": "_3YhaB",
	"nav": "_3k-Mq",
	"banner": "_1vQSj",
	"bannerTitle": "J73k2",
	"bannerDesc": "_1QHrc"
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(59);
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(71);
    var insertCss = __webpack_require__(9);

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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".d0C7s{float:right;margin:6px 0 0}._3unRI{display:inline-block;padding:3px 8px;text-decoration:none;font-size:1.125em}._3unRI,._3unRI:active,._3unRI:visited{color:hsla(0,0%,100%,.6)}._3unRI:hover,.PPdJ5{color:#fff}.PPdJ5{margin-right:8px;margin-left:8px;border-radius:3px;background:rgba(0,0,0,.15)}.PPdJ5:hover{background:rgba(0,0,0,.3)}.cX3Pd{color:hsla(0,0%,100%,.3)}", ""]);

// exports
exports.locals = {
	"root": "d0C7s",
	"link": "_3unRI",
	"highlight": "PPdJ5",
	"spacer": "cX3Pd"
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Feedback_css__ = __webpack_require__(73);
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





var _ref = _jsx('dt', {}, void 0, 'e.');

var _ref2 = _jsx('dd', {}, void 0, _jsx('a', {
  href: 'mailto:hello@hazelea.co.uk'
}, void 0, 'hello@hazelea.co.uk'));

var _ref3 = _jsx('dt', {}, void 0, 't.');

var _ref4 = _jsx('dd', {}, void 0, _jsx('a', {
  href: 'tel:+447598 835 544'
}, void 0, '07598 835 544'));

var _ref5 = _jsx('hr', {});

var _ref6 = _jsx('i', {
  className: 'fa fa-instagram',
  'aria-hidden': 'true'
});

var _ref7 = _jsx('i', {
  className: 'fa fa-facebook-square fa-inverse',
  'aria-hidden': 'true'
});

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
  }, void 0, _ref, _ref2, _ref3, _ref4), _ref5, _jsx('h4', {
    className: __WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a.contactMe
  }, void 0, 'Lets be friends'), _ref6, _ref7)));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Feedback_css___default.a)(Feedback));

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(74);
    var insertCss = __webpack_require__(9);

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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "._2g7Ns{font-family:Josefin Slab,serif}.PgkWg{margin:0 auto;padding:20px 8px;max-width:$max-content-width;text-align:center;font-size:1.5em}._30xS9,._30xS9:active,._30xS9:hover,._30xS9:visited{color:#333;text-decoration:none}._2CLg6{margin:0}.uIqkD{width:250px;margin:auto;padding:10px}._2CaGM{margin:5px 0;text-align:justify}._2CaGM dt{display:inline;margin:0;padding:0}._2CaGM dt:before{content:\"\";display:block}._2CaGM dd{margin:0;padding:0;padding-left:20px;display:inline}._30xS9:hover{text-decoration:underline}.IQHzD{padding-right:15px;padding-left:15px}", ""]);

// exports
exports.locals = {
	"root": "_2g7Ns",
	"container": "PgkWg",
	"link": "_30xS9",
	"contactMe": "_2CLg6",
	"contactDetailsWrapper": "uIqkD",
	"contactDetails": "_2CaGM",
	"spacer": "IQHzD"
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(59);
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
  }, void 0, '\xA9 Your Company'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    to: '/'
  }, void 0, 'Home'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    to: '/admin'
  }, void 0, 'Admin'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    to: '/privacy'
  }, void 0, 'Privacy'), _jsx('span', {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer
  }, void 0, '\xB7'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link,
    to: '/not-found'
  }, void 0, 'Not Found')));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(77);
    var insertCss = __webpack_require__(9);

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

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "._1tZAR{background:#333;color:#fff}.e0IRj{margin:0 auto;padding:20px 15px;max-width:1000px;text-align:center}.tr5-G{color:hsla(0,0%,100%,.5)}._2Di2J{color:hsla(0,0%,100%,.3)}._3Ww1H,.tr5-G{padding:2px 5px;font-size:1em}._3Ww1H,._3Ww1H:active,._3Ww1H:visited{color:hsla(0,0%,100%,.6);text-decoration:none}._3Ww1H:hover{color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_1tZAR",
	"container": "e0IRj",
	"text": "tr5-G",
	"spacer": "_2Di2J",
	"link": "_3Ww1H"
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Login_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var _ref = _jsx('path', {
  d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z'
});

var _ref2 = _jsx('span', {}, void 0, 'Log in with Facebook');

var _ref3 = _jsx('path', {
  d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'
});

var _ref4 = _jsx('span', {}, void 0, 'Log in with Google');

var _ref5 = _jsx('path', {
  d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z'
});

var _ref6 = _jsx('span', {}, void 0, 'Log in with Twitter');

function Login(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.container
  }, void 0, _jsx('h1', {}, void 0, props.title), _jsx('p', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.lead
  }, void 0, 'Log in with your username or company email address.'), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.facebook,
    href: '/login/facebook'
  }, void 0, _jsx('svg', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.icon,
    width: '30',
    height: '30',
    viewBox: '0 0 30 30',
    xmlns: 'http://www.w3.org/2000/svg'
  }, void 0, _ref), _ref2)), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.google,
    href: '/login/google'
  }, void 0, _jsx('svg', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.icon,
    width: '30',
    height: '30',
    viewBox: '0 0 30 30',
    xmlns: 'http://www.w3.org/2000/svg'
  }, void 0, _ref3), _ref4)), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('a', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.twitter,
    href: '/login/twitter'
  }, void 0, _jsx('svg', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.icon,
    width: '30',
    height: '30',
    viewBox: '0 0 30 30',
    xmlns: 'http://www.w3.org/2000/svg'
  }, void 0, _ref5), _ref6)), _jsx('strong', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.lineThrough
  }, void 0, 'OR'), _jsx('form', {
    method: 'post'
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('label', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.label,
    htmlFor: 'usernameOrEmail'
  }, void 0, 'Username or email address:'), _jsx('input', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.input,
    id: 'usernameOrEmail',
    type: 'text',
    name: 'usernameOrEmail',
    autoFocus: true
  })), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('label', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.label,
    htmlFor: 'password'
  }, void 0, 'Password:'), _jsx('input', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.input,
    id: 'password',
    type: 'password',
    name: 'password'
  })), _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.formGroup
  }, void 0, _jsx('button', {
    className: __WEBPACK_IMPORTED_MODULE_3__Login_css___default.a.button,
    type: 'submit'
  }, void 0, 'Log in')))));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Login_css___default.a)(Login));

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(93);
    var insertCss = __webpack_require__(9);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Login.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./Login.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "._3w4yh{padding-left:20px;padding-right:20px}._3tEjn{margin:0 auto;padding:0 0 40px;max-width:380px}._24BLj{font-size:1.25em}._1FsFn{margin-bottom:15px}._2QXdt{display:inline-block;margin-bottom:5px;max-width:100%;font-weight:700}._2uwlQ{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 16px;width:100%;height:46px;outline:0;border:1px solid #ccc;border-radius:0;background:#fff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}._2uwlQ:focus{border-color:#0074c2;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6)}._1ZNK2{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;border:1px solid #373277;border-radius:0;background:#373277;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer}._1ZNK2:hover{background:rgba(54,50,119,.8)}._1ZNK2:focus{border-color:#0074c2;-webkit-box-shadow:0 0 8px rgba(0,116,194,.6);box-shadow:0 0 8px rgba(0,116,194,.6)}._2FzS0{border-color:#3b5998;background:#3b5998}._2FzS0:hover{background:#2d4373}.lsuqy{border-color:#dd4b39;background:#dd4b39}.lsuqy:hover{background:#c23321}._3DDSi{border-color:#55acee;background:#55acee}._3DDSi:hover{background:#2795e9}._3VPzE{display:inline-block;margin:-2px 12px -2px 0;width:20px;height:20px;vertical-align:middle;fill:currentColor}._2-Nxk{position:relative;z-index:1;display:block;margin-bottom:15px;width:100%;color:#757575;text-align:center;font-size:80%}._2-Nxk:before{position:absolute;top:50%;left:50%;z-index:-1;margin-top:-5px;margin-left:-20px;width:40px;height:10px;background-color:#fff;content:\"\"}._2-Nxk:after{position:absolute;top:49%;z-index:-2;display:block;width:100%;border-bottom:1px solid #ddd;content:\"\"}", ""]);

// exports
exports.locals = {
	"root": "_3w4yh",
	"container": "_3tEjn",
	"lead": "_24BLj",
	"formGroup": "_1FsFn",
	"label": "_2QXdt",
	"input": "_2uwlQ",
	"button": "_1ZNK2",
	"facebook": "_2FzS0 _1ZNK2",
	"google": "lsuqy _1ZNK2",
	"twitter": "_3DDSi _1ZNK2",
	"icon": "_3VPzE",
	"lineThrough": "_2-Nxk"
};

/***/ })

};;
//# sourceMappingURL=login.js.map