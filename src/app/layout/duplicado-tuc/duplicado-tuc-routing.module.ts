import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuplicadoTucComponent } from './duplicado-tuc.component';


const routes: Routes = [
  { path: '', component: DuplicadoTucComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuplicadoTucRoutingModule { }
