import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasRoutingModule } from './toas-routing.module';
import { ToasComponent } from './toas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ToasComponent
  ],
  imports: [
    CommonModule,
    ToasRoutingModule,
    SharedModule
  ]
})
export class ToasModule { }
