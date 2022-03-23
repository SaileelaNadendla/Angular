import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.scss']
})
export class Customer2Component implements OnInit {
  data: any;
  

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  getCustomer(){
    this.service.testObservable$.subscribe((data) =>{
      this.data = data+""+new Date().toTimeString();
    })

  }
}


