import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm : FormGroup;
  email:any;
  password: any;
  onsubmit(){
    if(this.email.value=='email'&& this.password.value=="password"){
      this.router.navigate(['/student']);

    }
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
