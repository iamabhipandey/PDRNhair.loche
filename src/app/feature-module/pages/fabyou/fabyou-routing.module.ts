import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabyouComponent } from './fabyou.component';

const routes: Routes = [
   {path:'', component:FabyouComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabyouRoutingModule { }
