(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/auth/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/auth/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json");
var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json", 1);
/* harmony import */ var _landing_Navbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing/Navbar.vue */ "./resources/src/landing/Navbar.vue");
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
  components: {
    Navbar: _landing_Navbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      occupations: _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__.occupations,
      user: {
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        birth_date: null,
        sex: 'M',
        civil_status: '',
        occupation: '',
        prov_code: '517',
        citymun_code: '',
        brgy_code: '',
        street: '',
        mobile_no: '',
        role_id: 2
      },
      municipalities: [],
      provinces: [],
      barangays: [],
      errors: []
    };
  },
  mounted: function mounted() {
    this.getProvinces();
    this.getMunicipalities();
  },
  methods: {
    register: function register() {
      var _this = this;

      this.$confirm('', 'Proceed with the registration?', 'question').then(function () {
        _this.$loader.show();

        axios.post('/register', _this.user).then(function (response) {
          _this.$loader.hide();

          if (response.data.status == "OK") {
            window.location.href = response.data.data;
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
    munChange: function munChange() {
      this.user.brgy_code = '';
      this.getBarangays();
    },
    provChange: function provChange() {
      this.user.citymun_code = '';
      this.getMunicipalities();
    },
    getProvinces: function getProvinces() {
      var _this2 = this;

      this.$loader.show();
      axios.get('/provinces').then(function (response) {
        _this2.$loader.hide();

        if (response.data.status == "OK") {
          _this2.provinces = response.data.data;
        }
      })["catch"](function () {
        _this2.$loader.hide();

        _this2.$alert('', 'Something went wrong!', 'error');
      });
    },
    getMunicipalities: function getMunicipalities() {
      var _this3 = this;

      this.$loader.show();
      axios.get('/municipalities/' + this.user.prov_code).then(function (response) {
        _this3.$loader.hide();

        if (response.data.status == "OK") {
          _this3.municipalities = response.data.data;
        }
      })["catch"](function () {
        _this3.$loader.hide();

        _this3.$alert('', 'Something went wrong!', 'error');
      });
    },
    getBarangays: function getBarangays() {
      var _this4 = this;

      this.$loader.show();
      axios.get('/barangays/' + this.user.citymun_code).then(function (response) {
        _this4.$loader.hide();

        if (response.data.status == "OK") {
          _this4.barangays = response.data.data;
        }
      })["catch"](function () {
        _this4.$loader.hide();

        _this4.$alert('', 'Something went wrong!', 'error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "app-landing" },
      [_c("Navbar", { attrs: { hide_buttons: true } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "bg-app row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-10 col-md-10 px-0 my-6" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body px-5" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("First Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.first_name,
                        expression: "user.first_name",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.first_name ? "is-invalid" : "",
                    attrs: { type: "text" },
                    domProps: { value: _vm.user.first_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "first_name", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.first_name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                                    " +
                            _vm._s(_vm.errors.first_name[0]) +
                            "\r\n                                "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Middle Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.middle_name,
                        expression: "user.middle_name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.user.middle_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "middle_name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Last Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.last_name,
                        expression: "user.last_name",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.last_name ? "is-invalid" : "",
                    attrs: { type: "text" },
                    domProps: { value: _vm.user.last_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "last_name", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.last_name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                                    " +
                            _vm._s(_vm.errors.last_name[0]) +
                            "\r\n                                "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Suffix")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.suffix,
                        expression: "user.suffix",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Jr / Sr" },
                    domProps: { value: _vm.user.suffix },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "suffix", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Birthdate")]),
                    _vm._v(" "),
                    _c("VueDatePicker", {
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.birth_date ? "is-invalid" : "",
                      attrs: {
                        format: "DD MMMM YYYY",
                        placeholder: "DD MMMM YYYY",
                        clearable: true,
                        "visible-years-number": 80,
                      },
                      model: {
                        value: _vm.user.birth_date,
                        callback: function ($$v) {
                          _vm.$set(_vm.user, "birth_date", $$v)
                        },
                        expression: "user.birth_date",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.birth_date
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\r\n                                    " +
                              _vm._s(_vm.errors.birth_date[0]) +
                              "\r\n                                "
                          ),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Sex")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.sex,
                          expression: "user.sex",
                        },
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.user,
                            "sex",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "M" } }, [_vm._v("Male")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "F" } }, [
                        _vm._v("Female"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Civil Status")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.civil_status,
                          expression: "user.civil_status",
                        },
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.civil_status
                          ? "is-invalid"
                          : "",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.user,
                            "civil_status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("- Select Civil Status -"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "S" } }, [
                        _vm._v("SINGLE"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "M" } }, [
                        _vm._v("MARRIED"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "W" } }, [
                        _vm._v("WIDOWED"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "D" } }, [
                        _vm._v("SEPARATED"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.civil_status
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                                    " +
                            _vm._s(_vm.errors.civil_status[0]) +
                            "\r\n                                "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Occupation")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      class:
                        _vm.errors && _vm.errors.occupation ? "is-invalid" : "",
                      attrs: {
                        options: _vm.occupations,
                        placeholder: "- Select Occupation -",
                      },
                      model: {
                        value: _vm.user.occupation,
                        callback: function ($$v) {
                          _vm.$set(_vm.user, "occupation", $$v)
                        },
                        expression: "user.occupation",
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.occupation
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\r\n                                    " +
                              _vm._s(_vm.errors.occupation[0]) +
                              "\r\n                                "
                          ),
                        ])
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Province")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.prov_code,
                              expression: "user.prov_code",
                            },
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.errors && _vm.errors.prov_code
                              ? "is-invalid"
                              : "",
                          attrs: { disabled: "" },
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
                                _vm.$set(
                                  _vm.user,
                                  "prov_code",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.provChange,
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("- Select Province -"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.provinces, function (p) {
                            return _c(
                              "option",
                              { domProps: { value: p.provCode } },
                              [_vm._v(_vm._s(p.name))]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.prov_code
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\r\n                                            " +
                                _vm._s(_vm.errors.prov_code[0]) +
                                "\r\n                                        "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Municipality"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.citymun_code,
                              expression: "user.citymun_code",
                            },
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.errors && _vm.errors.citymun_code
                              ? "is-invalid"
                              : "",
                          attrs: { disabled: !_vm.user.prov_code },
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
                                _vm.$set(
                                  _vm.user,
                                  "citymun_code",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.munChange,
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("- Select Municipality -"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.municipalities, function (mun) {
                            return _c(
                              "option",
                              { domProps: { value: mun.citymunCode } },
                              [_vm._v(_vm._s(mun.name))]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.citymun_code
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\r\n                                            " +
                                _vm._s(_vm.errors.citymun_code[0]) +
                                "\r\n                                        "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Barangay")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.brgy_code,
                              expression: "user.brgy_code",
                            },
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.errors && _vm.errors.brgy_code
                              ? "is-invalid"
                              : "",
                          attrs: { disabled: !_vm.user.citymun_code },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.user,
                                "brgy_code",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("- Select Barangay -"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.barangays, function (brgy) {
                            return _c(
                              "option",
                              { domProps: { value: brgy.brgyCode } },
                              [_vm._v(_vm._s(brgy.name))]
                            )
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.brgy_code
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\r\n                                            " +
                                _vm._s(_vm.errors.brgy_code[0]) +
                                "\r\n                                        "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
                _c("div", {}, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Full Address"),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.street,
                          expression: "user.street",
                        },
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.street ? "is-invalid" : "",
                      attrs: {
                        rows: "6",
                        placeholder: "House No. / Street / Zone",
                      },
                      domProps: { value: _vm.user.street },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "street", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.street
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\r\n                                        " +
                              _vm._s(_vm.errors.street[0]) +
                              "\r\n                                    "
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Email Address"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email",
                      },
                    ],
                    staticClass: "form-control",
                    class: _vm.errors && _vm.errors.email ? "is-invalid" : "",
                    attrs: { type: "email" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.email
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                                    " +
                            _vm._s(_vm.errors.email[0]) +
                            "\r\n                                "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Mobile Number"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.mobile_no,
                        expression: "user.mobile_no",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.mobile_no ? "is-invalid" : "",
                    attrs: { type: "text" },
                    domProps: { value: _vm.user.mobile_no },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "mobile_no", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.mobile_no
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                                    " +
                            _vm._s(_vm.errors.mobile_no[0]) +
                            "\r\n                                "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row justify-content-end" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-12" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-block",
                      on: { click: _vm.register },
                    },
                    [
                      _vm._v(
                        "\r\n                                Register\r\n                            "
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-primary text-white" }, [
      _c("h2", { staticClass: "text-white" }, [
        _vm._v("LARAVUE-MPA Registration Form"),
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "text-white font-weight-normal" }, [
        _vm._v(
          "Let's get you all set up so you can verify your personal account and begin setting up your schedule."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Personal Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Address")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Contact Details")]),
      _vm._v(" "),
      _c("h5", { staticClass: "font-weight-normal text-muted mb-2" }, [
        _vm._v(
          "Notifications for appointment and reminders will be sent to this contact details."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-right" }, [
      _c("hr"),
      _vm._v(" "),
      _c("h5", { staticClass: "font-weight-normal text-muted mb-3" }, [
        _vm._v("Review and confirm the following before continuing"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/auth/Register.vue":
/*!*****************************************!*\
  !*** ./resources/src/auth/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=fa2fc352& */ "./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/src/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/auth/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/src/auth/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352&":
/*!************************************************************************!*\
  !*** ./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=fa2fc352& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/auth/Register.vue?vue&type=template&id=fa2fc352&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa2fc352___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);