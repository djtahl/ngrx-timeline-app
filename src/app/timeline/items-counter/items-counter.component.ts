import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../../redux/app.reducer';

@Component({
  selector: 'tml-items-counter',
  templateUrl: './items-counter.component.html'
})
export class ItemsCounterComponent implements OnInit {

  countItems: number;
  showFooter: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.readItemsState();
  }

  ngOnInit() {
  }

  private readItemsState() {
    this.store.select('items')
    .subscribe(items => {
      this.countItems = items.length;
      this.showFooter = items.length > 0;
    });
  }

}
