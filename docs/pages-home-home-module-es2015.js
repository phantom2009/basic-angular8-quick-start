(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/aside/aside.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/aside/aside.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n    侧边栏\n-->\n<nav class=\"aside\">\n    <div class=\"title-container\">\n        <img class=\"logo\" src=\"assets/i2-logo.png\" alt=\"\" />\n        <span class=\"i2-soft-title\">艾融软件</span>\n    </div>\n    <ul>\n        <li>\n            <a routerLink=\"/home/index\">首页</a>         \n        </li>\n        <li>\n            <a routerLink=\"/home/todos\">todos</a>\n        </li>\n        <li>\n            <span>金融机构</span>\n            <ul>\n                <li>法人机构</li>\n                <li>展业机构</li>\n            </ul>\n        </li>\n        <li>\n            <span>系统管理</span>\n            <ul>\n                <li>\n                    <a routerLink=\"/home/permission\">定义权限</a>\n                </li>\n                <li>\n                    <a routerLink=\"/home/role\">设置角色</a>\n                </li>\n                <li>\n                    <a routerLink=\"/home/user\">添加用户</a>\n                </li>\n            </ul>\n        </li>\n    </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/header/header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/header/header.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n    header    \n-->\n<div class=\"header\">\n    <ul class=\"userinfo\">       \n        <li>\n            <button class=\"btn-login\" (click)=\"onLogout()\">退出</button>\n        </li>\n        <li>\n            admin\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n    布局我们这里先手写，实践中布局要么自己封装通用组件、要么使用组件库，我们稍后给出。    \n-->\n<div class=\"container home\">\n    <app-aside></app-aside>    \n    <div class=\"main\">\n        <app-header></app-header>\n        <div class=\"content\">    \n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/pages/home/components/aside/aside.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/components/aside/aside.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aside {\n  width: 200px;\n  min-height: 100%;\n  float: left;\n  display: block;\n  background-color: #f5f5f5;\n}\n.aside .title-container {\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  display: flex;\n  background-color: #dedede;\n  position: relative;\n}\n.aside .title-container img.logo {\n  width: 36px;\n  position: absolute;\n  left: 15px;\n  top: 7px;\n}\n.aside .title-container span.i2-soft-title {\n  position: absolute;\n  right: 20px;\n  font-size: 24px;\n  letter-spacing: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2FzaWRlL0Y6XFx3czRpb25pY3NcXGJhc2ljLWFuZ3VsYXI4LXF1aWNrLXN0YXJ0L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcY29tcG9uZW50c1xcYXNpZGVcXGFzaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvYXNpZGUvYXNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9hc2lkZS9hc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZXsgICBcclxuICAgIHdpZHRoOiAyMDBweDsgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlOyBcclxuICAgIGZsb2F0OiBsZWZ0OyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG4gICAgLnRpdGxlLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgICAgIFxyXG4gICAgICAgIGltZy5sb2dve1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OjE1cHg7XHJcbiAgICAgICAgICAgIHRvcDo3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4uaTItc29mdC10aXRsZXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYXNpZGUge1xuICB3aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5hc2lkZSAudGl0bGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hc2lkZSAudGl0bGUtY29udGFpbmVyIGltZy5sb2dvIHtcbiAgd2lkdGg6IDM2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiA3cHg7XG59XG4uYXNpZGUgLnRpdGxlLWNvbnRhaW5lciBzcGFuLmkyLXNvZnQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/components/aside/aside.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/home/components/aside/aside.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AsideComponent = class AsideComponent {
    constructor() { }
    ngOnInit() {
    }
};
AsideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aside.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/aside/aside.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aside.component.scss */ "./src/app/pages/home/components/aside/aside.component.scss")).default]
    })
], AsideComponent);



/***/ }),

/***/ "./src/app/pages/home/components/header/header.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/components/header/header.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  height: 60px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.header ul.userinfo {\n  margin-top: 24px;\n  float: right;\n}\n.header ul.userinfo li {\n  float: right;\n  margin-right: 15px;\n}\n.header ul.userinfo li .btn-login {\n  background-color: #fff;\n  border: 0;\n  cursor: pointer;\n  color: royalblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2hlYWRlci9GOlxcd3M0aW9uaWNzXFxiYXNpYy1hbmd1bGFyOC1xdWljay1zdGFydC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDR1o7QURGWTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGhlaWdodDogNjBweDsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgIHVsLnVzZXJpbmZve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgLmJ0bi1sb2dpbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcm95YWxibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmhlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG4uaGVhZGVyIHVsLnVzZXJpbmZvIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhlYWRlciB1bC51c2VyaW5mbyBsaSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmhlYWRlciB1bC51c2VyaW5mbyBsaSAuYnRuLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByb3lhbGJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/components/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/home/components/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/Constants */ "./src/app/utils/Constants.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onLogout() {
        window.localStorage.removeItem(src_app_utils_Constants__WEBPACK_IMPORTED_MODULE_3__["tokenKey"]);
        this.router.navigateByUrl("/login");
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/home/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home .main {\n  overflow: hidden;\n}\n.home .main .content {\n  position: absolute;\n  left: 200px;\n  top: 60px;\n  right: 0;\n  bottom: 0;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9GOlxcd3M0aW9uaWNzXFxiYXNpYy1hbmd1bGFyOC1xdWljay1zdGFydC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgICAgICAgXHJcbiAgICAgICAgLmNvbnRlbnR7ICAgICAgICAgICBcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICAgICAgbGVmdDogMjAwcHg7IFxyXG4gICAgICAgICAgICB0b3A6IDYwcHg7IFxyXG4gICAgICAgICAgICByaWdodDogMDsgXHJcbiAgICAgICAgICAgIGJvdHRvbTogMDsgXHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaG9tZSAubWFpbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZSAubWFpbiAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAwcHg7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpclient.service */ "./src/app/services/httpclient.service.ts");



let HomeComponent = class HomeComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
    }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aside/aside.component */ "./src/app/pages/home/components/aside/aside.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/pages/home/components/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/httpclient.service */ "./src/app/services/httpclient.service.ts");









const routes = [{
        path: "",
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [{
                path: "",
                redirectTo: "index",
                pathMatch: "full"
            }, {
                path: "index",
                loadChildren: () => __webpack_require__.e(/*! import() | index-index-module */ "index-index-module").then(__webpack_require__.bind(null, /*! ./../index/index.module */ "./src/app/pages/index/index.module.ts")).then(m => m.IndexModule)
            }, {
                path: "todos",
                loadChildren: () => __webpack_require__.e(/*! import() | todos-todos-module */ "todos-todos-module").then(__webpack_require__.bind(null, /*! ./../todos/todos.module */ "./src/app/pages/todos/todos.module.ts")).then(m => m.TodosModule)
            }, {
                path: "permission",
                loadChildren: () => Promise.all(/*! import() | permission-permission-module */[__webpack_require__.e("default~pages-login-login-module~pages-test-test-module~permission-permission-module"), __webpack_require__.e("permission-permission-module")]).then(__webpack_require__.bind(null, /*! ./../permission/permission.module */ "./src/app/pages/permission/permission.module.ts")).then(m => m.PermissionModule)
            }]
    }];
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_8__["HttpClientService"]]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map