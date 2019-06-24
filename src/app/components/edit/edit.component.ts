import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar} from '@angular/material'
import{ UserService } from '../../user.service';
import { User } from '../../user.module';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  user: any = {};
  updateForm: FormGroup;

  constructor(private userService: UserService, private router:Router, private route:ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
   this.createForm();
  }
  
  createForm() {

    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      cpr: '',
      diagnose: '',
      condition: '', 
      email: '',
      phone: ''
     });
  }

  ngOnInit() {
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
     });
    });
  }

  updateUser(name, cpr, diagnose, condition, email, phone,){
    this.userService.updateUser(this.id, name, cpr, diagnose, condition, email, phone,).subscribe (() =>{
      this.snackBar.open('User updated successfully', 'OK', {
        duration: 3000
      });
    });
  }



}
