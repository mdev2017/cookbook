import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService) {}
}
