import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicellRoutingModule } from './medicell-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MedicellComponent } from './medicell.component';


@NgModule({
  declarations: [
    MedicellComponent
  ],
  imports: [
    CommonModule,
    MedicellRoutingModule,
    SharedModule
  ]
})
export class MedicellModule { }
