(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_project-form_project-form_module_ts"],{

/***/ 9035:
/*!*************************************************************!*\
  !*** ./src/app/project-form/project-form-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFormPageRoutingModule": () => (/* binding */ ProjectFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _project_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-form.page */ 6409);




const routes = [
    {
        path: '',
        component: _project_form_page__WEBPACK_IMPORTED_MODULE_0__.ProjectFormPage
    }
];
let ProjectFormPageRoutingModule = class ProjectFormPageRoutingModule {
};
ProjectFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectFormPageRoutingModule);



/***/ }),

/***/ 1377:
/*!*****************************************************!*\
  !*** ./src/app/project-form/project-form.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFormPageModule": () => (/* binding */ ProjectFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _project_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-form.page */ 6409);
/* harmony import */ var _project_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-form-routing.module */ 9035);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let ProjectFormPageModule = class ProjectFormPageModule {
};
ProjectFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _project_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectFormPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _project_form_page__WEBPACK_IMPORTED_MODULE_0__.ProjectFormPage
        ]
    })
], ProjectFormPageModule);



/***/ }),

/***/ 6409:
/*!***************************************************!*\
  !*** ./src/app/project-form/project-form.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectFormPage": () => (/* binding */ ProjectFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_project_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./project-form.page.html */ 9994);
/* harmony import */ var _project_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-form.page.scss */ 1318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);







let ProjectFormPage = class ProjectFormPage {
    constructor(route, api, controller) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.id = null;
        this.employee_keyword = '';
        this.users_all = [];
        this.users_filtered = [];
        this.loader = false;
        this.departments = [];
        this.data = {
            project_schedules: [],
            project_authorities: [],
            project_members: [],
        };
    }
    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data`)
            .subscribe((res) => {
            this.departments = res.data.departments;
            this.api.get(`employees?get=true`)
                .subscribe((res) => {
                this.users_all = res.data;
                // Check parameters for employee id
                this.route.params.subscribe(params => {
                    this.id = params.id;
                    if (this.id !== null && this.id !== undefined) {
                        // get employee information
                        this.api.get(`projects/${this.id}`)
                            .subscribe((res) => {
                            this.loader = false;
                            this.data.name = res.data.name;
                            this.data.description = res.data.description;
                            this.data.location = res.data.location;
                            this.data.start_date = res.data.start_date;
                            this.data.end_date = res.data.end_date;
                            this.data.offset = res.data.offset;
                            this.data.status = res.data.status;
                            this.data.department_id = res.data.department_id.toString();
                            this.data.project_schedules = res.data.project_schedules;
                            for (const a of res.data.project_authorities) {
                                this.data.project_authorities.push(a.user_id);
                            }
                            for (const m of res.data.project_members) {
                                this.data.project_members.push(m.user_id);
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
                this.loader = false;
            });
        }, (err) => {
            this.controller.showErrorAlert(err);
            this.loader = false;
        });
    }
    filterUser() {
        this.users_filtered = this.users_all.filter(value => value.department_id.id == this.data.department_id && value.name.toLowerCase().includes(this.employee_keyword.toLowerCase()));
    }
    addUser(mode, user) {
        if (mode == 'member') {
            let i = this.data.project_members.indexOf(user.id);
            if (i > -1) {
                this.controller.presentAlert('Warning', 'Already added as member');
                return;
            }
            this.data.project_members.push(user.id);
        }
        else {
            let i = this.data.project_authorities.indexOf(user.id);
            if (i > -1) {
                this.controller.presentAlert('Warning', 'Already added as authority');
                return;
            }
            this.data.project_authorities.push(user.id);
        }
    }
    removeUser(mode, user_id) {
        if (mode == 'member') {
            let i = this.data.project_members.indexOf(user_id);
            this.data.project_members.splice(i, 1);
        }
        else {
            let i = this.data.project_authorities.indexOf(user_id);
            this.data.project_authorities.splice(i, 1);
        }
    }
    employeeName(user) {
        let i = this.controller.findObjectByKey(this.users_all, 'id', user);
        if (i < 0)
            return 'DELETED EMPLOYEE DETAILS';
        return this.users_all[i].name;
    }
    addRow() {
        this.data.project_schedules.push({
            time_in: null,
            time_out: null,
            is_night_shift: false
        });
    }
    deleteRow(data) {
        let i = this.data.project_schedules.indexOf(data);
        this.data.project_schedules.splice(i, 1);
    }
    save() {
        let url = '';
        if (this.id !== null && this.id !== undefined) {
            url = `projects/update/${this.id}`;
        }
        else {
            url = `projects/store`;
        }
        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
                .subscribe((res) => {
                loading.dismiss();
                if (this.id == null || this.id == undefined) {
                    this.data = {
                        project_schedules: []
                    };
                }
                this.controller.presentAlert('Success', res.message);
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
};
ProjectFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
ProjectFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-project-form',
        template: _raw_loader_project_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_project_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProjectFormPage);



/***/ }),

/***/ 1318:
/*!*****************************************************!*\
  !*** ./src/app/project-form/project-form.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9994:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-form/project-form.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'PROJECTS'\" [icon]=\"'trending-up-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"save()\">\r\n            <ion-icon name=\"save-outline\"></ion-icon>\r\n            &nbsp;\r\n            <label>Save Project</label>\r\n        </button>\r\n        {{id == undefined || id == null ? 'Create' : 'Edit'}} Project\r\n        <br><br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.department_id\" (ionChange)=\"filterUser()\">\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n                <br>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Name</label>\r\n                <input type=\"name\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.name\">\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Description</label>\r\n                <textarea class=\"form-control form-control-sm\" [(ngModel)]=\"data.description\"></textarea>\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Location</label>\r\n                <textarea class=\"form-control form-control-sm\" [(ngModel)]=\"data.location\"></textarea>\r\n                <br>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Start Date</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.start_date\">\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">End Date</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.end_date\">\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Offset</label>\r\n                <input type=\"number\" step=\"any\" class=\"form-control form-control-sm\" [(ngModel)]=\"data.offset\">\r\n                <br>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <label class=\"text-muted\">Project Schedules</label>\r\n                <table class=\"table table-hover table-borderless data-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th width=\"33.33%\" class=\"text-muted\">Time In</th>\r\n                            <th width=\"33.33%\" class=\"text-muted\">Time Out</th>\r\n                            <th width=\"33.33%\" class=\"text-muted\">Night Shift?</th>\r\n                            <th>\r\n                                <div class=\"center\">\r\n                                    <button class=\"surelog-btn success-bg shadow border-0\" (click)=\"addRow()\">\r\n                                        <ion-icon name=\"add-outline\"></ion-icon>\r\n                                    </button>\r\n                                </div>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let project_schedule of data.project_schedules\" class=\"bg-light data-row\">\r\n                            <th>\r\n                                <input type=\"time\" class=\"form-control form-control-sm\" style=\"font-size: 1em !important;\" [(ngModel)]=\"project_schedule.time_in\">\r\n                            </th>\r\n                            <th>\r\n                                <input type=\"time\" class=\"form-control form-control-sm\" style=\"font-size: 1em !important;\" [(ngModel)]=\"project_schedule.time_out\">\r\n                            </th>\r\n                            <th>\r\n                                <label class=\"switch\">\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"project_schedule.is_night_shift\">\r\n                                    <span class=\"slider round\"></span>\r\n                                </label>\r\n                            </th>\r\n                            <th>\r\n                                <div class=\"center\">\r\n                                    <span class=\"text-danger pointer\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteRow(project_schedule)\">\r\n                                        <ion-icon name=\"trash-outline\"></ion-icon>\r\n                                    </span>\r\n                                </div>\r\n                            </th>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 col-12\">\r\n                <label class=\"text-muted\">Employees</label>\r\n                <div class=\"light-bg rounded border\" style=\"height: 250px; overflow-y: auto;\">\r\n                    <div class=\"p-2\">\r\n                        <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Search Employee\" (input)=\"filterUser()\" [(ngModel)]=\"employee_keyword\">\r\n                    </div>\r\n                    <table class=\"table table-hover table-borderless\">\r\n                        <tr *ngFor=\"let user of users_filtered\" class=\"bg-light data-row\">\r\n                            <th class=\"p-2 border-bottom\">\r\n                                <span>{{user.name}}</span>\r\n                                <br>\r\n                                <a class=\"btn btn-link\" style=\"font-size: .95em;\" (click)=\"addUser('member', user)\">Add as Member</a>\r\n                                &nbsp;&nbsp;&nbsp;\r\n                                <a class=\"btn btn-link\" style=\"font-size: .95em;\" (click)=\"addUser('authority', user)\">Add as Authority</a>\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-12\">\r\n                <label class=\"text-muted\">Project Members</label>\r\n                <div class=\"light-bg rounded border\" style=\"height: 250px; overflow-y: auto;\">\r\n                    <table class=\"table table-hover table-borderless\">\r\n                        <tr *ngFor=\"let user of data.project_members\" class=\"bg-light data-row\">\r\n                            <th class=\"p-2 border-bottom\">\r\n                                <span>\r\n                                    {{employeeName(user)}}\r\n                                    <span class=\"pointer text-danger right\" style=\"font-size: 1.3em;\" (click)=\"removeUser('member', user)\">\r\n                                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                                    </span>\r\n                                </span>\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-12\">\r\n                <label class=\"text-muted\">Project Authorities</label>\r\n                <div class=\"light-bg rounded border\" style=\"height: 250px; overflow-y: auto;\">\r\n                    <table class=\"table table-hover table-borderless\">\r\n                        <tr *ngFor=\"let user of data.project_authorities\" class=\"bg-light data-row\">\r\n                            <th class=\"p-2 border-bottom\">\r\n                                <span>\r\n                                    {{employeeName(user)}}\r\n                                    <span class=\"pointer text-danger right\" style=\"font-size: 1.3em;\" (click)=\"removeUser('authority', user)\">\r\n                                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                                    </span>\r\n                                </span>\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_project-form_project-form_module_ts.js.map