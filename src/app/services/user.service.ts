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
 //displaying all records (GET)

 public  findAllUsers(){
   return this.http.get(`${this.baseURL}`);
 }

//delete the record based on the id: (DELETE)
public deleteUser(id:any){
  return this.http.delete(`${this.baseURL}/${id}`);
}

//get the record based on id: (GET)
public findUserById(id:any){
  return this.http.get(`${this.baseURL}/${id}`);
}

//update user based on id and send object (PUT)
public  updateUser(id:any,user:any){
  return this.http.put(`${this.baseURL}/${id}`,user);
}

}
