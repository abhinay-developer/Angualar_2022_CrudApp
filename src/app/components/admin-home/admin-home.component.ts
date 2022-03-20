import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
usersArr:any;
  constructor(
    private userService:UserService,
    private router:Router
    ) { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("ng Oninit")
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.findAllUsers().subscribe(
      (response:any)=>{
        this.usersArr=response;
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
  onDeleteUser(id:any){
    if(confirm("Do you wanna Delete ?")){
      this.userService.deleteUser(id).subscribe(
        (response:any)=>{
          this.getAllUsers();
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      )
    }//if
    else{
      return false;
    }
    }
    onUpdateUser(id:any){
      this.userService.findUserById(id).subscribe(
        (response:any)=>{
          console.log(response);
         this.router.navigate(['update-user',id])
        },
        (error:any)=>{
          console.log(error);
        }
      )
      console.log(id);
    }
}
