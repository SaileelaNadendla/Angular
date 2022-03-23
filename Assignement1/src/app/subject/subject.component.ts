import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  subject$= new Subject();
  observable= new Observable(observer =>{
    observer.next("first");
    observer.next("second");
    observer.error("error")
  });

  constructor() { }

  ngOnInit(): void {
    this.subject$.subscribe(val =>{
      console.log(val);

    });
    //this.subject$.next("1");
   // this.subject$.next("2");
    //this.subject$.subscribe(val =>{
      //console.log(val);
    //});
    //this.subject$.next("3")
    //this.subject$.complete();
    this.observable.subscribe(this.subject$);
  }

}
