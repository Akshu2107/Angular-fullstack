import { Component } from '@angular/core';
import User from '../types/user';
import { UserService } from '../services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgFor,FormsModule],
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

  getEmployee() {
    this.userservice.getUsers().subscribe((result: User[]) => {
      console.log(result)
      this.users = result;
    })
  }

}
