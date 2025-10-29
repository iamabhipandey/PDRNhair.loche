import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicellComponent } from './medicell.component';

const routes: Routes = [
   {path:'', component:MedicellComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicellRoutingModule { }
