import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormPage } from './employee-form.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EmployeeFormPageRoutingModule } from './employee-form-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeFormPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    EmployeeFormPage
  ]
})
export class EmployeeFormPageModule {}
