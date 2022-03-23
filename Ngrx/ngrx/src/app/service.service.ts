import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Employees=[{id:1, Empname:"sahithi"},
             {id:2, Empname:"sai"}
]
pushEmployees(getemp:any){
  this.Employees.push(getemp)
}
student!:Observable<any>

  constructor() { }
}
