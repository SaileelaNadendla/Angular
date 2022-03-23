import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../Customer';
import { CustomerServiceService } from '../customer/customer-service.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  customerId!: number;
  customer:Customer = new Customer();


  constructor(private service:CustomerServiceService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
   
    this.customerId=this.router.snapshot.params['customerId'];
    this.service.getCustomerId(this.customerId).subscribe(data=>{
      this.customer = data;
    },
    (error:any) => alert('Not updated something went wrong!'));
    
  }

  onSubmit(){
    this.service.updateCustomer(this.customerId, this.customer).subscribe(data =>{
      console.log(data);
     
      this.route.navigate(['/customers'])
    },
    error => console.log(error));

  }
 
}
