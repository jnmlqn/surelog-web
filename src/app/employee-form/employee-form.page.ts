import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.page.html',
    styleUrls: ['./employee-form.page.scss'],
})
export class EmployeeFormPage implements OnInit {

    id: string = null;
    active_tab: number = 1;

    user: any = null;
    address_details: any = null;

    roles: any = [];
    departments: any = [];
    employment_types: any = [];
    civil_statuses: any = [];
    cities: any = [];
    zipcodes: any = [];

    data: any = {
        office_schedule: 0,
    }
    
    loader: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController
    ) {

    }

    ngOnInit() {
        this.loader = true;
        // get address details
        this.api.get(`zipcodes`)
        .subscribe(
            (res: any) => {
                this.address_details = res.data;

                // get HR details
                this.api.get(`hr-data`)
                .subscribe(
                    (res: any) => {
                        this.civil_statuses = res.data.civil_statuses;
                        this.departments = res.data.departments;
                        this.employment_types = res.data.employment_types;
                        this.roles = res.data.roles;

                        // Check parameters for employee id
                        this.route.params.subscribe(params => {
                            this.id = params.id;
                            if(this.id !== null && this.id !== undefined) {
                                // get employee information
                                this.api.get(`employees/${this.id}`)
                                .subscribe(
                                    (res: any) => {
                                        this.loader = false;
                                        this.user = res.data;
                                        this.data.employee_id = this.user.employee_id;
                                        this.data.email = this.user.email;
                                        this.data.first_name = this.user.first_name;
                                        this.data.middle_name = this.user.middle_name;
                                        this.data.last_name = this.user.last_name;
                                        this.data.extension = this.user.extension;
                                        this.data.birthday = this.user.birthday;
                                        this.data.mobile = this.user.mobile;
                                        this.data.position = this.user.position;
                                        this.data.rate = this.user.rate;
                                        this.data.taxable_allowance = this.user.taxable_allowance;
                                        this.data.tin = this.user.tin;
                                        this.data.sss_number = this.user.sss_number;
                                        this.data.pagibig_number = this.user.pagibig_number;
                                        this.data.philhealth_number = this.user.philhealth_number;
                                        this.data.civil_status_id = this.user.civil_status_id.toString();
                                        this.data.department_id = this.user.department_id.toString();
                                        this.data.employment_type_id = this.user.employment_type_id.toString();
                                        this.data.role_id = this.user.role_id.toString();
                                        this.data.supervisor = this.user.supervisor ? this.user.supervisor.id : null;
                                        this.data.supervisor_name = this.user.supervisor ? this.user.supervisor.name : null;

                                        if(this.user.address) {
                                            this.data.address = this.user.address.address;
                                            this.data.province_id = this.user.address.zipcode_id.city_id.province_id.id.toString();
                                            this.data.city_id = this.user.address.zipcode_id.city_id.id.toString();
                                            this.data.zipcode_id = this.user.address.zipcode_id.id.toString();
                                            this.selectProvice();
                                            this.selectCity();
                                        }

                                        if(this.user.office_schedule) {
                                            this.data.office_schedule = true;
                                            this.data.monday_in = this.user.office_schedule.monday_in;
                                            this.data.monday_out = this.user.office_schedule.monday_out;
                                            this.data.tuesday_in = this.user.office_schedule.tuesday_in;
                                            this.data.tuesday_out = this.user.office_schedule.tuesday_out;
                                            this.data.wednesday_in = this.user.office_schedule.wednesday_in;
                                            this.data.wednesday_out = this.user.office_schedule.wednesday_out;
                                            this.data.thursday_in = this.user.office_schedule.thursday_in;
                                            this.data.thursday_out = this.user.office_schedule.thursday_out;
                                            this.data.friday_in = this.user.office_schedule.friday_in;
                                            this.data.friday_out = this.user.office_schedule.friday_out;
                                            this.data.saturday_in = this.user.office_schedule.saturday_in;
                                            this.data.saturday_out = this.user.office_schedule.saturday_out;
                                            this.data.sunday_in = this.user.office_schedule.sunday_in;
                                            this.data.sunday_out = this.user.office_schedule.sunday_out;
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
                    (err) => {
                        this.controller.showErrorAlert(err);
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

    selectProvice() {
        this.cities = this.address_details.cities.filter((res) => {
            return res.province_id == this.data.province_id;
        });
    }

    selectCity() {
        this.zipcodes = this.address_details.zipcodes.filter((res) => {
            return res.city_id == this.data.city_id;
        });
    }

    save() {
        let url = '';

        if(this.id !== null && this.id !== undefined) {
            url = `employees/update/${this.id}`;
        } else {
            url = `employees/store`;
        }

        this.controller.presentLoading('Saving, please wait...').then((loading) => {
            this.api.post(url, this.data)
            .subscribe(
                (res: any) => {
                    loading.dismiss();
                    this.controller.presentAlert('Success', res.message);
                    if(this.id == null || this.id == undefined) {
                        this.cities = [];
                        this.zipcodes = [];
                        this.data = {
                            office_schedule: 0,
                        }
                    } 
                },
                (err: any) => {
                    loading.dismiss();
                    this.controller.showErrorAlert(err);
                }
            )
        });
    }

    async searchEmployee() {
        const modal = await this.modalCtrl.create({
            component: SearchPage,
            componentProps: {
                title: 'Search Employee',
                url: 'employees?get=true&limit=20&keyword=',
                defaultLabel: 'Not Applicable',
                defaultValue: ''
            }
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();
        if (data !== undefined) {
            this.data.supervisor = data.data.id;
            this.data.supervisor_name = data.data.name;
        }
    }
}
