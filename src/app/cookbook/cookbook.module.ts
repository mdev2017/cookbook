import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookbookRoutingModule } from './cookbook-routing.module';

import { CookbookComponent } from './cookbook.component';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { OutsideDirective } from '../directives/outside.directive';

@NgModule({
    imports: [
      BrowserModule,
      CookbookRoutingModule,
    ],
    declarations: [
      CookbookComponent,
      NavigationMenuComponent,
      OutsideDirective,
    ],
})
export class CookbookModule {}
