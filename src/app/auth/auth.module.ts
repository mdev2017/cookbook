import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
  ],
  declarations: [LoginComponent],
  providers: [
    LoginService,
  ],
  exports: [
    LoginComponent,
  ],
})
export class AuthModule { }
