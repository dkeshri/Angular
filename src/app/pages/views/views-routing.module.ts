import { PageNotFoundComponent } from './../../theme/components/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'customers',
        loadChildren:()=>import('./customers/customers.module').then(module=>module.CustomersModule)
        
      },
      {
        path:'products',
        loadChildren:()=>import('./products/products.module').then(module=>module.ProductsModule)
      },
      {
        path:'payments',
        loadChildren:()=>import('./payments/payments.module').then(module=>module.PaymentsModule)
      }
      ,
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
