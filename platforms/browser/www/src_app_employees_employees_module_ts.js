(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_employees_employees_module_ts"],{

/***/ 4758:
/*!*******************************************************!*\
  !*** ./src/app/employees/employees-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesPageRoutingModule": () => (/* binding */ EmployeesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _employees_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees.page */ 2156);




const routes = [
    {
        path: '',
        component: _employees_page__WEBPACK_IMPORTED_MODULE_0__.EmployeesPage
    }
];
let EmployeesPageRoutingModule = class EmployeesPageRoutingModule {
};
EmployeesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeesPageRoutingModule);



/***/ }),

/***/ 7230:
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesPageModule": () => (/* binding */ EmployeesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _employees_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees.page */ 2156);
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-routing.module */ 4758);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let EmployeesPageModule = class EmployeesPageModule {
};
EmployeesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _employees_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeesPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _employees_page__WEBPACK_IMPORTED_MODULE_0__.EmployeesPage
        ]
    })
], EmployeesPageModule);



/***/ }),

/***/ 2156:
/*!*********************************************!*\
  !*** ./src/app/employees/employees.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeesPage": () => (/* binding */ EmployeesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_employees_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./employees.page.html */ 3034);
/* harmony import */ var _employees_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees.page.scss */ 9437);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);






let EmployeesPage = class EmployeesPage {
    constructor(api, controller) {
        this.api = api;
        this.controller = controller;
        this.keyword = '';
        this.departments = [];
        this.roles = [];
        this.role_id = '';
        this.department_id = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sort_by = 'created_at';
        this.sorting = 'desc';
        this.users = {
            data: {
                data: null
            }
        };
        this.loader = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.api.get(`hr-data`)
            .subscribe((res) => {
            this.departments = res.data.departments;
            this.roles = res.data.roles;
        }, (err) => {
            console.log(err);
        });
        this.getUsers();
    }
    getUsers() {
        this.loader = true;
        this.api.get(`employees?page=${this.page}&keyword=${this.keyword}&sort_by=${this.sort_by}&sorting=${this.sorting}&department_id=${this.department_id}&role_id=${this.role_id}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.users = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    deleteEmployee(user) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`employees/delete/${user.id}`, null)
                            .subscribe((res) => {
                            loading.dismiss();
                            this.controller.presentAlert('Success', res.message);
                            let i = this.users.data.data.indexOf(user);
                            this.users.data.data.splice(i, 1);
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
        this.controller.presentAlert('Warning', 'Are you sure to delete this employee?', buttons);
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
        this.getUsers();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getUsers();
        }, 1000);
    }
    sortData(sort_by) {
        this.sort_by = sort_by;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getUsers();
    }
};
EmployeesPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
EmployeesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-employees',
        template: _raw_loader_employees_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_employees_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmployeesPage);



/***/ }),

/***/ 9437:
/*!***********************************************!*\
  !*** ./src/app/employees/employees.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3034:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'EMPLOYEES'\" [icon]=\"'people-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Employees\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Search</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Filter by Role</label>\r\n                <ion-select placeholder=\"Select Role\" class=\"form-control form-control-sm\" [(ngModel)]=\"role_id\" (ionChange)=\"getUsers()\">\r\n                    <ion-select-option value=\"\">All Roles</ion-select-option>\r\n                    <ion-select-option value=\"{{role.id}}\" *ngFor=\"let role of roles\">\r\n                        {{role.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Filter by Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"department_id\" (ionChange)=\"getUsers()\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <br>\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" routerLink=\"/employees/create\">\r\n                    <ion-icon name=\"add-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>New Employee</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n        <div style=\"overflow: auto\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('email')\">\r\n                                Email\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'email' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('employee_id')\">\r\n                                Employee Number\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'employee_id' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('first_name')\">\r\n                                First Name\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'first_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('last_name')\">\r\n                                Last Name\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'last_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Role\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Department\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Action\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of users.data.data\" class=\"bg-light data-row\">\r\n                        <th>{{user.email}}</th>\r\n                        <th>{{user.employee_id ? user.employee_id : 'N/A'}}</th>\r\n                        <th>{{user.first_name}}</th>\r\n                        <th>{{user.last_name}}</th>\r\n                        <th>{{user.role_id ? user.role_id.name : 'N/A'}}</th>\r\n                        <th>{{user.department_id ? user.department_id.name : 'N/A'}}</th>\r\n                        <th>\r\n                            <span class=\"pointer text-primary\" title=\"Edit\" style=\"font-size: 1.5em;\" routerLink=\"/employees/{{user.id}}/edit\">\r\n                                <ion-icon name=\"pencil-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-danger\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteEmployee(user)\">\r\n                                <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"bg-light data-row\">\r\n                        <th>\r\n                            <div class=\"row g-3 align-items-center\">\r\n                                <div class=\"col-auto\">\r\n                                    <label class=\"col-form-label\">Show</label>\r\n                                </div>\r\n                                <div class=\"col-auto p-0\">\r\n                                    <ion-select placeholder=\"Results Per Page\" class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\r\n                                        <ion-select-option value=\"5\">5</ion-select-option>\r\n                                        <ion-select-option value=\"10\">10</ion-select-option>\r\n                                        <ion-select-option value=\"15\">15</ion-select-option>\r\n                                        <ion-select-option value=\"20\">20</ion-select-option>\r\n                                    </ion-select>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                <span>\r\n                                    per page\r\n                                </span>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th colspan=\"6\" style=\"vertical-align: middle !important;\">\r\n                            <div class=\"right\" *ngIf=\"users.data.last_page > 1\">\r\n                                <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of users.data.links\" (click)=\"paginate(link.label)\">\r\n                                    {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\r\n                                </button>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_employees_employees_module_ts.js.map