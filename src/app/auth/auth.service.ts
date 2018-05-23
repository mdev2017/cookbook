import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

  login({ email, password }) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        localStorage.setItem('token', data.refreshToken);
      });
  }

  logout() {
    return this.firebaseAuth.auth.signOut().then(() => {
      localStorage.removeItem('token');
    });
  }

  signUp({ email, password }) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
