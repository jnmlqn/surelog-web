(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_approval_approval_module_ts"],{

/***/ 7897:
/*!*****************************************************!*\
  !*** ./src/app/approval/approval-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalPageRoutingModule": () => (/* binding */ ApprovalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _approval_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval.page */ 1980);




const routes = [
    {
        path: '',
        component: _approval_page__WEBPACK_IMPORTED_MODULE_0__.ApprovalPage
    }
];
let ApprovalPageRoutingModule = class ApprovalPageRoutingModule {
};
ApprovalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApprovalPageRoutingModule);



/***/ }),

/***/ 8699:
/*!*********************************************!*\
  !*** ./src/app/approval/approval.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalPageModule": () => (/* binding */ ApprovalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _approval_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval.page */ 1980);
/* harmony import */ var _approval_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-routing.module */ 7897);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let ApprovalPageModule = class ApprovalPageModule {
};
ApprovalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _approval_routing_module__WEBPACK_IMPORTED_MODULE_1__.ApprovalPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _approval_page__WEBPACK_IMPORTED_MODULE_0__.ApprovalPage
        ]
    })
], ApprovalPageModule);



/***/ }),

/***/ 1980:
/*!*******************************************!*\
  !*** ./src/app/approval/approval.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalPage": () => (/* binding */ ApprovalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_approval_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./approval.page.html */ 1865);
/* harmony import */ var _approval_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval.page.scss */ 2967);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);
/* harmony import */ var _services_time_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/time/time.service */ 4661);









let ApprovalPage = class ApprovalPage {
    constructor(api, controller, modalCtrl, time) {
        this.api = api;
        this.controller = controller;
        this.modalCtrl = modalCtrl;
        this.time = time;
        this.departments = [];
        this.dateFrom = '';
        this.dateTo = '';
        this.departmentId = '';
        this.limit = '10';
        this.page = 1;
        this.sortBy = 'date';
        this.sorting = 'asc';
        this.project = {
            id: '',
            name: ''
        };
        this.filings = {
            data: null
        };
        this.loader = false;
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
    getOtFilings() {
        this.loader = true;
        this.api.get('approval' +
            `?dateFrom=${this.dateFrom}` +
            `&dateTo=${this.dateTo}` +
            `&departmentId=${this.departmentId}` +
            `&projectId=${this.project.id}&limit=` +
            `&sortBy=${this.sortBy}` +
            `&sorting=${this.sorting}`)
            .subscribe((res) => {
            this.loader = false;
            this.filings = res;
            console.log(this.filings);
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    searchProject() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getOtFilings();
    }
    actions(status, filing) {
        if (status === 1) {
            let buttons = [
                {
                    text: 'Next',
                    handler: (holiday) => {
                        buttons = [
                            {
                                text: 'Next',
                                handler: (ot) => {
                                    buttons = [
                                        {
                                            text: 'okay',
                                            handler: (night) => {
                                                buttons = [
                                                    {
                                                        text: 'yes',
                                                        handler: () => {
                                                            let data = {
                                                                holidayHours: holiday.hours,
                                                                otHours: ot.hours,
                                                                nightOtHours: night.hours
                                                            };
                                                            this.api.post(`approval/update/${filing.id}/approved`, data)
                                                                .subscribe((res) => {
                                                                this.controller.presentAlert('Success', res.message);
                                                                filing.approved_holiday_hours = res.data.approved_holiday_hours;
                                                                filing.approved_ot_hours = res.data.approved_ot_hours;
                                                                filing.approved_night_ot_hours = res.data.approved_night_ot_hours;
                                                                filing.approved_by = res.data.approved_by;
                                                                filing.declined_by = null;
                                                            }, (err) => {
                                                                this.controller.showErrorAlert(err);
                                                            });
                                                        }
                                                    },
                                                    {
                                                        text: 'cancel'
                                                    }
                                                ];
                                                this.controller.presentAlert('Confirm', 'Are you sure to approve this overtime filing?', buttons);
                                            }
                                        },
                                        {
                                            text: 'cancel'
                                        }
                                    ];
                                    inputs = [
                                        {
                                            type: 'number',
                                            name: 'hours',
                                            value: filing.approved_night_ot_hours
                                        }
                                    ];
                                    this.controller.presentAlert('Approve', 'Please input approved night overtime hours', buttons, inputs);
                                }
                            },
                            {
                                text: 'cancel'
                            }
                        ];
                        inputs = [
                            {
                                type: 'number',
                                name: 'hours',
                                value: filing.approved_ot_hours
                            }
                        ];
                        this.controller.presentAlert('Approve', 'Please input approved overtime hours', buttons, inputs);
                    }
                },
                {
                    text: 'cancel'
                }
            ];
            let inputs = [
                {
                    type: 'number',
                    name: 'hours',
                    value: filing.approved_holiday_hours
                }
            ];
            this.controller.presentAlert('Approve', 'Please input approved holiday hours', buttons, inputs);
        }
        else {
            let buttons = [
                {
                    text: 'yes',
                    handler: () => {
                        this.api.post(`approval/update/${filing.id}/declined`)
                            .subscribe((res) => {
                            this.controller.presentAlert('Success', res.message);
                            filing.approved_holiday_hours = 0;
                            filing.approved_ot_hours = 0;
                            filing.approved_night_ot_hours = 0;
                            filing.approved_by = null;
                            filing.declined_by = res.data.declined_by;
                        }, (err) => {
                            this.controller.showErrorAlert(err);
                        });
                    }
                },
                {
                    text: 'cancel'
                }
            ];
            this.controller.presentAlert('Confirm', 'Are you sure to decline this overtime filing?', buttons);
        }
    }
    viewAttendance(filing) {
        this.controller.presentAlert('Attendance', '<strong>Time in</strong>:<br/>' + (filing.attendance.length > 0
            ? this.time.getLongDateTime(filing.attendance[0].time_in)
            : 'N/A') + `<br/><br/>` +
            '<strong>Time out</strong>:<br/>' + (filing.attendance.length > 0
            ? (filing.attendance[0].time_out ? this.time.getLongDateTime(filing.attendance[0].time_out) : 'N/A')
            : 'N/A'));
    }
};
ApprovalPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_time_time_service__WEBPACK_IMPORTED_MODULE_5__.TimeService }
];
ApprovalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-approval',
        template: _raw_loader_approval_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_approval_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApprovalPage);



/***/ }),

/***/ 4661:
/*!***********************************************!*\
  !*** ./src/app/services/time/time.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeService": () => (/* binding */ TimeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let TimeService = class TimeService {
    constructor() {
        this.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        setInterval(() => {
            this.timer = this.clock();
        }, 1000);
    }
    time(datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        let h = datetime.getHours();
        let m = datetime.getMinutes();
        let s = datetime.getSeconds();
        let hours = h < 10 ? '0' + h : h;
        let minutes = m < 10 ? '0' + m : m;
        let seconds = s < 10 ? '0' + s : s;
        return hours + ':' + minutes + ':' + seconds;
    }
    timeWithSeconds(datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        let h = datetime.getHours();
        let m = datetime.getMinutes();
        let s = datetime.getSeconds();
        let hours = h < 10 ? '0' + h : h;
        let minutes = m < 10 ? '0' + m : m;
        let seconds = s < 10 ? '0' + s : s;
        return hours + ':' + minutes + ':' + seconds;
    }
    getDate(datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        return datetime.getFullYear() + '-' + this.months[datetime.getMonth()] + '-' + (datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate());
    }
    getTime(datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        let hours = datetime.getHours();
        let minutes = datetime.getMinutes();
        let seconds = datetime.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }
    getTimeNoSec(datetime) {
        datetime = new Date(datetime);
        let hours = datetime.getHours();
        let minutes = datetime.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }
    getCurrentDate(datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        return this.monthname[datetime.getMonth()] + ' ' + datetime.getDate() + ', ' + datetime.getFullYear();
    }
    getDateTime(datetime) {
        let time = this.time(datetime);
        let date = this.getDate(datetime);
        return date + ' ' + time;
    }
    clock() {
        let today = new Date;
        let time = this.getTime(today);
        let date = this.getCurrentDate();
        this.datetime = date + ' ' + time;
        return this.datetime;
    }
    addMinutes(datetime, minutes) {
        datetime = new Date(datetime);
        let dt = new Date(datetime.getTime() + minutes * 60000);
        let time = this.time(dt);
        let date = this.getDate(dt);
        return date + ' ' + time;
    }
    deductMinutes(datetime, minutes) {
        datetime = new Date(datetime);
        let dt = new Date(datetime.getTime() - minutes * 60000);
        let time = this.time(dt);
        let date = this.getDate(dt);
        return date + ' ' + time;
    }
    whenPause() {
        this.pausetime = Date.now();
    }
    getLongDateTime(datetime) {
        return this.getCurrentDate(datetime) + ' ' + this.getTimeNoSec(datetime);
    }
    getTomorrowDate(daystoadd, datetime) {
        if (datetime != null) {
            datetime = new Date(datetime);
        }
        else {
            datetime = new Date;
        }
        datetime.setDate(datetime.getDate() + daystoadd);
        let date = datetime.getDate();
        date = date < 10 ? '0' + date : date;
        return datetime.getFullYear() + '-' + this.months[datetime.getMonth()] + '-' + date;
    }
};
TimeService.ctorParameters = () => [];
TimeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], TimeService);



/***/ }),

/***/ 2967:
/*!*********************************************!*\
  !*** ./src/app/approval/approval.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1865:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/approval/approval.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'APPROVAL'\" [loader]=\"loader\">\r\n    <div content>\r\n        Overtime Approval\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2 mt-2\">\r\n                <label>Date From</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateFrom\" placeholder=\"Search\">\r\n            </div>\r\n            <div class=\"col-md-2 mt-2\">\r\n                <label>Date To</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateTo\" placeholder=\"Search\">\r\n            </div>\r\n            <div class=\"col-md-2 mt-2\">\r\n                <label>Filter by Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"departmentId\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n            <div class=\"col-md-2 mt-2\">\r\n                <label>Filter by Project</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm bg-light\" [(ngModel)]=\"project.name\" readonly placeholder=\"Click to search\" (click)=\"searchProject()\" style=\"cursor: pointer;\">\r\n            </div>\r\n            <div class=\"col-md-2 mt-2\"></div>\r\n            <div class=\"col-md-2 mt-4\">\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"getOtFilings()\">\r\n                    <ion-icon name=\"calculator-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>Get OT Filings</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <br><br>\r\n        \r\n        <div style=\"overflow: auto;\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('date')\">\r\n                                Date\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'date' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            Employee Name\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            Project Name\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Overtime<br>Time in/<br>Time out\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Status\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            No. of<br>filed hours\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Approved<br>Holiday hours\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Approved<br>OT hours\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Approved<br>Night Hours\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Action\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let filing of filings.data\" class=\"bg-light data-row\">\r\n                        <th>{{filing.date | date: 'shortDate'}}</th>\r\n                        <th>{{filing.user_id.name}}</th>\r\n                        <th>{{filing.project_id ? filing.project_id.name : 'N/A'}}</th>\r\n                        <th>{{filing.time_in | date: 'short'}}<br>{{filing.time_out | date: 'short'}}</th>\r\n                        <th>\r\n                            <span *ngIf=\"filing.declined_by !== null\" class=\"text-danger\">Declined</span>\r\n                            <span *ngIf=\"filing.approved_by !== null\" class=\"text-success\">Approved</span>\r\n                            <span *ngIf=\"filing.approved_by == null && filing.declined_by == null\" class=\"text-primary\">Pending</span>\r\n                        </th>\r\n                        <th>{{filing.total_mins/60}}</th>\r\n                        <th>{{filing.approved_holiday_hours}}</th>\r\n                        <th>{{filing.approved_ot_hours}}</th>\r\n                        <th>{{filing.approved_night_ot_hours}}</th>\r\n                        <th>\r\n                            <span class=\"pointer text-primary\" title=\"View Official Attendance\" style=\"font-size: 1.5em;\" (click)=\"viewAttendance(filing)\">\r\n                                <ion-icon name=\"eye-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-success\" title=\"Approve\" style=\"font-size: 1.5em;\" (click)=\"actions(1, filing)\">\r\n                                <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-danger\" title=\"Reject\" style=\"font-size: 1.5em;\" (click)=\"actions(0, filing)\">\r\n                                <ion-icon name=\"ban-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_approval_approval_module_ts.js.map