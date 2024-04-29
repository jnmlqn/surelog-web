import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    user: any;

    constructor(
        private socket: Socket,
    ) {

    }

    initialize() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user !== undefined && this.user !== null && this.user !== '') {
            this.socket.connect();
            this.socket.emit('set-userid', this.user.id);
            this.usersChangeEvent();
        }
    }

    usersChangeEvent() {
        this.socket.fromEvent('users-changed')
        .subscribe((data) => {
            console.log('Connected to socket server!');
        });
    }

    requestLocation(user_id, project_id) {
        let event_data = {
            name: 'request-location',
            receivers: [user_id],
            data: {
                sender: this.user.id,
                project_id: project_id
            }
        }
        this.socket.emit('event-send', event_data);
    }

    receiveEvent(event) {
        return this.socket.fromEvent(event);
    }
}
