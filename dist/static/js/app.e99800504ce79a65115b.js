webpackJsonp([7],{

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

// EXTERNAL MODULE: ./src/config/menu-config.js
var menu_config = __webpack_require__("go35");
var menu_config_default = /*#__PURE__*/__webpack_require__.n(menu_config);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/NavMenu.vue
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
//



/* harmony default export */ var NavMenu = ({
  data: function data() {
    return {
      menu: menu_config_default.a
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
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5ae047f4","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/NavMenu.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"tac"},[_c('el-col',{attrs:{"span":24}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"router":"","unique-opened":"","active-text-color":"#409eff"},on:{"open":_vm.handleOpen,"close":_vm.handleClose}},_vm._l((_vm.menu),function(item){return _c('el-submenu',{key:item.id,attrs:{"index":item.id}},[_c('template',{slot:"title"},[_c('i',{class:item.icon}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(item.name)}})]),_vm._v(" "),_vm._l((item.sub),function(sub){return _c('el-menu-item-group',{key:sub.componentName,staticClass:"over-hide"},[_c('el-menu-item',{attrs:{"index":sub.componentName},domProps:{"textContent":_vm._s(sub.name)}})],1)})],2)}),1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_NavMenu = (esExports);
// CONCATENATED MODULE: ./src/components/NavMenu.vue
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
  NavMenu,
  components_NavMenu,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_NavMenu = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "E4d3":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AddServer": [
		"jDqRb",
		5
	],
	"./AddServer.vue": [
		"jDqRb",
		5
	],
	"./AddUser": [
		"lSJKi",
		4
	],
	"./AddUser.vue": [
		"lSJKi",
		4
	],
	"./AdminList": [
		"GSWBK",
		3
	],
	"./AdminList.vue": [
		"GSWBK",
		3
	],
	"./Header": [
		"teIlt"
	],
	"./Header.vue": [
		"teIlt"
	],
	"./NavMenu": [
		"4IEmE"
	],
	"./NavMenu.vue": [
		"4IEmE"
	],
	"./ServerDashboard": [
		"czpWI",
		2
	],
	"./ServerDashboard.vue": [
		"czpWI",
		2
	],
	"./ServerList": [
		"3+ozU",
		1
	],
	"./ServerList.vue": [
		"3+ozU",
		1
	],
	"./UserList": [
		"smCUn",
		0
	],
	"./UserList.vue": [
		"smCUn",
		0
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

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("tvR6");
var theme_chalk_default = /*#__PURE__*/__webpack_require__.n(theme_chalk);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/index.js
var lib = __webpack_require__("qBF2");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/components/NavMenu.vue + 2 modules
var NavMenu = __webpack_require__("4IEmE");

// EXTERNAL MODULE: ./src/components/Header.vue + 1 modules
var Header = __webpack_require__("teIlt");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
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




/* harmony default export */ var App = ({
  name: 'app',
  components: {
    'navmenu': NavMenu["default"],
    'vheader': Header["default"]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-17ff8220","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('el-container',[_c('el-header',{staticClass:"header"},[_c('vheader')],1),_vm._v(" "),_c('el-container',[_c('el-aside',{attrs:{"width":"240px"}},[_c('navmenu')],1),_vm._v(" "),_c('el-main',[_c('router-view')],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
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
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./src/config/menu-config.js
var menu_config = __webpack_require__("go35");
var menu_config_default = /*#__PURE__*/__webpack_require__.n(menu_config);

// CONCATENATED MODULE: ./src/router/index.js




vue_esm["default"].use(vue_router_esm["a" /* default */]);

var routes = [];

menu_config_default.a.forEach(function (item) {
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

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({ routes: routes }));
// CONCATENATED MODULE: ./src/main.js








vue_esm["default"].config.productionTip = false;

vue_esm["default"].use(lib_default.a);

/* eslint-disable no-new */
new vue_esm["default"]({
    el: '#app',
    router: router,
    template: '<App/>',
    components: { App: src_App }
});

/***/ }),

/***/ "OMs8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RVv+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "go35":
/***/ (function(module, exports) {

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

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.e99800504ce79a65115b.js.map