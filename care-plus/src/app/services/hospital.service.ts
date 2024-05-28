import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../entities/Hospital';
import { Provincias } from '../entities/Provincias';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080";

  constructor(private http:HttpClient) { }

  obtener_hospitales(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.baseURL}/api/hospital/all`);
  }

  obtener_hospital_id(id:number): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.baseURL}/api/hospital/${id}`);
  }

  
  createHospital(hospital:Hospital) : Observable<Object>{
    return this.http.post(`${this.baseURL}/api/hospital`,hospital);

}

  updateHospital(id:number, hospital:Hospital) : Observable<Object>{
    return this.http.put(`${this.baseURL}/api/hospital/${id}`, hospital);
  }

  obtener_provincias(): Observable<Provincias[]> {
    return this.http.get<Provincias[]>(`${this.baseURL}/api/province/all`);
  }

}
