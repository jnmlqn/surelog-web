import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.page.html',
    styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {

    id: string = null;
    loader: boolean = false;
    departments: any = [];
    project: any = {
        id: '',
        name: ''
    };
    data: any = {
        project_id: '',
        department_id: '',
        post: ''
    };

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController,
    ) {

    }

    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data`)
        .subscribe(
            (res: any) => {
                this.departments = res.data.departments;

                // Check parameters for employee id
                this.route.params.subscribe(params => {
                    this.id = params.id;
                    if(this.id !== null && this.id !== undefined) {
                        // get employee information
                        this.api.get(`posts/${this.id}`)
                        .subscribe(
                            (res: any) => {
                                this.loader = false;
                                this.project = res.data.project_id ? res.data.project_id : {id: '', name: ''};
                                this.data.department_id = res.data.department_id;
                                this.data.post = res.data.post;
                            },
                            (err) => {
                                this.controller.showErrorAlert(err);
                                this.loader = false;
                            }
                        );
                    } else {
                        this.loader = false;
                    }
                });
            },
            (err) => {
                this.controller.showErrorAlert(err);
                this.loader = false;
            }
        );
    }

    save() {
        let url = '';

        if(this.id !== null && this.id !== undefined) {
            url = `posts/update/${this.id}`;
        } else {
            url = `posts/store`;
        }

        this.data.project_id = this.project.id;

        this.controller.presentLoading('Saving, please wait...')
        .then((loading) => {
            this.api.post(url, this.data)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    if(this.id == null || this.id == undefined) {
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
                },
                (err: any) => {
                    loading.dismiss();
                    this.controller.showErrorAlert(err);
                }
            )
        });
    }

    async searchProject() {
        const modal = await this.modalCtrl.create({
            component: SearchPage,
            componentProps: {
                title: 'Search Project',
                url: 'projects?get=true&limit=20&keyword=',
                defaultLabel: 'All Project/No Project',
                defaultValue: ''

            }
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data !== undefined) {
            console.log(data);
            this.project = data.data;
        }
    }

    selectDepartment(e) {
        this.data.department_id = e.srcElement.value;
    }
}
