import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { CollectionReference } from '@firebase/firestore-types';

@Component({
  selector: 'cb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(authenticated => {
      authenticated && this.navigateByDefault();
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
