import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PureSkinRoutingModule } from './pure-skin-routing.module';
import { PureSkinComponent } from './pure-skin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PureSkinComponent
  ],
  imports: [
    CommonModule,
    PureSkinRoutingModule,
    SharedModule
  ]
})
export class PureSkinModule { }
