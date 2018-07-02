import { NgModule } from '@angular/core';

import { CookbookRoutingModule } from './cookbook-routing.module';

import { CookbookComponent } from './cookbook.component';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';

@NgModule({
    imports: [
      CookbookRoutingModule,
    ],
    declarations: [
      CookbookComponent,
      NavigationMenuComponent,
    ],
})
export class CookbookModule {}
