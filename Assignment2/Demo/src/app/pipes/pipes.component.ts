import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
 

  public array?:string[];
  constructor(public service:ServiceService) { }

  ngOnInit() {
    this.array=this.service.getarray();

  }

}
