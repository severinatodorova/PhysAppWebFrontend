import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcerciseService {

  uri = 'http://localhost:4000';

  constructor( private http: HttpClient ) { }

  getExcercises(){
    return this.http.get(`${this.uri}/excercises`);
  }

  getExcerciseById(id){
    return this.http.get(`${this.uri}/excercises/${id}`);
  }

  
  addExcercise(name,imgURI,description,liked?){
    const excercise ={
      name: name,
      imgURI: imgURI,
      description: description,
      liked:false
    };
    return this.http.post (`${this.uri}/excercises/add`, excercise);
  }
  

  updateExcercise(id,imgURI,description,liked?){
    const excercise ={
      name: name,
      imgURI: imgURI,
      description: description,
      liked:liked
    };
    return this.http.post (`${this.uri}/excercises/update/${id}`, excercise);
  }
  

  deleteExcercise (id){
    return this.http.get(`${this.uri}/excercises/delete/${id}`);
}
}
