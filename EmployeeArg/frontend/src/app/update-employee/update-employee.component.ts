import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeArg } from '../EmployeeArg';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
   id!:number;
   employeeArg:EmployeeArg = new EmployeeArg();

  constructor(private service:ServiceService, private route:ActivatedRoute, private roter:Router)  { }

  ngOnInit(): void {
    this.route.snapshot.params['id'];
    this.service.getEmployeeId(this.id).subscribe(data =>{
      this.employeeArg = data;
    },
     error =>console.log(error));
     
    }
    onSubmit(){
      this.service.updateEmployee(this.id, this.employeeArg).subscribe(data =>{
        this.goToEmployeeList();
      },
      error => console.log(error));
      }
      goToEmployeeList(){
        this.roter.navigate(['/employees'])

      }
    }
   

