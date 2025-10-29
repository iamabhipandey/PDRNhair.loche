import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WolgooComponent } from './wolgoo.component';

const routes: Routes = [
   {path:'', component:WolgooComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WolgooRoutingModule { }
