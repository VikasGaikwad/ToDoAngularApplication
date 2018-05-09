import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {NotesComponent} from './component/notes/notes.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { HomeComponent } from './component/home/home.component';
import {TrashComponent} from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { RemindersComponent } from './component/reminders/reminders.component';
import {AuthGuard} from './auth/AuthGuard';
import { LabelNavComponent } from './component/label-nav/label-nav.component';



// redirectTo will redirect the first page to login page by default
// path :'login' will redirect to LoginComponent in login.component.ts file.
// path : 'register' will redirect to RegisterComponent to register.component.ts file.
// const routes: Routes = [
//   {path : '' , redirectTo : 'login', pathMatch : 'full'},
// {path : 'login' , component : LoginComponent},
// {path : 'register', component : RegisterComponent},
// {path : 'notes', component : NotesComponent},
// {path : 'forgot', component : ForgotComponent},
// { path : 'resetpassword', component : ResetpasswordComponent },
// {path : 'home' , component : HomeComponent,

// children: [
//   { path: '', redirectTo: 'notes', pathMatch: 'full' },
//   { path: 'notes', component: NotesComponent },
//   {path: 'trash', component: TrashComponent},
//   {path: 'archive', component: ArchiveComponent},
//   {path: 'reminder', component: RemindersComponent}

// ]
// }

// ];



const routes: Routes = [
  {path : '' , redirectTo : 'login', pathMatch : 'full'},
 {path : 'register', component : RegisterComponent},
// { path : 'resetpassword', component : ResetpasswordComponent },
 {path : 'forgot', component : ForgotComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'home' , component : HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: 'notes', component: NotesComponent },
      { path: 'trash', component: TrashComponent},
      { path: 'archive', component: ArchiveComponent},
      { path: 'reminder', component: RemindersComponent},
      { path: 'label', component: LabelNavComponent}
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
