import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstiloRoutingModule } from './estilo-routing.module';
import { EstiloComponent } from './estilo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EstiloComponent
  ],
  imports: [
    CommonModule,
    EstiloRoutingModule,
    SharedModule
  ]
})
export class EstiloModule { }
