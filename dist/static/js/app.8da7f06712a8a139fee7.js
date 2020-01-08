(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["element-ui"] = factory();
	else
		root["element-ui"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpelement_ui([6],{

/***/ "/E7p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2l9W":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4IEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue__ = __webpack_require__("wxdN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ae047f4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavMenu_vue__ = __webpack_require__("AVtx");
function injectStyle (ssrContext) {
  __webpack_require__("RVv+")
  __webpack_require__("/E7p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5ae047f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavMenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ae047f4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "AVtx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"tac"},[_c('el-col',{attrs:{"span":24}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"router":"","unique-opened":"","active-text-color":"#409eff"},on:{"open":_vm.handleOpen,"close":_vm.handleClose}},_vm._l((_vm.menu),function(item){return _c('el-submenu',{key:item.id,attrs:{"index":item.id}},[_c('template',{slot:"title"},[_c('i',{class:item.icon}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(item.name)}})]),_vm._v(" "),_vm._l((item.sub),function(sub){return _c('el-menu-item-group',{key:sub.componentName,staticClass:"over-hide"},[_c('el-menu-item',{attrs:{"index":sub.componentName},domProps:{"textContent":_vm._s(sub.name)}})],1)})],2)}),1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "E4d3":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AddServer": [
		"jDqR",
		1
	],
	"./AddServer.vue": [
		"jDqR",
		1
	],
	"./AddUser": [
		"lSJK",
		0
	],
	"./AddUser.vue": [
		"lSJK",
		0
	],
	"./AdminList": [
		"GSWBK",
		5
	],
	"./AdminList.vue": [
		"GSWBK",
		5
	],
	"./Header": [
		"teIlt"
	],
	"./Header.vue": [
		"teIlt"
	],
	"./NavMenu": [
		"4IEm"
	],
	"./NavMenu.vue": [
		"4IEm"
	],
	"./ServerDashboard": [
		"czpWI",
		4
	],
	"./ServerDashboard.vue": [
		"czpWI",
		4
	],
	"./ServerList": [
		"3+ozU",
		3
	],
	"./ServerList.vue": [
		"3+ozU",
		3
	],
	"./UserList": [
		"smCUn",
		2
	],
	"./UserList.vue": [
		"smCUn",
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "E4d3";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17ff8220_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("QJEa");
function injectStyle (ssrContext) {
  __webpack_require__("2l9W")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17ff8220_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__("tvR6");

var _index2 = _interopRequireDefault(_index);

var _lib = __webpack_require__("qBF2");

var _lib2 = _interopRequireDefault(_lib);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__("M93x");

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__("YaEn");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

_vue2.default.use(_lib2.default);

/* eslint-disable no-new */
new _vue2.default({
    el: '#app',
    router: _router2.default,
    template: '<App/>',
    components: { App: _App2.default }
});

/***/ }),

/***/ "OMs8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QJEa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('el-container',[_c('el-header',{staticClass:"header"},[_c('vheader')],1),_vm._v(" "),_c('el-container',[_c('el-aside',{attrs:{"width":"240px"}},[_c('navmenu')],1),_vm._v(" "),_c('el-main',[_c('router-view')],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "RVv+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _menuConfig = __webpack_require__("go35");

var _menuConfig2 = _interopRequireDefault(_menuConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [];

_menuConfig2.default.forEach(function (item) {
    item.sub.forEach(function (sub) {
        routes.push({
            path: '/' + sub.componentName,
            name: sub.componentName,
            component: function component() {
                return __webpack_require__("E4d3")("./" + sub.componentName);
            }
        });
    });
});

exports.default = new _vueRouter2.default({ routes: routes });

/***/ }),

/***/ "go35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
    name: 'User Management',
    id: 'basic',
    icon: 'el-icon-menu',
    sub: [{
        name: 'User List',
        componentName: 'UserList'
    }, {
        name: 'Admin List',
        componentName: 'AdminList'
    }, {
        name: 'Add User/Admin',
        componentName: 'AddUser'
    }]
}, {
    name: 'Server Management',
    id: 'server',
    icon: 'el-icon-s-platform',
    sub: [{
        name: 'Server List',
        componentName: 'ServerList'
    }, {
        name: 'Server Dashboard',
        componentName: 'ServerDashboard'
    }, {
        name: 'Apply Server',
        componentName: 'AddServer'
    }]
}, {
    name: 'Dashboard',
    id: 'dashboard',
    icon: 'el-icon-s-data',
    sub: [{
        name: 'User Track',
        componentName: 'backup1'
    }, {
        name: 'Server Usage',
        componentName: 'backup2'
    }]
}];

/***/ }),

/***/ "teIl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5074da76","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Header.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"head-wrap"},[_c('i',{staticClass:"el-icon-s-home"}),_vm._v(" Server Management System")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var Header = (esExports);
// CONCATENATED MODULE: ./src/components/Header.vue
function injectStyle (ssrContext) {
  __webpack_require__("OMs8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5074da76"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  Header,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Header = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wxdN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuConfig = __webpack_require__("go35");

var _menuConfig2 = _interopRequireDefault(_menuConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      menu: _menuConfig2.default
    };
  },

  methods: {
    handleOpen: function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose: function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "xJD8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NavMenu = __webpack_require__("4IEm");

var _NavMenu2 = _interopRequireDefault(_NavMenu);

var _Header = __webpack_require__("teIlt");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'app',
  components: {
    'navmenu': _NavMenu2.default,
    'vheader': _Header2.default
  }
};

/***/ })

},["NHnr"]);
});
//# sourceMappingURL=app.8da7f06712a8a139fee7.js.map