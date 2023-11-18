import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/page/products/products.component';
import { ProductDetailComponent } from './components/page/product-detail/product-detail.component';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { ProductManageComponent } from './components/manage/product-manage/product-manage.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './components/manage/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';
import { SignupComponent } from './components/page/signup/signup.component';
import { AuthListComponent } from './components/manage/auth/auth-list/auth-list.component';
import { AuthFormComponent } from './components/manage/auth/auth-form/auth-form.component';
import { LoginComponent } from './components/page/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomepageComponent,
    ProductManageComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    NavComponent,
    ProductFormComponent,
    SignupComponent,
    AuthListComponent,
    AuthFormComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
