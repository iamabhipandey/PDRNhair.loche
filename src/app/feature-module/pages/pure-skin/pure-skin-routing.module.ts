import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PureSkinComponent } from './pure-skin.component';

const routes: Routes = [
   {path:'', component:PureSkinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PureSkinRoutingModule { }
