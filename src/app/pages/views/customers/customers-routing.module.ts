import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component: CustomersComponent
      },
      {
        path:'customer',
        component:CustomerDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
