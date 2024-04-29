import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ControllerService } from '../../services/controller/controller.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    data: any = [];
    @Input() title: string;
    @Input() url: string;
    @Input() defaultLabel: string;
    @Input() defaultValue: string;

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private modalCtrl: ModalController
    ) { 

    }

    ngOnInit() {
        this.search();
    }

    search(e = null) {
        let keyword = e ? e.target.value : '';
        this.api.get(this.url + keyword)
        .subscribe(
            (res: any) => {
                this.data = res.data;
            },
            (err: any) => {
                this.controller.showErrorAlert(err);
            }
        );
    }

    select(data) {
        this.modalCtrl.dismiss({
            data: data
        });
    }

}
