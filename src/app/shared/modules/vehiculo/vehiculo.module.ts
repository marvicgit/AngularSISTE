import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';



@NgModule({
  declarations: [VehiculoComponent],
  exports: [VehiculoComponent],
  imports: [
    CommonModule
  ]
})
export class VehiculoModule { }
