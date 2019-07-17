import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuplicadoTucRoutingModule } from './duplicado-tuc-routing.module';
import { DuplicadoTucComponent } from './duplicado-tuc.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReciboModule } from '../../shared/modules/recibo/recibo.module';
import { VehiculoModule } from 'src/app/shared/modules/vehiculo/vehiculo.module';
import { RequisitoModule } from '../../shared/modules/requisito/requisito.module';
import { FinModule } from '../../shared/modules/fin/fin.module';


@NgModule({
  declarations: [DuplicadoTucComponent],
  imports: [
    CommonModule,
    DuplicadoTucRoutingModule,
    NgbModule,
    PageHeaderModule,
    ReciboModule,
    VehiculoModule,
    RequisitoModule,
    FinModule
  ]
})
export class DuplicadoTucModule { }
