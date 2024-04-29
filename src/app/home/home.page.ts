import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    keyword:string = '';
    date:string = '';
    limit:string = '10';
    page: number = 1;
    search: any = null;
    sortBy: string = 'created_at';
    sorting: string = 'desc';
    audit_trails:any = {
        data: {
            data: null
        }
    };
    loader: boolean = false;

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private menuCtrl: MenuController,
    ) { 
        
    }

    ngOnInit() {
        
    }

    ionViewWillEnter() {
        this.getAuditTrails();
        this.menuCtrl.enable(true);
    }

    getAuditTrails() {
        this.loader = true;
        this.api.get(`audit-trails?page=${this.page}&keyword=${this.keyword}&sortBy=${this.sortBy}&sorting=${this.sorting}&date=${this.date}&limit=${this.limit}`)
        .subscribe(
            (res: any) => {
                this.loader = false;
                this.audit_trails = res;
            },
            (err: any) => {
                this.loader = false;
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

        this.getAuditTrails();
    }

    startSearch() {
        this.page = 1;
        clearTimeout(this.search);
        this.search = setTimeout(() => {
            this.getAuditTrails();
        }, 1000);
    }

    sortData(sortBy) {
        this.sortBy = sortBy;
        this.sorting = this.sorting == 'desc' ? 'asc' : 'desc';
        this.getAuditTrails();
    }

}
