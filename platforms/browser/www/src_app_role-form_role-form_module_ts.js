(self["webpackChunksurelog"] = self["webpackChunksurelog"] || []).push([["src_app_role-form_role-form_module_ts"],{

/***/ 1740:
/*!*******************************************************!*\
  !*** ./src/app/role-form/role-form-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleFormPageRoutingModule": () => (/* binding */ RoleFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _role_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-form.page */ 2049);




const routes = [
    {
        path: '',
        component: _role_form_page__WEBPACK_IMPORTED_MODULE_0__.RoleFormPage
    }
];
let RoleFormPageRoutingModule = class RoleFormPageRoutingModule {
};
RoleFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoleFormPageRoutingModule);



/***/ }),

/***/ 1343:
/*!***********************************************!*\
  !*** ./src/app/role-form/role-form.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleFormPageModule": () => (/* binding */ RoleFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _role_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-form.page */ 2049);
/* harmony import */ var _role_form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-form-routing.module */ 1740);
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components.module */ 6175);








let RoleFormPageModule = class RoleFormPageModule {
};
RoleFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _role_form_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoleFormPageRoutingModule,
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentsModule
        ],
        declarations: [
            _role_form_page__WEBPACK_IMPORTED_MODULE_0__.RoleFormPage
        ]
    })
], RoleFormPageModule);



/***/ }),

/***/ 2049:
/*!*********************************************!*\
  !*** ./src/app/role-form/role-form.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleFormPage": () => (/* binding */ RoleFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_role_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./role-form.page.html */ 6969);
/* harmony import */ var _role_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-form.page.scss */ 917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/controller/controller.service */ 198);







let RoleFormPage = class RoleFormPage {
    constructor(route, api, controller) {
        this.route = route;
        this.api = api;
        this.controller = controller;
        this.id = null;
        this.data = {
            permissions: []
        };
        this.modules = [];
        this.selected_modules = [];
        this.loader = false;
    }
    ngOnInit() {
        this.loader = true;
        // get address details
        this.api.get(`modules`)
            .subscribe((res) => {
            this.modules = res.data;
            // Check parameters for role id
            this.route.params.subscribe(params => {
                this.id = params.id;
                if (this.id !== null && this.id !== undefined) {
                    // get role information
                    this.api.get(`roles/${this.id}`)
                        .subscribe((res) => {
                        this.data = {
                            name: res.data.name,
                            permissions: res.data.permissions
                        };
                        let selected_modules = [];
                        for (const p of res.data.permissions) {
                            selected_modules.push(p.module_id);
                        }
                        this.selected_modules = selected_modules;
                    }, (err) => {
                        this.controller.showErrorAlert(err);
                    }, () => {
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
    }
    selectModule() {
        for (const module_id of this.selected_modules) {
            let i = this.controller.findObjectByKey(this.data.permissions, 'module_id', module_id);
            if (i < 0) {
                this.data.permissions.push({
                    module_id: module_id,
                    permissions: {
                        browse: false,
                        read: false,
                        edit: false,
                        add: false,
                        delete: false
                    }
                });
            }
        }
        for (const p of this.data.permissions) {
            let i = this.selected_modules.indexOf(p.module_id);
            let x = this.controller.findObjectByKey(this.data.permissions, 'module_id', p.module_id);
            if (i < 0)
                this.data.permissions.splice(x, 1);
        }
    }
    moduleName(id) {
        for (const mod of this.modules) {
            if (mod.id == id) {
                return mod.name;
            }
        }
    }
    save() {
        let url = '';
        if (this.id !== null && this.id !== undefined) {
            url = `roles/update/${this.id}`;
        }
        else {
            url = `roles/store`;
        }
        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
                .subscribe((res) => {
                loading.dismiss();
                if (this.id == null || this.id == undefined) {
                    this.data = {
                        permissions: []
                    };
                    this.selected_modules = [];
                }
                this.controller.presentAlert('Success', res.message);
            }, (err) => {
                loading.dismiss();
                this.controller.showErrorAlert(err);
            });
        });
    }
};
RoleFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_controller_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService }
];
RoleFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-role-form',
        template: _raw_loader_role_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_role_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoleFormPage);



/***/ }),

/***/ 917:
/*!***********************************************!*\
  !*** ./src/app/role-form/role-form.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 6969:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/role-form/role-form.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-navbar [title]=\"'ROLES'\" [icon]=\"'key-outline'\" [loader]=\"loader\">\n    <div content>\n        <button class=\"surelog-btn secondary-bg shadow border-0 right\" (click)=\"save()\">\n            <ion-icon name=\"save-outline\"></ion-icon>\n            &nbsp;\n            <label>Save Role</label>\n        </button>\n        {{id == undefined || id == null ? 'Create' : 'Edit'}} Role\n        <br><br>\n\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-12\">\n                <label class=\"text-muted\">Name</label>\n                <input type=\"name\" class=\"form-control form-control-sm\" required [(ngModel)]=\"data.name\">\n            </div>\n        </div>\n\n        <br>\n\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-12\">\n                <label class=\"text-muted\">Select Accessible Module/s</label>\n                <ion-select placeholder=\"Select Mdoule\" multiple=\"true\" class=\"form-control form-control-sm\" (ionChange)=\"selectModule()\" [(ngModel)]=\"selected_modules\">\n                    <ion-select-option value=\"{{module.id}}\" *ngFor=\"let module of modules\">\n                        {{module.name}}\n                    </ion-select-option>\n                </ion-select>\n            </div>\n        </div>\n\n        <br>\n\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-9 col-12\">\n                <table class=\"table table-hover table-borderless data-table\">\n                    <tbody>\n                        <tr *ngFor=\"let permission of data.permissions\" class=\"bg-light data-row\">\n                            <th style=\"vertical-align: text-top !important;\">{{moduleName(permission.module_id)}}</th>\n                            <th>\n                                <label class=\"switch mb-2\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"permission.permissions.browse\">\n                                    <span class=\"slider round\"></span>\n                                </label>&nbsp;&nbsp;&nbsp;&nbsp;Browse <br>\n\n                                <label class=\"switch mb-2\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"permission.permissions.read\">\n                                    <span class=\"slider round\"></span>\n                                </label>&nbsp;&nbsp;&nbsp;&nbsp;Read <br>\n\n                                <label class=\"switch mb-2\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"permission.permissions.edit\">\n                                    <span class=\"slider round\"></span>\n                                </label>&nbsp;&nbsp;&nbsp;&nbsp;Edit <br>\n\n                                <label class=\"switch mb-2\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"permission.permissions.add\">\n                                    <span class=\"slider round\"></span>\n                                </label>&nbsp;&nbsp;&nbsp;&nbsp;Add <br>\n\n                                <label class=\"switch mb-2\">\n                                    <input type=\"checkbox\" [(ngModel)]=\"permission.permissions.delete\">\n                                    <span class=\"slider round\"></span>\n                                </label>&nbsp;&nbsp;&nbsp;&nbsp;Delete <br>\n                            </th>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</app-navbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_role-form_role-form_module_ts.js.map