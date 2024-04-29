(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_accounting_accounting_module_ts"],{

/***/ 1372:
/*!*********************************************************!*\
  !*** ./src/app/accounting/accounting-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountingPageRoutingModule": () => (/* binding */ AccountingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _accounting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounting.page */ 1613);




const routes = [
    {
        path: '',
        component: _accounting_page__WEBPACK_IMPORTED_MODULE_0__.AccountingPage
    }
];
let AccountingPageRoutingModule = class AccountingPageRoutingModule {
};
AccountingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountingPageRoutingModule);



/***/ }),

/***/ 5058:
/*!*************************************************!*\
  !*** ./src/app/accounting/accounting.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountingPageModule": () => (/* binding */ AccountingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _accounting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounting.page */ 1613);
/* harmony import */ var _accounting_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounting-routing.module */ 1372);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let AccountingPageModule = class AccountingPageModule {
};
AccountingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _accounting_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountingPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _accounting_page__WEBPACK_IMPORTED_MODULE_0__.AccountingPage
        ]
    })
], AccountingPageModule);



/***/ }),

/***/ 1613:
/*!***********************************************!*\
  !*** ./src/app/accounting/accounting.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountingPage": () => (/* binding */ AccountingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_accounting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accounting.page.html */ 7335);
/* harmony import */ var _accounting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounting.page.scss */ 3811);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);








let AccountingPage = class AccountingPage {
    constructor(api, controller, modalCtrl) {
        this.api = api;
        this.controller = controller;
        this.modalCtrl = modalCtrl;
        this.dateFrom = '';
        this.dateTo = '';
        this.departments = [];
        this.department_id = '';
        this.computationType = '';
        this.sort_by = 'first_name';
        this.sorting = 'asc';
        this.project = {
            id: '',
            name: ''
        };
        this.loader = false;
        this.attendance = {
            data: []
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.api.get(`hr-data`)
            .subscribe((res) => {
            this.departments = res.data.departments;
        }, (err) => {
            this.controller.showErrorAlert(err);
        });
    }
    compute() {
        this.loader = true;
        this.api.get(`accounting` +
            `?dateFrom=${this.dateFrom}` +
            `&dateTo=${this.dateTo}` +
            `&departmentId=${this.department_id}` +
            `&computationType=${this.computationType}` +
            `&projectId=${this.project.id}` +
            `&sortBy=${this.sort_by}` +
            `&sorting=${this.sorting}`)
            .subscribe((res) => {
            this.loader = false;
            this.attendance = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    updateAttendance(attendance) {
        if (attendance.sss_check) {
            attendance.sss = attendance.sss_deduction;
        }
        else {
            attendance.sss = 0;
        }
        if (attendance.pagibig_check) {
            attendance.pagibig = attendance.pagibig_deduction;
        }
        else {
            attendance.pagibig = 0;
        }
        if (attendance.philhealth_check) {
            attendance.philhealth = attendance.philhealth_deduction;
        }
        else {
            attendance.philhealth = 0;
        }
        let data = {
            userId: attendance.id,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            computationType: this.computationType,
            projectId: this.project.id,
            inputs: {
                backpay: attendance.backpay,
                pot_pay: attendance.pot_pay,
                sss: attendance.sss,
                pagibig: attendance.pagibig,
                philhealth: attendance.philhealth,
                sss_loan: attendance.sss_loan,
                pagibig_loan: attendance.pagibig_loan,
                out_of_office: attendance.out_of_office,
                cash_advance: attendance.cash_advance
            }
        };
        this.loader = true;
        this.api.post(`accounting`, data)
            .subscribe((res) => {
            let i = this.attendance.data.indexOf(attendance);
            this.attendance.data[i] = res.data;
            this.loader = false;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    searchProject() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__.SearchPage,
                componentProps: {
                    title: 'Search Project',
                    url: 'projects?get=true&limit=20&keyword=',
                    defaultLabel: 'No Project',
                    defaultValue: ''
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data !== undefined) {
                this.project = data.data;
            }
        });
    }
    sortData(sort_by) {
        this.sort_by = sort_by;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.compute();
    }
    checkAll(e, type) {
        for (const attendance of this.attendance.data) {
            if (e.srcElement.checked) {
                attendance[`${type}_check`] = true;
            }
            else {
                attendance[`${type}_check`] = false;
            }
        }
        this.bulkUpdate();
    }
    bulkUpdate() {
        let employees = [];
        for (const attendance of this.attendance.data) {
            if (attendance.sss_check) {
                attendance.sss = attendance.sss_deduction;
            }
            else {
                attendance.sss = 0;
            }
            if (attendance.pagibig_check) {
                attendance.pagibig = attendance.pagibig_deduction;
            }
            else {
                attendance.pagibig = 0;
            }
            if (attendance.philhealth_check) {
                attendance.philhealth = attendance.philhealth_deduction;
            }
            else {
                attendance.philhealth = 0;
            }
            employees.push({
                userId: attendance.id,
                inputs: {
                    backpay: attendance.backpay,
                    pot_pay: attendance.pot_pay,
                    sss: attendance.sss,
                    pagibig: attendance.pagibig,
                    philhealth: attendance.philhealth,
                    sss_loan: attendance.sss_loan,
                    pagibig_loan: attendance.pagibig_loan,
                    out_of_office: attendance.out_of_office,
                    cash_advance: attendance.cash_advance
                }
            });
        }
        let data = {
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            computationType: this.computationType,
            projectId: this.project.id,
            employees: employees
        };
        this.loader = true;
        this.api.post(`accounting/bulk`, data)
            .subscribe((res) => {
            this.attendance.data = res.data;
            this.loader = false;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    isCheckedAll(type) {
        for (const a of this.attendance.data) {
            if (!a[`${type}_check`]) {
                return false;
            }
        }
        return true;
    }
};
AccountingPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AccountingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-accounting',
        template: _raw_loader_accounting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accounting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountingPage);



/***/ }),

/***/ 3811:
/*!*************************************************!*\
  !*** ./src/app/accounting/accounting.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("th {\n  white-space: nowrap;\n}\nth .inputs {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7QUFDRDtBQUFDO0VBQ0MsWUFBQTtBQUVGIiwiZmlsZSI6ImFjY291bnRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0LmlucHV0cyB7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0fVxyXG59Il19 */");

/***/ }),

/***/ 7335:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accounting/accounting.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ACCOUNTING'\" [loader]=\"loader\">\r\n    <div content>\r\n        Payroll\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-2\">\r\n                <label>Date From</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateFrom\" placeholder=\"Search\">\r\n                <br>\r\n                <label>Date To</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateTo\" placeholder=\"Search\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-2\">\r\n                <label>Filter by Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"department_id\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n                <br>\r\n                <label>Group by Project</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm bg-light\" [(ngModel)]=\"project.name\" readonly placeholder=\"Click to search\" (click)=\"searchProject()\" style=\"cursor: pointer;\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-2\">\r\n                <label>Computation Type</label>\r\n                <div class=\"row mt-3\">\r\n                    <div class=\"form-check col\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"flexRadioDefault1\" value=\"1_cutoff\" [(ngModel)]=\"computationType\">\r\n                        <label class=\"form-check-label\" for=\"flexRadioDefault1\">\r\n                            1 Cutoff\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-check col\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"flexRadioDefault2\" checked value=\"2_cutoffs\" [(ngModel)]=\"computationType\">\r\n                        <label class=\"form-check-label\" for=\"flexRadioDefault2\">\r\n                            2 Cutoff\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"form-check col\">\r\n                        <input class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"flexRadioDefault3\" value=\"daily\" [(ngModel)]=\"computationType\">\r\n                        <label class=\"form-check-label\" for=\"flexRadioDefault3\">\r\n                            Daily Pay\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 mt-4\">\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"compute()\">\r\n                    <ion-icon name=\"calculator-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>Compute</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <br><br>\r\n        \r\n        <div style=\"overflow: auto;\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('employee_id')\">\r\n                                Employee ID\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'employee_id' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('first_name')\">\r\n                                Employee Name\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'first_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('position')\">\r\n                                Position\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'position' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('rate')\">\r\n                                Rate\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'rate' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('taxable_allowance')\">\r\n                                Taxable Allowance\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'taxable_allowance' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('department')\">\r\n                                Department\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'department' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Employment Type\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Daily Rate\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Overtime Pay\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Total Absences<br>in minutes<br>\r\n                            (Late, Absent, Undertime)\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Net of<br>Absences\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Backpay\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Previous<br>Overtime Pay\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Grosspay\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" (change)=\"checkAll($event, 'sss')\" [checked]=\"isCheckedAll('sss')\">\r\n                            SSS\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" (change)=\"checkAll($event, 'pagibig')\" [checked]=\"isCheckedAll('pagibig')\">\r\n                            Pag-ibig\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" (change)=\"checkAll($event, 'philhealth')\" [checked]=\"isCheckedAll('philhealth')\">\r\n                            Philhealth\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            SSS Loan\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Pag-ibig Loan\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Tax\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Out of office<br>time (mins)\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Cash Advance\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Total Deductions\r\n                        </th>\r\n                        <th class=\"text-muted center\">\r\n                            Netpay\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let attendance of attendance.data\" class=\"bg-light data-row\">\r\n                        <th class=\"center\">{{attendance.employee_id ? attendance.employee_id : 'N/A'}}</th>\r\n                        <th class=\"center\">\r\n                            <a href=\"/attendance/{{attendance.id}}/{{dateFrom}}/{{dateTo}}/{{computationType}}\" target=\"_blank\">{{attendance.name}}</a>\r\n                        </th>\r\n                        <th class=\"center\">{{attendance.position ? attendance.position : 'N/A'}}</th>\r\n                        <th class=\"center\">₱ {{attendance.rate}}</th>\r\n                        <th class=\"center\">₱ {{attendance.taxable_allowance ? attendance.taxable_allowance : 0}}</th>\r\n                        <th class=\"center\">{{attendance.department ? attendance.department : 'N/A'}}</th>\r\n                        <th class=\"center\">{{attendance.employment_type_id.name}}</th>\r\n                        <th class=\"center\">₱ {{attendance.daily_rate}}</th>\r\n                        <th class=\"center\">₱ {{attendance.ot_pay}}</th>\r\n                        <th class=\"center\">{{attendance.total_absences}}</th>\r\n                        <th class=\"center\">₱ {{attendance.net_absences}}</th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.backpay\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.pot_pay\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">₱ {{attendance.grosspay}}</th>\r\n                        <th class=\"center\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td class=\"px-2\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"attendance.sss_check\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.sss_deduction\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td class=\"px-2\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"attendance.pagibig_check\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.pagibig_deduction\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td class=\"px-2\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"attendance.philhealth_check\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.philhealth_deduction\" (change)=\"updateAttendance(attendance)\">\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.sss_loan\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.pagibig_loan\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">{{attendance.tax}}</th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.out_of_office\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">\r\n                            <input type=\"number\" step=\"any\" class=\"form-control inputs\" [(ngModel)]=\"attendance.cash_advance\" (change)=\"updateAttendance(attendance)\">\r\n                        </th>\r\n                        <th class=\"center\">₱ {{attendance.total_deductions}}</th>\r\n                        <th class=\"center\">₱ {{attendance.net_pay}}</th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_accounting_accounting_module_ts.js.map