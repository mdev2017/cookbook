import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginService } from './login/login.service';
import { RegistrationService } from './registration/registration.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
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
