import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tml-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() timelineItem;
  isEditable = false;

  timelineForm = this.fb.group({
    'name': ['', Validators.required],
    'description': ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  onSubmit() {
    // TODO: update ngrx store here through action to the reducer
    console.warn(this.timelineForm.value);
    this.isEditable = !this.isEditable;
  }

  editItem(item) {
    this.isEditable = !this.isEditable;
    this.timelineForm.get('name').setValue(item.title);
    this.timelineForm.get('description').setValue(item.body);
  }
}
