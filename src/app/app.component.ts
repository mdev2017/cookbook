import { Component } from '@angular/core';
import { LoginService } from './auth/login/login.service';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(public loginService: LoginService) {}
}
