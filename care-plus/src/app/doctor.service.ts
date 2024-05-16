import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/doctor";

  constructor(private http : HttpClient) { }


  
  listDoctor():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.baseURL}`);
  }

  getDoctorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }
}

