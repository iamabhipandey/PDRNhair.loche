import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlossysRoutingModule } from './glossys-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlossysComponent } from './glossys.component';


@NgModule({
  declarations: [
    GlossysComponent
  ],
  imports: [
    CommonModule,
    GlossysRoutingModule,
    SharedModule

  ]
})
export class GlossysModule { }
