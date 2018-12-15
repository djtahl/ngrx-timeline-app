import { Action } from '@ngrx/store';
import { Item } from './item.model';

export const ADD_ITEM    = '[ITEM] add';
export const DELETE_ITEM = '[ITEM] delete';
export const UPDATE_ITEM = '[ITEM] update';
export const POPULATE_ITEMS  = '[ITEM] populate';

export class AddItemAction implements Action {
  readonly type = ADD_ITEM;
  public id: number;

  constructor(
    public title: string,
    public text: string,
  ) {
    this.id = Math.random();
  }
}

export class PopulateItemsAction implements Action {
  readonly type = POPULATE_ITEMS;

  constructor(
    public items: Item[]
  ) {}
}

export class DeleteItemAction implements Action {
  readonly type = DELETE_ITEM;

  constructor(
    public id: number
  ) {}
}

export class UpdateAction implements Action {
  readonly type = UPDATE_ITEM;

  constructor(
    public id: number,
    public title: string,
    public text: string,
  ) {}
}

export type ItemActionType =
AddItemAction |
PopulateItemsAction |
DeleteItemAction |
UpdateAction;
