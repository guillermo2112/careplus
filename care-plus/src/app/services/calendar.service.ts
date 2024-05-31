import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../entities/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private baseURL = 'http://care.francecentral.cloudapp.azure.com:8080';

  constructor(private httpClient: HttpClient) {}

  listCalendar(): Observable<Calendar[]> {
    return this.httpClient.get<Calendar[]>(`${this.baseURL}/api/calendar/all`);
  }

  addCalendar(calendar: Calendar): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/api/calendar`, calendar);
  }

  updateCalendar(id: number, calendar: Calendar): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/api/calendar/${id}`, calendar);
  }

  getByYd(id: number): Observable<Calendar> {
    return this.httpClient.get<Calendar>(`${this.baseURL}/api/calendar/${id}`);
  }

  getCalendarByDoctor(doctorid:number): Observable<Calendar[]>{
    return this.httpClient.get<Calendar[]>(`${this.baseURL}/api/calendar/calendars/${doctorid}`);

  }
}
