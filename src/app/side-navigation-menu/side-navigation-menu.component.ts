import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'cb-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent implements OnInit {
  @Input() menuLinks;
  @Input() isVisible: boolean;
  @Output() isVisibleChange = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  hideSideNavMenu() {
    this.isVisibleChange.emit(false);
  }
}
