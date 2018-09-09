import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'cb-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isPasswordType = true;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(authenticated => {
      authenticated && this.navigateByDefault();
    });

    this.signUpForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp() {
    this.isLoading = true;
    this.authService.signUp(this.signUpForm.value)
      .then(() => {
        this.isLoading = false;
        this.navigateByDefault();
      })
      .catch(() => this.isLoading = false);
  }

  private navigateByDefault() {
    this.router.navigate(['/']);
  }
}
