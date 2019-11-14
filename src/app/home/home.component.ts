import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userPassword="";
  userName="";
  @Output() public loginEvent=new EventEmitter();
  //netImage:any = "/src/assets/images/intro-img.svg";
  constructor(private api:ApiService,private auth:AuthServiceService,private router:Router,private sharedService:SharedserviceService) { }

  ngOnInit( ) {
    if (localStorage.getItem("loggedIn") === null) {
      //...
    }
    else{

      if(localStorage.getItem("userType")=='faculty'){
        this.router.navigate(['/faculty']);
      }
      else if(localStorage.getItem("userType")=='student'){
        this.router.navigate(['/student']);
      }
      
    }   
  }
  validateUser(){
   
    this.api.authenticateUser(this.userName,this.userPassword).subscribe((data)=>{
        if(JSON.parse(JSON.stringify(data)).length>0){
          window.alert("Login Success....");
          console.log(data[0].userFullName);
          this.auth.setLoggedIn(true,data[0].userFullName,data[0].userType);
          //this.loginEvent.emit('Check Login name');
          //this.sharedService.comp2Val = "passed from home compo";
          this.sharedService.updateNavBarLogIn();
          //this.sharedService.dispalyName='display check';
          if(data[0].userType=='faculty'){
            this.router.navigate(['/faculty']);
          }
          else if(data[0].userType=='student'){
            this.router.navigate(['/student']);
          }

         
        }
        else{
          window.alert("Invalid Credentials");
        }
       
    });
  }


}
