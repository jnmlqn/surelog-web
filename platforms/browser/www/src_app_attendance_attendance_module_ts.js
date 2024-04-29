(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_attendance_attendance_module_ts"],{

/***/ 4286:
/*!*********************************************************!*\
  !*** ./src/app/attendance/attendance-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageRoutingModule": () => (/* binding */ AttendancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page */ 2577);




const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
    }
];
let AttendancePageRoutingModule = class AttendancePageRoutingModule {
};
AttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AttendancePageRoutingModule);



/***/ }),

/***/ 8503:
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageModule": () => (/* binding */ AttendancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page */ 2577);
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance-routing.module */ 4286);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _attendance_routing_module__WEBPACK_IMPORTED_MODULE_1__.AttendancePageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
        ]
    })
], AttendancePageModule);



/***/ }),

/***/ 2577:
/*!***********************************************!*\
  !*** ./src/app/attendance/attendance.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePage": () => (/* binding */ AttendancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendance.page.html */ 8247);
/* harmony import */ var _attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page.scss */ 8269);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);







let AttendancePage = class AttendancePage {
    constructor(route, api, controller) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.id = '';
        this.dateFrom = '';
        this.dateTo = '';
        this.computationType = '';
        this.attendance = [];
        this.loader = false;
    }
    ngOnInit() {
        this.loadAttendance();
    }
    loadAttendance() {
        this.loader = true;
        this.route.params
            .subscribe(params => {
            this.id = params.id;
            this.dateFrom = params.dateFrom;
            this.dateTo = params.dateTo;
            this.computationType = params.computationType;
            this.api.get(`accounting` +
                `?dateFrom=${this.dateFrom}` +
                `&dateTo=${this.dateTo}` +
                `&computationType=${this.computationType}` +
                `&employeeId=${this.id}`)
                .subscribe((res) => {
                this.loader = false;
                this.attendance = res.data ? res.data[0] : [];
                console.log(this.attendance);
            }, (err) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            });
        });
    }
    updateAttendance(type, att, e = null) {
        if (e === null) {
        }
        else {
            if (type == 'leave') {
                att.on_leave = e.target.checked ? 1 : 0;
                if (e.target.checked) {
                    att.on_half_leave = 0;
                }
            }
            else if (type == 'half_leave') {
                att.on_half_leave = e.target.checked ? 1 : 0;
                if (e.target.checked) {
                    att.on_leave = 0;
                }
            }
            else if (type == 'absent') {
                att.is_absent = e.target.checked ? 1 : 0;
            }
        }
    }
};
AttendancePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
AttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-attendance',
        template: _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendancePage);



/***/ }),

/***/ 8269:
/*!*************************************************!*\
  !*** ./src/app/attendance/attendance.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("th {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUFDRCIsImZpbGUiOiJhdHRlbmRhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 8247:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attendance/attendance.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ATTENDANCE'\" [icon]=\"'body-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Attendance\r\n\r\n        <br><br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <strong class=\"text-primary\">Employee ID:</strong> {{attendance.employee_id ? attendance.employee_id : 'N/A'}}<br>\r\n                <strong class=\"text-primary\">Employee Name:</strong> {{attendance.name ? attendance.name : 'N/A'}}<br>\r\n                <strong class=\"text-primary\">Position:</strong> {{attendance.position ? attendance.position : 'N/A'}}<br>\r\n                <strong class=\"text-primary\">Department:</strong> {{attendance.department ? attendance.department : 'N/A'}}<br>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <strong class=\"text-primary\">Rate:</strong> ₱ {{attendance.rate ? attendance.rate : '0.00'}}<br>\r\n                <strong class=\"text-primary\">Overtime Pay:</strong> ₱ {{attendance.ot_pay ? attendance.ot_pay : '0.00'}}<br>\r\n                <strong class=\"text-primary\">Net of Absences:</strong> ₱ {{attendance.net_absences ? attendance.net_absences : '0.00'}}<br>\r\n                <strong class=\"text-primary\">Grosspay:</strong> ₱ {{attendance.grosspay ? attendance.grosspay : '0.00'}}<br>                \r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"overflow: auto;\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\" style=\"text-align: left; padding-left: 50px !important;\">\r\n                            Action\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Day Type\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Date\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Official<br>\r\n                            Time in & Time out\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Actual<br>\r\n                            Time in & Time out\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Time in<br>\r\n                            Location & Image\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Time out<br>\r\n                            Location & Image\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Late<br>(Mins)\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Undertime<br>(Mins)\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Absent<br>(Mins)\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let att of attendance.attendance\" class=\"bg-light data-row\">\r\n                        <th style=\"text-align: left; padding-left: 50px !important;\">\r\n                            <ion-checkbox [checked]=\"att.is_absent === 1\" (ionChange)=\"updateAttendance('absent', att, $event)\"></ion-checkbox> Absent<br>\r\n                            <ion-checkbox [checked]=\"att.on_leave === 1\" (ionChange)=\"updateAttendance('leave', att, $event)\"></ion-checkbox> Leave<br>\r\n                            <ion-checkbox [checked]=\"att.on_half_leave === 1\" (ionChange)=\"updateAttendance('half_leave', att, $event)\"></ion-checkbox> Half Leave \r\n                        </th>\r\n                        <th class=\"text-primary pointer\">\r\n                            <span (click)=\"updateAttendance('absent', att)\">\r\n                                {{att.day_type | titlecase}}\r\n                            </span>\r\n                        </th>\r\n                        <th>\r\n                            {{att.date | date: 'EEEE'}}<br>\r\n                            {{att.date | date: 'MMM d, y'}}\r\n                        </th>\r\n                        <th class=\"text-primary pointer\">\r\n                            {{att.official_time_in | date: 'medium'}}<br>\r\n                            {{att.official_time_out | date: 'medium'}}\r\n                        </th>\r\n                        <th class=\"text-primary pointer\">\r\n                            {{att.time_in ? (att.time_in | date: 'medium') : 'N/A'}}<br>\r\n                            {{att.time_out ? (att.time_out | date: 'medium') : 'N/A'}}\r\n                        </th>\r\n                        <th>\r\n                            <a\r\n                              href=\"https://www.google.pl/maps/place//@{{att.time_in_latitude}},{{att.time_in_longitude}},19z\"\r\n                              target=\"_blank\"\r\n                              *ngIf=\"att.time_in_latitude !== null && att.time_in_longitude !== null\">\r\n                                Click here to open in maps\r\n                            </a>\r\n                            <span *ngIf=\"att.time_in_latitude === null || att.time_in_longitude === null\">Location not available</span>\r\n                            <br>\r\n                            <a\r\n                              href=\"{{att.time_in_image}}\"\r\n                              target=\"_blank\"\r\n                              *ngIf=\"att.time_in_image !== null\">\r\n                                Click here to view image\r\n                            </a>\r\n                            <span *ngIf=\"att.time_in_image === null\">Image not available</span>\r\n                        </th>\r\n                        <th>\r\n                            <a\r\n                              href=\"https://www.google.pl/maps/place//@{{att.time_in_latitude}},{{att.time_in_longitude}},19z\"\r\n                              target=\"_blank\"\r\n                              *ngIf=\"att.time_out_latitude !== null && att.time_out_longitude !== null\">\r\n                                Click here to open in maps\r\n                            </a>\r\n                            <span *ngIf=\"att.time_out_latitude === null || att.time_out_longitude === null\">Location not available</span>\r\n                            <br>\r\n                            <a\r\n                              href=\"{{att.time_out_image}}\"\r\n                              target=\"_blank\"\r\n                              *ngIf=\"att.time_out_image !== null\">\r\n                                Click here to view image\r\n                            </a>\r\n                            <span *ngIf=\"att.time_out_image === null\">Image not available</span>\r\n                        </th>\r\n                        <th>\r\n                            {{att.late_mins}}\r\n                        </th>\r\n                        <th>\r\n                            {{att.undertime_mins}}\r\n                        </th>\r\n                        <th>\r\n                            {{att.absent_mins}}\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_attendance_attendance_module_ts.js.map