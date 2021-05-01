import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTimelineComponent } from './local-timeline.component';

describe('LocalTimelineComponent', () => {
  let component: LocalTimelineComponent;
  let fixture: ComponentFixture<LocalTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
