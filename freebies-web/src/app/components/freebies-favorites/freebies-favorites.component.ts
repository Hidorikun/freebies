import { Component, OnInit } from '@angular/core';
import {FreebiesService} from '../../services/freebies.service';

@Component({
  selector: 'app-freebies-favorites',
  templateUrl: './freebies-favorites.component.html',
  styleUrls: ['./freebies-favorites.component.scss']
})
export class FreebiesFavoritesComponent implements OnInit {
  items: any;

  constructor(private service: FreebiesService) { }

  ngOnInit() {
      this.service.loadFavorites();
      this.service.favoriteItems$.subscribe(items => this.items = items);
  }

  delete(id: string) {
    this.service.delete(id);
  }
}
