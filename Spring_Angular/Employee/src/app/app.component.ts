import { Component, OnInit } from '@angular/core';
import { Employee } from './add/Employee';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee';
  employee!:Employee[];
  constructor(private router:Router , private service:ServiceService){}
  getEmployees(){
    this.service.getEmployees().subscribe(data =>{
      this.employee = data;
    });
  }
  addEmployee():void{
    this.router.navigate(['add-app']).then((e)=>{
      if(e){
        console.log("Navigation is Successful");
      }else{
        console.log("Navigation has failed")
      }
    });
  };
  
  ngOnInit(): void {
    this.router.events.subscribe(value =>{
      this.getEmployees();
    });
  }



  }



  
  

