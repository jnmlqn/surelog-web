(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_employee-form_employee-form_module_ts"],{

/***/ 389:
/*!***************************************************************!*\
  !*** ./src/app/employee-form/employee-form-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeFormPageRoutingModule": () => (/* binding */ EmployeeFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _employee_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-form.page */ 1358);




const routes = [
    {
        path: '',
        component: _employee_form_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeFormPage
    }
];
let EmployeeFormPageRoutingModule = class EmployeeFormPageRoutingModule {
};
EmployeeFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeFormPageRoutingModule);



/***/ }),

/***/ 5678:
/*!*******************************************************!*\
  !*** ./src/app/employee-form/employee-form.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeFormPageModule": () => (/* binding */ EmployeeFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _employee_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-form.page */ 1358);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _employee_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-form-routing.module */ 389);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let EmployeeFormPageModule = class EmployeeFormPageModule {
};
EmployeeFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _employee_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeFormPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _employee_form_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeFormPage
        ]
    })
], EmployeeFormPageModule);



/***/ }),

/***/ 1358:
/*!*****************************************************!*\
  !*** ./src/app/employee-form/employee-form.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeFormPage": () => (/* binding */ EmployeeFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_employee_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./employee-form.page.html */ 8978);
/* harmony import */ var _employee_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-form.page.scss */ 4887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);









let EmployeeFormPage = class EmployeeFormPage {
    constructor(route, api, controller, modalCtrl) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.modalCtrl = modalCtrl;
        this.id = null;
        this.active_tab = 1;
        this.user = null;
        this.address_details = null;
        this.roles = [];
        this.departments = [];
        this.employment_types = [];
        this.civil_statuses = [];
        this.cities = [];
        this.zipcodes = [];
        this.data = {
            office_schedule: 0,
        };
        this.loader = false;
    }
    ngOnInit() {
        this.loader = true;
        // get address details
        this.api.get(`zipcodes`)
            .subscribe((res) => {
            this.address_details = res.data;
            // get HR details
            this.api.get(`hr-data`)
                .subscribe((res) => {
                this.civil_statuses = res.data.civil_statuses;
                this.departments = res.data.departments;
                this.employment_types = res.data.employment_types;
                this.roles = res.data.roles;
                // Check parameters for employee id
                this.route.params.subscribe(params => {
                    this.id = params.id;
                    if (this.id !== null && this.id !== undefined) {
                        // get employee information
                        this.api.get(`employees/${this.id}`)
                            .subscribe((res) => {
                            this.loader = false;
                            this.user = res.data;
                            this.data.employee_id = this.user.employee_id;
                            this.data.email = this.user.email;
                            this.data.first_name = this.user.first_name;
                            this.data.middle_name = this.user.middle_name;
                            this.data.last_name = this.user.last_name;
                            this.data.extension = this.user.extension;
                            this.data.birthday = this.user.birthday;
                            this.data.mobile = this.user.mobile;
                            this.data.position = this.user.position;
                            this.data.rate = this.user.rate;
                            this.data.taxable_allowance = this.user.taxable_allowance;
                            this.data.tin = this.user.tin;
                            this.data.sss_number = this.user.sss_number;
                            this.data.pagibig_number = this.user.pagibig_number;
                            this.data.philhealth_number = this.user.philhealth_number;
                            this.data.civil_status_id = this.user.civil_status_id.toString();
                            this.data.department_id = this.user.department_id.toString();
                            this.data.employment_type_id = this.user.employment_type_id.toString();
                            this.data.role_id = this.user.role_id.toString();
                            this.data.supervisor = this.user.supervisor ? this.user.supervisor.id : null;
                            this.data.supervisor_name = this.user.supervisor ? this.user.supervisor.name : null;
                            if (this.user.address) {
                                this.data.address = this.user.address.address;
                                this.data.province_id = this.user.address.zipcode_id.city_id.province_id.id.toString();
                                this.data.city_id = this.user.address.zipcode_id.city_id.id.toString();
                                this.data.zipcode_id = this.user.address.zipcode_id.id.toString();
                                this.selectProvice();
                                this.selectCity();
                            }
                            if (this.user.office_schedule) {
                                this.data.office_schedule = true;
                                this.data.monday_in = this.user.office_schedule.monday_in;
                                this.data.monday_out = this.user.office_schedule.monday_out;
                                this.data.tuesday_in = this.user.office_schedule.tuesday_in;
                                this.data.tuesday_out = this.user.office_schedule.tuesday_out;
                                this.data.wednesday_in = this.user.office_schedule.wednesday_in;
                                this.data.wednesday_out = this.user.office_schedule.wednesday_out;
                                this.data.thursday_in = this.user.office_schedule.thursday_in;
                                this.data.thursday_out = this.user.office_schedule.thursday_out;
                                this.data.friday_in = this.user.office_schedule.friday_in;
                                this.data.friday_out = this.user.office_schedule.friday_out;
                                this.data.saturday_in = this.user.office_schedule.saturday_in;
                                this.data.saturday_out = this.user.office_schedule.saturday_out;
                                this.data.sunday_in = this.user.office_schedule.sunday_in;
                                this.data.sunday_out = this.user.office_schedule.sunday_out;
                            }
                        }, (err) => {
                            this.controller.showErrorAlert(err);
                            this.loader = false;
                        });
                    }
                    else {
                        this.loader = false;
                    }
                });
            }, (err) => {
                this.controller.showErrorAlert(err);
                this.loader = false;
            });
        }, (err) => {
            this.controller.showErrorAlert(err);
            this.loader = false;
        });
    }
    selectProvice() {
        this.cities = this.address_details.cities.filter((res) => {
            return res.province_id == this.data.province_id;
        });
    }
    selectCity() {
        this.zipcodes = this.address_details.zipcodes.filter((res) => {
            return res.city_id == this.data.city_id;
        });
    }
    save() {
        let url = '';
        if (this.id !== null && this.id !== undefined) {
            url = `employees/update/${this.id}`;
        }
        else {
            url = `employees/store`;
        }
        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
                .subscribe((res) => {
                loading.dismiss();
                this.controller.presentAlert('Success', res.message);
                if (this.id == null || this.id == undefined) {
                    this.cities = [];
                    this.zipcodes = [];
                    this.data = {
                        office_schedule: 0,
                    };
                }
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
    searchEmployee() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__.SearchPage,
                componentProps: {
                    title: 'Search Employee',
                    url: 'employees?get=true&limit=20&keyword=',
                    defaultLabel: 'Not Applicable',
                    defaultValue: ''
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data !== undefined) {
                this.data.supervisor = data.data.id;
                this.data.supervisor_name = data.data.name;
            }
        });
    }
};
EmployeeFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
EmployeeFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-employee-form',
        template: _raw_loader_employee_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_employee_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmployeeFormPage);



/***/ }),

/***/ 4887:
/*!*******************************************************!*\
  !*** ./src/app/employee-form/employee-form.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1mb3JtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8978:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-form/employee-form.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'EMPLOYEES'\" [icon]=\"'people-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"save()\">\r\n            <ion-icon name=\"save-outline\"></ion-icon>\r\n            &nbsp;\r\n            <label>Save Employee</label>\r\n        </button>\r\n        {{id == undefined || id == null ? 'Create' : 'Edit'}} Employee\r\n        <br><br>\r\n        <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n                <span class=\"nav-link pointer {{active_tab == 1 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 1\">\r\n                    Basic Information\r\n                </span>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <span class=\"nav-link pointer {{active_tab == 2 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 2\">\r\n                    HR Details\r\n                </span>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <span class=\"nav-link pointer {{active_tab == 3 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 3\">\r\n                    Office Schedule\r\n                </span>\r\n            </li>\r\n        </ul>\r\n        <br>\r\n        \r\n        <!-- Basic Information Tab -->\r\n        <div [hidden]=\"active_tab !== 1\">\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Role</label>\r\n                    <ion-select placeholder=\"Select Role\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.role_id\">\r\n                        <ion-select-option value=\"{{role.id}}\" *ngFor=\"let role of roles\">\r\n                            {{role.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Email Address</label>\r\n                    <input type=\"email\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.email\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Password</label>\r\n                    <input type=\"password\" class=\"form-control form-control-sm\" placeholder=\"Enter a new password (optional)\" [(ngModel)]=\"data.password\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">First Name</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.first_name\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Middle Name</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.middle_name\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Last Name</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.last_name\">\r\n                </div>\r\n                <div class=\"col-md-2 mb-2\">\r\n                    <label class=\"text-muted\">Extension</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.extension\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Birthday</label>\r\n                    <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.birthday\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Mobile Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"09xxxxxxxxx\" [(ngModel)]=\"data.mobile\">\r\n                </div>\r\n                <div class=\"col-md-5 mb-2\">\r\n                    <label class=\"text-muted\">Address Line</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.address\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Select Province</label>\r\n                    <ion-select placeholder=\"Select Province\" class=\"form-control form-control-sm\" (ionChange)=\"selectProvice()\" [(ngModel)]=\"data.province_id\">\r\n                        <ion-select-option value=\"{{province.id}}\" *ngFor=\"let province of address_details ? address_details.provinces : []\">\r\n                            {{province.province}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Select City</label>\r\n                    <ion-select placeholder=\"Select City\" class=\"form-control form-control-sm\" [disabled]=\"cities.length < 1\"  (ionChange)=\"selectCity()\" [(ngModel)]=\"data.city_id\">\r\n                        <ion-select-option value=\"{{city.id}}\" *ngFor=\"let city of cities\">\r\n                            {{city.city}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Select Zipcode</label>\r\n                    <ion-select placeholder=\"Select Zipcode\" class=\"form-control form-control-sm\" [disabled]=\"zipcodes.length < 1\" [(ngModel)]=\"data.zipcode_id\">\r\n                        <ion-select-option value=\"{{zipcode.id}}\" *ngFor=\"let zipcode of zipcodes\">\r\n                            {{zipcode.area}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- HR Details Tab -->\r\n        <div [hidden]=\"active_tab !== 2\">\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Immediate Supervisor/Manager</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm bg-light\" [(ngModel)]=\"data.supervisor_name\" readonly placeholder=\"Click to search\" (click)=\"searchEmployee()\" style=\"cursor: pointer;\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Employee Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.employee_id\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Position</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.position\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Basic Pay</label>\r\n                    <input type=\"number\" step=\"any\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.rate\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Tax Identification Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.tin\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">SSS Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.sss_number\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Pag-ibig Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.pagibig_number\">\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Philhealth Number</label>\r\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.philhealth_number\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row mb-3\">\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Department</label>\r\n                    <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.department_id\">\r\n                        <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                            {{department.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Employment Type</label>\r\n                    <ion-select placeholder=\"Select Employment Type\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.employment_type_id\">\r\n                        <ion-select-option value=\"{{employment_type.id}}\" *ngFor=\"let employment_type of employment_types\">\r\n                            {{employment_type.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Civil Status</label>\r\n                    <ion-select placeholder=\"Select Civil Status\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.civil_status_id\">\r\n                        <ion-select-option value=\"{{civil_status.id}}\" *ngFor=\"let civil_status of civil_statuses\">\r\n                            {{civil_status.name}}\r\n                        </ion-select-option>\r\n                    </ion-select>\r\n                </div>\r\n                <div class=\"col-md-3 mb-2\">\r\n                    <label class=\"text-muted\">Taxable Allowance</label>\r\n                    <input type=\"number\" step=\"any\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.taxable_allowance\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Office Schedule -->\r\n        <div [hidden]=\"active_tab !== 3\">\r\n            <label class=\"switch\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"data.office_schedule\">\r\n                <span class=\"slider round\"></span>\r\n            </label>\r\n\r\n            &nbsp;&nbsp;<label class=\"text-muted\">With Office Schedule</label>\r\n\r\n            <br><br>\r\n\r\n            <div *ngIf=\"data.office_schedule\">\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Day</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <label class=\"text-muted\">Time In</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <label class=\"text-muted\">Time Out</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Monday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.monday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.monday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Tuesday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.tuesday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.tuesday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Wednesday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.wednesday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.wednesday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Thursday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.thursday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.thursday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Friday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.friday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.friday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Saturday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.saturday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.saturday_out\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mb-3\">\r\n                    <div class=\"col-2 mb-2\">\r\n                        <label class=\"text-muted\">Sunday</label>\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.sunday_in\">\r\n                    </div>\r\n                    <div class=\"col-3 mb-2\">\r\n                        <input type=\"time\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.sunday_out\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_employee-form_employee-form_module_ts.js.map