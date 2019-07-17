import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'prefix' },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'renovacion-tuc', loadChildren: () => import('./renovacion-tuc/renovacion-tuc.module').then(m => m.RenovacionTUCModule) },
        { path: 'duplicado-tuc', loadChildren: () => import('./duplicado-tuc/duplicado-tuc.module').then(m => m.DuplicadoTucModule) },
        { path: 'modificacion-tuc', loadChildren: () => import('./modificacion-tuc/modificacion-tuc.module').then(m => m.ModificacionTucModule) },
        { path: 'renovacion-autorizacion', loadChildren: () => import('./renovacion-autorizacion/renovacion-autorizacion.module').then(m => m.RenovacionAutorizacionModule) },
        { path: 'autorizacion', loadChildren: () => import('./autorizacion/autorizacion.module').then(m => m.AutorizacionModule) }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
