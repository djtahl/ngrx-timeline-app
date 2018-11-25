import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent } from './timeline.component';

const timelineRoutes: Routes = [
  { path: '', component: TimelineComponent }
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
];
