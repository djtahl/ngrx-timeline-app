import { Item } from './item.model';
import * as ItemActions from './item.actions';

const initialState: Item[] = [];

export function ItemsReducer(state: Item[] = initialState, action: ItemActions.ItemActionType) {
  switch (action.type) {
    case ItemActions.ADD_ITEM: {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text
        }
      ];
    }
    case ItemActions.POPULATE_ITEMS: {
      return action.items;
    }
    case ItemActions.DELETE_ITEM: {
      return state.filter(item => action.id !== item.id);
    }
    case ItemActions.UPDATE_ITEM: {
      return state.map(item => {
        if (action.id === item.id) {
          return {
            ...item,
            text: action.text,
            title: action.title
          };
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
}
