import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OsequeRoutingModule } from './oseque-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OsequeComponent } from './oseque.component';


@NgModule({
  declarations: [
    OsequeComponent
  ],
  imports: [
    CommonModule,
    OsequeRoutingModule,
    SharedModule
  ]
})
export class OsequeModule { }
