import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { ExcerciseService } from '../../excercise.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private userService: UserService , private fb: FormBuilder, private router:Router) {

    this.createForm = this.fb.group({
      name: ['', Validators.required],
      cpr: '',
      diagnose: '',
      condition: '', 
      email: '',
      phone: '',
      dizzyness:''
    });

   }

  
 addUser(name, cpr, diagnose, condition, email, phone){
  this.userService.addUser(name, cpr, diagnose, condition, email, phone). subscribe(() => {
    this.router.navigate(['/list']);
  });
}

  ngOnInit() {
  }

}
