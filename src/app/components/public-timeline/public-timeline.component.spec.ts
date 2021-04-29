import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTimelineComponent } from './public-timeline.component';

describe('PublicTimelineComponent', () => {
  let component: PublicTimelineComponent;
  let fixture: ComponentFixture<PublicTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
