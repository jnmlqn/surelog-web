(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
        ]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);







let HomePage = class HomePage {
    constructor(api, controller, menuCtrl) {
        this.api = api;
        this.controller = controller;
        this.menuCtrl = menuCtrl;
        this.keyword = '';
        this.date = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sortBy = 'created_at';
        this.sorting = 'desc';
        this.audit_trails = {
            data: {
                data: null
            }
        };
        this.loader = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getAuditTrails();
        this.menuCtrl.enable(true);
    }
    getAuditTrails() {
        this.loader = true;
        this.api.get(`audit-trails?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&date=${this.date}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.audit_trails = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    paginate(page) {
        if (page == 'pagination.previous') {
            this.page--;
        }
        else if (page == 'pagination.next') {
            this.page++;
        }
        else {
            this.page = page;
        }
        this.getAuditTrails();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getAuditTrails();
        }, 1000);
    }
    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getAuditTrails();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'AUDIT TRAIL'\" [icon]=\"'bar-chart-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Audit Trails\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Search</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Select Date</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"date\" (input)=\"startSearch()\">\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n        <div style=\"overflow: auto\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            Employee Name\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('module')\">\r\n                                Module\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'module' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('message')\">\r\n                                Activity\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'message' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('created_at')\">\r\n                                Date & Time\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'created_at' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let audit_trails of audit_trails.data.data\" class=\"bg-light data-row\">\r\n                        <th width=\"25%\">\r\n                            {{audit_trails.user_id ? (audit_trails.user_id.first_name + ' ' + audit_trails.user_id.last_name) : 'Deleted User'}}\r\n                        </th>\r\n                        <th width=\"25%\">{{audit_trails.module}}</th>\r\n                        <th width=\"25%\">{{audit_trails.message}}</th>\r\n                        <th width=\"25%\">\r\n                            {{audit_trails.created_at | date: 'MMMM dd, yyyy'}}<br>\r\n                            {{audit_trails.created_at | date: 'hh:mm:ss a'}}\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"bg-light data-row\">\r\n                        <th>\r\n                            <div class=\"row g-3 align-items-center\">\r\n                                <div class=\"col-auto\">\r\n                                    <label class=\"col-form-label\">Show</label>\r\n                                </div>\r\n                                <div class=\"col-auto p-0\">\r\n                                    <ion-select class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\r\n                                        <ion-select-option value=\"5\">5</ion-select-option>\r\n                                        <ion-select-option value=\"10\">10</ion-select-option>\r\n                                        <ion-select-option value=\"15\">15</ion-select-option>\r\n                                        <ion-select-option value=\"20\">20</ion-select-option>\r\n                                    </ion-select>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                <span>\r\n                                    per page\r\n                                </span>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th colspan=\"3\" style=\"vertical-align: middle !important;\">\r\n                            <div class=\"right\" *ngIf=\"audit_trails.data.last_page > 1\">\r\n                                <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of audit_trails.data.links\" (click)=\"paginate(link.label)\">\r\n                                    {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\r\n                                </button>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map