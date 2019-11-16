import { Component, OnInit } from '@angular/core';
import { IUser } from '../home/user.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadqns',
  templateUrl: './uploadqns.component.html',
  styleUrls: ['./uploadqns.component.css']
})
export class UploadqnsComponent implements OnInit {
  examnameSelected="";
  faculty=localStorage.getItem("userFullName");
  examnames1:[{"name":""}]
  examnames:Array<string>=[];  
  i=0;  
  students:IUser[];
  dummystudents:IUser[];

  qnname=""; 
  opt1="";
  opt2="";
  opt3="";
  opt4="";
  ans="";

  constructor(private api:ApiService,private router:Router) {
    this.api.getExamNames(this.faculty).subscribe((data)=>{
      this.examnames1=JSON.parse(JSON.stringify(data));
      
      for (this.i = 0; this.i < this.examnames1.length; this.i++)
      {
       //console.log(this.examnames1[this.i].name);
       this.examnames.push(this.examnames1[this.i].name);
      }
      console.log(this.examnames);
   });
   }

  ngOnInit() {
  }

  uploadQns(){
    if((this.examnameSelected=="")||(this.examnameSelected=="Select Test")){
      window.alert("Please select Exam..")
    }
    else{
      
      this.api.uploadQns(this.examnameSelected,this.faculty,this.qnname,this.opt1,this.opt2,this.opt3,this.opt4,this.ans).subscribe(()=>{
            
       
      });

      window.alert("Added successfully..");
      this.qnname=""; 
      this.opt1="";
      this.opt2="";
      this.opt3="";
      this.opt4="";
      this.ans="";
     // this.router.navigate(['uploadqns']);
    }
  }

}
