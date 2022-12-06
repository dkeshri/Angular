import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule
]

@NgModule({
  imports: [MATERIAL_MODULES],
  exports:[MATERIAL_MODULES]
})
export class MaterialModule { }
