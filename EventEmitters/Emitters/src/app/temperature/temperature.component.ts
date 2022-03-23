import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  isCentigrade =false;
  isFahrenheit = false;
  num:any;
  constructor() { }

  ngOnInit(): void {
  }
   getConvertedValue(num:any){
    if(this.isFahrenheit==true){
      this.num=(num*(9/5))+32;
      this.num = this.num+"Fahreheit"
    
     }
     else if(this.isCentigrade==true){
      this.num=(num-32)*5/9;
      this.num=this.num+"C"
    }
   }
}
