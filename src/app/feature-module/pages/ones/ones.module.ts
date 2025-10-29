import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnesRoutingModule } from './ones-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnesComponent } from './ones.component';


@NgModule({
  declarations: [
    OnesComponent
  ],
  imports: [
    CommonModule,
    OnesRoutingModule,
    SharedModule
  ]
})
export class OnesModule { }
