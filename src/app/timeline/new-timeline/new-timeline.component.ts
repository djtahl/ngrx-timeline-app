import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../redux/app.reducer';
import * as ItemActions from '../../../redux/item/item.actions';

@Component({
  selector: 'tml-new-timeline',
  templateUrl: './new-timeline.component.html'
})
export class NewTimelineComponent implements OnInit {

  addTimelineForm = this.fb.group({
    title: ['', Validators.required],
    text: ['']
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  saveItem() {
    if (this.addTimelineForm.valid) {
      const title: string = this.addTimelineForm.value.title;
      const text: string = this.addTimelineForm.value.text;
      const action = new ItemActions.AddItemAction(title.trim(), text);
      this.store.dispatch(action);
      this.addTimelineForm.reset();
    }
  }

}
