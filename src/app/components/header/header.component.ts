import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   sessionEmail:string;
   sessionPassword:string;
  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  public getEmailAndPassword(){
    this.sessionEmail=sessionStorage.getItem('email');
    this.sessionPassword=sessionStorage.getItem('password');
  }
}
