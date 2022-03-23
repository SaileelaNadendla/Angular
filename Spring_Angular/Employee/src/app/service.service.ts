import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './add/Employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url ='http://localhost:8080/employee'

  constructor(private http:HttpClient) { }
  getEmployees():Observable<any>{
    return this.http.get(`${this.url}`);

  }
  getEmployeeById(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  addEmployee(employee:object):Observable<object>{
    return this.http.post(`${this.url}`,employee);
  }
  updateEmployee(id:number):Observable<object>{
    return this.http.put(`${this.url}`,Employee)
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`,{responseType:'text'} );
  }
}
