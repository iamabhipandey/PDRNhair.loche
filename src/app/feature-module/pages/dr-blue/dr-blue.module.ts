import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrBlueRoutingModule } from './dr-blue-routing.module';
import { DrBlueComponent } from './dr-blue.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DrBlueComponent
  ],
  imports: [
    CommonModule,
    DrBlueRoutingModule,
    SharedModule
  ]
})
export class DrBlueModule { }
