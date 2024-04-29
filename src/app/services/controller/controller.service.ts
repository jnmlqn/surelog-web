import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ControllerService {

    constructor(
        private router: Router,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
    ) {

    }

    async presentLoading(message) {
        const loading = await this.loadingCtrl.create({
            message: message
        });
        loading.present();
        return loading;
    }

    async presentAlert(title, subtitle, buttons?, inputs?) {
        const alert = await this.alertCtrl.create({
            cssClass: 'my-custom-class',
            header: title,
            message: subtitle,
            backdropDismiss: false,
            buttons: buttons ? buttons : ['OK'],
            inputs: inputs
        });

        await alert.present();
    }

    showErrorAlert(err) {
        // console.log(err.status);
        if(err.status == 422) {
            let errors = `<ul>`;
            Object.keys(err.error).forEach(key => {
                errors += `<li>${err.error[key]}</li>`;
            });
            errors += `</ul>`;
            this.presentAlert('Warning', errors);
        } else if(err.status == 500) {
            this.presentAlert('Error', err.error.message);
        } else if(err.status == 404) {
            this.presentAlert('Not Found', err.error.message);
        } else if (err.status == 405) {
            this.presentAlert('Error', 'Method not allowed');
        } else if (err.status == 400) {
            this.presentAlert(err.error.data.title, err.error.data.message);
        } else if (err.status == 401) {
            // this.presentAlert('Please login again', 'Unauthorized');
            localStorage.clear();
            this.router.navigateByUrl('/login');
        }
    }

    findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; ++i) {
            if (array[i][key] == value) {
                return i;
            }
        }
        return -1;
    }

}
