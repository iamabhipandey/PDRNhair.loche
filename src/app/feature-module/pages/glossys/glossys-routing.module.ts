import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossysComponent } from './glossys.component';

const routes: Routes = [
   {path:'', component:GlossysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlossysRoutingModule { }
