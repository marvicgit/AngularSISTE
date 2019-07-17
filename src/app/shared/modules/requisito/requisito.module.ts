import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisitoComponent } from './requisito.component';



@NgModule({
  declarations: [RequisitoComponent],
  exports: [RequisitoComponent],
  imports: [
    CommonModule
  ]
})
export class RequisitoModule { }
