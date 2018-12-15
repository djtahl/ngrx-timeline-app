import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';
import { Item } from './../../redux/item/item.model';
import * as ItemActions from '../../redux/item/item.actions';

@Component({
  selector: 'tml-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  constructor(
    private store: Store<AppState>,
  ) {
    this.populateItems();
    this.updateItems();
  }

  private populateItems() {
    const items: Item[] = JSON.parse(localStorage.getItem('ngrx-timeline') || '[]');
    this.store.dispatch(new ItemActions.PopulateItemsAction(items));
  }

  private updateItems() {
    this.store.select('items')
    .subscribe(items => {
      localStorage.setItem('ngrx-timeline', JSON.stringify(items));
    });
  }

}
