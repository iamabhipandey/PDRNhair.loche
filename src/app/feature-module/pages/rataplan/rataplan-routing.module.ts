import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RataplanComponent } from './rataplan.component';

const routes: Routes = [
   {path:'', component:RataplanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RataplanRoutingModule { }
