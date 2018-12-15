import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './../../redux/app.reducer';

import { TimelineRoutingModule, timelineRoutingComponents } from './timeline-routing.module';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { NewTimelineComponent } from './new-timeline/new-timeline.component';
import { ItemsCounterComponent } from './items-counter/items-counter.component';

@NgModule({
  declarations: [
    timelineRoutingComponents,
    NewTimelineComponent,
    TimelineItemComponent,
    ItemsCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    TimelineRoutingModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class TimelineModule { }
