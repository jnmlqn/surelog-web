import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RolesPage } from './roles.page';

import { RolesPageRoutingModule } from './roles-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    RolesPage
  ]
})
export class RolesPageModule {}
