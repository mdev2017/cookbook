import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'cb-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  menuItems = [
    {
      link: '/recipes',
      name: 'Recipes',
    },
    {
      link: '/menu',
      name: 'Weekly Menu',
    },
    {
      link: '/grocery',
      name: 'Grocery',
    },
  ];
  isSidebar = false;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  showSidebar() {
    this.isSidebar = !this.isSidebar;
  }

  hideSidebar() {
    return this.isSidebar && (this.isSidebar = false);
  }
}
