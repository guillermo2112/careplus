import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../entities/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/doctor";

  constructor(private httpClient : HttpClient) { }


  
  listDoctor():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}/all`);
  }


  createDoctor(doctor:Doctor) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,doctor);

}

  getDoctorId(id: number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`);
  }

  updateDoctor(id:number, doctor:Doctor) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, doctor);
  }

  
}

