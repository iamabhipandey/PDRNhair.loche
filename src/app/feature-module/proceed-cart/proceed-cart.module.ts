import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProceedCartRoutingModule } from './proceed-cart-routing.module';
import { ProceedCartComponent } from './proceed-cart.component';
import { GuestPageComponent } from './guest-page/guest-page.component';


@NgModule({
  declarations: [
    ProceedCartComponent,
    GuestPageComponent
  ],
  imports: [
    CommonModule,
    ProceedCartRoutingModule
  ]
})
export class ProceedCartModule { }
