import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeArg } from '../EmployeeArg';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
   employeeArg:EmployeeArg = new EmployeeArg();


  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.service.createEmployee(this.employeeArg).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
   error => console.log(error));
    
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employeeArg);
    this.saveEmployee();
  }

}
