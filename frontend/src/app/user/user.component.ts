import { Component } from '@angular/core';
import User from '../types/user';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../component/signup/signup.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgFor,FormsModule,RouterLink,SignupComponent,HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService]
})
export class UserComponent {
  users: User[] = [];

   constructor(private userservice: UserService) { }

  // ngOnInIt() {
  //   this.getEmployee();
  // }
refreshPage() {
   this.loadUsers();
  }
  ngOnInit() {
    this.userservice.getUsers().subscribe((result: User[]) => {
      // console.log(result)
      this.users = result;
    })
    this.loadUsers();
  }
  loadUsers() {
    this.userservice.getUsers().subscribe((result: User[]) => {
      this.users = result;
    });
  }


  deleteUser(_id: string) {
     const confirmDelete = confirm('Do you really want to delete this file?');
    if (confirmDelete) {
      this.userservice.deleteuser(_id).subscribe((result) => {
        console.log(result);
        this.loadUsers(); // Refresh the user list after deletion
      }, (error) => {
        console.error('Error deleting user:', error);
      });
    } else {
      console.log('Deletion cancelled');
    }
  }

  }


