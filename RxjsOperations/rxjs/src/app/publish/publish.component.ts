import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  source: any;
  source1: any;
  next:any=document.getElementById("next")
  http: any;
  name = new FormControl('');
  Employees!: {};
  @Input()
  data: string[] = [];

  constructor(private service: ServiceService) { }
  publishData(data: any){
    this.service.testobserver.next(Math.random());
  }
  

  ngOnInit(){
    this.service.test(1,2,3,4).then((res) =>{
      console.log(res);
      
    })
    .catch((err) =>{
      console.log(err);
    });


    //rxjs operators
    
    // const source=of({name:'sai'},[1,2,3],
    //               function Operations(){
    //                 return "hello";
    //               });
    // const subscribe=source.subscribe(val=>console.log(val));
      
    
     const ob$:Observable<number>= of(1,2,3,4,5,6).pipe(filter(v=> {return v>2}),map(v=>v*10));
     ob$.subscribe(next=>console.log('next:',next),
     err=> console.log('error',err),
     ()=>console.log('completed'),
     ); 
    
  }
  updateName(){
    this.name.setValue('sai');
  }
  }
  
      
    

      
    

   



function res(res: any) {
  throw new Error('Function not implemented.');
}

