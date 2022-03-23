import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  Observable:any;
  subscriber: any;
  constructor(private service:ServiceService) { } 
  
  ngOnInit(): void {
    
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
  console.log("before subscribe");
  
  }

}

