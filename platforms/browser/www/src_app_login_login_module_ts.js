(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket/socket.service */ 5266);









let LoginPage = class LoginPage {
    constructor(api, controller, router, menuCtrl, socket) {
        this.api = api;
        this.controller = controller;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.socket = socket;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ionViewDidEnter() {
        this.api.get('me')
            .subscribe((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            this.router.navigateByUrl('/');
        }, (err) => {
            this.router.navigateByUrl('/login');
        });
    }
    login() {
        let body = {
            email: this.email,
            password: this.password
        };
        this.controller.presentLoading('Logging in, please wait...').then((loading) => {
            this.api.login(body)
                .subscribe((res) => {
                localStorage.setItem('surelog-token', res.data.access_token);
                delete res.data.access_token;
                localStorage.setItem('user', JSON.stringify(res.data));
                loading.dismiss();
                this.socket.initialize();
                this.router.navigateByUrl('/');
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#first-div {\n  height: 100vh;\n  background-image: url(/assets/imgs/bg.jpg);\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.form-control {\n  padding: 15px !important;\n  border-radius: 40px !important;\n  border: 0px;\n  color: white !important;\n  background-color: rgba(104, 187, 227, 0.4);\n  text-align: center;\n}\n\n::placeholder {\n  color: white;\n  text-align: center;\n  opacity: 0.8;\n  /* Firefox */\n}\n\n.logo {\n  min-width: 200px;\n  max-width: 200px;\n}\n\n#login-btn {\n  display: block;\n  width: 100%;\n  padding: 15px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #01588f !important;\n  background-color: white;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  border-radius: 40px;\n  border: 1px solid white;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUFhLFlBQUE7QUFFZDs7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRDs7QUFDQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVEIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaXJzdC1kaXYge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1ncy9iZy5qcGcpO1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcblx0cGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcclxuXHRib3JkZXI6ICAwcHg7XHJcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsMTg3LDIyNywgLjQpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRvcGFjaXR5OiAuODsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4ubG9nbyB7XHJcblx0bWluLXdpZHRoOiAyMDBweDtcclxuXHRtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jbG9naW4tYnRuIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRjb2xvcjogIzAxNTg4ZiAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcblx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcblx0Y29sb3I6ICB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"main\" class=\"primary-bg\">        \r\n    <div>\r\n        <form class=\"row justify-content-center\" (submit)=\"login()\" id=\"first-div\">\r\n            <div class=\"col-12 col-lg-4 col-md-6 p-5\">\r\n                <div class=\"center\"><img class=\"logo\" src=\"/assets/imgs/surelog_logo.png\"></div>\r\n\r\n                <br><br><br><br>\r\n\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"EMAIL\" name=\"email\" [(ngModel)]=\"email\" required>\r\n                \r\n                <br><br>\r\n\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"PASSWORD\" name=\"password\" [(ngModel)]=\"password\" required>\r\n\r\n                <br><br>\r\n\r\n                <button id=\"login-btn\">\r\n                    <strong>LOG IN</strong>\r\n                </button>\r\n\r\n                <br>\r\n\r\n                <p class=\"center\">\r\n                    <a routerLink=\"\" class=\"text-light\">Forgot Password?</a>\r\n                </p>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map