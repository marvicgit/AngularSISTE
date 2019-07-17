import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { AutorizacionComponent } from '../autorizacion/autorizacion.component';


@NgModule({
  declarations: [AutorizacionComponent],
  imports: [
    CommonModule,
    AutorizacionRoutingModule
  ]
})
export class AutorizacionModule { }
