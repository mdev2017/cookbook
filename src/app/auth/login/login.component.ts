import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'cb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isPasswordType = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(authenticated => {
      authenticated && this.navigateByDefault();
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.loginForm.value)
      .then(() => {
        this.navigateByDefault();
      });
  }

  private navigateByDefault() {
    this.router.navigate(['/']);
  }
}
