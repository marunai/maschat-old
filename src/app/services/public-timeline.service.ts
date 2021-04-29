import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class PublicTimelineService {
  private apiUrl = 'https://worst-friends.chat/api/v1/timelines/public'; 

  constructor( private http: HttpClient,) { }

  getTimeline(): Observable<Status[]> {
    console.log("api");
    return this.http.get<Status[]>(this.apiUrl);
  }
}
