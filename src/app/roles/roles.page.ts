import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.page.html',
    styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {

    keyword:string = '';
    limit:string = '10';
    page: number = 1;
    search: any = null;
    sortBy: string = 'created_at';
    sorting: string = 'desc';
    roles:any = {
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
        this.getRoles();
    }

    getRoles() {
        this.loader = true;
        this.api.get(`roles?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.roles = res;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        );
    }

    deleteRole(role) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`roles/delete/${role.id}`, null)
                        .subscribe(
                            (res: any) => {
                                loading.dismiss();
                                this.controller.presentAlert('Success', res.message);
                                let i = this.roles.data.data.indexOf(role);
                                this.roles.data.data.splice(i, 1);
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

        this.controller.presentAlert('Warning', 'Are you sure to delete this role?', buttons);
    }

    paginate(page) {
        if(page == 'pagination.previous') {
            this.page--;
        } else if(page == 'pagination.next') {
            this.page++;
        } else {
            this.page = page;
        }

        this.getRoles();
    }

    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getRoles();
        }, 1000);
    }

    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getRoles();
    }

}
