import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/page/products/products.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductManageComponent } from './components/manage/product-manage/product-manage.component';
import { DashboardComponent } from './components/manage/dashboard/dashboard.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { SignupComponent } from './components/page/signup/signup.component';
import { AuthListComponent } from './components/manage/auth/auth-list/auth-list.component';
import { AuthFormComponent } from './components/manage/auth/auth-form/auth-form.component';
import { LoginComponent } from './components/page/login/login.component';



const routes: Routes = [
  {path:"",component:WebsiteLayoutComponent,children:[
    {path:"",component:ProductsComponent},
    {path:"product",component:ProductsComponent},
    {path:"product/:id",component:ProductDetailComponent},
    
  ]},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  

  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:"dashboard",component:DashboardComponent},
    {path:"product",component:ProductManageComponent},
    {path:"product/add",component:ProductFormComponent},
    {path:"product/:id/edit",component:ProductFormComponent},
    {path:"auth",component:AuthListComponent},
    {path:"auth/add",component:AuthFormComponent},
    {path:"auth/:id/edit",component:AuthFormComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
