import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HrDataPage } from './hr-data.page';

import { HrDataPageRoutingModule } from './hr-data-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HrDataPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    HrDataPage
  ]
})
export class HrDataPageModule {}
