import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8080/mycardsolutions/";
    //resource name
  createCustomer:string = "CreateCustomer";

  getUsers() {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) { 
    return this.http.post(this.baseUrl+this.createCustomer, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl, user);
  }

  deleteUser(id: string) {
    return this.http.delete("http://localhost:8080/mycardsolutions/");
  }

  getTestData(){
    return this.http.get("http://localhost:8080/mycardsolutions/");  
  }
}
