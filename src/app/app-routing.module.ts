import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicTimelineComponent } from './components/public-timeline/public-timeline.component';

const routes: Routes = [
  { path: 'timelines/public', component: PublicTimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
