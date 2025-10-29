import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LalachuuComponent } from './lalachuu.component';

const routes: Routes = [
   {path:'', component:LalachuuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LalachuuRoutingModule { }
