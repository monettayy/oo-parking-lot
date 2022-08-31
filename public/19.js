(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Book.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json");
var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['_auth', '_service', '_laboratories'],
  data: function data() {
    return {
      occupations: _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__.occupations,
      booking: {
        user_id: this._auth.id,
        guest_id: this._auth.id,
        service_id: this._service.id,
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        prov_code: 517,
        citymun_code: '',
        brgy_code: '',
        sex: '',
        occupation: '',
        civil_status: '',
        mobile_no: '',
        birth_date: '',
        relationship: '',
        preferred_date: null,
        preferred_time: '',
        laboratory_id: '',
        vaccine_detail: {
          fdose_brand: '',
          fdose_date: null,
          fdose_facility: '',
          fdose_region: '',
          fdose_adverse: 0,
          sdose_brand: '',
          sdose_date: null,
          sdose_facility: '',
          sdose_region: '',
          sdose_adverse: 0,
          bdose_brand: '',
          bdose_date: null,
          bdose_facility: '',
          bdose_region: '',
          bdose_adverse: 0
        },
        exposure_detail: {
          healthcare_worker: 0,
          worker_facility: '',
          worker_location: '',
          rof: 0,
          ofw: 0,
          ofw_passport_no: '',
          foreigner: 0,
          foreigner_country: '',
          foreigner_passport_no: '',
          lsi: 0,
          lsi_type: 0,
          lsi_origin: '',
          closed: 0,
          closed_type: '',
          closed_name: ''
        }
      },
      provinces: [],
      municipalities: [],
      barangays: [],
      timeslots: [],
      errors: [],
      invalid_time: false,
      available_cnt: 0,
      booked_cnt: 0,
      minDate: moment().format('YYYY-MM-DD')
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.bookingChanged();

    if (this._laboratories.length == 1) {
      this.booking.laboratory_id = this._laboratories[0].id;
    }

    var urlQuery = new URL(window.location.href);

    if (urlQuery.searchParams.get("date")) {
      this.booking.preferred_date = urlQuery.searchParams.get("date");
    }

    if (urlQuery.searchParams.get("laboratory_id")) {
      this.booking.laboratory_id = urlQuery.searchParams.get("laboratory_id");
    }

    if (urlQuery.searchParams.get("time")) {
      this.booking.preferred_time = urlQuery.searchParams.get("time");
      this.getTimeslots(function () {
        _this.booking.preferred_time = urlQuery.searchParams.get("time");
      });
    }
  },
  computed: {},
  methods: {
    bookingForChange: function bookingForChange(value) {
      this.booking.guest_id = value;
      this.bookingChanged(value);
    },
    timeChange: function timeChange() {
      var _this2 = this;

      var index = this.timeslots.findIndex(function (x) {
        return x.time === _this2.booking.preferred_time;
      });

      if (index > -1) {
        this.available_cnt = this.timeslots[index].available;
        this.booked_cnt = this.timeslots[index].booked;
        this.invalid_time = this.timeslots[index].available <= 0;
      } else {
        this.available_cnt = 0;
        this.booked_cnt = 0;
        this.invalid_time = false;
      }
    },
    getTimeslots: function getTimeslots() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.available_cnt = 0;
      this.booked_cnt = 0;
      this.invalid_time = false;
      if (!callback) this.booking.preferred_time = '';
      this.timeChange();

      if (this.booking.laboratory_id && this.booking.preferred_date) {
        this.$loader.show();
        axios.get('/timeslots/' + this.booking.laboratory_id, {
          params: {
            schedule_date: this.booking.preferred_date
          }
        }).then(function (response) {
          _this3.$loader.hide();

          if (response.data.status == "OK") {
            _this3.timeslots = response.data.data;
          }
        })["catch"](function () {
          _this3.$loader.hide();

          _this3.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    provChange: function provChange() {
      this.booking.citymun_code = '';
      this.booking.brgy_code = '';
      this.getMunicipalities();
    },
    getProvinces: function getProvinces() {
      var _this4 = this;

      this.$loader.show();
      axios.get('/provinces').then(function (response) {
        _this4.$loader.hide();

        if (response.data.status == "OK") {
          _this4.provinces = response.data.data;
        }
      })["catch"](function () {
        _this4.$loader.hide();

        _this4.$alert('', 'Something went wrong!', 'error');
      });
    },
    munChange: function munChange(event) {
      this.booking.brgy_code = '';
      this.getBarangays();
    },
    getMunicipalities: function getMunicipalities() {
      var _this5 = this;

      if (this.booking.prov_code) {
        this.$loader.show();
        axios.get('/municipalities/' + this.booking.prov_code).then(function (response) {
          _this5.$loader.hide();

          if (response.data.status == "OK") {
            _this5.municipalities = response.data.data;
            if (_this5.booking.brgy_code) _this5.getBarangays();
          }
        })["catch"](function () {
          _this5.$loader.hide();

          _this5.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    getBarangays: function getBarangays() {
      var _this6 = this;

      if (this.booking.citymun_code) {
        this.$loader.show();
        axios.get('/barangays/' + this.booking.citymun_code).then(function (response) {
          _this6.$loader.hide();

          if (response.data.status == "OK") {
            _this6.barangays = response.data.data;
          }
        })["catch"](function () {
          _this6.$loader.hide();

          _this6.$alert('', 'Something went wrong!', 'error');
        });
      }
    },
    bookingChanged: function bookingChanged() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.booking.user_id == this.booking.guest_id) {
        this.booking.relationship = 'SELF';
        this.booking.first_name = this._auth.first_name;
        this.booking.middle_name = this._auth.middle_name;
        this.booking.last_name = this._auth.last_name;
        this.booking.sex = this._auth.sex;
        this.booking.occupation = this._auth.occupation;
        this.booking.prov_code = this._auth.prov_code;
        this.booking.citymun_code = this._auth.citymun_code;
        this.booking.brgy_code = this._auth.brgy_code;
        this.booking.street = this._auth.street;
        this.booking.civil_status = this._auth.civil_status;
        this.booking.suffix = this._auth.suffix;
        this.booking.mobile_no = this._auth.mobile_no;
        this.booking.birth_date = this._auth.birth_date;
      } else {
        this.booking.relationship = '';
        this.booking.first_name = '';
        this.booking.middle_name = '';
        this.booking.last_name = '';
        this.booking.sex = 'M';
        this.booking.occupation = '';
        this.booking.civil_status = '';
        this.booking.suffix = '';
        this.booking.mobile_no = '';
        this.booking.birth_date = null;
        this.booking.prov_code = 517;
        this.booking.citymun_code = '';
        this.booking.brgy_code = '';
        this.booking.street = '';
      }

      this.getProvinces();
      this.getMunicipalities();
    },
    submit: function submit() {
      var _this7 = this;

      this.$confirm('', 'Are you sure you want to submit this booking information for ' + this._service.name + ' Test ?', 'question').then(function () {
        _this7.$loader.show();

        _this7.errors = [];
        axios.post('/book/' + _this7._service.code, {
          booking: _this7.booking
        }).then(function (response) {
          _this7.$loader.hide();

          if (response.data.status == "OK") {
            _this7.$alert('', 'Booking for ' + _this7._service.name + ' Test was successfully submitted. You will receive an sms confirmation within 24hrs containing your confirmed schedule.', 'success').then(function () {
              window.location.href = "/dashboard";
            });
          } else {
            _this7.errors = response.data.errors;

            _this7.$alert('', response.data.message, 'error');
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bookfor-container[data-v-20836eda]{\r\n    display: flex;\n}\n@media (max-width:600px) {\n.bookfor-container[data-v-20836eda]{\r\n        display: block !important;\n}\n.bookfor[data-v-20836eda]{\r\n        width: 100% !important;\r\n        margin:5px 0;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header bg-primary text-white row mx-0" }, [
      _c("div", { staticClass: "col-lg-6 col-md-12 col-12" }, [
        _c("h3", { staticClass: "text-white" }, [
          _vm._v("CamSur Diagnostic Lab Book Schedule"),
        ]),
        _vm._v(" "),
        _c("h1", { staticClass: "text-white font-weight-bolder" }, [
          _vm._v("You are booking for " + _vm._s(_vm._service.name)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-6 col-md-12 col-12" }, [
        _c("div", { staticClass: "text-right service-img" }, [
          _c("img", {
            staticStyle: { "max-height": "100px" },
            attrs: { src: _vm._service.thumbnail, alt: "" },
          }),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body px-5" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-12 bookfor-container" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-lg py-2 bookfor",
              staticStyle: { width: "140px" },
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.bookingForChange(_vm._auth.id)
                },
              },
            },
            [
              _c("div", { staticClass: "custom-control custom-radio" }, [
                _c("input", {
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    id: "customRadio1",
                    name: "customRadio",
                  },
                  domProps: { checked: _vm.booking.guest_id == _vm._auth.id },
                  on: {
                    change: function ($event) {
                      return _vm.bookingForChange(_vm._auth.id)
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "customRadio1" },
                  },
                  [_vm._v("Myself")]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-lg py-2 bookfor",
              staticStyle: { width: "170px" },
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.bookingForChange("")
                },
              },
            },
            [
              _c("div", { staticClass: "custom-control custom-radio" }, [
                _c("input", {
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    id: "customRadio2",
                    name: "customRadio",
                  },
                  domProps: { checked: _vm.booking.guest_id == "" },
                  on: {
                    change: function ($event) {
                      return _vm.bookingForChange("")
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "customRadio2" },
                  },
                  [_vm._v("Other Person")]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm.booking.user_id != _vm.booking.guest_id
            ? _c("div", { staticClass: "bookfor" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.relationship,
                      expression: "booking.relationship",
                    },
                  ],
                  staticClass: "form-control",
                  class:
                    _vm.errors && _vm.errors.relationship ? "is-invalid" : "",
                  attrs: {
                    type: "text",
                    placeholder: "Relationship",
                    disabled: _vm.booking.user_id == _vm.booking.guest_id,
                  },
                  domProps: { value: _vm.booking.relationship },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.booking, "relationship", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.errors && _vm.errors.relationship
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.relationship[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row mt-4" },
        [
          _vm.booking.user_id != _vm.booking.guest_id
            ? [
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
                          value: _vm.booking.first_name,
                          expression: "booking.first_name",
                        },
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.first_name ? "is-invalid" : "",
                      attrs: {
                        type: "text",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.first_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.booking,
                            "first_name",
                            $event.target.value
                          )
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
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Middle Name"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.booking.middle_name,
                          expression: "booking.middle_name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.middle_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.booking,
                            "middle_name",
                            $event.target.value
                          )
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
                          value: _vm.booking.last_name,
                          expression: "booking.last_name",
                        },
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.last_name ? "is-invalid" : "",
                      attrs: {
                        type: "text",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.last_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.booking,
                            "last_name",
                            $event.target.value
                          )
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.last_name
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\r\n                    " +
                              _vm._s(_vm.errors.last_name[0]) +
                              "\r\n                "
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
                          value: _vm.booking.suffix,
                          expression: "booking.suffix",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Jr / Sr",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.suffix },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.booking, "suffix", $event.target.value)
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
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Birth Date"),
                      ]),
                      _vm._v(" "),
                      _c("VueDatePicker", {
                        staticClass: "form-control",
                        class:
                          _vm.errors && _vm.errors.birth_date
                            ? "is-invalid"
                            : "",
                        attrs: {
                          format: "MMMM DD, YYYY",
                          placeholder: "Choose Date",
                          clearable: true,
                          "visible-years-number": 80,
                          disabled: _vm.booking.user_id == _vm.booking.guest_id,
                        },
                        model: {
                          value: _vm.booking.birth_date,
                          callback: function ($$v) {
                            _vm.$set(_vm.booking, "birth_date", $$v)
                          },
                          expression: "booking.birth_date",
                        },
                      }),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.birth_date
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\r\n                    " +
                                _vm._s(_vm.errors.birth_date[0]) +
                                "\r\n                "
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
                            value: _vm.booking.sex,
                            expression: "booking.sex",
                          },
                        ],
                        staticClass: "form-control",
                        class: _vm.errors && _vm.errors.sex ? "is-invalid" : "",
                        attrs: {
                          disabled: _vm.booking.user_id == _vm.booking.guest_id,
                        },
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
                              _vm.booking,
                              "sex",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "M" } }, [
                          _vm._v("MALE"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "F" } }, [
                          _vm._v("FEMALE"),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.sex
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\r\n                    " +
                              _vm._s(_vm.errors.sex[0]) +
                              "\r\n                "
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Civil Status"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.booking.civil_status,
                            expression: "booking.civil_status",
                          },
                        ],
                        staticClass: "form-control",
                        class:
                          _vm.errors && _vm.errors.civil_status
                            ? "is-invalid"
                            : "",
                        attrs: {
                          disabled: _vm.booking.user_id == _vm.booking.guest_id,
                        },
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
                              _vm.booking,
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
                            "\r\n                    " +
                              _vm._s(_vm.errors.civil_status[0]) +
                              "\r\n                "
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
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Occupation"),
                      ]),
                      _vm._v(" "),
                      _c("multiselect", {
                        class:
                          _vm.errors && _vm.errors.occupation
                            ? "is-invalid"
                            : "",
                        attrs: {
                          options: _vm.occupations,
                          disabled: _vm.booking.user_id == _vm.booking.guest_id,
                          placeholder: "- Select Occupation -",
                        },
                        model: {
                          value: _vm.booking.occupation,
                          callback: function ($$v) {
                            _vm.$set(_vm.booking, "occupation", $$v)
                          },
                          expression: "booking.occupation",
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
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Province"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.booking.prov_code,
                                expression: "booking.prov_code",
                              },
                            ],
                            staticClass: "form-control",
                            class:
                              _vm.errors && _vm.errors.prov_code
                                ? "is-invalid"
                                : "",
                            attrs: {
                              disabled:
                                _vm.booking.user_id == _vm.booking.guest_id,
                              disabled: "",
                            },
                            on: {
                              change: [
                                function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.booking,
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
                                value: _vm.booking.citymun_code,
                                expression: "booking.citymun_code",
                              },
                            ],
                            staticClass: "form-control",
                            class:
                              _vm.errors && _vm.errors.citymun_code
                                ? "is-invalid"
                                : "",
                            attrs: {
                              disabled:
                                _vm.booking.user_id == _vm.booking.guest_id ||
                                !_vm.booking.prov_code,
                            },
                            on: {
                              change: [
                                function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.booking,
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
                    _c(
                      "div",
                      { staticClass: "col-lg-12 col-md-12 col-sm-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Barangay"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.booking.brgy_code,
                                  expression: "booking.brgy_code",
                                },
                              ],
                              staticClass: "form-control",
                              class:
                                _vm.errors && _vm.errors.brgy_code
                                  ? "is-invalid"
                                  : "",
                              attrs: {
                                disabled:
                                  _vm.booking.user_id == _vm.booking.guest_id ||
                                  !_vm.booking.citymun_code,
                              },
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.booking,
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
                      ]
                    ),
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
                            value: _vm.booking.street,
                            expression: "booking.street",
                          },
                        ],
                        staticClass: "form-control",
                        class:
                          _vm.errors && _vm.errors.street ? "is-invalid" : "",
                        attrs: {
                          rows: "6",
                          placeholder: "House No. / Street / Zone",
                          disabled: _vm.booking.user_id == _vm.booking.guest_id,
                        },
                        domProps: { value: _vm.booking.street },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.booking, "street", $event.target.value)
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
                          value: _vm.booking.email,
                          expression: "booking.email",
                        },
                      ],
                      staticClass: "form-control",
                      class: _vm.errors && _vm.errors.email ? "is-invalid" : "",
                      attrs: {
                        type: "email",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.booking, "email", $event.target.value)
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
                          value: _vm.booking.mobile_no,
                          expression: "booking.mobile_no",
                        },
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors && _vm.errors.mobile_no ? "is-invalid" : "",
                      attrs: {
                        type: "text",
                        disabled: _vm.booking.user_id == _vm.booking.guest_id,
                      },
                      domProps: { value: _vm.booking.mobile_no },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.booking,
                            "mobile_no",
                            $event.target.value
                          )
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
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-6 col-md-6" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Laboratory Center"),
                ]),
                _vm._v(" "),
                _vm._laboratories.length > 1
                  ? [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.booking.laboratory_id,
                              expression: "booking.laboratory_id",
                            },
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.errors && _vm.errors.laboratory_id
                              ? "is-invalid"
                              : _vm.booking.laboratory_id
                              ? "is-valid"
                              : "",
                          attrs: { disabled: _vm._laboratories.length == 1 },
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
                                  _vm.booking,
                                  "laboratory_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              _vm.getTimeslots,
                            ],
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("- Select Laboratory -"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm._laboratories, function (i) {
                            return _c("option", { domProps: { value: i.id } }, [
                              _vm._v(_vm._s(i.name)),
                            ])
                          }),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.booking.laboratory_id
                        ? _c(
                            "div",
                            { staticClass: "valid-feedback" },
                            [
                              _vm._l(_vm._laboratories, function (i) {
                                return [
                                  i.id == _vm.booking.laboratory_id
                                    ? _c("span", [
                                        _vm._v(_vm._s(i.name)),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("small", [
                                          _c("i", {
                                            staticClass:
                                              "fa fa-map-marker mr-1",
                                          }),
                                          _vm._v(_vm._s(i.address)),
                                        ]),
                                      ])
                                    : _vm._e(),
                                ]
                              }),
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors && _vm.errors.laboratory_id
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\r\n                            " +
                                _vm._s(_vm.errors.laboratory_id[0]) +
                                "\r\n                        "
                            ),
                          ])
                        : _vm._e(),
                    ]
                  : [
                      _vm.booking.laboratory_id
                        ? _c(
                            "h2",
                            [
                              _vm._l(_vm._laboratories, function (i) {
                                return [
                                  i.id == _vm.booking.laboratory_id
                                    ? _c("span", [
                                        _vm._v(_vm._s(i.name)),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("small", [
                                          _c("i", {
                                            staticClass:
                                              "fa fa-map-marker mr-1",
                                          }),
                                          _vm._v(_vm._s(i.address)),
                                        ]),
                                      ])
                                    : _vm._e(),
                                ]
                              }),
                            ],
                            2
                          )
                        : _vm._e(),
                    ],
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [_vm._v("Preferred Date")]),
                _vm._v(" "),
                _c("VueDatePicker", {
                  staticClass: "form-control",
                  attrs: {
                    format: "MMMM DD",
                    placeholder: "Choose Date",
                    clearable: true,
                    "visible-years-number": 80,
                    "min-date": _vm.minDate,
                  },
                  on: { onChange: _vm.getTimeslots },
                  model: {
                    value: _vm.booking.preferred_date,
                    callback: function ($$v) {
                      _vm.$set(_vm.booking, "preferred_date", $$v)
                    },
                    expression: "booking.preferred_date",
                  },
                }),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v("Preferred Time")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.preferred_time,
                      expression: "booking.preferred_time",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled:
                      !_vm.booking.laboratory_id || !_vm.booking.preferred_date,
                  },
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
                        _vm.booking,
                        "preferred_time",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "" } }, [
                    _vm._v("- Select Time Slot -"),
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.timeslots, function (i) {
                    return _c("option", { domProps: { value: i.time } }, [
                      _vm._v(_vm._s(i.time)),
                    ])
                  }),
                ],
                2
              ),
            ]),
          ]),
        ],
        2
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "my-2" }),
      _vm._v(" "),
      _c("h2", [_vm._v("Exposure Information")]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Health Care Worker")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.booking.exposure_detail.healthcare_worker,
                    expression: "booking.exposure_detail.healthcare_worker",
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
                      _vm.booking.exposure_detail,
                      "healthcare_worker",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.healthcare_worker == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Name of Health Facility"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.worker_facility,
                      expression: "booking.exposure_detail.worker_facility",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.exposure_detail.worker_facility,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "worker_facility",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.healthcare_worker == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Location of Health Facility"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.worker_location,
                      expression: "booking.exposure_detail.worker_location",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.exposure_detail.worker_location,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "worker_location",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Returning Overseas Filipino"),
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.booking.exposure_detail.rof,
                    expression: "booking.exposure_detail.rof",
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
                      _vm.booking.exposure_detail,
                      "rof",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-2 col-md-2 col-sm-3" }, [
          _vm.booking.exposure_detail.rof == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("OFW")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.exposure_detail.ofw,
                        expression: "booking.exposure_detail.ofw",
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
                          _vm.booking.exposure_detail,
                          "ofw",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [_vm._v("OFW")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Non-OFW"),
                    ]),
                  ]
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _vm.booking.exposure_detail.rof == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Country of Origin"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.ofw_country,
                      expression: "booking.exposure_detail.ofw_country",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.exposure_detail.ofw_country },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "ofw_country",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _vm.booking.exposure_detail.rof == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Passport Number"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.ofw_passport_no,
                      expression: "booking.exposure_detail.ofw_passport_no",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.exposure_detail.ofw_passport_no,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "ofw_passport_no",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Foreign National Traveler"),
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.booking.exposure_detail.foreigner,
                    expression: "booking.exposure_detail.foreigner",
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
                      _vm.booking.exposure_detail,
                      "foreigner",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.foreigner == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Country of Origin"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.foreigner_country,
                      expression: "booking.exposure_detail.foreigner_country",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.exposure_detail.foreigner_country,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "foreigner_country",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.foreigner == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Passport Number"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.foreigner_passport_no,
                      expression:
                        "booking.exposure_detail.foreigner_passport_no",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.exposure_detail.foreigner_passport_no,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "foreigner_passport_no",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Local Stranded Individual / APOR / Local Traveler"),
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.booking.exposure_detail.lsi,
                    expression: "booking.exposure_detail.lsi",
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
                      _vm.booking.exposure_detail,
                      "lsi",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.lsi == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Type")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.exposure_detail.lsi_type,
                        expression: "booking.exposure_detail.lsi_type",
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
                          _vm.booking.exposure_detail,
                          "lsi_type",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Local Stranded Individual"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v(
                        "Authorized Person Outside Residence / Local Traveler"
                      ),
                    ]),
                  ]
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.lsi == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("City, Municipality & Province of Origin"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.lsi_origin,
                      expression: "booking.exposure_detail.lsi_origin",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.exposure_detail.lsi_origin },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "lsi_origin",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Lives in Closed Settings"),
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.booking.exposure_detail.closed,
                    expression: "booking.exposure_detail.closed",
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
                      _vm.booking.exposure_detail,
                      "closed",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
              ]
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "font-weight-normal text-muted mb-2" }, [
              _vm._v(
                "(e.g. prisons, residential facilities, retirement communities, care homes, camps, etc.)"
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.closed == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Institution Type"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.closed_type,
                      expression: "booking.exposure_detail.closed_type",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.exposure_detail.closed_type },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "closed_type",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-6" }, [
          _vm.booking.exposure_detail.closed == 1
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Institution Name"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.exposure_detail.closed_name,
                      expression: "booking.exposure_detail.closed_name",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.exposure_detail.closed_name },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.exposure_detail,
                        "closed_name",
                        $event.target.value
                      )
                    },
                  },
                }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "my-2" }),
      _vm._v(" "),
      _c("h2", [_vm._v("Vaccination Information")]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive mt-3" }, [
        _c("table", { staticClass: "table-sm table-borderd table" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", { staticClass: "bg-primary" }, [
                _vm._v(
                  "\r\n                            1st Dose\r\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.fdose_brand,
                        expression: "booking.vaccine_detail.fdose_brand",
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
                          _vm.booking.vaccine_detail,
                          "fdose_brand",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("-- Select Vaccine Brand --"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sinovac" } }, [
                      _vm._v("Sinovac"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AstraZeneca" } }, [
                      _vm._v("AstraZeneca"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Pfizer" } }, [
                      _vm._v("Pfizer"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Moderna" } }, [
                      _vm._v("Moderna"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sputnik V/Gamaleya" } }, [
                      _vm._v("Sputnik V/Gamaleya"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Novavax" } }, [
                      _vm._v("Novavax"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Johnson and Johnson" } }, [
                      _vm._v("Johnson and Johnson"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.fdose_date,
                      expression: "booking.vaccine_detail.fdose_date",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.booking.vaccine_detail.fdose_date },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "fdose_date",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.fdose_facility,
                      expression: "booking.vaccine_detail.fdose_facility",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.vaccine_detail.fdose_facility,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "fdose_facility",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.fdose_region,
                      expression: "booking.vaccine_detail.fdose_region",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.vaccine_detail.fdose_region },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "fdose_region",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.fdose_adverse,
                        expression: "booking.vaccine_detail.fdose_adverse",
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
                          _vm.booking.vaccine_detail,
                          "fdose_adverse",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "bg-primary" }, [
                _vm._v(
                  "\r\n                            2nd Dose\r\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.sdose_brand,
                        expression: "booking.vaccine_detail.sdose_brand",
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
                          _vm.booking.vaccine_detail,
                          "sdose_brand",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("-- Select Vaccine Brand --"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sinovac" } }, [
                      _vm._v("Sinovac"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AstraZeneca" } }, [
                      _vm._v("AstraZeneca"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Pfizer" } }, [
                      _vm._v("Pfizer"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Moderna" } }, [
                      _vm._v("Moderna"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sputnik V/Gamaleya" } }, [
                      _vm._v("Sputnik V/Gamaleya"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Novavax" } }, [
                      _vm._v("Novavax"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Johnson and Johnson" } }, [
                      _vm._v("Johnson and Johnson"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.sdose_date,
                      expression: "booking.vaccine_detail.sdose_date",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.booking.vaccine_detail.sdose_date },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "sdose_date",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.sdose_facility,
                      expression: "booking.vaccine_detail.sdose_facility",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.vaccine_detail.sdose_facility,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "sdose_facility",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.sdose_region,
                      expression: "booking.vaccine_detail.sdose_region",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.vaccine_detail.sdose_region },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "sdose_region",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.sdose_adverse,
                        expression: "booking.vaccine_detail.sdose_adverse",
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
                          _vm.booking.vaccine_detail,
                          "sdose_adverse",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "bg-primary" }, [
                _vm._v(
                  "\r\n                            Booster\r\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.bdose_brand,
                        expression: "booking.vaccine_detail.bdose_brand",
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
                          _vm.booking.vaccine_detail,
                          "bdose_brand",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("-- Select Vaccine Brand --"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sinovac" } }, [
                      _vm._v("Sinovac"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "AstraZeneca" } }, [
                      _vm._v("AstraZeneca"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Pfizer" } }, [
                      _vm._v("Pfizer"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Moderna" } }, [
                      _vm._v("Moderna"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Sputnik V/Gamaleya" } }, [
                      _vm._v("Sputnik V/Gamaleya"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Novavax" } }, [
                      _vm._v("Novavax"),
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Johnson and Johnson" } }, [
                      _vm._v("Johnson and Johnson"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.bdose_date,
                      expression: "booking.vaccine_detail.bdose_date",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.booking.vaccine_detail.bdose_date },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "bdose_date",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.bdose_facility,
                      expression: "booking.vaccine_detail.bdose_facility",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: {
                    value: _vm.booking.vaccine_detail.bdose_facility,
                  },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "bdose_facility",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.booking.vaccine_detail.bdose_region,
                      expression: "booking.vaccine_detail.bdose_region",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.booking.vaccine_detail.bdose_region },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.booking.vaccine_detail,
                        "bdose_region",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.booking.vaccine_detail.bdose_adverse,
                        expression: "booking.vaccine_detail.bdose_adverse",
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
                          _vm.booking.vaccine_detail,
                          "bdose_adverse",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [_vm._v("NO")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("YES")]),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-end" }, [
        _vm._m(6),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block",
              attrs: { disabled: _vm.invalid_time },
              on: { click: _vm.submit },
            },
            [
              _vm._v(
                "\r\n                      Book Schedule\r\n                  "
              ),
            ]
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
      _c("h2", { staticClass: "mb-2" }, [_vm._v("I am booking for")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Patient Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Patient Address")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Patient Contact")]),
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
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Schedule Information")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-center text-white" }, [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("NAME OF VACCINE")]),
        _vm._v(" "),
        _c("th", [_vm._v("VACCINATION DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("VACCINATION CENTER/FACILITY")]),
        _vm._v(" "),
        _c("th", [_vm._v("REGION OF HEALTH FACILITY")]),
        _vm._v(" "),
        _c("th", [_vm._v("ADVERSE EVENT/s?")]),
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

/***/ "./resources/src/user/Book.vue":
/*!*************************************!*\
  !*** ./resources/src/user/Book.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.vue?vue&type=template&id=20836eda&scoped=true& */ "./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true&");
/* harmony import */ var _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book.vue?vue&type=script&lang=js& */ "./resources/src/user/Book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& */ "./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20836eda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/user/Book.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/user/Book.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/src/user/Book.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=style&index=0&id=20836eda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_style_index_0_id_20836eda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Book.vue?vue&type=template&id=20836eda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/user/Book.vue?vue&type=template&id=20836eda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Book_vue_vue_type_template_id_20836eda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);