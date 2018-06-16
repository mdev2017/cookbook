import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './signup/signup.component';
import { AuthService } from './auth.service';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatInputModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    LoginComponent,
    SignUpComponent,
  ],
})
export class AuthModule { }
