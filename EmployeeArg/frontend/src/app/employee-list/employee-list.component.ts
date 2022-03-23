import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeArg } from '../EmployeeArg'; 
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeArg!: EmployeeArg[];
  id!:number;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
    
  }
  private getEmployees(){
    this.service.getEmployeeList().subscribe(data =>{
      this.employeeArg = data;

    });
      
    }
    employeeDetails(id:number){
      this.router.navigate(['employee-details',id]);
    }
    updateEmployee(id:number){
      this.router.navigate(['update-employee',id]);

    }
    deleteEmployee(id:number){
      this.service.deleteEmployee(id).subscribe((data: any) =>{
        console.log(data);
        this.getEmployees();
      })

    }

    
  }


