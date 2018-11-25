import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule, timelineRoutingComponents } from './timeline-routing.module';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    timelineRoutingComponents,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule,
  ]
})
export class TimelineModule { }
