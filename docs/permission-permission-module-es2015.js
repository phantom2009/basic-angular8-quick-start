(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permission-permission-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permission/permission.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permission/permission.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n    权限\n-->\n<div class=\"container permission\">\n    <div class=\"search-form\">\n        <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSubmit(searchForm)\" (ngReset)=\"onReset()\">\n            <span>\n                <label>名称:</label>\n                <input id=\"name\" type=\"text\" formControlName=\"name\" />\n            </span>\n            <span>\n                <label>类型:</label>\n                <select id=\"type\" formControlName=\"type\">\n                    <option value=\"perm_type_menu\">菜单</option>\n                    <option value=\"perm_type_interface\">接口</option>\n                </select>\n            </span>\n            <span>\n                <button class=\"button\" type=\"submit\">查询</button>\n                <button class=\"button\" type=\"reset\">重置</button>\n            </span>\n        </form>\n    </div>\n\n\n    <div class=\"edit-permission-dialog\">\n        <h3>编辑权限</h3>\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onEditSubmit(editForm)\" (ngReset)=\"onEditReset()\">\n            <span>                \n                <label>名称:</label>\n                <input id=\"name\" type=\"text\" formControlName=\"name\" />             \n            </span>    \n            \n            <span>\n                <label>路径：</label>\n                <input id=\"url\" type=\"text\" formControlName=\"url\" />\n            </span>\n            \n            <span>\n                <label>鉴权标识：</label>\n                <input id=\"perms\" type=\"text\" formControlName=\"perms\" />\n            </span>\n\n            <br />\n            <span>\n                <input type=\"checkbox\" (change)=\"onPrepareMenuOption($event)\" />菜单项\n            </span>\n\n            <br />           \n            <span>\n                <label>父菜单</label>\n                <select \n                    id=\"rootMenu\" \n                    name=\"rootMenu\" \n                    formControlName=\"rootMenu\">\n                    <option value=\"0\">根菜单</option>\n                    <option *ngFor=\"let menu of rootMenus\" [value]=\"menu.id\">\n                        {{menu.name}}\n                    </option>\n                </select>\n            </span>\n\n            <span>\n                <label>排序</label>\n                <input id=\"sort\" type=\"text\" placeholder=\"请输入排序值\" formControlName=\"sort\" /> \n            </span>\n            \n            <span>\n                <label>icon</label>\n                <input id=\"icon\" type=\"text\" placeholder=\"请输入icon名称\" formControlName=\"icon\" />\n            </span>\n\n            <span>\n                <label>是否锁定</label>                \n                <select id=\"isLock\" placeholder=\"请选择是否锁定\" formControlName=\"isLock\">\n                    <option value=\"0\">否</option>\n                    <option value=\"1\">是</option>\n                </select>\n            </span>\n        </form>\n    </div>\n    <!-- datagrid -->\n    \n\n</div>\n");

/***/ }),

/***/ "./src/app/pages/permission/permission.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/permission/permission.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/permission/permission.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/permission/permission.component.ts ***!
  \**********************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/httpclient.service */ "./src/app/services/httpclient.service.ts");





let PermissionComponent = class PermissionComponent {
    constructor(httpClient, formBuilder, httpClientService) {
        this.httpClient = httpClient;
        this.formBuilder = formBuilder;
        this.httpClientService = httpClientService;
        this.searchForm = this.formBuilder.group({
            name: "",
            type: ""
        });
        this.editForm = this.formBuilder.group({
            name: [{ value: "", disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: "",
            perms: "",
            rootMenu: [{ value: "0", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sort: [{ value: "", disabled: true }],
            icon: [{ value: "", disabled: true }],
            isLock: [{ value: "0", disabled: true }]
        });
    }
    ngOnInit() {
        window.setTimeout(() => {
            this.rootMenus = [{
                    id: "1003",
                    name: "金融机构"
                }, {
                    id: "1004",
                    name: "展业机构"
                }, {
                    id: "1005",
                    name: "贷款产品"
                }, {
                    id: "1006",
                    name: "系统维护"
                }];
        }, 3000);
        //console.log(environment);
        // this.httpClient.get(environment.serverURL + "todos/getAllTodos")
        // 	.subscribe((res)=>{
        // 		console.log(res);
        // })
        // const headers = {
        // 	"Access-Token":"custom header value",
        // 	"Content-type":"application/json"
        // }
        // this.httpClient.get(environment.serverURL + "todo/getAllTodos",{
        // 	params:{
        // 		id:"1001"
        // 	},
        // 	headers:headers
        // }).subscribe(res=>{    
        //     console.log(res);
        // },(err:HttpErrorResponse)=>{  
        //     if(err.error instanceof Error){
        //         console.log("客户端出错",err.error.message)
        //     }else{
        //         console.log(`服务器出错${err.status}返回：${err.error}`)
        //     }
        // })	
        // this.httpClientService.get("todo/getAllTodos").subscribe((res)=>{
        // 	console.log(res);
        // })
    }
    onSubmit(form) {
        console.log(form);
    }
    onReset() {
        this.searchForm.reset();
    }
    onEditSubmit(form) {
        console.log(form);
    }
    onEditReset() {
    }
    onPrepareMenuOption(evt) {
        if (evt.target.checked) {
            this.editForm.controls["rootMenu"].enable();
            this.editForm.controls["sort"].enable();
            this.editForm.controls["icon"].enable();
            this.editForm.controls["isLock"].enable();
        }
        else {
            this.editForm.controls["rootMenu"].disable();
            this.editForm.controls["sort"].disable();
            this.editForm.controls["icon"].disable();
            this.editForm.controls["isLock"].disable();
        }
    }
};
PermissionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"] }
];
PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permission',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/permission/permission.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./permission.component.scss */ "./src/app/pages/permission/permission.component.scss")).default]
    })
], PermissionComponent);



/***/ }),

/***/ "./src/app/pages/permission/permission.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/permission/permission.module.ts ***!
  \*******************************************************/
/*! exports provided: PermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _permission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permission.component */ "./src/app/pages/permission/permission.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/httpclient.service */ "./src/app/services/httpclient.service.ts");








let PermissionModule = class PermissionModule {
};
PermissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_permission_component__WEBPACK_IMPORTED_MODULE_5__["PermissionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
                    path: "",
                    component: _permission_component__WEBPACK_IMPORTED_MODULE_5__["PermissionComponent"]
                }]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_7__["HttpClientService"]]
    })
], PermissionModule);



/***/ })

}]);
//# sourceMappingURL=permission-permission-module-es2015.js.map