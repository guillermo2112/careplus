
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentShift } from '../entities/AppointmentShift';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentShiftService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private httpClient : HttpClient) {

  }

  createAppointmentShift (appointmentShift:AppointmentShift) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/api/appointmentshift`,appointmentShift);

}

  listAppointmentShift():Observable<AppointmentShift[]>{
    return this.httpClient.get<AppointmentShift[]>(`${this.baseURL}/api/appointmentshift/all`);
  }


}
