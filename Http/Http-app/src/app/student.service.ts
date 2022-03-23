import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { studentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }
  private url="..assets/data/db.json";

  getStudent(): Observable<any>{
     return of (this.http.get(this.url));
    


  }
}
