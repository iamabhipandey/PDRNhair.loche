import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToasComponent } from './toas.component';

const routes: Routes = [
   {path:'', component:ToasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToasRoutingModule { }
