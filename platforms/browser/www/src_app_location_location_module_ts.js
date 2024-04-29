(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_location_location_module_ts"],{

/***/ 5:
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPageRoutingModule": () => (/* binding */ LocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page */ 1785);




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_0__.LocationPage
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ 7718:
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPageModule": () => (/* binding */ LocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page */ 1785);
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-routing.module */ 5);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let LocationPageModule = class LocationPageModule {
};
LocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _location_routing_module__WEBPACK_IMPORTED_MODULE_1__.LocationPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _location_page__WEBPACK_IMPORTED_MODULE_0__.LocationPage
        ]
    })
], LocationPageModule);



/***/ }),

/***/ 1785:
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPage": () => (/* binding */ LocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location.page.html */ 6619);
/* harmony import */ var _location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page.scss */ 5883);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket/socket.service */ 5266);








let LocationPage = class LocationPage {
    constructor(api, controller, route, socket) {
        this.api = api;
        this.controller = controller;
        this.route = route;
        this.socket = socket;
        this.loader = false;
        this.authorities = [];
    }
    ngOnInit() {
        this.loader = true;
        this.route.params.subscribe(params => {
            this.project_id = params.id;
            this.api.get(`projects/authorities/${this.project_id}`)
                .subscribe((res) => {
                this.loader = false;
                this.authorities = res.data;
            }, (err) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            });
        });
    }
    locate(authority) {
        let event_count = 0;
        this.controller.presentLoading('Waiting for response, please wait...')
            .then((loading) => {
            let eventTimeout = setTimeout(() => {
                this.controller.presentAlert('Information', 'No response from the project authority device, either the surelog app is not running or the device is not connected to the internet.');
                loading.dismiss();
            }, 10000);
            this.socket.requestLocation(authority.user_id.id, this.project_id);
            this.socket.receiveEvent('send-location')
                .subscribe((data) => {
                event_count++;
                clearTimeout(eventTimeout);
                if (event_count == 1) {
                    let ping_data = {
                        project_id: this.project_id,
                        authority_id: authority.user_id.id,
                        location: `${data.latitude},${data.longitude}`
                    };
                    this.api.post('projects/location/store', ping_data)
                        .subscribe((res) => {
                        authority.location = res.data.location;
                        authority.created_at = res.data.created_at;
                        loading.dismiss();
                    }, (err) => {
                        loading.dismiss();
                        this.controller.showErrorAlert(err);
                    });
                }
            });
        });
    }
};
LocationPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService }
];
LocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationPage);



/***/ }),

/***/ 5883:
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6619:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'LOCATE PROJECT AUTHORITIES'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Project Authorities\r\n        <br><br>\r\n        <div style=\"overflow: auto\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            Project Authority Name\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            Last detected location\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            Last updated at\r\n                        </th>\r\n                        <th class=\"center text-muted\">\r\n                            Locate\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let authority of authorities\" class=\"bg-light data-row\">\r\n                        <th>{{authority.user_id.name}}</th>\r\n                        <th>\r\n                            <a href=\"{{authority.location}}\" *ngIf=\"authority.location !== null\" target=\"_blank\">Click to view location</a>\r\n                            <span *ngIf=\"authority.location == null\">N/A</span>\r\n                        </th>\r\n                        <th>\r\n                            <span *ngIf=\"authority.created_at !== null\">{{authority.created_at | date: 'medium'}}</span>\r\n                            <span *ngIf=\"authority.created_at == null\">N/A</span>\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <span class=\"pointer text-success\" title=\"Locate\" style=\"font-size: 1.5em;\" (click)=\"locate(authority)\">\r\n                                <ion-icon name=\"locate-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_location_location_module_ts.js.map