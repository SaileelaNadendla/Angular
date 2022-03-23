import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from '../alert-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data:any[]=[];
  register!: FormGroup;
  submitted=false;
  route: any;
  


  constructor(private service:AlertServiceService, private fb:FormBuilder, private roter:Router) { }

  ngOnInit(): void {
    this.data=this.service.data;
    this.register=this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',[Validators.required , Validators.email]],
      MobileNo:['',[Validators.required, Validators.minLength(10)]],
      DOB:['',Validators.required]

    });
   
  }
 get f(){
   return this.register.controls;

 }
 onSubmit(){
   this.submitted=true;
   if(this.register.valid){
     alert('form submitted succesfully!')
     
   return ;
   }
  this.route.navigate([''])

}

    
  }
  


