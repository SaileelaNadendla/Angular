import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public student:any;

  constructor(private stdservice:StudentService) { }

  ngOnInit() {
    this.stdservice.getStudent().subscribe(data => this.student=JSON.stringify(data));
  }
}
  


   
  // this.student=this.stdservice.getStudent();
  // console.log(this.student);


