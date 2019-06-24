import {Excercise} from './excercise.module';

export interface User{
  user: Excercise[];
    id: String;
    name: String;
    cpr: String;
    diagnose: String;
    condition: String;
    email : String;
    phone: String;
    excercises: [Excercise|String];
    dizzyLog: [{
      rating : Number,
      date : { type : Date}
       }];
}