import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { ExcerciseService } from '../../excercise.service';


@Component({
  selector: 'app-create-ex',
  templateUrl: './create-ex.component.html',
  styleUrls: ['./create-ex.component.css']
})
export class CreateExComponent implements OnInit {

  createForm: FormGroup;

  constructor( private excerciseService: ExcerciseService , private fb: FormBuilder, private router:Router) {

   
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      imgURI:'',
      description: '',
    });
   }


   //EXCERCIVE FUNCTIONALITY
   
 addExcercise(name, imgURI, description,liked?){
  this.excerciseService.addExcercise(name, imgURI, description,liked). subscribe(() => {
    this.router.navigate(['/listEx']);
  });
}
  ngOnInit() {
  }

}
