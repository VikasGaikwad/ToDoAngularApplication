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
import {AuthGuard, AlwaysLogginAuthGuard} from './auth/AuthGuard';
import { LabelNavComponent } from './component/label-nav/label-nav.component';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl} from '@angular/forms';
// import { CommonCodeComponent } from './component/common-code/common-code.component';


 const routes: Routes = [
         {path : '' , redirectTo : 'login', pathMatch : 'full'},
         {path : 'register', component : RegisterComponent},
         { path : 'login' , component : LoginComponent},
         { path: 'forgotPassword', component: ForgotComponent },
         { path: 'resetpassword', component: ResetpasswordComponent },
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
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [NotesComponent, TrashComponent, ArchiveComponent, RemindersComponent,
//   LabelNavComponent];
