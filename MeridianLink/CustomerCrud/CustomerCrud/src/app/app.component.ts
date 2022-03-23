import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Customer';
import { CustomerserviceService } from 'src/customerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CustomerCrud';
  responce = 'any';
  data = "any";

constructor(private service:CustomerserviceService){}

customer:Customer[]=[];

  ngOnInit() {
    this.getCustomers();
    this.createCutomers();
    this.updateCustomers();
    this.deleteCustomers();
 
  
  }
  getCustomers() {
    this.service.getCustomers().subscribe((responce)=>{
      this.customer =responce;

    },
    (error) =>{
      console.log("error:"+error);
      
    });
  
  }
  createCutomers() {
    this.service.createCustomers().subscribe(()=>{
      this.customer;
    },
      (error) =>{
        console.log("error"+error);
  
      })        

  }

  updateCustomers() {
    this.service.updateCustomer().subscribe((res=>{
      this.customer;
    }))
      
  

  }
 
 
  deleteCustomers() {
    this.service.deleteCustomer(3).subscribe((res)=>{
      this.customer;
    },
  
    (error):any=>{
      console.log("error"+error);
    })
  }
}

