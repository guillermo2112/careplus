import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../entities/hospital.model';

@Injectable({
  providedIn: 'root'
})

export class HospitalService {

  private baseURL = "http://care.francecentral.cloudapp.azure.com:8080/api/hospital";

  constructor(private http:HttpClient) { }

  obtener_hospitales(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.baseURL}/all`);
  }

  obtener_hospital_id(id:number): Observable<Hospital> {
    return this.http.get<Hospital>(`${this.baseURL}/id/${id}`);
  }

  
  createHospital(hospital:Hospital) : Observable<Object>{
    return this.http.post(`${this.baseURL}`,hospital);

}

  updateHospital(id:number, hospital:Hospital) : Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, hospital);
  }


}
