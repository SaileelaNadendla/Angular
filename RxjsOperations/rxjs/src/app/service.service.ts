import { Injectable, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  testObservable$: Observable<any> 
  testobserver: any; 
  
  

  constructor() { 
  this.testObservable$ = new Observable((observer) =>{
    this.testobserver= observer;
  })
  }
  test(...elements: any[]){
    return new Promise((resolve, rejects) =>{
        if(elements.length>=3){
          rejects("only 3 elements are excepted")
        }
        else{
          resolve("sum has been calculate"+elements)
        }
    })

  }
}
