import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
