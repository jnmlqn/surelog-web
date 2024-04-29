import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';

@Component({
    selector: 'app-attendance',
    templateUrl: './attendance.page.html',
    styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

    id: string = '';
    dateFrom: string = '';
    dateTo: string = '';
    computationType: string = '';
    attendance: any = [];
    loader: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
    ) { }

    ngOnInit() {
        this.loadAttendance();
    }

    loadAttendance() {
        this.loader = true;
        this.route.params
        .subscribe(params => {
            this.id = params.id;
            this.dateFrom = params.dateFrom;
            this.dateTo = params.dateTo;
            this.computationType = params.computationType;

            this.api.get(
                `accounting` +
                `?dateFrom=${this.dateFrom}` +
                `&dateTo=${this.dateTo}` +
                `&computationType=${this.computationType}` +
                `&employeeId=${this.id}`
            )
            .subscribe(
                (res: any) => {
                    this.loader = false;
                    this.attendance = res.data ? res.data[0] : [];
                    console.log(this.attendance);
                },
                (err: any) => {
                    this.loader = false;
                    this.controller.showErrorAlert(err);
                }
            ); 
        });
    }

    updateAttendance(type, att, e = null) {
        if (e === null) {

        } else {
            if (type == 'leave') {
                att.on_leave = e.target.checked ? 1 : 0;
                if (e.target.checked) {
                    att.on_half_leave = 0;
                }
            } else if (type == 'half_leave') {
                 att.on_half_leave = e.target.checked ? 1 : 0;
                 if (e.target.checked) {
                    att.on_leave = 0;
                }
            } else if (type == 'absent') {
                att.is_absent = e.target.checked ? 1 : 0;
            }
        }
    }
}
