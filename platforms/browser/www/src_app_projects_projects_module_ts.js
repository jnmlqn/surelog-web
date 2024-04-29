(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_projects_projects_module_ts"],{

/***/ 916:
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageRoutingModule": () => (/* binding */ ProjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.page */ 9207);




const routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
    }
];
let ProjectsPageRoutingModule = class ProjectsPageRoutingModule {
};
ProjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectsPageRoutingModule);



/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPageModule": () => (/* binding */ ProjectsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.page */ 9207);
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-routing.module */ 916);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let ProjectsPageModule = class ProjectsPageModule {
};
ProjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProjectsPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _projects_page__WEBPACK_IMPORTED_MODULE_0__.ProjectsPage
        ]
    })
], ProjectsPageModule);



/***/ }),

/***/ 9207:
/*!*******************************************!*\
  !*** ./src/app/projects/projects.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsPage": () => (/* binding */ ProjectsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./projects.page.html */ 4204);
/* harmony import */ var _projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.page.scss */ 6927);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);






let ProjectsPage = class ProjectsPage {
    constructor(api, controller) {
        this.api = api;
        this.controller = controller;
        this.keyword = '';
        this.departments = [];
        this.department_id = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sort_by = 'created_at';
        this.sorting = 'desc';
        this.projects = {
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
        }, (err) => {
            this.controller.showErrorAlert(err);
        });
        this.projectsList();
    }
    projectsList() {
        this.loader = true;
        this.api.get(`projects?page=${this.page}&keyword=${this.keyword}&sort_by=${this.sort_by}&sorting=${this.sorting}&department_id=${this.department_id}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.projects = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    deleteProject(project) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`projects/delete/${project.id}`, null)
                            .subscribe((res) => {
                            loading.dismiss();
                            this.controller.presentAlert('Success', res.message);
                            let i = this.projects.data.data.indexOf(project);
                            this.projects.data.data.splice(i, 1);
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
        this.projectsList();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.projectsList();
        }, 1000);
    }
    sortData(sort_by) {
        this.sort_by = sort_by;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.projectsList();
    }
};
ProjectsPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
ProjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-projects',
        template: _raw_loader_projects_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProjectsPage);



/***/ }),

/***/ 6927:
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4204:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'PROJECTS'\" [icon]=\"'trending-up-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Projects\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Search</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label>Filter by Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"department_id\" (ionChange)=\"startSearch()\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n            </div>\r\n            <div class=\"col-md-6 mt-1\">\r\n                <br>\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" routerLink=\"/projects/create\">\r\n                    <ion-icon name=\"add-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>New Project</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n        <div style=\"overflow: auto;\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('email')\">\r\n                                Project Name\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'email' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('employee_id')\">\r\n                                Project Description\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'employee_id' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('first_name')\">\r\n                                Location\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sort_by == 'first_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Start Date<br>End Date\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Offset\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Department\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Status\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Action\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let project of projects.data.data\" class=\"bg-light data-row\">\r\n                        <th>{{project.name}}</th>\r\n                        <th>{{project.description ? project.description : 'N/A'}}</th>\r\n                        <th>{{project.location}}</th>\r\n                        <th>{{project.start_date | date: 'mediumDate'}}<br>{{project.end_date | date: 'mediumDate'}}</th>\r\n                        <th>{{project.offset}}</th>\r\n                        <th>{{project.department_id ? project.department_id.name : 'N/A'}}</th>\r\n                        <th>{{project.status}}</th>\r\n                        <th>\r\n                            <span class=\"pointer text-success\" title=\"Locations\" style=\"font-size: 1.5em;\" routerLink=\"/projects/{{project.id}}/locate\">\r\n                                <ion-icon name=\"location-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-primary\" title=\"Edit\" style=\"font-size: 1.5em;\" routerLink=\"/projects/{{project.id}}/edit\">\r\n                                <ion-icon name=\"pencil-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-danger\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deleteProject(project)\">\r\n                                <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"bg-light data-row\">\r\n                        <th>\r\n                            <div class=\"row g-3 align-items-center\">\r\n                                <div class=\"col-auto\">\r\n                                    <label class=\"col-form-label\">Show</label>\r\n                                </div>\r\n                                <div class=\"col-auto p-0\">\r\n                                    <ion-select placeholder=\"Results Per Page\" class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\r\n                                        <ion-select-option value=\"5\">5</ion-select-option>\r\n                                        <ion-select-option value=\"10\">10</ion-select-option>\r\n                                        <ion-select-option value=\"15\">15</ion-select-option>\r\n                                        <ion-select-option value=\"20\">20</ion-select-option>\r\n                                    </ion-select>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                <span>\r\n                                    per page\r\n                                </span>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th colspan=\"7\" style=\"vertical-align: middle !important;\">\r\n                            <div class=\"right\" *ngIf=\"projects.data.last_page > 1\">\r\n                                <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of projects.data.links\" (click)=\"paginate(link.label)\">\r\n                                    {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\r\n                                </button>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_projects_projects_module_ts.js.map