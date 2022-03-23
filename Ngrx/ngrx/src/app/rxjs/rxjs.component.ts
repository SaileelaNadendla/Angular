
import { Component, OnInit } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  
  

  constructor() { }

  ngOnInit(): void {
    const observable = new Observable(Subscriber =>{
      Subscriber.next(1);
      Subscriber.next(2);
      Subscriber.next(3);
      Subscriber.complete();
    });
    console.log('sub1: just before the subsriber');
    observable.subscribe({
      next(x){
        console.log('sb1: got value' + x);
      },
      error(err){
        console.error('sub1: something went worng occured:' +err)

      },
      complete(){
        console.log('sub1: done');
      }
      
      
    });
     
    observable.subscribe({
      next(x){
        console.log('sub2: got value' +x);
      },
      error(err){
        console.log('sub2: error occured')
      },
      complete(){
        console.log('sub2:done2')
      }
      
    })
    console.log('sub2: just before the subsriber');
  }

}
