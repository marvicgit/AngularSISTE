import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RenovacionTUCRoutingModule } from './renovacion-tuc-routing.module';
import { RenovacionTUCComponent } from './renovacion-tuc.component';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { ReciboModule } from '../../shared/modules/recibo/recibo.module';
import { VehiculoModule } from '../../shared/modules/vehiculo/vehiculo.module';
import { RequisitoModule } from '../../shared/modules/requisito/requisito.module';
import { FinModule } from '../../shared/modules/fin/fin.module';



@NgModule({
  declarations: [ RenovacionTUCComponent ],
  imports: [
    CommonModule,
    RenovacionTUCRoutingModule,
    NgbModule,
    PageHeaderModule,
    ReciboModule,
    VehiculoModule,
    RequisitoModule,
    FinModule
  ]
})
export class RenovacionTUCModule { }
