import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostFormPage } from './post-form.page';

import { PostFormPageRoutingModule } from './post-form-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostFormPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    PostFormPage
  ]
})
export class PostFormPageModule {}
