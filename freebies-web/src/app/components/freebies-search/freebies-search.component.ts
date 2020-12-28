import { Component, OnInit } from '@angular/core';
import {FreebiesService} from '../../services/freebies.service';

@Component({
  selector: 'app-freebies-search',
  templateUrl: './freebies-search.component.html',
  styleUrls: ['./freebies-search.component.scss']
})
export class FreebiesSearchComponent implements OnInit {
  items: any;
  filter: any;

  platformOptions = [
    'pc', 'steam', 'epic-games-store',
    'ubisoft', 'gog', 'itchio', 'ps4',
    'xbox-one', 'switch', 'android', 'ios',
    'vr', 'battlenet', 'origin', 'drm-free'
  ];

  giveawayTypeOptions = [
    'game', 'loot', 'beta'
  ];

  constructor(private service: FreebiesService) { }

  ngOnInit() {
    this.filter = {
      platform: '',
      type: ''
    };

    this.loadItems();
    this.service.items$.subscribe(items => this.items = items);
  }

  addFavorite(item: any) {
    this.service.addFavorite(item);
  }

  changePlatform(platform: string) {
    this.filter.platform = platform;
    this.loadItems();
  }

  loadItems() {
    this.service.loadItems(this.filter);
  }

  changeType(type: string) {
    this.filter.type = type;
    this.loadItems();
  }
}
