import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent } from './components/timeline/timeline.component';
import { PublicTimelineComponent } from './components/public-timeline/public-timeline.component';
import { LocalTimelineComponent } from './components/local-timeline/local-timeline.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelineComponent,
    children: [
      {path: '**', redirectTo: 'public'},
      {path: 'public', component: PublicTimelineComponent, pathMatch: 'full'},
      {path: 'local', component: LocalTimelineComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
