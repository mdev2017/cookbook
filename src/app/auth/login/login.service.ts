import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }

  login({ email, password }) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        localStorage.setItem('user', JSON.stringify(data.user));
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    localStorage.setItem('user', '');
  }
}