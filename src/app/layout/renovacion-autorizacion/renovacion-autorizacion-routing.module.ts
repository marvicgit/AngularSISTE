import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenovacionAutorizacionComponent } from './renovacion-autorizacion.component';


const routes: Routes = [
  { path: '', component: RenovacionAutorizacionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenovacionAutorizacionRoutingModule { }
