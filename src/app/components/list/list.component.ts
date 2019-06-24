import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from  '../../user.module';
import{ UserService } from '../../user.service';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];
  displayedColumns = ['name' , 'cpr' , 'diagnose' , 'condition', 'email','phone', 'actions']; 


  constructor(private userService: UserService ,  private router:Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService
    .getUsers()
    .subscribe ((data : User []) => {
      this.users = data;
      console.log('Data requested ...');
      console.log (this.users);
    });
  }

  editUser(id){
    this.router.navigate([`/edit/${id}`]);
  }

  selectUser(id){
    this.router.navigate([`/select/${id}`]);
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers ();
    });
  }

}
