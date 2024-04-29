(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_hr-data_hr-data_module_ts"],{

/***/ 1589:
/*!***************************************************!*\
  !*** ./src/app/hr-data/hr-data-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrDataPageRoutingModule": () => (/* binding */ HrDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _hr_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hr-data.page */ 4003);




const routes = [
    {
        path: '',
        component: _hr_data_page__WEBPACK_IMPORTED_MODULE_0__.HrDataPage
    }
];
let HrDataPageRoutingModule = class HrDataPageRoutingModule {
};
HrDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HrDataPageRoutingModule);



/***/ }),

/***/ 9746:
/*!*******************************************!*\
  !*** ./src/app/hr-data/hr-data.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrDataPageModule": () => (/* binding */ HrDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _hr_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hr-data.page */ 4003);
/* harmony import */ var _hr_data_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hr-data-routing.module */ 1589);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let HrDataPageModule = class HrDataPageModule {
};
HrDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _hr_data_routing_module__WEBPACK_IMPORTED_MODULE_1__.HrDataPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _hr_data_page__WEBPACK_IMPORTED_MODULE_0__.HrDataPage
        ]
    })
], HrDataPageModule);



/***/ }),

/***/ 4003:
/*!*****************************************!*\
  !*** ./src/app/hr-data/hr-data.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HrDataPage": () => (/* binding */ HrDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_hr_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hr-data.page.html */ 6072);
/* harmony import */ var _hr_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hr-data.page.scss */ 7303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);







let HrDataPage = class HrDataPage {
    constructor(route, api, controller) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.id = null;
        this.active_tab = 1;
        this.loader = false;
        this.data = {
            civil_statuses: [],
            departments: [],
            employment_types: [],
            sss_contributions: [],
            pagibig_contributions: [],
            philhealth_contributions: [],
            taxes: []
        };
        this.months = [
            { val: '01', label: 'Jan' },
            { val: '02', label: 'Feb' },
            { val: '03', label: 'Mar' },
            { val: '04', label: 'Apr' },
            { val: '05', label: 'May' },
            { val: '06', label: 'Jun' },
            { val: '07', label: 'Jul' },
            { val: '08', label: 'Aug' },
            { val: '09', label: 'Sep' },
            { val: '10', label: 'Oct' },
            { val: '11', label: 'Nov' },
            { val: '12', label: 'Dec' }
        ];
        this.years = [];
        this.holidays = {
            data: []
        };
        this.keyword = '';
        this.year = '';
        this.month = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sortBy = 'created_at';
        this.sorting = 'desc';
        let current_year = new Date().getFullYear();
        for (let i = current_year; i >= 2000; i--) {
            this.years.push(i);
        }
    }
    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data/index`)
            .subscribe((res) => {
            this.data = res.data;
            this.loader = false;
        }, (err) => {
            this.controller.showErrorAlert(err);
            this.loader = false;
        });
    }
    addRow(mode) {
        if (mode == 'civil_status') {
            this.data.civil_statuses.unshift({
                id: null,
                name: null
            });
        }
        else if (mode == 'department') {
            this.data.departments.unshift({
                id: null,
                name: null
            });
        }
        else if (mode == 'employment_type') {
            this.data.employment_types.unshift({
                id: null,
                name: null,
                regular_ot_rate: 0,
                legal_hol_rate: 0,
                legal_hol_ot_rate: 0,
                night_diff_rate: 0,
                restday_rate: 0,
                restday_ot_rate: 0,
                special_hol_rate: 0,
                special_hol_ot_rate: 0,
            });
        }
        else if (mode == 'sss_contribution') {
            this.data.sss_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                employer: 0,
                employee: 0
            });
        }
        else if (mode == 'pagibig_contribution') {
            this.data.pagibig_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                employer_rate: 0,
                employee_rate: 0
            });
        }
        else if (mode == 'philhealth_contribution') {
            this.data.philhealth_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                rate: 0
            });
        }
        else if (mode == 'tax') {
            this.data.taxes.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                deduction: 0,
                percentage: 0
            });
        }
        else if (mode == 'holiday') {
            this.holidays.data.unshift({
                id: null,
                date: '',
                holiday: '',
                type: '',
            });
        }
    }
    deleteRow(mode, data) {
        if (mode == 'civil_status') {
            let i = this.data.civil_statuses.indexOf(data);
            this.data.civil_statuses.splice(i, 1);
        }
        else if (mode == 'department') {
            let i = this.data.departments.indexOf(data);
            this.data.departments.splice(i, 1);
        }
        else if (mode == 'employment_type') {
            let i = this.data.employment_types.indexOf(data);
            this.data.employment_types.splice(i, 1);
        }
        else if (mode == 'sss_contribution') {
            let i = this.data.sss_contributions.indexOf(data);
            this.data.sss_contributions.splice(i, 1);
        }
        else if (mode == 'pagibig_contribution') {
            let i = this.data.pagibig_contributions.indexOf(data);
            this.data.pagibig_contributions.splice(i, 1);
        }
        else if (mode == 'philhealth_contribution') {
            let i = this.data.philhealth_contributions.indexOf(data);
            this.data.philhealth_contributions.splice(i, 1);
        }
        else if (mode == 'tax') {
            let i = this.data.taxes.indexOf(data);
            this.data.taxes.splice(i, 1);
        }
    }
    save() {
        for (const cs of this.data.civil_statuses) {
            if (cs.name == null) {
                this.controller.presentAlert('Warning', 'Please enter civil status name');
                return;
            }
        }
        for (const d of this.data.departments) {
            if (d.name == null) {
                this.controller.presentAlert('Warning', 'Please enter department name');
                return;
            }
        }
        for (const et of this.data.employment_types) {
            if (et.name == null) {
                this.controller.presentAlert('Warning', 'Please enter employment type name');
                return;
            }
        }
        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post('hr-data/update', this.data)
                .subscribe((res) => {
                loading.dismiss();
                this.data = res.data;
                this.controller.presentAlert('Success', res.message);
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
    getHolidays() {
        this.active_tab = 8;
        this.loader = true;
        this.api.get(`holidays?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&year=${this.year}&month=${this.month}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.holidays = res.data;
        }, (err) => {
            this.loader = false;
            ;
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
        this.getHolidays();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getHolidays();
        }, 1000);
    }
    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getHolidays();
    }
    saveHoliday(holiday) {
        this.controller.presentLoading('Saving, please wait...')
            .then((loading) => {
            let url = '';
            if (holiday.id == null) {
                url = `holidays`;
            }
            else {
                url = `holidays/${holiday.id}`;
            }
            this.api.post(url, holiday)
                .subscribe((res) => {
                loading.dismiss();
                holiday.id = res.data.id;
                this.controller.presentAlert('Success', res.message);
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
    deleteHoliday(holiday) {
        let i = this.holidays.data.indexOf(holiday);
        if (holiday.id == null) {
            this.holidays.data.splice(i, 1);
        }
        else {
            let buttons = [
                {
                    text: 'Yes',
                    handler: () => {
                        this.controller.presentLoading('Deleting, please wait...')
                            .then((loading) => {
                            this.api.post(`holidays/delete/${holiday.id}`, null)
                                .subscribe((res) => {
                                loading.dismiss();
                                this.holidays.data.splice(i, 1);
                                this.controller.presentAlert('Success', res.message);
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
            this.controller.presentAlert('Warning', 'Are you sure to delete this project?', buttons);
        }
    }
};
HrDataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
HrDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-hr-data',
        template: _raw_loader_hr_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hr_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HrDataPage);



/***/ }),

/***/ 7303:
/*!*******************************************!*\
  !*** ./src/app/hr-data/hr-data.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoci1kYXRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6072:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-data/hr-data.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'HR DATA'\" [icon]=\"'briefcase-outline'\" [loader]=\"loader\">\n    <div content>\n        <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"save()\" *ngIf=\"active_tab !== 8\">\n            <ion-icon name=\"save-outline\"></ion-icon>\n            &nbsp;\n            <label>Save Data</label>\n        </button>\n        View & Edit HR Data\n        <br><br>\n        <ul class=\"nav nav-tabs\">\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 1 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 1\">\n                    Civil Statuses\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 2 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 2\">\n                    Departments\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 3 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 3\">\n                    Employment Types\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 4 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 4\">\n                    SSS Table\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 5 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 5\">\n                    Pag-ibig Table\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 6 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 6\">\n                    Philhealth Table\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 7 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"active_tab = 7\">\n                    Tax Table\n                </span>\n            </li>\n            <li class=\"nav-item\">\n                <span class=\"nav-link pointer {{active_tab == 8 ? 'light-text secondary-bg' : 'text-muted'}}\" (click)=\"getHolidays()\">\n                    Holidays\n                </span>\n            </li>\n        </ul>\n\n        <!-- Civil Statuses -->\n        <div [hidden]=\"active_tab !== 1\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Name</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('civil_status')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let civil_status of data.civil_statuses\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"civil_status.name\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('civil_status', civil_status)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Departments -->\n        <div [hidden]=\"active_tab !== 2\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Name</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('department')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let department of data.departments\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"department.name\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('department', department)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Employment Types -->\n        <div [hidden]=\"active_tab !== 3\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Name</th>\n                                <th class=\"text-muted\">Regular OT Rate (%)</th>\n                                <th class=\"text-muted\">Legal Holiday Rate (%)</th>\n                                <th class=\"text-muted\">Legal OT Rate (%)</th>\n                                <th class=\"text-muted\">Night Differential Rate (%)</th>\n                                <th class=\"text-muted\">Rest Day Rate (%)</th>\n                                <th class=\"text-muted\">Rest Day OT Rate (%)</th>\n                                <th class=\"text-muted\">Special Holiday Rate (%)</th>\n                                <th class=\"text-muted\">Special Holiday OT Rate (%)</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('employment_type')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let employment_type of data.employment_types\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.name\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.regular_ot_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.legal_hol_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.legal_hol_ot_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.night_diff_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.restday_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.restday_ot_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.special_hol_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"employment_type.special_hol_ot_rate\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('employment_type', employment_type)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- SSS Contributions -->\n        <div [hidden]=\"active_tab !== 4\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Range From</th>\n                                <th class=\"text-muted\">Range To</th>\n                                <th class=\"text-muted\">Employer Share (₱)</th>\n                                <th class=\"text-muted\">Employee Share (₱)</th>\n                                <th class=\"text-muted\">Total</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('sss_contribution')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let sss_contribution of data.sss_contributions\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"number\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"sss_contribution.range_from\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"sss_contribution.range_to\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"sss_contribution.employer\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"sss_contribution.employee\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" readonly class=\"form-control\" style=\"font-size: 1em !important;\" value=\"{{sss_contribution.employer + sss_contribution.employee}}\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('sss_contribution', sss_contribution)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Pag-ibig Contributions -->\n        <div [hidden]=\"active_tab !== 5\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Range From</th>\n                                <th class=\"text-muted\">Range To</th>\n                                <th class=\"text-muted\">Employer Share (%)</th>\n                                <th class=\"text-muted\">Employee Share (%)</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('pagibig_contribution')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let pagibig_contribution of data.pagibig_contributions\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"number\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"pagibig_contribution.range_from\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"pagibig_contribution.range_to\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"pagibig_contribution.employer_rate\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"pagibig_contribution.employee_rate\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('pagibig_contribution', pagibig_contribution)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Philhealth Contributions -->\n        <div [hidden]=\"active_tab !== 6\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Range From</th>\n                                <th class=\"text-muted\">Range To</th>\n                                <th class=\"text-muted\">Rate(%)</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('philhealth_contribution')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let philhealth_contribution of data.philhealth_contributions\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"number\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"philhealth_contribution.range_from\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"philhealth_contribution.range_to\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"philhealth_contribution.rate\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('philhealth_contribution', philhealth_contribution)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Taxes Table -->\n        <div [hidden]=\"active_tab !== 7\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">Range From</th>\n                                <th class=\"text-muted\">Range To</th>\n                                <th class=\"text-muted\">Deduction</th>\n                                <th class=\"text-muted\">Percentage</th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('tax')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let tax of data.taxes\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"number\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"tax.range_from\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"tax.range_to\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"tax.deduction\">\n                                </th>\n                                <th>\n                                    <input type=\"number\" step=\"any\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"tax.percentage\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow('tax', tax)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <!-- Holidays Table -->\n        <div [hidden]=\"active_tab !== 8\">\n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-3 mt-1\">\n                    <label>Search</label>\n                    <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\n                </div>\n                <div class=\"col-md-3 mt-1\">\n                    <label>Filter by Month</label>\n                    <ion-select class=\"form-control form-control-sm\" [(ngModel)]=\"month\" (ionChange)=\"getHolidays()\">\n                        <ion-select-option value=\"\">All</ion-select-option>\n                        <ion-select-option value=\"{{month.val}}\" *ngFor=\"let month of months\">\n                            {{month.label}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n                <div class=\"col-md-3 mt-1\">\n                    <label>Filter by Year</label>\n                    <ion-select class=\"form-control form-control-sm\" [(ngModel)]=\"year\" (ionChange)=\"getHolidays()\">\n                        <ion-select-option value=\"\">All</ion-select-option>\n                        <ion-select-option value=\"{{year}}\" *ngFor=\"let year of years\">\n                            {{year}}\n                        </ion-select-option>\n                    </ion-select>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <table class=\"table table-hover table-borderless data-table\">\n                        <thead>\n                            <tr>\n                                <th class=\"text-muted\">\n                                    <span class=\"pointer sort\" (click)=\"sortData('date')\">\n                                        Date\n                                        <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'date' ? 'down' : 'up'}}-outline\"></ion-icon>\n                                    </span>\n                                </th>\n                                <th class=\"text-muted\">\n                                    <span class=\"pointer sort\" (click)=\"sortData('holiday')\">\n                                        Holiday\n                                        <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'holiday' ? 'down' : 'up'}}-outline\"></ion-icon>\n                                    </span>\n                                </th>\n                                <th class=\"text-muted\">\n                                    <span class=\"pointer sort\" (click)=\"sortData('type')\">\n                                        Type\n                                        <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'type' ? 'down' : 'up'}}-outline\"></ion-icon>\n                                    </span>\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow('holiday')\">\n                                            <ion-icon name=\"add-outline\"></ion-icon>\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let holiday of holidays.data\" class=\"bg-light data-row\">\n                                <th>\n                                    <input type=\"date\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"holiday.date\">\n                                </th>\n                                <th>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"holiday.holiday\">\n                                </th>\n                                <th>\n                                    <input type=\"text\" class=\"form-control\" style=\"font-size: 1em !important;\" [(ngModel)]=\"holiday.type\">\n                                </th>\n                                <th>\n                                    <div class=\"center\">\n                                        <span class=\"text-success pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"saveHoliday(holiday)\">\n                                            <ion-icon name=\"save-outline\"></ion-icon>\n                                        </span>\n                                        &nbsp;&nbsp;\n                                        <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteHoliday(holiday)\">\n                                            <ion-icon name=\"trash-outline\"></ion-icon>\n                                        </span>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr class=\"bg-light data-row\">\n                                <th>\n                                    <div class=\"row g-3 align-items-center\">\n                                        <div class=\"col-auto\">\n                                            <label class=\"col-form-label\">Show</label>\n                                        </div>\n                                        <div class=\"col-auto p-0\">\n                                            <ion-select class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\n                                                <ion-select-option value=\"5\">5</ion-select-option>\n                                                <ion-select-option value=\"10\">10</ion-select-option>\n                                                <ion-select-option value=\"15\">15</ion-select-option>\n                                                <ion-select-option value=\"20\">20</ion-select-option>\n                                            </ion-select>\n                                        </div>\n                                        <div class=\"col-auto\">\n                                        <span>\n                                            per page\n                                        </span>\n                                        </div>\n                                    </div>\n                                </th>\n                                <th colspan=\"3\" style=\"vertical-align: middle !important;\">\n                                    <div class=\"right\" *ngIf=\"holidays.last_page > 1\">\n                                        <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of holidays.links\" (click)=\"paginate(link.label)\">\n                                            {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\n                                        </button>\n                                    </div>\n                                </th>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_hr-data_hr-data_module_ts.js.map