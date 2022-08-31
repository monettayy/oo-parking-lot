(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['_auth'],
  components: {},
  data: function data() {
    return {
      isLoading: false,
      date: moment().format('YYYY-MM-DD'),
      type: '',
      log_data: ''
    };
  },
  mounted: function mounted() {
    this.getItems();
  },
  filters: {
    parseDate: function parseDate(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "MMMM DD, YYYY";
      return moment(date).format(format);
    }
  },
  methods: {
    getItems: function getItems() {
      var _this = this;

      this.log_data = '';

      if (this.type) {
        this.isLoading = true;
        axios.get('/get-logs', {
          params: {
            date: this.date,
            type: this.type
          }
        }).then(function (response) {
          _this.isLoading = false;

          if (response.data.status == "OK") {
            _this.log_data = response.data.data;
          }
        })["catch"](function () {
          _this.isLoading = false;

          _this.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    downloadData: function downloadData() {
      var _this2 = this;

      if (this.type) {
        this.$confirm("", "Are you sure you want to download system logs?", "question").then(function () {
          window.location.href = '/download-logs?date=' + _this2.date + '&type=' + _this2.type;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body pt-0 px-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-6"
  }, [_c("VueDatePicker", {
    staticClass: "form-control",
    attrs: {
      format: "MM/DD/YYYY",
      "visible-years-number": 80
    },
    model: {
      value: _vm.date,
      callback: function callback($$v) {
        _vm.date = $$v;
      },
      expression: "date"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-6"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.type,
      expression: "type"
    }],
    staticClass: "form-control",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("- Select Type -")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "all"
    }
  }, [_vm._v("All")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "user_logins"
    }
  }, [_vm._v("Login")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "user_operations"
    }
  }, [_vm._v("User Operations")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "user_reports"
    }
  }, [_vm._v("Reports")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "sms_logs"
    }
  }, [_vm._v("SMS Logs")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "new_members"
    }
  }, [_vm._v("New Users")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "laravel"
    }
  }, [_vm._v("Other Logs")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-3 col-sm-6"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: function click($event) {
        return _vm.getItems();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-eye mr-2"
  }), _vm._v("Fetch\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    on: {
      click: function click($event) {
        return _vm.downloadData();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-download mr-2"
  }), _vm._v("Download\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-3 col-sm-6"
  })]), _vm._v(" "), _vm.isLoading && !_vm.log_data ? _c("div", {
    staticClass: "container py-5"
  }, [_c("data-loader")], 1) : !_vm.isLoading && !_vm.log_data ? _c("div", {
    staticClass: "container py-5"
  }, [_vm._m(1)]) : !_vm.isLoading && _vm.log_data ? _c("div", {
    staticClass: "row",
    staticStyle: {
      "max-height": "60vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("h4", [_c("i", {
    staticClass: "fa fa-clock mr-2"
  }), _vm._v(" Generated: " + _vm._s(_vm._f("parseDate")(_vm.log_data.lastModified, "LLL")))]), _vm._v(" "), _c("h4", [_c("i", {
    staticClass: "fa fa-info-circle mr-2"
  }), _vm._v(" Size: " + _vm._s(_vm.log_data.size) + " B")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("p", {
    staticStyle: {
      "white-space": "pre-line"
    }
  }, [_vm._v(_vm._s(_vm.log_data.file))])])]) : _vm._e()])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-header d-flex align-items-center justify-content-between"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("img", {
    staticClass: "mr-3",
    attrs: {
      src: "/imgs/incognito.png",
      width: "40"
    }
  }), _vm._v(" "), _c("h2", {
    staticClass: "mb-0"
  }, [_vm._v("Developers Option")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("h4", [_c("i", {
    staticClass: "fa fa-file mr-2"
  }), _vm._v(" No Data Available")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/pages/Settings/Settings.vue":
/*!***************************************************!*\
  !*** ./resources/src/pages/Settings/Settings.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=69a3b6d1& */ "./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Settings/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1&":
/*!**********************************************************************************!*\
  !*** ./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=69a3b6d1& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/Settings.vue?vue&type=template&id=69a3b6d1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_69a3b6d1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);