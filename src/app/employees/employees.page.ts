import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.page.html',
    styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

    keyword:string = '';
    departments:any = [];
    roles:any = [];
    role_id:string = '';
    department_id:string = '';
    limit:string = '10';
    page: number = 1;
    search: any = null;
    sort_by: string = 'created_at';
    sorting: string = 'desc';
    users:any = {
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
                this.roles = res.data.roles;
            },
            (err: any) => {
                console.log(err);
            }

        );
        this.getUsers();
    }

    getUsers() {
        this.loader = true;
        this.api.get(`employees?page=${this.page}&keyword=${this.keyword}&sort_by=${this.sort_by}&sorting=${this.sorting}&department_id=${this.department_id}&role_id=${this.role_id}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.users = res;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        );
    }

    deleteEmployee(user) {
        let buttons = [
            {
                text: 'Yes',
                handler: () => {
                    this.controller.presentLoading('Deleting, please wait...').then((loading) => {
                        this.api.post(`employees/delete/${user.id}`, null)
                        .subscribe(
                            (res: any) => {
                                loading.dismiss();
                                this.controller.presentAlert('Success', res.message);
                                let i = this.users.data.data.indexOf(user);
                                this.users.data.data.splice(i, 1);
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

        this.controller.presentAlert('Warning', 'Are you sure to delete this employee?', buttons);
    }

    paginate(page) {
        if(page == 'pagination.previous') {
            this.page--;
        } else if(page == 'pagination.next') {
            this.page++;
        } else {
            this.page = page;
        }

        this.getUsers();
    }

    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getUsers();
        }, 1000);
    }

    sortData(sort_by) {
        this.sort_by = sort_by;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getUsers();
    }

}
