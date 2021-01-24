import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-freebies-list',
  templateUrl: './freebies-list.component.html',
  styleUrls: ['./freebies-list.component.scss']
})
export class FreebiesListComponent implements OnInit {
  @Input('cards')
  cards = true;

  @Input('items')
  items: any;

  @Output('delete')
  deleteEmitter = new EventEmitter<string>();

  @Output('bookmark')
  bookmarkEmitter = new EventEmitter<any>();

  faStar = faStar;
  faBookmark = faBookmark;

  constructor() { }

  ngOnInit() {}

}
