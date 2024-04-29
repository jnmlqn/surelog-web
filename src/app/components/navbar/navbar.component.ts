import { Component, OnInit, Input } from '@angular/core';
import { ControllerService } from '../../services/controller/controller.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    @Input() loader: boolean = false;
    @Input() title: any;
    @Input() icon: any;
    user:any = {};

    constructor(
        private controller: ControllerService,
    ) { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.user = this.user ? this.user : {};
    }

    logout() {
        let buttons = [
            {
                text: 'yes',
                handler: () => {
                    localStorage.clear();
                    window.location.href = '/';
                }
            }, 
            {
                text: 'no'
            }
        ];

        this.controller.presentAlert('Warning', 'Are you sure to logout?', buttons);
    }

}
