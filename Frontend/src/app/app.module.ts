import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthserviceService } from './authservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Auth2Service } from './auth2.service';
import { EditComponent } from './edit/edit.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { BackendAPIService } from './backend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboarduserComponent,
    DashboardadminComponent,
    AdminloginComponent,
    EditComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthserviceService,Auth2Service,BackendAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
