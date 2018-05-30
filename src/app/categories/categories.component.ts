import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Category } from './category.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'cb-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories();
  }

}
