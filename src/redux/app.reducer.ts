import { ActionReducerMap } from '@ngrx/store';

import { ItemsReducer } from './item/item.reducer';
import { FilterReducer } from './filter/filter.reducer';
import { Item } from './item/item.model';

export interface AppState {
  items: Item[];
  filter: string;
}

export const rootReducer: ActionReducerMap<AppState> = {
  items: ItemsReducer,
  filter: FilterReducer
};
