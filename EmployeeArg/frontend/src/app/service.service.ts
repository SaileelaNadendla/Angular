import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeArg } from './EmployeeArg';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url="http://localhost:8080/api/employees"
  

  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<EmployeeArg[]>{
    return this.httpClient.get<EmployeeArg[]>(`${this.url}`);
  }
  createEmployee(employeeArg:EmployeeArg):Observable<object>{
    return this.httpClient.post(`${this.url}`, employeeArg);
  }
  getEmployeeId(id:number):Observable<EmployeeArg>{
    return this.httpClient.get<EmployeeArg>(`${this.url}/${id}`);
  }
  updateEmployee(id:number, employeeArg:EmployeeArg):Observable<object>{
    return this.httpClient.put(`${this.url}/${id}`, employeeArg);

  }
  deleteEmployee(id:number):Observable<object>{
    return this.httpClient.delete(`${this.url}/${id}`);

  }
 
}

