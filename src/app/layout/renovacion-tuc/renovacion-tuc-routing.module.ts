import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenovacionTUCComponent } from './renovacion-tuc.component';


const routes: Routes = [
  { path: '', component: RenovacionTUCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenovacionTUCRoutingModule { }
