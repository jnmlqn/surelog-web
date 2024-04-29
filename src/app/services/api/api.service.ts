import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url: string = 'https://api.surelogatt.632apps.com/api/surelog/';
    // url: string = 'http://localhost:8093/api/surelog/';

    constructor(
        private http: HttpClient
    ) {

    }

    get(endpoint) {
        let header = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('surelog-token')}`)
            .set('Access-Control-Allow-Origin', '*')
        }

        return this.http.get(this.url + endpoint, header);
    }

    post(endpoint, data?) {
        let header = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('surelog-token')}`)
            .set('Access-Control-Allow-Origin', '*')
        }
        return this.http.post(this.url + endpoint, data, header);
    }

    login(data) {
        let header = {
            headers: new HttpHeaders().set('Authorization', `nEjofUcAwCisLyVjLkgQKSyiOxAyuhJi`)
            .set('Access-Control-Allow-Origin', '*')
        }
        return this.http.post(this.url + 'login', data, header);
    }
}
