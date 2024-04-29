import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SearchPage } from './modals/search/search.page';

const config: SocketIoConfig = { 
    // url: 'http://localhost:3001', 
    url: 'https://surelog.ws.632apps.com',
    options: {}
};

@NgModule({
    declarations: [
        AppComponent,
        SearchPage
    ],
    entryComponents: [
    
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
        }),
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the app is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
        SocketIoModule.forRoot(config)
    ],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy 
        }
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
