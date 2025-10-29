import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnesComponent } from './ones.component';

const routes: Routes = [
   {path:'', component:OnesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnesRoutingModule { }
