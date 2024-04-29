import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller/controller.service';
import { SocketService } from '../services/socket/socket.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

    loader: boolean = false;
    project_id: string;
    authorities: any = [];

    constructor(
        private api: ApiService,
        private controller: ControllerService,
        private route: ActivatedRoute,
        private socket: SocketService,
    ) { }

    ngOnInit() {
        this.loader = true;
        this.route.params.subscribe(params => {
            this.project_id = params.id;
            this.api.get(`projects/authorities/${this.project_id}`)
            .subscribe(
                (res: any) => {
                    this.loader = false;
                    this.authorities = res.data;
                },
                (err: any) => {
                    this.loader = false;
                    this.controller.showErrorAlert(err);
                }

            );
        });   
    }

    locate(authority) {
        let event_count = 0;
        this.controller.presentLoading('Waiting for response, please wait...')
        .then((loading) => {
            let eventTimeout = setTimeout(() => {
                this.controller.presentAlert('Information', 'No response from the project authority device, either the surelog app is not running or the device is not connected to the internet.');
                loading.dismiss();
            }, 10000);
            this.socket.requestLocation(authority.user_id.id, this.project_id);
            this.socket.receiveEvent('send-location')
            .subscribe((data: any) => {
                event_count++;
                clearTimeout(eventTimeout);
                if (event_count == 1) {
                    let ping_data = {
                        project_id: this.project_id,
                        authority_id: authority.user_id.id,
                        location: `${data.latitude},${data.longitude}`
                    }
                    this.api.post('projects/location/store', ping_data)
                    .subscribe(
                        (res: any) => {
                            authority.location = res.data.location;
                            authority.created_at = res.data.created_at;
                            loading.dismiss();
                        },
                        (err: any) => {
                            loading.dismiss();
                            this.controller.showErrorAlert(err);
                        }
                    );
                }
            });
        });
        
    }
}
