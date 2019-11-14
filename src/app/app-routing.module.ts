import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { NewexamComponent } from './newexam/newexam.component';
import { EnrollstudentsComponent } from './enrollstudents/enrollstudents.component';
import { UploadqnsComponent } from './uploadqns/uploadqns.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'faculty',component:FacultydashboardComponent,
children: [
  
  {path:'createexam',component:NewexamComponent},
  {path:'enroll',component:EnrollstudentsComponent},
  {path:'uploadqns',component:UploadqnsComponent},
  {path:'viewresult',component:ViewresultComponent}
]},
{path:'logout',component:LogoutComponent},
{path:'student',component:StudentdashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
