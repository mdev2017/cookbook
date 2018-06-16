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
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.authService.signUp(this.signUpForm.value)
      .then(() => {
        this.navigateByDefault();
      });
  }

  private navigateByDefault() {
    this.router.navigate(['/']);
  }
}
