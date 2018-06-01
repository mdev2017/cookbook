import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  isAuthenticated: Observable<boolean>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.isAuthenticated = this.user.map(user => !!user);
   }

  login({ email, password }) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  signUp({ email, password }) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
