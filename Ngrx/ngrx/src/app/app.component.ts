import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addValue, mulValue, reset, subValue } from './counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  result="this is parent";
  flowers=["rose"];
  getFlower(form:string){
    this.flowers.push(form);
  }
  solution:Observable<number>

  constructor(private store :Store<{count:number}>){
    this.solution = store.select('count');

  }
    addValue(){
      this.store.dispatch(addValue());
    }
    subValue(){
      this.store.dispatch(subValue());
    }
    mulValue(){
      this.store.dispatch(mulValue());
    }
    reset(){
      this.store.dispatch(reset());
    }

}
