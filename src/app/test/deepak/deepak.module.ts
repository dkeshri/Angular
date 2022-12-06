import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeepakComponent } from './deepak/deepak.component';



@NgModule({
  declarations: [
    DeepakComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DeepakComponent
  ]
})
export class DeepakModule { }
