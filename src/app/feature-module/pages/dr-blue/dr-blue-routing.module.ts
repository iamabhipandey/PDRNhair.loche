import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrBlueComponent } from './dr-blue.component';

const routes: Routes = [
    {path:'', component:DrBlueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrBlueRoutingModule { }
