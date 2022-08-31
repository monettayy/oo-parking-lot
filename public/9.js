(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['_auth', '_slot_type'],
  data: function data() {
    return {
      slot_type: {
        name: '',
        description: ''
      },
      errors: []
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    if (this._slot_type) {
      this.slot_type = _objectSpread({}, this._slot_type);
    }
  },
  methods: {
    createItem: function createItem() {
      var _this = this;

      this.$confirm('', 'Are you sure you want to create this slot type?', 'question').then(function () {
        _this.$loader.show();

        _this.errors = [];
        axios.post('/slot-type', _this.slot_type).then(function (response) {
          _this.$loader.hide();

          if (response.data.status == "OK") {
            _this.$alert('', 'Slot Type was successfully created', 'success').then(function () {
              window.location.href = "/slot-types";
            });
          } else {
            _this.$alert('', response.data.message, 'error');

            _this.errors = response.data.errors;
          }
        })["catch"](function () {
          _this.$loader.hide();

          _this.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updateItem: function updateItem() {
      var _this2 = this;

      this.$confirm('', 'Are you sure you want to update this slot type?', 'question').then(function () {
        _this2.$loader.show();

        _this2.errors = [];
        var form = _this2.slot_type;
        form.change_password = _this2.password;
        axios.patch('/slot_type/' + _this2.slot_type.id, form).then(function (response) {
          _this2.$loader.hide();

          if (response.data.status == "OK") {
            _this2.$alert('', 'Slot Type was successfully updated', 'success').then(function () {
              window.location.href = "/slot-types";
            });
          } else {
            _this2.$alert('', response.data.message, 'error');

            _this2.errors = response.data.errors;
          }
        })["catch"](function () {
          _this2.$loader.hide();

          _this2.$alert('', 'Something went wrong', 'error');
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "card-header bg-primary text-white"
  }, [_vm._slot_type ? _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("Edit Slot Type")]) : _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("New Slot Type")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body px-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot_type.name,
      expression: "slot_type.name"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.name ? "is-invalid" : "",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.slot_type.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.slot_type, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.name[0]) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot_type.description,
      expression: "slot_type.description"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.description ? "is-invalid" : "",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.slot_type.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.slot_type, "description", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.description ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.description[0]) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 col-md-6 col-sm-12"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Charge Per Hour")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot_type.charge_per_hour,
      expression: "slot_type.charge_per_hour"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.charge_per_hour ? "is-invalid" : "",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.slot_type.charge_per_hour
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.slot_type, "charge_per_hour", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.charge_per_hour ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.charge_per_hour[0]) + "\n                    ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-end"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6"
  }, [!_vm._slot_type ? _c("button", {
    staticClass: "btn btn-block btn-primary",
    on: {
      click: _vm.createItem
    }
  }, [_vm._v("\n                    Save\n                ")]) : _c("button", {
    staticClass: "btn btn-block btn-primary",
    on: {
      click: _vm.updateItem
    }
  }, [_vm._v("\n                    Update\n                ")])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12"
  }, [_c("h2", {
    staticClass: "mb-2"
  }, [_vm._v("Slot Type Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-12 text-right"
  }, [_c("hr")]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6"
  }, [_c("a", {
    staticClass: "btn btn-block mb-2",
    attrs: {
      href: "/slot-types"
    }
  }, [_vm._v("\n                    Cancel\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/pages/Settings/SlotTypesForm.vue":
/*!********************************************************!*\
  !*** ./resources/src/pages/Settings/SlotTypesForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotTypesForm.vue?vue&type=template&id=f8cd407e& */ "./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e&");
/* harmony import */ var _SlotTypesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlotTypesForm.vue?vue&type=script&lang=js& */ "./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SlotTypesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Settings/SlotTypesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTypesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotTypesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTypesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e&":
/*!***************************************************************************************!*\
  !*** ./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotTypesForm.vue?vue&type=template&id=f8cd407e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotTypesForm.vue?vue&type=template&id=f8cd407e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTypesForm_vue_vue_type_template_id_f8cd407e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);