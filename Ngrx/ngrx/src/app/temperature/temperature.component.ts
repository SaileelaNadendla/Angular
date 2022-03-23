import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  value:any;
  result: any;
  value2:any;
  res2:any;
  num1:any;
   
  convert(num: any){
    
    this.value = (num*9/5)+32;
    this.result=this.value;
    this.oncelsus = this.res2;

    this.value2 =this.num1-32*(9/5);
    this.res2 = this.value2;  
    this.onfarenhit =this.result;
    

  }
    onfarenhit(num:any){
     
    
  }
  oncelsus(num2:any){
    }
  

  ngOnInit(): void {
  }
    

  }


