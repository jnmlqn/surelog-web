import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostsPage } from './posts.page';

import { PostsPageRoutingModule } from './posts-routing.module';

import { SharedComponentsModule } from '../components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    PostsPage
  ]
})
export class PostsPageModule {}
