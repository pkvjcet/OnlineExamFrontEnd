import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  //private loggedInStats=JSON.parse(localStorage.getItem("loggedIn")||'false');
 
  // private loggedUserType=JSON.parse(localStorage.getItem("userType"));
  // private loggedUserFullName=JSON.parse(localStorage.getItem("userFullName"));

  constructor() { }
  setLoggedIn(value:boolean,userFullName:string,userType:string){
    localStorage.setItem("loggedIn",value.toString());
    localStorage.setItem("userFullName",userFullName.toString());
    localStorage.setItem("userType",userType.toString());
  }
  isLoggedIn(){
    return JSON.parse(localStorage.getItem("loggedIn"))
  }
  get isLoggedUserFullName(){
    return JSON.parse(localStorage.getItem("userFullName"))
  }
  get isLoggedUserType(){
    return JSON.parse(localStorage.getItem("userType"))
  }
}
