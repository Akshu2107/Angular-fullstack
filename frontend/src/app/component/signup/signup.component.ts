// import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[UserService]
})
export class SignupComponent {

  constructor(public userservice: UserService) {

  }
  router = inject(Router);

  userData(data:any) {
    console.log(data)
    this.userservice.postUsers(data).subscribe((result) => {
      console.log(result)
      this.router.navigate(['/']);
      })
    }
  }
