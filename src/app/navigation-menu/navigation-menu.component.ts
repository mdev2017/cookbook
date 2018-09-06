import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'cb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  isSideMenuVisible = false;
  menuLinks = [
    {
      path: '/recipes',
      name: 'Recipes',
    },
    {
      path: '/menu',
      name: 'Weekly Menu',
    },
    {
      path: '/grocery',
      name: 'Grocery',
    },
  ];
  isSidebar = false;

  constructor(private authService: AuthService) { }

  ngOnInit() { }
}
