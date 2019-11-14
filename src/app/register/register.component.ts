import { Component, OnInit } from '@angular/core';
import { IUser } from '../home/user.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
//import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser=new IUser(null,null,null,null);
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }
  addUser(){
    console.log(this.newUser.userType);
    this.api.addNewUser(this.newUser).subscribe((data)=>{
     //window.alert(JSON.parse(JSON.stringify(data)));
     //window.alert("Successfully Inserted..");
     
    });
    window.alert("Inserted...");
    this.router.navigate(['']);
  }

}
