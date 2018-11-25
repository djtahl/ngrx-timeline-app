import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { TimelineRoutingModule, timelineRoutingComponents } from './timeline-routing.module';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { TimelineItemService } from './service/timeline-item.service';

@NgModule({
  declarations: [
    timelineRoutingComponents,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    TimelineRoutingModule,
  ],
  providers: [TimelineItemService]
})
export class TimelineModule { }
