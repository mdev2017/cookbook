import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  collection: AngularFirestoreCollection<Category>;

  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection('categories');
   }

   getCategories(): Observable<Category[]> {
    return this.collection.valueChanges();
   }
}
