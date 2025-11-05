import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocheNewsRoutingModule } from './loche-news-routing.module';
import { LocheNewsComponent } from './loche-news.component';


@NgModule({
  declarations: [LocheNewsComponent],
  imports: [
    CommonModule,
    LocheNewsRoutingModule
  ]
})
export class LocheNewsModule { }