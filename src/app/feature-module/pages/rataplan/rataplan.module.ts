import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RataplanRoutingModule } from './rataplan-routing.module';
import { RataplanComponent } from './rataplan.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RataplanComponent
  ],
  imports: [
    CommonModule,
    RataplanRoutingModule,
    SharedModule
  ]
})
export class RataplanModule { }
