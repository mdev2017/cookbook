import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { CollectionReference } from '@firebase/firestore-types';

@Component({
  selector: 'cb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private authService: AuthService,
  ) {}

  login() {
    this.authService.login(this.loginForm.value);
  }
}
