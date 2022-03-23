import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
 public principal:any;
 public rate :any;
 public months:any;
 public total:any;
public SI :any;

  constructor() { }

  ngOnInit(): void {
  }
  calculate(){
    this.SI=(this.principal*this.rate*(this.months/12))/100;
    this.total=this.SI+this.principal;

  }

}
