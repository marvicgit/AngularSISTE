import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReciboComponent } from '../shared/modules/recibo/recibo.component';
import { VehiculoComponent } from '../shared/modules/vehiculo/vehiculo.component';
import { RequisitoComponent } from '../shared/modules/requisito/requisito.component';
import { FinComponent } from '../shared/modules/fin/fin.component';
import { RenovacionTUCModule } from './renovacion-tuc/renovacion-tuc.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule,
    RenovacionTUCModule
  ],
  exports: [RenovacionTUCModule]
})
export class LayoutModule { }
