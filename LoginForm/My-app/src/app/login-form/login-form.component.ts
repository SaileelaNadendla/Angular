
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AlertServiceService } from '../alert-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  login!: FormGroup;
  submitted=false;


  constructor(
    private formBuilder:FormBuilder,
    private service:AlertServiceService,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      UserName:['',Validators.required],
      Password:['',[Validators.required,Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]]
      
    });
  }
  get f(){return this.login.controls}
  
  onSubmit(){
    this.submitted = true;
    if((this.f.UserName.value==this.service.UserName)&&(this.f.Password.value==this.service.Password)){
    alert('succesfully login')
    this.router.navigate(['/'])
    }
    else{
      alert("invalid credentials")
    }
    }
    
    

  }


