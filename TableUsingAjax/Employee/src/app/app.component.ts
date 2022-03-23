import { Component, OnInit } from '@angular/core';
import { EmployeerService} from './employeer.service'
import { Employees } from './Employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee';
  responce="any";
  data="any";


  constructor(private employeer:EmployeerService){}
  
  //columns=["id", "FirstName", "LastName","Email","Mobile" ] ;
  //index=["id", "FirstName", "LastName","Email","Mobile"];
  Employees:Employees[]=[];


  ngOnInit() {
    this.getEmployee();
    this.createEmployee();
    this.deleteEmployee();
    this.putEmployee();
    

    
  }
  getEmployee(){
    this. employeer.getEmployees().subscribe((responce)=>{
      this.Employees=responce;
    },
    (error) =>{
      console.log("error:"+error);
      
    });
    
  }
  createEmployee(){
    this.employeer.createEmployees().subscribe(()=>{
      this.Employees;
    },
      (error) =>{
        console.log("error"+error);
  
      })        

  }
  deleteEmployee(){
    this.employeer.deleteEmployee(7).subscribe((res)=>{
      this.Employees;
    },
  
    (error):any=>{
      console.log("error"+error);
    })
 
  }
  putEmployee(){
    this.employeer.putEmployee().subscribe((res)=>{
      this.Employees;
    })
  }
}

  

     
     

  


