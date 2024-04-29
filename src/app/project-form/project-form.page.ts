import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.page.html',
    styleUrls: ['./project-form.page.scss'],
})
export class ProjectFormPage implements OnInit {

    id: string = null;

    employee_keyword: string = '';
    users_all: any = [];
    users_filtered: any = [];

    loader: boolean = false;

    departments: any = [];

    data: any = {
        project_schedules: [],
        project_authorities: [],
        project_members: [],
    }

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
    ) {

    }

    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data`)
        .subscribe(
            (res: any) => {
                this.departments = res.data.departments;

                this.api.get(`employees?get=true`)
                .subscribe(
                    (res: any) => {
                        this.users_all = res.data;

                        // Check parameters for employee id
                        this.route.params.subscribe(params => {
                            this.id = params.id;
                            if(this.id !== null && this.id !== undefined) {
                                // get employee information
                                this.api.get(`projects/${this.id}`)
                                .subscribe(
                                    (res: any) => {
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
                                        for(const a of res.data.project_authorities) {
                                            this.data.project_authorities.push(a.user_id);
                                        }
                                        for(const m of res.data.project_members) {
                                            this.data.project_members.push(m.user_id);
                                        }
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
                    (err: any) => {
                        this.loader = false;
                    }
                ); 
            },
            (err) => {
                this.controller.showErrorAlert(err);
                this.loader = false;
            }
        );
    }

    filterUser() {
        this.users_filtered = this.users_all.filter(value => value.department_id.id == this.data.department_id && value.name.toLowerCase().includes(this.employee_keyword.toLowerCase()));
    }

    addUser(mode, user) {
        if(mode == 'member') {
            let i = this.data.project_members.indexOf(user.id);
            if(i > -1) {
                this.controller.presentAlert('Warning', 'Already added as member');
                return;
            }
            this.data.project_members.push(user.id);
        } else {
            let i = this.data.project_authorities.indexOf(user.id);
            if(i > -1) {
                this.controller.presentAlert('Warning', 'Already added as authority');
                return;
            }
            this.data.project_authorities.push(user.id);
        }
    }

    removeUser(mode, user_id) {
        if(mode == 'member') {
            let i = this.data.project_members.indexOf(user_id);
            this.data.project_members.splice(i, 1);
        } else {
            let i = this.data.project_authorities.indexOf(user_id);
            this.data.project_authorities.splice(i, 1);
        }
    }

    employeeName(user) {
        let i = this.controller.findObjectByKey(this.users_all, 'id', user);
        if(i < 0) return 'DELETED EMPLOYEE DETAILS';
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

        if(this.id !== null && this.id !== undefined) {
            url = `projects/update/${this.id}`;
        } else {
            url = `projects/store`;
        }

        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    if(this.id == null || this.id == undefined) {
                        this.data = {
                            project_schedules: []
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
}
