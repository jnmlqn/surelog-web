import { ApiService } from './services/api/api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from './services/socket/socket.service';

// pages
import { LoginPage } from './login/login.page';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {

	pages: any = [
		{url: '/', title: 'Audit Trail', icon: 'bar-chart-outline'},
		{url: '/posts', title: 'Announcements', icon: 'newspaper-outline'},
		{url: '/employees', title: 'Employees', icon: 'people-outline'},
		{url: '/hr-data', title: 'HR Data', icon: 'briefcase-outline'},
		{url: '/approval', title: 'Approval', icon: 'checkmark-done-outline'},
		{url: '/accounting', title: 'Accounting', icon: 'receipt-outline'},
		{url: '/projects', title: 'Projects', icon: 'trending-up-outline'},
		{url: '/roles', title: 'Roles', icon: 'key-outline'},
	];

	constructor(
        private api: ApiService,
		private router: Router,
        private socket: SocketService,
	) {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user !== null && user !== '' && user !== undefined) {
			this.socket.initialize();
		}
		
		this.api.get('me')
		.subscribe(
			(res: any) => {
				localStorage.setItem('user', JSON.stringify(res.data));
				this.router.navigateByUrl(window.location.pathname);
			},
			(err) => {
				localStorage.clear();
				this.router.navigateByUrl('/login');
			}
		);
	}
}
