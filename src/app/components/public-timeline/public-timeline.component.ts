import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Status } from '../../interfaces/status';
import { PublicTimelineService } from '../../services/public-timeline.service';

@Component({
  selector: 'app-public-timeline',
  templateUrl: './public-timeline.component.html',
  styleUrls: ['./public-timeline.component.css']
})
export class PublicTimelineComponent implements OnInit {
  timeline: Status[] = [];

  constructor(private publicTimelineService: PublicTimelineService) { }

  ngOnInit(): void {
    this.getTimeline();
  }

  getTimeline(): void {
    this.publicTimelineService.getTimeline()
      .subscribe(timeline => this.timeline = timeline);
  }

  onClick(id: number) {
    /* show menu */
  }
}
