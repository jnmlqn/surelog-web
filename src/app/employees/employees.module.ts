import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EmployeesPage } from './employees.page';

import { EmployeesPageRoutingModule } from './employees-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    EmployeesPage
  ]
})
export class EmployeesPageModule {}
