import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Status } from '../../interfaces/status';
import { LocalTimelineService } from '../../services/local-timeline.service';

@Component({
  selector: 'app-local-timeline',
  templateUrl: './local-timeline.component.html',
  styleUrls: ['./local-timeline.component.css']
})
export class LocalTimelineComponent implements OnInit {
  timeline: Status[] = [];

  constructor(private localTimelineService: LocalTimelineService) { }

  ngOnInit(): void {
    this.getTimeline();
  }

  getTimeline(): void {
    this.localTimelineService.getTimeline()
      .subscribe(timeline => this.timeline = timeline);
  }

  onClick(id: number) {
    /* show menu */
  }
}
