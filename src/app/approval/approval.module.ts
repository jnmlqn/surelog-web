import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ApprovalPage } from './approval.page';

import { ApprovalPageRoutingModule } from './approval-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovalPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    ApprovalPage
  ]
})
export class ApprovalPageModule {}
