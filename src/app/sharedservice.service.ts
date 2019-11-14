import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  username:string;
  dispalySignIn:string='display';
  dispalyRegister:string='display';
  dispalyName='none';
  dispalyLogOut='none';
  loginStatus=false;
  _comp2ValueBS = new BehaviorSubject<string>('');
  constructor() {  
    // if (localStorage.getItem("loggedIn") === null) {
    //   this.dispalyName='none';
    //   this.dispalyLogOut='none';
    //   this.dispalySignIn='display';
    //   this.dispalyRegister='display';
    //   this._comp2ValueBS.next(this.dispalyName);
    // }
    // else{
    //   this.username=localStorage.getItem("userFullName");
    //   this.dispalySignIn='none';
    //   this.dispalyRegister='none';
    //   this.dispalyName='display';
    //   this.dispalyLogOut='dispaly';
    //   this._comp2ValueBS.next(this.dispalyName);
    // }
   }
  updateNavBarLogIn() {
    this.username=localStorage.getItem("userFullName");
    // this.dispalySignIn='none';  
    // this.dispalyRegister='none';
    // this.dispalyName='display';
    // this.dispalyLogOut='dispaly'; 
    // this._comp2ValueBS.next(this.dispalyName);
    this.loginStatus=true; 
  }
  updateNavBarLogOut() {
    //this.username=localStorage.getItem("userFullName");
    // this.dispalyName='none';
    // this.dispalyLogOut='none';
    // this.dispalySignIn='display';
    // this.dispalyRegister='display'; 
    this.loginStatus=false;
  }

  //   this.comp1Val = val;
  //   this._comp1ValueBS.next(this.comp1Val);
  // }
  // updateComp2Val(val) {
  //   this.comp2Val = val;
  //   this._comp2ValueBS.next(this.comp2Val);
  // }
}
