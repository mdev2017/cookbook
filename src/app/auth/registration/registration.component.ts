import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService } from '../login/login.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'cb-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private loginService: LoginService,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit() {
  }

  register() {
    this.registrationService.register(this.registrationForm.value);
  }

}
