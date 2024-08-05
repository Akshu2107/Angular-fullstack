import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import User from '../../types/user';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-updateuser',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css',
  providers: [UserService]
})
export class UpdateuserComponent {
  user: User = { _id: '', name: '', email: '', mobno: '', country: '' };
  userid: any;
  userForm: any;
  // user: any;

  name: string = '';
  email: string = '';
  mobno: string = '';
  country: string = '';

  constructor() {
  }
  route = inject(ActivatedRoute);
  userservice = inject(UserService);
  router = inject(Router);

  ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('id');
    if (this.userid) {
      this.userservice.getUser(this.userid).subscribe((result) => {
        if (Array.isArray(result) && result.length > 0) {
          this.user = result[0]; // Access the first item if result is an array
        } else {
          this.user = result; // Otherwise, assume result is an object
        }
        console.log('User fetched:', this.user);
      }, (error) => {
        console.error('Error fetching user:', error);
      });
    }
  }

  updateuser() {
    if (this.userid) {
      this.userservice.updateData(this.userid, this.user).subscribe((result: any) => {
        console.log('User updated:', result);
        this.router.navigate(['/']);
      });

    }
  }

}


