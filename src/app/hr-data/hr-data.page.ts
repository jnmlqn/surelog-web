import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-hr-data',
    templateUrl: './hr-data.page.html',
    styleUrls: ['./hr-data.page.scss'],
})
export class HrDataPage implements OnInit {

    id: string = null;
    active_tab: number = 1;
    loader: boolean = false;

    data: any = {
        civil_statuses: [],
        departments: [],
        employment_types: [],
        sss_contributions: [],
        pagibig_contributions: [],
        philhealth_contributions: [],
        taxes: []
    };

    months: any = [
        {val: '01', label: 'Jan'},
        {val: '02', label: 'Feb'},
        {val: '03', label: 'Mar'},
        {val: '04', label: 'Apr'},
        {val: '05', label: 'May'},
        {val: '06', label: 'Jun'},
        {val: '07', label: 'Jul'},
        {val: '08', label: 'Aug'},
        {val: '09', label: 'Sep'},
        {val: '10', label: 'Oct'},
        {val: '11', label: 'Nov'},
        {val: '12', label: 'Dec'}
    ];

    years: any = [];

    holidays:any = {
        data: []
    };
    keyword: string = '';
    year: string = '';
    month: string = '';
    limit: string = '10';
    page: number = 1;
    search: any = null;
    sortBy: string = 'created_at';
    sorting: string = 'desc';

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
    ) {
        let current_year = new Date().getFullYear();
        for(let i = current_year; i >= 2000; i--) {
            this.years.push(i);
        }
    }

    ngOnInit() {
        this.loader = true;
        this.api.get(`hr-data/index`)
        .subscribe(
            (res: any) => {
                this.data = res.data;
                this.loader = false;
            },
            (err) => {
                this.controller.showErrorAlert(err);
                this.loader = false;
            }
        );  
    }

    addRow(mode) {
        if(mode == 'civil_status') {
            this.data.civil_statuses.unshift({
                id: null,
                name: null
            });
        } else if(mode == 'department') {
            this.data.departments.unshift({
                id: null,
                name: null
            });
        } else if(mode == 'employment_type') {
            this.data.employment_types.unshift({
                id: null,
                name: null,
                regular_ot_rate: 0,
                legal_hol_rate: 0,
                legal_hol_ot_rate: 0,
                night_diff_rate: 0,
                restday_rate: 0,
                restday_ot_rate: 0,
                special_hol_rate: 0,
                special_hol_ot_rate: 0,
            });            
        } else if(mode == 'sss_contribution') {
            this.data.sss_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                employer: 0,
                employee: 0
            });
        } else if(mode == 'pagibig_contribution') {
            this.data.pagibig_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                employer_rate: 0,
                employee_rate: 0
            });
        } else if(mode == 'philhealth_contribution') {
            this.data.philhealth_contributions.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                rate: 0
            });
        } else if(mode == 'tax') {
            this.data.taxes.unshift({
                id: null,
                range_from: 0,
                range_to: 0,
                deduction: 0,
                percentage: 0
            });
        } else if(mode == 'holiday') {
            this.holidays.data.unshift({
                id: null,
                date: '',
                holiday: '',
                type: '',
            });
        }
    }

    deleteRow(mode, data) {
        if(mode == 'civil_status') {
            let i = this.data.civil_statuses.indexOf(data);
            this.data.civil_statuses.splice(i, 1);
        } else if(mode == 'department') {
            let i = this.data.departments.indexOf(data);
            this.data.departments.splice(i, 1);
        } else if(mode == 'employment_type') {
            let i = this.data.employment_types.indexOf(data);
            this.data.employment_types.splice(i, 1);         
        } else if(mode == 'sss_contribution') {
            let i = this.data.sss_contributions.indexOf(data);
            this.data.sss_contributions.splice(i, 1);         
        } else if(mode == 'pagibig_contribution') {
            let i = this.data.pagibig_contributions.indexOf(data);
            this.data.pagibig_contributions.splice(i, 1);         
        } else if(mode == 'philhealth_contribution') {
            let i = this.data.philhealth_contributions.indexOf(data);
            this.data.philhealth_contributions.splice(i, 1);         
        } else if(mode == 'tax') {
            let i = this.data.taxes.indexOf(data);
            this.data.taxes.splice(i, 1);         
        }
    }

    save() {
        for(const cs of this.data.civil_statuses) {
            if(cs.name == null) {
                this.controller.presentAlert('Warning', 'Please enter civil status name');
                return;
            }
        }

        for(const d of this.data.departments) {
            if(d.name == null) {
                this.controller.presentAlert('Warning', 'Please enter department name');
                return;
            }
        }

        for(const et of this.data.employment_types) {
            if(et.name == null) {
                this.controller.presentAlert('Warning', 'Please enter employment type name');
                return;
            }
        }

        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post('hr-data/update', this.data)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    this.data = res.data;
                    this.controller.presentAlert('Success', res.message);
                },
                (err: any) => {
                    loading.dismiss();
                    this.controller.showErrorAlert(err);
                }
            )
        });
    }

    getHolidays() {
        this.active_tab = 8
        this.loader = true;
        this.api.get(`holidays?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&year=${this.year}&month=${this.month}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.holidays = res.data;
            },
            (err) => {
                this.loader = false;;
                this.controller.showErrorAlert(err);
            }
        );
    }


    paginate(page) {
        if(page == 'pagination.previous') {
            this.page--;
        } else if(page == 'pagination.next') {
            this.page++;
        } else {
            this.page = page;
        }

        this.getHolidays();
    }

    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getHolidays();
        }, 1000);
    }

    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getHolidays();
    }

    saveHoliday(holiday) {
        this.controller.presentLoading('Saving, please wait...')
        .then((loading) => {
            let url = '';
            if(holiday.id == null) {
                url = `holidays`;
            } else {
                url = `holidays/${holiday.id}`;
            }
            this.api.post(url, holiday)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    holiday.id = res.data.id;
                    this.controller.presentAlert('Success', res.message);
                },
                (err: any) => {
                    loading.dismiss();
                    this.controller.showErrorAlert(err);
                }
            )
        });
    }

    deleteHoliday(holiday) {
        let i = this.holidays.data.indexOf(holiday);
        if(holiday.id == null) {
            this.holidays.data.splice(i, 1);
        } else {
            let buttons = [
                {
                    text: 'Yes',
                    handler: () => {
                        this.controller.presentLoading('Deleting, please wait...')
                        .then((loading) => {
                            this.api.post(`holidays/delete/${holiday.id}`, null)
                            .subscribe(
                                (res: any) => {
                                    loading.dismiss();
                                    this.holidays.data.splice(i, 1);
                                    this.controller.presentAlert('Success', res.message);
                                },
                                (err: any) => {
                                    loading.dismiss();
                                    this.controller.showErrorAlert(err);
                                }
                            );
                        });
                    }
                }, 
                {
                    text: 'no'
                }
            ];

            this.controller.presentAlert('Warning', 'Are you sure to delete this project?', buttons); 
        }
    }

}
