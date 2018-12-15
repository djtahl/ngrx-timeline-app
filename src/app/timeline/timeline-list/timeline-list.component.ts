import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../redux/app.reducer';
import { Item } from '../../../redux/item/item.model';
import { getVisibleItems } from '../../../redux/item/item.selectors';

@Component({
  selector: 'tml-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['timeline-list.component.scss']
})
export class TimelineListComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private store: Store<AppState>,
  ) {
    this.readItemsState();
  }

  ngOnInit() {
  }

  private readItemsState() {
    this.store.select(getVisibleItems)
    .subscribe(items => {
      this.items = items;
    });
  }
}
