function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container login\">\n    <div class=\"login-form\">\n        <!-- \n            模板语法表单:ngModel显得更加直接、简单，无法使用angular的表单验证能力，\n            angular自己认为FormBuilder扩展性更强，具有完整的表单能力，angular倾向于后者。\n         -->\n        <span class=\"title\">请先登录</span>\n        <span class=\"form-item\">\n            <label>账号：</label>\n            <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"  />\n        </span>\n        <span class=\"form-item\">\n            <label>密码：</label>\n            <input type=\"text\" name=\"password\" [(ngModel)]=\"user.password\" />\n        </span>\n        <span class=\"form-item\">\n            <button (click)=\"handleLogin()\">登录</button>\n        </span>\n    </div>    \n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.login {\n  position: relative;\n}\n.login .login-form {\n  position: absolute;\n  width: 320px;\n  height: 200px;\n  top: 0;\n  bottom: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  /* 上下绝对居中 */\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* 左右绝对居中 */\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  padding: 10px;\n}\n.login .login-form .title {\n  font-size: 20px;\n  font-weight: 400;\n  display: block;\n}\n.login .login-form .form-item {\n  display: block;\n  height: 32px;\n  margin: 10px auto;\n}\n.login .login-form .form-item input {\n  height: 24px;\n  border-radius: 4px;\n  border-color: #ccc;\n  text-indent: 5px;\n  width: 240px;\n}\n.login .login-form .form-item button {\n  padding: 5px;\n  border-radius: 4px;\n  min-width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL0Y6XFx3czRpb25pY3NcXGJhc2ljLWFuZ3VsYXI4LXF1aWNrLXN0YXJ0L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGtCQUFBO0FERUo7QUNESTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQU0sU0FBQTtFQUFTLGdCQUFBO0VBQWdCLG1CQUFBO0VBQXFCLFdBQUE7RUFDcEQsT0FBQTtFQUFPLFFBQUE7RUFBUSxpQkFBQTtFQUFpQixrQkFBQTtFQUFvQixXQUFBO0VBQ3BELHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEV1I7QUNWUTtFQUNHLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBRGM5QztBQ1pRO0VBQ0ksY0FBQTtFQUFnQixZQUFBO0VBQWMsaUJBQUE7QURnQjFDO0FDZlk7RUFDSSxZQUFBO0VBQWMsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsWUFBQTtBRHFCeEY7QUNuQlk7RUFDSSxZQUFBO0VBQWEsa0JBQUE7RUFBb0IsZUFBQTtBRHVCakQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5sb2dpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbiAubG9naW4tZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgLyog5LiK5LiL57ud5a+55bGF5LitICovXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAvKiDlt6blj7Pnu53lr7nlsYXkuK0gKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sb2dpbiAubG9naW4tZm9ybSAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxvZ2luIC5sb2dpbi1mb3JtIC5mb3JtLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbi5sb2dpbiAubG9naW4tZm9ybSAuZm9ybS1pdGVtIGlucHV0IHtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLmxvZ2luIC5sb2dpbi1mb3JtIC5mb3JtLWl0ZW0gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi13aWR0aDogODBweDtcbn0iLCIubG9naW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgdG9wOjA7Ym90dG9tOjA7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzsgIC8qIOS4iuS4i+e7neWvueWxheS4rSAqL1xyXG4gICAgICAgIGxlZnQ6MDtyaWdodDowO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87ICAvKiDlt6blj7Pnu53lr7nlsYXkuK0gKi9cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyBmb250LXdlaWdodDogNDAwOyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0taXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMzJweDsgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGJvcmRlci1jb2xvcjogI2NjYzsgdGV4dC1pbmRlbnQ6IDVweDsgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4OyBib3JkZXItcmFkaXVzOiA0cHg7IG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/httpclient.service */
    "./src/app/services/httpclient.service.ts");
    /* harmony import */


    var src_app_utils_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/utils/Constants */
    "./src/app/utils/Constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, httpClientService, httpClient) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.httpClientService = httpClientService;
        this.httpClient = httpClient;
        this.user = {
          username: "admin",
          password: "123456"
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleLogin",
        value: function handleLogin() {
          var _this = this;

          if (this.user.username.length < 1) {
            alert("请输入用户名");
          } else if (this.user.password.length < 1) {
            alert("请输入密码");
          } else {
            this.httpClientService.post("api/user/login", this.user).subscribe(function (res) {
              if (res && res.username) {
                window.localStorage.setItem(src_app_utils_Constants__WEBPACK_IMPORTED_MODULE_4__["tokenKey"], JSON.stringify(res));

                _this.router.navigateByUrl("/home");
              } else {
                alert("登录失败，请重新登录");
              }
            });
          } //this.router.navigateByUrl("/home")

        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_3__["HttpClientService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/httpclient.service */
    "./src/app/services/httpclient.service.ts");

    var LoginModule = /*#__PURE__*/_createClass(function LoginModule() {
      _classCallCheck(this, LoginModule);
    });

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: "",
        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
      providers: [src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map