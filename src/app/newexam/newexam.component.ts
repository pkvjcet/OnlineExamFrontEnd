import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent implements OnInit {
  name="";
  time="";
  faculty=localStorage.getItem("userFullName");
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
  }
  createExam(){
    console.log(this.name,parseInt(this.time),this.faculty)
    this.api.createNewExam(this.name,parseInt(this.time),this.faculty).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data)));
    });
    window.alert("Exam Created...Enroll Students to the Exam...");
    this.router.navigate(['']);
  }

}
