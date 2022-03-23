import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  Student=[{Name:'sai', Mobile:1234, Place:'Hyd'},
            {Name:'pandu', Mobile:4564, Place:'Gnt'}];
      public name = "structural directives";
      public myChoice ="ten";
      @Input() student:string="the parent send data to child";
      @Output() StudentChange:EventEmitter<any>=new EventEmitter<any>();

      upDate(){
        this.StudentChange.emit(this.student);
      }


  constructor() { }

  ngOnInit(): void {
  }

}
