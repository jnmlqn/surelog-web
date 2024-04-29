import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RoleFormPage } from './role-form.page';

import { RoleFormPageRoutingModule } from './role-form-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoleFormPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    RoleFormPage
  ]
})
export class RoleFormPageModule {}
