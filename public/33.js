(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ServiceCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ServiceCard.vue */ "./resources/src/components/ServiceCard.vue");
/* harmony import */ var _components_SchedulePreview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SchedulePreview.vue */ "./resources/src/components/SchedulePreview.vue");
/* harmony import */ var _MyBookings_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyBookings.vue */ "./resources/src/user/MyBookings.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['_auth'],
  components: {
    ServiceCard: _components_ServiceCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SchedulePreview: _components_SchedulePreview_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MyBookings: _MyBookings_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      services: [],
      isLoading: false,
      laboratories: [],
      lab: '',
      service: '',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
  },
  mounted: function mounted() {
    this.getServices();
    this.getLaboratories();
  },
  methods: {
    hasTimeslot: function hasTimeslot(slot, index) {
      return slot.day.includes(index.toString());
    },
    labChange: function labChange() {
      this.service = this.lab.services[0];
      this.serviceChange();
    },
    serviceChange: function serviceChange() {
      this.$refs.schedPrev.getAvailablity(this.lab.id);
    },
    getServices: function getServices() {
      var _this = this;

      // this.$loader.show();
      axios.get('/services/list', {
        params: {
          active: 1
        }
      }).then(function (response) {
        if (response.data.status == "OK") {
          // this.$loader.hide();
          _this.services = response.data.data.data;
        }
      })["catch"](function () {
        // this.$loader.hide();
        _this.$alert('', 'Something went wrong', 'error');
      });
    },
    getLaboratories: function getLaboratories() {
      var _this2 = this;

      // this.$loader.show();
      axios.get('/laboratories/schedules', {
        params: {
          active: 1
        }
      }).then(function (response) {
        // this.$loader.hide();
        if (response.data.status == "OK") {
          _this2.laboratories = response.data.data;
          _this2.lab = _this2.laboratories[0];
          _this2.service = _this2.lab.services[0];
        }
      })["catch"](function () {
        // this.$loader.hide();
        _this2.$alert('', 'Something went wrong', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12", attrs: { id: "labServices" } }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body pt-0 px-5" }, [
          _vm.services.length > 0
            ? _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.services, function (s, i) {
                  return s.active == 1
                    ? _c(
                        "div",
                        { staticClass: " col-xl-4 col-md-6 col-sm-6" },
                        [
                          _c("ServiceCard", {
                            attrs: {
                              service: s,
                              index: i,
                              showButton: _vm._auth.role_id == 2,
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e()
                }),
                0
              )
            : _c(
                "div",
                { staticClass: "text-center p-4" },
                [_c("data-loader")],
                1
              ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-12", attrs: { id: "myBookings" } },
      [
        _c(
          "MyBookings",
          _vm._b(
            {},
            "MyBookings",
            {
              _auth: _vm._auth,
              _laboratories: _vm.laboratories,
              _services: _vm.services,
            },
            false
          )
        ),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-12", attrs: { id: "labSchedules" } }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body pt-0 px-5" },
          [
            _vm.laboratories.length > 0
              ? _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4 col-md-5" }, [
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "input-group-text",
                          attrs: { for: "inputGroupSelect01" },
                        },
                        [_vm._v("Laboratory")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.lab,
                              expression: "lab",
                            },
                          ],
                          staticClass: "form-control form-select",
                          attrs: { id: "inputGroupSelect01" },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.lab = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.labChange,
                            ],
                          },
                        },
                        _vm._l(_vm.laboratories, function (l) {
                          return _c("option", { domProps: { value: l } }, [
                            _vm._v(_vm._s(l.name)),
                          ])
                        }),
                        0
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-4" }, [
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "input-group-text",
                          attrs: { for: "inputGroupSelect02" },
                        },
                        [_vm._v("Service")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.service,
                              expression: "service",
                            },
                          ],
                          staticClass: "form-control form-select",
                          attrs: { id: "inputGroupSelect02" },
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.service = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function ($event) {
                                return _vm.serviceChange()
                              },
                            ],
                          },
                        },
                        _vm._l(_vm.lab.services, function (s) {
                          return _c("option", { domProps: { value: s } }, [
                            _vm._v(_vm._s(s.name)),
                          ])
                        }),
                        0
                      ),
                    ]),
                  ]),
                ])
              : _c(
                  "div",
                  { staticClass: "items-center" },
                  [_c("data-loader")],
                  1
                ),
            _vm._v(" "),
            _vm.laboratories.length > 0
              ? _c(
                  "SchedulePreview",
                  _vm._b(
                    { ref: "schedPrev" },
                    "SchedulePreview",
                    { laboratory: _vm.lab, service: _vm.service },
                    false
                  )
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header d-flex align-items-center" }, [
      _c("img", {
        staticClass: "mr-3",
        attrs: { src: "/imgs/lab.png", width: "40" },
      }),
      _vm._v(" "),
      _c("div", [
        _c("h2", { staticClass: "mb-0" }, [_vm._v("Lab Services")]),
        _vm._v(" "),
        _c("h5", { staticClass: "text-muted" }, [
          _vm._v("Select and click on the available services below."),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header d-flex align-items-center" }, [
      _c("img", {
        staticClass: "mr-3",
        attrs: { src: "/imgs/schedule.png", width: "40" },
      }),
      _vm._v(" "),
      _c("h2", { staticClass: "mb-0" }, [_vm._v("Lab Schedules")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/user/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/src/user/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=0affd4f3& */ "./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/src/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/user/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/src/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3&":
/*!*************************************************************************!*\
  !*** ./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=0affd4f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Dashboard.vue?vue&type=template&id=0affd4f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0affd4f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);