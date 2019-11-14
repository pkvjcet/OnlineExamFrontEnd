import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private sharedService:SharedserviceService) { }

  ngOnInit() {
    window.alert("Logging out.....");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("userType");
    this.sharedService.updateNavBarLogOut();
    this.router.navigate(['']);

  }

}
