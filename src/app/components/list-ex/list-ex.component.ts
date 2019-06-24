import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Excercise } from  '../../excercise.module';
import{ ExcerciseService } from '../../excercise.service';

@Component({
  selector: 'app-list-ex',
  templateUrl: './list-ex.component.html',
  styleUrls: ['./list-ex.component.css']
})
export class ListExComponent implements OnInit {

  excercises: Excercise[];
  displayedColumnsExcercise = ['name' , 'imgURI' , 'description', 'actions']; 

  constructor(private excerciseService: ExcerciseService, private router:Router) { }

  ngOnInit() {
    
    this.fetchExcercises();
  }

  //EXCERCISE METHODS

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


  
}
