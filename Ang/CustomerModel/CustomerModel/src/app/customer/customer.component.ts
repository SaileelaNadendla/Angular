import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerServiceService } from './customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  cust! : FormGroup;
  submitted= true;
  customer:Customer = new Customer();

  constructor(private service:CustomerServiceService,
     private router:Router,
     private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.cust = this.formBuilder.group({
      customerId:['',Validators.minLength(6)],
      customerName:['',Validators.required],
      dob:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      pincode:['',Validators.maxLength(6)]

    });
  }
  get f(){ return this.cust.controls}

  saveCustomer(){
    this.service.createCustomer(this.cust.value).subscribe(data=>{
      console.log(data);

    },  
      (error: any) => alert("some thing went worng!"),
     ()=>this.router.navigate(['/'])
      );
  }
  
  onSubmit(){
    //alert((this.submitted && this.f.gender.errors));
    console.log(this.customer);
    this.saveCustomer();
    this.router.navigate(['/'])
  
  }
  

}
