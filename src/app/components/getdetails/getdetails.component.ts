import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.scss']
})
export class GetdetailsComponent implements OnInit {
  myId:any;
  userArr:any[]=[];
  hideTable:boolean=false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onGetDetails() {
    this.userService.findUserById(this.myId).subscribe(
      (response:any) => {
        this.userArr.push(response);
        this.hideTable=true;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
