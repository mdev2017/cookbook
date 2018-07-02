import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

import { CookbookComponent } from './cookbook.component';
import { CategoriesComponent } from '../categories/categories.component';
import { MenuComponent } from '../menu/menu.component';
import { GroceryComponent } from '../grocery/grocery.component';

const routes: Routes = [
    {
        path: 'recipes',
        component: CookbookComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: CategoriesComponent },
        ],
    },
    {
        path: 'menu',
        component: CookbookComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: MenuComponent },
        ],
    },
    {
        path: 'grocery',
        component: CookbookComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: GroceryComponent },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookbookRoutingModule {}
