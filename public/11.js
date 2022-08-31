(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['_auth', '_roles', '_entrances', '_user'],
  data: function data() {
    return {
      user: {
        name: '',
        username: '',
        role_id: '',
        entrance_id: '',
        password: '',
        confirm_password: '',
        default_password: ''
      },
      errors: [],
      temp_password: false,
      password: {
        new_password: '',
        confirm_password: ''
      }
    };
  },
  computed: {},
  created: function created() {
    if (this._user) {
      this.user = _objectSpread({}, this._user);
      this.user.password = '';
      this.user.confirm_password = '';
    } else {
      this.changeRole();
    }
  },
  mounted: function mounted() {},
  methods: {
    changeRole: function changeRole() {
      this.user.entrance_id = null;
    },
    checkEntranceUser: function checkEntranceUser(user) {
      return user.role_id == 2;
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
    createUser: function createUser() {
      var _this = this;

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
        _this.$loader.show();

        _this.errors = [];
        axios.post('/user', _this.user).then(function (response) {
          _this.$loader.hide();

          if (response.data.status == "OK") {
            _this.$alert('', 'User was successfully created', 'success').then(function () {
              window.location.href = "/users";
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
    updateUser: function updateUser() {
      var _this2 = this;

      this.$confirm('', 'Are you sure you want to update user?', 'question').then(function () {
        _this2.$loader.show();

        _this2.errors = [];
        var form = _this2.user;
        form.change_password = _this2.password;
        axios.patch('/user/' + _this2.user.id, form).then(function (response) {
          _this2.$loader.hide();

          if (response.data.status == "OK") {
            _this2.$alert('', 'User was successfully updated', 'success').then(function () {
              window.location.href = "/users";
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4& ***!
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
  }, [_vm._user ? _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("Edit User")]) : _c("h2", {
    staticClass: "text-white"
  }, [_vm._v("New User")])]), _vm._v(" "), _c("div", {
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
      value: _vm.user.name,
      expression: "user.name"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.name ? "is-invalid" : "",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.name[0]) + "\n                    ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Username")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.username,
      expression: "user.username"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.username ? "is-invalid" : "",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.username
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "username", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.username ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.username[0]) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), !_vm._user ? [!_vm.temp_password ? [_c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.password,
      expression: "user.password"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.password ? "is-invalid" : "",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.user.password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-primary cursor-pointer",
    on: {
      click: _vm.generateTempPassword
    }
  }, [_c("i", {
    staticClass: "fa fa-sync mr-2"
  }), _vm._v("Generate Password")]), _vm._v(" "), _vm.errors && _vm.errors.password ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                                " + _vm._s(_vm.errors.password[0]) + "\n                            ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.confirm_password,
      expression: "user.confirm_password"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.confirm_password ? "is-invalid" : "",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.user.confirm_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "confirm_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.confirm_password ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                                " + _vm._s(_vm.errors.confirm_password[0]) + "\n                            ")]) : _vm._e()])])] : [_c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Temporary Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.default_password,
      expression: "user.default_password"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.default_password ? "is-invalid" : "",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.user.default_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.user, "default_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-success cursor-pointer",
    on: {
      click: _vm.generateTempPassword
    }
  }, [_c("i", {
    staticClass: "fa fa-random mr-2"
  }), _vm._v("Regenerate Password")]), _c("br"), _vm._v(" "), _c("small", {
    staticClass: "text-dark cursor-pointer",
    on: {
      click: function click($event) {
        _vm.temp_password = false;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times mr-2"
  }), _vm._v("Cancel")]), _vm._v(" "), _vm.errors && _vm.errors.default_password ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                                " + _vm._s(_vm.errors.default_password[0]) + "\n                            ")]) : _vm._e()])])]] : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.role_id,
      expression: "user.role_id"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.role_id ? "is-invalid" : "",
    attrs: {
      disabled: _vm.user.role_id == 1 && _vm.user.id == 1
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.user, "role_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeRole();
      }]
    }
  }, _vm._l(_vm._roles, function (r) {
    return _c("option", {
      domProps: {
        value: r.id
      }
    }, [_vm._v(_vm._s(r.name))]);
  }), 0), _vm._v(" "), _vm.errors && _vm.errors.role_id ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        The role field is required.\n                    ")]) : _vm._e()])]), _vm._v(" "), _vm.checkEntranceUser(_vm.user) ? _c("div", {
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
      value: _vm.user.entrance_id,
      expression: "user.entrance_id"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: _vm._auth.entrance_id
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.user, "entrance_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm._entrances, function (h) {
    return _c("option", {
      domProps: {
        value: h.id
      }
    }, [_vm._v(_vm._s(h.name))]);
  }), 0), _vm._v(" "), _vm.errors && _vm.errors.entrance_id ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                        " + _vm._s(_vm.errors.entrance_id[0]) + "\n                    ")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _vm._user && _vm._auth.role_id == 1 ? _c("div", [_c("hr", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("h2", [_vm._v("Change Password")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("New Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password.new_password,
      expression: "password.new_password"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.new_password ? "is-invalid" : "",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password.new_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.password, "new_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.new_password ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.new_password[0]) + "\n                        ")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password.confirm_password,
      expression: "password.confirm_password"
    }],
    staticClass: "form-control",
    "class": _vm.errors && _vm.errors.confirm_password ? "is-invalid" : "",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password.confirm_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.password, "confirm_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.confirm_password ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.confirm_password[0]) + "\n                        ")]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-end"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6"
  }, [!_vm._user ? _c("button", {
    staticClass: "btn btn-block btn-primary",
    on: {
      click: _vm.createUser
    }
  }, [_vm._v("\n                    Save\n                ")]) : _c("button", {
    staticClass: "btn btn-block btn-primary",
    on: {
      click: _vm.updateUser
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
  }, [_vm._v("User Information")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12"
  }, [_c("h2", {
    staticClass: "mb-2"
  }, [_vm._v("Account Information")])]);
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
      href: "/users"
    }
  }, [_vm._v("\n                    Cancel\n                ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/pages/Settings/UsersForm.vue":
/*!****************************************************!*\
  !*** ./resources/src/pages/Settings/UsersForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=template&id=ac2f6ea4& */ "./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4&");
/* harmony import */ var _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=script&lang=js& */ "./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/pages/Settings/UsersForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/UsersForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4&":
/*!***********************************************************************************!*\
  !*** ./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersForm.vue?vue&type=template&id=ac2f6ea4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/pages/Settings/UsersForm.vue?vue&type=template&id=ac2f6ea4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_ac2f6ea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);