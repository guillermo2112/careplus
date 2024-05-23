import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentShift } from '../entities/AppointmentShift';

@Injectable({
  providedIn: 'root'
})
export class AppointmentShiftService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) {

  }

  listAppointmentShift():Observable<AppointmentShift[]>{
    return this.httpClient.get<AppointmentShift[]>(`${this.baseURL}/api/appointmentshift/all`);
  }


}
