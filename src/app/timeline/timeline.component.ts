import { Component, OnInit } from '@angular/core';
import { TimelineItemService } from './service/timeline-item.service';

@Component({
  selector: 'tml-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timelineItems$ = this.timelineItemService.getItems();

  constructor(private timelineItemService: TimelineItemService) { }

  ngOnInit() {
  }

}
