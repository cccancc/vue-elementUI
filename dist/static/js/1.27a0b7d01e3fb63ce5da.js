webpackJsonpelement_ui([1],{

/***/ "jDqR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue__ = __webpack_require__("r5wv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09ded446_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddServer_vue__ = __webpack_require__("yUm7");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddServer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09ded446_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddServer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "r5wv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  data: function data() {
    // number check
    var checkNum = function checkNum(rule, value, callback) {
      if (value < 0) {
        callback(new Error("Please input correct value"));
      } else {
        callback();
      }
    };
    return {
      forms: {
        Sname: "",
        Owner_name: "",
        Owner_organization: "",
        Pnum: "",
        Server_type: "",
        CPU_type: "",
        Storage: "",
        Apply_comment: ""
      },
      options: [{
        value: "CPU1",
        label: "CPU1"
      }, {
        value: "CPU2",
        label: "CPU2"
      }, {
        value: "CPU3",
        label: "CPU3"
      }, {
        value: "CPU4",
        label: "CPU4"
      }, {
        value: "CPU5",
        label: "CPU5"
      }],
      value: "",

      rules: {
        // fields in form
        Sname: [{
          required: true,
          message: "Please input the server name you want to apply.",
          trigger: "blur"
        }],
        Owner_name: [{
          required: true,
          message: "Please input the owner's name.",
          trigger: "blur"
        }],
        Owner_organization: [{
          required: true,
          message: "Please input the owner's organization.",
          trigger: "blur"
        }],
        Pnum: [{
          required: true,
          message: "Please input Phone number.",
          trigger: "blur"
        }, {
          pattern: /^1[34578]\d{9}$/,
          message: "Please the correct Phone number!",
          trigger: "blur"
        }],
        Server_type: [{
          required: true,
          message: "Please select the server type",
          trigger: "change"
        }],
        CPU_type: [{ required: true, message: "Please select CPU", trigger: "change" }],
        Storage: [{
          required: true,
          message: "Please input the required storage",
          trigger: "blur"
        }, {
          validator: checkNum,
          trigger: "blur"
        }],
        Apply_comment: [{
          required: true,
          message: "Please input application comment",
          trigger: "blur"
        }]
      }
    };
  },

  methods: {
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },
    scrollToBottom: function scrollToBottom() {
      window.scrollTo(0, document.documentElement.scrollHeight);
    },

    // 提交表单
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var submitMes = _this.$message({
            message: "Form is submitted successfully.",
            type: "success"
          });
          var ret = "";
          for (var it in _this.forms) {
            ret += encodeURIComponent(it) + "=" + encodeURIComponent(_this.forms[it]) + "&";
          }
          _this.$ajax2({
            url: "/saveYnsioregis",
            type: "post",
            data: ret,
            success: function success(res) {
              if (res.success) {
                submitMes.close();
                _this.$message({
                  message: res.message,
                  type: "success"
                });
              }
            },
            error: function error() {
              submitMes.close();
              _this.$message({
                message: "Submit failed!",
                type: "warning"
              });
            }
          });
        } else {
          //   console.log("error submit!!");
          return false;
        }
      });
    },

    // reset form
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // fill form for test
    fillAll: function fillAll() {
      var randomResult = Math.random() > 0.5;
      this.forms.Sname = randomResult ? "0" : "1";
      this.forms.Pnum = randomResult ? 13318031415 : "13318031419";
      this.forms.Sname = this.forms.Sname ? this.forms.Sname + 1 : 1;
      for (var i in this.forms) {
        if (!this.forms[i]) this.forms[i] = randomResult ? "0" : "1";
      }
    }
  }
};

/***/ }),

/***/ "yUm7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":16,"offset":4}},[_c('el-form',{ref:"ruleForm2",attrs:{"model":_vm.forms,"rules":_vm.rules,"label-position":"left","label-width":"160px"}},[_c('el-form-item',{attrs:{"label":"Server Name","prop":"Sname"}},[_c('el-input',{attrs:{"placeholder":"Required"},model:{value:(_vm.forms.Sname),callback:function ($$v) {_vm.$set(_vm.forms, "Sname", $$v)},expression:"forms.Sname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Owner Name","prop":"Owner_name"}},[_c('el-input',{attrs:{"placeholder":"Required"},model:{value:(_vm.forms.Owner_name),callback:function ($$v) {_vm.$set(_vm.forms, "Owner_name", $$v)},expression:"forms.Owner_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Owner Organization","prop":"Owner_organization"}},[_c('el-input',{attrs:{"placeholder":"Required"},model:{value:(_vm.forms.Owner_organization),callback:function ($$v) {_vm.$set(_vm.forms, "Owner_organization", $$v)},expression:"forms.Owner_organization"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Phone Number","prop":"Pnum"}},[_c('el-input',{attrs:{"placeholder":"Required"},model:{value:(_vm.forms.Pnum),callback:function ($$v) {_vm.$set(_vm.forms, "Pnum", $$v)},expression:"forms.Pnum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Server Type","prop":"Server_type"}},[_c('el-radio-group',{model:{value:(_vm.forms.Server_type),callback:function ($$v) {_vm.$set(_vm.forms, "Server_type", $$v)},expression:"forms.Server_type"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("Type 1")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("Type 2")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"}},[_vm._v("Type 3")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"3"}},[_vm._v("Type 4")])],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":"20"}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"Storage","prop":"Storage"}},[_c('el-input',{attrs:{"type":"number","placeholder":"Required"},model:{value:(_vm.forms.Storage),callback:function ($$v) {_vm.$set(_vm.forms, "Storage", _vm._n($$v))},expression:"forms.Storage"}},[_c('template',{slot:"append"},[_vm._v("MB")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"CPU Type","prop":"CPU_type"}},[_c('el-select',{attrs:{"placeholder":"Please select"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Application Comment","prop":"Apply_comment"}},[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 2},"placeholder":"Required"},model:{value:(_vm.forms.Apply_comment),callback:function ($$v) {_vm.$set(_vm.forms, "Apply_comment", $$v)},expression:"forms.Apply_comment"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('ruleForm2')}}},[_vm._v("Submit")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){return _vm.resetForm('ruleForm2')}}},[_vm._v("Reset")]),_vm._v(" "),_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){return _vm.$router.go(-1)}}},[_vm._v("Back")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":_vm.fillAll}},[_vm._v("Test")])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=1.27a0b7d01e3fb63ce5da.js.map