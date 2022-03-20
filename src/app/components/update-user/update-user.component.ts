import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
selectedId:any;
  updateForm:FormGroup;
  constructor(private fb:FormBuilder,
             private userService:UserService,
             private  router:Router,
             private activateRoute:ActivatedRoute
             ) { }

  ngOnInit(): void {
    this.createUpdateForm();

    //for getting id
    this.selectedId=this.activateRoute.snapshot.params.id;
    // console.log(this.selectedId);
    this.getUserById();
  }


  createUpdateForm(){
       this.updateForm=this.fb.group({
         'firstName':['',[Validators.required]],
         'lastName':['',[Validators.required]],
         'email':['',[Validators.required]],
         'password':['',[Validators.required]],
         'mobileNumber':['',[Validators.required]]
       })
    }

    submitUpdateForm(){
      console.log(this.updateForm.value);
      this.userService.updateUser(this.selectedId,this.updateForm.value).subscribe(
        (respose:any)=>{
          console.log(respose);
          alert("Updated Succesfully");
          this.router.navigate(['admin-home']);
        },
        (error:any)=>{
          console.log(error);
        }
      )
     
    }


 getUserById(){
   this.userService.findUserById(this.selectedId).subscribe(
     (response:any)=>{
       console.log(response);
      //  console.log(response.firstName);
      this.updateForm.controls['firstName'].setValue(response.firstName);
      this.updateForm.controls['lastName'].setValue(response.lastName);
      this.updateForm.controls['email'].setValue(response.email);
      this.updateForm.controls['password'].setValue(response.password);
      this.updateForm.controls['mobileNumber'].setValue(response.mobileNumber);    
    },
     (error:any)=>{
       console.log(error);
     }
   )
 }

}
