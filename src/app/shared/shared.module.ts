import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    ThemeModule
  ],
  exports:[
    ThemeModule
  ]
})
export class SharedModule { }
