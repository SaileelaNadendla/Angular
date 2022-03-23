import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-eventemitters',
  templateUrl: './eventemitters.component.html',
  styleUrls: ['./eventemitters.component.scss']
})
export class EventemittersComponent implements OnInit {
  @Input() parent:String="";
  @Output() child= new EventEmitter();
  getValue(value:string){
    this.child.emit(value);
  }
  
  

  constructor(public service:ServiceService) { }

  ngOnInit(): void {
  this.service.Employees;

  }

}
