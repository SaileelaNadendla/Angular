import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeArg } from '../EmployeeArg';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  id!:number;
  employeeArg!:EmployeeArg

  constructor(private service:ServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeArg = new EmployeeArg();
    this.service.getEmployeeId(this.id).subscribe(data =>{
      this.employeeArg = data;
    });
  }

}
