import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/doctor/all";

  constructor(private httpClient : HttpClient) { }

  
  listDoctor():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
}

