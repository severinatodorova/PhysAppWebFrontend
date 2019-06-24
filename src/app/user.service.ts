import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000';

  constructor( private http: HttpClient ) { }

  getUsers(){
    return this.http.get(`${this.uri}/users`);
  }

  getUserById(id){
    return this.http.get(`${this.uri}/users/${id}`);
  }

  addUser(name, cpr, diagnose, condition, email, phone, excercises?,progress?){
    const user ={
      name: name,
      cpr: cpr,
      diagnose: diagnose,
      condition: condition, 
      email: email,
      phone: phone,
      excercises: excercises,
      progress: progress
    };
    return this.http.post (`${this.uri}/users/add`, user);
  }

  updateUser(id, name, cpr, diagnose, condition, email, phone, excercises?, progress?){
    const user ={
      name: name,
      cpr: cpr,
      diagnose: diagnose,
      condition: condition, 
      email: email,
      phone: phone,
      excercises: excercises,
      progress: progress
    };
    return this.http.post (`${this.uri}/users/update/${id}`, user);
  }

  deleteUser (id){
    return this.http.get(`${this.uri}/users/delete/${id}`);
}

//MAYBE
  addExcerciseToUser(id,name,description,imgURI){
    const excercise ={
      id: id,
      name: name,
      description: description,
      imgURI: imgURI
    }
    return this.http.post (`${this.uri}/users/update/${id}`, excercise);
  }
}
