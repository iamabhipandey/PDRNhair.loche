import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstiloComponent } from './estilo.component';

const routes: Routes = [
   {path:'', component:EstiloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstiloRoutingModule { }
