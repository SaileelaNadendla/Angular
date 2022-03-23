import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }
  url:string ="http://localhost:3000/Customers";

  getCustomers(){
    return this.http.get<Customer[]>(this.url)
  }
  createCustomers(){
    return this.http.post(this.url,{customerId:4,customerName:"rama",dob:"2-3-1992",gender:"female",address:"srrpet",city:"hyd",country:"India",pincode:"34511"});
      
  }
  deleteCustomer(customerId:number){
    //  if(confirm("Are u sure u want to delete?")){
    //   const data={id:"id"};
    //   const url=`${this.url}`
    //  }
    return this.http.delete("http://localhost:3000/Customers/3",{})
 
}
updateCustomer(){
  return this.http.put("http://localhost:3000/Customers/4",{customerId:4,customerName:"Anusha",dob:"1-12-1994",gender:"female",address:"sr nagar",city:"hyd",country:"India",pincode:"21211"})
}

}
