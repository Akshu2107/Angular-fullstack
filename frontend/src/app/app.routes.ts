import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './component/signup/signup.component';
import { UpdateuserComponent } from './component/updateuser/updateuser.component';


export const routes: Routes = [
  {path:"", component:UserComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
   {path:"update/:id", component:UpdateuserComponent}
];
