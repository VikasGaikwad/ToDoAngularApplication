// BrowserModule is used to showing the content on browser.
// NgModule is use to import the created components and othe modules.

// Making Material Design components available in our application is done by importing
// modules in app.module.ts

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpService} from '../app/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';













// AppComponent is import for loaing components in @NgModel from app.component.ts
// LoginComponent is import for loaing components in @NgModel from login/login.component.ts
// RegisterComponent is import for loaing components in @NgModel from register/register.component.ts
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { RemindersComponent } from './reminders/reminders.component';
// import { HomeNewComponent } from './home-new/home-new.component';


// MatFormFieldModule container is imported to designinfg forms in login and registration page
// used to set styles such as the underline, floating label, and hint messages.

// @NgModule is used to load the components.
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotesComponent,
    ForgotComponent,
    ResetpasswordComponent,
    HomeComponent,
    TrashComponent,
    ArchiveComponent,
    RemindersComponent

  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    MatChipsModule

  ],
  // bootstrap:[AppComponent] is used to run AppComponent.
  providers: [HttpService],
  bootstrap: [AppComponent]
})

// this class is available to import in another place, in main.ts we can import it.
export class AppModule { }
