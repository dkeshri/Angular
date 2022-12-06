import { PageNotFoundComponent } from './theme/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'pages', loadChildren:()=>import('./pages/pages.module').then(module=>module.PagesModule),
    canActivate: [AuthGuard]
  },
  {
    path:'auth', loadChildren:()=>import('./auth/auth.module').then(module=>module.AuthModule)
  },
  {
    path:'demo', loadChildren:()=>import('./test/demo/demo.module').then(module=>module.DemoModule)
  },
  {
    path:'',
    redirectTo:'pages',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
