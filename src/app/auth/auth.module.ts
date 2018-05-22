import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { RegistrationService } from './registration/registration.service';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  providers: [
    LoginService,
    RegistrationService,
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
  ],
})
export class AuthModule { }
