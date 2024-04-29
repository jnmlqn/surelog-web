(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_post-form_post-form_module_ts"],{

/***/ 1341:
/*!*******************************************************!*\
  !*** ./src/app/post-form/post-form-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFormPageRoutingModule": () => (/* binding */ PostFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _post_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-form.page */ 4810);




const routes = [
    {
        path: '',
        component: _post_form_page__WEBPACK_IMPORTED_MODULE_0__.PostFormPage
    }
];
let PostFormPageRoutingModule = class PostFormPageRoutingModule {
};
PostFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostFormPageRoutingModule);



/***/ }),

/***/ 2706:
/*!***********************************************!*\
  !*** ./src/app/post-form/post-form.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFormPageModule": () => (/* binding */ PostFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _post_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-form.page */ 4810);
/* harmony import */ var _post_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-form-routing.module */ 1341);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let PostFormPageModule = class PostFormPageModule {
};
PostFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _post_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.PostFormPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _post_form_page__WEBPACK_IMPORTED_MODULE_0__.PostFormPage
        ]
    })
], PostFormPageModule);



/***/ }),

/***/ 4810:
/*!*********************************************!*\
  !*** ./src/app/post-form/post-form.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFormPage": () => (/* binding */ PostFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_post_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-form.page.html */ 6476);
/* harmony import */ var _post_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-form.page.scss */ 8665);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/search/search.page */ 1574);









let PostFormPage = class PostFormPage {
    constructor(route, api, controller, modalCtrl) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.modalCtrl = modalCtrl;
        this.id = null;
        this.loader = false;
        this.departments = [];
        this.project = {
            id: '',
            name: ''
        };
        this.data = {
            project_id: '',
            department_id: '',
            post: ''
        };
    }
    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data`)
            .subscribe((res) => {
            this.departments = res.data.departments;
            // Check parameters for employee id
            this.route.params.subscribe(params => {
                this.id = params.id;
                if (this.id !== null && this.id !== undefined) {
                    // get employee information
                    this.api.get(`posts/${this.id}`)
                        .subscribe((res) => {
                        this.loader = false;
                        this.project = res.data.project_id ? res.data.project_id : { id: '', name: '' };
                        this.data.department_id = res.data.department_id;
                        this.data.post = res.data.post;
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
    }
    save() {
        let url = '';
        if (this.id !== null && this.id !== undefined) {
            url = `posts/update/${this.id}`;
        }
        else {
            url = `posts/store`;
        }
        this.data.project_id = this.project.id;
        this.controller.presentLoading('Saving, please wait...')
            .then((loading) => {
            this.api.post(url, this.data)
                .subscribe((res) => {
                loading.dismiss();
                if (this.id == null || this.id == undefined) {
                    this.data = {
                        project_id: '',
                        department_id: '',
                        post: ''
                    };
                    this.project = {
                        id: '',
                        name: ''
                    };
                }
                this.controller.presentAlert('Success', res.message);
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
    searchProject() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_4__.SearchPage,
                componentProps: {
                    title: 'Search Project',
                    url: 'projects?get=true&limit=20&keyword=',
                    defaultLabel: 'All Project/No Project',
                    defaultValue: ''
                }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data !== undefined) {
                console.log(data);
                this.project = data.data;
            }
        });
    }
    selectDepartment(e) {
        this.data.department_id = e.srcElement.value;
    }
};
PostFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
PostFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-post-form',
        template: _raw_loader_post_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostFormPage);



/***/ }),

/***/ 8665:
/*!***********************************************!*\
  !*** ./src/app/post-form/post-form.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 6476:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-form/post-form.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ANNOUNCEMENTS'\" [icon]=\"'newspaper-outline'\" [loader]=\"loader\">\r\n    <div content>\r\n        <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"save()\">\r\n            <ion-icon name=\"save-outline\"></ion-icon>\r\n            &nbsp;\r\n            <label>Save Announcement</label>\r\n        </button>\r\n        {{id == undefined || id == null ? 'Create' : 'Edit'}} Announcement\r\n        <br><br>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Post to specific department only</label>\r\n                <ion-select placeholder=\"Select Department\" class=\"form-control form-control-sm\" value=\"{{data.department_id}}\" (ionChange)=\"selectDepartment($event)\">\r\n                    <ion-select-option value=\"\">All Departments</ion-select-option>\r\n                    <ion-select-option value=\"{{department.id}}\" *ngFor=\"let department of departments\">\r\n                        {{department.name}}\r\n                    </ion-select-option>\r\n                </ion-select>\r\n                <br>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-6 col-12\">\r\n                <label class=\"text-muted\">Post to specific project group</label>\r\n                <input type=\"text\" class=\"form-control form-control-sm bg-light\" [(ngModel)]=\"project.name\" readonly placeholder=\"Click to search\" (click)=\"searchProject()\" style=\"cursor: pointer;\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 col-md-12 col-12\">\r\n                <label class=\"text-muted\">Write an announcement</label>\r\n                <textarea class=\"form-control form-control-sm\" [(ngModel)]=\"data.post\" rows=\"30\"></textarea>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_post-form_post-form_module_ts.js.map