import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../entities/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) {
  }

  getAppointmentByDoctorYCalendar(doctorid:number,calendarid:number):Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/api/appointment/doctor/${doctorid}/calendar/${calendarid}`);
  }
  getAppointmentByDoctor(doctorid:number):Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/api/appointment/doctor/${doctorid}`);

  }
}
