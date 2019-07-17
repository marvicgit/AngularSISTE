import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificacionTucComponent } from './modificacion-tuc.component';


const routes: Routes = [
  { path: '', component: ModificacionTucComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificacionTucRoutingModule { }
