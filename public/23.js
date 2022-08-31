(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json");
var _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../jsons/occupations.json */ "./resources/src/jsons/occupations.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['_laboratory', '_auth', '_laboratories', '_roles', '_services'],
  data: function data() {
    return {
      occupations: _jsons_occupations_json__WEBPACK_IMPORTED_MODULE_0__.occupations,
      item: {
        name: '',
        acronym: '',
        description: '',
        mobile_no: '',
        email: '',
        prov_code: '517',
        citymun_code: '',
        brgy_code: '',
        street: '',
        active: 1
      },
      errors: [],
      provinces: [],
      municipalities: [],
      barangays: [],
      temp_password: false,
      isLoading: false,
      timeslot_list: '',
      timeslot: {
        laboratory_id: '',
        max: 10,
        time: '',
        active: 1
      },
      services: '',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      selected_services: [],
      districts: [{
        name: 'District I',
        value: 1
      }, {
        name: 'District II',
        value: 2
      }, {
        name: 'District III',
        value: 3
      }, {
        name: 'District VI',
        value: 4
      }, {
        name: 'District V',
        value: 5
      }],
      driver_list: '',
      driver: {
        laboratory_id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        mobile_no: '',
        active: 1
      },
      personnel_list: '',
      personnel: {
        laboratory_id: '',
        service_id: null,
        user_id: null,
        prcid_no: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        designation: '',
        esig: '',
        active: 1
      }
    };
  },
  computed: {},
  created: function created() {
    if (this._laboratory) {
      this.item = _objectSpread({}, this._laboratory);
      this.getItem();
    }
  },
  mounted: function mounted() {
    this.getProvinces();
    this.getMunicipalities();
  },
  methods: {
    clearSignature: function clearSignature() {
      this.personnel.esig = '';
    },
    uploadSignature: function uploadSignature() {
      $("#upload-signature").click();
    },
    detectFiles: function detectFiles(event) {
      var _this = this;

      var file = event.target.files[0];

      if (file) {
        var extension = file.name.split('.').pop();

        if (extension == 'png' || extension == 'PNG') {
          var reader = new FileReader();

          reader.onload = function (e) {
            _this.personnel.esig = e.target.result;
          };

          reader.readAsDataURL(file);
        } else {
          $("#upload-signature").val(null);
          this.$alert('', 'Invalid signature image', 'error');
        }
      }
    },
    dayClicked: function dayClicked(index, item) {
      if (this.checkDay(index, item)) {
        // remove
        var i = item.day.findIndex(function (x) {
          return x == index;
        });
        item.day.splice(i, 1);
      } else {
        // add
        item.day.push(index);
      }

      this.updateDayslots(item);
    },
    updateDayslots: function updateDayslots(item) {
      var form = item;
      axios.patch('/timeslots/' + form.id, form).then();
    },
    checkDay: function checkDay(index, item) {
      return item.day.includes(index.toString());
    },
    provChange: function provChange() {
      this.item.citymun_code = '';
      this.item.brgy_code = '';
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
    munChange: function munChange() {
      this.item.brgy_code = '';
      this.getBarangays();
    },
    getMunicipalities: function getMunicipalities() {
      var _this3 = this;

      this.$loader.show();
      axios.get('/municipalities/' + this.item.prov_code).then(function (response) {
        _this3.$loader.hide();

        if (response.data.status == "OK") {
          _this3.municipalities = response.data.data;
          if (_this3.item.brgy_code) _this3.getBarangays();
        }
      })["catch"](function () {
        _this3.$loader.hide();

        _this3.$alert('', 'Something went wrong!', 'error');
      });
    },
    getBarangays: function getBarangays() {
      var _this4 = this;

      this.$loader.show();
      axios.get('/barangays/' + this.item.citymun_code).then(function (response) {
        _this4.$loader.hide();

        if (response.data.status == "OK") {
          _this4.barangays = response.data.data;
        }
      })["catch"](function () {
        _this4.$loader.hide();

        _this4.$alert('', 'Something went wrong!', 'error');
      });
    },
    createItem: function createItem() {
      var _this5 = this;

      this.$confirm('', 'Are you sure you want to create Laboratory?', 'question').then(function () {
        _this5.$loader.show();

        _this5.errors = [];

        if (_this5.selected_services) {
          _this5.item.services = _this5.selected_services;
        }

        if (_this5.item.districts) {
          _this5.item.districts = _this5.item.districts.map(function (i) {
            return i.value;
          });
        }

        axios.post('/laboratory', _this5.item).then(function (response) {
          _this5.$loader.hide();

          if (response.data.status == "OK") {
            _this5.$alert('', 'Laboratory was successfully created', 'success').then(function () {
              window.location.href = "/laboratories";
            });
          } else {
            _this5.$alert('', response.data.message, 'error');

            _this5.errors = response.data.errors;
          }
        })["catch"](function () {
          _this5.$loader.hide();

          _this5.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updateItem: function updateItem() {
      var _this6 = this;

      this.$confirm('', 'Are you sure you want to update Laboratory?', 'question').then(function () {
        _this6.$loader.show();

        _this6.errors = [];

        if (_this6.selected_services) {
          _this6.item.services = _this6.selected_services;
        }

        if (_this6.item.districts) {
          _this6.item.districts = _this6.item.districts.map(function (i) {
            return i.value;
          });
        }

        axios.patch('/laboratory/' + _this6.item.id, _this6.item).then(function (response) {
          _this6.$loader.hide();

          if (response.data.status == "OK") {
            _this6.$alert('', 'Laboratory was successfully updated', 'success').then(function () {
              window.location.href = "/laboratories";
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
    getItem: function getItem() {
      var _this7 = this;

      var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (reload) {
        this.isLoading = true;
        axios.get("/laboratory/item/" + this.item.id).then(function (response) {
          _this7.isLoading = false;

          if (response.data.status == "OK") {
            _this7.item = _objectSpread({}, response.data.data);
            _this7.timeslot_list = _this7.item.timeslots;
            _this7.driver_list = _this7.item.drivers;
            _this7.personnel_list = _this7.item.personnels;

            if (_this7.item.districts) {
              var d = _this7.item.districts.map(function (i) {
                return parseInt(i);
              });

              _this7.item.districts = _this7.districts.filter(function (i) {
                return d.includes(i.value);
              });
            }

            if (_this7.item.laboratory_services) {
              _this7.selected_services = _this7.item.laboratory_services.map(function (i) {
                return i.service;
              });
            }
          }
        })["catch"](function () {
          _this7.isLoading = false;

          _this7.$alert('', 'Something went wrong!', 'error');
        });
      } else {
        this.timeslot_list = this.item.timeslots;
        this.driver_list = this.item.drivers;
        this.personnel_list = this.item.personnels;

        if (this.item.districts) {
          var d = this.item.districts.map(function (i) {
            return parseInt(i);
          });
          this.item.districts = this.districts.filter(function (i) {
            return d.includes(i.value);
          });
        }

        if (this.item.laboratory_services) {
          this.selected_services = this.item.laboratory_services.map(function (i) {
            return i.service;
          });
        }
      }
    },
    openModalDriver: function openModalDriver() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (item) {
        this.driver = _objectSpread({}, item);
      } else {
        this.driver = {
          laboratory_id: this.item && this.item.id ? this.item.id : '',
          first_name: '',
          middle_name: '',
          last_name: '',
          suffix: '',
          mobile_no: '',
          active: 1
        };
      }

      $("#driverModal").modal('show');
    },
    saveDriver: function saveDriver() {
      var _this8 = this;

      this.$confirm('', 'Are you sure you want to add this Driver?', 'question').then(function () {
        _this8.$loader.show();

        _this8.errors = [];
        axios.post('/drivers', _this8.driver).then(function (response) {
          _this8.$loader.hide();

          if (response.data.status == "OK") {
            _this8.$alert('', 'Driver was successfully created', 'success').then(function () {
              $("#driverModal").modal('hide');

              _this8.getItem(true);
            });
          } else {
            _this8.$alert('', response.data.message, 'error');

            _this8.errors = response.data.errors;
          }
        })["catch"](function () {
          _this8.$loader.hide();

          _this8.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updateDriver: function updateDriver() {
      var _this9 = this;

      this.$confirm('', 'Are you sure you want to update this Driver?', 'question').then(function () {
        _this9.$loader.show();

        _this9.errors = [];
        var form = _this9.driver;
        axios.patch('/drivers/' + _this9.driver.id, form).then(function (response) {
          _this9.$loader.hide();

          if (response.data.status == "OK") {
            _this9.$alert('', 'Driver was successfully updated', 'success').then(function () {
              $("#driverModal").modal('hide');

              _this9.getItem(true);
            });
          } else {
            _this9.$alert('', response.data.message, 'error');

            _this9.errors = response.data.errors;
          }
        })["catch"](function () {
          _this9.$loader.hide();

          _this9.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    deleteDriverItem: function deleteDriverItem(item) {
      var _this10 = this;

      this.$confirm("", "Are you sure you want to delete this Driver?", 'question').then(function () {
        _this10.$loader.show();

        axios["delete"]('/drivers/' + item.id).then(function (response) {
          _this10.$loader.hide();

          if (response.data.status == "OK") {
            _this10.$alert("", "Driver was deleted", 'success', {
              timer: 1000,
              showConfirmButton: false
            });

            _this10.getDriverItems(true);
          }
        })["catch"](function () {
          _this10.$loader.hide();

          _this10.$alert("", "Something went wrong. Please try again later.", 'error');
        });
      });
    },
    openModalPersonnel: function openModalPersonnel() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (item) {
        this.personnel = _objectSpread({}, item);
      } else {
        this.personnel = {
          laboratory_id: this.item && this.item.id ? this.item.id : '',
          service_id: null,
          user_id: null,
          prcid_no: '',
          first_name: '',
          middle_name: '',
          last_name: '',
          suffix: '',
          designation: '',
          esig: '',
          active: 1
        };
      }

      $("#personnelModal").modal('show');
    },
    savePersonnel: function savePersonnel() {
      var _this11 = this;

      this.$confirm('', 'Are you sure you want to add this Personnel?', 'question').then(function () {
        _this11.$loader.show();

        _this11.errors = [];
        axios.post('/personnels', _this11.personnel).then(function (response) {
          _this11.$loader.hide();

          if (response.data.status == "OK") {
            _this11.$alert('', 'Personnel was successfully created', 'success').then(function () {
              $("#personnelModal").modal('hide');

              _this11.getItem(true);
            });
          } else {
            _this11.$alert('', response.data.message, 'error');

            _this11.errors = response.data.errors;
          }
        })["catch"](function () {
          _this11.$loader.hide();

          _this11.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updatePersonnel: function updatePersonnel() {
      var _this12 = this;

      this.$confirm('', 'Are you sure you want to update this Personnel?', 'question').then(function () {
        _this12.$loader.show();

        _this12.errors = [];
        var form = _this12.personnel;
        axios.patch('/personnels/' + _this12.personnel.id, form).then(function (response) {
          _this12.$loader.hide();

          if (response.data.status == "OK") {
            _this12.$alert('', 'Personnel was successfully updated', 'success').then(function () {
              $("#personnelModal").modal('hide');

              _this12.getItem(true);
            });
          } else {
            _this12.$alert('', response.data.message, 'error');

            _this12.errors = response.data.errors;
          }
        })["catch"](function () {
          _this12.$loader.hide();

          _this12.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    deletePersonnelItem: function deletePersonnelItem(item) {
      var _this13 = this;

      this.$confirm("", "Are you sure you want to delete this Personnel?", 'question').then(function () {
        _this13.$loader.show();

        axios["delete"]('/personnels/' + item.id).then(function (response) {
          _this13.$loader.hide();

          if (response.data.status == "OK") {
            _this13.$alert("", "Personnel was deleted", 'success', {
              timer: 1000,
              showConfirmButton: false
            });

            _this13.getPersonnelItems(true);
          }
        })["catch"](function () {
          _this13.$loader.hide();

          _this13.$alert("", "Something went wrong. Please try again later.", 'error');
        });
      });
    },
    openModalTimeslot: function openModalTimeslot() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (item) {
        this.timeslot = _objectSpread({}, item);
      } else {
        this.timeslot = {
          laboratory_id: this.item && this.item.id ? this.item.id : '',
          time: '',
          max: 10,
          active: 1
        };
      }

      $("#timeslotModal").modal('show');
    },
    saveTimeslot: function saveTimeslot() {
      var _this14 = this;

      this.$confirm('', 'Are you sure you want to add this Timeslot?', 'question').then(function () {
        _this14.$loader.show();

        _this14.errors = [];
        axios.post('/timeslots', _this14.timeslot).then(function (response) {
          _this14.$loader.hide();

          if (response.data.status == "OK") {
            _this14.$alert('', 'Timeslot was successfully created', 'success').then(function () {
              $("#timeslotModal").modal('hide');

              _this14.getItem(true);
            });
          } else {
            _this14.$alert('', response.data.message, 'error');

            _this14.errors = response.data.errors;
          }
        })["catch"](function () {
          _this14.$loader.hide();

          _this14.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    updateTimeslot: function updateTimeslot() {
      var _this15 = this;

      this.$confirm('', 'Are you sure you want to update this Timeslot?', 'question').then(function () {
        _this15.$loader.show();

        _this15.errors = [];
        var form = _this15.timeslot;
        axios.patch('/timeslots/' + _this15.timeslot.id, form).then(function (response) {
          _this15.$loader.hide();

          if (response.data.status == "OK") {
            _this15.$alert('', 'Timeslot was successfully updated', 'success').then(function () {
              $("#timeslotModal").modal('hide');

              _this15.getItem(true);
            });
          } else {
            _this15.$alert('', response.data.message, 'error');

            _this15.errors = response.data.errors;
          }
        })["catch"](function () {
          _this15.$loader.hide();

          _this15.$alert('', 'Something went wrong', 'error');
        });
      });
    },
    deleteTimeslotItem: function deleteTimeslotItem(item) {
      var _this16 = this;

      this.$confirm("", "Are you sure you want to delete this Timeslot?", 'question').then(function () {
        _this16.$loader.show();

        axios["delete"]('/timeslots/' + item.id).then(function (response) {
          _this16.$loader.hide();

          if (response.data.status == "OK") {
            _this16.$alert("", "Timeslot was deleted", 'success', {
              timer: 1000,
              showConfirmButton: false
            });

            _this16.getItem(true);
          }
        })["catch"](function () {
          _this16.$loader.hide();

          _this16.$alert("", "Something went wrong. Please try again later.", 'error');
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _vm._laboratory
        ? _c("h2", { staticClass: "text-white" }, [_vm._v("Edit Laboratory")])
        : _c("h2", { staticClass: "text-white" }, [_vm._v("New Laboratory")]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body px-5" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.name,
                  expression: "item.name",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.name ? "is-invalid" : "",
              attrs: { type: "text" },
              domProps: { value: _vm.item.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "name", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.name
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\r\n                        " +
                      _vm._s(_vm.errors.name[0]) +
                      "\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Acronym")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.acronym,
                  expression: "item.acronym",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.acronym ? "is-invalid" : "",
              attrs: { type: "text" },
              domProps: { value: _vm.item.acronym },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "acronym", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.acronym
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\r\n                        " +
                      _vm._s(_vm.errors.acronym[0]) +
                      "\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Status")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.item.active,
                    expression: "item.active",
                  },
                ],
                staticClass: "form-control",
                attrs: { disabled: _vm._auth.role_id != 1 },
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
                      _vm.item,
                      "active",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "1" } }, [_vm._v("Active")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "0" } }, [_vm._v("Inactive")]),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Description")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.description,
                  expression: "item.description",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.description ? "is-invalid" : "",
              attrs: { rows: "4" },
              domProps: { value: _vm.item.description },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "description", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors && _vm.errors.description
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\r\n                        " +
                      _vm._s(_vm.errors.description[0]) +
                      "\r\n                    "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Mobile No")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.mobile_no,
                  expression: "item.mobile_no",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.mobile_no ? "is-invalid" : "",
              attrs: { type: "text" },
              domProps: { value: _vm.item.mobile_no },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "mobile_no", $event.target.value)
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
        _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Email")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.item.email,
                  expression: "item.email",
                },
              ],
              staticClass: "form-control",
              class: _vm.errors && _vm.errors.email ? "is-invalid" : "",
              attrs: { type: "text" },
              domProps: { value: _vm.item.email },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.item, "email", $event.target.value)
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
                        value: _vm.item.prov_code,
                        expression: "item.prov_code",
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
                            _vm.item,
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
                        value: _vm.item.citymun_code,
                        expression: "item.citymun_code",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.citymun_code ? "is-invalid" : "",
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
                            _vm.item,
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
                        value: _vm.item.brgy_code,
                        expression: "item.brgy_code",
                      },
                    ],
                    staticClass: "form-control",
                    class:
                      _vm.errors && _vm.errors.brgy_code ? "is-invalid" : "",
                    attrs: { disabled: !_vm.item.citymun_code },
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
                          _vm.item,
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
                    value: _vm.item.street,
                    expression: "item.street",
                  },
                ],
                staticClass: "form-control",
                class: _vm.errors && _vm.errors.street ? "is-invalid" : "",
                attrs: { rows: "6", placeholder: "House No. / Street / Zone" },
                domProps: { value: _vm.item.street },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.item, "street", $event.target.value)
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
      _c("div", { staticClass: "row" }, [
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-12 col-sm-12" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Districts")]),
              _vm._v(" "),
              _c("multiselect", {
                class: _vm.errors && _vm.errors.districts ? "is-invalid" : "",
                attrs: {
                  options: _vm.districts,
                  multiple: true,
                  "close-on-select": true,
                  "hide-selected": true,
                  placeholder: "Select Districts",
                  label: "name",
                  "track-by": "value",
                },
                model: {
                  value: _vm.item.districts,
                  callback: function ($$v) {
                    _vm.$set(_vm.item, "districts", $$v)
                  },
                  expression: "item.districts",
                },
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.street
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\r\n                        " +
                        _vm._s(_vm.errors.street[0]) +
                        "\r\n                    "
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-12 col-sm-12" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Services")]),
              _vm._v(" "),
              _c("multiselect", {
                class: _vm.errors && _vm.errors.services ? "is-invalid" : "",
                attrs: {
                  options: _vm._services,
                  multiple: true,
                  "close-on-select": true,
                  "hide-selected": true,
                  placeholder: "Select Services",
                  label: "name",
                  "track-by": "id",
                },
                model: {
                  value: _vm.selected_services,
                  callback: function ($$v) {
                    _vm.selected_services = $$v
                  },
                  expression: "selected_services",
                },
              }),
              _vm._v(" "),
              _vm.errors && _vm.errors.street
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\r\n                        " +
                        _vm._s(_vm.errors.street[0]) +
                        "\r\n                    "
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        !_vm.item.id
          ? _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Start Time")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.start_time,
                      expression: "item.start_time",
                    },
                  ],
                  staticClass: "form-control",
                  class:
                    _vm.errors && _vm.errors.start_time ? "is-invalid" : "",
                  attrs: { type: "time" },
                  domProps: { value: _vm.item.start_time },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "start_time", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.errors && _vm.errors.start_time
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.start_time[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.item.id
          ? _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("End Time")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.end_time,
                      expression: "item.end_time",
                    },
                  ],
                  staticClass: "form-control",
                  class: _vm.errors && _vm.errors.end_time ? "is-invalid" : "",
                  attrs: { type: "time" },
                  domProps: { value: _vm.item.end_time },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "end_time", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.errors && _vm.errors.end_time
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.end_time[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.item.id
          ? _c("div", { staticClass: "col-lg-3 col-md-3 col-sm-2" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Max")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.item.max_per_time,
                      expression: "item.max_per_time",
                    },
                  ],
                  staticClass: "form-control",
                  class:
                    _vm.errors && _vm.errors.max_per_time ? "is-invalid" : "",
                  attrs: { type: "number" },
                  domProps: { value: _vm.item.max_per_time },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.item, "max_per_time", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _vm.errors && _vm.errors.max_per_time
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.errors.max_per_time[0]) +
                          "\r\n                    "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ])
          : _vm._e(),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-end" }, [
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-6 col-xs-6" }, [
          !_vm._laboratory
            ? _c(
                "button",
                {
                  staticClass: "btn btn-block btn-primary",
                  on: { click: _vm.createItem },
                },
                [_vm._v("\r\n                    Save\r\n                ")]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btn-block btn-primary",
                  on: { click: _vm.updateItem },
                },
                [_vm._v("\r\n                    Update\r\n                ")]
              ),
        ]),
      ]),
      _vm._v(" "),
      _vm.item.id
        ? _c("div", { staticClass: "row my-4" }, [
            _vm._m(5),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between",
                    },
                    [
                      _c("h2", [_vm._v("Drivers")]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              return _vm.openModalDriver()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus mr-2" }),
                          _vm._v("Add Driver\r\n                            "),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "table-responsive mt-3" }, [
                    _c(
                      "table",
                      { staticClass: "table table-sm table-bordered" },
                      [
                        _vm._m(6),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.driver_list &&
                        _vm.driver_list.length > 0
                          ? _c(
                              "tbody",
                              _vm._l(_vm.driver_list, function (item, i) {
                                return _c("tr", { staticClass: "bg-white" }, [
                                  _c("td", [_vm._v(_vm._s(i + 1))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.full_name))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.active_label))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        on: {
                                          click: function ($event) {
                                            return _vm.openModalDriver(item)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-edit mr-2",
                                        }),
                                        _vm._v(
                                          "Edit\r\n                                            "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._auth.role_id == 1
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-danger btn-sm",
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteDriverItem(
                                                  item
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-trash mr-2",
                                            }),
                                            _vm._v(
                                              "Delete\r\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                ])
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.driver_list &&
                        _vm.driver_list.length == 0
                          ? _c("tbody", [_vm._m(7)])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isLoading && !_vm.driver_list
                          ? _c("tbody", [
                              _c("tr", { staticClass: "bg-white" }, [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    attrs: { colspan: "7" },
                                  },
                                  [_c("data-loader")],
                                  1
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between",
                    },
                    [
                      _c("h2", [_vm._v("Personnels")]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              return _vm.openModalPersonnel()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus mr-2" }),
                          _vm._v(
                            "Add Personnel\r\n                            "
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "table-responsive mt-3" }, [
                    _c(
                      "table",
                      { staticClass: "table table-sm table-bordered" },
                      [
                        _vm._m(8),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.personnel_list &&
                        _vm.personnel_list.length > 0
                          ? _c(
                              "tbody",
                              _vm._l(_vm.personnel_list, function (item, i) {
                                return _c("tr", { staticClass: "bg-white" }, [
                                  _c("td", [_vm._v(_vm._s(i + 1))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.full_name))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.active_label))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        on: {
                                          click: function ($event) {
                                            return _vm.openModalPersonnel(item)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-edit mr-2",
                                        }),
                                        _vm._v(
                                          "Edit\r\n                                            "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._auth.role_id == 1
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-danger btn-sm",
                                            on: {
                                              click: function ($event) {
                                                return _vm.deletePersonnelItem(
                                                  item
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-trash mr-2",
                                            }),
                                            _vm._v(
                                              "Delete\r\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                ])
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.personnel_list &&
                        _vm.personnel_list.length == 0
                          ? _c("tbody", [_vm._m(9)])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isLoading && !_vm.personnel_list
                          ? _c("tbody", [
                              _c("tr", { staticClass: "bg-white" }, [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    attrs: { colspan: "7" },
                                  },
                                  [_c("data-loader")],
                                  1
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-12" }, [
              _c("hr", { staticClass: "my-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between",
                    },
                    [
                      _c("h2", [_vm._v("Timeslots")]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              return _vm.openModalTimeslot()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-plus mr-2" }),
                          _vm._v(
                            "Add Timeslot\r\n                            "
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "table-responsive mt-3" }, [
                    _c(
                      "table",
                      { staticClass: "table table-sm table-bordered" },
                      [
                        _vm._m(10),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.timeslot_list &&
                        _vm.timeslot_list.length > 0
                          ? _c(
                              "tbody",
                              _vm._l(_vm.timeslot_list, function (item, i) {
                                return _c("tr", { staticClass: "bg-white" }, [
                                  _c("td", [_vm._v(_vm._s(i + 1))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.time))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.max))]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    _vm._l(_vm.days, function (d, i) {
                                      return _c(
                                        "div",
                                        {
                                          staticClass:
                                            "form-check form-check-inline",
                                        },
                                        [
                                          _c("input", {
                                            staticClass: "form-check-input",
                                            attrs: {
                                              type: "checkbox",
                                              value: "",
                                              id: d + "Checked" + item.id,
                                            },
                                            domProps: {
                                              checked: _vm.checkDay(i, item),
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.dayClicked(i, item)
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-check-label",
                                              attrs: {
                                                for: d + "Checked" + item.id,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    " +
                                                  _vm._s(d) +
                                                  "\r\n                                                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.active_label))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        on: {
                                          click: function ($event) {
                                            return _vm.openModalTimeslot(item)
                                          },
                                        },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-edit mr-2",
                                        }),
                                        _vm._v(
                                          "Edit\r\n                                            "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._auth.role_id == 1
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-danger btn-sm",
                                            on: {
                                              click: function ($event) {
                                                return _vm.deleteTimeslotItem(
                                                  item
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-trash mr-2",
                                            }),
                                            _vm._v(
                                              "Delete\r\n                                            "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]),
                                ])
                              }),
                              0
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.isLoading &&
                        _vm.timeslot_list &&
                        _vm.timeslot_list.length == 0
                          ? _c("tbody", [_vm._m(11)])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isLoading && !_vm.timeslot_list
                          ? _c("tbody", [
                              _c("tr", { staticClass: "bg-white" }, [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-center",
                                    attrs: { colspan: "7" },
                                  },
                                  [_c("data-loader")],
                                  1
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "driverModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm.driver.id
                  ? _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Edit Driver")]
                    )
                  : _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Add Driver")]
                    ),
                _vm._v(" "),
                _vm._m(12),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Firstname"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.driver.first_name,
                            expression: "driver.first_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.driver.first_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.driver,
                              "first_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Middlename"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.driver.middle_name,
                            expression: "driver.middle_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.driver.middle_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.driver,
                              "middle_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Lastname")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.driver.last_name,
                            expression: "driver.last_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.driver.last_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.driver,
                              "last_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Suffix")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.driver.suffix,
                            expression: "driver.suffix",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.driver.suffix },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.driver, "suffix", $event.target.value)
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Mobile No"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.driver.mobile_no,
                            expression: "driver.mobile_no",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.driver.mobile_no },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.driver,
                              "mobile_no",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.driver.active,
                              expression: "driver.active",
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
                                _vm.driver,
                                "active",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Active"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Inactive"),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    attrs: { type: "button", "data-dismiss": "modal" },
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm.driver.id
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.updateDriver },
                      },
                      [_vm._v("Update")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.saveDriver },
                      },
                      [_vm._v("Save")]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "personnelModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm.personnel.id
                  ? _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Edit Personnel")]
                    )
                  : _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Add Personnel")]
                    ),
                _vm._v(" "),
                _vm._m(13),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Firstname"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.first_name,
                            expression: "personnel.first_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.first_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "first_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Middlename"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.middle_name,
                            expression: "personnel.middle_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.middle_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "middle_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Lastname")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.last_name,
                            expression: "personnel.last_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.last_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "last_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Suffix")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.suffix,
                            expression: "personnel.suffix",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.suffix },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "suffix",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Designation"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.designation,
                            expression: "personnel.designation",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.designation },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "designation",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("PRC ID NO"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.personnel.prcid_no,
                            expression: "personnel.prcid_no",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.personnel.prcid_no },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.personnel,
                              "prcid_no",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Service")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.personnel.service_id,
                              expression: "personnel.service_id",
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
                                _vm.personnel,
                                "service_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { domProps: { value: null } }, [
                            _vm._v("All"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.item.services, function (i, index) {
                            return _c("option", { domProps: { value: i.id } }, [
                              _vm._v(_vm._s(i.name)),
                            ])
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("User")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.personnel.user_id,
                              expression: "personnel.user_id",
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
                                _vm.personnel,
                                "user_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { domProps: { value: null } }, [
                            _vm._v("All"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.item.users, function (i, index) {
                            return _c("option", { domProps: { value: i.id } }, [
                              _vm._v(_vm._s(i.full_name)),
                            ])
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("E-Signature"),
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        staticStyle: { "max-width": "200px" },
                        attrs: { src: _vm.personnel.esig, alt: "" },
                      }),
                    ]),
                    _vm._v(" "),
                    _vm.personnel.esig
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-light mr-2",
                            on: { click: _vm.clearSignature },
                          },
                          [
                            _vm._v(
                              "\r\n                            Clear\r\n                        "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.personnel.esig
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-primary mr-2",
                            on: { click: _vm.uploadSignature },
                          },
                          [
                            _vm._v(
                              "\r\n                            Browse\r\n                        "
                            ),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("input", {
                      attrs: {
                        type: "file",
                        id: "upload-signature",
                        hidden: "",
                        accept: ".png",
                      },
                      on: { change: _vm.detectFiles },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-3 col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.personnel.active,
                              expression: "personnel.active",
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
                                _vm.personnel,
                                "active",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Active"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Inactive"),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    attrs: { type: "button", "data-dismiss": "modal" },
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm.personnel.id
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.updatePersonnel },
                      },
                      [_vm._v("Update")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.savePersonnel },
                      },
                      [_vm._v("Save")]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "timeslotModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-sm", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm.timeslot.id
                  ? _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Edit Timeslot")]
                    )
                  : _c(
                      "h5",
                      {
                        staticClass: "modal-title",
                        attrs: { id: "exampleModalLabel" },
                      },
                      [_vm._v("Add Timeslot")]
                    ),
                _vm._v(" "),
                _vm._m(14),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Time")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.timeslot.time,
                        expression: "timeslot.time",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", disabled: _vm.timeslot.id },
                    domProps: { value: _vm.timeslot.time },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.timeslot, "time", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Max")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.timeslot.max,
                        expression: "timeslot.max",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.timeslot.max },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.timeslot, "max", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Status")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.timeslot.active,
                          expression: "timeslot.active",
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
                            _vm.timeslot,
                            "active",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Active"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("Inactive"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    attrs: { type: "button", "data-dismiss": "modal" },
                  },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _vm.timeslot.id
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.updateTimeslot },
                      },
                      [_vm._v("Update")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.saveTimeslot },
                      },
                      [_vm._v("Save")]
                    ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Laboratory Information")]),
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
      _c("h2", { staticClass: "mb-2" }, [_vm._v("Other Information")]),
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
        { staticClass: "btn btn-block mb-2", attrs: { href: "/laboratories" } },
        [_vm._v("\r\n                    Cancel\r\n                ")]
      ),
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
    return _c("thead", { staticClass: "bg-primary text-white text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("NO")]),
        _vm._v(" "),
        _c("th", [_vm._v("Driver")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-white" }, [
      _c("td", { staticClass: "text-center", attrs: { colspan: "7" } }, [
        _c("h3", [
          _c("i", { staticClass: "fa fa-file mr-2" }),
          _vm._v("No Data Available"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("NO")]),
        _vm._v(" "),
        _c("th", [_vm._v("Personnel")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-white" }, [
      _c("td", { staticClass: "text-center", attrs: { colspan: "7" } }, [
        _c("h3", [
          _c("i", { staticClass: "fa fa-file mr-2" }),
          _vm._v("No Data Available"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-primary text-white text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("NO")]),
        _vm._v(" "),
        _c("th", [_vm._v("Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Max")]),
        _vm._v(" "),
        _c("th", [_vm._v("Days")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "bg-white" }, [
      _c("td", { staticClass: "text-center", attrs: { colspan: "7" } }, [
        _c("h3", [
          _c("i", { staticClass: "fa fa-file mr-2" }),
          _vm._v("No Data Available"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/admin/LaboratoriesForm.vue":
/*!**************************************************!*\
  !*** ./resources/src/admin/LaboratoriesForm.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0& */ "./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0&");
/* harmony import */ var _LaboratoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaboratoriesForm.vue?vue&type=script&lang=js& */ "./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LaboratoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/admin/LaboratoriesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaboratoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LaboratoriesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/LaboratoriesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaboratoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0&":
/*!*********************************************************************************!*\
  !*** ./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/admin/LaboratoriesForm.vue?vue&type=template&id=ccfbfdd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaboratoriesForm_vue_vue_type_template_id_ccfbfdd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);