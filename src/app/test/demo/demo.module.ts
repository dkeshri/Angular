import { DeepakModule } from './../deepak/deepak.module';
import { DeepakComponent } from './../deepak/deepak/deepak.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    DeepakModule
  ]
})
export class DemoModule { }
