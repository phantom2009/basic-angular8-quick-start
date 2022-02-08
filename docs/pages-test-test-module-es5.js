function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--双向绑定，控制输入框的是否禁用属性-->\n\n\n<form [formGroup]=\"myForm\">\n<input class=\"text-big\" type=\"text\" [(ngModel)]=\"roleParams.roleName\" formControlName=\"roleName\"> \n\n</form>";
    /***/
  },

  /***/
  "./src/app/pages/test/test.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/test/test.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestTestComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/test/test.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/test/test.component.ts ***!
    \**********************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppPagesTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent(formBuilder) {
        _classCallCheck(this, TestComponent);

        this.formBuilder = formBuilder;
        this.isEdit = true;
        this.isDisabled = true;
        this.roleParams = {
          roleName: '',
          items: ['全部权限']
        };
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            var params = {
              id: "0",
              roleParams: "1"
            };
            _this.isEdit = Number(params['id']) !== 0; // 0:添加，!0编辑

            _this.roleParams.roleName = params['id'];

            _this.createOrEdit();

            _this.creatForm();
          }, 5000);
          this.createOrEdit();
          this.creatForm();
        }
      }, {
        key: "createOrEdit",
        value: function createOrEdit() {
          console.log(this.isEdit);

          if (this.isEdit) {
            // 如果是编辑的时候，就禁用掉该输入框
            this.isDisabled = true;
            return;
          }

          this.isDisabled = false;
          this.creatForm();
        } // 在初始化表单的时候设置表单中input的属性值，禁用的话 disabled:true

      }, {
        key: "creatForm",
        value: function creatForm() {
          this.myForm = null;
          this.myForm = this.formBuilder.group({
            roleName: [{
              value: this.roleParams.roleName,
              disabled: this.isDisabled
            }]
          });
        }
      }]);

      return TestComponent;
    }();

    TestComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.component.scss */
      "./src/app/pages/test/test.component.scss"))["default"]]
    })], TestComponent);
    /***/
  },

  /***/
  "./src/app/pages/test/test.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.module.ts ***!
    \*******************************************/

  /*! exports provided: TestModule */

  /***/
  function srcAppPagesTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestModule", function () {
      return TestModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test.component */
    "./src/app/pages/test/test.component.ts");
    /**
     * 语法、机制调试页
     */


    var TestModule = /*#__PURE__*/_createClass(function TestModule() {
      _classCallCheck(this, TestModule);
    });

    TestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: "",
        component: _test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], TestModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map