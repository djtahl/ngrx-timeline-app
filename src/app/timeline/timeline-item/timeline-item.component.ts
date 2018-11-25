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
  action = null;

  timelineForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  onSubmit() {
    if (this.action === 'update') {
      this.isEditable = !this.isEditable;
      console.log('update');
      console.warn(this.timelineForm.value);
      /* this.employeeService.updateEmployee(this.formData);
      this.msgs.push({ severity: 'success', summary: 'Thank You', detail: 'User has been updated successfully.' }); */
    } else {
      console.log('create');
      /* this.employeeService.insertEmployee(this.formData);
      this.msgs.push({ severity: 'success', summary: 'Thank You', detail: 'User has been registered successfully.' });*/
    }
    // TODO: update ngrx store here through action to the reducer
  }

  editItem(item) {
    this.isEditable = !this.isEditable;
    this.action = 'update';
    this.timelineForm.get('name').setValue(item.title);
    this.timelineForm.get('description').setValue(item.body);
  }
}
