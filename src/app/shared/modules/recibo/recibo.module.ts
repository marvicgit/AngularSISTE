import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReciboComponent } from './recibo.component';



@NgModule({
  declarations: [ReciboComponent],
  exports: [ReciboComponent],
  imports: [
    CommonModule
  ]
})
export class ReciboModule { }
