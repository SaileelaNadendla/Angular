
import { state } from "@angular/animations";
import { createReducer, Action , on} from "@ngrx/store";


 import { addValue, subValue, mulValue, reset } from "./counter.action";

 export const initialState=0;
 const a=10, b=20;

 const _arithmaticreducer =createReducer(
     initialState, 
      on(addValue, (state)=> a+b),
      on(subValue, (state)=>a-b),
      on(mulValue, (state)=>a*b),
      on(reset, (state)=>0)

 );
 export function Arithmaticreducer(state: number | undefined, action: Action){
     return _arithmaticreducer(state, action);
 }

 


 