import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { FacultysidebarComponent } from './facultysidebar/facultysidebar.component';
import { NewexamComponent } from './newexam/newexam.component';
import { EnrollstudentsComponent } from './enrollstudents/enrollstudents.component';
import { UploadqnsComponent } from './uploadqns/uploadqns.component';
import { ViewresultComponent } from './viewresult/viewresult.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    FacultydashboardComponent,
    LogoutComponent,
    StudentdashboardComponent,
    FacultysidebarComponent,
    NewexamComponent,
    EnrollstudentsComponent,
    UploadqnsComponent,
    ViewresultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
