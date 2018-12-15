import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';

const timelineRoutes: Routes = [
  {
    path: '', component: TimelineComponent, children: [
      { path: '', component: TimelineListComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(timelineRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TimelineRoutingModule { }

export const timelineRoutingComponents = [
  TimelineComponent,
  TimelineListComponent,
];
