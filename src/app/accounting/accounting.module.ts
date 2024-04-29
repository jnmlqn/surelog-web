import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountingPage } from './accounting.page';

import { AccountingPageRoutingModule } from './accounting-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountingPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    AccountingPage
  ]
})
export class AccountingPageModule {}
