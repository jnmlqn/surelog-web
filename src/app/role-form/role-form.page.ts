import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.page.html',
    styleUrls: ['./role-form.page.scss'],
})
export class RoleFormPage implements OnInit {

    id: string = null;
    data: any = {
        permissions: []
    };
    modules: any = [];
    selected_modules: any = [];
    loader: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
    ) {

    }

    ngOnInit() {
        this.loader = true;
        // get address details
        this.api.get(`modules`)
        .subscribe(
            (res: any) => {
                this.modules = res.data;

                // Check parameters for role id
                this.route.params.subscribe(params => {
                    this.id = params.id;
                    if(this.id !== null && this.id !== undefined) {
                        // get role information
                        this.api.get(`roles/${this.id}`)
                        .subscribe(
                            (res: any) => {
                                this.data = {
                                    name: res.data.name,
                                    permissions: res.data.permissions
                                };

                                let selected_modules = [];
                                for(const p of res.data.permissions) {
                                    selected_modules.push(p.module_id);
                                }

                                this.selected_modules = selected_modules;
                            },
                            (err) => {
                                this.controller.showErrorAlert(err);
                            },
                            () => {
                                this.loader = false;
                            }
                        );
                    } else {
                        this.loader = false;
                    }
                });
            },
            (err) => {
                this.loader = false;
            }
        );   
    }

    selectModule() {
        for(const module_id of this.selected_modules) {

            let i = this.controller.findObjectByKey(this.data.permissions, 'module_id', module_id);

            if(i < 0) {
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

        for(const p of this.data.permissions) {
            let i = this.selected_modules.indexOf(p.module_id);
            let x = this.controller.findObjectByKey(this.data.permissions, 'module_id', p.module_id);
            if(i < 0) this.data.permissions.splice(x, 1);
        }
    }

    moduleName(id) {
        for(const mod of this.modules) {
            if(mod.id == id) {
                return mod.name 
            }
        }
    }

    save() {
        let url = '';

        if(this.id !== null && this.id !== undefined) {
            url = `roles/update/${this.id}`;
        } else {
            url = `roles/store`;
        }

        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    if(this.id == null || this.id == undefined) {
                        this.data = {
                            permissions: []
                        };
                        this.selected_modules = [];
                    }
                    this.controller.presentAlert('Success', res.message);
                },
                (err: any) => {
                    loading.dismiss();
                    this.controller.showErrorAlert(err);
                }
            )
        });
    }

}
