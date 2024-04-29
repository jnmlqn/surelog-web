import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';

@Component({
    selector: 'app-accounting',
    templateUrl: './accounting.page.html',
    styleUrls: ['./accounting.page.scss'],
})
export class AccountingPage implements OnInit {

    dateFrom: string = '';
    dateTo: string = '';
    departments: any = [];
    department_id: string = '';
    computationType: string = ''
    sort_by: string = 'first_name';
    sorting: string = 'asc';
    project: any = {
        id: '',
        name: ''
    };
    loader: boolean = false;
    attendance: any = {
        data: []
    };

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController
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
    }

    compute() {
        this.loader = true;
        this.api.get(
            `accounting` +
            `?dateFrom=${this.dateFrom}` +
            `&dateTo=${this.dateTo}` +
            `&departmentId=${this.department_id}` +
            `&computationType=${this.computationType}` +
            `&projectId=${this.project.id}` +
            `&sortBy=${this.sort_by}` +
            `&sorting=${this.sorting}`
        )
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.attendance = res;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        ); 
    }

    updateAttendance(attendance) {
        if (attendance.sss_check) {
            attendance.sss = attendance.sss_deduction;
        } else {
            attendance.sss = 0;
        }

        if (attendance.pagibig_check) {
            attendance.pagibig = attendance.pagibig_deduction;
        } else {
            attendance.pagibig = 0;
        }

        if (attendance.philhealth_check) {
            attendance.philhealth = attendance.philhealth_deduction;
        } else {
            attendance.philhealth = 0;
        }

        let data = {
            userId: attendance.id,
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            computationType: this.computationType,
            projectId: this.project.id,
            inputs: {
                backpay: attendance.backpay,
                pot_pay: attendance.pot_pay,
                sss: attendance.sss,
                pagibig: attendance.pagibig,
                philhealth: attendance.philhealth,
                sss_loan: attendance.sss_loan,
                pagibig_loan: attendance.pagibig_loan,
                out_of_office: attendance.out_of_office,
                cash_advance: attendance.cash_advance
            }
        }

        this.loader = true;
        this.api.post(`accounting`, data)
        .subscribe(
            (res: any) => {
                let i = this.attendance.data.indexOf(attendance);
                this.attendance.data[i] = res.data;
                this.loader = false;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        );
    }

    async searchProject() {
        const modal = await this.modalCtrl.create({
            component: SearchPage,
            componentProps: {
                title: 'Search Project',
                url: 'projects?get=true&limit=20&keyword=',
                defaultLabel: 'No Project',
                defaultValue: ''

            }
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data !== undefined) {
            this.project = data.data;
        }
    }

    sortData(sort_by) {
        this.sort_by = sort_by;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.compute();
    }

    checkAll(e, type) {
        for (const attendance of this.attendance.data) {
            if (e.srcElement.checked) {
                attendance[`${type}_check`] = true;
            } else {
                attendance[`${type}_check`] = false;
            }
        }

        this.bulkUpdate();
    }

    bulkUpdate() {
        let employees = [];
        for (const attendance of this.attendance.data){
            if (attendance.sss_check) {
                attendance.sss = attendance.sss_deduction;
            } else {
                attendance.sss = 0;
            }

            if (attendance.pagibig_check) {
                attendance.pagibig = attendance.pagibig_deduction;
            } else {
                attendance.pagibig = 0;
            }

            if (attendance.philhealth_check) {
                attendance.philhealth = attendance.philhealth_deduction;
            } else {
                attendance.philhealth = 0;
            }

            employees.push({
                userId: attendance.id,
                inputs: {
                    backpay: attendance.backpay,
                    pot_pay: attendance.pot_pay,
                    sss: attendance.sss,
                    pagibig: attendance.pagibig,
                    philhealth: attendance.philhealth,
                    sss_loan: attendance.sss_loan,
                    pagibig_loan: attendance.pagibig_loan,
                    out_of_office: attendance.out_of_office,
                    cash_advance: attendance.cash_advance
                }
            });
        }

        let data = {
            dateFrom: this.dateFrom,
            dateTo: this.dateTo,
            computationType: this.computationType,
            projectId: this.project.id,
            employees: employees
        };

        this.loader = true;
        this.api.post(`accounting/bulk`, data)
        .subscribe(
            (res: any) => {
                this.attendance.data = res.data;
                this.loader = false;
            },
            (err: any) => {
                this.loader = false;
                this.controller.showErrorAlert(err);
            }
        );
    }

    isCheckedAll(type) {
        for (const a of this.attendance.data) {
            if (!a[`${type}_check`]) {
                return false
            }
        }

        return true;
    }
}
