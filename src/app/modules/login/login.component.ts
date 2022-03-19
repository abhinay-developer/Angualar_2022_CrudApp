import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
email:string="sai@gmail.com";
password:string="Sai@1234";
  constructor(private fb:FormBuilder,
              private route:Router
    ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.fb.group({
      'email':['',[Validators.required]],
      'password':['',[Validators.required]],
      
    })
 }
 submitLoginForm(){
    if(this.loginForm.value.email==this.email&&this.loginForm.value.password==this.password){
      alert("Login Sucess");
      this.route.navigate(['user-home']);
      sessionStorage.setItem('email',this.email);
      sessionStorage.setItem('password',this.password);
    }
    else{
     alert("Invalid Credentials")
    }
 }
}
