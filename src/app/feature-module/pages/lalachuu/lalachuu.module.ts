import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LalachuuRoutingModule } from './lalachuu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LalachuuComponent } from './lalachuu.component';


@NgModule({
  declarations: [
    LalachuuComponent
  ],
  imports: [
    CommonModule,
    LalachuuRoutingModule,
    SharedModule
  ]
})
export class LalachuuModule { }
