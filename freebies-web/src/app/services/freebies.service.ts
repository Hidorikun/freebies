import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreebiesService {

  constructor(private http: HttpClient) { }

  favoriteItems$ = new BehaviorSubject<any>([]);
  items$ = new BehaviorSubject<any>([]);

  loadItems(filter: any) {
    this.http.post<any>('/api/items', filter)
      .subscribe(items => {
        if (items.status !== undefined) {
          this.items$.next([]);
        } else {
          this.items$.next(items);
        }
      });
  }

  loadFavorites() {
    this.http.get('/api/favorites')
      .subscribe(favorites => this.favoriteItems$.next(favorites));
  }

  delete(id: string) {
    this.http.delete(`/api/favorites/${id}`)
      .subscribe(() => this.loadFavorites());
  }

  addFavorite(item: any) {
    this.http.post<any>('/api/favorites', item)
      .subscribe(() => this.loadFavorites());
  }
}
