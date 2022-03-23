import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerServiceService } from '../customer/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customer!:Customer[];
  customedId!:number;
  customerName:any;


  constructor(private service:CustomerServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.service.getCustomerList().subscribe(data=>{
    this.customer = data;
    console.log(data);
    });

  }

  search(){
    if(this.customerName==''){
      this.ngOnInit()
    }else{
      this.customer = this.customer.filter(res=>{
        return res.customerName.toLocaleLowerCase().match(this.customerName.toLocaleLowerCase());
      })
    }
  }
  
key = 'customerName';
reverse:boolean=false; 
  sort(key: string)
  {
    this.key = key;
   this.reverse =!this.reverse;
 
  }



  

  customerList(customedId:number){
    this.router.navigate(['customer-list',customedId]);

  }

  updateCustomer(customedId:number){
    this.router.navigate(['update-customer',customedId]);

  }

  deleteCustomer(customedId:number){
    this.service.deleteCustomer(customedId).subscribe(data=>{
      console.log(data);
      this.getCustomers();
    })
  }

 
}
