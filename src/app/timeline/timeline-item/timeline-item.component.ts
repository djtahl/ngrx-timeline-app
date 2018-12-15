import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../redux/app.reducer';
import { Item } from '../../../redux/item/item.model';
import * as ItemActions from '../../../redux/item/item.actions';

@Component({
  selector: 'tml-timeline-item',
  templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent implements OnInit {

  @Input() item: Item;
  editing: boolean;

  timelineForm;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.timelineForm = this.fb.group({
      title: [ this.item.title, Validators.required ],
      text: [ this.item.text ]
    });
  }

  updateText() {
    if (this.timelineForm.valid && this.editing) {
      const id = this.item.id;
      const newTitle: string = this.timelineForm.value.title;
      const newText: string = this.timelineForm.value.text;
      const action = new ItemActions.UpdateAction(id, newTitle.trim(), newText);
      this.store.dispatch(action);
      this.editing = false;
    }
  }

  activeEditMode() {
    this.editing = true;
  }

  deleteItem() {
    const id = this.item.id;
    const action = new ItemActions.DeleteItemAction(id);
    this.store.dispatch(action);
  }

}
