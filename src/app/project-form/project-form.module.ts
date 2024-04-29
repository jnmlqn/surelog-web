import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProjectFormPage } from './project-form.page';

import { ProjectFormPageRoutingModule } from './project-form-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectFormPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    ProjectFormPage
  ]
})
export class ProjectFormPageModule {}
