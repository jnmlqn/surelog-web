import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.page.html',
    styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

    keyword: string = '';
    departments: any = [];
    department_id: string = '';
    limit: string = '10';
    page: number = 1;
    search: any = null;
    sort_by: string = 'created_at';
    sorting: string = 'desc';
    projects: any = {
        data: {
            data: null
        }
    };
    loader: boolean = false;

    constructor(
        private api: ApiService,
        private controller: ControllerService,
    ) { }

    ngOnInit() {
        
    }

    ionViewWillEnter() {
        this.api.get(`hr-data`)
        .subscribe(
            (res: any) => {                
                this.departments = res.data.departments;
            },
            (err: any) => {
                this.controller.showErrorAlert(err);
            }

        );
        this.projectsList();
    }

    projectsList() {
        this.loader = true;
        this.api.get(`projects?page=${this.page}&keyword=${this.keyword}&sort_by=${this.sort_by}&sorting=${this.sorting}&department_id=${this.department_id}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.projects = res;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        ); 
    }

    deleteProject(project) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`projects/delete/${project.id}`, null)
                        .subscribe(
                            (res: any) => {
                                loading.dismiss();
                                this.controller.presentAlert('Success', res.message);
                                let i = this.projects.data.data.indexOf(project);
                                this.projects.data.data.splice(i, 1);
                            },
                            (err: any) => {
                                loading.dismiss();
                                this.controller.showErrorAlert(err);
                            }
                        )
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
        if(page == 'pagination.previous') {
            this.page--;
        } else if(page == 'pagination.next') {
            this.page++;
        } else {
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
}
