import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstName='sai'
  lastName='leela'
  text='example on propery binding'
  title = 'Assignement1';
  isDisabled=false
  tit : any = false;
  data='this is from parent'
  obs1$=of(1,2,3,4)

  getClass(){
     // this.tit = "i am poor girl";
     return "hi";
    
    }
    upDate(){

    }
    obs$=new Observable(observer =>{
      console.log("observer start");
      observer.next("1");
      observer.next("2");
      observer.next("3");
      observer.next("4")
    });
    ngOnInIt(){
      this.obs$.subscribe(val =>{
        console.log(val);
      })
    }

    }
  
  
  


