webpackJsonp([4],{

/***/ "lSJK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AddUser.vue
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

/* harmony default export */ var AddUser = ({
  name: "",
  data() {
    return {
      master_user: {
        sel: null, //选中行
        columns: [{
          prop: "name",
          label: "Username",
          width: 120
        }, {
          prop: "gender",
          label: "Gender",
          width: 150
        }, {
          prop: "authority",
          label: "Authority",
          width: 120
        }, {
          prop: "server",
          label: "Owned Server",
          width: 220
        }, {
          prop: "email",
          label: "Email"
        }],
        data: []
      }
    };
  },
  methods: {
    add() {
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning("Please input user information and save it.");
      }
      let j = {
        UserName: "",
        Gender: "",
        Authority: "",
        "Owned server": "",
        Email: "",
        isSet: true
      };
      this.master_user.data.push(j);
      this.master_user.sel = JSON.parse(JSON.stringify(j));
    },
    saveRow(row, index) {
      //save
      let data = JSON.parse(JSON.stringify(this.master_user.sel));
      for (let k in data) {
        row[k] = data[k];
      }
      row.isSet = false;
    },
    editRow(row) {
      //edit
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning("Please confirm firstly.");
      }
      this.master_user.sel = row;
      row.isSet = true;
    },
    deleteRow(index, rows) {
      //delete
      rows.splice(index, 1);
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8a46b872","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AddUser.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.master_user.data,"border":"","highlight-current-row":""}},[_c('el-table-column',{attrs:{"type":"index"}}),_vm._v(" "),_vm._l((_vm.master_user.columns),function(item,index){return _c('el-table-column',{attrs:{"label":item.label,"prop":item.prop,"width":item.width},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isSet)?_c('span',[_c('el-input',{attrs:{"placeholder":"Please input data"},model:{value:(_vm.master_user.sel[item.prop]),callback:function ($$v) {_vm.$set(_vm.master_user.sel, item.prop, $$v)},expression:"master_user.sel[item.prop]"}})],1):_c('span',[_vm._v(_vm._s(scope.row[item.prop]))])]}}],null,true)})}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Operation","width":""},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"success","icon":"el-icon-check","circle":""},on:{"click":function($event){$event.stopPropagation();return _vm.saveRow(scope.row,scope.$index)}}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-edit","circle":""},on:{"click":function($event){return _vm.editRow(scope.row,scope.$index)}}}),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","icon":"el-icon-delete","circle":""},on:{"click":function($event){return _vm.deleteRow(scope.$index,_vm.master_user.data)}}})]}}])})],2)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.add()}}},[_vm._v("Add User/Admin")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_AddUser = (esExports);
// CONCATENATED MODULE: ./src/components/AddUser.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AddUser,
  components_AddUser,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_AddUser = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=4.c23c199335be59dd3a46.js.map