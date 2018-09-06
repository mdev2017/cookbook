import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookbookRoutingModule } from './cookbook-routing.module';

import { CookbookComponent } from './cookbook.component';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { SideNavigationMenuComponent } from '../side-navigation-menu/side-navigation-menu.component';

@NgModule({
    imports: [
      BrowserModule,
      CookbookRoutingModule,
    ],
    declarations: [
      CookbookComponent,
      NavigationMenuComponent,
      SideNavigationMenuComponent,
    ],
})
export class CookbookModule {}
