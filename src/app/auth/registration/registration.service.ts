import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  constructor(private firebaseAuth: AngularFireAuth) {
   }

  register({ email, password }) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
