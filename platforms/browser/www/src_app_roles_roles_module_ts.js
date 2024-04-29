(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_roles_roles_module_ts"],{

/***/ 3703:
/*!***********************************************!*\
  !*** ./src/app/roles/roles-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesPageRoutingModule": () => (/* binding */ RolesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _roles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.page */ 6321);




const routes = [
    {
        path: '',
        component: _roles_page__WEBPACK_IMPORTED_MODULE_0__.RolesPage
    }
];
let RolesPageRoutingModule = class RolesPageRoutingModule {
};
RolesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RolesPageRoutingModule);



/***/ }),

/***/ 7190:
/*!***************************************!*\
  !*** ./src/app/roles/roles.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesPageModule": () => (/* binding */ RolesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _roles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles.page */ 6321);
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles-routing.module */ 3703);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let RolesPageModule = class RolesPageModule {
};
RolesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_1__.RolesPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _roles_page__WEBPACK_IMPORTED_MODULE_0__.RolesPage
        ]
    })
], RolesPageModule);



/***/ }),

/***/ 6321:
/*!*************************************!*\
  !*** ./src/app/roles/roles.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesPage": () => (/* binding */ RolesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_roles_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./roles.page.html */ 6879);
/* harmony import */ var _roles_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles.page.scss */ 1026);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);






let RolesPage = class RolesPage {
    constructor(api, controller) {
        this.api = api;
        this.controller = controller;
        this.keyword = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sortBy = 'created_at';
        this.sorting = 'desc';
        this.roles = {
            data: {
                data: null
            }
        };
        this.loader = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getRoles();
    }
    getRoles() {
        this.loader = true;
        this.api.get(`roles?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.roles = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    deleteRole(role) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`roles/delete/${role.id}`, null)
                            .subscribe((res) => {
                            loading.dismiss();
                            this.controller.presentAlert('Success', res.message);
                            let i = this.roles.data.data.indexOf(role);
                            this.roles.data.data.splice(i, 1);
                        }, (err) => {
                            loading.dismiss();
                            this.controller.showErrorAlert(err);
                        });
                    });
                }
            },
            {
                text: 'no'
            }
        ];
        this.controller.presentAlert('Warning', 'Are you sure to delete this role?', buttons);
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
        this.getRoles();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getRoles();
        }, 1000);
    }
    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getRoles();
    }
};
RolesPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
RolesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-roles',
        template: _raw_loader_roles_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_roles_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RolesPage);



/***/ }),

/***/ 1026:
/*!***************************************!*\
  !*** ./src/app/roles/roles.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6879:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roles/roles.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ROLES'\" [icon]=\"'key-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Roles\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Search</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\r\n            </div>\r\n            <div class=\"col-md-9 mt-1\">\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" routerLink=\"/roles/create\">\r\n                    <ion-icon name=\"add-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>New Role</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n        <div style=\"overflow: auto\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th width=\"25%\" class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('name')\">\r\n                                Name\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th width=\"50%\" class=\"text-muted\">\r\n                            Permissions\r\n                        </th>\r\n                        <th width=\"25%\" class=\" text-muted\">\r\n                            <div class=\"center\">Action</div>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let role of roles.data.data\" class=\"bg-light data-row\">\r\n                        <th style=\"vertical-align: text-top !important;\">{{role.name}}</th>\r\n                        <th>\r\n                            <table class=\"table border border-primary mt-2\">\r\n                                <tr>\r\n                                   <th width=\"20%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Module</div></th>\r\n                                   <th width=\"16%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Browse</div></th>\r\n                                   <th width=\"16%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Read</div></th>\r\n                                   <th width=\"16%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Edit</div></th>\r\n                                   <th width=\"16%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Add</div></th>\r\n                                   <th width=\"16%\" class=\"border-end border-bottom border-primary\"><div class=\"center\">Delete</div></th> \r\n                                </tr>\r\n                                <tr *ngFor=\"let access of role.access\">\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\">{{access.module}}</div>\r\n                                    </th>\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\"><b>{{access.permissions.browse ? '✓' : ''}}</b></div>\r\n                                    </th>\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\"><b>{{access.permissions.read ? '✓' : ''}}</b></div>\r\n                                    </th>\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\"><b>{{access.permissions.edit ? '✓' : ''}}</b></div>\r\n                                    </th>\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\"><b>{{access.permissions.add ? '✓' : ''}}</b></div>\r\n                                    </th>\r\n                                    <th class=\"border-end border-bottom border-primary\">\r\n                                        <div class=\"center\"><b>{{access.permissions.delete ? '✓' : ''}}</b></div>\r\n                                    </th>\r\n                                </tr>\r\n                            </table>\r\n                        </th>\r\n                        <th style=\"vertical-align: text-top !important;\">\r\n                            <div class=\"center\">\r\n                                <span class=\"pointer text-primary\" title=\"Edit\" style=\"font-size: 1.5em;\" routerLink=\"/roles/{{role.id}}/edit\">\r\n                                    <ion-icon name=\"pencil-outline\"></ion-icon>\r\n                                </span>\r\n                                &nbsp;&nbsp;\r\n                                <span class=\"pointer text-danger\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRole(role)\">\r\n                                    <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                </span>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"bg-light data-row\">\r\n                        <th>\r\n                            <div class=\"row g-3 align-items-center\">\r\n                                <div class=\"col-auto\">\r\n                                    <label class=\"col-form-label\">Show</label>\r\n                                </div>\r\n                                <div class=\"col-auto p-0\">\r\n                                    <ion-select placeholder=\"Results Per Page\" class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\r\n                                        <ion-select-option value=\"5\">5</ion-select-option>\r\n                                        <ion-select-option value=\"10\">10</ion-select-option>\r\n                                        <ion-select-option value=\"15\">15</ion-select-option>\r\n                                        <ion-select-option value=\"20\">20</ion-select-option>\r\n                                    </ion-select>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                <span>\r\n                                    per page\r\n                                </span>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th colspan=\"6\" style=\"vertical-align: middle !important;\">\r\n                            <div class=\"right\" *ngIf=\"roles.data.last_page > 1\">\r\n                                <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of roles.data.links\" (click)=\"paginate(link.label)\">\r\n                                    {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\r\n                                </button>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_roles_roles_module_ts.js.map