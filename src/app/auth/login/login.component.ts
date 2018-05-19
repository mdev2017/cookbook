import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';
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
    private loginService: LoginService,
  ) { }

  ngOnInit() {

  }

  login() {
    this.loginService.login(this.loginForm.value);
  }

  logout() {
    this.loginService.logout();
  }

}