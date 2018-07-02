import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'cb-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  currentYear: number;

  constructor(authService: AuthService, router: Router) {
    authService.isAuthenticated
      .subscribe(authenticated => {
        authenticated && router.navigate(['/recipes']);
      });
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
