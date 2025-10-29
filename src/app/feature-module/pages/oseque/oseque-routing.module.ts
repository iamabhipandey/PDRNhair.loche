import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsequeComponent } from './oseque.component';

const routes: Routes = [
   {path:'', component: OsequeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OsequeRoutingModule { }
