import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './home/user.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addNewUser(user:IUser){
    return this.http.post("https://exambackend.herokuapp.com/insert",{"user":user})
  }
  authenticateUser(username:string,password:string){
    return this.http.post("https://exambackend.herokuapp.com/verify",{"userName":username,"userPassword":password})
  }
  createNewExam(name:string,time:number,faculty:string){
    return this.http.post("https://exambackend.herokuapp.com/createexam",{"name":name,"time":time,"faculty":faculty})
  }
  getExamNames(faculty:string){
    
    return this.http.post("https://exambackend.herokuapp.com/getexamnames",{"faculty":faculty});
  }
  getStudents(){
    return this.http.get("https://exambackend.herokuapp.com/getstudents");
  }

  enrollStudents(examname,faculty,studentid,studentfullname){
    console.log("enrioll student api"+examname+faculty+studentid+studentfullname);
    return this.http.post("https://exambackend.herokuapp.com/enrollstudents",{"examname":examname,"faculty":faculty,"studentid":studentid,"studentfullname":studentfullname})
  }
  

  viewresult(examname,faculty){
    console.log("View Result api"+examname+faculty);
    return this.http.post("https://exambackend.herokuapp.com/viewresult",{"examname":examname,"faculty":faculty})
  }

  uploadQns(examname,faculty,qnname,opt1,opt2,opt3,opt4,ans){
    console.log("upload qns "+examname+faculty+qnname+ans);
    return this.http.post("https://exambackend.herokuapp.com/uploadqns",{"examname":examname,"faculty":faculty,"qnname":qnname,"opt1":opt1,"opt2":opt2,"opt3":opt3,"opt4":opt4,"ans":ans})
  }
  
  getEnrolledExamNames(student){
    console.log("getEnrolledExamNames"+student);    
    return this.http.post("https://exambackend.herokuapp.com/getEnrolledExams",{"student":student})
  }

  getQuestions(exam){
    console.log("getQuestion"+exam);
    return this.http.post("https://exambackend.herokuapp.com/getqns",{"exam":exam});
  }

  updateMark(exam,student,mark){
    //console.log("getQuestion"+exam);
    return this.http.post("https://exambackend.herokuapp.com/updatemark",{"exam":exam,"student":student,"mark":mark});
  }

}
