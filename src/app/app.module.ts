import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicTimelineComponent } from './components/public-timeline/public-timeline.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReversePipe } from './pipes/reverse.pipe';
import { AuthGuard } from './guards/auth.guard';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LocalTimelineComponent } from './components/local-timeline/local-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicTimelineComponent,
    ReversePipe,
    TimelineComponent,
    LocalTimelineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
