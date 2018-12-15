import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Item } from './item.model';

export const getState  = (state: AppState) => state;
export const getFilter = (state: AppState) => state.filter;
export const getItems  = (state: AppState) => state.items;

export const getVisibleItems = createSelector(
  getItems,
  getFilter,
  (items: Item[], filter: string) => {
    switch (filter) {
      default:
      case 'SHOW_ALL':
        return items;
    }
  }
);
