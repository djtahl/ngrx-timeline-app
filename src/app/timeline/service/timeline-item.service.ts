import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITimelineItem } from '../model/timeline-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineItemService {
  private _url = '/assets/timeline-items.json';

  constructor( private http: HttpClient) { }

  getItems(): Observable<ITimelineItem[]> {
    return this.http.get<ITimelineItem[]>(this._url);
  }
}
