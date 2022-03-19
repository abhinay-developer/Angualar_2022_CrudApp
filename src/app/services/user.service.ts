import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
 public baseURL=" http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  //creating  (POST)   user is nothing but object
  public createUser(user:any){
   return this.http.post(`${this.baseURL}`,user)
  }



}
