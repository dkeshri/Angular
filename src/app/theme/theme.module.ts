import { PrimengModule } from './modules/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './modules/material/material.module';

const COMMON_MODULE = [
  CommonModule,
  FormsModule,
  RouterModule,
  FontAwesomeModule
]


@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    PageNotFoundComponent
  ],
  imports: [
    ...COMMON_MODULE,
    PrimengModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    BaseLayoutComponent,
    PageNotFoundComponent,
    ...COMMON_MODULE,
    MaterialModule,
    PrimengModule,
    
    
  ]
})
export class ThemeModule { }
