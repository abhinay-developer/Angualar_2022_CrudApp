import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm:FormGroup;
  constructor(private fb:FormBuilder,
             private userService:UserService,
             private  router:Router
             ) { }

  ngOnInit(): void {
    this.createSignupForm();
  }


    createSignupForm(){
       this.signupForm=this.fb.group({
         'firstName':['',[Validators.required]],
         'lastName':['',[Validators.required]],
         'email':['',[Validators.required]],
         'password':['',[Validators.required]],
         'mobileNumber':['',[Validators.required]]
       })
    }

    submitSignupForm(){
      this.userService.createUser(this.signupForm.value).subscribe(
        (response:any)=>{
          alert("Account Created Successfully !!!!!!!!")
          console.log(response);
          this.router.navigate(['login']);
        },
        (error:any)=>{
          console.log(error);
        }
      )
      // console.log(this.signupForm.value);
    }
}
