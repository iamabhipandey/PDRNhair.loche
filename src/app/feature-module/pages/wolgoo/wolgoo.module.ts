import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WolgooRoutingModule } from './wolgoo-routing.module';
import { WolgooComponent } from './wolgoo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WolgooComponent
  ],
  imports: [
    CommonModule,
    WolgooRoutingModule,
    SharedModule
  ]
})
export class WolgooModule { }
