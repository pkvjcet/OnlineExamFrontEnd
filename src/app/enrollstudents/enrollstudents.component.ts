import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IUser } from '../home/user.model';
import { IParticipant } from '../home/participant.model';


@Component({
  selector: 'app-enrollstudents',
  templateUrl: './enrollstudents.component.html',
  styleUrls: ['./enrollstudents.component.css']
})
export class EnrollstudentsComponent implements OnInit {
  examnameSelected="";
  faculty=localStorage.getItem("userFullName");
  examnames1:[{"name":""}]
  examnames:Array<string>=[];  
  i=0;  
  students:IUser[];
  dummystudents:IUser[];
  index=0;
  flag=false;

  enrolledparticipants:IParticipant[];

  constructor(private api:ApiService) {
    console.log("In constructor");

  //  this.api.getExamNames(this.faculty).subscribe((data)=>{
  //     this.examnames1=JSON.parse(JSON.stringify(data));
      
  //     for (this.i = 0; this.i < this.examnames1.length; this.i++)
  //     {
  //      //console.log(this.examnames1[this.i].name);
  //      this.examnames.push(this.examnames1[this.i].name);
  //     }
  //     console.log(this.examnames);
  //  });
  }

  ngOnInit() {

    this.api.getExamNames(this.faculty).subscribe((data)=>{
      this.examnames1=JSON.parse(JSON.stringify(data));
      
      for (this.i = 0; this.i < this.examnames1.length; this.i++)
      {
       //console.log(this.examnames1[this.i].name);
       this.examnames.push(this.examnames1[this.i].name);
      }
      console.log(this.examnames);
   });

    this.api.getStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
      //console.log(this.students.userType)
      //this.dummystudents=JSON.parse(JSON.stringify(data));
    });  

  }
  onChange(deviceValue) {
    this.enrolledparticipants=[];
    this.students=[];
    if((this.examnameSelected=="")||(this.examnameSelected=="Select Test")){
      window.alert("Select Exam...");
      this.flag=false;
    }
    else{

      this.api.getStudents().subscribe((data)=>{
        this.students=JSON.parse(JSON.stringify(data));
        //console.log(this.students.userType)
        //this.dummystudents=JSON.parse(JSON.stringify(data));
      }); 

      this.api.viewresult(this.examnameSelected,this.faculty).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data[0].participants)));
       this.enrolledparticipants=JSON.parse(JSON.stringify(data[0].participants));

       var i=0,j=0,flag=0;
     
    
        
       //window.alert("Loading......." )
        for(i=0;i<this.enrolledparticipants.length;i++){
         //  if(alreadyenrolled==true){
         //    break;
         //  }
           for(j=0;j<this.students.length;j++){
             if((this.enrolledparticipants[i].username==this.students[j].userName)&&(this.enrolledparticipants[i].studentname==this.students[j].userFullName)){
                 // //alreadyenrolled=true;
                 // window.alert("already Enrolled..");
                 // break;


                 this.index = this.students.findIndex(x => x.userName ===this.students[j].userName);
                 this.students.splice(this.index,1);

             }
           }
          
        }

       this.flag=true;
    //window.alert(this.participants[0].username);
    });
   

    //while(this.flag==false);
   




    }
    //console.log(deviceValue);
}
  enrollstudent(id,fullname){
    var alreadyenrolled=false;
    console.log(id+this.examnameSelected);
    //this.students.remove(id);
    //this.students.filter(this.students._id==id)
  
    //this.index=this.students.findIndex(id)
    if((this.examnameSelected=="")||(this.examnameSelected=="Select Test")){
      window.alert("Please select Exam..")
    }
    else{

        
         if(alreadyenrolled==false){
          this.api.enrollStudents(this.examnameSelected,this.faculty,id,fullname).subscribe(()=>{
          });

          this.index = this.students.findIndex(x => x.userName ===id);
          this.students.splice(this.index,1);

         }
          
      
      
    }
    
  }

}
