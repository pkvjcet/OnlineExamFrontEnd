import { Component, OnInit,AfterContentChecked } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterContentChecked {
  // username='undefined';
  // dispalyName='none';
  // dispalySignIn='none';
  // dispalyRegister='none';
  // dispalyLogOut='none';  
  username:string;
  // dispalyName:string='none';
  // dispalySignIn:string;
  // dispalyRegister:string;
  // dispalyLogOut:string='none'; 
  // displayNameStyle={dispaly:this.dispalyName};
  // dispalySignInStyle={dispaly:this.dispalySignIn};
  // dispalyRegisterStyle={dispaly:this.dispalyRegister};
  // dispalyLogOutStyle={dispaly:this.dispalyLogOut};
    loginStatus;
  //username="prince" 
  //loginactive='display'; 
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  constructor(private sharedService:SharedserviceService) { }
  ngOnInit() {
    if (localStorage.getItem("loggedIn") === null) {
     this.loginStatus=false;
    }
    else{
      this.loginStatus=true;
    }
  }
  ngAfterContentChecked() {
    //this.checkvaluefromlogin = this.sharedService.comp2Val;
      
    // this.dispalyName=this.sharedService.dispalyName;
    // this.dispalySignIn=this.sharedService.dispalySignIn;
    // this.dispalyRegister=this.sharedService.dispalyRegister;
       //this.dispalyLogOut=this.sharedService.dispalyLogOut; 
     
    // console.log("From Navbar login"+this.dispalyName);
    if (localStorage.getItem("loggedIn") === null) {
      this.loginStatus=false; 
      this.username=localStorage.getItem("userFullName");
    }
    else{
      this.loginStatus=true; 
      this.username=localStorage.getItem("userFullName");
    }

  }

}
