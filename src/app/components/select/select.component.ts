import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material'
import{ UserService } from '../../user.service';
import { User } from '../../user.module';
import {Excercise} from '../../excercise.module';
import { ExcerciseService } from 'src/app/excercise.service';
import * as $ from 'jquery';


import { Chart, ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public show : boolean = false;
  

  @ViewChild("lineCanvas") lineCanvas: { nativeElement: any };
  
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks:{
          min: 1,
          max: 10,
          stepSize: 1
        }
      }],
      yAxes: [{
        ticks:{
          min: 0,
          max: 10,
          stepSize: 1
        }
      }]
    }
  };
  chartLabels: Label[] = ["20 June", "21 June", "22 June", "23 June","24 June"];
  chartType: ChartType = "line";
  chartLegend = true;
  chartData: any[] = [{data : [1,7,4,3,6], label:"Dizzyness"}];

  excercises: Excercise[];
  displayedColumnsExcercise = ['name' , 'imgURI' , 'description', 'actions']; 

  id: String;
  user: any = {};
  updateForm: FormGroup;

  constructor(private userService: UserService,private excerciseService: ExcerciseService, private router:Router, private route:ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
   this.createForm();
  }
  
  createForm() {

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      cpr: '',
      diagnose: '',
      condition: '', 
      email: '',
      phone: '',
      excercises:['']
     });
  }

  ngOnInit() {
    this.fetchUser();
    this.fetchExcercises();
  }

  fetchUser(){
    this.route.params.subscribe( params => {
      this.id = params.id;  
      this.userService.getUserById(this.id).subscribe (res => {
        this.user = res;
        this.updateForm.get('name').setValue(this.user.name);
        this.updateForm.get('cpr').setValue(this.user.cpr);
        this.updateForm.get('diagnose').setValue(this.user.diagnose);
        this.updateForm.get('condition').setValue(this.user.condition);
        this.updateForm.get('email').setValue(this.user.email);
        this.updateForm.get('phone').setValue(this.user.phone);
        this.updateForm.get('excercises').setValue(this.user.excercises);
     });
    });
  }

  updateUser(name: any, cpr: any, diagnose: any, condition: any, email: any, phone: any, excercises: any){
    this.userService.updateUser(this.id, name, cpr, diagnose, condition, email, phone, excercises).subscribe (() =>{
      this.snackBar.open('User updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

  // EXCERCISES


  fetchExcercises() {
    this.excerciseService
    .getExcercises()
    .subscribe ((data : Excercise []) => {
      this.excercises = data;
      console.log('Data requested ...');
      console.log (this.excercises);
    });
  }

  editExcercise(id){
    this.router.navigate([`/editEx/${id}`]);
  }

  deleteExcercise(id){
    this.excerciseService.deleteExcercise(id).subscribe(() => {
      this.fetchExcercises ();
    });
  }

  addExcerciseToUser(id){
    const userId = this.user._id;
    const user = JSON.parse(JSON.stringify(this.user)) as User;
    user.excercises = user.excercises as [Excercise]
    const apiUser = {
      ...user,
      id: userId,
      excercises: user.excercises.map(e => {
        e = e as Excercise;
          return e._id;
      })
    };
    if(!apiUser.excercises.includes(id)){
    apiUser.excercises.push(id);
    this.userService.updateUser(apiUser.id, apiUser.name, apiUser.cpr, apiUser.diagnose, apiUser.condition, apiUser.email, apiUser.phone, apiUser.excercises).subscribe(() => {
      this.fetchUser();
    });
  }
  }

  deleteExcerciseToUser(id){
    const userId = this.user._id;
    const user = JSON.parse(JSON.stringify(this.user)) as User;
    user.excercises = user.excercises as [Excercise]
    const apiUser = {
      ...user,
      id: userId,
      excercises: user.excercises.map(e => {
        e = e as Excercise;
          return e._id;
      })
    };
    const currentEx = apiUser.excercises.indexOf(id);
    apiUser.excercises.splice(currentEx,1);
    this.userService.updateUser(apiUser.id, apiUser.name, apiUser.cpr, apiUser.diagnose, apiUser.condition, apiUser.email, apiUser.phone, apiUser.excercises).subscribe(() => {
      this.fetchUser();
    });
  }

   myFunction() {
    this.show = !this.show;
   }

   chartLogic() {
   
   }
}