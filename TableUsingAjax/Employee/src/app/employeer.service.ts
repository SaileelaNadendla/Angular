import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './Employees';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  constructor(private http:HttpClient) { }
  url:string ="http://localhost:3000/Employees";


  getEmployees(){
    return this.http.get<Employees[]>(this.url)
  }
  // createEmployee():Observable<any>{
  //   const headers={'content-type':'application/json'}
  //   const body=JSON.stringify(employee);
  //   return this.http.post(this.url,+"employee",{'headers':headers} )
  // }
  createEmployees(){
    return this.http.post(this.url,{id:10,firstName:"rama", lastName:"ms", Email:"msrama@google.com",Mobile:"73473554"})
      
    
  }
  deleteEmployee(id:number){
    //  if(confirm("Are u sure u want to delete?")){
    //   const data={id:"id"};
    //   const url=`${this.url}`
    //  }
    return this.http.delete("http://localhost:3000/Employees/6",{})
   
  }
  putEmployee(){
    return this.http.put("http://localhost:3000/Employees/8",{id:6,firstName:"lakshmi", lastName:"valluri", Email:"varshni@google.com",Mobile:"67465554"})
  }



}
