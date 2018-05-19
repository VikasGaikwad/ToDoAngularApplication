// BrowserModule is used to showing the content on browser.
// NgModule is use to import the created components and othe modules.

// Making Material Design components available in our application is done by importing
// modules in app.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule} from './app-routing.module';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpService} from '../app/http.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {CanActivate} from '@angular/router';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {FormGroup} from '@angular/forms';

// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
// AppComponent is import for loaing components in @NgModel from app.component.ts
// LoginComponent is import for loaing components in @NgModel from login/login.component.ts
// RegisterComponent is import for loaing components in @NgModel from register/register.component.ts

import { LabelService } from './service/label.service';
import { NoteserviceService } from './service/noteservice.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotesComponent } from './component/notes/notes.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { HomeComponent } from './component/home/home.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { RemindersComponent } from './component/reminders/reminders.component';
import { AuthGuard } from './auth/AuthGuard';
import { LabelNavComponent } from './component/label-nav/label-nav.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { UploadService } from './service/upload.service';
import { UserService } from './service/user.service';
import { CollaboratorService } from './service/collaborator.service';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { ColorToolDirective } from './color-tool.directive';
 import { CommonCodeComponent } from './component/common-code/common-code.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AlwaysLogginAuthGuard} from './auth/AuthGuard';
import { LabelNoteComponent } from './component/label-note/label-note.component';
import { LabeledNoteFilterPipe } from './labeled-note-filter.pipe';
import { NoteFilterPipe } from './note-filter.pipe';
// import { ArchiveFilterPipe } from './archive-filter.pipe';
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
    RemindersComponent,
    LabelNavComponent,
    CollaboratorComponent,
    UpdatenoteComponent,
    ColorToolDirective,
    CommonCodeComponent,
    SearchFilterPipe,
    LabelNoteComponent,
    LabeledNoteFilterPipe,
    NoteFilterPipe,
    // ArchiveFilterPipe
  ],
  imports: [
    CommonModule,
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
    MatChipsModule,
    MatDialogModule,
    ShowHidePasswordModule.forRoot(),
    // MatDialogRef


  ],
  // bootstrap:[AppComponent] is used to run AppComponent.
  // entry component used to display dialog box.
  entryComponents: [LabelNavComponent, CollaboratorComponent, UpdatenoteComponent],
  providers: [
    HttpService, AuthGuard, LabelService, UploadService, NoteserviceService, UserService, CollaboratorService],
  bootstrap: [AppComponent]
})

// this class is available to import in another place, in main.ts we can import it.
export class AppModule { }
