import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NotesComponent} from './notes/notes.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';



// redirectTo will redirect the first page to login page by default
// path :'login' will redirect to LoginComponent in login.component.ts file.
// path : 'register' will redirect to RegisterComponent to register.component.ts file.
const routes: Routes = [
  {path : '' , redirectTo : 'login', pathMatch : 'full'},
{path : 'login' , component : LoginComponent},
{path : 'register', component : RegisterComponent},
{path : 'notes', component : NotesComponent},
{path : 'forgot', component : ForgotComponent},
{ path : 'resetpassword', component : ResetpasswordComponent },
{path : 'home' , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
