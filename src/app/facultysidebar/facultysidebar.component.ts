import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-facultysidebar',
  templateUrl: './facultysidebar.component.html',
  styleUrls: ['./facultysidebar.component.css']
})
export class FacultysidebarComponent implements OnInit {
  username=localStorage.getItem("userFullName")
  constructor() { }

  ngOnInit() {
   
  }

  
}
