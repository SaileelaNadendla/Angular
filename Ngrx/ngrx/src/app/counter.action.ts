import { createAction } from "@ngrx/store";


export const addValue= createAction("[AppComponent] Add");
export const subValue= createAction("[AppComponent]  Sub");
export const mulValue= createAction("[AppComponent] Mul");
export const reset=createAction("[AppComponent] reset")
