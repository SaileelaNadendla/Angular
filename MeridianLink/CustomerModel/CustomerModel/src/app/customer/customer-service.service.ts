import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private url = "http://localhost:8080/api/"

  constructor(private httpClient:HttpClient) {  }
  
  getCustomerList():Observable<any>{
    return this.httpClient.get<Customer[]>(`${this.url}`+'getAllCustomers');
  }

  createCustomer(customer:Customer):Observable<object>{
    return this.httpClient.post(`${this.url}`+'createCustomer',customer);

  }

  getCustomerId(customerId:number):Observable<any>{
    return this.httpClient.get(`${this.url}getAllCustomers/${customerId}`);
  }
  updateCustomer(customerId:number, customer:Customer):Observable<object>{
    return this.httpClient.put(`${this.url}updateCustomer/${customerId}`,customer);  

  }
  deleteCustomer(customerId:number ):Observable<any>{
    return this.httpClient.delete(`${this.url}deleteCustomer/${customerId}`,{responseType:'text'});
  }

 
}
