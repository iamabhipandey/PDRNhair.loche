import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabyouRoutingModule } from './fabyou-routing.module';
import { FabyouComponent } from './fabyou.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FabyouComponent
  ],
  imports: [
    CommonModule,
    FabyouRoutingModule,
    SharedModule
  ]
})
export class FabyouModule { }
