import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {
  UserName:string="saileela@gmail.com"
  Password:string ="Saileela"
  data=[{FirstName:"venkat" , LastName:"Tiru", Email:"venkat123@gmail.com", MobileNo:786543225, DOB:"09/1/2021"},
  {FirstName:"jhon" , LastName:"smith", Email:"smith123@gmail.com", MobileNo:765443225, DOB:"5/2/2021"}
  ]; 
  
  

  constructor() { }
 
}
