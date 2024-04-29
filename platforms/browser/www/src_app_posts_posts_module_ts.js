(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_posts_posts_module_ts"],{

/***/ 561:
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageRoutingModule": () => (/* binding */ PostsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 6931);




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ 3067:
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPageModule": () => (/* binding */ PostsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.page */ 6931);
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts-routing.module */ 561);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let PostsPageModule = class PostsPageModule {
};
PostsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_1__.PostsPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _posts_page__WEBPACK_IMPORTED_MODULE_0__.PostsPage
        ]
    })
], PostsPageModule);



/***/ }),

/***/ 6931:
/*!*************************************!*\
  !*** ./src/app/posts/posts.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsPage": () => (/* binding */ PostsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./posts.page.html */ 3524);
/* harmony import */ var _posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.page.scss */ 22);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);








let PostsPage = class PostsPage {
    constructor(api, controller, modalCtrl) {
        this.api = api;
        this.controller = controller;
        this.modalCtrl = modalCtrl;
        this.dateFrom = '';
        this.dateTo = '';
        this.keyword = '';
        this.departments = [];
        this.departmentId = '';
        this.limit = '10';
        this.page = 1;
        this.search = null;
        this.sortBy = 'updated_at';
        this.sorting = 'desc';
        this.loader = false;
        this.project = {
            id: '',
            name: ''
        };
        this.posts = {
            data: {
                data: null
            }
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
        this.postsList();
    }
    postsList() {
        this.loader = true;
        this.api.get(`posts?page=${this.page}&dateFrom=${this.dateFrom}&dateTo=${this.dateTo}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&departmentId=${this.departmentId}&projectId=${this.project.id}&limit=${this.limit}`)
            .subscribe((res) => {
            this.loader = false;
            this.posts = res;
        }, (err) => {
            this.loader = false;
            this.controller.showErrorAlert(err);
        });
    }
    deletePost(post) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`posts/delete/${post.id}`, null)
                            .subscribe((res) => {
                            loading.dismiss();
                            this.controller.presentAlert('Success', res.message);
                            let i = this.posts.data.data.indexOf(post);
                            this.posts.data.data.splice(i, 1);
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
        this.controller.presentAlert('Warning', 'Are you sure to delete this post?', buttons);
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
        this.postsList();
    }
    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.postsList();
        }, 1000);
    }
    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.postsList();
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
                this.postsList();
            }
        });
    }
};
PostsPage.ctorParameters = () => [
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
PostsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostsPage);



/***/ }),

/***/ 22:
/*!***************************************!*\
  !*** ./src/app/posts/posts.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3524:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ANNOUNCEMENTS'\" [icon]=\"'trending-up-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        Browse Announcements\r\n        <br><br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label class=\"text-muted\">Search</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm\" [(ngModel)]=\"keyword\" placeholder=\"Search\" (input)=\"startSearch()\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label class=\"text-muted\">Date From</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateFrom\" placeholder=\"Search\" (change)=\"postsList()\">\r\n                <br>\r\n                <label class=\"text-muted\">Date To</label>\r\n                <input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"dateTo\" placeholder=\"Search\" (change)=\"postsList()\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <label class=\"text-muted\">Filter by Department</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" [(ngModel)]=\"departmentId\" (ionChange)=\"postsList()\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n                <br>\r\n                <label class=\"text-muted\">Filter by Project</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm bg-light\" [(ngModel)]=\"project.name\" readonly placeholder=\"Click to search\" (click)=\"searchProject()\" style=\"cursor: pointer;\">\r\n            </div>\r\n            <div class=\"col-md-3 mt-1\">\r\n                <br>\r\n                <button class=\"surelog-btn secondary-bg shadow border-0 right\" routerLink=\"/posts/create\">\r\n                    <ion-icon name=\"add-outline\"></ion-icon>\r\n                    &nbsp;\r\n                    <label>New Announcement</label>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <br><br>\r\n        <div style=\"overflow: auto;\">\r\n            <table class=\"table table-hover table-borderless data-table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('post')\">\r\n                                Content\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'post' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\"text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('department_name')\">\r\n                                Department\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'department_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('project_name')\">\r\n                                Project\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'project_name' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            <span class=\"pointer sort\" (click)=\"sortData('updated_at')\">\r\n                                Last updated at\r\n                                <ion-icon name=\"chevron-{{sorting == 'desc' && sortBy == 'updated_at' ? 'down' : 'up'}}-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                        <th class=\" text-muted\">\r\n                            Action\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let post of posts.data.data\" class=\"bg-light data-row\">\r\n                        <th width=\"30%\" style=\"white-space: pre-wrap;\">{{post.post}}</th>\r\n                        <th>{{post.department_name ? post.department_name : 'N/A'}}</th>\r\n                        <th>{{post.project_name ? post.project_name : 'N/A'}}</th>\r\n                        <th>{{post.updated_at | date: 'mediumDate'}}</th>\r\n                        <th>\r\n                            <span class=\"pointer text-primary\" title=\"Edit\" style=\"font-size: 1.5em;\" routerLink=\"/posts/{{post.id}}/edit\">\r\n                                <ion-icon name=\"pencil-outline\"></ion-icon>\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            <span class=\"pointer text-danger\" title=\"Delete\" style=\"font-size: 1.5em;\" (click)=\"deletePost(post)\">\r\n                                <ion-icon name=\"trash-outline\"></ion-icon>\r\n                            </span>\r\n                        </th>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr class=\"bg-light data-row\">\r\n                        <th>\r\n                            <div class=\"row g-3 align-items-center\">\r\n                                <div class=\"col-auto\">\r\n                                    <label class=\"col-form-label\">Show</label>\r\n                                </div>\r\n                                <div class=\"col-auto p-0\">\r\n                                    <ion-select placeholder=\"Results Per Page\" class=\"form-control form-control-sm\" [(ngModel)]=\"limit\" (ionChange)=\"paginate(1)\">\r\n                                        <ion-select-option value=\"5\">5</ion-select-option>\r\n                                        <ion-select-option value=\"10\">10</ion-select-option>\r\n                                        <ion-select-option value=\"15\">15</ion-select-option>\r\n                                        <ion-select-option value=\"20\">20</ion-select-option>\r\n                                    </ion-select>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                <span>\r\n                                    per page\r\n                                </span>\r\n                                </div>\r\n                            </div>\r\n                        </th>\r\n                        <th colspan=\"7\" style=\"vertical-align: middle !important;\">\r\n                            <div class=\"right\" *ngIf=\"posts.data.last_page > 1\">\r\n                                <button class=\"btn shadow m-1 paginate-btn {{link.active ? 'active' : ''}}\" [disabled]=\"link.url == null\" *ngFor=\"let link of posts.data.links\" (click)=\"paginate(link.label)\">\r\n                                    {{link.label == 'pagination.previous' ? '<' : (link.label == 'pagination.next' ? '>' : link.label)}}\r\n                                </button>\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_posts_posts_module_ts.js.map