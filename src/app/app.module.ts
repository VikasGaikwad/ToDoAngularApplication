// BrowserModule is used to showing the content on browser.
// NgModule is use to import the created components and othe modules.
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpService} from '../app/http.service';
import { HttpClientModule } from '@angular/common/http';





// AppComponent is import for loaing components in @NgModel from app.component.ts
// LoginComponent is import for loaing components in @NgModel from login/login.component.ts
// RegisterComponent is import for loaing components in @NgModel from register/register.component.ts
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { FormFieldErrorExample } from './login/login.component';


// MatFormFieldModule container is imported to designinfg forms in login and registration page
// used to set styles such as the underline, floating label, and hint messages.

// @NgModule is used to load the components.
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
   // importing MatFormFieldModule manually.
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  // bootstrap:[AppComponent] is used to run AppComponent.
  providers: [HttpService],
  bootstrap: [AppComponent]
})

// this class is available to import in another place, in main.ts we can import it.
export class AppModule { }
