import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.scss']
})
export class Customer1Component implements OnInit {
  data: any;
  Employees :any;
  

  constructor(private service:ServiceService,  private http:HttpClient)  { }

  ngOnInit(): void {
    
  }
  getCustomer(){
    this.service.testObservable$.subscribe((data) =>{
      this.data = data+""+new Date().toDateString();
    })
  }
  getData(){
    this.http.get("http://localhost:3000/Employees/1").subscribe(Employee =>this.Employees=Employee);
    

  }

}
