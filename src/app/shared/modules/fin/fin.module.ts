import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinComponent } from './fin.component';



@NgModule({
  declarations: [FinComponent],
  exports: [FinComponent],
  imports: [
    CommonModule
  ]
})
export class FinModule { }
