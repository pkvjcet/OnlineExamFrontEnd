import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IParticipant } from '../home/participant.model';


@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {
  examnameSelected="";
  faculty=localStorage.getItem("userFullName");
  examnames1:[{"name":""}]
  examnames:Array<string>=[];  
  i=0; 
  participants:IParticipant[];


  constructor(private api:ApiService) { 
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
  onChange(deviceValue) {
    if((this.examnameSelected=="")||(this.examnameSelected=="Select Test")){
      window.alert("Select Exam...")
    }
    else{
         this.api.viewresult(this.examnameSelected,this.faculty).subscribe((data)=>{
         console.log(JSON.parse(JSON.stringify(data[0].participants)));
         this.participants=JSON.parse(JSON.stringify(data[0].participants));
         //window.alert(this.participants[0].username);

         })
    }
    //console.log(deviceValue);
}

}
