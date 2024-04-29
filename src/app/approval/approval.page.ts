import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { TimeService } from '../services/time/time.service';

@Component({
    selector: 'app-approval',
    templateUrl: './approval.page.html',
    styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {

    departments:any = [];
    dateFrom: string = '';
    dateTo: string = '';
    departmentId: string = '';
    limit:string = '10';
    page: number = 1;
    sortBy: string = 'date';
    sorting: string = 'asc';
    project: any = {
        id: '',
        name: ''
    }
    filings:any = {
        data: null
    };
    loader: boolean = false;

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController,
        private time: TimeService,
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

    getOtFilings() {
        this.loader = true;
        this.api.get(
            'approval' +
            `?dateFrom=${this.dateFrom}` +
            `&dateTo=${this.dateTo}` +
            `&departmentId=${this.departmentId}` +
            `&projectId=${this.project.id}&limit=` +
            `&sortBy=${this.sortBy}` +
            `&sorting=${this.sorting}`
        )
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.filings = res;
                console.log(this.filings);
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

    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getOtFilings();
    }

    actions(status, filing) {
        if (status === 1) {
            let buttons = [
                {
                    text: 'Next',
                    handler: (holiday) => {
                        buttons = [
                            {
                                text: 'Next',
                                handler: (ot) => {
                                    buttons = [
                                        {
                                            text: 'okay',
                                            handler: (night) => {
                                                buttons = [
                                                    {
                                                        text: 'yes',
                                                        handler: () => {
                                                            let data = {
                                                                holidayHours: holiday.hours,
                                                                otHours: ot.hours,
                                                                nightOtHours: night.hours
                                                            }
                                                            this.api.post(`approval/update/${filing.id}/approved`, data)
                                                            .subscribe(
                                                                (res: any) => {
                                                                    this.controller.presentAlert('Success', res.message);
                                                                    filing.approved_holiday_hours = res.data.approved_holiday_hours;
                                                                    filing.approved_ot_hours = res.data.approved_ot_hours;
                                                                    filing.approved_night_ot_hours = res.data.approved_night_ot_hours;
                                                                    filing.approved_by = res.data.approved_by;
                                                                    filing.declined_by = null;
                                                                },
                                                                (err: any) => {
                                                                    this.controller.showErrorAlert(err);
                                                                }
                                                            );
                                                        }
                                                    },
                                                    {
                                                        text: 'cancel'
                                                    }
                                                ];

                                                this.controller.presentAlert('Confirm', 'Are you sure to approve this overtime filing?', buttons);
                                            }
                                        },
                                        {
                                            text: 'cancel'
                                        }
                                    ];

                                    inputs = [
                                        {
                                            type: 'number',
                                            name: 'hours',
                                            value: filing.approved_night_ot_hours
                                        }
                                    ];

                                    this.controller.presentAlert('Approve', 'Please input approved night overtime hours', buttons, inputs);
                                }
                            },
                            {
                                text: 'cancel'
                            }
                        ];

                        inputs = [
                            {
                                type: 'number',
                                name: 'hours',
                                value: filing.approved_ot_hours
                            }
                        ];

                        this.controller.presentAlert('Approve', 'Please input approved overtime hours', buttons, inputs);
                    }
                },
                {
                    text: 'cancel'
                }
            ];

            let inputs = [
                {
                    type: 'number',
                    name: 'hours',
                    value: filing.approved_holiday_hours
                }
            ];

            this.controller.presentAlert('Approve', 'Please input approved holiday hours', buttons, inputs);
        } else {
            let buttons = [
                {
                    text: 'yes',
                    handler: () => {
                        this.api.post(`approval/update/${filing.id}/declined`)
                        .subscribe(
                            (res: any) => {
                                this.controller.presentAlert('Success', res.message);
                                filing.approved_holiday_hours = 0;
                                filing.approved_ot_hours = 0;
                                filing.approved_night_ot_hours = 0;
                                filing.approved_by = null;
                                filing.declined_by = res.data.declined_by;
                            },
                            (err: any) => {
                                this.controller.showErrorAlert(err);
                            }
                        );
                    }
                },
                {
                    text: 'cancel'
                }
            ];

            this.controller.presentAlert('Confirm', 'Are you sure to decline this overtime filing?', buttons);
        }
    }

    viewAttendance(filing) {
        this.controller.presentAlert(
            'Attendance',
            '<strong>Time in</strong>:<br/>' + (
                filing.attendance.length > 0
                ? this.time.getLongDateTime(filing.attendance[0].time_in)
                : 'N/A'
            ) + `<br/><br/>` + 
            '<strong>Time out</strong>:<br/>' + (
                filing.attendance.length > 0
                ? (filing.attendance[0].time_out ? this.time.getLongDateTime(filing.attendance[0].time_out) : 'N/A')
                : 'N/A'
            )
        );
    }
}
