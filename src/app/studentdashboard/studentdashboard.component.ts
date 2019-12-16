import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IQuestion } from '../home/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  examnameSelected="";
  examnames1:[{"name":""}]
  examnames:Array<string>=[];  
  marks:Array<number>=[];
  totalmark=0;
  i=0;
  p: number = 1;
  student=localStorage.getItem("userFullName");
  //studentusername=localStorage.getItem("");
  qns:IQuestion[];
  notstartedexam=true;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit() {
    this.api.getEnrolledExamNames(this.student).subscribe((data)=>{
      console.log(JSON.parse(JSON.stringify(data)));
      this.examnames1=JSON.parse(JSON.stringify(data));
      
      for (this.i = 0; this.i < this.examnames1.length; this.i++)
      {
       //console.log(this.examnames1[this.i].name);
       this.examnames.push(this.examnames1[this.i].name);
      }
      console.log(this.examnames);

  });

  }

  loadQuestions(){
    if((this.examnameSelected=="")||(this.examnameSelected=="Select Test")){
      window.alert("Please select Exam...")
    }
    else{  
      let qnstemp:IQuestion[];
      let i;
      window.alert("Only one attend is allowed..All the best....");  
      this.notstartedexam=false;
      this.api.getQuestions(this.examnameSelected).subscribe((qns)=>{
        console.log(JSON.parse(JSON.stringify(qns[0].qns)));
        qnstemp=JSON.parse(JSON.stringify(qns[0].qns));      

        this.qns=this.shuffle(qnstemp);
      })
  }
  }

  calculateMark(){
    var k=0;
    for(k=0;k<this.marks.length;k++){
      if(this.marks[k]==1){
        this.totalmark=this.totalmark+1;
      }
    }

    window.alert("Your Score is :"+this.totalmark);
    this.api.updateMark(this.examnameSelected,this.student,this.totalmark).subscribe(()=>{

    })
    this.router.navigate(['']);
  }

  onItemChange(selectedoption,ans,qnno){
    console.log(" Value is : "+selectedoption+ans);
    if(selectedoption==ans){
      this.marks[qnno]=1;
    }
    else{
      this.marks[qnno]=0;
    }

 }

  shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
 

}
