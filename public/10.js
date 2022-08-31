(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['_auth', '_slot_types', '_entrances', '_slot'],
  data: function data() {
    return {
      slot: {
        entrance_id: '',
        slot_type_id: '',
        distance: ''
      },
      errors: []
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    if (this._slot) {
      this.slot = _objectSpread({}, this._slot);
      console.log(this.slot);
    }
  },
  methods: {
    createItem: function createItem() {
      var _this = this;

      this.$confirm('', 'Are you sure you want to create slot?', 'question').then(function () {
        _this.$loader.show();

        _this.errors = [];
        axios.post('/slot', _this.slot).then(function (response) {
          _this.$loader.hide();

          if (response.data.status == "OK") {
            _this.$alert('', 'Slot was successfully created', 'success').then(function () {
              window.location.href = "/slots";
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

      this.$confirm('', 'Are you sure you want to update slot?', 'question').then(function () {
        _this2.$loader.show();

        _this2.errors = [];
        var form = _this2.slot;
        form.change_password = _this2.password;
        axios.patch('/slot/' + _this2.slot.id, form).then(function (response) {
          _this2.$loader.hide();

          if (response.data.status == "OK") {
            _this2.$alert('', 'Slot was successfully updated', 'success').then(function () {
              window.location.href = "/slots";
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._slot ? _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("Edit Slot")]) : _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("New Slot")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body px-5"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Entrance")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot.entrance_id,
      expression: "slot.entrance_id"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.entrance_id ? "is-invalid" : "",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.slot, "entrance_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm._entrances, function (r) {
    return _c("option", {
      domProps: {
        value: r.id
      }
    }, [_vm._v(_vm._s(r.name))]);
  }), 0), _vm._v(" "), _vm.errors && _vm.errors.entrance_id ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        The Entrance field is required.\n                    ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Slot Type")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot.slot_type_id,
      expression: "slot.slot_type_id"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.slot_type_id ? "is-invalid" : "",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.slot, "slot_type_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm._slot_types, function (r) {
    return _c("option", {
      domProps: {
        value: r.id
      }
    }, [_vm._v(_vm._s(r.name))]);
  }), 0), _vm._v(" "), _vm.errors && _vm.errors.slot_type_id ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        The Slot Type field is required.\n                    ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Distance")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.slot.distance,
      expression: "slot.distance"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.distance ? "is-invalid" : "",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.slot.distance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.slot, "distance", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.distance ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.distance[0]) + "\n                    ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-end"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6"
  }, [!_vm._slot ? _c("button", {
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
  }, [_vm._v("Slot Information")])]);
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
      href: "/slots"
    }
  }, [_vm._v("\n                    Cancel\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/pages/Settings/SlotsForm.vue":
/*!****************************************************!*\
  !*** ./resources/src/pages/Settings/SlotsForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotsForm.vue?vue&type=template&id=508893db& */ "./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db&");
/* harmony import */ var _SlotsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlotsForm.vue?vue&type=script&lang=js& */ "./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SlotsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Settings/SlotsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db&":
/*!***********************************************************************************!*\
  !*** ./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotsForm.vue?vue&type=template&id=508893db& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/SlotsForm.vue?vue&type=template&id=508893db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotsForm_vue_vue_type_template_id_508893db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);