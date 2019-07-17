import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificacionTucRoutingModule } from './modificacion-tuc-routing.module';
import { ModificacionTucComponent } from './modificacion-tuc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { ReciboModule } from '../../shared/modules/recibo/recibo.module';
import { VehiculoModule } from 'src/app/shared/modules/vehiculo/vehiculo.module';
import { RequisitoModule } from '../../shared/modules/requisito/requisito.module';
import { FinModule } from '../../shared/modules/fin/fin.module';


@NgModule({
  declarations: [ModificacionTucComponent ],
  imports: [
    CommonModule,
    ModificacionTucRoutingModule,
    NgbModule,
    PageHeaderModule,
    ReciboModule,
    VehiculoModule,
    RequisitoModule,
    FinModule
  ]
})
export class ModificacionTucModule { }
