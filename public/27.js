(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/UsersForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/admin/UsersForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json");
var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['_user', '_auth', '_laboratories', '_roles', '_otp_users'],
  data: function data() {
    return {
      occupations: _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__.occupations,
      user: {
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        birth_date: '',
        sex: 'M',
        occupation: '',
        prov_code: '517',
        citymun_code: '',
        brgy_code: '',
        street: '',
        mobile_no: '',
        password: '',
        confirm_password: '',
        default_password: ''
      },
      errors: [],
      provinces: [],
      municipalities: [],
      barangays: [],
      temp_password: false,
      password: {
        new_password: '',
        confirm_password: ''
      }
    };
  },
  computed: {
    getOTPUsers: function getOTPUsers() {
      var _this = this;

      if (this.user.laboratory_id) return this._otp_users.filter(function (i) {
        return i.laboratory_id == _this.user.laboratory_id;
      });else return this._otp_users;
    },
    getLabFacilities: function getLabFacilities() {
      var _this2 = this;

      if (this.user.laboratory_id) {
        var lab = this._laboratories.find(function (i) {
          return i.id == _this2.user.laboratory_id;
        });

        return lab.facilities;
      } else return [];
    }
  },
  created: function created() {
    if (this._user) {
      this.user = _objectSpread({}, this._user);
      this.user.password = '';
      this.user.confirm_password = '';
    }
  },
  mounted: function mounted() {
    this.getProvinces();
    this.getMunicipalities();
  },
  methods: {
    changeRole: function changeRole() {
      this.user.laboratory_id = null;
      this.user.facility_id = null;
      this.user.otp_receiver_id = null;
    },
    checkFacilityUser: function checkFacilityUser(user) {
      return user.role_id == 9;
    },
    checkLaboratoryUser: function checkLaboratoryUser(user) {
      return user.role_id > 2 && user.role_id != 13;
    },
    checkNonUser: function checkNonUser(user) {
      return user.role_id == 3 || user.role_id == 4;
    },
    generateTempPassword: function generateTempPassword() {
      this.temp_password = true;
      this.user.default_password = this.randomString(6);
    },
    randomString: function randomString(len) {
      var p = "abcdefghijklmnopqrstuvwxyz0123456789";
      return _toConsumableArray(Array(len)).reduce(function (a) {
        return a + p[~~(Math.random() * p.length)];
      }, '');
    },
    provChange: function provChange() {
      this.user.citymun_code = '';
      this.user.brgy_code = '';
      this.getMunicipalities();
    },
    getProvinces: function getProvinces() {
      var _this3 = this;

      this.$loader.show();
      axios.get('/provinces').then(function (response) {
        _this3.$loader.hide();

        if (response.data.status == "OK") {
          _this3.provinces = response.data.data;
        }
      })["catch"](function () {
        _this3.$loader.hide();

        _this3.$alert('', 'Something went wrong!', 'error');
      });
    },
    munChange: function munChange() {
      this.user.brgy_code = '';
      this.getBarangays();
    },
    getMunicipalities: function getMunicipalities() {
      var _this4 = this;

      if (this.user.prov_code) {
        this.$loader.show();
        axios.get('/municipalities/' + this.user.prov_code).then(function (response) {
          _this4.$loader.hide();

          if (response.data.status == "OK") {
            _this4.municipalities = response.data.data;
            if (_this4.user.brgy_code) _this4.getBarangays();
          }
        })["catch"](function () {
          _this4.$loader.hide();

          _this4.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    getBarangays: function getBarangays() {
      var _this5 = this;

      if (this.user.citymun_code) {
        this.$loader.show();
        axios.get('/barangays/' + this.user.citymun_code).then(function (response) {
          _this5.$loader.hide();

          if (response.data.status == "OK") {
            _this5.barangays = response.data.data;
          }
        })["catch"](function () {
          _this5.$loader.hide();

          _this5.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    createUser: function createUser() {
      var _this6 = this;

      if (!this.temp_password) {
        if (this.user.password.length == 0) {
          this.$alert('', 'No Password!', 'error');
          return;
        }

        if (this.user.password != this.user.confirm_password) {
          this.$alert('', 'Password and Confirm Password does not match!', 'error');
          return;
        }

        this.user.default_password = this.user.password;
      } else {
        this.user.password = this.user.default_password;
        this.user.confirm_password = this.user.default_password;
      }

      this.$confirm('', 'Are you sure you want to create user?', 'question').then(function () {
        _this6.$loader.show();

        _this6.errors = [];
        axios.post('/user', _this6.user).then(function (response) {
          _this6.$loader.hide();

          if (response.data.status == "OK") {
            _this6.$alert('', 'User was successfully created', 'success').then(function () {
              window.location.href = "/users";
            });
          } else {
            _this6.$alert('', response.data.message, 'error');

            _this6.errors = response.data.errors;
          }
        })["catch"](function () {
          _this6.$loader.hide();

          _this6.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updateUser: function updateUser() {
      var _this7 = this;

      this.$confirm('', 'Are you sure you want to update user?', 'question').then(function () {
        _this7.$loader.show();

        _this7.errors = [];
        var form = _this7.user;
        form.change_password = _this7.password;
        axios.patch('/user/' + _this7.user.id, form).then(function (response) {
          _this7.$loader.hide();

          if (response.data.status == "OK") {
            _this7.$alert('', 'User was successfully updated', 'success').then(function () {
              window.location.href = "/users";
            });
          } else {
            _this7.$alert('', response.data.message, 'error');

            _this7.errors = response.data.errors;
          }
        })["catch"](function () {
          _this7.$loader.hide();

          _this7.$alert('', 'Something went wrong', 'error');
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header bg-primary text-white" }, [
      _vm._user
        ? _c("h2", { staticClass: "text-white" }, [_vm._v("Edit User")])
        : _c("h2", { staticClass: "text-white" }, [_vm._v("New User")]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body px-5" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
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
              class: _vm.errors && _vm.errors.first_name ? "is-invalid" : "",
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
                    "\r\n                        " +
                      _vm._s(_vm.errors.first_name[0]) +
                      "\r\n                    "
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
              class: _vm.errors && _vm.errors.last_name ? "is-invalid" : "",
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
                    "\r\n                        " +
                      _vm._s(_vm.errors.last_name[0]) +
                      "\r\n                    "
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
              attrs: { type: "text" },
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
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Birthdate")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.birth_date,
                  expression: "user.birth_date",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.birth_date ? "is-invalid" : "",
              attrs: { type: "date" },
              domProps: { value: _vm.user.birth_date },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "birth_date", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.birth_date
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\r\n                        " +
                      _vm._s(_vm.errors.birth_date[0]) +
                      "\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
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
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "M" } }, [_vm._v("Male")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "F" } }, [_vm._v("Female")]),
              ]
            ),
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
                class: _vm.errors && _vm.errors.occupation ? "is-invalid" : "",
                attrs: { options: _vm.occupations },
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
                      "\r\n                        " +
                        _vm._s(_vm.errors.occupation[0]) +
                        "\r\n                    "
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
            _c("label", { attrs: { for: "" } }, [_vm._v("Email Address")]),
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
                    "\r\n                        " +
                      _vm._s(_vm.errors.email[0]) +
                      "\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _vm._m(1),
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
                      _vm.errors && _vm.errors.prov_code ? "is-invalid" : "",
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
                      return _c("option", { domProps: { value: p.provCode } }, [
                        _vm._v(_vm._s(p.name)),
                      ])
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors && _vm.errors.prov_code
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                                " +
                          _vm._s(_vm.errors.prov_code[0]) +
                          "\r\n                            "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Municipality")]),
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
                      _vm.errors && _vm.errors.citymun_code ? "is-invalid" : "",
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
                        "\r\n                                " +
                          _vm._s(_vm.errors.citymun_code[0]) +
                          "\r\n                            "
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
                      _vm.errors && _vm.errors.brgy_code ? "is-invalid" : "",
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
                        "\r\n                                " +
                          _vm._s(_vm.errors.brgy_code[0]) +
                          "\r\n                            "
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
              _c("label", { attrs: { for: "" } }, [_vm._v("Full Address")]),
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
                class: _vm.errors && _vm.errors.street ? "is-invalid" : "",
                attrs: { rows: "6", placeholder: "House No. / Street / Zone" },
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
                      "\r\n                            " +
                        _vm._s(_vm.errors.street[0]) +
                        "\r\n                        "
                    ),
                  ])
                : _vm._e(),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Contact Number")]),
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
                class: _vm.errors && _vm.errors.mobile_no ? "is-invalid" : "",
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
                      "\r\n                        " +
                        _vm._s(_vm.errors.mobile_no[0]) +
                        "\r\n                    "
                    ),
                  ])
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Username")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.username,
                    expression: "user.username",
                  },
                ],
                staticClass: "form-control",
                class: _vm.errors && _vm.errors.username ? "is-invalid" : "",
                attrs: { type: "text" },
                domProps: { value: _vm.user.username },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "username", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.username
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\r\n                        " +
                        _vm._s(_vm.errors.username[0]) +
                        "\r\n                    "
                    ),
                  ])
                : _vm._e(),
            ]),
          ]),
          _vm._v(" "),
          !_vm._user
            ? [
                !_vm.temp_password
                  ? [
                      _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Password"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                            ],
                            staticClass: "form-control",
                            class:
                              _vm.errors && _vm.errors.password
                                ? "is-invalid"
                                : "",
                            attrs: { type: "password" },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "text-primary cursor-pointer",
                              on: { click: _vm.generateTempPassword },
                            },
                            [
                              _c("i", { staticClass: "fa fa-sync mr-2" }),
                              _vm._v("Generate Password"),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.password
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(_vm.errors.password[0]) +
                                    "\r\n                            "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Confirm Password"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.confirm_password,
                                expression: "user.confirm_password",
                              },
                            ],
                            staticClass: "form-control",
                            class:
                              _vm.errors && _vm.errors.confirm_password
                                ? "is-invalid"
                                : "",
                            attrs: { type: "password" },
                            domProps: { value: _vm.user.confirm_password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "confirm_password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.confirm_password
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(_vm.errors.confirm_password[0]) +
                                    "\r\n                            "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]
                  : [
                      _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Temporary Password"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.default_password,
                                expression: "user.default_password",
                              },
                            ],
                            staticClass: "form-control",
                            class:
                              _vm.errors && _vm.errors.default_password
                                ? "is-invalid"
                                : "",
                            attrs: { type: "text" },
                            domProps: { value: _vm.user.default_password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "default_password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "text-success cursor-pointer",
                              on: { click: _vm.generateTempPassword },
                            },
                            [
                              _c("i", { staticClass: "fa fa-random mr-2" }),
                              _vm._v("Regenerate Password"),
                            ]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              staticClass: "text-dark cursor-pointer",
                              on: {
                                click: function ($event) {
                                  _vm.temp_password = false
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "fa fa-times mr-2" }),
                              _vm._v("Cancel"),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.errors && _vm.errors.default_password
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\r\n                                " +
                                    _vm._s(_vm.errors.default_password[0]) +
                                    "\r\n                            "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ],
              ]
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Role")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.role_id,
                    expression: "user.role_id",
                  },
                ],
                staticClass: "form-control",
                class: _vm.errors && _vm.errors.role_id ? "is-invalid" : "",
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
                        "role_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function ($event) {
                      return _vm.changeRole()
                    },
                  ],
                },
              },
              _vm._l(_vm._roles, function (r) {
                return _c("option", { domProps: { value: r.id } }, [
                  _vm._v(_vm._s(r.name)),
                ])
              }),
              0
            ),
            _vm._v(" "),
            _vm.errors && _vm.errors.role_id
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\r\n                        The role field is required.\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _vm.checkLaboratoryUser(_vm.user)
          ? _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Laboratory")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.laboratory_id,
                        expression: "user.laboratory_id",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { disabled: _vm._auth.laboratory_id },
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
                          "laboratory_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  _vm._l(_vm._laboratories, function (h) {
                    return _c("option", { domProps: { value: h.id } }, [
                      _vm._v(_vm._s(h.name)),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _vm.errors && _vm.errors.laboratory_id
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.laboratory_id[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.checkFacilityUser(_vm.user)
          ? _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Facility")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.facility_id,
                        expression: "user.facility_id",
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
                          "facility_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  _vm._l(_vm.getLabFacilities, function (h) {
                    return _c("option", { domProps: { value: h.id } }, [
                      _vm._v(_vm._s(h.name)),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _vm.errors && _vm.errors.laboratory_id
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.laboratory_id[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.checkNonUser(_vm.user)
          ? _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("OTP Receiver")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.otp_receiver_id,
                        expression: "user.otp_receiver_id",
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
                          "otp_receiver_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _vm._user
                      ? _c("option", { domProps: { value: _vm._user.id } }, [
                          _vm._v("Self"),
                        ])
                      : _c("option", { domProps: { value: "self" } }, [
                          _vm._v("Self"),
                        ]),
                    _vm._v(" "),
                    _vm._l(_vm.getOTPUsers, function (h) {
                      return _c("option", { domProps: { value: h.id } }, [
                        _vm._v(_vm._s(h.full_name)),
                      ])
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors && _vm.errors.otp_receiver_id
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.otp_receiver_id[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _vm._user && _vm._auth.role_id == 1
        ? _c("div", [
            _c("hr", { staticClass: "my-3" }),
            _vm._v(" "),
            _c("h2", [_vm._v("Change Password")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("New Password")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password.new_password,
                        expression: "password.new_password",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.new_password ? "is-invalid" : "",
                    attrs: { type: "password" },
                    domProps: { value: _vm.password.new_password },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.password,
                          "new_password",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.new_password
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                            " +
                            _vm._s(_vm.errors.new_password[0]) +
                            "\r\n                        "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Confirm Password"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password.confirm_password,
                        expression: "password.confirm_password",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.confirm_password
                        ? "is-invalid"
                        : "",
                    attrs: { type: "password" },
                    domProps: { value: _vm.password.confirm_password },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.password,
                          "confirm_password",
                          $event.target.value
                        )
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm.errors && _vm.errors.confirm_password
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\r\n                            " +
                            _vm._s(_vm.errors.confirm_password[0]) +
                            "\r\n                        "
                        ),
                      ])
                    : _vm._e(),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-end" }, [
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6" }, [
          !_vm._user
            ? _c(
                "button",
                {
                  staticClass: "btn btn-block btn-primary",
                  on: { click: _vm.createUser },
                },
                [_vm._v("\r\n                    Save\r\n                ")]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-block btn-primary",
                  on: { click: _vm.updateUser },
                },
                [_vm._v("\r\n                    Update\r\n                ")]
              ),
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
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("User Information")]),
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
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Account Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 text-right" }, [_c("hr")])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6" }, [
      _c(
        "a",
        { staticClass: "btn btn-block mb-2", attrs: { href: "/users" } },
        [_vm._v("\r\n                    Cancel\r\n                ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/admin/UsersForm.vue":
/*!*******************************************!*\
  !*** ./resources/src/admin/UsersForm.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=template&id=1cb98cd9& */ "./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9&");
/* harmony import */ var _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=script&lang=js& */ "./resources/src/admin/UsersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/admin/UsersForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/admin/UsersForm.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/src/admin/UsersForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UsersForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/UsersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9&":
/*!**************************************************************************!*\
  !*** ./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UsersForm.vue?vue&type=template&id=1cb98cd9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/UsersForm.vue?vue&type=template&id=1cb98cd9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_1cb98cd9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);