import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule
  ]
})
export class PrimengModule { }
